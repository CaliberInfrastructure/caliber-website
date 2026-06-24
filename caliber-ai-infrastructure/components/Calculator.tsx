
import React, { useState, useMemo } from 'react';
import { calculateROI } from '../services/roiCalculator';
import { RevenueCalculation } from '../types';

const METHODOLOGY = [
  {
    n: 1,
    accent: 'bg-terracotta',
    title: 'Missed Call Leakage',
    formula: '(Weekly Missed Calls × 4 weeks) × 50% booking intent × Avg Ticket',
    body: (
      <>We assume <strong className="text-navy font-bold">50% of missed calls</strong> represent genuine booking intent. This is conservative—industry data suggests it could be higher. Monthly missed calls are multiplied by your average treatment price.</>
    ),
  },
  {
    n: 2,
    accent: 'bg-terracotta',
    title: 'No-Show Leakage',
    formula: '(Monthly Revenue ÷ Avg Ticket) × No-Show Rate × Avg Ticket × 50%',
    body: (
      <>We estimate monthly appointments from your revenue, then apply your no-show rate. The <strong className="text-navy font-bold">50% factor</strong> accounts for partial recovery through rebooks and last-minute fills that already happen organically.</>
    ),
  },
  {
    n: 3,
    accent: 'bg-teal',
    title: 'Recovery Projection',
    formula: 'Total Monthly Leakage × 75% Recovery Rate',
    body: (
      <>With Caliber infrastructure (AI text-back, reminder sequences, reactivation), we project <strong className="text-navy font-bold">75% recovery</strong> of identified leakage. This accounts for leads that can't be recovered regardless of follow-up.</>
    ),
  },
  {
    n: 4,
    accent: 'bg-teal',
    title: 'ROI Calculation',
    formula: '(Monthly Recovery − $2,000 Full Autonomy Fee) ÷ $2,000',
    body: (
      <>ROI is calculated against the <strong className="text-navy font-bold">Full Autonomy System™ ($2,000/mo)</strong>, our flagship infrastructure. Lower tiers will have different ROI profiles based on their monthly fee.</>
    ),
  },
];

