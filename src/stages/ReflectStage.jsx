import React, { useEffect, useState } from 'react';
import useAppStore from '../store/useAppStore';
import { narrationScript } from '../data/narration';
import { worldsData } from '../data/worlds';
import soundEngine from '../utils/audio';
import { Star, Check, Globe, RotateCcw } from 'lucide-react';

export const ReflectStage = () => {
  const { progress, setStage } = useAppStore();
  const [selectedTopic, setSelectedTopic] = useState(0);

  const topics = [1, 2, 3, 4, 5, 6].map((n) => ({
    id: n,
    title: `Topic ${n}${n === 1 ? ' 🔑' : ''}`,
    question: narrationScript[`reflect_q${n}`],
    answer: narrationScript[`reflect_a${n}`],
  }));

  const currentTopic = topics[selectedTopic];

  useEffect(() => {
    soundEngine.playText(narrationScript.reflect_intro);
    return () => soundEngine.stop();
  }, []);

  const handleTopicClick = (index) => {
    setSelectedTopic(index);
    const qKey = `reflect_q${index + 1}`;
    const aKey = `reflect_a${index + 1}`;
    const qText = narrationScript[qKey];
    const aText = narrationScript[aKey];
    soundEngine.playText(qText);
    soundEngine.enqueue(aText);
  };

  // 10 Worlds Icon Map
  const worldIcons = worldsData.map((w) => w.icon);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-2 sm:p-3 md:p-4 cosmic-bg overflow-hidden select-none">
      
      {/* Centered Main Workspace Grid matching SS with Scaled Grade 3 Typography & Icons */}
      <div className="my-auto w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-center">
        
        {/* Left Column: Your Performance & Badges & Mascot CTA */}
        <div className="flex flex-col items-center text-center space-y-2.5">
          
          {/* Header Title (Enlarged) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 font-display">
            Your Performance!
          </h1>

          {/* 3 Performance Stat Cards Row (Enlarged Icons & Numbers) */}
          <div className="grid grid-cols-3 gap-2 md:gap-3 w-full max-w-md">
            
            {/* Card 1: Total Stars */}
            <div className="bg-[#130E26]/90 border border-purple-800/60 p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
              <span className="text-2xl md:text-3xl">⭐</span>
              <span className="text-2xl md:text-3xl font-black text-amber-400 my-0.5">
                {progress.totalStars || 0}
              </span>
              <span className="text-[10px] md:text-xs font-black text-purple-300 uppercase tracking-wider">
                TOTAL STARS
              </span>
            </div>

            {/* Card 2: Correct Answers */}
            <div className="bg-[#130E26]/90 border border-purple-800/60 p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center">
                <Check className="w-5 h-5 stroke-[3.5]" />
              </div>
              <span className="text-2xl md:text-3xl font-black text-emerald-400 my-0.5">
                {Object.keys(progress.worldStars || {}).length * 8}
              </span>
              <span className="text-[10px] md:text-xs font-black text-purple-300 uppercase tracking-wider leading-tight">
                CORRECT ANSWERS
              </span>
            </div>

            {/* Card 3: Worlds Done */}
            <div className="bg-[#130E26]/90 border border-purple-800/60 p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
              <span className="text-2xl md:text-3xl">🌍</span>
              <span className="text-2xl md:text-3xl font-black text-cyan-400 my-0.5">
                {Object.keys(progress.worldStars || {}).length}/10
              </span>
              <span className="text-[10px] md:text-xs font-black text-purple-300 uppercase tracking-wider leading-tight">
                WORLDS DONE
              </span>
            </div>

          </div>

          {/* Badges Earned Section */}
          <div className="w-full max-w-md space-y-1.5 pt-0.5">
            <h3 className="text-base md:text-lg font-black text-white">
              Badges Earned
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-[#1A1333] border border-purple-800/60 p-2.5 rounded-2xl flex flex-col items-center justify-center gap-0.5 shadow-md">
                <span className="text-2xl text-amber-400">⭐</span>
                <span className="text-xs md:text-sm font-black text-purple-200">
                  Badge Unlocked
                </span>
              </div>
              <div className="bg-[#1A1333] border border-purple-800/60 p-2.5 rounded-2xl flex flex-col items-center justify-center gap-0.5 shadow-md">
                <span className="text-2xl text-amber-400">⭐</span>
                <span className="text-xs md:text-sm font-black text-purple-200">
                  Badge Unlocked
                </span>
              </div>
            </div>
          </div>

          {/* Mascot Speech Bubble Row */}
          <div className="flex items-center gap-2.5 pt-1 max-w-md w-full">
            <button
              onClick={() => soundEngine.playText(narrationScript.reflect_intro)}
              className="w-10 h-10 rounded-full bg-blue-600 border border-blue-400 flex items-center justify-center text-white text-xl shrink-0 shadow-lg cursor-pointer hover:scale-105 transition-transform"
              title="Listen reflection intro"
            >
              🤖
            </button>
            <div className="bg-white text-slate-900 font-extrabold text-xs md:text-sm px-3.5 py-2 rounded-2xl shadow-md text-left flex items-center gap-1.5 flex-1">
              <span>Amazing work! Let's reflect a little!</span>
              <span>📋</span>
            </div>
          </div>

          {/* Begin New Journey CTA Button */}
          <div className="pt-1">
            <button
              onClick={() => setStage('home')}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-2.5 rounded-full text-base md:text-lg shadow-[0_0_25px_rgba(255,184,0,0.6)] cursor-pointer font-display transition-transform hover:scale-105"
            >
              Begin New Journey
            </button>
          </div>

        </div>

        {/* Right Column: World Progress Grid & Time to Reflect Card */}
        <div className="flex flex-col space-y-2.5">
          
          {/* World Progress Box (2x5 Grid) */}
          <div className="bg-[#130E26]/90 border border-purple-800/60 p-3 md:p-4 rounded-3xl space-y-2 shadow-xl">
            <h2 className="text-lg md:text-xl font-black text-white text-center font-display">
              World Progress
            </h2>

            {/* 10 Worlds Grid (5 columns x 2 rows with enlarged icons & stars) */}
            <div className="grid grid-cols-5 gap-2">
              {worldIcons.map((icon, idx) => {
                const worldId = idx + 1;
                const stars = progress.worldStars[worldId] || 0;
                const isUnlocked = progress.unlockedWorlds.includes(worldId);

                return (
                  <div
                    key={idx}
                    className={`p-2 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition-all ${
                      isUnlocked
                        ? 'bg-[#1A1333] border-purple-700/60 text-white'
                        : 'bg-[#140F2A]/60 border-purple-900/40 opacity-50'
                    }`}
                  >
                    <span className="text-xl md:text-2xl">{icon}</span>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3].map((starNum) => (
                        <Star
                          key={starNum}
                          className={`w-3 h-3 ${
                            starNum <= stars
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-purple-900/60'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Time to Reflect! Card */}
          <div className="bg-[#130E26]/90 border border-purple-800/60 p-3 md:p-4 rounded-3xl space-y-2 shadow-xl">
            <h2 className="text-xl md:text-2xl font-black text-amber-400 text-center font-display">
              Time to Reflect!
            </h2>

            {/* 6 Topic Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {topics.map((t, idx) => {
                const isSelected = selectedTopic === idx;
                return (
                  <button
                    key={t.id}
                    onClick={() => handleTopicClick(idx)}
                    className={`px-3.5 py-1 rounded-full text-xs md:text-sm font-black transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 shadow-glow-gold'
                        : 'bg-[#1A1333] text-purple-300 hover:text-white border border-purple-800/60'
                    }`}
                  >
                    {t.title}
                  </button>
                );
              })}
            </div>

            {/* Selected Question */}
            <h3 className="text-xs md:text-sm lg:text-base font-black text-white text-center leading-snug px-1">
              {currentTopic.question}
            </h3>

            {/* Answer Card */}
            <div className="bg-[#0F0B1E] border border-purple-800/60 p-3 md:p-3.5 rounded-2xl text-purple-100 text-xs md:text-sm font-extrabold leading-relaxed shadow-inner">
              {currentTopic.answer}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ReflectStage;
