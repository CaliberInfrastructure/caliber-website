
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
    <section className="bg-white">
      <div className="max-w-container mx-auto px-10 py-20">
        <div className="text-center mb-12">
          <div className="text-[11px] tracking-[0.16em] uppercase text-muted-2 font-semibold mb-3.5">Results from real practices</div>
          <h2 className="font-serif font-normal text-4xl md:text-[44px] tracking-[-0.01em] text-navy leading-[1.12]">
            What Caliber clients are <span className="text-teal">recovering</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-surface-2 rounded-lg p-[34px] flex flex-col">
              <div className="text-teal text-sm tracking-[2px] mb-[22px]">{'★'.repeat(t.stars)}</div>
              <p className="font-serif text-[19px] leading-[1.5] text-ink-5 italic mb-7 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3.5 border-t border-hairline-3 pt-[22px]">
                <div className="w-11 h-11 bg-navy rounded-full flex items-center justify-center text-teal-light font-serif text-lg flex-shrink-0">✦</div>
                <div>
                  <div className="text-[13px] font-bold text-navy">South Florida Med Spa — {t.revenue}</div>
                  <div className="text-[12.5px] text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[12.5px] text-muted-2 italic">
          Client names withheld by request. Results verified from Caliber system dashboards.
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