const Calculator: React.FC = () => {
  const [params, setParams] = useState<RevenueCalculation>({
    currentMonthlyRevenue: 137500,
    avgTicket: 450,
    weeklyMissedCalls: 15,
    noShowRate: 20
  });

  const [showMethodology, setShowMethodology] = useState(false);

  const results = useMemo(() => calculateROI(params), [params]);

  const handleChange = (name: keyof RevenueCalculation, value: number) => {
    setParams(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="calculator" className="bg-white">
      <div className="max-w-container mx-auto px-10 py-20">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <div className="text-xs tracking-[0.06em] uppercase text-teal-deep font-semibold mb-3.5">Revenue Audit</div>
          <h2 className="font-serif font-normal text-4xl md:text-[44px] tracking-[-0.01em] text-navy leading-[1.12] mb-3">Infrastructure leakage calculator</h2>
          <p className="text-sm text-muted">Calculations assume 75% recovery efficiency on hot leads &amp; repeat customers.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch mb-6">
          {/* Input panel */}
          <div className="flex-none w-full lg:w-[360px] bg-surface-2 rounded-lg p-8 flex flex-col gap-[26px]">
            <div>
              <label className="block text-[11px] tracking-[0.08em] uppercase text-muted font-semibold mb-3">Current Monthly Revenue</label>
              <select
                value={params.currentMonthlyRevenue}
                onChange={(e) => handleChange('currentMonthlyRevenue', parseInt(e.target.value))}
                className="w-full p-[15px] rounded-sm border border-hairline-2 bg-white text-[15px] font-semibold text-navy outline-none focus:ring-2 focus:ring-teal/40 appearance-none cursor-pointer"
              >
                <option value={75000}>$50k – $100k</option>
                <option value={137500}>$100k – $175k</option>
                <option value={262500}>$175k – $350k</option>
                <option value={450000}>$350k+</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.08em] uppercase text-muted font-semibold mb-3">Avg. Treatment Price</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-2 font-semibold">$</span>
                <input
                  type="number"
                  value={params.avgTicket}
                  onChange={(e) => handleChange('avgTicket', parseInt(e.target.value) || 0)}
                  className="w-full py-[15px] pl-[30px] pr-[15px] rounded-sm border border-hairline-2 bg-white text-lg font-bold text-teal outline-none focus:ring-2 focus:ring-teal/40"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-3.5">
                <span className="text-[11px] tracking-[0.08em] uppercase text-muted font-semibold">Weekly Missed Calls</span>
                <span className="bg-teal text-white text-xs font-bold px-3 py-[3px] rounded-full">{params.weeklyMissedCalls}</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                value={params.weeklyMissedCalls}
                onChange={(e) => handleChange('weeklyMissedCalls', parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-3.5">
                <span className="text-[11px] tracking-[0.08em] uppercase text-muted font-semibold">Current No-Show Rate</span>
                <span className="bg-teal text-white text-xs font-bold px-3 py-[3px] rounded-full">{params.noShowRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                value={params.noShowRate}
                onChange={(e) => handleChange('noShowRate', parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 flex flex-col gap-[18px]">
            {/* Navy leakage panel */}
            <div className="bg-navy rounded-lg p-[34px] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-terracotta text-white text-[10px] tracking-[0.12em] uppercase font-semibold px-[18px] py-2 rounded-tr-lg rounded-bl-md">Revenue Leakage Detected</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-[18px]">
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-onnavy-2 font-semibold mb-2">Total Monthly Leakage</div>
                  <div className="font-serif font-medium text-[48px] tracking-[-0.02em] leading-none text-terracotta-light mb-[18px]">${Math.round(results.totalLossMonthly).toLocaleString()}</div>
                  <div className="border-t border-navy-line pt-3.5 flex flex-col gap-[9px]">
                    <div className="flex justify-between text-[12.5px]"><span className="text-onnavy-2">Missed calls</span><span className="text-onnavy-3 font-semibold">${Math.round(results.missedCallLossMonthly).toLocaleString()}</span></div>
                    <div className="flex justify-between text-[12.5px]"><span className="text-onnavy-2">No-shows</span><span className="text-onnavy-3 font-semibold">${Math.round(results.noShowLossMonthly).toLocaleString()}</span></div>
                  </div>
                </div>
                <div className="bg-white/[0.04] border border-navy-line rounded-md p-6 flex flex-col justify-center">
                  <div className="text-[11px] tracking-[0.1em] uppercase text-onnavy-2 font-semibold mb-2">Total Annualized Leakage</div>
                  <div className="font-serif font-medium text-[46px] tracking-[-0.02em] leading-none text-white">${Math.round(results.totalLossAnnual).toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Teal recovery panel */}
            <div className="bg-teal rounded-lg p-[34px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-onnavy-wash font-semibold mb-2">Monthly Recovery Goal</div>
                  <div className="font-serif font-medium text-[48px] tracking-[-0.02em] leading-none text-white mb-4">+${Math.round(results.recoveryMonthly).toLocaleString()}</div>
                  <div className="inline-flex items-center gap-2 bg-white/[0.14] rounded-full px-3.5 py-[7px] text-[11px] tracking-[0.06em] uppercase text-white font-semibold">
                    <span className="w-[7px] h-[7px] bg-positive rounded-full"></span> Deploy Full Autonomy System™
                  </div>
                </div>
                <div className="bg-white/[0.14] rounded-md p-6 flex flex-col justify-center">
                  <div className="text-[11px] tracking-[0.1em] uppercase text-onnavy-wash font-semibold mb-2">Annualized Recovery</div>
                  <div className="font-serif font-medium text-[40px] tracking-[-0.02em] leading-none text-white">+${Math.round(results.recoveryAnnual).toLocaleString()}</div>
                  <div className="flex justify-between items-center mt-4 border-t border-white/20 pt-3.5">
                    <span className="text-[11px] tracking-[0.06em] uppercase text-onnavy-wash font-semibold">Projected ROI</span>
                    <span className="font-serif font-medium text-[26px] text-white">{results.roi}x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology disclosure */}
        <div>
          <button
            onClick={() => setShowMethodology(!showMethodology)}
            className="w-full flex items-center justify-between bg-surface-2 border border-hairline-2 hover:bg-hairline/40 transition px-6 py-[18px] rounded-md text-left"
          >
            <span className="flex items-center gap-3.5">
              <span className="w-[34px] h-[34px] bg-white border border-hairline-2 rounded-full flex items-center justify-center text-muted-2 text-[15px] font-bold">i</span>
              <span className="text-[15px] font-semibold text-navy">How we calculate these numbers</span>
            </span>
            <span className={`text-muted-2 text-[13px] transition-transform ${showMethodology ? 'rotate-180' : ''}`}>▾</span>
          </button>

          {showMethodology && (
            <div className="mt-4 bg-white border border-hairline rounded-lg p-10 flex flex-col gap-8">
              {METHODOLOGY.map((step) => (
                <div key={step.n}>
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <span className={`w-7 h-7 ${step.accent} text-white rounded-full flex items-center justify-center font-bold text-[13px]`}>{step.n}</span>
                    <h4 className="font-serif font-medium text-[21px] text-navy">{step.title}</h4>
                  </div>
                  <div className="bg-surface-2 border border-hairline rounded-sm p-4 font-mono text-[13px] text-ink-3 mb-3">{step.formula}</div>
                  <p className="text-[13.5px] leading-[1.6] text-ink-3 max-w-[760px]">{step.body}</p>
                </div>
              ))}

              <div className="bg-navy rounded-md p-[26px] text-center">
                <p className="text-[13.5px] leading-[1.6] text-onnavy italic">
                  These are estimates based on industry benchmarks. Your <span className="text-teal-light font-semibold">free demo</span> will walk through actual measurements specific to your practice.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
