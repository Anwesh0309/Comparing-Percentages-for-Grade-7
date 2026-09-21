import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import soundEngine from '../utils/audio';

// Real-world skins for the "same 100% ruler" rig
export const RIG_SKINS = {
  quiz:     { name: 'Quiz Scores',   emoji: '📝', unit: 'points',  a: { name: 'Robo',    icon: '🤖' }, b: { name: 'Alex',   icon: '🧑‍🚀' } },
  shooting: { name: 'Basketball',    emoji: '🏀', unit: 'baskets', a: { name: 'Mia',     icon: '👧' }, b: { name: 'Ravi',   icon: '👦' } },
  battery:  { name: 'Phone Battery', emoji: '🔋', unit: 'units',   a: { name: 'Phone A', icon: '📱' }, b: { name: 'Phone B', icon: '📲' } },
  download: { name: 'Downloads',     emoji: '⬇️', unit: 'MB',      a: { name: 'Game 1',  icon: '🎮' }, b: { name: 'Game 2', icon: '🕹️' } },
};

const COLORS = {
  A: { bar: '#06B6D4', text: 'text-cyan-300', chip: 'border-cyan-400/70 bg-cyan-950/50 text-cyan-300' },
  B: { bar: '#F59E0B', text: 'text-amber-300', chip: 'border-amber-400/70 bg-amber-950/50 text-amber-300' },
};

const fmt = (n) => String(parseFloat(n.toFixed(1)));
const defaultParts = ([tA, tB]) => [Math.round(tA * 0.9), Math.round(tB * 0.8)];

const RigRow = ({ side, meta, part, total, unit, isWinner, editable, onChange, onRelease }) => {
  const trackRef = useRef(null);
  const dragging = useRef(false);
  const pct = total ? (part / total) * 100 : 0;
  const c = COLORS[side];

  const setFromPointer = (e) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    const next = Math.round(ratio * total);
    if (next !== part) soundEngine.playDragClick();
    onChange(next);
  };

  const handleDown = (e) => {
    if (!editable) return;
    dragging.current = true;
    trackRef.current.setPointerCapture(e.pointerId);
    setFromPointer(e);
  };
  const handleMove = (e) => {
    if (dragging.current) setFromPointer(e);
  };
  const handleUp = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    if (trackRef.current && trackRef.current.hasPointerCapture(e.pointerId)) {
      trackRef.current.releasePointerCapture(e.pointerId);
    }
    onRelease();
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className={`flex items-center gap-2 text-sm md:text-base lg:text-lg font-black ${c.text}`}>
          <span className="text-xl md:text-2xl">{meta.icon}</span>
          <span>{meta.name}</span>
        </span>

        <div className="flex items-center gap-1.5 text-xs md:text-sm lg:text-base font-black text-slate-100">
          {editable && (
            <button
              onClick={() => { soundEngine.playDragClick(); onChange(Math.max(0, part - 1)); onRelease(); }}
              className="w-7 h-7 rounded-xl bg-purple-950/70 hover:bg-purple-900 border border-[#3B2D6B] flex items-center justify-center text-purple-200 cursor-pointer"
              title="Less"
            >
              <Minus className="w-4 h-4" />
            </button>
          )}
          <span className="min-w-[96px] text-center">{part} / {total} {unit}</span>
          {editable && (
            <button
              onClick={() => { soundEngine.playDragClick(); onChange(Math.min(total, part + 1)); onRelease(); }}
              className="w-7 h-7 rounded-xl bg-purple-950/70 hover:bg-purple-900 border border-[#3B2D6B] flex items-center justify-center text-purple-200 cursor-pointer"
              title="More"
            >
              <Plus className="w-4 h-4" />
            </button>
          )}
        </div>

        <span className={`px-3 py-1 rounded-xl border-2 text-sm md:text-base lg:text-lg font-black min-w-[80px] text-center transition-all ${c.chip} ${isWinner ? 'shadow-glow-gold' : ''}`}>
          {isWinner ? '👑 ' : ''}{fmt(pct)}%
        </span>
      </div>

      <div
        ref={trackRef}
        onPointerDown={handleDown}
        onPointerMove={handleMove}
        onPointerUp={handleUp}
        onPointerCancel={handleUp}
        className="relative h-8 md:h-9 rounded-full bg-[#1A1333] border-2 border-purple-700/60 touch-none cursor-pointer"
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-100"
          style={{ width: `${pct}%`, backgroundColor: c.bar, opacity: 0.85 }}
        />
        {[25, 50, 75].map((t) => (
          <div key={t} className="absolute top-0 bottom-0 border-l-2 border-dashed border-[#0F0B1E]/70 pointer-events-none" style={{ left: `${t}%` }} />
        ))}
        {editable && (
          <div
            className="absolute top-1/2 w-7 h-7 rounded-full bg-amber-400 border-[3px] border-[#161129] shadow-glow-gold pointer-events-none"
            style={{ left: `${pct}%`, transform: 'translate(-50%, -50%)' }}
          />
        )}
      </div>
    </div>
  );
};

