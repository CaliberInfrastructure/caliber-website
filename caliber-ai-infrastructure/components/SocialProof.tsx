
import React from 'react';

const TESTIMONIALS = [
  {
    quote: 'Recovered $22,400 in month one from missed calls and dormant reactivation alone. No-show rate dropped from 28% to 11% in 6 weeks.',
    revenue: '$175k/mo revenue',
    role: 'Practice Owner, Broward County',
    stars: 5,
  },
  {
    quote: 'We were losing over $8,000 a month in after-hours calls we didn\'t even know about. Caliber caught every single one from day one.',
    revenue: '$210k/mo revenue',
    role: 'Owner & Medical Director, Miami-Dade',
    stars: 5,
  },
  {
    quote: 'The reactivation engine alone paid for the entire system in the first 3 weeks. We brought back 47 dormant clients in month one.',
    revenue: '$130k/mo revenue',
    role: 'Practice Manager, Palm Beach',
    stars: 5,
  },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase mb-4">
            Results From Real Practices
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            What Caliber Clients Are <span className="text-[#0097B2]">Recovering</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-base leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 font-black text-sm">South Florida Med Spa — {t.revenue}</p>
                  <p className="text-slate-500 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-xs italic">
          Client names withheld by request. Results verified from Caliber system dashboards.
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
