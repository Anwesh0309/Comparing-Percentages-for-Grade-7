import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Apple, Sparkles } from 'lucide-react';
import soundEngine from '../utils/audio';

// Different whole sizes (in kg) for Grid A and Grid B when "real amounts" is switched on
const WHOLE_SETS = [
  [50, 200],
  [200, 80],
  [300, 60],
];

const fmt = (n) => String(parseFloat(n.toFixed(1)));

const PercentGrid = ({ count, color, onSet }) => {
  const ref = useRef(null);
  const dragging = useRef(false);

  const cellFromEvent = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const col = Math.min(9, Math.max(0, Math.floor(((e.clientX - rect.left) / rect.width) * 10)));
    const row = Math.min(9, Math.max(0, Math.floor(((e.clientY - rect.top) / rect.height) * 10)));
    return row * 10 + col;
  };

  const apply = (next) => {
    if (next !== count) soundEngine.playDragClick();
    onSet(next);
  };

  const handleDown = (e) => {
    dragging.current = true;
    ref.current.setPointerCapture(e.pointerId);
    const idx = cellFromEvent(e);
    // tapping the last shaded square un-shades it
    apply(idx + 1 === count ? idx : idx + 1);
  };
  const handleMove = (e) => {
    if (dragging.current) apply(cellFromEvent(e) + 1);
  };
  const handleUp = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    if (ref.current && ref.current.hasPointerCapture(e.pointerId)) ref.current.releasePointerCapture(e.pointerId);
    onSet(count, true);
  };

  return (
    <div
      ref={ref}
      onPointerDown={handleDown}
      onPointerMove={handleMove}
      onPointerUp={handleUp}
      onPointerCancel={handleUp}
      className="w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 grid grid-cols-10 gap-[2.5px] p-2 rounded-2xl bg-[#130E26] border-2 border-purple-700/70 touch-none cursor-crosshair shrink-0 shadow-lg"
    >
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="rounded-[2.5px] pointer-events-none transition-colors duration-75"
          style={{
            backgroundColor: i < count ? color : '#1F183D',
            opacity: i < count ? 0.95 : 1,
          }}
        />
      ))}
    </div>
  );
};

export const PercentGridLab = () => {
  const [counts, setCounts] = useState([45, 30]);
  const [showAmounts, setShowAmounts] = useState(false);
  const [wholeIdx, setWholeIdx] = useState(0);

  const [a, b] = counts;
  const [wholeA, wholeB] = WHOLE_SETS[wholeIdx];
  const amountA = (a * wholeA) / 100;
  const amountB = (b * wholeB) / 100;

  const setGrid = (idx) => (value, released) => {
    if (released) {
      // celebrate when both grids show the same percent, or the "whoa" moment in amounts mode
      const va = idx === 0 ? value : counts[0];
      const vb = idx === 1 ? value : counts[1];
      if (va > 0 && va === vb && !showAmounts) {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      }
      if (showAmounts && va !== vb && (va > vb) !== ((va * wholeA) > (vb * wholeB))) {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      }
      return;
    }
    setCounts((prev) => {
      const next = [...prev];
      next[idx] = value;
      return next;
    });
  };

  let verdict;
  let verdictStyle = 'bg-purple-950/80 border-purple-600 text-amber-400';
  if (!showAmounts) {
    if (a === b) {
      verdict = `🤝 Equal! Both grids represent ${a}% (${a}/100 = ${(a / 100).toFixed(2)})`;
      verdictStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-glow-green';
    } else {
      const bigger = a > b ? 'A' : 'B';
      verdict = `Grid ${bigger} is greater by ${Math.abs(a - b)} percentage points`;
    }
  } else if (amountA === amountB) {
    verdict = `🤝 Same amount: ${fmt(amountA)} kg each!`;
    verdictStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-glow-green';
  } else {
    const moreAmount = amountA > amountB ? 'A' : 'B';
    const morePercent = a === b ? null : a > b ? 'A' : 'B';
    if (morePercent && morePercent !== moreAmount) {
      verdict = `😲 Grid ${morePercent} has the higher percent, but Grid ${moreAmount} has MORE kg!`;
      verdictStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-glow-green';
    } else {
      verdict = `Grid ${moreAmount} has more: ${fmt(Math.max(amountA, amountB))} kg vs ${fmt(Math.min(amountA, amountB))} kg`;
    }
  }

  const cards = [
    { id: 'A', color: '#06B6D4', text: 'text-cyan-300', count: a, whole: wholeA, fruit: '🍎 apples' },
    { id: 'B', color: '#F59E0B', text: 'text-amber-300', count: b, whole: wholeB, fruit: '🍊 oranges' },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-3 select-none">
      <div className="flex items-start justify-center gap-4 md:gap-8">
        {cards.map((c, idx) => (
          <div key={c.id} className="flex flex-col items-center space-y-1.5">
            <div className="flex items-center gap-2">
              <span className={`text-sm md:text-base font-black uppercase tracking-wider ${c.text}`}>Grid {c.id}</span>
              <span className={`text-xl md:text-2xl lg:text-3xl font-black font-display ${c.text}`}>{c.count}%</span>
            </div>
            
            <PercentGrid count={c.count} color={c.color} onSet={setGrid(idx)} />

            {/* Live 3-Name Equivalent Pill Breakdown (Story Slide 1 Concept) */}
            <div className="bg-[#160e36] border border-purple-800/60 rounded-xl px-3 py-1.5 text-center space-y-0.5 shadow-md">
              <div className="text-xs md:text-sm font-black text-slate-100 flex items-center justify-center gap-2">
                <span className="text-amber-300">{c.count}%</span>
                <span>=</span>
                <span className="text-cyan-300">{c.count}/100</span>
                <span>=</span>
                <span className="text-emerald-300">{(c.count / 100).toFixed(2)}</span>
              </div>
              <div className="text-[10px] md:text-xs font-extrabold text-purple-300">
                {showAmounts
                  ? `${c.count}% of ${c.whole} kg = ${fmt((c.count * c.whole) / 100)} kg`
                  : `${c.count} out of 100 squares`}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`px-5 py-2 rounded-xl border-2 font-black text-sm md:text-base lg:text-lg text-center transition-all ${verdictStyle}`}>
        {verdict}
      </div>

      <div className="flex items-center justify-center gap-2.5 flex-wrap pt-0.5">
        <button
          onClick={() => setShowAmounts((v) => !v)}
          className={`px-4 py-2 rounded-xl font-black text-xs md:text-sm lg:text-base flex items-center gap-2 transition-all cursor-pointer ${
            showAmounts
              ? 'bg-amber-400 text-slate-950 shadow-glow-gold scale-105'
              : 'bg-[#130E26]/90 text-purple-200 hover:text-white border border-purple-800/60'
          }`}
        >
          <Apple className="w-5 h-5" />
          <span>{showAmounts ? 'Showing real amounts' : 'Show real amounts'}</span>
        </button>
        {showAmounts && (
          <button
            onClick={() => setWholeIdx((i) => (i + 1) % WHOLE_SETS.length)}
            className="px-4 py-2 rounded-xl font-black text-xs md:text-sm lg:text-base bg-[#130E26]/90 text-purple-200 hover:text-white border border-purple-800/60 cursor-pointer"
          >
            Change wholes ({wholeA} kg vs {wholeB} kg) 🔄
          </button>
        )}
        <button
          onClick={() => setCounts([45, 30])}
          className="p-2 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-[#3B2D6B] text-slate-300 cursor-pointer"
          title="Reset grids"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PercentGridLab;
