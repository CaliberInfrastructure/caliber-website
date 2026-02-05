
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
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3 md:mb-4">Infrastructure Leakage Calculator</h2>
          <p className="text-slate-500 font-medium italic text-sm md:text-base px-4">Calculations assume 75% Recovery Efficiency on Hot Leads & Repeat Customers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-4 bg-slate-50 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl lg:rounded-[3.5rem] border border-slate-100 shadow-sm space-y-6 md:space-y-8">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Current Monthly Revenue</label>
              <select 
                value={params.currentMonthlyRevenue}
                onChange={(e) => handleChange('currentMonthlyRevenue', parseInt(e.target.value))}
                className="w-full p-5 rounded-2xl border-none bg-white shadow-md font-bold text-slate-700 outline-none focus:ring-2 focus:ring-cyan-500 appearance-none cursor-pointer"
              >
                <option value={75000}>$50k - $100k</option>
                <option value={137500}>$100k - $175k</option>
                <option value={262500}>$175k - $350k</option>
                <option value={450000}>$350k+</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 md:mb-4">Avg. Treatment Price</label>
              <div className="relative">
                <span className="absolute left-4 md:left-5 top-4 md:top-5 text-slate-400 font-bold">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={params.avgTicket}
                  onChange={(e) => handleChange('avgTicket', parseInt(e.target.value) || 0)}
                  className="w-full p-4 md:p-5 pl-8 md:pl-10 rounded-xl md:rounded-2xl border-none bg-white shadow-md font-bold text-cyan-600 text-lg md:text-xl outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span>Weekly Missed Calls</span>
                <span className="bg-cyan-600 text-white px-4 py-1 rounded-full text-xs">{params.weeklyMissedCalls}</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="50" 
                value={params.weeklyMissedCalls}
                onChange={(e) => handleChange('weeklyMissedCalls', parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span>Current No-Show Rate %</span>
                <span className="bg-cyan-600 text-white px-4 py-1 rounded-full text-xs">{params.noShowRate}%</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="50" 
                value={params.noShowRate}
                onChange={(e) => handleChange('noShowRate', parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 md:space-y-6">
            <div className="bg-slate-900 rounded-2xl md:rounded-3xl lg:rounded-[3rem] p-6 md:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 md:px-8 py-2 md:py-3 text-[9px] md:text-[10px] font-black uppercase rounded-bl-2xl md:rounded-bl-3xl tracking-widest">Revenue Leakage Detected</div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-4 md:mt-6">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Total Monthly Leakage</p>
                  <div className="text-4xl sm:text-5xl font-black text-red-500 tracking-tighter mb-4 whitespace-nowrap">${Math.round(results.totalLossMonthly).toLocaleString()}</div>
                  <div className="space-y-2 border-t border-slate-800 pt-4">
                    <div className="flex justify-between text-xs"><span className="text-slate-500 font-bold uppercase">Missed Calls</span> <span className="font-black text-slate-300 whitespace-nowrap">${Math.round(results.missedCallLossMonthly).toLocaleString()}</span></div>
                    <div className="flex justify-between text-xs"><span className="text-slate-500 font-bold uppercase">No-Shows</span> <span className="font-black text-slate-300 whitespace-nowrap">${Math.round(results.noShowLossMonthly).toLocaleString()}</span></div>
                  </div>
                </div>
                <div className="bg-white/5 p-6 md:p-8 rounded-xl md:rounded-[2rem] border border-white/10">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Annualized Leakage</p>
                  <div className="text-5xl sm:text-6xl font-black text-white tracking-tighter whitespace-nowrap">${Math.round(results.totalLossAnnual).toLocaleString()}</div>
                </div>
              </div>
            </div>

            <div className="bg-cyan-600 rounded-2xl md:rounded-3xl lg:rounded-[3rem] p-6 md:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div>
                  <p className="text-[10px] font-black text-cyan-100 uppercase tracking-widest mb-2">Monthly Recovery Goal</p>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tighter mb-3 md:mb-4 whitespace-nowrap">+${Math.round(results.recoveryMonthly).toLocaleString()}</div>
                  <p className="text-cyan-100 text-xs sm:text-sm font-medium leading-relaxed">See exactly where this leakage is happening in your practice.</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-6 md:p-8 rounded-xl md:rounded-[2rem] border border-white/10 flex flex-col justify-center">
                  <p className="text-[10px] font-black text-cyan-100 uppercase tracking-widest mb-2">Annualized Recovery Potential</p>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tighter whitespace-nowrap">+${Math.round(results.recoveryAnnual).toLocaleString()}</div>
                  <div className="mt-3 md:mt-4 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase text-cyan-100">Projected ROI</span>
                    <span className="text-xl md:text-2xl font-black">{results.roi}x</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post-Calculator CTA */}
            <div className="text-center pt-2 md:pt-4">
              <a href="#audit" className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#0097B2] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl text-base md:text-lg font-black uppercase tracking-widest hover:bg-cyan-700 transition shadow-2xl shadow-cyan-100 group w-full sm:w-auto">
                Book Your Free Revenue Audit <span className="group-hover:translate-x-1 transition inline-block">→</span>
              </a>
              <p className="text-slate-400 text-xs font-medium mt-3 md:mt-4 px-4">No sales pitch. We show you the breakdown and you decide if it makes sense.</p>
            </div>
          </div>
        </div>

        {/* METHODOLOGY SECTION - UPDATED TO MATCH SCREENSHOT */}
        <div className="mt-8">
            <button 
              onClick={() => setShowMethodology(!showMethodology)}
              className="w-full flex items-center justify-between bg-slate-50 border border-slate-200 hover:bg-slate-100 transition px-8 py-5 rounded-[1.5rem] text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full border border-slate-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <span className="text-lg font-black text-slate-700 tracking-tight">How we calculate these numbers</span>
              </div>
              <svg className={`w-6 h-6 text-slate-400 transition-transform ${showMethodology ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            {showMethodology && (
              <div className="mt-4 bg-white border border-slate-100 rounded-[2.5rem] p-10 space-y-12 animate-in slide-in-from-top-4 duration-500 shadow-sm">
                
                {/* Step 1 */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-black text-sm">1</div>
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">Missed Call Leakage</h4>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-mono text-sm text-slate-600">
                    (Weekly Missed Calls × 4 weeks) × 50% booking intent × Avg Ticket
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-3xl">
                    We assume <span className="font-bold text-slate-900">50% of missed calls</span> represent genuine booking intent. This is conservative—industry data suggests it could be higher. Monthly missed calls are multiplied by your average treatment price.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-black text-sm">2</div>
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">No-Show Leakage</h4>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-mono text-sm text-slate-600">
                    (Monthly Revenue ÷ Avg Ticket) × No-Show Rate × Avg Ticket × 50%
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-3xl">
                    We estimate monthly appointments from your revenue, then apply your no-show rate. The <span className="font-bold text-slate-900">50% factor</span> accounts for partial recovery through rebooks and last-minute fills that already happen organically.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-black text-sm">3</div>
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">Recovery Projection</h4>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-mono text-sm text-slate-600">
                    Total Monthly Leakage × 75% Recovery Rate
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-3xl">
                    With Caliber infrastructure (AI text-back, reminder sequences, reactivation), we project <span className="font-bold text-slate-900">75% recovery</span> of identified leakage. This accounts for leads that can't be recovered regardless of follow-up.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-black text-sm">4</div>
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">ROI Calculation</h4>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-mono text-sm text-slate-600">
                    (Monthly Recovery - $2,000 Full Automation Fee) ÷ $2,000
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-3xl">
                    ROI is calculated against the <span className="font-bold text-slate-900">Full Automation tier ($2,000/mo)</span>, our flagship infrastructure. Lower tiers will have different ROI profiles based on their monthly fee.
                  </p>
                </div>

                {/* Disclaimer Box */}
                <div className="bg-slate-950 p-8 rounded-[2rem] text-center">
                  <p className="text-slate-400 text-sm italic">
                    These are estimates based on industry benchmarks. Your <span className="text-cyan-400 font-bold underline cursor-pointer">free audit</span> will provide actual measurements specific to your practice.
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
