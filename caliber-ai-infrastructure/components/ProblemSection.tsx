
import React from 'react';

const PAIN_POINTS = [
  {
    title: "Missed Calls That Never Convert",
    stat: "15–25 calls",
    sub: "Weekly Loss",
    desc: "Every unanswered call is a potential $400+ treatment walking to your competitor. Most med spas miss 15–25 calls weekly—that's $6,000–$10,000 in lost bookings.",
    icon: (
      <svg className="w-6 h-6 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
    )
  },
  {
    title: "20–30% No-Show Rates",
    stat: "$6,000+",
    sub: "Monthly Cost",
    desc: "Empty chairs don't pay rent. Without intelligent reminder sequences, you're losing provider time and the chance to fill those slots with waitlisted clients.",
    icon: (
      <svg className="w-6 h-6 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
    )
  },
  {
    title: "Zero After-Hours Coverage",
    stat: "40% of leads",
    sub: "After 6PM",
    desc: "40% of inquiries come after 6pm when your staff is gone. These high-intent prospects get voicemail—and they don't leave messages. They call your competitor.",
    icon: (
      <svg className="w-6 h-6 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
    )
  },
  {
    title: "Slow Inquiry Response",
    stat: "4–24 hrs",
    sub: "Avg Response",
    desc: "78% of customers book with whoever responds first. If your average response time is 4–24 hours, you're handing hot leads to faster competitors.",
    icon: (
      <svg className="w-6 h-6 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    )
  },
  {
    title: "Dormant Client Database",
    stat: "30–50%",
    sub: "Inactive 90+ Days",
    desc: "Your existing clients are 5x easier to book than new ones. But 30–50% of your database hasn't been back in 90+ days—because no one's reaching out.",
    icon: (
      <svg className="w-6 h-6 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    )
  }
];

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-4 md:px-5 py-1.5 md:py-2 mb-6 md:mb-8 text-[10px] font-semibold tracking-[0.25em] md:tracking-[0.3em] text-[#DC2626] uppercase bg-[#FEF2F2] border border-[#DC2626]/15 rounded-full">
            The Hidden Revenue Crisis
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#070D1A] tracking-tight mb-4 md:mb-6 px-4">
            5 Ways Your Med Spa Is <span className="text-[#DC2626] italic">Bleeding Revenue</span>
          </h2>
          <p className="text-[#7A8799] font-medium max-w-2xl mx-auto text-base sm:text-lg px-4">
            The average med spa loses <span className="text-[#070D1A] font-bold">$25,000–$35,000 every month</span> to operational inefficiencies that are completely fixable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {PAIN_POINTS.map((point, i) => (
            <div key={i} className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl border border-[#E2E8F4] shadow-sm hover:shadow-lg hover:border-[#1B5EE8]/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FEF2F2] rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-[#DC2626]/10 transition flex-shrink-0">
                  {point.icon}
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-semibold text-[#B0BCCC] uppercase tracking-widest mb-1">{point.sub}</p>
                  <p className="text-xl md:text-2xl font-bold text-[#DC2626] tracking-tight whitespace-nowrap font-data" style={{ fontFamily: 'JetBrains Mono' }}>{point.stat}</p>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#070D1A] mb-3 md:mb-4">{point.title}</h3>
              <p className="text-[#7A8799] text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}

          {/* Sound Familiar Card */}
          <div className="bg-[#0F1E35] p-6 md:p-8 lg:p-10 rounded-2xl shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1B5EE8]/10 rounded-xl flex items-center justify-center mb-6 md:mb-8 border border-[#1B5EE8]/20">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#1B5EE8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight">Sound Familiar?</h3>
              <p className="text-[#7A8799] text-sm leading-relaxed mb-6 md:mb-8">
                These aren't just problems—they're <span className="text-[#C0942C] font-bold">recoverable revenue</span>. Let us show you exactly how much you're losing.
              </p>
            </div>
            <a href="#audit" className="relative z-10 w-full py-4 bg-[#1B5EE8] text-white text-center rounded-xl md:rounded-2xl text-xs font-semibold uppercase tracking-widest hover:bg-[#2E72FF] transition-all duration-300 shadow-lg shadow-[#1B5EE8]/20" style={{ fontFamily: 'Space Grotesk' }}>
              Get Your Free Audit →
            </a>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1B5EE8]/8 blur-[60px] rounded-full"></div>
          </div>
        </div>

        {/* Summary Bar */}
        <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-sm border border-[#E2E8F4]">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 text-center">
              <div className="pb-6 lg:pb-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#E2E8F4]">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#070D1A] mb-2 whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>$25-35k</p>
                <p className="text-[10px] font-semibold text-[#B0BCCC] uppercase tracking-widest leading-relaxed">Avg. Monthly Loss</p>
              </div>
              <div className="pb-6 lg:pb-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#E2E8F4]">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#070D1A] mb-2 whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>15-25</p>
                <p className="text-[10px] font-semibold text-[#B0BCCC] uppercase tracking-widest leading-relaxed">Missed Calls/Week</p>
              </div>
              <div className="lg:pr-6 lg:border-r border-[#E2E8F4]">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#070D1A] mb-2 whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>40%</p>
                <p className="text-[10px] font-semibold text-[#B0BCCC] uppercase tracking-widest leading-relaxed">After-Hours Inquiries</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B5EE8] mb-2 whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>10-17x</p>
                <p className="text-[10px] font-semibold text-[#B0BCCC] uppercase tracking-widest leading-relaxed">Recoverable ROI</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
