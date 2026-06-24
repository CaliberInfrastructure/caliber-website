
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

          <h2 className="font-serif font-normal text-3xl md:text-4xl text-white text-center tracking-[-0.01em] leading-[1.2] mb-8">
            The Caliber Revenue Recovery Guarantee™
          </h2>

          {/* Primary guarantee */}
          <div className="bg-white/[0.04] border border-navy-line rounded-md p-8 mb-[18px]">
            <p className="font-serif text-[21px] leading-[1.55] text-onnavy-4 text-center italic">
              "We will recover a minimum of 10x your monthly investment ($20,000) in verifiable revenue within your first 90 days of going live. If we don't, we continue operating your full infrastructure at no charge — month by month — until we hit that number. No time limit. No exceptions."
            </p>
          </div>

          {/* Secondary guarantee */}
          <div className="bg-teal-light/[0.06] border border-navy-line3 rounded-md px-7 py-6 flex gap-4 items-start">
            <span className="w-[30px] h-[30px] bg-teal-light/[0.12] rounded-[9px] flex items-center justify-center text-teal-light text-sm flex-shrink-0 mt-0.5">✓</span>
            <p className="text-[15px] leading-[1.6] text-onnavy-teal italic">
              "If your system isn't live and capturing revenue within 30 days of kickoff, we refund your setup fee — no questions asked."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
