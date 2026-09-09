
import React, { useState } from 'react';
import { Check, Chevron, ArrowRight } from './icons';
import {
  CORE_STACK,
  BONUSES,
  FLAGSHIP_VALUE_MONTHLY,
  BONUS_ONE_TIME,
  LEAK_RANGE_MONTHLY,
  ROI_FLOOR_LABEL,
} from '../constants';

const money = (n: number) => `$${n.toLocaleString()}`;
const priceLabel = (item: { monthly: number | null; oneTime?: number }) =>
  item.monthly !== null ? `${money(item.monthly)}/mo` : `${money(item.oneTime ?? 0)} one-time`;

interface RowProps {
  index: number;
  label: React.ReactNode;
  price: string;
  detail: string;
  detailLabel: string;
  tone: 'core' | 'bonus';
  open: boolean;
  onToggle: (index: number) => void;
}

// One accordion row. Was a <div onClick> — no button, no tabindex, no role, no
// aria-expanded — which put all eleven rows, and therefore the whole "what's
// included" section, out of reach of a keyboard or a screen reader.
//
// Declared at module scope, not inside ValueStack: a component defined during
// render is a new type on every state change, so React unmounts and remounts
// the row you just clicked and the focus ring lands back on <body>.
const AccordionRow: React.FC<RowProps> = ({ index, label, price, detail, detailLabel, tone, open, onToggle }) => {
  const panelId = `stack-panel-${index}`;
  const triggerId = `stack-trigger-${index}`;
  return (
    <div className={`bg-white rounded-md shadow-row overflow-hidden ${tone === 'bonus' ? 'border border-teal-wash' : ''}`}>
      <h3>
        <button
          type="button"
          id={triggerId}
          onClick={() => onToggle(index)}
          aria-expanded={open}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-3 px-5 sm:px-6 py-[22px] text-left hover:bg-surface-2/60 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 focus-visible:ring-inset"
        >
          <span className="flex items-center gap-3.5 sm:gap-4 min-w-0">{label}</span>
          <span className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <span className={`text-[14px] sm:text-[15px] font-bold hidden sm:inline ${tone === 'bonus' ? 'text-teal-deep' : 'text-teal'}`}>{price}</span>
            <span className={`text-muted-3 text-[15px] transition-transform ${open ? 'rotate-180' : ''}`}><Chevron /></span>
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={triggerId} hidden={!open} className="px-5 sm:px-6 pb-[22px] sm:pl-[78px]">
        <div className={`${tone === 'bonus' ? 'bg-teal-wash' : 'bg-surface-2'} rounded-sm p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3`}>
          <span className={`text-[10px] tracking-[0.1em] uppercase font-bold flex-shrink-0 ${tone === 'bonus' ? 'text-teal-deep' : 'text-muted-2'}`}>{detailLabel}</span>
          <span className="text-[13.5px] font-semibold text-ink-2">{detail}</span>
        </div>
        <p className={`sm:hidden font-bold text-sm mt-3 ${tone === 'bonus' ? 'text-teal-deep' : 'text-teal'}`}>Est. value: {price}</p>
      </div>
    </div>
  );
};

