
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
    <section id="value-stack" className="bg-surface-2">
      <div className="max-w-narrow mx-auto px-10 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.08em] uppercase text-teal-deep font-semibold mb-3.5">
            The Full Autonomy System™ — what's included
          </div>
          <h2 className="font-serif font-normal text-4xl md:text-[42px] tracking-[-0.01em] text-navy leading-[1.14] mb-3.5">
            $16,100/mo in value. <span className="text-teal">$2,000/mo investment.</span>
          </h2>
          <p className="text-[15px] leading-[1.6] text-ink-3 max-w-[560px] mx-auto">
            Every component has a standalone value and a specific revenue leak it eliminates.
          </p>
        </div>

        {/* Core stack */}
        <div className="flex flex-col gap-2.5 mb-3.5">
          {CORE_STACK.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-md shadow-row overflow-hidden cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-[22px]">
                <div className="flex items-center gap-4">
                  <span className="w-[38px] h-[38px] bg-navy rounded-[11px] flex items-center justify-center text-teal-light text-base flex-shrink-0">✓</span>
                  <span className="text-base font-bold text-navy tracking-[-0.01em]">{item.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[15px] font-bold text-teal hidden sm:inline">{item.value}</span>
                  <span className={`text-muted-3 text-[13px] transition-transform ${expandedIndex === i ? 'rotate-180' : ''}`}>▾</span>
                </div>
              </div>
              {expandedIndex === i && (
                <div className="px-6 pb-[22px] pl-6 sm:pl-[78px]">
                  <div className="bg-surface-2 rounded-sm p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="text-[10px] tracking-[0.1em] uppercase text-muted-2 font-bold flex-shrink-0">What it recovers</span>
                    <span className="text-[13.5px] font-semibold text-ink-2">{item.recovers}</span>
                  </div>
                  <p className="sm:hidden text-teal font-bold text-sm mt-3">Est. value: {item.value}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bonuses */}
        <div className="flex flex-col gap-2.5 mb-10">
          {BONUSES.map((item, i) => {
            const idx = CORE_STACK.length + i;
            return (
              <div
                key={i}
                className="bg-white rounded-md shadow-row border border-teal-wash overflow-hidden cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
              >
                <div className="flex items-center justify-between px-6 py-[22px]">
                  <div className="flex items-center gap-4">
                    <span className="bg-teal text-white text-[10px] font-bold tracking-[0.08em] uppercase px-[11px] py-1.5 rounded-[8px] flex-shrink-0">Bonus {item.num}</span>
                    <span className="text-base font-bold text-navy tracking-[-0.01em]">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[15px] font-bold text-teal-deep hidden sm:inline">{item.value}</span>
                    <span className={`text-muted-3 text-[13px] transition-transform ${expandedIndex === idx ? 'rotate-180' : ''}`}>▾</span>
                  </div>
                </div>
                {expandedIndex === idx && (
                  <div className="px-6 pb-[22px] pl-6 sm:pl-[78px]">
                    <div className="bg-teal-wash rounded-sm p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <span className="text-[10px] tracking-[0.1em] uppercase text-teal-deep font-bold flex-shrink-0">What it delivers</span>
                      <span className="text-[13.5px] font-semibold text-ink-2">{item.recovers}</span>
                    </div>
                    <p className="sm:hidden text-teal-deep font-bold text-sm mt-3">Value: {item.value}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing summary card */}
        <div className="bg-white border border-hairline-teal rounded-xl p-11 text-center">
          <p className="text-[15px] text-muted-2 line-through mb-7">Total Stack Value: $16,100/mo + $5,500 one-time</p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
            <div>
              <div className="text-[11px] tracking-[0.08em] uppercase text-muted-2 font-semibold mb-2">Your Investment</div>
              <div className="font-serif font-medium text-[34px] tracking-[-0.02em] text-navy">$2,000/mo</div>
              <div className="text-[13px] text-muted font-medium mt-1">+ $10,000 build</div>
            </div>
            <div className="hidden md:flex w-[52px] h-[52px] bg-teal rounded-full items-center justify-center text-white text-[22px] mx-auto">→</div>
            <div>
              <div className="text-[11px] tracking-[0.08em] uppercase text-teal-deep font-semibold mb-2">Recovered Revenue</div>
              <div className="font-serif font-medium text-[34px] tracking-[-0.02em] text-teal">~$24,000+/mo</div>
              <div className="text-[13px] text-teal-deep font-bold mt-1">ROI: 10–17x</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;
