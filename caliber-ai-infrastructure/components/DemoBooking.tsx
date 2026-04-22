
import React from 'react';

const CALENDAR_BOOKING_URL = 'https://calendar.app.google/QCKrZj6idQuVPf5c9';

const ANALYSIS_CARDS = [
  { title: "Phone Response", desc: "Live walkthrough of the AI receptionist handling your busiest call scenarios", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  { title: "Inquiry Speed", desc: "See how inbound website & social leads get routed in under 60 seconds", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
  { title: "Review Analysis", desc: "How we turn every completed visit into a Google review request, automatically", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
  { title: "Booking Flow", desc: "End-to-end booking, confirmation, and no-show reminder automation live", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
];

const WHAT_YOU_GET = [
  '30-minute live walkthrough — not a pitch deck',
  'Live ROI estimate built against your actual revenue numbers',
  'Straight answer on which tier fits (or if we\'re not a fit)',
  'No credit card, no obligation, no follow-up spam',
];

const DemoBooking: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-[#0B1221] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <div className="text-white pt-8">
            <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              Free Demo
            </div>
            <h2 className="text-6xl font-black tracking-tighter mb-8 leading-[1.05]">
              See the Full System <span className="text-cyan-400">Live</span>, Built to Your Numbers
            </h2>
            <p className="text-slate-400 text-xl mb-16 leading-relaxed font-medium">
              30-minute walkthrough of the complete Caliber infrastructure — AI receptionist, booking engine, no-show recovery, and revenue dashboard — running against your real revenue numbers. No pitch deck. No obligation.
            </p>

            <div className="mb-12">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-10">What we'll walk through</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ANALYSIS_CARDS.map((card, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 hover:bg-white/10 transition group">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={card.icon}></path></svg>
                    </div>
                    <h4 className="text-lg font-black text-white mb-1 tracking-tight">{card.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#151D2F] border-2 border-[#0097B2]/30 p-8 rounded-[2.5rem]">
              <p className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4">Deliverable</p>
              <p className="text-white text-lg font-bold leading-relaxed">
                A live walkthrough of the full automation system, customized to your revenue numbers.
              </p>
            </div>
          </div>

          {/* RIGHT BOOKING CARD */}
          <div className="bg-white p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden lg:sticky lg:top-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-cyan-700 uppercase bg-cyan-50 border border-cyan-100 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              2 Q2 Spots Remaining
            </div>

            <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-4 leading-[1.05]">
              Book Your Demo
            </h3>
            <p className="text-slate-500 mb-10 text-base font-medium leading-relaxed">
              Pick a time that works. The booking form asks a few qualifying questions so we can tailor the walkthrough to your spa.
            </p>

            <ul className="space-y-4 mb-10">
              {WHAT_YOU_GET.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-50 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-slate-700 text-sm font-bold leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={CALENDAR_BOOKING_URL}
              className="w-full flex items-center justify-center py-6 bg-[#0097B2] text-white rounded-2xl text-lg font-black uppercase tracking-widest hover:bg-cyan-700 transition shadow-2xl shadow-cyan-100 group"
            >
              Book a Free Demo <span className="ml-2 group-hover:translate-x-1 transition inline-block">→</span>
            </a>

            <div className="flex items-center justify-center gap-6 mt-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                60 Seconds
              </span>
              <span className="text-slate-200">•</span>
              <span className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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