const ValueStack: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const toggle = (i: number) => setExpandedIndex((cur) => (cur === i ? null : i));

  return (
    <section id="value-stack" className="bg-surface-2">
      <div className="max-w-narrow mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        {/* The one section that keeps the centred head — the rest of the page
            no longer repeats this arrangement six times. */}
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.08em] uppercase text-teal-deep font-semibold mb-3.5">
            The Full Autonomy System · what's included
          </div>
          {/* The heading figure is FLAGSHIP_VALUE_MONTHLY, which is the sum of
              the rows printed underneath it. It used to read $16,100 — the
              Acceleration tier's number, pasted onto the flagship — over
              components that added to $13,500, next to a pricing sidebar that
              said $26,300. */}
          <h2 className="font-serif font-normal text-[30px] sm:text-4xl md:text-[42px] tracking-[-0.01em] text-navy leading-[1.14] mb-3.5">
            {money(FLAGSHIP_VALUE_MONTHLY)}/mo in value. <span className="text-teal">$2,000/mo investment.</span>
          </h2>
          <p className="text-[15px] leading-[1.6] text-ink-3 max-w-[580px] mx-auto">
            Six core systems and five bonuses. Priced separately they run{' '}
            <strong className="text-navy font-semibold">{money(FLAGSHIP_VALUE_MONTHLY)}/mo</strong>. Packaged
            as the Full Autonomy System you pay{' '}
            <strong className="text-navy font-semibold">$2,000/mo</strong>, and every component below
            names the revenue leak it closes.
          </p>
        </div>

        {/* Core stack */}
        <div className="flex flex-col gap-2.5 mb-3.5">
          {CORE_STACK.map((item, i) => (
            <AccordionRow
              key={item.name}
              index={i}
              open={expandedIndex === i}
              onToggle={toggle}
              tone="core"
              price={priceLabel(item)}
              detail={item.recovers}
              detailLabel="What it recovers"
              label={
                <>
                  <span aria-hidden="true" className="w-[38px] h-[38px] bg-navy rounded-[11px] flex items-center justify-center text-teal-light text-base flex-shrink-0">
                    <Check />
                  </span>
                  <span className="text-[15px] sm:text-base font-bold text-navy tracking-[-0.01em]">{item.name}</span>
                </>
              }
            />
          ))}
        </div>

        {/* Bonuses */}
        <div className="flex flex-col gap-2.5 mb-10">
          {BONUSES.map((item, i) => (
            <AccordionRow
              key={item.name}
              index={CORE_STACK.length + i}
              open={expandedIndex === CORE_STACK.length + i}
              onToggle={toggle}
              tone="bonus"
              price={priceLabel(item)}
              detail={item.recovers}
              detailLabel="What it delivers"
              label={
                <>
                  <span className="bg-teal text-white text-[10px] font-bold tracking-[0.08em] uppercase px-[11px] py-1.5 rounded-[8px] flex-shrink-0">Bonus {i + 1}</span>
                  <span className="text-[15px] sm:text-base font-bold text-navy tracking-[-0.01em]">{item.name}</span>
                </>
              }
            />
          ))}
        </div>

        {/* Closing summary card */}
        <div className="bg-white border border-hairline-teal rounded-xl p-7 sm:p-11 text-center">
          <p className="text-[15px] text-muted-2 mb-7">
            <span className="line-through">Total stack value: {money(FLAGSHIP_VALUE_MONTHLY)}/mo + {money(BONUS_ONE_TIME)} one-time</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
            <div>
              <div className="text-[11px] tracking-[0.08em] uppercase text-muted-2 font-semibold mb-2">Your Investment</div>
              <div className="font-serif font-medium text-[30px] sm:text-[34px] tracking-[-0.02em] text-navy">$2,000/mo</div>
              <div className="text-[13px] text-muted font-medium mt-1">+ $10,000 build</div>
              <div className="text-[13px] text-teal-deep font-semibold mt-2">
                {money(FLAGSHIP_VALUE_MONTHLY - 2000)}/mo less than buying the parts separately
              </div>
            </div>
            <div aria-hidden="true" className="hidden md:flex w-[52px] h-[52px] bg-teal rounded-full items-center justify-center text-white text-[20px] mx-auto">
              <ArrowRight />
            </div>
            <div>
              <div className="text-[11px] tracking-[0.08em] uppercase text-teal-deep font-semibold mb-2">Modeled Recovery</div>
              <div className="font-serif font-medium text-[30px] sm:text-[34px] tracking-[-0.02em] text-teal">{LEAK_RANGE_MONTHLY}/mo</div>
              <div className="text-[13px] text-teal-deep font-bold mt-1">ROI: {ROI_FLOOR_LABEL} on the retainer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;
