
import React from 'react';

const rows = [
  {
    without: "Missed calls go to voicemail",
    with: "Every missed call gets an instant text-back — automatically"
  },
  {
    without: "Staff manually sends appointment reminders",
    with: "No-shows drop 60–80% with automated multi-touch sequences"
  },
  {
    without: "Leads wait 4–24 hours for a response",
    with: "Response in seconds, 24/7 — even at 11pm on a Sunday"
  },
  {
    without: "Empty chairs from last-minute cancellations",
    with: "Cancellations fill automatically from your waitlist"
  },
  {
    without: "Dormant clients never re-engaged",
    with: "Automated reactivation turns your database into recurring revenue"
  },
  {
    without: "Front desk overwhelmed during busy hours",
    with: "AI handles the volume — your staff focuses on clients in the chair"
  }
];

const BeforeAfter: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
            What Changes When Caliber Goes Live
          </h2>
        </div>

        {/* Desktop: Two-column table layout */}
        <div className="hidden md:block">
          {/* Column Headers */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C0392B]">Without Caliber</span>
            </div>
            <div className="text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1A6B3A]">With Caliber</span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-3">
            {rows.map((row, i) => (
              <div key={i} className="grid grid-cols-2 gap-6">
                <div className="bg-[#FFF5F5] rounded-2xl p-5 border border-red-100">
                  <p className="text-[#C0392B] text-sm font-bold leading-relaxed">{row.without}</p>
                </div>
                <div className="bg-[#F0FFF4] rounded-2xl p-5 border border-green-100">
                  <p className="text-[#1A6B3A] text-sm font-bold leading-relaxed">{row.with}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Stacked layout */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-slate-100">
              <div className="bg-[#FFF5F5] p-4 border-b border-red-100">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C0392B] block mb-1.5">Without Caliber</span>
                <p className="text-[#C0392B] text-sm font-bold leading-relaxed">{row.without}</p>
              </div>
              <div className="bg-[#F0FFF4] p-4">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1A6B3A] block mb-1.5">With Caliber</span>
                <p className="text-[#1A6B3A] text-sm font-bold leading-relaxed">{row.with}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
