
import React, { useState } from 'react';
import ProblemSection from './components/ProblemSection';
import Calculator from './components/Calculator';
import ValueStack from './components/ValueStack';
import GuaranteeSection from './components/GuaranteeSection';
import Pricing from './components/Pricing';
import FounderSection from './components/FounderSection';
import FAQ from './components/FAQ';
import DemoBooking from './components/DemoBooking';
import { ArrowRight, Menu, Close } from './components/icons';
import { calculateROI } from './services/roiCalculator';
import {
  CALCULATOR_DEFAULTS,
  CALCULATOR_DEFAULTS_LABEL,
  LEAK_RANGE_MONTHLY,
} from './constants';

const NAV_LINKS = [
  { href: '#problem', label: 'Diagnosis' },
  { href: '#calculator', label: 'Revenue Audit' },
  { href: '#value-stack', label: "What's Included" },
  { href: '#tiers', label: 'Pricing' },
  { href: '#about', label: 'Methodology' },
];

/** Named in the hero, detailed in the Diagnosis section below it. */
const HERO_LEAKS = ['Unanswered calls', 'No-shows', 'Dormant patient lists'];

const PHONE_DISPLAY = '(786) 853-7587';
const PHONE_HREF = 'tel:+17868537587';

// The hero card is computed, not typed. It used to read $24,800 / 12x with a
// three-line breakdown that included dormant reactivation — a line the
// calculator does not model at all — so a visitor who clicked "run the numbers"
// landed on $20,438 / 9x, a smaller number than the hero had just promised.
// Now both come out of calculateROI() at the same input set.
const heroModel = calculateROI(CALCULATOR_DEFAULTS);
const HERO_RECOVERY = [
  { label: 'Missed-call recovery', value: heroModel.missedCallLossMonthly * 0.75 },
  { label: 'No-show recovery', value: heroModel.noShowLossMonthly * 0.75 },
];
const money = (n: number) => `$${Math.round(n).toLocaleString()}`;

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-3 focus:left-3 focus:bg-navy focus:text-white focus:text-sm focus:font-semibold focus:px-4 focus:py-2.5 focus:rounded-sm"
      >
        Skip to content
      </a>

      {/* Navigation — asymmetric by design: the wordmark and the section links
          are one left-hand cluster separated by a rule, and the right-hand side
          is the phone number plus the CTA. The previous arrangement (wordmark
          left / links floating centre / button right) is the single most
          recognisable generated-page silhouette on the web. */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-hairline">
        <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-10 py-[15px] lg:py-[18px] flex items-center gap-6">
          <a href="#top" className="flex items-center gap-[11px] flex-shrink-0">
            <span className="w-[30px] h-[30px] bg-navy rounded-[9px] flex items-center justify-center text-white font-serif font-medium text-[17px]">C</span>
            <span className="text-[19px] font-bold tracking-[-0.015em] text-ink">Caliber</span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-ink-3 border-l border-hairline pl-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-teal transition">{l.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-5 ml-auto">
            <a href="#demo" className="bg-teal text-white text-[13px] font-semibold px-[18px] sm:px-[22px] py-[11px] rounded-xl hover:bg-teal-deep transition whitespace-nowrap">
              Free Demo
            </a>
            {/* Mobile menu trigger. Below md there was previously no way at all
                to reach the five sections — no links, no hamburger. */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden w-10 h-10 -mr-1.5 flex items-center justify-center rounded-sm text-navy text-xl hover:bg-surface-2 transition"
            >
              {menuOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>

        <div id="mobile-nav" hidden={!menuOpen} className="md:hidden border-t border-hairline bg-white">
          <div className="max-w-container mx-auto px-5 sm:px-8 py-2 flex flex-col">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-[15px] font-medium text-ink-3 border-b border-hairline last:border-b-0 hover:text-teal transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main id="main">
        {/* Hero */}
        <section id="top" className="bg-hero-fade">
          <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-10 pt-14 sm:pt-[72px] pb-16 sm:pb-[76px] flex flex-col lg:flex-row gap-12 lg:gap-[52px] items-center">
            <div className="flex-[1.32] w-full">
              <div className="inline-flex items-center gap-2 bg-teal-wash text-teal-deep text-xs font-semibold px-[15px] py-[7px] rounded-xl mb-[26px]">
                <span className="w-1.5 h-1.5 bg-teal rounded-full"></span>
                South Florida med spa infrastructure partner
              </div>
              <h1 className="font-serif font-normal text-[36px] sm:text-[52px] lg:text-[60px] leading-[1.07] tracking-[-0.015em] text-navy mb-6">
                Your med spa is quietly losing{' '}
                <span className="text-teal font-medium whitespace-nowrap">{LEAK_RANGE_MONTHLY}/mo</span>
              </h1>
              <p className="text-[17px] sm:text-[18px] leading-[1.62] text-ink-2 max-w-[540px] mb-6">
                <strong className="text-navy font-bold">Caliber Infrastructure builds AI automation systems for med spas in South Florida.</strong>{' '}
                We answer every call 24/7, text back missed calls in 60 seconds, and cut no-shows with
                automated reminders. No new staff, no new software for your team to learn.
              </p>

              {/* The three leaks, as a list rather than a second paragraph. The
                  detail behind each one is the Diagnosis section directly below;
                  the hero only has to name them. */}
              <div className="mb-8">
                <div className="text-[11px] tracking-[0.14em] uppercase text-muted-2 font-semibold mb-3">
                  The three leaks we close
                </div>
                <ul className="flex flex-wrap gap-x-7 gap-y-2.5">
                  {HERO_LEAKS.map((leak) => (
                    <li key={leak} className="flex items-center gap-2.5 text-[15px] font-semibold text-ink-2">
                      <span aria-hidden="true" className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0"></span>
                      {leak}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-[13px] mb-6">
                <a href="#demo" className="inline-flex items-center justify-center gap-2 bg-teal text-white text-[14.5px] font-semibold px-7 py-[15px] rounded-sm shadow-cta hover:bg-teal-deep transition text-center">
                  Hear it answer a call <ArrowRight />
                </a>
                <a href="#calculator" className="bg-white text-navy text-[14.5px] font-semibold px-7 py-[15px] rounded-sm shadow-soft hover:bg-surface-2 transition text-center">
                  Run the revenue audit
                </a>
              </div>
              <div className="text-[13px] text-muted font-medium">
                30-minute live walkthrough · 60-second booking · no card required
              </div>
              <div className="text-[13px] text-muted-2 mt-2">
                Serving med spas in Miami, Fort Lauderdale, Boca Raton, and Palm Beach.
              </div>
            </div>

            {/* Elevated ROI card — every figure below comes from calculateROI() */}
            <div className="w-full lg:flex-1 lg:max-w-[392px]">
              <div className="bg-white rounded-xl p-[26px] sm:p-[30px] shadow-elevated">
                <div className="text-xs font-semibold tracking-[0.05em] uppercase text-muted mb-1.5">Recovered / month</div>
                <div className="font-serif font-medium text-[44px] sm:text-[50px] leading-none tracking-[-0.02em] text-navy mb-2">
                  {money(heroModel.recoveryMonthly)}
                </div>
                <p className="text-[12.5px] leading-[1.5] text-ink-3 mb-6">
                  Illustrative, not a client result. {CALCULATOR_DEFAULTS_LABEL}.{' '}
                  <a href="#calculator" className="text-teal-deep font-semibold underline underline-offset-2 hover:text-teal transition">
                    Run it on your numbers
                  </a>.
                </p>
                <div className="flex flex-col gap-[15px]">
                  {HERO_RECOVERY.map((r, i) => (
                    <React.Fragment key={r.label}>
                      {i > 0 && <div className="h-px bg-hairline"></div>}
                      <div className="flex justify-between items-center gap-3">
                        <span className="text-[13.5px] text-ink-2">{r.label}</span>
                        <span className="text-sm font-bold text-teal tabular-nums">+{money(r.value)}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <div className="mt-6 bg-surface-3 rounded-md px-[18px] py-[15px] flex justify-between items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.04em] uppercase text-muted">Modeled ROI</span>
                  <span className="font-serif font-medium text-2xl text-navy">{heroModel.roi}x</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anchor band */}
        <section className="bg-navy">
          <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-10 py-[46px] flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">
            <div className="lg:flex-none lg:max-w-[308px] lg:pr-11 lg:border-r border-navy-line">
              <div className="font-serif font-normal text-2xl leading-[1.3] text-white mb-3">The front desk, rebuilt as infrastructure.</div>
              <div className="text-[12.5px] text-onnavy leading-[1.5]">
                Modeled for a $100k+/mo practice: {LEAK_RANGE_MONTHLY} a month leaks out through missed
                calls and no-shows. An industry model, not a measured average.
              </div>
            </div>
            {[
              { label: 'Recovered / month', figure: LEAK_RANGE_MONTHLY, caption: 'Modeled for a $100k+/mo practice on the Full Autonomy System' },
              { label: 'Inbound coverage', figure: '100% · 24/7', caption: 'Every call answered, after-hours included' },
              { label: 'Response time', figure: 'Instant', caption: 'SMS text-back the moment a call is missed' },
            ].map((s, i) => (
              <div key={s.label} className={`flex-1 lg:px-10 ${i > 0 ? 'lg:border-l border-navy-line pt-8 lg:pt-0 border-t lg:border-t-0' : ''} ${i === 0 ? 'border-t border-navy-line pt-8 lg:pt-0 lg:border-t-0' : ''}`}>
                <div className="text-[11px] tracking-[0.14em] uppercase text-teal-light font-semibold mb-2.5">{s.label}</div>
                <div className="font-serif font-medium text-[30px] sm:text-[34px] tracking-[-0.01em] text-white">{s.figure}</div>
                <div className="text-[12.5px] text-onnavy mt-1.5">{s.caption}</div>
              </div>
            ))}
          </div>
        </section>

        <ProblemSection />
        <Calculator />
        <ValueStack />
        <GuaranteeSection />
        <Pricing />
        <FounderSection />
        {/* FAQ — visible source for the FAQPage schema in index.html */}
        <FAQ />
        <DemoBooking />
      </main>

      {/* Footer. NAP-led rather than the four-column link grid: the address
          block and the disclosure are the two things that actually have to be
          here, so they lead, and the links run as a single inline rule beneath
          them. */}
      <footer className="bg-navy border-t border-navy-line">
        <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-10 pt-14 pb-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-end mb-11">
            <div className="lg:flex-[1.4]">
              <div className="flex items-center gap-[11px] mb-5">
                <span className="w-[30px] h-[30px] bg-white rounded-[9px] flex items-center justify-center text-navy font-serif font-medium text-[17px]">C</span>
                <span className="text-[19px] font-bold tracking-[-0.015em] text-white">Caliber Infrastructure</span>
              </div>
              <p className="font-serif font-normal text-[26px] sm:text-[30px] leading-[1.25] text-white max-w-[520px]">
                We build the front desk once, hand you the keys, and keep it running.
              </p>
              <p className="text-[14px] leading-[1.6] text-onnavy mt-4 max-w-[480px]">
                24/7 AI reception, missed-call recovery, automated reminders, and patient reactivation
                for med spas across Miami-Dade, Broward, and Palm Beach.
              </p>
            </div>

            <address className="not-italic text-[13.5px] leading-[1.75] text-onnavy-3 lg:flex-none lg:w-[280px]">
              <div className="text-[10px] tracking-[0.16em] uppercase text-onnavy-2 font-semibold mb-3 not-italic">Contact</div>
              <div className="font-semibold text-white">Caliber Infrastructure LLC</div>
              <div>13727 SW 152nd Street #1032<br />Miami, FL 33177</div>
              <div className="mt-2.5">
                <a href="mailto:maurorousseau@caliberinfrastructure.com" className="hover:text-white transition break-all">maurorousseau@caliberinfrastructure.com</a>
              </div>
              <div>
                <a href={PHONE_HREF} className="hover:text-white transition">{PHONE_DISPLAY}</a>
              </div>
            </address>
          </div>

          <nav aria-label="Footer" className="border-t border-navy-line pt-6 flex flex-wrap gap-x-6 gap-y-2.5 text-[13px] text-onnavy mb-6">
            <a href="#problem" className="hover:text-white transition">Diagnosis</a>
            <a href="#calculator" className="hover:text-white transition">Revenue audit</a>
            <a href="#tiers" className="hover:text-white transition">Pricing</a>
            <a href="#about" className="hover:text-white transition">Methodology</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="/guide/med-spa-ai-automation" className="hover:text-white transition">Med spa AI automation guide</a>
            <a href="https://www.instagram.com/caliberinfra/" rel="noopener" className="hover:text-white transition">Instagram</a>
            <span className="text-navy-line2" aria-hidden="true">·</span>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/privacy#sms" className="hover:text-white transition">SMS terms &amp; consent</a>
          </nav>

          {/* Reads at body contrast. This is an FTC-facing disclosure and it was
              previously the faintest type on the page at 3.85:1. */}
          <div className="border-t border-navy-line pt-6 flex flex-wrap gap-4 justify-between items-start">
            <p className="text-[12.5px] leading-[1.7] text-muted-4 max-w-[720px]">
              Revenue figures on this site (including the revenue-audit calculator, the recovery card
              in the hero, and the {LEAK_RANGE_MONTHLY}/mo range) are illustrative models built on
              industry averages. They are not client results and not a promise of performance. Any
              guarantee is governed solely by the signed Caliber Guarantee terms. See our{' '}
              <a href="/terms" className="text-onnavy-3 hover:text-white transition underline underline-offset-2">Terms of Service</a>.
            </p>
            <div className="text-[12.5px] text-muted-4">&copy; 2026 Caliber Infrastructure LLC</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
