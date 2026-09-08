import React from 'react';

// Visible FAQ, and the single source for the FAQPage JSON-LD. The schema used
// to be a hand-maintained copy of this array inside index.html — two copies of
// the same six answers, with a comment asking whoever edited one to remember
// the other. prerender.mjs now generates the JSON-LD from this export at build
// time, so they cannot drift.

export const FAQS = [
  {
    q: 'What is med spa AI automation?',
    a: "Med spa AI automation is installed infrastructure that runs a practice's front-of-house revenue operations automatically: an AI receptionist that answers every call, missed-call recovery that texts back within seconds, multi-touch appointment reminders, and patient reactivation sequences. It is not advertising and it is not software you rent by the seat.",
  },
  {
    q: 'What does an AI receptionist for a med spa do?',
    a: 'An AI receptionist answers every incoming call 24/7, captures what the caller wants — treatment, preferred time, new or returning — and books the appointment directly into the live calendar, then sends a confirmation. Unlike an answering service it completes the booking rather than taking a message.',
  },
  {
    q: 'How does automation reduce no-shows?',
    a: 'Most no-shows come from a missing reminder, not a flaky patient. Automation sends a fixed cadence of reminders at 72 hours, 24 hours, 3 hours, and 1 hour before the appointment. Every touch is a chance to confirm, reschedule, or cancel in time for the slot to be refilled — and it goes out every time, without anyone remembering to send it.',
  },
  {
    q: 'Does Caliber serve med spas outside South Florida?',
    a: 'Caliber Infrastructure is based in and focused on South Florida — Miami-Dade, Broward, and Palm Beach. The systems themselves are portable, but the specialization and local support are built around the South Florida med spa market.',
  },
  {
    q: 'Do I have to replace my front desk staff?',
    a: 'No. AI automation augments your front desk, it does not replace it. The system handles overflow calls, after-hours inquiries, reminders, and reactivation — the repetitive, easy-to-drop tasks — so your team can focus on the patients in front of them.',
  },
  {
    q: 'Does this work with my existing CRM and booking system?',
    a: 'Yes. The automation is built to connect with the phone, calendar, and CRM you already use rather than forcing a rip-and-replace. The systems integrate around your existing stack.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="bg-surface-2">
      <div className="max-w-narrow mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 lg:mb-12">
          <div>
            <div className="text-[11px] tracking-[0.16em] uppercase text-muted-2 font-semibold mb-3.5">
              Common questions
            </div>
            <h2 className="font-serif font-normal text-[32px] sm:text-4xl md:text-[44px] tracking-[-0.01em] text-navy leading-[1.12]">
              Med spa AI automation, answered
            </h2>
          </div>
          <p className="text-[13px] text-muted sm:text-right sm:pb-2 flex-shrink-0">Six questions we get on every call.</p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((item) => (
            <div key={item.q} className="bg-white rounded-lg p-6 sm:p-8 shadow-row">
              <h3 className="text-[17px] font-bold text-navy tracking-[-0.01em] mb-3">{item.q}</h3>
              <p className="text-[15px] leading-[1.7] text-ink-2">{item.a}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[14px] text-ink-2 mt-10">
          Want the long version?{' '}
          <a href="/guide/med-spa-ai-automation" className="text-teal font-semibold hover:text-teal-deep transition underline underline-offset-4">
            Read the 2026 guide to AI automation for med spas
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default FAQ;
