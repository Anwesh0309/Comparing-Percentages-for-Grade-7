import React from 'react';

export const BackgroundWatermarks = () => {
  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden">
      {/* 54 over 100 fraction (top left) */}
      <div className="absolute top-[8%] left-[5%] text-slate-100/5 font-black text-6xl md:text-7xl lg:text-8xl rotate-[-12deg] flex flex-col items-center leading-none">
        <span>54</span>
        <div className="w-full h-1 bg-slate-100/5 my-0.5" />
        <span>100</span>
      </div>

      {/* 91 11 66 cluster (upper left) */}
      <div className="absolute top-[5%] left-[22%] flex items-baseline gap-2 text-slate-100/5 font-black">
        <span className="text-7xl md:text-8xl lg:text-9xl rotate-[-8deg]">91</span>
        <span className="text-3xl md:text-4xl">11</span>
        <span className="text-5xl md:text-6xl rotate-[10deg]">66</span>
      </div>

      {/* T symbol */}
      <div className="absolute top-[18%] left-[30%] text-slate-100/5 font-black text-6xl md:text-7xl rotate-[-15deg]">
        T
      </div>

      {/* 90 (top center) */}
      <div className="absolute top-[3%] left-[35%] text-slate-100/5 font-black text-6xl md:text-7xl lg:text-8xl rotate-[-5deg]">
        90
      </div>

      {/* 64 (top center right) */}
      <div className="absolute top-[2%] left-[52%] text-slate-100/5 font-black text-6xl md:text-7xl rotate-[8deg]">
        64
      </div>

      {/* 30 69 500 cluster (top right) */}
      <div className="absolute top-[5%] right-[28%] flex items-start gap-3 text-slate-100/5 font-black">
        <span className="text-4xl md:text-5xl rotate-[5deg]">30</span>
        <span className="text-3xl md:text-4xl rotate-[-10deg]">69</span>
        <span className="text-8xl md:text-9xl lg:text-[10rem] rotate-[-5deg] ml-4">500</span>
      </div>

      {/* 90 (far right) */}
      <div className="absolute top-[8%] right-[8%] text-slate-100/5 font-black text-7xl md:text-8xl lg:text-9xl rotate-[12deg]">
        90
      </div>

      {/* H (far left) */}
      <div className="absolute top-[38%] left-[4%] text-slate-100/5 font-black text-7xl md:text-8xl rotate-[6deg]">
        H
      </div>

      {/* 200 (lower left) */}
      <div className="absolute bottom-[22%] left-[10%] text-slate-100/5 font-black text-8xl md:text-9xl lg:text-[11rem] rotate-[-12deg]">
        200
      </div>

      {/* 347 (middle right) */}
      <div className="absolute top-[20%] right-[10%] text-slate-100/5 font-black text-8xl md:text-9xl lg:text-[11rem] rotate-[15deg]">
        347
      </div>

      {/* 123 (lower right) */}
      <div className="absolute bottom-[35%] right-[8%] text-slate-100/5 font-black text-7xl md:text-8xl rotate-[-8deg]">
        123
      </div>

      {/* 999 (bottom right) */}
      <div className="absolute bottom-[10%] right-[12%] text-slate-100/5 font-black text-9xl md:text-[10rem] lg:text-[12rem] rotate-[-10deg]">
        999
      </div>

      {/* Percentages watermarks */}
      <div className="absolute bottom-[15%] left-[32%] text-slate-100/5 font-black text-7xl md:text-8xl rotate-[14deg]">
        25%
      </div>
      <div className="absolute top-[40%] right-[32%] text-slate-100/5 font-black text-8xl md:text-9xl rotate-[-14deg]">
        50%
      </div>
    </div>
  );
};

export default BackgroundWatermarks;
