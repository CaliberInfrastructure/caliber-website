
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
        <div className="bg-[#0B1221] rounded-3xl md:rounded-[4rem] p-6 md:p-10 lg:p-20 relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 text-[10px] font-black tracking-[0.25em] md:tracking-[0.3em] text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                Flagship Tier
              </div>
              <h3 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 md:mb-8">{fullAutomation.name}</h3>
              <p className="text-slate-400 text-base sm:text-lg md:text-xl mb-8 md:mb-12 leading-relaxed font-medium">
                The complete AI-powered revenue infrastructure. Our 24/7 voice AI answers every call, qualifies every lead, and books appointments while you sleep.
              </p>

              <div className="bg-[#151D2F] p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-white/5 mb-6 md:mb-8 flex gap-4 md:gap-6 items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                   <svg className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h4 className="text-white font-black text-lg sm:text-xl mb-1">24/7 AI Voice Reception</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Human-sounding AI answers 100% of after-hours and missed calls live—not text-back, actual voice conversations that qualify and book.</p>
                </div>
              </div>

              {/* After-Hours Emphasis Callout */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-xl md:rounded-[2rem] p-4 md:p-6 mb-8 md:mb-12 relative overflow-hidden">
                <div className="flex items-center gap-3 md:gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-400/10 rounded-xl md:rounded-2xl border border-cyan-400/20 flex flex-col items-center justify-center">
                      <span className="text-2xl md:text-3xl font-black text-cyan-400 leading-none">40%</span>
                      <span className="text-[8px] font-black text-cyan-500/70 uppercase tracking-widest">of leads</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-black text-base md:text-lg mb-1 tracking-tight">Your competitors close after 6PM. You don't.</h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      40% of med spa inquiries come after hours. Without Full Automation, those high-intent prospects hit voicemail and call someone else. With it, every single one gets a live AI conversation that books.
                    </p>
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-cyan-500/5 blur-[40px] rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-6 md:gap-x-12 mb-10 md:mb-16">
                {[
                  "Live Call Qualification", "Outbound Confirmation Calls",
                  "Intelligent Live Transfer", "Multi-Channel AI Orchestration",
                  "AI Lead Qualification", "Client Reactivation Campaigns",
                  "Review Generation System", "Monthly Strategy Call"
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-slate-300 text-xs md:text-sm font-bold tracking-tight">{f}</span>
                  </div>
                ))}
              </div>

              <a href="#audit" className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#0097B2] text-white px-8 md:px-10 py-5 md:py-6 rounded-2xl text-base md:text-lg font-black hover:bg-cyan-500 transition shadow-2xl shadow-cyan-950/50 group w-full sm:w-auto">
                Get Your Free Audit <span className="group-hover:translate-x-1 transition">→</span>
              </a>
            </div>

            {/* Investment Sidebar Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl lg:rounded-[3.5rem] p-6 md:p-8 lg:p-12 relative">
                {/* Lead with value */}
                <p className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.25em] md:tracking-[0.3em] mb-3 md:mb-4">Value Delivered</p>
                <div className="flex items-baseline gap-2 mb-6 md:mb-8">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter">~${(fullAutomation.valueMonthly / 1000).toFixed(1)}k</span>
                  <span className="text-slate-500 font-bold text-base md:text-lg">/mo</span>
                </div>

                {/* Investment line */}
                <div className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-6">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-slate-400 font-medium text-xs md:text-sm">Your Investment</span>
                    <span className="text-white font-black text-xl md:text-2xl tracking-tighter whitespace-nowrap">$2,000<span className="text-slate-500 font-bold text-xs md:text-sm">/mo</span></span>
                  </div>
                  <p className="text-slate-500 text-[10px] md:text-xs font-bold mt-2">+ ${fullAutomation.setupFee.toLocaleString()} one-time build/setup</p>
                </div>

                {/* Net Recovery - the delta */}
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-cyan-400 font-black text-xs md:text-sm uppercase tracking-wide">Net Recovery</span>
                    <span className="text-cyan-400 font-black text-2xl md:text-3xl tracking-tighter whitespace-nowrap">~${ ((fullAutomation.valueMonthly - fullAutomation.monthlyFee) / 1000).toFixed(0) }k+<span className="text-cyan-500/70 font-bold text-xs md:text-sm">/mo</span></span>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 pt-6 md:pt-8 border-t border-white/10">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-slate-400 font-medium text-xs md:text-sm">Best for</span>
                    <span className="text-white font-black text-right text-xs md:text-sm">Eliminating phone-based<br />revenue loss entirely</span>
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-slate-400 font-medium text-xs md:text-sm">Projected ROI</span>
                    <span className="text-cyan-400 font-black text-3xl md:text-4xl tracking-tighter">10–17x</span>
                  </div>
                </div>

                <p className="mt-8 md:mt-12 text-center text-[10px] font-black text-slate-600 uppercase tracking-widest leading-loose">
                  Includes priority support with 4-hour critical response
                </p>
              </div>
            </div>
          </div>
          
          {/* Accent Blobs */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full"></div>
        </div>

        {/* OTHER TIERS TOGGLE */}
        <div className="text-center mt-16 mb-8">
          <p className="text-slate-500 font-bold mb-4 uppercase tracking-[0.2em] text-sm">Not ready for Full Automation? See other options</p>
          <button
            onClick={() => setShowAllTiers(!showAllTiers)}
            className="inline-flex items-center gap-2 text-slate-900 font-black text-lg transition group"
          >
            <svg className={`w-6 h-6 transition-transform ${showAllTiers ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        </div>

        {/* STABILIZATION & ACCELERATION GRID */}
        {showAllTiers && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 animate-in slide-in-from-top-8 duration-700">
            {/* Stabilization Card */}
            <div className="bg-white rounded-2xl md:rounded-3xl lg:rounded-[3rem] p-6 md:p-8 lg:p-10 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-2 mb-6 md:mb-8">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter">Stabilization</h4>
                    <p className="text-slate-500 font-medium text-xs sm:text-sm">Revenue Protection System</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter whitespace-nowrap">$997<span className="text-slate-400 text-xs sm:text-sm font-bold">/mo</span></p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">$3,500 build/setup</p>
                  </div>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8 md:mb-10">Stop the bleeding on missed calls and no-shows. Essential automation for practices just getting started.</p>
                <ul className="space-y-4 mb-10">
                  {stabilization.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span className="text-slate-700 text-sm font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 border-t border-slate-50 flex justify-between items-center">
                <span className="text-slate-400 font-black text-[10px] uppercase tracking-widest">Best for stopping the bleeding</span>
                <span className="text-slate-900 font-black text-sm">~${stabilization.valueMonthly.toLocaleString()}/mo value</span>
              </div>
            </div>

            {/* Acceleration Card */}
            <div className="bg-white rounded-2xl md:rounded-3xl lg:rounded-[3rem] p-6 md:p-8 lg:p-10 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-2 mb-6 md:mb-8">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter">Acceleration</h4>
                    <p className="text-slate-500 font-medium text-xs sm:text-sm">Intelligent Growth Engine</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter whitespace-nowrap">$1,300<span className="text-slate-400 text-xs sm:text-sm font-bold">/mo</span></p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">$5,000 build/setup</p>
                  </div>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8 md:mb-10">Accelerate growth without adding headcount. AI qualification and reactivation for established practices.</p>
                <ul className="space-y-4 mb-10">
                  {acceleration.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span className="text-slate-700 text-sm font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 border-t border-slate-50 flex justify-between items-center">
                <span className="text-slate-400 font-black text-[10px] uppercase tracking-widest">Best for growth without headcount</span>
                <span className="text-slate-900 font-black text-sm">~${acceleration.valueMonthly.toLocaleString()}/mo value</span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Not sure which tier fits? <a href="#audit" className="text-cyan-600 font-black underline">Get a free audit</a> and we'll recommend the right infrastructure for your practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
