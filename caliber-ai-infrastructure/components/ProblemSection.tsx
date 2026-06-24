
import React from 'react';

const PAIN_POINTS = [
  {
    title: "Missed Calls That Never Convert",
    stat: "15–25 calls",
    sub: "Weekly Loss",
    desc: "Every unanswered call is a potential $400+ treatment walking to your competitor. Most med spas miss 15–25 calls weekly—that's $6,000–$10,000 in lost bookings.",
  },
  {
    title: "20–30% No-Show Rates",
    stat: "$6,000+",
    sub: "Monthly Cost",
    desc: "Empty chairs don't pay rent. Without intelligent reminder sequences, you're losing provider time and the chance to fill those slots with waitlisted clients.",
  },
  {
    title: "Slow Inquiry Response",
    stat: "4–24 hrs",
    sub: "Avg Response",
    desc: "78% of customers book with whoever responds first. If your average response time is 4–24 hours, you're handing hot leads to faster competitors.",
  },
  {
    title: "Zero After-Hours Coverage",
    stat: "40% of leads",
    sub: "After 6PM",
    desc: "40% of inquiries come after 6pm when your staff is gone. These high-intent prospects get voicemail—and they don't leave messages. They call your competitor.",
  },
  {
    title: "Dormant Client Database",
    stat: "30–50%",
    sub: "Inactive 90+ Days",
    desc: "Your existing clients are 5x easier to book than new ones. But 30–50% of your database hasn't been back in 90+ days—because no one's reaching out.",
  },
];

const SUMMARY_STATS = [
  { figure: "$25–35k", label: "Avg. Monthly Loss", accent: false },
  { figure: "15–25", label: "Missed Calls/Week", accent: false },
  { figure: "40%", label: "After-Hours Inquiries", accent: false },
  { figure: "10–17x", label: "Recoverable ROI", accent: true },
];

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="bg-surface-2">
      <div className="max-w-container mx-auto px-10 py-20">
        <div className="text-center max-w-[680px] mx-auto mb-[52px]">
          <p className="text-[13px] text-muted font-medium mb-3.5">Inefficiencies that are completely fixable.</p>
          <h2 className="font-serif font-normal text-4xl md:text-[44px] tracking-[-0.01em] text-navy leading-[1.12]">
            The five ways your med spa is <span className="text-terracotta">leaking revenue</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {PAIN_POINTS.map((point, i) => (
            <div key={i} className="bg-white rounded-lg p-8 shadow-card">
              <div className="flex items-baseline justify-between mb-[22px]">
                <div className="text-[11px] tracking-[0.1em] uppercase text-muted-2 font-semibold">{point.sub}</div>
                <div className="font-serif font-medium text-[26px] tracking-[-0.01em] text-terracotta">{point.stat}</div>
              </div>
              <h3 className="text-lg font-bold text-navy tracking-[-0.01em] mb-3">{point.title}</h3>
              <p className="text-[13.5px] leading-[1.6] text-ink-3">{point.desc}</p>
            </div>
          ))}

          {/* Sound familiar — navy CTA card */}
          <div className="bg-navy rounded-lg p-8 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 border border-navy-line2 rounded-[10px] flex items-center justify-center text-teal-light text-base mb-5">✓</div>
              <h3 className="font-serif font-normal text-[28px] text-white mb-3.5">Sound familiar?</h3>
              <p className="text-sm leading-[1.6] text-onnavy mb-6">
                These aren't just problems — they're <span className="text-teal-light font-semibold">recoverable revenue</span>. Let us show you exactly how much you're losing.
              </p>
            </div>
            <a href="#demo" className="block text-center bg-teal text-white text-[13.5px] font-semibold py-3.5 rounded-sm hover:bg-teal-deep transition">Book a Free Demo →</a>
          </div>
        </div>

        {/* Summary stat strip */}
        <div className="bg-white rounded-lg p-10 shadow-card grid grid-cols-2 lg:grid-cols-4">
          {SUMMARY_STATS.map((s, i) => (
            <div key={s.label} className={`text-center px-6 ${i > 0 ? 'lg:border-l border-hairline' : ''}`}>
              <div className={`font-serif font-medium text-[38px] tracking-[-0.02em] ${s.accent ? 'text-teal' : 'text-navy'}`}>{s.figure}</div>
              <div className="text-[11px] tracking-[0.08em] uppercase text-muted-2 font-semibold mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
