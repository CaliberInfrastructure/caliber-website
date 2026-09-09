
import React, { useState } from 'react';
import { TIERS, LEAK_RANGE_MONTHLY, ROI_FLOOR_LABEL, GUARANTEE_AMOUNT_LABEL, GUARANTEE_WINDOW_DAYS } from '../constants';
import { ServiceTier } from '../types';
import { Check, ArrowRight, Chevron } from './icons';

const Pricing: React.FC = () => {
  // Open on arrival. A prospect who does not fit the flagship should see the
  // tier that does fit without having to discover a disclosure control first.
  const [showAllTiers, setShowAllTiers] = useState(true);
  const [pricingOption, setPricingOption] = useState<'A' | 'B'>('A');

  const flagship = TIERS[ServiceTier.FULL_AUTONOMY];
  const foundation = TIERS[ServiceTier.FOUNDATION];
  const growth = TIERS[ServiceTier.GROWTH];

  const priceLabel = pricingOption === 'A' ? 'AI Front Desk Installation' : 'Zero Barrier Entry';
  const priceBig = pricingOption === 'A' ? '$2,000' : '$3,500';
  const priceSub = pricingOption === 'A' ? '+ $10,000 Custom AI Infrastructure Build' : '$0 setup, 12-month minimum commitment';
  const priceNote = pricingOption === 'A' ? '30-day build guarantee, refunded if not live' : 'No upfront investment required';
  const commitment = pricingOption === 'A' ? 'Monthly' : '12-month minimum';
  const priceFraming = pricingOption === 'A'
    ? 'Total 12-month cost: $34k, or $2,833/mo all-in once the build is spread across the year.'
    : 'Option B removes the upfront decision entirely. Total 12-month cost: $42k vs $34k on Option A. Your call.';

  const lowerTiers = [foundation, growth];

  return (
    <section id="tiers" className="bg-surface-2">
      <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">

        {/* Flagship block */}
        <div className="bg-navy rounded-2xl p-7 sm:p-10 lg:p-[60px] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            {/* Left */}
            <div className="lg:flex-[1.25] w-full">
              <div className="flex flex-wrap gap-2.5 mb-6">
                <span className="text-[10px] tracking-[0.12em] uppercase text-teal-light font-semibold bg-teal-light/10 border border-navy-line3 px-[13px] py-1.5 rounded-full">Flagship Tier</span>
                <span className="text-[10px] tracking-[0.12em] uppercase text-navy font-bold bg-teal-light px-[13px] py-1.5 rounded-full">Recommended</span>
              </div>

              <h2 className="font-serif font-medium text-[34px] sm:text-[40px] md:text-[54px] text-white tracking-[-0.02em] leading-[1.02] mb-2.5">{flagship.name}</h2>
              {/* Emphasis by weight and colour, not slant. An italicised line in
                  display type is one of the most reliable generated-page tells. */}
              <p className="font-serif text-[20px] sm:text-[22px] text-onnavy-3 mb-6">“The last hire you’ll ever make”</p>

              {/* States the revenue band the tier is priced and guaranteed for.
                  "A practice your size" named no size at all, and the $100k+/mo
                  floor is not arbitrary: below roughly $94k/mo the model's 30%
                  leakage ceiling caps recovery under the 10x floor this tier
                  claims, so the calculator would disqualify anyone the copy
                  invited. See roiCalculator.ts. */}
              <p className="text-[15px] sm:text-base leading-[1.65] text-onnavy mb-9 max-w-[520px]">
                Built for South Florida med spas doing $100k+/mo. At that volume a practice is
                quietly losing {LEAK_RANGE_MONTHLY} a month to calls nobody answered and
                appointments nobody confirmed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-9">
                {flagship.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span aria-hidden="true" className="text-teal-light text-sm flex-shrink-0"><Check /></span>
                    <span className="text-[13.5px] font-semibold text-onnavy-3">{f}</span>
                  </div>
                ))}
              </div>

              <div className="bg-teal-light/[0.07] border border-navy-line3 rounded-md px-5 sm:px-[22px] py-[18px] flex gap-4 items-center mb-8">
                <span aria-hidden="true" className="w-[42px] h-[42px] bg-teal-light/[0.12] rounded-[11px] flex items-center justify-center text-teal-light text-lg flex-shrink-0">
                  <Check />
                </span>
                <div>
                  <div className="text-sm font-bold text-teal-light">Revenue Recovery Guarantee included</div>
                  <div className="text-[12.5px] text-onnavy-3 mt-0.5">
                    {GUARANTEE_AMOUNT_LABEL} recovered in {GUARANTEE_WINDOW_DAYS} days, or we work free until you get there
                  </div>
                </div>
              </div>

              <a href="#demo" className="inline-flex items-center gap-2.5 bg-teal text-white text-[15px] font-semibold px-7 py-4 rounded-sm hover:bg-teal-deep transition">
                Walk through the build <ArrowRight />
              </a>
            </div>

            {/* Right sidebar */}
            <div className="flex-none w-full lg:w-[380px]">
              <div className="bg-white/5 border border-navy-line rounded-lg p-6 sm:p-[34px]">
                {/* Option toggle */}
                <div role="group" aria-label="Payment option" className="flex gap-[5px] bg-white/[0.06] rounded-xl p-[5px] mb-[30px]">
                  <button
                    type="button"
                    onClick={() => setPricingOption('A')}
                    aria-pressed={pricingOption === 'A'}
                    className={`flex-1 py-[11px] px-1 rounded-lg text-[10.5px] sm:text-[11px] font-bold tracking-[0.04em] uppercase transition ${pricingOption === 'A' ? 'bg-white text-navy' : 'bg-transparent text-onnavy-3 hover:text-white'}`}
                  >
                    Option A · Standard
                  </button>
                  <button
                    type="button"
                    onClick={() => setPricingOption('B')}
                    aria-pressed={pricingOption === 'B'}
                    className={`flex-1 py-[11px] px-1 rounded-lg text-[10.5px] sm:text-[11px] font-bold tracking-[0.04em] uppercase transition ${pricingOption === 'B' ? 'bg-white text-navy' : 'bg-transparent text-onnavy-3 hover:text-white'}`}
                  >
                    Option B · Zero Barrier
                  </button>
                </div>

                <div className="text-[10px] tracking-[0.14em] uppercase text-onnavy-3 font-semibold mb-3.5">{priceLabel}</div>
                {/* Scales down on small screens. At 320px the 58px numeral
                    pushed "/mo" to right:335px — off the viewport, visible only
                    because the body was masking overflow. */}
                <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                  <span className="font-serif font-medium text-[42px] sm:text-[52px] lg:text-[58px] text-white tracking-[-0.02em] leading-none">{priceBig}</span>
                  <span className="text-base text-onnavy-3 font-semibold">/mo</span>
                </div>
                <div className="text-[13.5px] text-onnavy mb-3.5">{priceSub}</div>
                <div className="flex items-center gap-2.5 mb-[30px]">
                  <span aria-hidden="true" className="text-teal-light text-[13px] flex-shrink-0"><Check /></span>
                  <span className="text-[12.5px] text-onnavy-teal font-semibold">{priceNote}</span>
                </div>

                <div className="border-t border-navy-line pt-[26px] flex flex-col gap-[22px]">
                  <div className="flex justify-between items-center gap-3">
                    <span className="text-sm text-onnavy-3">Commitment</span>
                    <span className="text-sm text-white font-bold">{commitment}</span>
                  </div>
                  <div className="flex justify-between items-center gap-3">
                    <span className="text-sm text-onnavy-3">Value Delivered</span>
                    {/* Same source as the value stack's heading, so the two can
                        no longer disagree by $10,000 across 400px of page. */}
                    <span className="text-base text-teal-light font-bold">~${flagship.valueMonthly.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex justify-between items-center gap-3">
                    <span className="text-sm text-onnavy-3">Modeled ROI</span>
                    <span className="font-serif font-medium text-[30px] sm:text-[34px] text-teal-light">{ROI_FLOOR_LABEL}</span>
                  </div>
                </div>

                <div className="border-t border-navy-line mt-[26px] pt-6">
                  <p className="text-[12.5px] leading-[1.6] text-onnavy-3 text-center">{priceFraming}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower tiers toggle */}
        <div className="text-center mt-12 mb-2">
          <p className="text-sm text-ink-3 font-medium tracking-[0.01em] mb-4">
            Full Autonomy is built for practices doing $100k+/mo. Below that, a stepping-stone tier
            is the honest fit.
          </p>
          <button
            type="button"
            onClick={() => setShowAllTiers(!showAllTiers)}
            aria-expanded={showAllTiers}
            aria-controls="lower-tiers"
            className="inline-flex items-center gap-2 text-navy font-bold text-[15px] hover:text-teal transition"
          >
            {showAllTiers ? 'Hide stepping-stone tiers' : 'See other tiers'}
            <span className={`transition-transform text-[15px] ${showAllTiers ? 'rotate-180' : ''}`}><Chevron /></span>
          </button>
        </div>

        <div id="lower-tiers" hidden={!showAllTiers} className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-narrow mx-auto mt-6">
          {lowerTiers.map((tier) => (
            <div key={tier.name} className="bg-white rounded-xl p-7 sm:p-9 shadow-card flex flex-col">
              <div className="flex justify-between items-start gap-4 mb-[22px]">
                <div>
                  <h3 className="font-serif font-medium text-[24px] sm:text-[28px] text-navy">{tier.name}</h3>
                  <p className="text-[13px] text-muted mt-1">{tier.positioning}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-serif font-medium text-[22px] sm:text-[26px] text-navy whitespace-nowrap">${tier.monthlyFee.toLocaleString()}<span className="text-[13px] text-muted-2">/mo</span></div>
                  <div className="text-[10px] tracking-[0.08em] uppercase text-muted-2 font-semibold whitespace-nowrap">${tier.setupFee.toLocaleString()} build</div>
                </div>
              </div>
              <p className="text-[13.5px] leading-[1.6] text-ink-3 mb-6">{tier.description}</p>
              <div className="flex flex-col gap-[13px] mb-6">
                {tier.features.map((f, i) => (
                  <div key={i} className="flex gap-[11px] items-center">
                    <span aria-hidden="true" className="text-teal text-xs flex-shrink-0"><Check /></span>
                    <span className="text-[13.5px] text-ink-4 font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto border-t border-hairline pt-[18px]">
                <div className="text-[10px] tracking-[0.08em] uppercase text-muted-2 font-semibold mb-1.5">~${tier.valueMonthly.toLocaleString()}/mo value</div>
                <p className="text-xs text-muted-2">Guarantee not available on this tier</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-9">
          <p className="text-sm text-muted">
            Book a <a href="#demo" className="text-teal-deep font-bold underline underline-offset-2">free demo</a> and we'll tell you honestly which tier fits your practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
