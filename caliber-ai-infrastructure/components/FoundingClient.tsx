import React from 'react';
import { Check, ArrowRight } from './icons';

// Replaces the previous testimonial section. Caliber has no clients yet, so
// there are no client results to show — this states that plainly and puts the
// founding-client offer in its place. Nothing here is a claim about a client.
// When the first case study exists (execution order step 27), it replaces this.

const WHAT_YOU_GET = [
  'The full Full Autonomy System build, at founding-client terms',
  'Direct access to the founder — no account manager, no ticket queue',
  'Your attribution dashboard, showing every recovered dollar as it lands',
  'Priority on roadmap requests while the system is being built around you',
];

const WHAT_WE_ASK = [
  'A written case study once the numbers are in',
  'A short video testimonial, if the results earn one',
  'Permission to publish your recovered-revenue figures',
];

const FoundingClient: React.FC = () => {
  return (
    <section id="founding" className="bg-white">
      <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        {/* Off-centre head. The accent-word-in-heading move is gone here — it
            appeared six times down the page and is one of the loudest
            generated-page tells. */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-16 lg:items-end mb-11 lg:mb-12">
          <div>
            <div className="text-[11px] tracking-[0.16em] uppercase text-muted-2 font-semibold mb-3.5">
              Founding client program
            </div>
            <h2 className="font-serif font-normal text-[32px] sm:text-4xl md:text-[44px] tracking-[-0.01em] text-navy leading-[1.12]">
              We're taking on our first South Florida med spas
            </h2>
          </div>
          <p className="text-[16px] sm:text-[17px] leading-[1.65] text-ink-2 lg:pb-2 lg:border-l lg:border-hairline-2 lg:pl-8">
            Caliber is newly launched and we don't have client testimonials yet — so we're not going to
            show you any. What we can show you is the system itself, running live, on a call you book
            below. The founding client program trades a better price for the proof we don't have yet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="bg-surface-2 rounded-lg p-7 sm:p-[34px]">
            <div className="text-[11px] tracking-[0.16em] uppercase text-teal-deep font-semibold mb-[22px]">
              What you get
            </div>
            <ul className="flex flex-col gap-4">
              {WHAT_YOU_GET.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <span aria-hidden="true" className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-wash flex items-center justify-center mt-0.5 text-teal-deep text-xs"><Check /></span>
                  <span className="text-[14.5px] leading-[1.55] text-ink-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-2 rounded-lg p-7 sm:p-[34px]">
            <div className="text-[11px] tracking-[0.16em] uppercase text-muted font-semibold mb-[22px]">
              What we ask in return
            </div>
            <ul className="flex flex-col gap-4 mb-7">
              {WHAT_WE_ASK.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <span aria-hidden="true" className="flex-shrink-0 w-6 h-6 rounded-full bg-hairline flex items-center justify-center mt-0.5 text-ink-3 text-xs"><ArrowRight /></span>
                  <span className="text-[14.5px] leading-[1.55] text-ink-2">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[13px] leading-[1.6] text-muted border-t border-hairline-3 pt-5">
              If the system doesn't produce results worth writing about, you owe us nothing to say —
              and the guarantee terms still apply.
            </p>
          </div>
        </div>

        <div className="bg-navy rounded-lg px-7 sm:px-9 py-7 sm:py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <div className="text-[11px] tracking-[0.16em] uppercase text-teal-light font-semibold mb-2.5">
              What we can prove today
            </div>
            <p className="text-[15px] leading-[1.65] text-onnavy-3">
              The AI receptionist is live and booking appointments end to end — you can hear it handle a
              real call on the demo. Every build ships with the attribution dashboard, so recovered
              revenue is a number you can audit, not a claim you have to take on faith.
            </p>
          </div>
          <a
            href="#demo"
            className="flex-none inline-flex items-center justify-center gap-2 bg-teal text-white text-[14.5px] font-semibold px-7 py-[15px] rounded-sm hover:bg-teal-deep transition"
          >
            Hear it live <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoundingClient;
