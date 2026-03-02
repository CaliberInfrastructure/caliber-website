
import React, { useState, useMemo } from 'react';
import { calculateROI } from '../services/roiCalculator';
import { RevenueCalculation } from '../types';

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
    <section id="calculator" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#070D1A] tracking-tight mb-3 md:mb-4">Infrastructure Leakage Calculator</h2>
          <p className="text-[#7A8799] font-medium italic text-sm md:text-base px-4">Calculations assume 75% Recovery Efficiency on Hot Leads & Repeat Customers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12">
          {/* Input Panel */}
          <div className="lg:col-span-4 bg-[#F3F6FC] p-6 md:p-8 lg:p-10 rounded-2xl border border-[#E2E8F4] shadow-sm space-y-6 md:space-y-8">
            <div>
              <label className="block text-[10px] font-semibold text-[#B0BCCC] uppercase tracking-widest mb-4">Current Monthly Revenue</label>
              <select
                value={params.currentMonthlyRevenue}
                onChange={(e) => handleChange('currentMonthlyRevenue', parseInt(e.target.value))}
                className="w-full p-5 rounded-2xl border-none bg-white shadow-md font-bold text-[#2E3D52] outline-none focus:ring-2 focus:ring-[#1B5EE8] appearance-none cursor-pointer"
              >
                <option value={75000}>$50k - $100k</option>
                <option value={137500}>$100k - $175k</option>
                <option value={262500}>$175k - $350k</option>
                <option value={450000}>$350k+</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-[#B0BCCC] uppercase tracking-widest mb-3 md:mb-4">Avg. Treatment Price</label>
              <div className="relative">
                <span className="absolute left-4 md:left-5 top-4 md:top-5 text-[#B0BCCC] font-bold">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={params.avgTicket}
                  onChange={(e) => handleChange('avgTicket', parseInt(e.target.value) || 0)}
                  className="w-full p-4 md:p-5 pl-8 md:pl-10 rounded-xl md:rounded-2xl border-none bg-white shadow-md font-bold text-[#1B5EE8] text-lg md:text-xl outline-none focus:ring-2 focus:ring-[#1B5EE8]"
                  style={{ fontFamily: 'JetBrains Mono' }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4 text-[10px] font-semibold text-[#B0BCCC] uppercase tracking-widest">
                <span>Weekly Missed Calls</span>
                <span className="bg-[#1B5EE8] text-white px-4 py-1 rounded-full text-xs font-bold" style={{ fontFamily: 'JetBrains Mono' }}>{params.weeklyMissedCalls}</span>
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
              <div className="flex justify-between items-center mb-4 text-[10px] font-semibold text-[#B0BCCC] uppercase tracking-widest">
                <span>Current No-Show Rate %</span>
                <span className="bg-[#1B5EE8] text-white px-4 py-1 rounded-full text-xs font-bold" style={{ fontFamily: 'JetBrains Mono' }}>{params.noShowRate}%</span>
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

          {/* Results Panel */}
          <div className="lg:col-span-8 space-y-4 md:space-y-6">
            {/* Leakage Card */}
            <div className="bg-[#0F1E35] rounded-2xl p-6 md:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#DC2626] text-white px-4 md:px-8 py-2 md:py-3 text-[9px] md:text-[10px] font-semibold uppercase rounded-bl-2xl tracking-widest" style={{ fontFamily: 'Space Grotesk' }}>Revenue Leakage Detected</div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-4 md:mt-6">
                <div>
                  <p className="text-[10px] font-semibold text-[#7A8799] uppercase tracking-widest mb-2">Total Monthly Leakage</p>
                  <div className="text-4xl sm:text-5xl font-bold text-[#DC2626] tracking-tight mb-4 whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>${Math.round(results.totalLossMonthly).toLocaleString()}</div>
                  <div className="space-y-2 border-t border-[#2E3D52] pt-4">
                    <div className="flex justify-between text-xs"><span className="text-[#7A8799] font-semibold uppercase">Missed Calls</span> <span className="font-bold text-[#E2E8F4] whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>${Math.round(results.missedCallLossMonthly).toLocaleString()}</span></div>
                    <div className="flex justify-between text-xs"><span className="text-[#7A8799] font-semibold uppercase">No-Shows</span> <span className="font-bold text-[#E2E8F4] whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>${Math.round(results.noShowLossMonthly).toLocaleString()}</span></div>
                  </div>
                </div>
                <div className="bg-white/5 p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/10">
                  <p className="text-[10px] font-semibold text-[#7A8799] uppercase tracking-widest mb-2">Total Annualized Leakage</p>
                  <div className="text-5xl sm:text-6xl font-bold text-white tracking-tight whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>${Math.round(results.totalLossAnnual).toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Recovery Card */}
            <div className="rounded-2xl p-6 md:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B5EE8 0%, #1040B0 100%)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div>
                  <p className="text-[10px] font-semibold text-[#E8EFFF] uppercase tracking-widest mb-2">Monthly Recovery Goal</p>
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3 md:mb-4 whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>+${Math.round(results.recoveryMonthly).toLocaleString()}</div>
                  <p className="text-[#E8EFFF]/80 text-xs sm:text-sm font-medium leading-relaxed">See exactly where this leakage is happening in your practice.</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/15 flex flex-col justify-center">
                  <p className="text-[10px] font-semibold text-[#E8EFFF] uppercase tracking-widest mb-2">Annualized Recovery Potential</p>
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>+${Math.round(results.recoveryAnnual).toLocaleString()}</div>
                  <div className="mt-3 md:mt-4 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold uppercase text-[#E8EFFF]">Projected ROI</span>
                    <span className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'JetBrains Mono' }}>{results.roi}x</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post-Calculator CTA */}
            <div className="text-center pt-2 md:pt-4">
              <a href="#audit" className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#1B5EE8] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl text-base md:text-lg font-semibold uppercase tracking-widest hover:bg-[#1040B0] transition-all duration-300 shadow-xl shadow-[#1B5EE8]/25 group w-full sm:w-auto" style={{ fontFamily: 'Space Grotesk' }}>
                Book Your Free Revenue Audit <span className="group-hover:translate-x-1 transition inline-block">→</span>
              </a>
              <p className="text-[#B0BCCC] text-xs font-medium mt-3 md:mt-4 px-4">No sales pitch. We show you the breakdown and you decide if it makes sense.</p>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="mt-8">
            <button
              onClick={() => setShowMethodology(!showMethodology)}
              className="w-full flex items-center justify-between bg-[#F3F6FC] border border-[#E2E8F4] hover:bg-white transition px-8 py-5 rounded-2xl text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full border border-[#E2E8F4] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#7A8799]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <span className="text-lg font-bold text-[#2E3D52] tracking-tight">How we calculate these numbers</span>
              </div>
              <svg className={`w-6 h-6 text-[#7A8799] transition-transform ${showMethodology ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            {showMethodology && (
              <div className="mt-4 bg-white border border-[#E2E8F4] rounded-2xl p-10 space-y-12 shadow-sm">

                {/* Step 1 */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold text-sm" style={{ fontFamily: 'JetBrains Mono' }}>1</div>
                    <h4 className="text-xl font-bold text-[#070D1A] tracking-tight">Missed Call Leakage</h4>
                  </div>
                  <div className="bg-[#F3F6FC] p-6 rounded-2xl border border-[#E2E8F4] text-sm text-[#2E3D52]" style={{ fontFamily: 'JetBrains Mono' }}>
                    (Weekly Missed Calls × 4 weeks) × 50% booking intent × Avg Ticket
                  </div>
                  <p className="text-[#7A8799] text-sm leading-relaxed max-w-3xl">
                    We assume <span className="font-bold text-[#070D1A]">50% of missed calls</span> represent genuine booking intent. This is conservative—industry data suggests it could be higher. Monthly missed calls are multiplied by your average treatment price.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold text-sm" style={{ fontFamily: 'JetBrains Mono' }}>2</div>
                    <h4 className="text-xl font-bold text-[#070D1A] tracking-tight">No-Show Leakage</h4>
                  </div>
                  <div className="bg-[#F3F6FC] p-6 rounded-2xl border border-[#E2E8F4] text-sm text-[#2E3D52]" style={{ fontFamily: 'JetBrains Mono' }}>
                    (Monthly Revenue ÷ Avg Ticket) × No-Show Rate × Avg Ticket × 50%
                  </div>
                  <p className="text-[#7A8799] text-sm leading-relaxed max-w-3xl">
                    We estimate monthly appointments from your revenue, then apply your no-show rate. The <span className="font-bold text-[#070D1A]">50% factor</span> accounts for partial recovery through rebooks and last-minute fills that already happen organically.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#1B5EE8] text-white rounded-full flex items-center justify-center font-bold text-sm" style={{ fontFamily: 'JetBrains Mono' }}>3</div>
                    <h4 className="text-xl font-bold text-[#070D1A] tracking-tight">Recovery Projection</h4>
                  </div>
                  <div className="bg-[#F3F6FC] p-6 rounded-2xl border border-[#E2E8F4] text-sm text-[#2E3D52]" style={{ fontFamily: 'JetBrains Mono' }}>
                    Total Monthly Leakage × 75% Recovery Rate
                  </div>
                  <p className="text-[#7A8799] text-sm leading-relaxed max-w-3xl">
                    With Caliber infrastructure (AI text-back, reminder sequences, reactivation), we project <span className="font-bold text-[#070D1A]">75% recovery</span> of identified leakage. This accounts for leads that can't be recovered regardless of follow-up.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#1B5EE8] text-white rounded-full flex items-center justify-center font-bold text-sm" style={{ fontFamily: 'JetBrains Mono' }}>4</div>
                    <h4 className="text-xl font-bold text-[#070D1A] tracking-tight">ROI Calculation</h4>
                  </div>
                  <div className="bg-[#F3F6FC] p-6 rounded-2xl border border-[#E2E8F4] text-sm text-[#2E3D52]" style={{ fontFamily: 'JetBrains Mono' }}>
                    (Monthly Recovery - $2,000 Full Automation Fee) ÷ $2,000
                  </div>
                  <p className="text-[#7A8799] text-sm leading-relaxed max-w-3xl">
                    ROI is calculated against the <span className="font-bold text-[#070D1A]">Full Automation tier ($2,000/mo)</span>, our flagship infrastructure. Lower tiers will have different ROI profiles based on their monthly fee.
                  </p>
                </div>

                {/* Disclaimer Box */}
                <div className="bg-[#0F1E35] p-8 rounded-2xl text-center">
                  <p className="text-[#7A8799] text-sm italic">
                    These are estimates based on industry benchmarks. Your <a href="#audit" className="text-[#1B5EE8] font-bold underline cursor-pointer">free audit</a> will provide actual measurements specific to your practice.
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
