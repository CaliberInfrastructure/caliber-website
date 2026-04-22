
import React, { useState, useEffect, useRef } from 'react';

const RevenueLossCounter: React.FC = () => {
  const [elapsed, setElapsed] = useState(0);
  const startTime = useRef(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((Date.now() - startTime.current) / 1000);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // $850/day ÷ 86,400 seconds × elapsed seconds
  const lostRevenue = (850 / 86400) * elapsed;

  return (
    <div className="bg-slate-950 border-y border-slate-800 py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mb-4">
          Revenue lost by South Florida med spas while you've been on this page
        </p>
        <div
          className="text-5xl md:text-7xl font-black text-red-500 tracking-tighter mb-4"
          style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}
        >
          <span className="inline-block animate-pulse">$</span>
          {lostRevenue.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
        <p className="text-slate-500 text-sm font-medium italic max-w-2xl mx-auto">
          The average med spa leaks $850/day. Every day without Caliber is a day you're funding a competitor.
        </p>
      </div>
    </div>
  );
};

export default RevenueLossCounter;
