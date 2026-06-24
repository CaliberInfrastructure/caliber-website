
import React from 'react';

// Calm capacity line (replaces the old loud scarcity banner). One navy strip,
// a single sentence, and a quiet teal link. No animation, no countdown.
const ScarcityBanner: React.FC = () => {
  return (
    <div className="bg-navy">
      <div className="max-w-container mx-auto px-10 py-[11px] flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1 text-center">
        <span className="inline-flex items-center gap-[9px] text-[13px] text-onnavy-3">
          <span className="w-[7px] h-[7px] bg-teal-light rounded-full"></span>
          Q2 2026 — 2 of 6 implementation slots open in South Florida.
        </span>
        <a
          href="#demo"
          className="text-xs font-semibold tracking-[0.02em] text-teal-light hover:opacity-80 transition"
        >
          Claim a slot →
        </a>
      </div>
    </div>
  );
};

export default ScarcityBanner;
