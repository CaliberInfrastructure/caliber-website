
import React from 'react';
import { Check } from './icons';
import { GUARANTEE_AMOUNT_LABEL, GUARANTEE_WINDOW_DAYS } from '../constants';

// The guarantee is stated as a flat dollar threshold, not as a multiple of the
// monthly plan. "10x your monthly investment ($20,000)" sat directly beneath a
// toggle offering that same flagship at $3,500/mo, where 10x is $35,000 — an
// unresolved contract ambiguity a buyer could screenshot. A fixed number is
// unambiguous on both payment options and matches the signed Guarantee terms.

const GuaranteeSection: React.FC = () => {
  return (
    <section id="guarantee" className="bg-white">
      <div className="max-w-tight mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="relative bg-navy rounded-xl px-6 sm:px-10 lg:px-14 py-12 sm:py-16 overflow-hidden">
          {/* Decorative corner brackets */}
          <div aria-hidden="true" className="absolute top-0 left-0 w-[90px] h-[90px] border-t-2 border-l-2 border-navy-line3 rounded-tl-xl"></div>
          <div aria-hidden="true" className="absolute bottom-0 right-0 w-[90px] h-[90px] border-b-2 border-r-2 border-navy-line3 rounded-br-xl"></div>

          <div className="flex justify-center mb-7">
            <div aria-hidden="true" className="w-16 h-16 bg-teal-light/10 border border-navy-line3 rounded-md flex items-center justify-center text-teal-light text-[26px]">
              <Check />
            </div>
          </div>

          <h2 className="font-serif font-normal text-[28px] sm:text-3xl md:text-4xl text-white text-center tracking-[-0.01em] leading-[1.2] mb-4">
            The Caliber Revenue Recovery Guarantee
          </h2>

          <div className="flex justify-center mb-8">
            <span className="text-[10px] tracking-[0.14em] uppercase text-teal-light font-semibold bg-teal-light/10 border border-navy-line3 px-[13px] py-1.5 rounded-full text-center">
              Included on the flagship Full Autonomy System only
            </span>
          </div>

          {/* Primary guarantee */}
          <div className="bg-white/[0.06] border border-navy-line rounded-md p-6 sm:p-8 mb-[18px]">
            <p className="font-serif text-[19px] sm:text-[21px] leading-[1.55] text-onnavy-4 text-center">
              “We will recover a minimum of <strong className="text-white font-medium">{GUARANTEE_AMOUNT_LABEL} in verifiable
              revenue</strong> within your first {GUARANTEE_WINDOW_DAYS} days of going live, on either payment
              option. If we don’t, we continue operating your full infrastructure at no charge, month
              by month, until we hit that number.”
            </p>
          </div>

          {/* Secondary guarantee. The carrier-approval carve-out that used to
              sit inside this quote is now in the terms paragraph below, which
              applies it to both windows. */}
          <div className="bg-teal-light/[0.06] border border-navy-line3 rounded-md px-6 sm:px-7 py-6 flex gap-4 items-start">
            <span aria-hidden="true" className="w-[30px] h-[30px] bg-teal-light/[0.12] rounded-[9px] flex items-center justify-center text-teal-light text-sm flex-shrink-0 mt-0.5">
              <Check />
            </span>
            <p className="text-[14.5px] sm:text-[15px] leading-[1.6] text-onnavy-teal">
              “If your system isn’t live and capturing revenue within 30 days of kickoff, we refund
              your setup fee. No questions asked.”
            </p>
          </div>

          {/* Plain-language terms. Keep in sync with the signed Caliber
              Guarantee document and the Terms of Service. */}
          <p className="text-[12.5px] leading-[1.7] text-onnavy-3 mt-7 text-center max-w-[640px] mx-auto">
            Terms in brief: “recovered” means source-tracked bookings attributed to Caliber systems in
            your dashboard, measured as revenue rather than profit. On the standard $2,000/mo plan
            that threshold is 10× a month’s retainer. Both windows, the 90-day guarantee and the
            30-day build, start when your systems are live and tracking. Neither counts time spent
            waiting on carrier approval of SMS, which typically takes one to two weeks and is outside
            anyone’s control. Eligibility depends on call and lead volume. The full terms govern and
            are set out in your signed agreement; see our{' '}
            <a href="/terms" className="text-onnavy-4 hover:text-white transition underline underline-offset-2">Terms of Service</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
