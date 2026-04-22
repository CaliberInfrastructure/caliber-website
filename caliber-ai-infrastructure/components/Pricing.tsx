
import React, { useState } from 'react';
import { TIERS } from '../constants';
import { ServiceTier } from '../types';

const Pricing: React.FC = () => {
  const [showAllTiers, setShowAllTiers] = useState(false);
  const [pricingOption, setPricingOption] = useState<'A' | 'B'>('A');

  const flagship = TIERS[ServiceTier.FULL_AUTONOMY];
  const foundation = TIERS[ServiceTier.FOUNDATION];
  const growth = TIERS[ServiceTier.GROWTH];

  return (
    <section id="tiers" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* ═══════════════════════════════════════════════════
            FLAGSHIP HERO CARD — Full Autonomy System™
            ═══════════════════════════════════════════════════ */}
        <div className="bg-[#0B1221] rounded-[4rem] p-10 md:p-20 relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.3em] text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                  Flagship Tier
                </div>
                <div className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.3em] text-amber-400 uppercase bg-amber-500/10 border border-amber-500/20 rounded-full">
                  Recommended
                </div>
              </div>

              <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                {flagship.name}
              </h3>
              <p className="text-2xl md:text-3xl font-black text-slate-400 tracking-tight mb-6 italic">
                "The Last Hire You'll Ever Make"
              </p>

              {/* Lead paragraph */}
              <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
                Every week, your practice is quietly bleeding $6,250 in missed calls and no-shows. By the time you read this sentence, another $10 just walked out the door.
              </p>

              {/* Feature grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 mb-12">
                {flagship.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300 text-sm font-bold tracking-tight">{f}</span>
                  </div>
                ))}
              </div>

              {/* Guarantee badge */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-amber-400 font-black text-sm">Revenue Recovery Guarantee™ Included</p>
                  <p className="text-amber-200/60 text-xs">10x ROI in 90 days or we work free until we deliver it</p>
                </div>
              </div>

              {/* Single CTA */}
              <a href="#audit" className="inline-flex items-center justify-center gap-3 bg-[#0097B2] text-white px-10 py-6 rounded-2xl text-lg font-black hover:bg-cyan-500 transition shadow-2xl shadow-cyan-950/50 group">
                Claim Your Spot — Only 2 Remaining in Q2 <span className="group-hover:translate-x-1 transition">→</span>
              </a>
            </div>

            {/* ─── Investment Sidebar ─── */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3.5rem] p-10 lg:p-12 relative">

                {/* Option Toggle */}
                <div className="flex items-center justify-center gap-1 bg-white/10 rounded-full p-1 mb-10">
                  <button
                    onClick={() => setPricingOption('A')}
                    className={`flex-1 py-3 px-4 rounded-full text-xs font-black uppercase tracking-widest transition ${
                      pricingOption === 'A'
                        ? 'bg-white text-slate-900'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Option A — Standard
                  </button>
                  <button
                    onClick={() => setPricingOption('B')}
                    className={`flex-1 py-3 px-4 rounded-full text-xs font-black uppercase tracking-widest transition ${
                      pricingOption === 'B'
                        ? 'bg-white text-slate-900'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Option B — Zero Barrier
                  </button>
                </div>

                {pricingOption === 'A' ? (
                  <>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">
                      AI Front Desk Installation
                    </p>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">$2,000</span>
                      <span className="text-slate-500 font-bold text-lg">/mo</span>
                    </div>
                    <p className="text-slate-500 text-sm font-bold mb-4">
                      + $10,000 Custom AI Infrastructure Build
                    </p>
                    <div className="flex items-center gap-2 mb-10">
                      <div className="w-5 h-5 bg-amber-500/20 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="text-amber-400 text-xs font-bold">30-day build guarantee — refund if not live</span>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">
                      Zero Barrier Entry
                    </p>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">$3,500</span>
                      <span className="text-slate-500 font-bold text-lg">/mo</span>
                    </div>
                    <p className="text-slate-500 text-sm font-bold mb-4">
                      $0 setup — 12-month minimum commitment
                    </p>
                    <div className="flex items-center gap-2 mb-10">
                      <div className="w-5 h-5 bg-emerald-500/20 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-emerald-400 text-xs font-bold">No upfront investment required</span>
                    </div>
                  </>
                )}

                <div className="space-y-8 pt-10 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">Commitment</span>
                    <span className="text-white font-black text-right text-sm">
                      {pricingOption === 'A' ? 'Monthly' : '12-month minimum'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">Value Delivered</span>
                    <span className="text-cyan-400 font-black text-lg">~$26,300/mo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">Projected ROI</span>
                    <span className="text-cyan-400 font-black text-4xl tracking-tighter">10–17x</span>
                  </div>
                </div>

                {/* Framing copy */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-slate-500 text-xs leading-relaxed italic text-center">
                    {pricingOption === 'A'
                      ? 'Option A pays for itself in 13 days of operation. Total 12-month cost: $34k.'
                      : 'Option B removes the upfront decision entirely. Total 12-month cost: $42k vs $34k on Option A — your call.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Accent Blobs */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full"></div>
        </div>

        {/* ═══════════════════════════════════════════════════
            LOWER TIERS — Foundation & Growth
            ═══════════════════════════════════════════════════ */}
        <div className="text-center mt-16 mb-8">
          <p className="text-slate-500 font-bold mb-4 uppercase tracking-[0.2em] text-sm">
            Not sure which is right for you? Most South Florida med spas doing $100k+/mo choose Full Autonomy.
          </p>
          <button
            onClick={() => setShowAllTiers(!showAllTiers)}
            className="inline-flex items-center gap-2 text-slate-900 font-black text-lg transition group"
          >
            {showAllTiers ? 'Hide stepping-stone tiers' : 'See other tiers'}
            <svg className={`w-6 h-6 transition-transform ${showAllTiers ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {showAllTiers && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {/* Foundation Card */}
            <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h4 className="text-3xl font-black text-slate-900 tracking-tighter">{foundation.name}</h4>
                    <p className="text-slate-500 font-medium text-sm">{foundation.positioning}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-slate-900 tracking-tighter">${foundation.monthlyFee.toLocaleString()}<span className="text-slate-400 text-sm font-bold">/mo</span></p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">${foundation.setupFee.toLocaleString()} build</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-10">{foundation.description}</p>
                <ul className="space-y-4 mb-10">
                  {foundation.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-700 text-sm font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 border-t border-slate-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-400 font-black text-[10px] uppercase tracking-widest">~${foundation.valueMonthly.toLocaleString()}/mo value</span>
                </div>
                <p className="text-slate-400 text-xs italic">Guarantee not available on this tier</p>
              </div>
            </div>

            {/* Growth Card */}
            <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h4 className="text-3xl font-black text-slate-900 tracking-tighter">{growth.name}</h4>
                    <p className="text-slate-500 font-medium text-sm">{growth.positioning}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-slate-900 tracking-tighter">${growth.monthlyFee.toLocaleString()}<span className="text-slate-400 text-sm font-bold">/mo</span></p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">${growth.setupFee.toLocaleString()} build</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-10">{growth.description}</p>
                <ul className="space-y-4 mb-10">
                  {growth.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-700 text-sm font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 border-t border-slate-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-400 font-black text-[10px] uppercase tracking-widest">~${growth.valueMonthly.toLocaleString()}/mo value</span>
                </div>
                <p className="text-slate-400 text-xs italic">Guarantee not available on this tier</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Book a <a href="#demo" className="text-cyan-600 font-black underline">free demo</a> and we'll tell you honestly which tier fits your practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
