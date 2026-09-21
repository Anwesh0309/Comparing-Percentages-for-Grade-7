import React from 'react';
import useAppStore from '../store/useAppStore';
import { Volume2, VolumeX, X } from 'lucide-react';

const STAGES = [
  { id: 'wonder', label: 'Wonder', number: '01', icon: '🔍' },
  { id: 'story', label: 'Story', number: '02', icon: '📖' },
  { id: 'simulate', label: 'Simulate', number: '03', icon: '✏️' },
  { id: 'practice', label: 'Practice', number: '04', icon: '🎮' },
  { id: 'reflect', label: 'Reflect', number: '05', icon: '📜' },
];

export const TopNav = () => {
  const { currentStage, setStage, audioEnabled, toggleAudio } = useAppStore();

  return (
    <header className="w-full pt-3 px-4 md:px-8 flex items-center justify-between z-50 shrink-0 select-none bg-transparent">
      {/* 1. Left Side: Home Button Pill */}
      <div className="flex items-center">
        <button
          onClick={() => setStage('home')}
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-[#160d36]/90 hover:bg-[#231554] border-2 border-purple-600/60 text-white font-black text-base md:text-lg lg:text-xl shadow-lg transition-all cursor-pointer hover:scale-105"
        >
          <span className="text-xl md:text-2xl">🏠</span>
          <span>Home</span>
        </button>
      </div>

      {/* 2. Center Column: Stage Navigation Pills & Audio Toggle */}
      <div className="flex items-center gap-2.5 bg-[#12082b]/95 border-2 border-purple-800/70 rounded-full p-2 shadow-2xl backdrop-blur-md">
        <nav className="flex items-center gap-2">
          {STAGES.map((st) => {
            const isActive = currentStage === st.id;

            return (
              <button
                key={st.id}
                onClick={() => setStage(st.id)}
                className={`px-4 md:px-5 py-2 rounded-full font-black text-xs md:text-sm lg:text-base transition-all flex items-center gap-2.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#29175c] text-white border-2 border-slate-100 shadow-[0_0_15px_rgba(255,255,255,0.5)] scale-105'
                    : 'text-purple-200 hover:text-white hover:bg-purple-900/40'
                }`}
              >
                <span className={isActive ? 'bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full text-xs md:text-sm font-black' : 'text-purple-400 font-bold'}>
                  {st.number}
                </span>
                <span className="text-base md:text-lg">{st.icon}</span>
                <span className="hidden sm:inline">{st.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Audio Status Toggle Pill */}
        <button
          onClick={toggleAudio}
          className="px-4 py-2 rounded-full bg-[#29175c] hover:bg-[#341d75] border border-purple-500/60 text-purple-100 hover:text-white font-black text-xs md:text-sm lg:text-base flex items-center gap-2 cursor-pointer transition-colors"
          title={audioEnabled ? 'Mute Audio' : 'Enable Audio'}
        >
          {audioEnabled ? (
            <>
              <Volume2 className="w-5 h-5 text-amber-400" />
              <span className="hidden md:inline">Audio</span>
            </>
          ) : (
            <>
              <VolumeX className="w-5 h-5 text-rose-400" />
              <span>Muted</span>
            </>
          )}
        </button>
      </div>

      {/* 3. Right Side: Cyan Square Close Button */}
      <div className="flex items-center">
        <button
          onClick={() => setStage('home')}
          className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#0090d8] hover:bg-[#00a3e8] border-2 border-cyan-300/50 text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105 cursor-pointer"
          title="Return to Home / Close"
        >
          <X className="w-7 h-7 stroke-[3]" />
        </button>
      </div>
    </header>
  );
};

export default TopNav;
