
import React from 'react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative bg-gradient-to-b from-slate-950 to-[#1a1a2e] rounded-[3rem] p-12 md:p-16 border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10 overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-amber-500/40 rounded-tl-[3rem]"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-amber-500/40 rounded-br-[3rem]"></div>

          {/* Shield icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-amber-500/10 border-2 border-amber-500/30 rounded-2xl flex items-center justify-center">
              <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white text-center tracking-tight mb-8">
            The Caliber Revenue Recovery Guarantee™
          </h2>

          {/* Primary guarantee */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed text-center font-medium italic">
              "We will recover a minimum of 10x your monthly investment ($20,000) in verifiable revenue within your first 90 days of going live. If we don't, we continue operating your full infrastructure at no charge — month by month — until we hit that number. No time limit. No exceptions."
            </p>
          </div>

          {/* Secondary guarantee */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-amber-200/90 text-base leading-relaxed italic">
                "If your system isn't live and capturing revenue within 30 days of kickoff, we refund your setup fee — no questions asked."
              </p>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
