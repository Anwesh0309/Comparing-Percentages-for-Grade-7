# Comparing Percentages — Grade 7 (Gamified Math Module)

Same architecture, UI/UX, viewport, colours and audio pipeline as the earlier modules.
Flow: **Home → Wonder → Story (4 slides) → Simulate (4 stations) → Practice (10 worlds × 10 questions) → Reflect**.

## Run

```bash
npm install        # only if node_modules is missing
npm run dev
npm run build
```

## Narration audio (ElevenLabs, voice "Alice")

The mp3 files are **not bundled** — generate them once (they are then static assets, zero latency):

```bash
npm run generate:audio            # creates every missing mp3, safe to re-run / resume
npm run generate:audio -- --force # regenerate everything
npm run generate:audio -- --only=w3_   # only keys starting with w3_
npm run clean:audio               # delete mp3 files no longer referenced
```

* API key lives in `.env.local` (`VITE_ELEVENLABS_API_KEY`). It is only read by `scripts/generate_audio.js`; the app bundle never uses it.
* Voice: Alice (`Xb7hH8MSUJpSbSDYk0k2`), model `eleven_multilingual_v2`, per-style voice settings
  (celebration / encouragement / question / emphasis / thinking / statement / instruction).
* Only paragraph text and questions are narrated — never titles or headings.
* The script reads every line from `src/data/narration.js` and `src/data/questionBank.js` (prompts + hints)
  and rewrites `src/utils/audioMap.js` automatically. `%`, `$`, fractions like `3/5` are converted to words for the voice.

### Changing a narrated line
1. Edit the text in `src/data/narration.js` (or the question bank / story slides — on-screen text and audio share the same string).
2. `npm run generate:audio` then `npm run clean:audio`.

## Content map

| Where | File |
|---|---|
| Story slides + images | `src/data/storySlides.js`, `public/assets/images/story_slide_1..4.png` |
| Narration lines | `src/data/narration.js` |
| 10 worlds / 100 questions | `src/data/worlds.js`, `src/data/questionBank.js` |
| Station A – Percent Grid Lab | `src/components/PercentGridLab.jsx` |
| Station B – Percent Sorter | `src/components/PercentSorter.jsx` |
| Station C – Deal Detective | `src/components/DealDetective.jsx` |
| Station D – Real-World Percent Lab (also used in Wonder) | `src/components/PercentRig.jsx` |
| Question diagrams | `src/components/PercentDiagramSVG.jsx` |
