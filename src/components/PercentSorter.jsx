import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';
import { narrationScript } from '../data/narration';
import soundEngine from '../utils/audio';

const ROUNDS = [
  { dir: 'asc', cards: ['3/5', '62%', '1/2', '0.55'] },
  { dir: 'desc', cards: ['0.7', '64%', '3/4', '0.68'] },
  { dir: 'asc', cards: ['1/4', '0.3', '22%', '2/5'] },
  { dir: 'desc', cards: ['9/20', '0.4', '47%', '1/2'] },
  { dir: 'asc', cards: ['0.08', '1/8', '12%', '0.1'] },
];

export const toPercent = (s) => {
  if (s.endsWith('%')) return parseFloat(s);
  if (s.includes('/')) {
    const [n, d] = s.split('/').map(Number);
    return (n / d) * 100;
  }
  return parseFloat(s) * 100;
};
const showPct = (s) => `${parseFloat(toPercent(s).toFixed(1))}%`;
const SLOT_LABELS = { asc: ['Smallest', '2nd', '3rd', 'Largest'], desc: ['Largest', '2nd', '3rd', 'Smallest'] };

export const PercentSorter = () => {
  const [roundIdx, setRoundIdx] = useState(0);
  const [placed, setPlaced] = useState([]);
  const [peek, setPeek] = useState(false);
  const [wrongCard, setWrongCard] = useState(null);
  const [message, setMessage] = useState('');

  const round = ROUNDS[roundIdx];
  const sorted = useMemo(() => {
    const asc = [...round.cards].sort((x, y) => toPercent(x) - toPercent(y));
    return round.dir === 'asc' ? asc : asc.reverse();
  }, [roundIdx]);

  const done = placed.length === round.cards.length;
  const nextExpected = sorted[placed.length];

  const handleTap = (card) => {
    if (done || placed.includes(card)) return;
    if (card === nextExpected) {
      const next = [...placed, card];
      setPlaced(next);
      setWrongCard(null);
      soundEngine.playDragClick();
      if (next.length === round.cards.length) {
        setMessage('');
        soundEngine.playText(narrationScript.correct_cheer);
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      } else {
        setMessage(`✅ ${card} = ${showPct(card)}. Now find the ${round.dir === 'asc' ? 'next smallest' : 'next largest'}!`);
      }
    } else {
      setWrongCard(`${card}-${Date.now()}`);
      setMessage(`Not that one yet! Change every card into a percent, then pick the ${round.dir === 'asc' ? 'smallest' : 'largest'} left.`);
      soundEngine.playText(narrationScript.incorrect_try_again);
    }
  };

  const nextRound = () => {
    setRoundIdx((i) => (i + 1) % ROUNDS.length);
    setPlaced([]);
    setWrongCard(null);
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl space-y-3 select-none">
      <div className="w-full flex items-center justify-between gap-2">
        <span className="text-sm md:text-base font-black text-cyan-300">
          Round {roundIdx + 1} of {ROUNDS.length}
        </span>
        <span className="text-xs md:text-sm lg:text-base font-black text-amber-300 bg-amber-950/40 border border-amber-500/40 px-4 py-1 rounded-full">
          {round.dir === 'asc' ? 'Smallest → Largest' : 'Largest → Smallest'}
        </span>
        <button
          onClick={() => setPeek((v) => !v)}
          className={`px-4 py-1.5 rounded-xl text-xs md:text-sm font-black flex items-center gap-2 cursor-pointer transition-all ${
            peek ? 'bg-amber-400 text-slate-950 shadow-glow-gold' : 'bg-[#130E26]/90 text-purple-200 border border-purple-800/60 hover:text-white'
          }`}
        >
          {peek ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          <span>{peek ? 'Hide %' : 'Peek as %'}</span>
        </button>
      </div>

      {/* Cards to tap */}
      <div className="grid grid-cols-4 gap-2.5 md:gap-4 w-full">
        {round.cards.map((card) => {
          const isPlaced = placed.includes(card);
          const isWrong = wrongCard && wrongCard.startsWith(`${card}-`);
          return (
            <button
              key={card + roundIdx}
              onClick={() => handleTap(card)}
              disabled={isPlaced || done}
              className={`h-20 md:h-24 rounded-2xl border-2 flex flex-col items-center justify-center font-black transition-all cursor-pointer ${
                isPlaced
                  ? 'bg-[#130E26]/40 border-purple-900/40 text-purple-800 opacity-40'
                  : isWrong
                  ? 'bg-red-950 border-red-500 text-red-200 shake'
                  : 'bg-[#1A1333] border-purple-600/70 text-white hover:bg-[#251B47] hover:border-amber-400 hover:scale-105 shadow-lg'
              }`}
            >
              <span className="text-2xl md:text-3xl lg:text-4xl font-display">{card}</span>
              {peek && !isPlaced && <span className="text-xs md:text-sm text-amber-300 font-extrabold">= {showPct(card)}</span>}
            </button>
          );
        })}
      </div>

      {/* Ladder */}
      <div className="w-full bg-[#130E26]/80 border border-purple-800/60 rounded-2xl p-3 md:p-4">
        <div className="grid grid-cols-4 gap-2.5 md:gap-4">
          {SLOT_LABELS[round.dir].map((label, i) => {
            const card = placed[i];
            return (
              <div
                key={label + i}
                className={`h-16 md:h-20 rounded-2xl border-2 flex flex-col items-center justify-center transition-all ${
                  card ? 'bg-emerald-950/70 border-emerald-500 shadow-glow-green' : 'bg-[#0F0B1E] border-dashed border-purple-800/60'
                }`}
              >
                {card ? (
                  <>
                    <span className="text-xl md:text-2xl lg:text-3xl font-black text-white font-display leading-none">{card}</span>
                    <span className="text-xs md:text-sm font-black text-emerald-300">{showPct(card)}</span>
                  </>
                ) : (
                  <span className="text-xs md:text-sm font-black text-purple-500">{label}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="min-h-[40px] flex items-center justify-center w-full">
        {done ? (
          <div className="flex items-center gap-3 bg-emerald-950 border-2 border-emerald-500 text-emerald-300 px-5 py-2 rounded-2xl text-xs md:text-sm lg:text-base font-black shadow-glow-green">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Perfect ladder! {sorted.map((c) => (c.endsWith('%') ? c : `${c} (${showPct(c)})`)).join(' → ')}</span>
            <button
              onClick={nextRound}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-1.5 rounded-xl text-xs md:text-sm font-black flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>Next Round</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <p className="text-xs md:text-sm lg:text-base font-black text-purple-200 text-center">
            {message || `Tap the ${round.dir === 'asc' ? 'smallest' : 'largest'} card first!`}
          </p>
        )}
      </div>
    </div>
  );
};

export default PercentSorter;
