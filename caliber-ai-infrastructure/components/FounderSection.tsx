
import React from 'react';

const FounderSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-24">
            <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase bg-slate-100 border border-slate-200 rounded-full">
              A High-Caliber Approach
            </div>
            <h2 className="text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-[1.1]">
              Enterprise-Grade Infrastructure.<br /><span className="text-[#0097B2]">Med Spa Focus.</span>
            </h2>
            <p className="text-slate-500 text-xl mb-12 leading-relaxed font-medium">
              Most "automation agencies" sell you tools and leave you to figure it out. Caliber is different. We apply the same rigorous methodology used to build automation systems for multi-billion dollar enterprises—then configure it specifically for your practice.
            </p>

            <div className="space-y-12">
              {[
                { title: "Infrastructure, Not Tools", desc: "We don't hand you software and wish you luck. We build a complete, interconnected system—then hand you the keys to a machine that runs itself.", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
                { title: "Engineered, Not Templated", desc: "Every implementation is configured for your specific workflows, services, and team structure. Same proven architecture, customized execution.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
                { title: "Owned, Not Rented", desc: "Our automation infrastructure belongs to us. No white-label, No outsourcing. We built it, we integrate it, we maintain it.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-slate-200">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.icon}></path></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {/* WHAT WE'RE NOT BOX */}
            <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">What we're not</h3>
              <div className="space-y-8">
                {[
                  { title: "Not a marketing agency", desc: "promising vague \"growth\"" },
                  { title: "Not a SaaS platform", desc: "requiring your team to learn new software" },
                  { title: "Not a consultant", desc: "selling strategy without implementation" },
                  { title: "Not a call center", desc: "with scripts and hold music" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                    <div>
                      <p className="text-slate-900 font-black text-lg">{item.title} <span className="text-slate-500 font-medium text-base ml-1">{item.desc}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BACKGROUND BOX */}
            <div className="bg-slate-950 rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Background</h3>
                <h4 className="text-3xl font-black text-white tracking-tight mb-6">
                  Built by an AI automation engineer with enterprise experience.
                </h4>
                <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                  The same automation methodology used to optimize operations at multi-billion dollar corporations—applied to the specific revenue challenges of med spas. Enterprise rigor. Vertical focus. Measurable ROI.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12 pt-10 border-t border-slate-800">
                  <div>
                    <p className="text-4xl font-black text-cyan-400 tracking-tighter">South Florida</p>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Based & Focused</p>
                  </div>
                  <div className="hidden sm:block w-px h-14 bg-slate-800"></div>
                  <div>
                    <p className="text-4xl font-black text-cyan-400 tracking-tighter">Med Spa Only</p>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Vertical Specialization</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
