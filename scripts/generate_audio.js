/**
 * Offline ElevenLabs narration generator.
 *
 *   npm run generate:audio               -> generate every missing .mp3 (existing files are kept, safe to re-run)
 *   npm run generate:audio -- --force    -> regenerate everything
 *   npm run generate:audio -- --map-only -> only (re)write src/utils/audioMap.js, no API calls
 *   npm run generate:audio -- --only=w3_ -> only keys that start with "w3_"
 *
 * Reads:   src/data/narration.js   (all narration lines, story slides, station intros, reflect Q&A)
 *          src/data/questionBank.js (every question prompt + hint)
 * Writes:  public/assets/audio/<key>.mp3   and   src/utils/audioMap.js
 *
 * Content policy: ONLY paragraph text and questions are narrated. Titles / headings are never narrated.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { narrationScript } from '../src/data/narration.js';
import { staticQuestionBank } from '../src/data/questionBank.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

dotenv.config({ path: path.join(ROOT, '.env.local'), quiet: true });
dotenv.config({ path: path.join(ROOT, '.env'), quiet: true });

const API_KEY = process.env.ELEVENLABS_API_KEY || process.env.VITE_ELEVENLABS_API_KEY;
const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice - Clear, Engaging Educator
const MODEL_ID = 'eleven_multilingual_v2';
const RATE_LIMIT_MS = 500;

const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const MAP_ONLY = args.includes('--map-only');
const ONLY = (args.find((a) => a.startsWith('--only=')) || '').replace('--only=', '');

const OUT_DIR = path.join(ROOT, 'public/assets/audio');
const MAP_FILE = path.join(ROOT, 'src/utils/audioMap.js');

// ---------- Voice settings per style ----------
const VOICE_STYLES = {
  celebration:   { stability: 0.12, similarity_boost: 0.45, style: 0.75, use_speaker_boost: true },
  encouragement: { stability: 0.16, similarity_boost: 0.50, style: 0.65, use_speaker_boost: true },
  question:      { stability: 0.20, similarity_boost: 0.55, style: 0.55, use_speaker_boost: true },
  emphasis:      { stability: 0.16, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true },
  thinking:      { stability: 0.24, similarity_boost: 0.60, style: 0.35, use_speaker_boost: true },
  statement:     { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true },
  instruction:   { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true },
};

function styleForKey(key) {
  if (key === 'correct_cheer' || key === 'world_complete') return 'celebration';
  if (key === 'incorrect_try_again' || key === 'out_of_hearts' || key === 'home_intro' || key === 'practice_welcome' || key === 'reflect_intro') return 'encouragement';
  if (key === 'wonder_prompt' || key === 'wonder_teaser' || /^reflect_q\d+$/.test(key)) return 'question';
  if (/^story_slide_\d+$/.test(key)) return 'statement';
  if (/^station_[a-d]_intro$/.test(key)) return 'instruction';
  if (/^w\d+_q\d+_prompt$/.test(key)) return 'question';
  if (/^w\d+_q\d+_hint$/.test(key)) return 'thinking';
  return 'statement';
}

// ---------- Make on-screen text sound right for the TTS engine ----------
const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
function numWords(n) {
  if (n < 20) return ONES[n];
  if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : '');
  if (n < 1000) return ONES[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + numWords(n % 100) : '');
  return String(n);
}
const DENOM_SINGULAR = { 2: 'half', 3: 'third', 4: 'quarter', 5: 'fifth', 6: 'sixth', 7: 'seventh', 8: 'eighth', 9: 'ninth', 10: 'tenth', 12: 'twelfth', 20: 'twentieth', 25: 'twenty-fifth', 40: 'fortieth', 50: 'fiftieth', 100: 'hundredth' };
function fractionWords(n, d) {
  const num = Number(n);
  const den = Number(d);
  const denWord = DENOM_SINGULAR[den];
  if (!denWord || num > 999) return `${n} over ${d}`;
  if (den === 2) return num === 1 ? 'one half' : `${numWords(num)} halves`;
  return `${numWords(num)} ${denWord}${num === 1 ? '' : 's'}`;
}

function sanitizeForSpeech(text) {
  return text
    // scores like "18/20" never appear in narration; real fractions are read as words
    .replace(/(\d+)\/(\d+)/g, (_, n, d) => fractionWords(n, d))
    // "an $80 jacket" -> "an 80 dollar jacket"   |   "saves $16." -> "saves 16 dollars."
    .replace(/\$(\d+(?:\.\d+)?)(?=\s+(?!(?:is|and|or|off|to|in|on|more|less|per|at|of|for|then|but|so|the|a|an|if|when)\b)[a-z])/g, '$1 dollar')
    .replace(/\$(\d+(?:\.\d+)?)/g, '$1 dollars')
    .replace(/(\d+(?:\.\d+)?)%/g, '$1 percent')
    .replace(/%/g, ' percent')
    .replace(/→/g, ' to ')
    .replace(/×/g, ' times ')
    .replace(/÷/g, ' divided by ')
    .replace(/−/g, ' minus ')
    .replace(/\+/g, ' plus ')
    .replace(/=/g, ' equals ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ---------- Collect every phrase ----------
function collectPhrases() {
  const phrases = [];
  Object.entries(narrationScript).forEach(([key, text]) => phrases.push({ key, text, style: styleForKey(key) }));
  Object.values(staticQuestionBank).forEach((questions) => {
    questions.forEach((q, i) => {
      const base = `w${q.worldId}_q${i + 1}`;
      phrases.push({ key: `${base}_prompt`, text: q.prompt, style: styleForKey(`${base}_prompt`) });
      phrases.push({ key: `${base}_hint`, text: q.hint, style: styleForKey(`${base}_hint`) });
    });
  });
  return phrases;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function synthesize(text, style, attempt = 1) {
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: { Accept: 'audio/mpeg', 'Content-Type': 'application/json', 'xi-api-key': API_KEY },
    body: JSON.stringify({ text: sanitizeForSpeech(text), model_id: MODEL_ID, voice_settings: VOICE_STYLES[style] || VOICE_STYLES.statement }),
  });
  if (response.status === 429 || response.status >= 500) {
    if (attempt <= 4) {
      const wait = 2000 * attempt;
      console.warn(`   ⏳ API busy (${response.status}), retrying in ${wait / 1000}s...`);
      await sleep(wait);
      return synthesize(text, style, attempt + 1);
    }
  }
  if (!response.ok) {
    throw new Error(`ElevenLabs API Error (${response.status}): ${await response.text()}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let phrases = collectPhrases();
  if (ONLY) phrases = phrases.filter((p) => p.key.startsWith(ONLY));

  const allPhrases = collectPhrases();
  console.log(`📋 ${allPhrases.length} narration lines found (${MAP_ONLY ? 'map only' : FORCE ? 'force regenerate' : 'missing files only'})`);

  if (!MAP_ONLY) {
    if (!API_KEY) {
      console.error('❌ No ElevenLabs API key. Add VITE_ELEVENLABS_API_KEY=... to .env.local (or set ELEVENLABS_API_KEY).');
      process.exit(1);
    }
    let done = 0, skipped = 0, failed = 0;
    const seenText = new Map(); // identical text -> first key (avoid paying twice)
    for (const { key, text, style } of phrases) {
      const file = path.join(OUT_DIR, `${key}.mp3`);
      if (seenText.has(text) && !FORCE) { skipped++; continue; }
      seenText.set(text, key);
      if (!FORCE && fs.existsSync(file) && fs.statSync(file).size > 1000) { skipped++; continue; }
      try {
        process.stdout.write(`🗣️  [${style}] ${key} ... `);
        const buf = await synthesize(text, style);
        fs.writeFileSync(file, buf);
        console.log(`✅ ${(buf.length / 1024).toFixed(0)} KB`);
        done++;
      } catch (e) {
        console.log(`❌ ${e.message}`);
        failed++;
      }
      await sleep(RATE_LIMIT_MS);
    }
    console.log(`\n🎉 Generated ${done}, skipped ${skipped}, failed ${failed}.`);
  }

  // ---------- (Re)write audioMap.js ----------
  const audioMap = {};
  const firstKeyForText = new Map();
  for (const { key, text } of allPhrases) {
    if (!firstKeyForText.has(text)) firstKeyForText.set(text, key);
    const owner = firstKeyForText.get(text);
    const ownerFile = path.join(OUT_DIR, `${owner}.mp3`);
    if (!MAP_ONLY && !fs.existsSync(ownerFile)) continue; // only reference files that really exist
    const url = `/assets/audio/${owner}.mp3`;
    audioMap[text] = url;
    audioMap[`key:${key}`] = url;
  }
  fs.writeFileSync(MAP_FILE, `// Auto-generated Audio Asset Map (do not edit by hand - run: npm run generate:audio)\nexport const audioMap = ${JSON.stringify(audioMap, null, 2)};\nexport default audioMap;\n`, 'utf-8');
  console.log(`🗺️  Wrote ${Object.keys(audioMap).length} entries to src/utils/audioMap.js`);
}

run().catch((e) => { console.error(e); process.exit(1); });
