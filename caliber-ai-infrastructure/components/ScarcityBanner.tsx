
import React from 'react';

const ScarcityBanner: React.FC = () => {
  return (
    <div className="bg-[#1a1a2e] text-white py-3 px-4 relative z-[60]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-sm">
        <span className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span className="font-medium tracking-wide">
            Q2 2026 — Only <span className="text-amber-400 font-black">2 spots</span> remaining in South Florida.
          </span>
        </span>
        <a
          href="#demo"
          className="hidden sm:inline-flex items-center gap-1 bg-amber-500/20 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-amber-500/30 transition"
        >
          Claim Your Spot <span>→</span>
        </a>
      </div>
    </div>
  );
};

export default ScarcityBanner;
