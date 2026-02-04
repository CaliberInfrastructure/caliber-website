
import React from 'react';

const STEPS = [
  {
    number: "01",
    title: "Free Revenue Audit",
    description: "We mystery-call your practice, analyze your response times, review flow, and no-show patterns. You get a quantified report showing exactly where revenue is leaking.",
    detail: "48-hour turnaround",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
  },
  {
    number: "02",
    title: "Custom Infrastructure Build",
    description: "We engineer your AI systems from scratch—voice reception, lead qualification, reminder sequences, reactivation—configured to your services, team, and workflows.",
    detail: "Built to your practice",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  },
  {
    number: "03",
    title: "Go Live & Recover Revenue",
    description: "Your infrastructure goes live and starts capturing revenue from day one. Missed calls get answered, no-shows get recovered, dormant clients get reactivated.",
    detail: "Revenue from day one",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0B1221 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-cyan-700 uppercase bg-cyan-50 border border-cyan-100 rounded-full">
            The Process
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            From Leaking to Capturing<br />in <span className="text-[#0097B2]">Three Steps</span>
          </h2>
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            No lengthy onboarding. No learning new software. We handle the build—you keep seeing patients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-200 hover:border-cyan-300 hover:bg-white transition h-full flex flex-col shadow-sm hover:shadow-lg">
                {/* Step Number + Icon */}
                <div className="flex items-center justify-between mb-10">
                  <span className="text-7xl font-black text-slate-900/[0.06] tracking-tighter select-none group-hover:text-cyan-500/10 transition">{step.number}</span>
                  <div className="w-14 h-14 bg-cyan-50 rounded-2xl border border-cyan-200 flex items-center justify-center group-hover:bg-cyan-100 transition">
                    <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon}></path>
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{step.description}</p>

                {/* Bottom Tag */}
                <div className="pt-6 border-t border-slate-200">
                  <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">{step.detail}</span>
                </div>
              </div>

              {/* Connector Arrow (between cards, hidden on last) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border-2 border-cyan-200 rounded-full items-center justify-center shadow-md">
                  <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a href="#audit" className="inline-flex items-center gap-3 bg-[#0097B2] text-white px-10 py-5 rounded-2xl text-lg font-black uppercase tracking-widest hover:bg-cyan-600 transition shadow-2xl shadow-cyan-200/50 group">
            Start With Your Free Audit <span className="group-hover:translate-x-1 transition inline-block">→</span>
          </a>
        </div>
      </div>

      {/* Accent blobs */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-100/30 blur-[100px] rounded-full"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-100/30 blur-[80px] rounded-full"></div>
    </section>
  );
};

export default HowItWorks;
