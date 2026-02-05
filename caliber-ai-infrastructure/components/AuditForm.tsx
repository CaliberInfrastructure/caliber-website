
import React, { useState } from 'react';

const ANALYSIS_CARDS = [
  { title: "Phone Response", desc: "We call during & after hours to test response", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  { title: "Inquiry Speed", desc: "Website & social inquiry response tracking", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
  { title: "Review Analysis", desc: "Google review volume & sentiment check", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
  { title: "Booking Flow", desc: "End-to-end booking experience assessment", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
];

const GOOGLE_SHEETS_WEBHOOK = 'https://script.google.com/macros/s/AKfycbyjIaP1EgVjmaFahX7qBFNGBX099XkNxDd_gqnRw5mN7W7f5-Upmskb5eYJYp9YWBiNnQ/exec';

const AuditForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    revenueRange: '',
    avgTreatmentPrice: '',
    missedCallsWeek: '',
    noShowRate: '',
    notes: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value);
      });
      await fetch(GOOGLE_SHEETS_WEBHOOK, {
        method: 'POST',
        mode: 'no-cors',
        body: params
      });
      setSubmitted(true);
      setFormData({
        name: '', business: '', phone: '', email: '',
        revenueRange: '', avgTreatmentPrice: '',
        missedCallsWeek: '', noShowRate: '', notes: ''
      });
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="audit" className="py-16 md:py-24 relative overflow-hidden bg-slate-50">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0B1221 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* LEFT CONTENT */}
          <div className="text-slate-900 pt-4 md:pt-8">
            <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 text-[10px] font-black tracking-[0.25em] md:tracking-[0.3em] text-cyan-700 uppercase bg-cyan-50 border border-cyan-100 rounded-full">
              Free Revenue Audit
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 md:mb-8 leading-[1.05]">
              We'll Show You <span className="text-[#0097B2]">Exactly</span> How Much You're Losing
            </h2>
            <p className="text-slate-600 text-base sm:text-lg md:text-xl mb-10 md:mb-16 leading-relaxed font-medium">
              No sales pitch. No obligation. Just a clear, quantified report showing where revenue is leaking from your med spa—and how to capture it.
            </p>

            <div className="mb-8 md:mb-12">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] md:tracking-[0.3em] mb-6 md:mb-10">What we'll analyze</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {ANALYSIS_CARDS.map((card, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl md:rounded-2xl lg:rounded-[2rem] p-4 md:p-6 hover:bg-slate-50 hover:border-cyan-200 transition group shadow-sm">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-50 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-cyan-200">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={card.icon}></path></svg>
                    </div>
                    <h4 className="text-base md:text-lg font-black text-slate-900 mb-1 tracking-tight">{card.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cyan-50 border-2 border-cyan-200 p-6 md:p-8 rounded-2xl md:rounded-[2.5rem]">
              <p className="text-[10px] font-black text-cyan-700 uppercase tracking-[0.25em] md:tracking-[0.3em] mb-3 md:mb-4">Deliverable</p>
              <p className="text-slate-900 text-base md:text-lg font-bold leading-relaxed">
                Professional 1-2 page report with quantified monthly revenue loss + specific recommendations.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-6 md:p-10 lg:p-16 rounded-3xl md:rounded-[4rem] shadow-2xl relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-12 md:py-20 animate-in zoom-in duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                  <span className="text-green-600 text-3xl md:text-4xl font-black">✓</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 md:mb-4 tracking-tighter">Audit Requested!</h4>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed px-4">We'll reach out within 24 hours to begin your analysis.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 md:mt-12 text-cyan-600 font-black hover:underline text-sm uppercase tracking-widest">
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-3 md:mb-4">Request Your Free Audit</h3>
                <p className="text-slate-500 mb-6 md:mb-10 text-sm font-medium">Takes 30 seconds. We'll reach out within 24 hours.</p>

                <div className="space-y-5 md:space-y-6">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 md:mb-3 block">Your Name *</label>
                    <input type="text" required value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className="w-full p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-slate-50 bg-slate-50 font-bold text-slate-900 outline-none focus:border-cyan-500 focus:bg-white transition text-base" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 md:mb-3 block">Business Name *</label>
                    <input type="text" required value={formData.business} onChange={(e) => handleChange('business', e.target.value)} className="w-full p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-slate-50 bg-slate-50 font-bold text-slate-900 outline-none focus:border-cyan-500 focus:bg-white transition text-base" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 md:mb-3 block">Phone *</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} className="w-full p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-slate-50 bg-slate-50 font-bold text-slate-900 outline-none focus:border-cyan-500 focus:bg-white transition text-base" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 md:mb-3 block">Email *</label>
                      <input type="email" required value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className="w-full p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-slate-50 bg-slate-50 font-bold text-slate-900 outline-none focus:border-cyan-500 focus:bg-white transition text-base" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 md:mb-3 block">Monthly Revenue Range *</label>
                    <select required value={formData.revenueRange} onChange={(e) => handleChange('revenueRange', e.target.value)} className="w-full p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-slate-50 bg-slate-50 font-bold text-slate-900 outline-none focus:border-cyan-500 focus:bg-white transition appearance-none cursor-pointer text-base">
                      <option value="">Select range...</option>
                      <option>$50k - $100k</option>
                      <option>$100k - $175k</option>
                      <option>$175k - $350k</option>
                      <option>$350k+</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 md:mb-3 block">Avg. Treatment Price <span className="text-slate-300">(Optional)</span></label>
                      <div className="relative">
                        <span className="absolute left-4 md:left-5 top-4 md:top-6 text-slate-400 font-bold">$</span>
                        <input type="text" inputMode="numeric" pattern="[0-9]*" placeholder="450" value={formData.avgTreatmentPrice} onChange={(e) => handleChange('avgTreatmentPrice', e.target.value)} className="w-full p-4 md:p-6 pl-8 md:pl-10 rounded-xl md:rounded-2xl border-2 border-slate-50 bg-slate-50 font-bold text-slate-900 outline-none focus:border-cyan-500 focus:bg-white transition text-base" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 md:mb-3 block">Missed Calls / Week <span className="text-slate-300">(Optional)</span></label>
                      <input type="text" inputMode="numeric" pattern="[0-9]*" placeholder="15" value={formData.missedCallsWeek} onChange={(e) => handleChange('missedCallsWeek', e.target.value)} className="w-full p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-slate-50 bg-slate-50 font-bold text-slate-900 outline-none focus:border-cyan-500 focus:bg-white transition text-base" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 md:mb-3 block">No-Show Rate <span className="text-slate-300">(Optional)</span></label>
                      <div className="relative">
                        <input type="text" inputMode="numeric" pattern="[0-9]*" placeholder="20" value={formData.noShowRate} onChange={(e) => handleChange('noShowRate', e.target.value)} className="w-full p-4 md:p-6 pr-8 md:pr-10 rounded-xl md:rounded-2xl border-2 border-slate-50 bg-slate-50 font-bold text-slate-900 outline-none focus:border-cyan-500 focus:bg-white transition text-base" />
                        <span className="absolute right-4 md:right-5 top-4 md:top-6 text-slate-400 font-bold">%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 md:mb-3 block">Anything else we should know? <span className="text-slate-300">(Optional)</span></label>
                    <textarea rows={4} placeholder="e.g., biggest pain points, specific challenges..." value={formData.notes} onChange={(e) => handleChange('notes', e.target.value)} className="w-full p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-slate-50 bg-slate-50 font-bold text-slate-900 outline-none focus:border-cyan-500 focus:bg-white transition resize-none text-base"></textarea>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl md:rounded-2xl p-4 text-center">
                    <p className="text-red-600 font-bold text-sm">Something went wrong. Please try again or email us directly.</p>
                  </div>
                )}

                <button type="submit" disabled={submitting} className="w-full py-5 md:py-6 bg-[#0097B2] text-white rounded-xl md:rounded-2xl text-base md:text-lg font-black uppercase tracking-widest hover:bg-cyan-700 transition shadow-2xl shadow-cyan-100 mt-6 md:mt-8 group disabled:opacity-60 disabled:cursor-not-allowed">
                  {submitting ? 'Submitting...' : <>Get My Free Audit <span className="group-hover:translate-x-1 transition inline-block">→</span></>}
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-6 uppercase font-black tracking-widest leading-loose">
                  No spam. No obligation. Just insights.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuditForm;
