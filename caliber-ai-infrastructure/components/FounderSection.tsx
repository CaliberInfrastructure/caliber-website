
import React from 'react';

const METHODOLOGY_ITEMS = [
  {
    title: "Infrastructure, Not Tools",
    desc: "We don't hand you software and wish you luck. We build a complete, interconnected system—then hand you the keys to a machine that runs itself.",
  },
  {
    title: "Engineered, Not Templated",
    desc: "Every implementation is configured for your specific workflows, services, and team structure. Same proven architecture, customized execution.",
  },
  {
    title: "Owned, Not Rented",
    desc: "Our automation infrastructure belongs to us. No white-label, no outsourcing. We built it, we integrate it, we maintain it.",
  },
];

const WHAT_WE_NOT = [
  { title: "Not a marketing agency", desc: "promising vague \"growth\"" },
  { title: "Not a SaaS platform", desc: "requiring your team to learn new software" },
  { title: "Not a consultant", desc: "selling strategy without implementation" },
  { title: "Not a call center", desc: "with scripts and hold music" },
];

const FounderSection: React.FC = () => {
  return (
    <section id="about" className="bg-surface-2">
      <div className="max-w-container mx-auto px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[72px] items-start">
          {/* Left */}
          <div>
            <div className="inline-block text-[10px] tracking-[0.14em] uppercase text-muted font-semibold bg-white border border-hairline-3 px-3.5 py-[7px] rounded-full mb-[26px]">
              A high-caliber approach
            </div>
            <h2 className="font-serif font-normal text-[40px] md:text-[46px] tracking-[-0.01em] text-navy leading-[1.12] mb-6">
              Enterprise-grade infrastructure.<br /><span className="text-teal">Med spa focus.</span>
            </h2>
            <p className="text-[17px] leading-[1.65] text-ink-2 mb-11">
              Most "automation agencies" sell you tools and leave you to figure it out. Caliber is different. We apply the same rigorous methodology used to build automation systems for multi-billion dollar enterprises—then configure it specifically for your practice.
            </p>

            <div className="flex flex-col gap-8">
              {METHODOLOGY_ITEMS.map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-navy rounded-md flex items-center justify-center text-teal-light text-lg flex-shrink-0">◆</div>
                  <div>
                    <h3 className="text-xl font-bold text-navy tracking-[-0.01em] mb-1.5">{item.title}</h3>
                    <p className="text-[14.5px] leading-[1.6] text-ink-3">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            {/* What we're not */}
            <div className="bg-white border border-hairline-3 rounded-xl p-10">
              <h3 className="text-[11px] tracking-[0.16em] uppercase text-muted-2 font-semibold mb-7">What we're not</h3>
              <div className="flex flex-col gap-[22px]">
                {WHAT_WE_NOT.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-[30px] h-[30px] bg-terracotta/10 rounded-[9px] flex items-center justify-center text-terracotta text-sm flex-shrink-0 mt-px">✕</span>
                    <p className="text-base leading-[1.45]">
                      <span className="font-bold text-navy">{item.title}</span> <span className="text-muted">{item.desc}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Background */}
            <div className="bg-navy rounded-xl p-10">
              <h3 className="text-[11px] tracking-[0.16em] uppercase text-onnavy-2 font-semibold mb-[22px]">Background</h3>
              <h4 className="font-serif font-normal text-[26px] text-white leading-[1.25] mb-[18px]">
                Built by an AI automation engineer with enterprise experience.
              </h4>
              <p className="text-[15px] leading-[1.65] text-onnavy mb-8">
                The same automation methodology used to optimize operations at multi-billion dollar corporations—applied to the specific revenue challenges of med spas. Enterprise rigor. Vertical focus. Measurable ROI.
              </p>
              <div className="flex flex-wrap gap-10 items-center border-t border-navy-line pt-7">
                <div>
                  <div className="font-serif font-medium text-[30px] text-teal-light tracking-[-0.01em]">South Florida</div>
                  <div className="text-[10px] tracking-[0.1em] uppercase text-onnavy-2 font-semibold mt-1">Based &amp; Focused</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-navy-line"></div>
                <div>
                  <div className="font-serif font-medium text-[30px] text-teal-light tracking-[-0.01em]">Med Spa Only</div>
                  <div className="text-[10px] tracking-[0.1em] uppercase text-onnavy-2 font-semibold mt-1">Vertical Specialization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
