
import React from 'react';
import ProblemSection from './components/ProblemSection';
import Calculator from './components/Calculator';
import ValueStack from './components/ValueStack';
import GuaranteeSection from './components/GuaranteeSection';
import Pricing from './components/Pricing';
import FoundingClient from './components/FoundingClient';
import FounderSection from './components/FounderSection';
import FAQ from './components/FAQ';
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
            <p className="text-[18px] leading-[1.62] text-ink-2 max-w-[560px] mb-5">
              <strong className="text-navy font-bold">Caliber Infrastructure builds AI automation systems for med spas in South Florida.</strong>{' '}
              We install the infrastructure that stops med spas from losing revenue to unanswered calls,
              no-shows, and dormant patient lists — without adding staff. Our systems answer every call
              24/7, recover missed calls with an automated text within 60 seconds, send multi-touch
              appointment reminders that cut no-shows, and re-engage past patients on autopilot.
            </p>
            <p className="text-[16px] leading-[1.65] text-ink-3 max-w-[560px] mb-8">
              About 1 in 3 calls to a med spa goes unanswered; at a typical $500 ticket, that's five
              figures in lost revenue every month. Caliber captures it. We're not a marketing agency and
              we're not software you rent — we build the automation once, you own it, and we keep it
              running. Based in South Florida, serving med spas across Miami, Fort Lauderdale, Boca
              Raton, and Palm Beach doing $50k–$100k+ per month.
            </p>
            <div className="flex flex-col sm:flex-row gap-[13px] mb-6">
              <a href="#demo" className="bg-teal text-white text-[14.5px] font-semibold px-7 py-[15px] rounded-sm shadow-cta hover:bg-teal-deep transition text-center">Book a Free Demo →</a>
              <a href="#calculator" className="bg-white text-navy text-[14.5px] font-semibold px-7 py-[15px] rounded-sm shadow-soft hover:bg-surface-2 transition text-center">See How Much You're Losing</a>
            </div>
            <div className="text-[13px] text-muted font-medium">30-minute live walkthrough · 60-second booking · no card required</div>
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

      {/* Founding client program (replaces the removed testimonial section) */}
      <FoundingClient />

      {/* About / Methodology */}
      <FounderSection />

      {/* FAQ — visible source for the FAQPage schema in index.html */}
      <FAQ />

      {/* Demo */}
      <DemoBooking />

      {/* Footer */}
      <footer className="bg-navy border-t border-navy-line">
        <div className="max-w-container mx-auto px-10 pt-14 pb-10">
          <div className="flex flex-wrap gap-12 justify-between mb-12">
            {/* Identity + NAP */}
            <div className="max-w-[330px]">
              <div className="flex items-center gap-[11px] mb-4">
                <div className="w-[30px] h-[30px] bg-white rounded-[9px] flex items-center justify-center text-navy font-serif font-medium text-[17px]">C</div>
                <span className="text-[19px] font-bold tracking-[-0.015em] text-white">Caliber</span>
              </div>
              <p className="text-[13.5px] leading-[1.6] text-onnavy mb-5">
                AI automation systems for med spas in South Florida — 24/7 AI reception, missed-call
                recovery, automated reminders, and patient reactivation.
              </p>
              <address className="not-italic text-[13px] leading-[1.7] text-onnavy-3">
                <div className="font-semibold text-white mb-1">Caliber Infrastructure LLC</div>
                <div>13727 SW 152nd Street #1032<br />Miami, FL 33177</div>
                <div className="mt-2.5">
                  <a href="mailto:maurorousseau@caliberinfrastructure.com" className="hover:text-white transition break-all">maurorousseau@caliberinfrastructure.com</a>
                </div>
                <div>
                  <a href="tel:+17868537587" className="hover:text-white transition">(786) 853-7587</a>
                </div>
              </address>
            </div>

            {/* Site */}
            <div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-onnavy-2 font-semibold mb-4">Site</div>
              <div className="flex flex-col gap-2.5 text-[13px] text-onnavy">
                <a href="#problem" className="hover:text-white transition">Diagnosis</a>
                <a href="#calculator" className="hover:text-white transition">Revenue audit</a>
                <a href="#tiers" className="hover:text-white transition">Pricing</a>
                <a href="#about" className="hover:text-white transition">Methodology</a>
                <a href="#faq" className="hover:text-white transition">FAQ</a>
                <a href="#demo" className="hover:text-white transition">Book a demo</a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-onnavy-2 font-semibold mb-4">Resources</div>
              <div className="flex flex-col gap-2.5 text-[13px] text-onnavy">
                <a href="/guide/med-spa-ai-automation" className="hover:text-white transition">Med spa AI automation guide</a>
                <a href="https://www.instagram.com/caliberinfra/" rel="noopener" className="hover:text-white transition">Instagram</a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-onnavy-2 font-semibold mb-4">Legal</div>
              <div className="flex flex-col gap-2.5 text-[13px] text-onnavy">
                <a href="/terms" className="hover:text-white transition">Terms of Service</a>
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
                <a href="/privacy#sms" className="hover:text-white transition">SMS terms &amp; consent</a>
              </div>
            </div>
          </div>

          <div className="border-t border-navy-line pt-7 flex flex-wrap gap-4 justify-between items-start">
            <p className="text-[11.5px] leading-[1.65] text-muted-4 max-w-[720px]">
              Revenue figures on this site — including the calculator, the recovery card, and the
              $20k–$30k/mo range — are illustrative models based on industry averages, not client
              results or a promise of performance. Any guarantee is governed solely by the signed
              Caliber Guarantee terms. See our <a href="/terms" className="text-onnavy hover:text-white transition underline underline-offset-2">Terms of Service</a>.
            </p>
            <div className="text-[11.5px] text-muted-4">&copy; 2026 Caliber Infrastructure LLC</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
