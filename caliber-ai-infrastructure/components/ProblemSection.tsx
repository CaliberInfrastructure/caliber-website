
import React from 'react';
import { ArrowRight, Check } from './icons';
import { LEAK_RANGE_MONTHLY, ROI_FLOOR_LABEL } from '../constants';

// Every figure in this section used to be stated as measured industry fact —
// "78% of customers book with whoever responds first", "40% of inquiries come
// after 6pm", "existing clients are 5x easier to book", "30–50% of your
// database hasn't been back in 90+ days" — with no source behind any of them,
// and outside the scope of the footer disclaimer, which covers only the
// calculator, the hero card, and the monthly range. They are now written as
// what they actually are: a description of the problem and Caliber's own
// modeling. Where a real citation exists later, it can be added back with the
// number.

const PAIN_POINTS = [
  {
    title: "Missed Calls That Never Convert",
    stat: "15–25 calls",
    sub: "Weekly, in our modeling",
    desc: "Every unanswered call is a potential $400+ treatment walking to your competitor. We model a busy med spa missing 15–25 calls a week — $6,000–$10,000 in bookings that never happen.",
  },
  {
    title: "20–30% No-Show Rates",
    stat: "$6,000+",
    sub: "Modeled Monthly Cost",
    desc: "Empty chairs don't pay rent. Without intelligent reminder sequences, you're losing provider time and the chance to fill those slots with waitlisted clients.",
  },
  {
    title: "Slow Inquiry Response",
    stat: "4–24 hrs",
    sub: "Typical Response",
    desc: "The practice that answers first usually gets the booking. If an inquiry sits for hours, you're handing a hot lead to whoever picked up the phone faster.",
  },
  {
    title: "Zero After-Hours Coverage",
    stat: "0 staff",
    sub: "Nights & Weekends",
    desc: "Inquiries keep arriving after your team goes home. Those high-intent prospects get voicemail — and they don't leave messages. They call the next spa on the list.",
  },
  {
    title: "Dormant Client Database",
    stat: "90+ days",
    sub: "Since Last Visit",
    desc: "Re-booking someone who already trusts you is far easier than winning a stranger. But a large share of your database hasn't been back in months, because nobody is reaching out.",
  },
];

const SUMMARY_STATS = [
  { figure: LEAK_RANGE_MONTHLY, label: "Modeled Monthly Leak", accent: false },
  { figure: "15–25", label: "Missed Calls / Week", accent: false },
  { figure: "24/7", label: "Coverage After Install", accent: false },
  { figure: ROI_FLOOR_LABEL, label: "Modeled ROI, Flagship", accent: true },
];

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="bg-surface-2">
      <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        {/* Off-centre head: the heading holds the left column and the framing
            line sits under it in the right, rather than the centred
            eyebrow/heading/subhead stack this page used six times over. */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-16 lg:items-end mb-11 lg:mb-[52px]">
          <h2 className="font-serif font-normal text-[32px] sm:text-4xl md:text-[44px] tracking-[-0.01em] text-navy leading-[1.12]">
            Five places the money goes before it reaches you
          </h2>
          <p className="text-[15px] leading-[1.65] text-ink-3 lg:pb-2 lg:border-l lg:border-hairline-2 lg:pl-8">
            None of these are marketing problems and none of them need more staff. They are
            operational gaps, and every one is closed by infrastructure that runs whether anyone
            remembers it or not.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {PAIN_POINTS.map((point, i) => (
            <div key={i} className="bg-white rounded-lg p-6 sm:p-8 shadow-card">
              <div className="flex items-baseline justify-between gap-3 mb-[22px]">
                <div className="text-[11px] tracking-[0.1em] uppercase text-muted-2 font-semibold">{point.sub}</div>
                <div className="font-serif font-medium text-[22px] sm:text-[26px] tracking-[-0.01em] text-terracotta-deep whitespace-nowrap">{point.stat}</div>
              </div>
              <h3 className="text-lg font-bold text-navy tracking-[-0.01em] mb-3">{point.title}</h3>
              <p className="text-[13.5px] leading-[1.6] text-ink-3">{point.desc}</p>
            </div>
          ))}

          {/* Sound familiar — navy CTA card */}
          <div className="bg-navy rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 border border-navy-line2 rounded-[10px] flex items-center justify-center text-teal-light text-base mb-5">
                <Check />
              </div>
              <h3 className="font-serif font-normal text-[26px] sm:text-[28px] text-white mb-3.5">Sound familiar?</h3>
              <p className="text-sm leading-[1.6] text-onnavy mb-6">
                These aren't just problems — they're <span className="text-teal-light font-semibold">recoverable revenue</span>. The revenue audit below puts a number on yours.
              </p>
            </div>
            <a href="#calculator" className="inline-flex items-center justify-center gap-2 text-center bg-teal text-white text-[13.5px] font-semibold py-3.5 rounded-sm hover:bg-teal-deep transition">
              Put a number on it <ArrowRight />
            </a>
          </div>
        </div>

        {/* Summary stat strip. Padding and type scale down at 320px — the old
            fixed p-10/px-6 combination left an 80px cell holding 83px of text,
            so the figure clipped its own container on a small phone. */}
        <div className="bg-white rounded-lg p-5 sm:p-8 lg:p-10 shadow-card grid grid-cols-2 lg:grid-cols-4 gap-y-6">
          {SUMMARY_STATS.map((s, i) => (
            <div key={s.label} className={`text-center px-1.5 sm:px-4 lg:px-6 ${i > 0 ? 'lg:border-l border-hairline' : ''}`}>
              <div className={`font-serif font-medium text-[26px] sm:text-[32px] lg:text-[38px] tracking-[-0.02em] ${s.accent ? 'text-teal' : 'text-navy'}`}>{s.figure}</div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.06em] sm:tracking-[0.08em] uppercase text-muted-2 font-semibold mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
