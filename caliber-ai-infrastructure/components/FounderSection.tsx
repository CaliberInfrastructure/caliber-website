
import React from 'react';
import { Diamond } from './icons';

const METHODOLOGY_ITEMS = [
  {
    title: "Infrastructure, Not Tools",
    desc: "We don't hand you software and wish you luck. We build a complete, interconnected system, then hand you the keys to a machine that runs itself.",
  },
  {
    title: "Engineered, Not Templated",
    desc: "Every implementation is configured for your specific workflows, services, and team structure. Same proven architecture, customized execution.",
  },
  {
    // Previously "Owned, Not Rented" / "Our automation infrastructure belongs
    // to us." That claimed ownership of a stack built on GoHighLevel, Retell,
    // n8n and Supabase (GHL being a white-label CRM resold as sub-accounts)
    // and it contradicted the hero, which tells the visitor they own it.
    title: "Yours, Not Rented",
    desc: "You own your accounts, your data, and your patient list, and they stay with you whatever happens between us. Caliber builds and operates the integration layer that connects them, so nothing about your practice is locked inside software you cannot reach.",
  },
];

const FounderSection: React.FC = () => {
  return (
    <section id="about" className="bg-surface-2">
      <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[72px] items-start">
          {/* Left */}
          <div>
            <div className="inline-block text-[10px] tracking-[0.14em] uppercase text-muted font-semibold bg-white border border-hairline-3 px-3.5 py-[7px] rounded-full mb-[26px]">
              A high-caliber approach
            </div>
            <h2 className="font-serif font-normal text-[34px] sm:text-[40px] md:text-[46px] tracking-[-0.01em] text-navy leading-[1.12] mb-6">
              Enterprise-grade infrastructure.<br /><span className="text-teal">Med spa focus.</span>
            </h2>
            <p className="text-[16px] sm:text-[17px] leading-[1.65] text-ink-2 mb-11">
              Most "automation agencies" sell you tools and leave you to figure it out. Caliber is
              different. We apply the same rigorous methodology used to build automation systems
              inside large enterprises, then configure it specifically for your practice.
            </p>

            <div className="flex flex-col gap-8">
              {METHODOLOGY_ITEMS.map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div aria-hidden="true" className="w-12 h-12 bg-navy rounded-md flex items-center justify-center text-teal-light text-lg flex-shrink-0">
                    <Diamond />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-navy tracking-[-0.01em] mb-1.5">{item.title}</h3>
                    <p className="text-[14.5px] leading-[1.6] text-ink-3">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            {/* Background. The founder stays named: selling a $10,000 build on
                trust needs a reachable human, and the name was previously in the
                JSON-LD but nowhere a visitor could read it. The surrounding copy
                is company voice rather than solo-operator voice, so it survives
                the first hire instead of having to be rewritten. */}
            <div className="bg-navy rounded-xl p-7 sm:p-10">
              <h3 className="text-[11px] tracking-[0.16em] uppercase text-onnavy-3 font-semibold mb-[22px]">Who builds it</h3>
              <div className="flex items-center gap-4 mb-5">
                <span aria-hidden="true" className="w-[52px] h-[52px] rounded-full bg-teal-light/[0.14] border border-navy-line3 flex items-center justify-center font-serif font-medium text-[21px] text-teal-light flex-shrink-0">
                  MR
                </span>
                <div>
                  <div className="text-[19px] font-bold text-white tracking-[-0.01em]">Mauro Rousseau</div>
                  <div className="text-[13px] text-onnavy-3">Founder · Caliber Infrastructure</div>
                </div>
              </div>
              <p className="text-[14.5px] sm:text-[15px] leading-[1.65] text-onnavy mb-6">
                Caliber is an engineering team built around a single vertical. We apply automation
                methodology from enterprise operations to the specific revenue leaks of a med spa,
                and we build and operate every system ourselves rather than reselling someone else's
                software. Mauro leads every build, and you get a direct line to the people running
                your infrastructure.
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13.5px] mb-7">
                <a href="mailto:maurorousseau@caliberinfrastructure.com" className="text-teal-light font-semibold hover:text-white transition underline underline-offset-2 break-all">
                  maurorousseau@caliberinfrastructure.com
                </a>
                <a href="tel:+17868537587" className="text-teal-light font-semibold hover:text-white transition underline underline-offset-2">
                  (786) 853-7587
                </a>
              </div>
              <div className="flex flex-wrap gap-8 sm:gap-10 items-center border-t border-navy-line pt-7">
                <div>
                  <div className="font-serif font-medium text-[26px] sm:text-[30px] text-teal-light tracking-[-0.01em]">South Florida</div>
                  <div className="text-[10px] tracking-[0.1em] uppercase text-onnavy-3 font-semibold mt-1">Based &amp; Focused</div>
                </div>
                <div aria-hidden="true" className="hidden sm:block w-px h-12 bg-navy-line"></div>
                <div>
                  <div className="font-serif font-medium text-[26px] sm:text-[30px] text-teal-light tracking-[-0.01em]">Med Spa Only</div>
                  <div className="text-[10px] tracking-[0.1em] uppercase text-onnavy-3 font-semibold mt-1">Vertical Specialization</div>
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
