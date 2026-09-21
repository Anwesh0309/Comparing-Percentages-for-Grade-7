import React, { useEffect } from 'react';
import useAppStore from '../store/useAppStore';
import PercentRig from '../components/PercentRig';
import { narrationScript } from '../data/narration';
import soundEngine from '../utils/audio';
import { Sparkles, ArrowRight } from 'lucide-react';

export const WonderStage = () => {
  const { setStage, resetWorldsProgress } = useAppStore();

  useEffect(() => {
    soundEngine.playText(narrationScript.wonder_prompt);
  }, []);

  const handleMascotSpeak = () => {
    soundEngine.playText(narrationScript.wonder_prompt);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between p-3 md:p-5 overflow-hidden select-none">
      {/* Centered Main Wonder Hook Modal Card (Matching reference screenshot) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full my-auto bg-[#160d38]/95 border-2 border-purple-800/60 rounded-[32px] p-5 md:p-6 shadow-[0_0_50px_rgba(0,0,0,0.6)] space-y-3.5">
        
        {/* Top Glowing Purple Line Indicator (Matching screenshot) */}
        <div className="w-16 h-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.9)] shrink-0" />

        {/* 1. Header Title */}
        <h1 className="text-3xl md:text-4xl font-black text-white font-display flex items-center gap-2">
          <span>🔮</span>
          <span>Wonder Hook</span>
        </h1>

        {/* 2. Robot Avatar Icon (Matching screenshot) */}
        <button
          onClick={handleMascotSpeak}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1e114a] border-2 border-emerald-400/80 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(16,185,129,0.3)] shrink-0 hover:scale-105 transition-transform cursor-pointer"
          title="Listen narration"
        >
          🤖
        </button>

        {/* 3. Interactive Compare Rig Card Container */}
        <div className="w-full bg-[#11082d]/90 border border-purple-800/60 rounded-2xl p-3 shadow-inner flex flex-col items-center justify-center relative space-y-1 shrink-0">
          <div className="w-full text-center flex items-center justify-center gap-1.5 text-xs font-black tracking-widest text-amber-400 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>PERCENT COMPARE RIG (SAME RULER)</span>
          </div>

          <div className="w-full flex items-center justify-center py-1">
            <PercentRig skin="quiz" totals={[20, 50]} editable={true} compact={true} />
          </div>
        </div>

        {/* 4. Scenario Question Text (Grade 7 Percentages Content) */}
        <div className="space-y-1 px-2">
          <p className="text-sm md:text-base lg:text-lg font-extrabold text-slate-100 leading-relaxed">
            Robo scored <span className="text-amber-300 font-black">18 out of 20</span> on Quiz A. Alex scored <span className="text-amber-300 font-black">40 out of 50</span> on Quiz B.
          </p>
          <p className="text-xs md:text-sm font-extrabold text-purple-200">
            Alex says: <span className="text-amber-300 italic">"40 is bigger than 18, so I scored better!"</span> How can we compare them fairly without losing track?
          </p>
        </div>

        {/* 5. Glowing Gold Primary CTA Button (Matching screenshot CTA button) */}
        <button
          onClick={() => setStage('story')}
          className="w-full max-w-sm bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-base md:text-lg py-3 rounded-full shadow-[0_0_25px_rgba(255,184,0,0.7)] hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer font-display"
        >
          <span>Discover the Story</span>
          <ArrowRight className="w-5 h-5 stroke-[3]" />
        </button>

      </div>

      {/* Bottom Center Reset Lesson Progress Button (Matching screenshot bottom button) */}
      <div className="relative z-10 shrink-0 pb-1 pt-2">
        <button
          onClick={() => {
            resetWorldsProgress();
            setStage('home');
          }}
          className="px-5 py-2 rounded-full bg-[#160d36]/90 hover:bg-[#231554] border border-purple-700/60 text-purple-200 hover:text-white font-extrabold text-xs md:text-sm shadow-md transition-all cursor-pointer"
        >
          Reset Lesson Progress
        </button>
      </div>

    </div>
  );
};

export default WonderStage;
