import React, { useEffect } from 'react';
import useAppStore from '../store/useAppStore';
import { narrationScript } from '../data/narration';
import soundEngine from '../utils/audio';
import { Search, BookOpen, Sliders, Gamepad2, Trophy, ArrowRight } from 'lucide-react';

export const HomeScreen = () => {
  const { setStage } = useAppStore();

  useEffect(() => {
    soundEngine.playText(narrationScript.home_intro);
  }, []);

  const handleMascotSpeak = () => {
    soundEngine.playText(narrationScript.home_intro);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 md:p-5 overflow-hidden select-none">
      {/* Main Centered Wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full my-auto space-y-2 sm:space-y-3 md:space-y-4 max-h-full">
        
        {/* MOE Curriculum Grade 7 Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1b1040]/90 border-2 border-purple-500/70 px-4 py-1 rounded-full text-xs md:text-sm font-black text-amber-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] uppercase tracking-wider shrink-0">
          <span>🎓</span>
          <span>MOE Curriculum • Grade 7</span>
        </div>

        {/* 1. Large Two-Tone Title */}
        <div className="flex flex-col items-center leading-none shrink-0">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white font-display">
            Comparing
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-amber-400 font-display mt-0.5 drop-shadow-[0_4px_25px_rgba(255,184,0,0.75)]">
            Percentages!
          </h1>
        </div>

        {/* 2. Mascot Character Dialogue Bubble */}
        <div className="flex items-center gap-3 max-w-xl w-full justify-center shrink-0">
          {/* Circular Golden Character Avatar */}
          <button 
            onClick={handleMascotSpeak}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#181033] border-2 border-amber-400 flex items-center justify-center text-2xl md:text-3xl shadow-[0_0_20px_rgba(255,184,0,0.6)] shrink-0 hover:scale-105 transition-transform cursor-pointer"
            title="Listen narration"
          >
            🤖
          </button>

          {/* White Speech Bubble */}
          <div className="relative flex-1 bg-white text-slate-900 rounded-full px-5 py-2 md:px-7 md:py-2.5 shadow-2xl border border-slate-100 flex items-center justify-center">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-6 border-t-transparent border-r-6 border-r-white border-b-6 border-b-transparent" />
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-slate-900 text-center leading-snug">
              Ready for a percent adventure? 🚀
            </p>
          </div>
        </div>

        {/* 3. Sub-Description Paragraph */}
        <p className="text-xs sm:text-sm md:text-base font-black text-purple-100 max-w-2xl leading-relaxed px-2 shrink-0">
          Join Leo on a journey to add and subtract percentages through stories, simulations, and fun practice challenges!
        </p>

        {/* 4. "YOUR LEARNING JOURNEY" Card */}
        <div className="w-full bg-[#13082e]/95 border-2 border-purple-800/70 rounded-3xl p-3 md:p-4 shadow-2xl space-y-2 md:space-y-3 shrink-0">
          <h2 className="text-xs md:text-sm font-black uppercase tracking-widest text-amber-400 text-center">
            YOUR LEARNING JOURNEY
          </h2>

          {/* Top Row: 3 Steps (Wonder, Story, Simulate) */}
          <div className="flex items-center justify-center gap-3 md:gap-6">
            {/* Step 1: Wonder */}
            <button
              onClick={() => setStage('wonder')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-purple-400 bg-purple-950/60 text-purple-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <Search className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
              </div>
              <div className="text-left">
                <h3 className="text-xs sm:text-sm md:text-base font-black text-white group-hover:text-amber-400 transition-colors">Wonder</h3>
                <p className="text-[10px] sm:text-xs text-purple-300 font-extrabold">Spark curiosity</p>
              </div>
            </button>

            <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

            {/* Step 2: Story */}
            <button
              onClick={() => setStage('story')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-amber-400 bg-amber-950/60 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,184,0,0.5)]">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
              </div>
              <div className="text-left">
                <h3 className="text-xs sm:text-sm md:text-base font-black text-white group-hover:text-amber-400 transition-colors">Story</h3>
                <p className="text-[10px] sm:text-xs text-purple-300 font-extrabold">Hear the tale</p>
              </div>
            </button>

            <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

            {/* Step 3: Simulate */}
            <button
              onClick={() => setStage('simulate')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-emerald-400 bg-emerald-950/60 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <Sliders className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
              </div>
              <div className="text-left">
                <h3 className="text-xs sm:text-sm md:text-base font-black text-white group-hover:text-amber-400 transition-colors">Simulate</h3>
                <p className="text-[10px] sm:text-xs text-purple-300 font-extrabold">Explore & discover</p>
              </div>
            </button>
          </div>

          {/* Bottom Row: 2 Steps Centered (Practice, Reflect) */}
          <div className="flex items-center justify-center gap-4 md:gap-8 pt-0.5">
            {/* Step 4: Practice */}
            <button
              onClick={() => setStage('practice')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-400 bg-blue-950/60 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Gamepad2 className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
              </div>
              <div className="text-left">
                <h3 className="text-xs sm:text-sm md:text-base font-black text-white group-hover:text-amber-400 transition-colors">Practice</h3>
                <p className="text-[10px] sm:text-xs text-purple-300 font-extrabold">Test your skills</p>
              </div>
            </button>

            <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

            {/* Step 5: Reflect */}
            <button
              onClick={() => setStage('reflect')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-indigo-400 bg-indigo-950/60 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <Trophy className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
              </div>
              <div className="text-left">
                <h3 className="text-xs sm:text-sm md:text-base font-black text-white group-hover:text-amber-400 transition-colors">Reflect</h3>
                <p className="text-[10px] sm:text-xs text-purple-300 font-extrabold">What did you learn?</p>
              </div>
            </button>
          </div>
        </div>

        {/* 5. Glowing Golden Primary CTA Button */}
        <button
          onClick={() => setStage('wonder')}
          className="w-full max-w-sm bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xl md:text-2xl py-3 rounded-full shadow-[0_0_30px_rgba(255,184,0,0.85)] hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer font-display shrink-0"
        >
          <span>🚀 Begin Your Journey!</span>
        </button>

        {/* 6. Bottom 3 Stat Cards */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-3xl shrink-0">
          {/* Card 1 */}
          <div className="bg-[#13082e]/95 border border-purple-800/60 rounded-2xl p-2.5 flex flex-col items-center justify-center text-center space-y-0.5 shadow-lg">
            <span className="text-2xl md:text-4xl">🔢</span>
            <h4 className="text-xs md:text-base font-black text-white">Place Value</h4>
            <p className="text-[10px] md:text-xs text-purple-200 font-extrabold">H, T & O blocks</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#13082e]/95 border border-purple-800/60 rounded-2xl p-2.5 flex flex-col items-center justify-center text-center space-y-0.5 shadow-lg">
            <span className="text-2xl md:text-4xl">🧱</span>
            <h4 className="text-xs md:text-base font-black text-white">Simulations</h4>
            <p className="text-[10px] md:text-xs text-purple-200 font-extrabold">Interactive labs</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#13082e]/95 border border-purple-800/60 rounded-2xl p-2.5 flex flex-col items-center justify-center text-center space-y-0.5 shadow-lg">
            <span className="text-2xl md:text-4xl">🏆</span>
            <h4 className="text-xs md:text-base font-black text-white">10 Game Worlds</h4>
            <p className="text-[10px] md:text-xs text-purple-200 font-extrabold">XP & awards</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeScreen;
