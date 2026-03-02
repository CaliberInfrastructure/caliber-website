
import React from 'react';

const FounderSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 text-[10px] font-semibold tracking-[0.25em] md:tracking-[0.3em] text-[#C0942C] uppercase bg-[#FBF5E0] border border-[#C0942C]/20 rounded-full">
              A High-Caliber Approach
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#070D1A] tracking-tight mb-6 md:mb-8 leading-[1.1]">
              Enterprise-Grade Infrastructure.<br /><span className="text-[#1B5EE8]">Med Spa Focus.</span>
            </h2>
            <p className="text-[#7A8799] text-base sm:text-lg md:text-xl mb-10 md:mb-12 leading-relaxed font-medium">
              Most "automation agencies" sell you tools and leave you to figure it out. Caliber is different. We apply the same rigorous methodology used to build automation systems for multi-billion dollar enterprises—then configure it specifically for your practice.
            </p>

            <div className="space-y-8 md:space-y-12">
              {[
                { title: "Infrastructure, Not Tools", desc: "We don't hand you software and wish you luck. We build a complete, interconnected system—then hand you the keys to a machine that runs itself.", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
                { title: "Engineered, Not Templated", desc: "Every implementation is configured for your specific workflows, services, and team structure. Same proven architecture, customized execution.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
                { title: "Owned, Not Rented", desc: "Our automation infrastructure belongs to us. No white-label, No outsourcing. We built it, we integrate it, we maintain it.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#070D1A] rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-[#070D1A]/20">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#070D1A] mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-[#7A8799] text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 md:space-y-12">
            {/* WHAT WE'RE NOT BOX */}
            <div className="bg-[#F3F6FC] rounded-2xl p-6 md:p-10 lg:p-12 border border-[#E2E8F4]">
              <h3 className="text-[10px] font-semibold text-[#B0BCCC] uppercase tracking-[0.25em] md:tracking-[0.3em] mb-6 md:mb-10">What we're not</h3>
              <div className="space-y-6 md:space-y-8">
                {[
                  { title: "Not a marketing agency", desc: "promising vague \"growth\"" },
                  { title: "Not a SaaS platform", desc: "requiring your team to learn new software" },
                  { title: "Not a consultant", desc: "selling strategy without implementation" },
                  { title: "Not a call center", desc: "with scripts and hold music" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 md:gap-5">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-[#DC2626]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                    <div>
                      <p className="text-[#070D1A] font-bold text-base md:text-lg leading-tight">{item.title} <span className="text-[#7A8799] font-medium text-sm md:text-base ml-1">{item.desc}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BACKGROUND BOX */}
            <div className="bg-[#070D1A] rounded-2xl p-6 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                <h3 className="text-[10px] font-semibold text-[#7A8799] uppercase tracking-[0.25em] md:tracking-[0.3em] mb-6 md:mb-8">Background</h3>
                <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 md:mb-6">
                  Built by an AI automation engineer with enterprise experience.
                </h4>
                <p className="text-[#7A8799] text-base sm:text-lg leading-relaxed mb-8 md:mb-10 font-medium">
                  The same automation methodology used to optimize operations at multi-billion dollar corporations—applied to the specific revenue challenges of med spas. Enterprise rigor. Vertical focus. Measurable ROI.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-12 pt-8 md:pt-10 border-t border-[#2E3D52]">
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-[#1B5EE8] tracking-tight">South Florida</p>
                    <p className="text-[10px] font-semibold text-[#7A8799] uppercase tracking-widest mt-1">Based & Focused</p>
                  </div>
                  <div className="hidden sm:block w-px h-14 bg-[#2E3D52]"></div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-[#C0942C] tracking-tight">Med Spa Only</p>
                    <p className="text-[10px] font-semibold text-[#7A8799] uppercase tracking-widest mt-1">Vertical Specialization</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1B5EE8]/5 blur-[80px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C0942C]/5 blur-[60px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
