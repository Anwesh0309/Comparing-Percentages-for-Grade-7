import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Dices, CheckCircle, Search } from 'lucide-react';
import { narrationScript } from '../data/narration';
import soundEngine from '../utils/audio';

const CASES = [
  { a: { item: 'Sneakers', price: 60, off: 25 }, b: { item: 'Backpack', price: 200, off: 10 } },
  { a: { item: 'Headphones', price: 90, off: 30 }, b: { item: 'Speaker', price: 50, off: 50 } },
  { a: { item: 'Jacket', price: 200, off: 10 }, b: { item: 'Board game', price: 80, off: 25 } },
  { a: { item: 'Lamp', price: 150, off: 15 }, b: { item: 'Book set', price: 70, off: 40 } },
  { a: { item: 'Helmet', price: 80, off: 40 }, b: { item: 'Bike', price: 300, off: 10 } },
];

const money = (n) => (Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`);
const saving = (s) => (s.price * s.off) / 100;

// deterministic option order so the right answer moves around
const savingOptions = (shop, caseIdx, which) => {
  const s = saving(shop);
  const cands = [shop.price - s, shop.off, s * 2, s + 10];
  const wrong = [];
  cands.forEach((c) => {
    if (c !== s && c > 0 && !wrong.includes(c)) wrong.push(c);
  });
  const three = wrong.slice(0, 2);
  const pos = (caseIdx + which) % 3;
  const opts = [...three];
  opts.splice(pos, 0, s);
  return opts;
};

const PriceStrip = ({ percent, color }) => (
  <div className="relative w-full h-4 rounded-full bg-[#1A1333] border border-purple-700/60 overflow-hidden">
    <div className="absolute inset-y-0 left-0" style={{ width: `${percent}%`, backgroundColor: color, opacity: 0.9 }} />
    {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((t) => (
      <div key={t} className="absolute top-0 bottom-0 border-l border-[#0F0B1E]/60" style={{ left: `${t}%` }} />
    ))}
  </div>
);

export const DealDetective = () => {
  const [caseIdx, setCaseIdx] = useState(0);
  const [step, setStep] = useState(0); // 0 = saving A, 1 = saving B, 2 = verdict, 3 = solved
  const [wrong, setWrong] = useState(null);

  const current = CASES[caseIdx];
  const sa = saving(current.a);
  const sb = saving(current.b);
  const winner = sa === sb ? 'Same saving' : sa > sb ? 'Shop A' : 'Shop B';

  const optsA = useMemo(() => savingOptions(current.a, caseIdx, 0), [caseIdx]);
  const optsB = useMemo(() => savingOptions(current.b, caseIdx, 1), [caseIdx]);
  const verdictOpts = ['Shop A', 'Shop B', 'Same saving'];

  const choose = (value) => {
    let correct = false;
    if (step === 0) correct = value === sa;
    else if (step === 1) correct = value === sb;
    else if (step === 2) correct = value === winner;

    if (correct) {
      setWrong(null);
      soundEngine.playText(narrationScript.correct_cheer);
      setStep(step + 1);
      if (step === 2) confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    } else {
      setWrong(value);
      soundEngine.playText(narrationScript.incorrect_try_again);
    }
  };

  const nextCase = () => {
    setCaseIdx((i) => (i + 1) % CASES.length);
    setStep(0);
    setWrong(null);
  };

  const shops = [
    { id: 'A', data: current.a, color: '#06B6D4', text: 'text-cyan-300', border: 'border-cyan-400/70', solved: step > 0, save: sa },
    { id: 'B', data: current.b, color: '#F59E0B', text: 'text-amber-300', border: 'border-amber-400/70', solved: step > 1, save: sb },
  ];

  const question =
    step === 0 ? `Step 1: How much money does Shop A save you?`
    : step === 1 ? `Step 2: How much money does Shop B save you?`
    : step === 2 ? `Step 3: Which shop saves you more?`
    : '';

  const formula =
    step === 0 ? `Saving A = ${current.a.off}% of ${money(current.a.price)} = ?`
    : step === 1 ? `Saving B = ${current.b.off}% of ${money(current.b.price)} = ?`
    : step === 2 ? `Compare: ${money(sa)} vs ${money(sb)}`
    : `${money(sa)} vs ${money(sb)}`;

  const currentOptions = step === 0 ? optsA.map(money) : step === 1 ? optsB.map(money) : verdictOpts;
  const currentValues = step === 0 ? optsA : step === 1 ? optsB : verdictOpts;

  return (
    <div className="w-full max-w-xl flex flex-col items-center space-y-3 select-none">
      <div className="w-full flex items-center justify-between">
        <span className="text-sm md:text-base font-black text-cyan-300 flex items-center gap-2">
          <Search className="w-5 h-5" /> Case #{caseIdx + 1}
        </span>
        <button
          onClick={nextCase}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-1.5 rounded-xl text-xs md:text-sm font-black flex items-center gap-1.5 cursor-pointer shadow-glow-gold transition-transform hover:scale-105"
        >
          <Dices className="w-5 h-5" />
          <span>New Case 🎲</span>
        </button>
      </div>

      {/* Two shop cards */}
      <div className="grid grid-cols-2 gap-3.5 w-full">
        {shops.map((s) => (
          <div key={s.id} className={`rounded-2xl border-2 ${s.border} bg-[#161129] p-3 space-y-2 text-center`}>
            <div className={`text-sm md:text-base font-black uppercase tracking-wider ${s.text}`}>Shop {s.id}</div>
            <div className="text-base md:text-lg font-black text-purple-200">{s.data.item}</div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-display leading-none">{money(s.data.price)}</div>
            <div className="inline-block bg-pink-500 text-white text-xs md:text-sm lg:text-base font-black px-3.5 py-1 rounded-xl">{s.data.off}% off</div>
            <PriceStrip percent={s.data.off} color={s.color} />
            <div className={`h-6 text-xs md:text-sm lg:text-base font-black ${s.solved ? 'text-emerald-300' : 'text-purple-400'}`}>
              {s.solved ? `✅ Saves ${money(s.save)}` : 'Saving: ?'}
            </div>
          </div>
        ))}
      </div>

      {/* Formula pill */}
      <div className="bg-[#161129] border border-purple-700/60 px-5 py-1.5 rounded-2xl w-full text-center shadow-md">
        <p className="text-sm md:text-base lg:text-lg font-black text-emerald-400">{formula}</p>
      </div>

      {step < 3 ? (
        <>
          <p className="text-sm md:text-base lg:text-lg font-black text-slate-100 text-center">{question}</p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 w-full">
            {currentValues.map((val, i) => (
              <button
                key={`${step}-${val}`}
                onClick={() => choose(val)}
                className={`px-6 py-2.5 rounded-2xl text-base md:text-xl lg:text-2xl font-black transition-all cursor-pointer border ${
                  wrong === val
                    ? 'bg-red-950 border-red-500 text-red-200 shake'
                    : 'bg-[#1A1333] text-purple-100 hover:text-white hover:border-amber-400 border-purple-700/60'
                }`}
              >
                {currentOptions[i]}
              </button>
            ))}
          </div>
          {wrong !== null && (
            <p className="text-xs md:text-sm font-black text-amber-300 text-center">
              {step < 2 ? 'Try again! Find 10% first, then scale it up to the percent off.' : 'Try again! Compare the two dollar amounts, not the percents.'}
            </p>
          )}
        </>
      ) : (
        <div className="bg-emerald-950 border-2 border-emerald-500 text-emerald-300 px-5 py-2.5 rounded-2xl text-xs md:text-sm lg:text-base font-black shadow-glow-green flex items-center gap-2 text-center">
          <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
          <span>
            {winner === 'Same saving'
              ? `Case solved! Both shops save ${money(sa)} — different percents, same money!`
              : `Case solved! ${winner} saves more (${money(Math.max(sa, sb))} vs ${money(Math.min(sa, sb))}).${
                  (sa > sb) === (current.a.off > current.b.off) ? '' : ' The smaller percent won!'
                }`}
          </span>
        </div>
      )}
    </div>
  );
};

export default DealDetective;
