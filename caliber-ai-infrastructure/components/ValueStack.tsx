
import React, { useState } from 'react';

const CORE_STACK = [
  {
    name: '24/7 AI Voice Reception',
    value: '$3,500/mo',
    recovers: '15–25 missed calls/week × $400 = $6k–$10k',
  },
  {
    name: 'No-Show Elimination System',
    value: '$2,000/mo',
    recovers: '4–6 recovered appts/week = $1,600–$2,400/mo',
  },
  {
    name: 'Dormant Client Reactivation Engine',
    value: '$4,000/mo',
    recovers: '$8k–$12k from reactivated appointments',
  },
  {
    name: 'Omni-Channel Lead Capture',
    value: '$1,500/mo',
    recovers: 'Zero leads fall through cracks',
  },
  {
    name: 'Reputation Compounding System',
    value: '$1,000/mo',
    recovers: 'More Google reviews = free inbound leads',
  },
  {
    name: 'Staff Pre-Qualification Filter',
    value: '$1,500/mo',
    recovers: 'Staff only speaks to ready buyers',
  },
];

const BONUSES = [
  {
    name: 'Close-Ready Staff Script Kit',
    value: '$1,200 (one-time)',
    recovers: 'Every warm lead gets closed',
    num: 1,
  },
  {
    name: 'Monthly Report + Strategy Call',
    value: '$600/mo',
    recovers: 'Full ROI visibility every month',
    num: 2,
  },
  {
    name: '90-Day Competitor Intelligence Audit',
    value: '$2,500 (one-time)',
    recovers: 'Know exactly where you\'re winning',
    num: 3,
  },
  {
    name: 'Seasonal Campaign Playbook (12mo)',
    value: '$1,800 (one-time)',
    recovers: 'Revenue on demand from your database',
    num: 4,
  },
  {
    name: 'Emergency Response SLA',
    value: '$1,000/mo',
    recovers: '4-hour response SLA in writing',
    num: 5,
  },
];

const ValueStack: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[10px] font-black tracking-[0.4em] text-amber-600 uppercase mb-4">
            The Full Autonomy System™ — What's Included
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            $16,100/mo in Value. <span className="text-[#0097B2]">$2,000/mo Investment.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
            Every component has a standalone value and a specific revenue leak it eliminates.
          </p>
        </div>

        {/* Core Stack */}
        <div className="space-y-3 mb-8">
          {CORE_STACK.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition"
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-900 font-black text-lg tracking-tight">{item.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#0097B2] font-black text-lg hidden sm:inline">{item.value}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform ${expandedIndex === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {expandedIndex === i && (
                <div className="px-6 pb-6 pt-0">
                  <div className="bg-slate-50 rounded-xl p-4 flex items-center gap-3">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">What it recovers:</span>
                    <span className="text-slate-700 font-bold text-sm">{item.recovers}</span>
                  </div>
                  <p className="sm:hidden text-[#0097B2] font-black text-sm mt-3">Est. value: {item.value}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bonuses */}
        <div className="space-y-3 mb-12">
          {BONUSES.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-amber-200/50 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition"
              onClick={() => setExpandedIndex(expandedIndex === CORE_STACK.length + i ? null : CORE_STACK.length + i)}
            >
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-500 text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest flex-shrink-0">
                    Bonus {item.num}
                  </div>
                  <span className="text-slate-900 font-black text-lg tracking-tight">{item.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-amber-600 font-black text-lg hidden sm:inline">{item.value}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform ${expandedIndex === CORE_STACK.length + i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {expandedIndex === CORE_STACK.length + i && (
                <div className="px-6 pb-6 pt-0">
                  <div className="bg-amber-50 rounded-xl p-4 flex items-center gap-3">
                    <span className="text-xs font-black text-amber-500 uppercase tracking-widest">What it delivers:</span>
                    <span className="text-slate-700 font-bold text-sm">{item.recovers}</span>
                  </div>
                  <p className="sm:hidden text-amber-600 font-black text-sm mt-3">Value: {item.value}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Totals callout */}
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-[2rem] p-8 md:p-12 text-center">
          <div className="mb-6">
            <p className="text-slate-400 font-bold text-lg line-through mb-1">
              Total Stack Value: $16,100/mo + $5,500 one-time
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Your Investment</p>
              <p className="text-3xl font-black text-slate-900 tracking-tighter">$2,000/mo</p>
              <p className="text-slate-500 text-sm font-bold">+ $10,000 build</p>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">Recovered Revenue</p>
              <p className="text-3xl font-black text-emerald-600 tracking-tighter">~$24,000+/mo</p>
              <p className="text-emerald-600 text-sm font-black">ROI: 10–17x</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;
