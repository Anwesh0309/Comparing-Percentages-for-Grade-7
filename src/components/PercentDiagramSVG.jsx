import React from 'react';

const PALETTE = ['#06B6D4', '#F59E0B', '#EC4899', '#10B981'];

const fitFont = (text, base, maxChars) => {
  const len = String(text).length;
  return len <= maxChars ? base : Math.max(base * (maxChars / len), base * 0.6);
};

export const PercentDiagramSVG = ({ diagram }) => {
  if (!diagram) return null;
  const { type = 'grid' } = diagram;
  const svgClass = 'w-full h-full max-w-[340px] select-none';

  // ---------- 10 x 10 grid (percent = out of 100) ----------
  if (type === 'grid') {
    const { shaded = 35 } = diagram;
    const cells = [];
    for (let i = 0; i < 100; i++) {
      const row = Math.floor(i / 10);
      const col = i % 10;
      cells.push(
        <rect
          key={i}
          x={21 + col * 26}
          y={21 + row * 26}
          width="24"
          height="24"
          rx="4"
          fill={i < shaded ? '#06B6D4' : '#1A1333'}
          fillOpacity={i < shaded ? 0.9 : 1}
          stroke={i < shaded ? '#67E8F9' : '#3B2D6B'}
          strokeWidth="1.5"
        />
      );
    }
    return (
      <svg viewBox="0 0 300 300" className={svgClass}>
        {cells}
      </svg>
    );
  }

  // ---------- convert: fraction / decimal / percent -> ? ----------
  if (type === 'convert') {
    const { from = '3/4', to = '?%' } = diagram;
    return (
      <svg viewBox="0 0 300 300" className={svgClass}>
        <rect x="10" y="95" width="118" height="110" rx="18" fill="#161129" stroke="#06B6D4" strokeWidth="4" />
        <text x="69" y="164" textAnchor="middle" fill="#F3F4F6" fontSize={fitFont(from, 44, 4)} fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{from}</text>
        <text x="150" y="162" textAnchor="middle" fill="#FFB800" fontSize="40" fontWeight="900" fontFamily="Outfit, Inter, sans-serif">=</text>
        <rect x="172" y="95" width="118" height="110" rx="18" fill="#161129" stroke="#EF4444" strokeWidth="4" />
        <text x="231" y="164" textAnchor="middle" fill="#EF4444" fontSize="48" fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{to}</text>
        <text x="150" y="255" textAnchor="middle" fill="#A78BFA" fontSize="19" fontWeight="900">Same amount, new name</text>
      </svg>
    );
  }

  // ---------- cards: 2 or 4 values to compare ----------
  if (type === 'cards') {
    const { items = [] } = diagram;
    if (items.length <= 2) {
      return (
        <svg viewBox="0 0 300 300" className={svgClass}>
          {items.map((it, i) => (
            <g key={i}>
              <rect x={12 + i * 148} y="80" width="128" height="140" rx="20" fill="#161129" stroke={PALETTE[i]} strokeWidth="5" />
              <text x={76 + i * 148} y="164" textAnchor="middle" fill="#F3F4F6" fontSize={fitFont(it.text, 46, 4)} fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{it.text}</text>
            </g>
          ))}
          <text x="150" y="262" textAnchor="middle" fill="#A78BFA" fontSize="19" fontWeight="900">Same whole, different forms</text>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 300 300" className={svgClass}>
        {items.map((it, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          return (
            <g key={i}>
              <rect x={12 + col * 146} y={22 + row * 130} width="130" height="112" rx="18" fill="#161129" stroke={PALETTE[i % 4]} strokeWidth="5" />
              <text x={77 + col * 146} y={92 + row * 130} textAnchor="middle" fill="#F3F4F6" fontSize={fitFont(it.text, 42, 4)} fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{it.text}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // ---------- bars: percent shaded on a 100% ruler ----------
  if (type === 'bars') {
    const { items = [], caption } = diagram;
    const gap = 96;
    const startY = items.length === 1 ? 118 : 70;
    return (
      <svg viewBox="0 0 300 300" className={svgClass}>
        {items.map((it, i) => {
          const y = startY + i * gap;
          return (
            <g key={i}>
              <text x="25" y={y - 14} fill="#F3F4F6" fontSize="22" fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{it.label}</text>
              <rect x="25" y={y} width="250" height="42" rx="12" fill="#1A1333" stroke="#3B2D6B" strokeWidth="3" />
              <rect x="25" y={y} width={(250 * it.percent) / 100} height="42" rx="12" fill={PALETTE[i % 4]} fillOpacity="0.85" />
              {[25, 50, 75].map((t) => (
                <line key={t} x1={25 + (250 * t) / 100} y1={y} x2={25 + (250 * t) / 100} y2={y + 42} stroke="#0F0B1E" strokeOpacity="0.6" strokeWidth="2" strokeDasharray="4 4" />
              ))}
              <text x="25" y={y + 64} fill="#A78BFA" fontSize="15" fontWeight="800">0%</text>
              <text x="150" y={y + 64} textAnchor="middle" fill="#A78BFA" fontSize="15" fontWeight="800">50%</text>
              <text x="275" y={y + 64} textAnchor="end" fill="#A78BFA" fontSize="15" fontWeight="800">100%</text>
            </g>
          );
        })}
        {caption && (
          <text x="150" y="272" textAnchor="middle" fill="#FFB800" fontSize="24" fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{caption}</text>
        )}
      </svg>
    );
  }

  // ---------- scores: name + score cards ----------
  if (type === 'scores') {
    const { items = [], mode } = diagram;
    const single = items.length === 1;
    return (
      <svg viewBox="0 0 300 300" className={svgClass}>
        {items.map((it, i) => {
          const w = single ? 210 : 132;
          const x = single ? 45 : 8 + i * 152;
          const text = mode === 'change' ? it.label : `${it.part}/${it.whole}`;
          return (
            <g key={i}>
              <rect x={x} y="70" width={w} height="160" rx="22" fill="#161129" stroke={PALETTE[i]} strokeWidth="5" />
              <text x={x + w / 2} y="120" textAnchor="middle" fill={PALETTE[i]} fontSize={fitFont(it.name, 24, 8)} fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{it.name}</text>
              <text x={x + w / 2} y="185" textAnchor="middle" fill="#F3F4F6" fontSize={fitFont(text, mode === 'change' ? 30 : 42, single ? 8 : 5)} fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{text}</text>
              <text x={x + w / 2} y="214" textAnchor="middle" fill="#A78BFA" fontSize="14" fontWeight="800">{mode === 'change' ? 'before → after' : 'score / total'}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // ---------- wholes: bar length = size of the whole, shading = percent ----------
  if (type === 'wholes') {
    const { items = [] } = diagram;
    const maxWhole = Math.max(...items.map((it) => it.whole));
    return (
      <svg viewBox="0 0 300 300" className={svgClass}>
        {items.map((it, i) => {
          const y = 52 + i * 118;
          const w = Math.max(70, (250 * it.whole) / maxWhole);
          const sub = `${it.percent}% of ${it.whole}`;
          return (
            <g key={i}>
              <text x="25" y={y - 12} fill={PALETTE[i]} fontSize={fitFont(it.label, 22, 12)} fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{it.label}</text>
              <rect x="25" y={y} width={w} height="50" rx="12" fill="#1A1333" stroke="#3B2D6B" strokeWidth="3" />
              <rect x="25" y={y} width={(w * it.percent) / 100} height="50" rx="12" fill={PALETTE[i]} fillOpacity="0.85" />
              {sub !== it.label && (
                <text x="25" y={y + 76} fill="#F3F4F6" fontSize="20" fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{sub}</text>
              )}
            </g>
          );
        })}
      </svg>
    );
  }

  // ---------- tags: shop price tags with % off ----------
  if (type === 'tags') {
    const { items = [] } = diagram;
    const single = items.length === 1;
    return (
      <svg viewBox="0 0 300 300" className={svgClass}>
        {items.map((it, i) => {
          const w = single ? 190 : 134;
          const x = single ? 55 : 8 + i * 152;
          return (
            <g key={i}>
              <rect x={x} y="36" width={w} height="230" rx="22" fill="#161129" stroke={PALETTE[i]} strokeWidth="5" />
              <circle cx={x + w / 2} cy="58" r="8" fill="#0F0B1E" stroke={PALETTE[i]} strokeWidth="3" />
              <text x={x + w / 2} y="104" textAnchor="middle" fill={PALETTE[i]} fontSize="24" fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{it.label}</text>
              <text x={x + w / 2} y="134" textAnchor="middle" fill="#C4B5FD" fontSize={fitFont(it.item, 19, 9)} fontWeight="800">{it.item}</text>
              <text x={x + w / 2} y="188" textAnchor="middle" fill="#F3F4F6" fontSize="44" fontWeight="900" fontFamily="Outfit, Inter, sans-serif">${it.price}</text>
              <rect x={x + w / 2 - 52} y="208" width="104" height="40" rx="12" fill="#EC4899" />
              <text x={x + w / 2} y="235" textAnchor="middle" fill="#FFFFFF" fontSize="23" fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{it.off}% off</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // ---------- change: before / after bars ----------
  if (type === 'change') {
    const { from = 40, to = 50, unit = '' } = diagram;
    const max = Math.max(from, to);
    const show = (v) => (unit === '$' ? `$${v}` : `${v}${unit}`);
    const rows = [
      { label: 'Before', value: from, color: '#8B5CF6' },
      { label: 'After', value: to, color: to >= from ? '#10B981' : '#EF4444' },
    ];
    return (
      <svg viewBox="0 0 300 300" className={svgClass}>
        {rows.map((r, i) => {
          const y = 66 + i * 100;
          const w = Math.max(60, (250 * r.value) / max);
          return (
            <g key={r.label}>
              <text x="25" y={y - 12} fill="#F3F4F6" fontSize="22" fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{r.label}</text>
              <rect x="25" y={y} width={w} height="56" rx="14" fill={r.color} fillOpacity="0.85" stroke="#F3F4F6" strokeOpacity="0.5" strokeWidth="2" />
              <text x={25 + w - 14} y={y + 38} textAnchor="end" fill="#FFFFFF" fontSize="30" fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{show(r.value)}</text>
            </g>
          );
        })}
        <text x="150" y="278" textAnchor="middle" fill="#FFB800" fontSize="22" fontWeight="900" fontFamily="Outfit, Inter, sans-serif">{to >= from ? 'Increase ▲' : 'Decrease ▼'}</text>
      </svg>
    );
  }

  return null;
};

export default PercentDiagramSVG;
