/**
 * Deletes every .mp3 in public/assets/audio that is no longer referenced by src/utils/audioMap.js.
 *   npm run clean:audio
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { audioMap } from '../src/utils/audioMap.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AUDIO_DIR = path.join(__dirname, '../public/assets/audio');

const referenced = new Set(Object.values(audioMap).map((url) => path.basename(url)));
if (!fs.existsSync(AUDIO_DIR)) {
  console.log('No audio folder found, nothing to clean.');
  process.exit(0);
}

let removed = 0;
for (const file of fs.readdirSync(AUDIO_DIR)) {
  if (file.endsWith('.mp3') && !referenced.has(file)) {
    fs.unlinkSync(path.join(AUDIO_DIR, file));
    console.log(`🧹 Removed orphan: ${file}`);
    removed++;
  }
}
console.log(`Done. Removed ${removed} orphaned file(s); ${referenced.size} referenced file(s) kept.`);
