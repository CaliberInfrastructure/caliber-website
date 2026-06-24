
import React from 'react';

const CALENDAR_BOOKING_URL = 'https://calendar.app.google/QCKrZj6idQuVPf5c9';

const ANALYSIS_CARDS = [
  { title: "Phone Response", desc: "Live walkthrough of the AI receptionist handling your busiest call scenarios" },
  { title: "Inquiry Speed", desc: "See how inbound website & social leads get routed in under 60 seconds" },
  { title: "Review Analysis", desc: "How we turn every completed visit into a Google review request, automatically" },
  { title: "Booking Flow", desc: "End-to-end booking, confirmation, and no-show reminder automation live" },
];

const WHAT_YOU_GET = [
  '30-minute live walkthrough — not a pitch deck',
  'Live ROI estimate built against your actual revenue numbers',
  'Straight answer on which tier fits (or if we\'re not a fit)',
  'No credit card, no obligation, no follow-up spam',
];

const DemoBooking: React.FC = () => {
  return (
    <section id="demo" className="bg-navy">
      <div className="max-w-container mx-auto px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-block text-[10px] tracking-[0.14em] uppercase text-teal-light font-semibold bg-teal-light/10 border border-navy-line3 px-3.5 py-[7px] rounded-full mb-[26px]">
              Free Demo
            </div>
            <h2 className="font-serif font-normal text-[40px] md:text-[46px] tracking-[-0.01em] text-white leading-[1.1] mb-[22px]">
              See the full system <span className="text-teal-light italic">live</span>, built to your numbers
            </h2>
            <p className="text-[16.5px] leading-[1.65] text-onnavy mb-11">
              30-minute walkthrough of the complete Caliber infrastructure — AI receptionist, booking engine, no-show recovery, and revenue dashboard — running against your real revenue numbers. No pitch deck. No obligation.
            </p>

            <div className="text-[10px] tracking-[0.16em] uppercase text-onnavy-2 font-semibold mb-6">What we'll walk through</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {ANALYSIS_CARDS.map((card, i) => (
                <div key={i} className="bg-white/[0.04] border border-navy-line rounded-lg p-6">
                  <div className="w-[42px] h-[42px] bg-teal-light/10 border border-navy-line3 rounded-sm flex items-center justify-center text-teal-light text-base mb-[18px]">◆</div>
                  <h4 className="text-base font-bold text-white tracking-[-0.01em] mb-1.5">{card.title}</h4>
                  <p className="text-[12.5px] leading-[1.55] text-onnavy-2">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-teal/[0.12] border border-navy-line3 rounded-lg p-7">
              <div className="text-[10px] tracking-[0.16em] uppercase text-teal-light font-semibold mb-3">Deliverable</div>
              <p className="text-base leading-[1.55] text-onnavy-4 font-semibold">
                A live walkthrough of the full automation system, customized to your revenue numbers.
              </p>
            </div>
          </div>

          {/* RIGHT BOOKING CARD */}
          <div className="bg-white rounded-2xl p-10 md:p-11 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.1em] uppercase text-teal-deep font-semibold bg-teal-wash px-3.5 py-[7px] rounded-full mb-7">
              <span className="w-1.5 h-1.5 bg-teal rounded-full"></span>
              2 Q2 spots remaining
            </div>

            <h3 className="font-serif font-medium text-[32px] text-navy tracking-[-0.01em] mb-2">Book Your Demo</h3>
            <p className="text-sm text-muted leading-[1.6] mb-8">
              Pick a time that works. The booking form asks a few qualifying questions so we can tailor the walkthrough to your spa.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {WHAT_YOU_GET.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-wash flex items-center justify-center mt-0.5 text-teal-deep text-xs font-bold">✓</span>
                  <span className="text-[13.5px] font-semibold text-ink-2 leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={CALENDAR_BOOKING_URL}
              className="w-full flex items-center justify-center py-4 bg-teal text-white rounded-sm text-[15px] font-semibold hover:bg-teal-deep transition group"
            >
              Book a Free Demo <span className="ml-2 group-hover:translate-x-1 transition inline-block">→</span>
            </a>

            <div className="flex items-center justify-center gap-5 mt-7 text-[11px] font-semibold text-muted-2 uppercase tracking-[0.08em]">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                60 Seconds
              </span>
              <span className="text-hairline-2">•</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                No Card Required
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DemoBooking;
