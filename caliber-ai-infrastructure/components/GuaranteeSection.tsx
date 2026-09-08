
import React from 'react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-tight mx-auto px-10 py-20">
        <div className="relative bg-navy rounded-xl px-14 py-16 overflow-hidden">
          {/* Decorative corner brackets */}
          <div className="absolute top-0 left-0 w-[90px] h-[90px] border-t-2 border-l-2 border-navy-line3 rounded-tl-xl"></div>
          <div className="absolute bottom-0 right-0 w-[90px] h-[90px] border-b-2 border-r-2 border-navy-line3 rounded-br-xl"></div>

          <div className="flex justify-center mb-7">
            <div className="w-16 h-16 bg-teal-light/10 border border-navy-line3 rounded-md flex items-center justify-center text-teal-light text-[28px]">✓</div>
          </div>

          <h2 className="font-serif font-normal text-3xl md:text-4xl text-white text-center tracking-[-0.01em] leading-[1.2] mb-4">
            The Caliber Revenue Recovery Guarantee™
          </h2>

          <div className="flex justify-center mb-8">
            <span className="text-[10px] tracking-[0.14em] uppercase text-teal-light font-semibold bg-teal-light/10 border border-navy-line3 px-[13px] py-1.5 rounded-full text-center">
              Included on the flagship Full Autonomy System only
            </span>
          </div>

          {/* Primary guarantee */}
          <div className="bg-white/[0.04] border border-navy-line rounded-md p-8 mb-[18px]">
            <p className="font-serif text-[21px] leading-[1.55] text-onnavy-4 text-center italic">
              "We will recover a minimum of 10x your monthly investment ($20,000) in verifiable revenue within your first 90 days of going live. If we don't, we continue operating your full infrastructure at no charge — month by month — until we hit that number."
            </p>
          </div>

          {/* Secondary guarantee */}
          <div className="bg-teal-light/[0.06] border border-navy-line3 rounded-md px-7 py-6 flex gap-4 items-start">
            <span className="w-[30px] h-[30px] bg-teal-light/[0.12] rounded-[9px] flex items-center justify-center text-teal-light text-sm flex-shrink-0 mt-0.5">✓</span>
            <p className="text-[15px] leading-[1.6] text-onnavy-teal italic">
              "If your system isn't live and capturing revenue within 30 days of kickoff, we refund your setup fee — no questions asked."
            </p>
          </div>

          {/* Plain-language terms. Keep in sync with the signed Caliber
              Guarantee document and the Terms of Service. */}
          <p className="text-[12.5px] leading-[1.7] text-onnavy-2 mt-7 text-center max-w-[640px] mx-auto">
            Terms in brief: "recovered" means source-tracked bookings attributed to Caliber systems in
            your dashboard, measured as revenue rather than profit, against the $2,000 monthly retainer.
            The 90-day clock starts when your systems are live and tracking — including carrier approval
            of SMS, which typically takes one to two weeks. Eligibility depends on call and lead volume.
            The full terms govern and are set out in your signed agreement; see our{' '}
            <a href="/terms" className="text-onnavy-3 hover:text-white transition underline underline-offset-2">Terms of Service</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
