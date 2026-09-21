import React, { useEffect, useState } from 'react';
import useAppStore from '../store/useAppStore';
import PercentDiagramSVG from '../components/PercentDiagramSVG';
import { worldsData } from '../data/worlds';
import { narrationScript } from '../data/narration';
import soundEngine from '../utils/audio';
import { Heart, Flame, Star, Lock, RotateCcw, Lightbulb, ArrowLeft, RefreshCw, LogOut } from 'lucide-react';

export const PracticeStage = () => {
  const {
    activeWorldId,
    startWorldSession,
    exitWorld,
    session,
    answerQuestion,
    advanceQuestion,
    useHint,
    progress,
    setStage,
    resetWorldsProgress,
  } = useAppStore();

  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    if (!activeWorldId) {
      soundEngine.playText(narrationScript.practice_welcome);
    }
  }, [activeWorldId]);

  const currentQ = session.questions ? session.questions[session.currentIndex] : null;
  const activeWorld = worldsData.find(w => w.id === activeWorldId) || worldsData[0];

  // Trigger question prompt audio when activeWorldId or currentIndex changes
  useEffect(() => {
    if (activeWorldId && currentQ && !session.outOfHearts && !session.completed) {
      const promptKey = `w${activeWorldId}_q${session.currentIndex + 1}_prompt`;
      const promptText = narrationScript[promptKey] || currentQ.prompt;
      soundEngine.playText(promptText);
    }
  }, [activeWorldId, session.currentIndex]);

  // Trigger Out of Hearts narration
  useEffect(() => {
    if (session.outOfHearts) {
      soundEngine.playText(narrationScript.out_of_hearts);
    }
  }, [session.outOfHearts]);

  // Trigger World Complete narration
  useEffect(() => {
    if (session.completed) {
      soundEngine.playText(narrationScript.world_complete);
    }
  }, [session.completed]);

  const handleStartWorld = (worldId) => {
    setSelectedOption(null);
    setFeedback(null);
    startWorldSession(worldId);
  };

  const handleExitWorld = () => {
    setSelectedOption(null);
    setFeedback(null);
    exitWorld();
  };

  const handleOptionClick = (optionVal) => {
    if (feedback || session.completed || session.outOfHearts) return;

    setSelectedOption(optionVal);
    const result = answerQuestion(optionVal);

    if (result.isCorrect) {
      soundEngine.playText(narrationScript.correct_cheer);
      setFeedback({ isCorrect: true, explanation: currentQ.explanation });
    } else {
      soundEngine.playText(narrationScript.incorrect_try_again);
      setFeedback({ isCorrect: false, explanation: currentQ.explanation });
    }

    // Automatically switch to the next question after 1.2 seconds!
    setTimeout(() => {
      setSelectedOption(null);
      setFeedback(null);
      advanceQuestion();
    }, 1200);
  };

  const handleUseHint = () => {
    useHint();
    if (activeWorldId && currentQ) {
      const hintKey = `w${activeWorldId}_q${session.currentIndex + 1}_hint`;
      const hintText = narrationScript[hintKey] || currentQ.hint;
      soundEngine.playText(hintText);
    }
  };

  // 1. World Selector Screen: 5x2 Grid of 10 Worlds
  if (!activeWorldId) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between items-center p-2 sm:p-4 overflow-hidden select-none">
        
        {/* Header Title & Subtitle */}
        <div className="flex flex-col items-center text-center space-y-1 pt-0.5 shrink-0 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-display flex items-center gap-2.5">
            <span>🎮</span>
            <span>Practice — Choose Your World!</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-purple-200">
            Answer questions in each world. Earn stars and XP!
          </p>
        </div>

        {/* 5 Columns x 2 Rows Grid of 10 Worlds */}
        <div className="my-auto w-full max-w-5xl z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 p-1">
          {worldsData.map((world) => {
            const isUnlocked = progress.unlockedWorlds.includes(world.id);
            const qStart = (world.id - 1) * 10 + 1;
            const qEnd = world.id * 10;

            return (
              <div
                key={world.id}
                className={`relative p-3 md:p-3.5 rounded-2xl border transition-all flex flex-col items-center justify-between text-center min-h-[145px] md:min-h-[165px] ${
                  isUnlocked
                    ? 'bg-[#180e3d]/95 border-2 border-purple-500/80 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 hover:border-amber-400'
                    : 'bg-[#130a2e]/60 border border-purple-900/40 opacity-70'
                }`}
              >
                {!isUnlocked && (
                  <div className="absolute top-2 right-2 text-purple-400">
                    <Lock className="w-4 h-4" />
                  </div>
                )}

                <div className="text-4xl md:text-5xl my-0.5 shrink-0">
                  {world.icon}
                </div>

                <div className="space-y-0.5 w-full">
                  <h3 className="text-xs sm:text-sm md:text-base font-black text-white truncate leading-tight">
                    {world.title.replace(/^World \d+: /, '')}
                  </h3>
                  <p className="text-[10px] md:text-xs font-black text-purple-300">
                    Questions {qStart}–{qEnd}
                  </p>
                </div>

                <div className="w-full pt-1.5 shrink-0">
                  {isUnlocked ? (
                    <button
                      onClick={() => handleStartWorld(world.id)}
                      className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:brightness-110 text-white font-black text-xs md:text-sm py-1.5 md:py-2 rounded-full shadow-[0_0_15px_rgba(244,63,94,0.75)] cursor-pointer transition-transform active:scale-95 flex items-center justify-center gap-1 font-display uppercase tracking-wider"
                    >
                      <span>► PRACTICE</span>
                    </button>
                  ) : (
                    <div className="w-full bg-purple-950/40 text-purple-400/50 font-black text-[10px] md:text-xs py-1 rounded-full border border-purple-900/40 uppercase">
                      Locked
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Center Reset Lesson Progress Button */}
        <div className="relative z-10 shrink-0 pb-0.5">
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
  }

  // 2. Out of Hearts Screen
  if (session.outOfHearts) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between items-center p-3 md:p-5 overflow-hidden select-none">
        
        <div className="shrink-0 pt-0.5 z-10">
          <button
            onClick={handleExitWorld}
            className="bg-[#160d36]/90 border border-purple-700/60 text-purple-200 hover:text-white font-extrabold text-base md:text-lg px-6 py-2.5 rounded-full flex items-center gap-2 shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Worlds</span>
          </button>
        </div>

        <div className="my-auto z-10 flex flex-col items-center text-center space-y-4 max-w-xl w-full bg-[#160d38]/95 border-2 border-rose-500/60 rounded-[32px] p-7 shadow-2xl">
          <button
            onClick={() => soundEngine.playText(narrationScript.out_of_hearts)}
            className="text-7xl md:text-8xl animate-bounce cursor-pointer"
            title="Listen out of hearts narration"
          >
            🥺
          </button>
          <h2 className="text-4xl md:text-5xl font-black text-rose-500 font-display">
            Out of Hearts!
          </h2>
          <p className="text-lg md:text-xl font-black text-purple-100 leading-relaxed px-4">
            Robo says: "No worries! Let's practice some more. Try again to master this world!"
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={() => handleStartWorld(activeWorldId)}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-full shadow-[0_0_20px_rgba(255,184,0,0.6)] cursor-pointer text-lg md:text-xl flex items-center gap-2 transition-transform hover:scale-105"
            >
              <RotateCcw className="w-6 h-6" />
              <span>Retry World</span>
            </button>
            <button
              onClick={handleExitWorld}
              className="bg-[#130E26] hover:bg-[#1A1333] border border-purple-700/80 text-purple-200 hover:text-white font-black px-8 py-4 rounded-full cursor-pointer text-lg md:text-xl flex items-center gap-2 transition-colors"
            >
              <LogOut className="w-6 h-6" />
              <span>Quit World</span>
            </button>
          </div>
        </div>

        <div className="shrink-0 pb-1 z-10" />
      </div>
    );
  }

  // 3. World Complete Celebration Screen
  if (session.completed) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-6 select-none">
        <div className="z-10 bg-emerald-950/90 border-2 border-emerald-500 rounded-[32px] p-8 max-w-lg w-full space-y-5 shadow-glow-green">
          <button
            onClick={() => soundEngine.playText(narrationScript.world_complete)}
            className="text-7xl md:text-8xl animate-bounce cursor-pointer"
            title="Listen celebration audio"
          >
            🏆
          </button>
          <h2 className="text-4xl md:text-5xl font-black text-white font-display">World Cleared!</h2>
          <div className="flex items-center justify-center gap-3">
            {[1, 2, 3].map((s) => (
              <Star
                key={s}
                className={`w-12 h-12 ${
                  s <= session.starsEarned
                    ? 'fill-amber-400 text-amber-400 scale-110 shadow-glow-gold'
                    : 'text-slate-600'
                }`}
              />
            ))}
          </div>
          <div className="text-xl md:text-2xl font-black text-emerald-300">
            Earned +{session.xp} XP ⭐
          </div>
          <div className="flex items-center justify-center gap-4 pt-2">
            {activeWorldId < 10 && (
              <button
                onClick={() => handleStartWorld(activeWorldId + 1)}
                className="btn-gold px-8 py-3.5 rounded-2xl font-black text-lg md:text-xl cursor-pointer"
              >
                Next World 🚀
              </button>
            )}
            <button
              onClick={handleExitWorld}
              className="px-8 py-3.5 rounded-2xl bg-purple-950 border border-purple-700 text-purple-200 font-black text-lg md:text-xl cursor-pointer"
            >
              World Map 🗺️
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQ) return null;

  // 4. Per-Question Quiz Play View
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-2 sm:p-4 overflow-hidden select-none">
      
      {/* 1. Top Sub-Header Bar */}
      <div className="w-full max-w-3xl flex flex-col items-center space-y-1.5 shrink-0 z-10 pt-0.5">
        
        {/* Left ← Worlds Button & Top Center Glowing World Badge Pill */}
        <div className="w-full flex items-center justify-between">
          <button
            onClick={handleExitWorld}
            className="bg-[#160d36]/90 hover:bg-[#231554] border border-purple-700/60 text-purple-200 hover:text-white font-extrabold text-xs md:text-sm px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md cursor-pointer transition-all"
          >
            <span>← Worlds</span>
          </button>

          {/* Active World Badge Pill */}
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-black text-xs md:text-sm lg:text-base px-6 py-1.5 rounded-full shadow-[0_0_18px_rgba(244,63,94,0.75)] font-display uppercase tracking-wider">
            <span>⭐</span>
            <span>{activeWorld ? activeWorld.title.replace(/^World \d+: /, '') : 'Quiz Play'}</span>
          </div>

          <div className="w-20" />
        </div>

        {/* Stats Row */}
        <div className="w-full flex items-center justify-between px-2 text-xs md:text-sm font-black">
          <div className="flex items-center gap-1.5 text-amber-400 bg-[#160d36]/90 border border-amber-500/40 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{session.xp} XP</span>
          </div>

          {/* 3 Glowing Red Hearts */}
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((h) => (
              <Heart
                key={h}
                className={`w-6 h-6 ${
                  h <= session.hearts ? 'fill-rose-500 text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.9)]' : 'text-purple-900/60 fill-purple-950/40'
                }`}
              />
            ))}
          </div>

          {/* Streak */}
          <div className="flex items-center gap-1.5 text-amber-400 bg-[#160d36]/90 border border-amber-500/40 px-3 py-1 rounded-full">
            <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{session.streak}x</span>
          </div>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full space-y-0.5">
          <div className="flex items-center justify-between text-[11px] md:text-xs font-black text-purple-300">
            <span>Question {session.currentIndex + 1}/10</span>
            <span>{Math.round(((session.currentIndex + 1) / 10) * 100)}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-purple-950/80 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-amber-400 to-pink-500 transition-all duration-300"
              style={{ width: `${((session.currentIndex + 1) / 10) * 100}%` }}
            />
          </div>
        </div>

      </div>

      {/* 2. Main Question Modal Container Card */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full my-auto bg-[#160d38]/95 border-2 border-purple-800/70 rounded-3xl p-4 md:p-5 shadow-[0_0_50px_rgba(0,0,0,0.6)] space-y-2.5 shrink-0 max-h-full">
        
        {/* Top Yellow Topic Rule Badge */}
        <div className="inline-flex items-center gap-1.5 px-5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black text-xs md:text-sm uppercase tracking-wider shadow-md shrink-0">
          <span>+ {activeWorld.focus ? activeWorld.focus.split(':')[0] : 'PERCENT RULE'}</span>
        </div>

        {/* Inner Question Poster Box */}
        <div className="w-full bg-[#0c0521] border-2 border-cyan-400/50 rounded-2xl p-2.5 md:p-3.5 flex flex-col items-center text-center space-y-2 shadow-inner shrink-0">
          
          {/* SVG Diagram Canvas */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 max-h-[22vh] rounded-2xl bg-[#13092e] border border-purple-700/60 p-2 flex items-center justify-center text-white shadow-md shrink-0">
            {currentQ.diagram ? (
              <div className="w-full h-full flex items-center justify-center">
                <PercentDiagramSVG diagram={currentQ.diagram} />
              </div>
            ) : (
              <div className="w-full h-full bg-blue-600 rounded-xl flex items-center justify-center shadow-inner">
                <RefreshCw className="w-10 h-10 text-white animate-spin-slow" />
              </div>
            )}
          </div>

          {/* Question Prompt Text (Enlarged) */}
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-white leading-snug font-display max-w-xl">
            {currentQ.prompt}
          </h2>
        </div>

        {/* 4 Multiple Choice Answer Option Cards (2x2 Grid) */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 w-full shrink-0">
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedOption === opt;
            let btnStyle = "bg-[#180e3d] border-purple-700/60 text-white hover:bg-[#251856] hover:border-amber-400";

            if (feedback) {
              if (opt === currentQ.correctAnswer) {
                btnStyle = "bg-emerald-950 border-emerald-500 text-emerald-300 font-black shadow-glow-green scale-102";
              } else if (isSelected && !feedback.isCorrect) {
                btnStyle = "bg-red-950 border-red-500 text-red-300 opacity-60";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt)}
                disabled={!!feedback}
                className={`py-2.5 md:py-3.5 px-3 rounded-2xl border-2 font-black transition-all flex items-center justify-center text-center shadow-md cursor-pointer ${
                  String(opt).length <= 7
                    ? 'text-xl md:text-2xl lg:text-3xl'
                    : String(opt).length <= 14
                    ? 'text-base md:text-lg lg:text-xl'
                    : 'text-xs md:text-sm leading-tight'
                } ${btnStyle}`}
              >
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {/* Hint Trigger */}
        <div className="w-full flex items-center justify-start shrink-0">
          <button
            onClick={handleUseHint}
            className="text-xs font-black text-amber-400 flex items-center gap-1 hover:underline cursor-pointer"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>Use Hint</span>
          </button>
        </div>

        {session.hintUsed && (
          <p className="text-xs font-bold text-amber-300 bg-amber-950/40 p-2 rounded-xl border border-amber-500/30 w-full text-left shrink-0">
            💡 {currentQ.hint}
          </p>
        )}

      </div>

      {/* 3. Centered Answer Result Pop-Up Modal */}
      {feedback && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
          
          {/* Correct Answer Green Pop-up Card */}
          {feedback.isCorrect ? (
            <div className="w-80 md:w-96 p-7 md:p-8 rounded-[32px] bg-[#43a047] border-2 border-emerald-300 text-white shadow-[0_0_50px_rgba(76,175,80,0.8)] flex flex-col items-center text-center space-y-3 animate-scale-up">
              <span className="text-6xl md:text-7xl animate-bounce">🎉</span>
              <h3 className="text-3xl md:text-4xl font-black font-display tracking-wide">
                Correct! 🎉
              </h3>
              <p className="text-sm md:text-base lg:text-lg font-extrabold opacity-95 leading-relaxed">
                {feedback.explanation}
              </p>
            </div>
          ) : (
            /* Incorrect Answer Red Pop-up Card */
            <div className="w-80 md:w-96 p-7 md:p-8 rounded-[32px] bg-[#e53935] border-2 border-rose-300 text-white shadow-[0_0_50px_rgba(229,57,53,0.8)] flex flex-col items-center text-center space-y-3 animate-scale-up">
              <span className="text-6xl md:text-7xl animate-bounce">🥺</span>
              <h3 className="text-3xl md:text-4xl font-black font-display tracking-wide">
                Not quite!
              </h3>
              <p className="text-sm md:text-base lg:text-lg font-extrabold opacity-95 leading-relaxed">
                {feedback.explanation}
              </p>
            </div>
          )}

        </div>
      )}

      {/* Bottom Center Reset Lesson Progress Button */}
      <div className="relative z-10 shrink-0 pb-0.5 pt-0.5">
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

export default PracticeStage;
