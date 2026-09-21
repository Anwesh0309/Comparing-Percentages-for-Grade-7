import { audioMap } from './audioMap';

class SoundEngine {
  constructor() {
    this.currentAudio = null;
    this.audioEnabled = true;
    this.isPlaying = false;
    this.queue = [];
    this.lastClickTime = 0;
    this.sharedCtx = null;
  }

  setAudioEnabled(enabled) {
    this.audioEnabled = enabled;
    if (!enabled) {
      this.stop();
    }
  }

  stop() {
    // Stop HTML5 Audio MP3
    if (this.currentAudio) {
      this.currentAudio.onended = null;
      this.currentAudio.onerror = null;
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }

    this.isPlaying = false;
    this.queue = [];
  }

  playDragClick() {
    if (!this.audioEnabled) return;
    try {
      const now = Date.now();
      if (this.lastClickTime && now - this.lastClickTime < 45) return; // Throttled for smooth drag sound
      this.lastClickTime = now;

      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      // One shared context (creating a new one per click leaks contexts on some browsers)
      if (!this.sharedCtx) this.sharedCtx = new AudioCtx();
      const ctx = this.sharedCtx;
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(250, ctx.currentTime + 0.018);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.018);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.018);
    } catch (e) {
      // Ignore web audio errors if restricted
    }
  }

  playText(text) {
    if (!this.audioEnabled || !text) return;

    // Stop any currently playing audio to prevent overlapping
    this.stop();

    // Lookup pre-generated ElevenLabs asset in audioMap ONLY
    const audioPath = audioMap[text] || audioMap[`key:${text}`];
    if (!audioPath) {
      console.warn(`[SoundEngine] No pre-generated ElevenLabs audio found for: "${text.substring(0, 40)}..."`);
      return;
    }

    try {
      const audio = new Audio(audioPath);
      this.currentAudio = audio;
      this.isPlaying = true;

      const finish = () => {
        if (this.currentAudio !== audio) return;
        this.isPlaying = false;
        this.currentAudio = null;
        if (this.queue.length > 0) {
          const nextText = this.queue.shift();
          this.playText(nextText);
        }
      };

      audio.play().catch(err => {
        console.warn("[SoundEngine] Audio play error:", err.message);
        if (this.currentAudio === audio) {
          this.isPlaying = false;
          this.currentAudio = null;
        }
      });

      audio.onended = finish;
      audio.onerror = () => {
        console.warn(`[SoundEngine] Could not load ${audioPath}. Run "npm run generate:audio" to create the narration files.`);
        finish();
      };
    } catch (e) {
      console.error("[SoundEngine] Audio error:", e);
      this.isPlaying = false;
    }
  }

  enqueue(text) {
    if (!this.audioEnabled) return;
    if (!this.isPlaying) {
      this.playText(text);
    } else {
      this.queue.push(text);
    }
  }
}

export const soundEngine = new SoundEngine();
export default soundEngine;
