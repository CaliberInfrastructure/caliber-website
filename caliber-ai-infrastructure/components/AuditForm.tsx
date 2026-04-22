
import React, { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwvarwoq';
const CALENDAR_BOOKING_URL = 'https://calendar.app.google/QCKrZj6idQuVPf5c9';

const ANALYSIS_CARDS = [
  { title: "Phone Response", desc: "Live walkthrough of the AI receptionist handling your busiest call scenarios", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  { title: "Inquiry Speed", desc: "See how inbound website & social leads get routed in under 60 seconds", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
  { title: "Review Analysis", desc: "How we turn every completed visit into a Google review request, automatically", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
  { title: "Booking Flow", desc: "End-to-end booking, confirmation, and no-show reminder automation live", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
];

const REVENUE_OPTIONS = [
  'Under $50k/mo',
  '$50k – $75k/mo',
  '$75k – $100k/mo',
  '$100k+/mo',
  'Prefer not to say',
];

const PAIN_POINTS = [
  'Missing calls after hours or when staff is busy',
  'Leads going cold — slow follow-up on inquiries',
  'High no-show rate eating into booked revenue',
  'Booking process is manual and time-consuming',
  'No visibility into revenue metrics day-to-day',
  'All of the above',
];

const AuditForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    revenue: '',
    missedCalls: '',
  });
  const [painPoints, setPainPoints] = useState<string[]>([]);

  const togglePain = (value: string) => {
    setPainPoints(prev => prev.includes(value) ? prev.filter(p => p !== value) : [...prev, value]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (painPoints.length === 0) {
      setError('Please select at least one pain point.');
      return;
    }

    setSubmitting(true);

    const payload = {
      _subject: `New Demo Booking — ${form.business}`,
      name: form.name,
      business: form.business,
      phone: form.phone,
      email: form.email,
      monthly_revenue: form.revenue,
      pain_points: painPoints.join(', '),
      missed_calls_per_week: form.missedCalls || 'Not provided',
      submitted_at: new Date().toISOString(),
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Formspree responded ${response.status}`);
      }

      const trimmed = form.name.trim();
      const firstSpace = trimmed.indexOf(' ');
      const firstName = firstSpace === -1 ? trimmed : trimmed.slice(0, firstSpace);
      const lastName = firstSpace === -1 ? '' : trimmed.slice(firstSpace + 1);
      const params = new URLSearchParams({
        firstName,
        lastName,
        name: trimmed,
        email: form.email,
      });
      window.location.href = `${CALENDAR_BOOKING_URL}?${params.toString()}`;
    } catch (err) {
      setSubmitting(false);
      setError('Something went wrong. Please try again or email maurorousseau@caliberinfrastructure.com directly.');
    }
  };

  const input = "w-full p-6 rounded-2xl border-2 border-slate-50 bg-slate-50 font-bold text-slate-900 outline-none focus:border-cyan-500 focus:bg-white transition";
  const label = "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block";

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

          {/* RIGHT FORM */}
          <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">Book a Free Demo</h3>
              <p className="text-slate-500 mb-10 text-sm font-medium">Takes 60 seconds. Pick a time that works for you.</p>

              <div className="space-y-6">
                <div>
                  <label className={label}>Your Name *</label>
                  <input type="text" required placeholder="Jane Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={input} />
                </div>
                <div>
                  <label className={label}>Business Name *</label>
                  <input type="text" required placeholder="Serenity Med Spa" value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} className={input} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={label}>Phone *</label>
                    <input type="tel" required placeholder="(305) 000-0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={input} />
                  </div>
                  <div>
                    <label className={label}>Email *</label>
                    <input type="email" required placeholder="jane@yourmedspa.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={input} />
                  </div>
                </div>
                <div>
                  <label className={label}>Monthly Revenue Range *</label>
                  <select required value={form.revenue} onChange={e => setForm({ ...form, revenue: e.target.value })} className={`${input} appearance-none cursor-pointer`}>
                    <option value="">Select your range...</option>
                    {REVENUE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                <div>
                  <label className={label}>What's costing you the most right now? *</label>
                  <p className="text-slate-400 text-xs font-medium mb-4 -mt-1">Select all that apply</p>
                  <div className="space-y-3">
                    {PAIN_POINTS.map(point => {
                      const checked = painPoints.includes(point);
                      return (
                        <label key={point} className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition ${checked ? 'border-cyan-500 bg-cyan-50' : 'border-slate-50 bg-slate-50 hover:border-slate-200'}`}>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => togglePain(point)}
                            className="mt-1 h-5 w-5 accent-cyan-600 cursor-pointer"
                          />
                          <span className="text-sm font-bold text-slate-900 leading-snug">{point}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className={label}>Avg. Missed Calls / Week <span className="text-slate-300">(Optional)</span></label>
                  <input type="number" placeholder="e.g. 15" value={form.missedCalls} onChange={e => setForm({ ...form, missedCalls: e.target.value })} className={input} />
                  <p className="text-[11px] text-slate-400 mt-2 font-medium">Used to calculate your live ROI during the demo.</p>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border-2 border-red-200 text-red-700 text-sm font-bold rounded-2xl p-4">
                  {error}
                </div>
              )}

              <button type="submit" disabled={submitting} className="w-full py-6 bg-[#0097B2] text-white rounded-2xl text-lg font-black uppercase tracking-widest hover:bg-cyan-700 transition shadow-2xl shadow-cyan-100 mt-8 group disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? 'Sending you to the calendar…' : <>Book a Free Demo <span className="group-hover:translate-x-1 transition inline-block">→</span></>}
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-6 uppercase font-black tracking-widest leading-loose">
                No spam. No obligation. Just a live walkthrough.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuditForm;
