
import React, { useState } from 'react';
import { TIERS } from '../constants';
import { ServiceTier } from '../types';

const Pricing: React.FC = () => {
  const [showAllTiers, setShowAllTiers] = useState(false);
  const [pricingOption, setPricingOption] = useState<'A' | 'B'>('A');

  const flagship = TIERS[ServiceTier.FULL_AUTONOMY];
  const foundation = TIERS[ServiceTier.FOUNDATION];
  const growth = TIERS[ServiceTier.GROWTH];

  const priceLabel = pricingOption === 'A' ? 'AI Front Desk Installation' : 'Zero Barrier Entry';
  const priceBig = pricingOption === 'A' ? '$2,000' : '$3,500';
  const priceSub = pricingOption === 'A' ? '+ $10,000 Custom AI Infrastructure Build' : '$0 setup — 12-month minimum commitment';
  const priceNote = pricingOption === 'A' ? '30-day build guarantee — refund if not live' : 'No upfront investment required';
  const commitment = pricingOption === 'A' ? 'Monthly' : '12-month minimum';
  const priceFraming = pricingOption === 'A'
    ? 'Option A pays for itself in 13 days of operation. Total 12-month cost: $34k.'
    : 'Option B removes the upfront decision entirely. Total 12-month cost: $42k vs $34k on Option A — your call.';

  const lowerTiers = [foundation, growth];

  return (
    <section id="tiers" className="bg-surface-2">
      <div className="max-w-container mx-auto px-10 py-20">

        {/* Flagship block */}
        <div className="bg-navy rounded-2xl p-10 lg:p-[60px] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-start">
            {/* Left */}
            <div className="lg:flex-[1.25] w-full">
              <div className="flex flex-wrap gap-2.5 mb-6">
                <span className="text-[10px] tracking-[0.12em] uppercase text-teal-light font-semibold bg-teal-light/10 border border-navy-line3 px-[13px] py-1.5 rounded-full">Flagship Tier</span>
                <span className="text-[10px] tracking-[0.12em] uppercase text-navy font-bold bg-teal-light px-[13px] py-1.5 rounded-full">Recommended</span>
              </div>

              <h3 className="font-serif font-medium text-[40px] md:text-[54px] text-white tracking-[-0.02em] leading-[1.02] mb-2.5">{flagship.name}</h3>
              <p className="font-serif text-[22px] italic text-onnavy-2 mb-6">"The last hire you'll ever make"</p>

              <p className="text-base leading-[1.65] text-onnavy mb-9 max-w-[520px]">
                Every week, your practice is quietly bleeding $6,250 in missed calls and no-shows. By the time you read this sentence, another $10 just walked out the door.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-9">
                {flagship.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-teal-light text-sm flex-shrink-0">✓</span>
                    <span className="text-[13.5px] font-semibold text-onnavy-3">{f}</span>
                  </div>
                ))}
              </div>

              <div className="bg-teal-light/[0.07] border border-navy-line3 rounded-md px-[22px] py-[18px] flex gap-4 items-center mb-8">
                <span className="w-[42px] h-[42px] bg-teal-light/[0.12] rounded-[11px] flex items-center justify-center text-teal-light text-lg flex-shrink-0">✓</span>
                <div>
                  <div className="text-sm font-bold text-teal-light">Revenue Recovery Guarantee™ Included</div>
                  <div className="text-[12.5px] text-onnavy-2 mt-0.5">10x ROI in 90 days or we work free until we deliver it</div>
                </div>
              </div>

              <a href="#demo" className="inline-flex items-center gap-2.5 bg-teal text-white text-[15px] font-semibold px-7 py-4 rounded-sm hover:bg-teal-deep transition">
                Claim your spot — 2 remaining in Q2 <span>→</span>
              </a>
            </div>

            {/* Right sidebar */}
            <div className="flex-none w-full lg:w-[380px]">
              <div className="bg-white/5 border border-navy-line rounded-lg p-[34px]">
                {/* Option toggle */}
                <div className="flex gap-[5px] bg-white/[0.06] rounded-xl p-[5px] mb-[30px]">
                  <button
                    onClick={() => setPricingOption('A')}
                    className={`flex-1 py-[11px] rounded-lg text-[11px] font-bold tracking-[0.04em] uppercase transition ${pricingOption === 'A' ? 'bg-white text-navy' : 'bg-transparent text-onnavy-2 hover:text-white'}`}
                  >
                    Option A — Standard
                  </button>
                  <button
                    onClick={() => setPricingOption('B')}
                    className={`flex-1 py-[11px] rounded-lg text-[11px] font-bold tracking-[0.04em] uppercase transition ${pricingOption === 'B' ? 'bg-white text-navy' : 'bg-transparent text-onnavy-2 hover:text-white'}`}
                  >
                    Option B — Zero Barrier
                  </button>
                </div>

                <div className="text-[10px] tracking-[0.14em] uppercase text-onnavy-2 font-semibold mb-3.5">{priceLabel}</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif font-medium text-[58px] text-white tracking-[-0.02em] leading-none">{priceBig}</span>
                  <span className="text-base text-onnavy-2 font-semibold">/mo</span>
                </div>
                <div className="text-[13.5px] text-onnavy mb-3.5">{priceSub}</div>
                <div className="flex items-center gap-2.5 mb-[30px]">
                  <span className="text-teal-light text-[13px]">✓</span>
                  <span className="text-[12.5px] text-onnavy-teal font-semibold">{priceNote}</span>
                </div>

                <div className="border-t border-navy-line pt-[26px] flex flex-col gap-[22px]">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-onnavy-2">Commitment</span>
                    <span className="text-sm text-white font-bold">{commitment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-onnavy-2">Value Delivered</span>
                    <span className="text-base text-teal-light font-bold">~$26,300/mo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-onnavy-2">Projected ROI</span>
                    <span className="font-serif font-medium text-[34px] text-teal-light">10–17x</span>
                  </div>
                </div>

                <div className="border-t border-navy-line mt-[26px] pt-6">
                  <p className="text-[12.5px] leading-[1.6] text-onnavy-2 italic text-center">{priceFraming}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower tiers toggle */}
        <div className="text-center mt-12 mb-2">
          <p className="text-sm text-ink-3 font-medium tracking-[0.01em] mb-4">Not sure which is right for you? Most South Florida med spas doing $100k+/mo choose Full Autonomy.</p>
          <button
            onClick={() => setShowAllTiers(!showAllTiers)}
            className="inline-flex items-center gap-2 text-navy font-bold text-[15px]"
          >
            {showAllTiers ? 'Hide stepping-stone tiers' : 'See other tiers'}
            <span className={`transition-transform ${showAllTiers ? 'rotate-180' : ''}`}>▾</span>
          </button>
        </div>

        {showAllTiers && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-narrow mx-auto mt-6">
            {lowerTiers.map((tier) => (
              <div key={tier.name} className="bg-white rounded-xl p-9 shadow-card flex flex-col">
                <div className="flex justify-between items-start mb-[22px]">
                  <div>
                    <h4 className="font-serif font-medium text-[28px] text-navy">{tier.name}</h4>
                    <p className="text-[13px] text-muted mt-1">{tier.positioning}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-serif font-medium text-[26px] text-navy">${tier.monthlyFee.toLocaleString()}<span className="text-[13px] text-muted-2">/mo</span></div>
                    <div className="text-[10px] tracking-[0.08em] uppercase text-muted-2 font-semibold">${tier.setupFee.toLocaleString()} build</div>
                  </div>
                </div>
                <p className="text-[13.5px] leading-[1.6] text-ink-3 mb-6">{tier.description}</p>
                <div className="flex flex-col gap-[13px] mb-6">
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex gap-[11px] items-center">
                      <span className="text-teal text-xs flex-shrink-0">✓</span>
                      <span className="text-[13.5px] text-ink-4 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto border-t border-hairline pt-[18px]">
                  <div className="text-[10px] tracking-[0.08em] uppercase text-muted-2 font-semibold mb-1.5">~${tier.valueMonthly.toLocaleString()}/mo value</div>
                  <p className="text-xs text-muted-2 italic">Guarantee not available on this tier</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-9">
          <p className="text-sm text-muted">
            Book a <a href="#demo" className="text-teal-deep font-bold underline">free demo</a> and we'll tell you honestly which tier fits your practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