export const PercentRig = ({
  skin = 'quiz',
  totals = [20, 50],
  editable = true,
  compact = false,
}) => {
  const meta = RIG_SKINS[skin] || RIG_SKINS.quiz;
  const [parts, setParts] = useState(defaultParts(totals));
  const [totalA, totalB] = totals;

  useEffect(() => {
    setParts(defaultParts(totals));
  }, [skin, totalA, totalB]);

  const [partA, partB] = parts;
  const pctA = (partA / totalA) * 100;
  const pctB = (partB / totalB) * 100;

  // Compare fractions exactly by cross-multiplying
  const crossA = partA * totalB;
  const crossB = partB * totalA;
  const pctWinner = crossA === crossB ? null : crossA > crossB ? 'A' : 'B';
  const rawWinner = partA === partB ? null : partA > partB ? 'A' : 'B';
  const twist = pctWinner && rawWinner && pctWinner !== rawWinner;

  const nameOf = (s) => (s === 'A' ? meta.a.name : meta.b.name);
  const pctOf = (s) => fmt(s === 'A' ? pctA : pctB);
  const gap = fmt(Math.abs(pctA - pctB));

  const handleRelease = () => {
    if (twist) {
      confetti({ particleCount: 45, spread: 65, origin: { y: 0.6 } });
    }
  };

  const resetRig = () => setParts(defaultParts(totals));

  let verdict;
  let verdictStyle = 'bg-purple-950/80 border-purple-600 text-amber-400';
  if (!pctWinner) {
    verdict = `🤝 Tie! Both are ${pctOf('A')}%`;
    verdictStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-glow-green';
  } else if (twist) {
    const loser = pctWinner === 'A' ? 'B' : 'A';
    verdict = compact
      ? `😲 ${nameOf(rawWinner)} has the bigger number, but ${nameOf(pctWinner)} is ahead!`
      : `😲 ${nameOf(rawWinner)} has the bigger number, but ${nameOf(pctWinner)} is ahead: ${pctOf(pctWinner)}% vs ${pctOf(loser)}%!`;
    verdictStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-glow-green';
  } else {
    const loser = pctWinner === 'A' ? 'B' : 'A';
    verdict = `${nameOf(pctWinner)} is ahead: ${pctOf(pctWinner)}% vs ${pctOf(loser)}% (${gap} percentage points more)`;
  }

  return (
    <div className={`flex flex-col items-center justify-center w-full ${compact ? 'space-y-2' : 'space-y-3'} select-none`}>
      <RigRow
        side="A"
        meta={meta.a}
        part={partA}
        total={totalA}
        unit={meta.unit}
        isWinner={pctWinner === 'A'}
        editable={editable}
        onChange={(v) => setParts([v, partB])}
        onRelease={handleRelease}
      />
      <RigRow
        side="B"
        meta={meta.b}
        part={partB}
        total={totalB}
        unit={meta.unit}
        isWinner={pctWinner === 'B'}
        editable={editable}
        onChange={(v) => setParts([partA, v])}
        onRelease={handleRelease}
      />

      {/* Shared 100% ruler */}
      <div className="w-full">
        <div className="flex items-center justify-between text-xs md:text-sm font-black text-purple-300 px-0.5">
          {['0%', '25%', '50%', '75%', '100%'].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {!compact && (
          <div className="text-center text-xs md:text-sm font-black text-amber-300/90 tracking-wider uppercase">
            One fair 100% ruler for both
          </div>
        )}
      </div>

      <div className="flex items-center gap-2.5 w-full justify-center">
        <div className={`px-4 py-2 rounded-xl border-2 font-black text-xs md:text-sm lg:text-base text-center transition-all ${verdictStyle}`}>
          {verdict}
        </div>
        {editable && (
          <button
            onClick={resetRig}
            className="p-2 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-[#3B2D6B] text-slate-300 cursor-pointer shrink-0"
            title="Reset Rig"
          >
            <RotateCcw className="w-4.5 h-4.5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PercentRig;
