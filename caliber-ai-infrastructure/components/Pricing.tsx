
import React, { useState } from 'react';
import { TIERS } from '../constants';
import { ServiceTier } from '../types';

const Pricing: React.FC = () => {
  const [showAllTiers, setShowAllTiers] = useState(false);

  const fullAutomation = TIERS[ServiceTier.FULL_AUTOMATION];
  const stabilization = TIERS[ServiceTier.STABILIZATION];
  const acceleration = TIERS[ServiceTier.ACCELERATION];

  return (
    <section id="tiers" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* FULL AUTOMATION HERO CARD */}
        <div className="bg-[#0F1E35] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-20 relative overflow-hidden border border-[#2E3D52] shadow-2xl">
          {/* Top accent gradient */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #1B5EE8, #C0942C)' }}></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 text-[10px] font-semibold tracking-[0.25em] md:tracking-[0.3em] text-[#C0942C] uppercase bg-[#C0942C]/10 border border-[#C0942C]/20 rounded-full">
                {fullAutomation.tierLabel}
              </div>
              <h3 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tight mb-6 md:mb-8">{fullAutomation.name}</h3>

              <p className="text-white font-bold text-xl sm:text-2xl md:text-3xl tracking-tight mb-4 md:mb-6 leading-tight">
                {fullAutomation.hookHeadline}
              </p>

              <p className="text-[#7A8799] text-base sm:text-lg md:text-xl mb-8 md:mb-12 leading-relaxed font-medium">
                {fullAutomation.hookDescription}
              </p>

              <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                {fullAutomation.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 md:gap-4">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#1B5EE8] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-[#B0BCCC] text-xs md:text-sm font-medium leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>

              {/* Outcome Callout Box — Gold accent */}
              <div className="bg-[#FBF5E0] border border-[#C0942C]/30 rounded-2xl p-5 md:p-6 mb-8 md:mb-10">
                <p className="text-[#070D1A] text-sm md:text-base font-bold mb-2">
                  {fullAutomation.outcomeCallout.money}
                </p>
                <p className="text-[#2E3D52] text-sm md:text-base font-bold">
                  {fullAutomation.outcomeCallout.time}
                </p>
              </div>

              <p className="text-[#7A8799] text-xs md:text-sm font-medium leading-relaxed mb-8 md:mb-10 italic">
                {fullAutomation.icpLine}
              </p>

              <a href="#audit" className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#1B5EE8] text-white px-8 md:px-10 py-5 md:py-6 rounded-xl text-base md:text-lg font-semibold hover:bg-[#2E72FF] transition-all duration-300 shadow-xl shadow-[#1B5EE8]/30 group w-full sm:w-auto" style={{ fontFamily: 'Space Grotesk' }}>
                Get Your Free Audit <span className="group-hover:translate-x-1 transition">→</span>
              </a>
            </div>

            {/* Investment Sidebar */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 lg:p-12 relative">
                <p className="text-[10px] font-semibold text-[#C0942C] uppercase tracking-[0.25em] md:tracking-[0.3em] mb-3 md:mb-4">Value Delivered</p>
                <div className="flex items-baseline gap-2 mb-6 md:mb-8">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: 'JetBrains Mono' }}>~${(fullAutomation.valueMonthly / 1000).toFixed(1)}k</span>
                  <span className="text-[#7A8799] font-medium text-base md:text-lg">/mo</span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-6">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[#7A8799] font-medium text-xs md:text-sm">Your Investment</span>
                    <span className="text-white font-bold text-xl md:text-2xl tracking-tight whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>$2,000<span className="text-[#7A8799] font-medium text-xs md:text-sm">/mo</span></span>
                  </div>
                  <p className="text-[#7A8799] text-[10px] md:text-xs font-medium mt-2">+ ${fullAutomation.setupFee.toLocaleString()} one-time build/setup</p>
                </div>

                <div className="bg-[#1B5EE8]/10 border border-[#1B5EE8]/20 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[#1B5EE8] font-bold text-xs md:text-sm uppercase tracking-wide">Net Recovery</span>
                    <span className="text-[#1B5EE8] font-bold text-2xl md:text-3xl tracking-tight whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>~${ ((fullAutomation.valueMonthly - fullAutomation.monthlyFee) / 1000).toFixed(0) }k+<span className="text-[#1B5EE8]/60 font-medium text-xs md:text-sm">/mo</span></span>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 pt-6 md:pt-8 border-t border-white/10">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[#7A8799] font-medium text-xs md:text-sm">Support</span>
                    <span className="text-white font-bold text-right text-xs md:text-sm">{fullAutomation.supportLine}</span>
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[#7A8799] font-medium text-xs md:text-sm">Projected ROI</span>
                    <span className="text-[#C0942C] font-bold text-3xl md:text-4xl tracking-tight" style={{ fontFamily: 'JetBrains Mono' }}>{fullAutomation.roiLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1B5EE8]/5 blur-[100px] rounded-full"></div>
          <div className="absolute top-20 right-0 w-64 h-64 bg-[#C0942C]/5 blur-[80px] rounded-full"></div>
        </div>

        {/* OTHER TIERS TOGGLE */}
        <div className="text-center mt-16 mb-8">
          <p className="text-[#7A8799] font-medium mb-4 uppercase tracking-[0.2em] text-sm">Not ready for Full Automation? See other options</p>
          <button onClick={() => setShowAllTiers(!showAllTiers)} className="inline-flex items-center gap-2 text-[#070D1A] font-bold text-lg transition group">
            <svg className={`w-6 h-6 transition-transform ${showAllTiers ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        </div>

        {showAllTiers && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
            {[acceleration, stabilization].map((tier, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm border border-[#E2E8F4] flex flex-col hover:border-[#1B5EE8]/20 hover:shadow-lg transition-all duration-300">
                <div>
                  <p className="text-[10px] font-semibold text-[#1B5EE8] uppercase tracking-[0.25em] mb-3">{tier.tierLabel}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-2 mb-4 md:mb-6">
                    <div><h4 className="text-2xl sm:text-3xl font-bold text-[#070D1A] tracking-tight">{tier.name}</h4></div>
                    <div className="text-left sm:text-right">
                      <p className="text-2xl sm:text-3xl font-bold text-[#070D1A] tracking-tight whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>${tier.monthlyFee.toLocaleString()}<span className="text-[#B0BCCC] text-xs sm:text-sm font-medium">/mo</span></p>
                      <p className="text-[10px] text-[#B0BCCC] font-semibold uppercase tracking-widest">${tier.setupFee.toLocaleString()} build/setup</p>
                    </div>
                  </div>
                  <div className="mb-6 md:mb-8">
                    <p className="text-2xl sm:text-3xl font-bold text-[#070D1A] tracking-tight" style={{ fontFamily: 'JetBrains Mono' }}>~${tier.valueMonthly.toLocaleString()}<span className="text-[#B0BCCC] text-xs sm:text-sm font-medium">/mo value delivered</span></p>
                  </div>
                  <p className="text-[#070D1A] font-bold text-base sm:text-lg tracking-tight mb-3 leading-snug">{tier.hookHeadline}</p>
                  <p className="text-[#7A8799] text-xs sm:text-sm leading-relaxed mb-8 md:mb-10">{tier.hookDescription}</p>
                  <ul className="space-y-4 mb-6">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-[#1B5EE8] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-[#2E3D52] text-xs sm:text-sm font-medium leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[#FBF5E0] border border-[#C0942C]/25 rounded-xl p-4 md:p-5 mb-6">
                    <p className="text-[#070D1A] text-sm font-bold mb-1.5">{tier.outcomeCallout.money}</p>
                    <p className="text-[#2E3D52] text-sm font-bold">{tier.outcomeCallout.time}</p>
                  </div>
                  <p className="text-[#7A8799] text-xs font-medium leading-relaxed mb-6 italic">{tier.icpLine}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-[#E2E8F4]">
                  <div className="flex justify-between items-center">
                    <a href="#audit" className="text-[#1B5EE8] font-bold text-sm uppercase tracking-widest hover:text-[#2E72FF] transition group" style={{ fontFamily: 'Space Grotesk' }}>Get Your Free Audit <span className="group-hover:translate-x-1 transition inline-block">→</span></a>
                    <span className="text-[#070D1A] font-bold text-sm" style={{ fontFamily: 'JetBrains Mono' }}>ROI: {tier.roiLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-[#B0BCCC] text-sm font-medium">
            Not sure which tier fits? <a href="#audit" className="text-[#1B5EE8] font-bold underline">Get a free audit</a> and we'll recommend the right infrastructure for your practice.
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-[#B0BCCC] text-xs font-medium">Recovery estimates are based on industry averages. Actual results vary by practice size and current operations.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
