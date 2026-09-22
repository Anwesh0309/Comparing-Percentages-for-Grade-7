import React, { useEffect, useState } from 'react';
import useAppStore from '../store/useAppStore';
import PercentRig, { RIG_SKINS } from '../components/PercentRig';
import PercentGridLab from '../components/PercentGridLab';
import PercentSorter from '../components/PercentSorter';
import DealDetective from '../components/DealDetective';
import { narrationScript } from '../data/narration';
import soundEngine from '../utils/audio';
import { ArrowRight } from 'lucide-react';

export const SimulateStage = () => {
  const { simulateStation, setSimulateStation, setStage, resetWorldsProgress } = useAppStore();
  const [stationDSkin, setStationDSkin] = useState('quiz');
  const [stationDTotals, setStationDTotals] = useState(0);
  const TOTAL_SETS = [[20, 50], [25, 40], [10, 25], [40, 200]];

  const stationTips = {
    A: "Tip: Drag across the grid! 100 squares make it easy to see fractions, decimals, and percents.",
    B: "Tip: Change every card into a percent first, then sorting the ladder is a breeze!",
    C: "Tip: Calculate the actual dollar savings! A bigger percent off doesn't always save more money.",
    D: "Tip: Check the whole! 50% of 20 is 10, but 30% of 80 is 24.",
  };

  const stationNarrationMap = {
    A: narrationScript.station_a_intro,
    B: narrationScript.station_b_intro,
    C: narrationScript.station_c_intro,
    D: narrationScript.station_d_intro,
  };

  useEffect(() => {
    soundEngine.playText(stationNarrationMap[simulateStation]);
    return () => soundEngine.stop();
  }, [simulateStation]);

  const handleMascotSpeak = () => {
    soundEngine.playText(stationNarrationMap[simulateStation]);
  };

  const stations = [
    { id: 'A', name: 'Percent Grid Lab', icon: '🧱', badge: '1' },
    { id: 'B', name: 'Percent Sorter', icon: '🪜', badge: '2' },
    { id: 'C', name: 'Deal Detective', icon: '🕵️', badge: '3' },
    { id: 'D', name: 'Real-World Lab', icon: '🌍', badge: '4' },
  ];

  const currentStationObj = stations.find(s => s.id === simulateStation) || stations[0];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between p-3 md:p-5 overflow-hidden select-none">
      
      {/* Centered Main Simulation Stations Modal Container */}
      <div className="relative z-10 flex flex-col max-w-5xl w-full my-auto bg-[#160d38]/95 border-2 border-purple-800/70 rounded-[32px] p-4 md:p-6 shadow-[0_0_50px_rgba(0,0,0,0.6)] space-y-4">
        
        {/* Top Glowing Cyan Line Indicator */}
        <div className="w-18 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.9)] self-center shrink-0" />

        {/* 1. Header Title */}
        <div className="flex items-center justify-center gap-2 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-display flex items-center gap-3">
            <span>🧪</span>
            <span>Simulation Stations</span>
          </h1>
        </div>

        {/* 2. Main Two-Column Grid Layout (Left Station Selector + Right Workspace) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch min-h-[420px] md:min-h-[480px]">
          
          {/* Left Column: Vertical Station Buttons List + CTA */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-3">
            
            {/* Station Selector Cards */}
            <div className="flex flex-col space-y-3">
              {stations.map((st) => {
                const isActive = simulateStation === st.id;
                return (
                  <button
                    key={st.id}
                    onClick={() => setSimulateStation(st.id)}
                    className={`w-full p-4 md:p-5 rounded-2xl transition-all flex items-center justify-between text-left cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-950/90 to-purple-900/70 border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] scale-102'
                        : 'bg-[#12082b]/90 border border-purple-800/60 hover:bg-[#1c0f42] text-purple-200'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 ${
                        isActive ? 'bg-cyan-500 text-slate-950 shadow-glow-green' : 'bg-purple-950 border border-purple-800 text-purple-300'
                      }`}>
                        <span>{st.icon}</span>
                      </div>
                      <div>
                        <h3 className={`text-base md:text-lg lg:text-xl font-black ${isActive ? 'text-white' : 'text-slate-200'}`}>
                          Station {st.badge}: {st.name}
                        </h3>
                        <p className="text-xs md:text-sm text-purple-300 font-extrabold">
                          {st.id === 'A' && '100 Grid & Fractions'}
                          {st.id === 'B' && 'Same Whole Sorter'}
                          {st.id === 'C' && 'Bargain Shopping'}
                          {st.id === 'D' && 'Different Wholes'}
                        </p>
                      </div>
                    </div>

                    <span className="text-lg">
                      {isActive ? '🔓' : '✨'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Left CTA Button */}
            <button
              onClick={() => setStage('practice')}
              className="w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-lg md:text-xl py-4 rounded-full shadow-[0_0_25px_rgba(255,184,0,0.8)] hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer font-display mt-auto"
            >
              <span>Go to Practice Phase!</span>
              <ArrowRight className="w-6 h-6 stroke-[3]" />
            </button>

          </div>

          {/* Right Workspace Column: Station Content Canvas */}
          <div className="md:col-span-8 bg-[#100727]/95 border-2 border-purple-800/60 rounded-2xl p-4 md:p-5 shadow-inner flex flex-col justify-between overflow-hidden">
            
            {/* Top Workspace Header Bar */}
            <div className="flex items-center justify-between border-b border-purple-800/60 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-black text-lg md:text-xl lg:text-2xl">
                  Station {currentStationObj.badge}: {currentStationObj.name}
                </span>
              </div>
              <span className="text-xs md:text-sm font-black text-purple-200 bg-purple-950 px-4 py-1.5 rounded-full border border-purple-800">
                Lab {currentStationObj.badge} of 4
              </span>
            </div>

            {/* Main Interactive Station Content */}
            <div className="flex-1 flex flex-col items-center justify-center py-1 overflow-hidden">
              
              {/* Station A: Percent Grid Lab */}
              {simulateStation === 'A' && (
                <div className="w-full flex flex-col items-center justify-center space-y-2 my-auto">
                  <p className="text-xs sm:text-sm md:text-base font-black text-slate-100 text-center">
                    Drag across the 100-grid squares to shade percentages, fractions & decimals!
                  </p>
                  <PercentGridLab />
                </div>
              )}

              {/* Station B: Percent Sorter */}
              {simulateStation === 'B' && (
                <div className="w-full flex flex-col items-center justify-center space-y-2 my-auto">
                  <p className="text-xs sm:text-sm md:text-base font-black text-slate-100 text-center">
                    Tap the cards in order to build the percent ladder! Fractions, decimals & percents mixed up.
                  </p>
                  <PercentSorter />
                </div>
              )}

              {/* Station C: Deal Detective */}
              {simulateStation === 'C' && (
                <div className="w-full flex flex-col items-center justify-center space-y-1.5 my-auto">
                  <p className="text-xs sm:text-sm md:text-base font-black text-slate-100 text-center">
                    Calculate actual dollar savings to discover which shop gives the better deal!
                  </p>
                  <DealDetective />
                </div>
              )}

              {/* Station D: Real-World Percent Lab */}
              {simulateStation === 'D' && (
                <div className="w-full flex flex-col items-center justify-center space-y-2 my-auto">
                  <p className="text-xs sm:text-sm md:text-base font-black text-slate-100 text-center">
                    Compare quiz scores, basketball shots, batteries & downloads on one fair 100% ruler!
                  </p>

                  {/* Real-World Skin Selector Pills */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5">
                    {Object.entries(RIG_SKINS).map(([id, skinItem]) => {
                      const isSelected = stationDSkin === id;
                      return (
                        <button
                          key={id}
                          onClick={() => setStationDSkin(id)}
                          className={`px-3 py-1 rounded-xl font-black text-xs md:text-sm flex items-center gap-1 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-amber-400 text-slate-950 shadow-glow-gold scale-105'
                              : 'bg-[#1A1333] text-purple-200 hover:text-white border border-purple-800/60'
                          }`}
                        >
                          <span>{skinItem.name} {skinItem.emoji}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Totals Selector Bar */}
                  <div className="flex flex-wrap items-center justify-center gap-2 bg-[#1A1333] border border-purple-800/60 px-3 py-1 rounded-xl text-xs md:text-sm font-black text-purple-200 shadow-md">
                    <span>Change Totals:</span>
                    {TOTAL_SETS.map((pair, idx) => (
                      <button
                        key={idx}
                        onClick={() => setStationDTotals(idx)}
                        className={`px-3 py-0.5 rounded-lg font-black text-xs transition-all cursor-pointer ${
                          stationDTotals === idx
                            ? 'bg-amber-400 text-slate-950 font-black scale-105 shadow-glow-gold'
                            : 'bg-purple-950 text-purple-300 hover:text-white border border-purple-800'
                        }`}
                      >
                        {pair[0]} vs {pair[1]}
                      </button>
                    ))}
                  </div>

                  {/* Percent Rig */}
                  <div className="w-full max-w-md flex items-center justify-center my-0.5">
                    <PercentRig skin={stationDSkin} totals={TOTAL_SETS[stationDTotals]} editable={true} compact={true} />
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Mascot Dialogue Tip inside Workspace */}
            <div className="flex items-center gap-3 pt-3 border-t border-purple-800/60 mt-2">
              <button
                onClick={handleMascotSpeak}
                className="w-11 h-11 rounded-full bg-[#1e114a] border-2 border-amber-400 flex items-center justify-center text-xl shadow-md shrink-0 hover:scale-105 transition-transform cursor-pointer"
                title="Listen tip"
              >
                🤖
              </button>
              <div className="bg-[#1a0e3b] text-purple-100 rounded-full px-5 py-2 border border-purple-700/60 text-xs md:text-sm lg:text-base font-black flex-1 truncate">
                {stationTips[simulateStation]}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Center Reset Lesson Progress Button */}
      <div className="relative z-10 shrink-0 pb-1 pt-1">
        <button
          onClick={() => {
            resetWorldsProgress();
            setStage('home');
          }}
          className="px-6 py-2.5 rounded-full bg-[#160d36]/90 hover:bg-[#231554] border border-purple-700/60 text-purple-200 hover:text-white font-extrabold text-xs md:text-sm shadow-md transition-all cursor-pointer"
        >
          Reset Lesson Progress
        </button>
      </div>

    </div>
  );
};

export default SimulateStage;
