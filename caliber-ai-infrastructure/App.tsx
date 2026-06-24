
import React from 'react';
import ScarcityBanner from './components/ScarcityBanner';
import ProblemSection from './components/ProblemSection';
import Calculator from './components/Calculator';
import ValueStack from './components/ValueStack';
import GuaranteeSection from './components/GuaranteeSection';
import Pricing from './components/Pricing';
import SocialProof from './components/SocialProof';
import FounderSection from './components/FounderSection';
import DemoBooking from './components/DemoBooking';

const NAV_LINKS = [
  { href: '#problem', label: 'Diagnosis' },
  { href: '#calculator', label: 'Revenue Audit' },
  { href: '#value-stack', label: "What's Included" },
  { href: '#tiers', label: 'Pricing' },
  { href: '#about', label: 'Methodology' },
];

const HERO_RECOVERY = [
  { label: 'Missed-call recovery', value: '+$8,400' },
  { label: 'No-show elimination', value: '+$6,100' },
  { label: 'Dormant reactivation', value: '+$10,300' },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Capacity bar — calm navy strip */}
      <ScarcityBanner />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-hairline">
        <div className="max-w-container mx-auto px-10 py-[18px] flex items-center justify-between">
          <div className="flex items-center gap-[11px]">
            <div className="w-[30px] h-[30px] bg-navy rounded-[9px] flex items-center justify-center text-white font-serif font-medium text-[17px]">C</div>
            <span className="text-[19px] font-bold tracking-[-0.015em] text-ink">Caliber</span>
            <span className="hidden sm:inline-block text-[10px] tracking-[0.14em] uppercase text-muted-2 font-semibold border-l border-hairline pl-[11px]">Infrastructure</span>
          </div>
          <div className="hidden md:flex gap-7 text-[13.5px] font-medium text-ink-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-teal transition">{l.label}</a>
            ))}
          </div>
          <a href="#demo" className="bg-teal text-white text-[13px] font-semibold px-[22px] py-[11px] rounded-xl hover:bg-teal-deep transition">Free Demo</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-hero-fade">
        <div className="max-w-container mx-auto px-10 pt-[72px] pb-[76px] flex flex-col lg:flex-row gap-12 lg:gap-[52px] items-center">
          <div className="flex-[1.32] w-full">
            <div className="inline-flex items-center gap-2 bg-teal-wash text-teal-deep text-xs font-semibold px-[15px] py-[7px] rounded-xl mb-[26px]">
              <span className="w-1.5 h-1.5 bg-teal rounded-full"></span>
              South Florida med spa infrastructure partner
            </div>
            <h1 className="font-serif font-normal text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.07] tracking-[-0.015em] text-navy mb-6">
              Your med spa is quietly losing <span className="text-teal italic">$10–30k/mo</span>
            </h1>
            <p className="text-[18px] leading-[1.62] text-ink-2 max-w-[540px] mb-8">
              We install a complete AI front desk that answers every call, books every qualified lead, and reactivates your dormant database 24/7 — recovering <strong className="text-navy font-bold">$20k–$30k/mo</strong>. <span className="text-teal-deep font-bold">Guaranteed.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-[13px] mb-6">
              <a href="#demo" className="bg-teal text-white text-[14.5px] font-semibold px-7 py-[15px] rounded-sm shadow-cta hover:bg-teal-deep transition text-center">Book a Free Demo →</a>
              <a href="#calculator" className="bg-white text-navy text-[14.5px] font-semibold px-7 py-[15px] rounded-sm shadow-soft hover:bg-surface-2 transition text-center">See How Much You're Losing</a>
            </div>
            <div className="text-[13px] text-muted font-medium">Q2 onboarding capacity — 2 of 6 implementation slots open · 60-second booking</div>
          </div>

          {/* Elevated ROI card */}
          <div className="w-full lg:flex-1 lg:max-w-[392px]">
            <div className="bg-white rounded-xl p-[30px] shadow-elevated">
              <div className="text-xs font-semibold tracking-[0.05em] uppercase text-muted mb-1.5">Recovered / month</div>
              <div className="font-serif font-medium text-[50px] leading-none tracking-[-0.02em] text-navy mb-1.5">$24,800</div>
              <div className="text-xs text-muted-2 mb-6">Illustrative — modeled for a $137k/mo practice</div>
              <div className="flex flex-col gap-[15px]">
                {HERO_RECOVERY.map((r, i) => (
                  <React.Fragment key={r.label}>
                    {i > 0 && <div className="h-px bg-hairline"></div>}
                    <div className="flex justify-between items-center">
                      <span className="text-[13.5px] text-ink-2">{r.label}</span>
                      <span className="text-sm font-bold text-teal">{r.value}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <div className="mt-6 bg-surface-3 rounded-md px-[18px] py-[15px] flex justify-between items-center">
                <span className="text-xs font-semibold tracking-[0.04em] uppercase text-muted">Projected ROI</span>
                <span className="font-serif font-medium text-2xl text-navy">12x</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anchor band */}
      <section className="bg-navy">
        <div className="max-w-container mx-auto px-10 py-[46px] flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">
          <div className="lg:flex-none lg:max-w-[308px] lg:pr-11 lg:border-r border-navy-line">
            <div className="font-serif font-normal text-2xl leading-[1.3] text-white mb-3">The front desk, rebuilt as infrastructure.</div>
            <div className="text-[12.5px] text-onnavy-2 leading-[1.5]">Industry baseline: the average South Florida med spa leaks ~$850/day through missed calls and no-shows.</div>
          </div>
          {[
            { label: 'Recovered / month', figure: '$20–30k', caption: 'Modeled across the Full Autonomy System' },
            { label: 'Inbound coverage', figure: '100% · 24/7', caption: 'Every call answered, after-hours included' },
            { label: 'Response time', figure: 'Instant', caption: 'SMS text-back the moment a call is missed' },
          ].map((s, i) => (
            <div key={s.label} className={`flex-1 lg:px-10 ${i > 0 ? 'lg:border-l border-navy-line pt-8 lg:pt-0 border-t lg:border-t-0' : ''} ${i === 0 ? 'border-t border-navy-line pt-8 lg:pt-0 lg:border-t-0' : ''}`}>
              <div className="text-[11px] tracking-[0.14em] uppercase text-teal-light font-semibold mb-2.5">{s.label}</div>
              <div className="font-serif font-medium text-[34px] tracking-[-0.01em] text-white">{s.figure}</div>
              <div className="text-[12.5px] text-onnavy mt-1.5">{s.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem / Diagnosis */}
      <ProblemSection />

      {/* Calculator / Revenue Audit */}
      <Calculator />

      {/* Value Stack / What's Included */}
      <ValueStack />

      {/* Guarantee */}
      <GuaranteeSection />

      {/* Pricing */}
      <Pricing />

      {/* Social Proof */}
      <SocialProof />

      {/* About / Methodology */}
      <FounderSection />

      {/* Demo */}
      <DemoBooking />

      {/* Footer */}
      <footer className="bg-navy border-t border-navy-line">
        <div className="max-w-container mx-auto px-10 py-14 flex flex-wrap items-center justify-between gap-10">
          <div className="flex items-center gap-[11px]">
            <div className="w-[30px] h-[30px] bg-white rounded-[9px] flex items-center justify-center text-navy font-serif font-medium text-[17px]">C</div>
            <span className="text-[19px] font-bold tracking-[-0.015em] text-white">Caliber</span>
          </div>
          <div className="flex gap-[30px] text-[13px] text-onnavy">
            <a href="#problem" className="hover:text-white transition">Diagnosis</a>
            <a href="#tiers" className="hover:text-white transition">Pricing</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </div>
          <div className="text-right">
            <div className="text-xs font-semibold text-onnavy-3 mb-[3px]">South Florida based &amp; focused</div>
            <div className="text-xs text-muted-4">&copy; 2026 Caliber Infrastructure</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
