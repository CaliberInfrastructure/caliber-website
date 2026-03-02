
import React from 'react';

const categories = [
  {
    label: "Missed Calls",
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 3.5l-5 5m0-4h4v4"></path></svg>),
    without: "Voicemail. They call your competitor.",
    stabilization: "Text fires back. Lead stays yours.",
    acceleration: "AI filters buyers from tire-kickers.",
    fullAutomation: "AI answers, qualifies, books. 24/7."
  },
  {
    label: "No-Shows",
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>),
    without: "20–30% of chairs sit empty.",
    stabilization: "No-shows cut in half. Hands-free.",
    acceleration: "Cancellations auto-fill from waitlist.",
    fullAutomation: "Every empty chair gets filled."
  },
  {
    label: "Lead Response",
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>),
    without: "4–24 hrs late. They booked elsewhere.",
    stabilization: "Leads self-book. No staff needed.",
    acceleration: "Staff only talks to ready buyers.",
    fullAutomation: "AI closes while you treat."
  },
  {
    label: "Dormant Clients",
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>),
    without: "Past clients gone. Revenue sitting idle.",
    stabilization: "—",
    acceleration: "Dormant clients start rebooking. Automatically.",
    fullAutomation: "Database runs as a revenue engine."
  },
  {
    label: "Reviews",
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>),
    without: "Nobody asks. Reputation stalls.",
    stabilization: "Requests go out. Rating climbs.",
    acceleration: "5-star reviews flow in consistently.",
    fullAutomation: "Reputation compounds. No effort required."
  },
  {
    label: "Staff Load",
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>),
    without: "Staff overwhelmed. Clients get ignored.",
    stabilization: "8–15 hrs of admin gone.",
    acceleration: "AI pre-sorts. Staff just closes.",
    fullAutomation: "Full front desk. No $45k salary."
  }
];

const tiers = [
  { key: "stabilization", name: "Stabilization", price: "$997", tagline: "Stop the bleeding", recovery: "$7,100+", roi: "7–9x" },
  { key: "acceleration", name: "Acceleration", price: "$1,300", tagline: "Grow without hiring", recovery: "$16,100+", roi: "10–12x" },
  { key: "fullAutomation", name: "Full Automation", price: "$2,000", tagline: "Total AI infrastructure", recovery: "$26,300+", roi: "10–17x", featured: true }
];

const BeforeAfter: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-white to-[#F3F6FC]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E8EFFF]/40 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-semibold tracking-[0.3em] text-[#1B5EE8] uppercase bg-[#E8EFFF] border border-[#1B5EE8]/15 rounded-full">
            Infrastructure Comparison
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#070D1A] tracking-tight mb-4 md:mb-6">
            What Changes When<br className="hidden sm:block" /> Caliber Goes Live
          </h2>
          <p className="text-[#7A8799] text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Every tier closes a specific revenue leak. Here's what stops bleeding at each level.
          </p>
        </div>

        {/* DESKTOP CHART (lg+) */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-2xl border border-[#E2E8F4] shadow-xl shadow-[#E2E8F4]/50 overflow-hidden">
            <div className="grid grid-cols-[260px_1fr_1fr_1fr_1fr] border-b border-[#E2E8F4]">
              <div className="p-6 bg-[#F3F6FC]/80 border-r border-[#E2E8F4]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B0BCCC]">Operational Area</p>
              </div>
              <div className="p-6 bg-[#FEF2F2]/50 border-r border-[#E2E8F4] text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DC2626]/10 rounded-full mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#DC2626]"></div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DC2626]">Today</span>
                </div>
                <p className="text-[#DC2626]/70 text-xs font-bold">Without Caliber</p>
                <p className="text-[#DC2626]/40 text-[10px] font-medium mt-0.5">What it costs you today</p>
              </div>
              {tiers.map((tier, idx) => (
                <div key={tier.key} className={`p-6 text-center relative ${tier.featured ? 'bg-[#0F1E35]' : 'bg-[#F3F6FC]/50'} ${idx < tiers.length - 1 && !tier.featured ? 'border-r border-[#E2E8F4]' : ''}`}>
                  {tier.featured && <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #1B5EE8, #C0942C)' }}></div>}
                  <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] mb-1 ${tier.featured ? 'text-[#C0942C]' : 'text-[#1B5EE8]'}`}>{tier.tagline}</p>
                  <p className={`text-lg font-bold tracking-tight ${tier.featured ? 'text-white' : 'text-[#070D1A]'}`}>{tier.name}</p>
                  <p className={`text-xs font-medium mt-1 ${tier.featured ? 'text-[#7A8799]' : 'text-[#7A8799]'}`} style={{ fontFamily: 'JetBrains Mono' }}>{tier.price}/mo</p>
                </div>
              ))}
            </div>

            {categories.map((cat, rowIdx) => (
              <div key={rowIdx} className={`grid grid-cols-[260px_1fr_1fr_1fr_1fr] ${rowIdx < categories.length - 1 ? 'border-b border-[#E2E8F4]/80' : ''} group hover:bg-[#F3F6FC]/50 transition-colors duration-200`}>
                <div className="p-4 border-r border-[#E2E8F4] flex items-start gap-3 bg-[#F3F6FC]/40">
                  <div className="w-9 h-9 rounded-xl bg-[#E2E8F4] flex items-center justify-center text-[#7A8799] flex-shrink-0 mt-0.5 group-hover:bg-[#E8EFFF] group-hover:text-[#1B5EE8] transition-colors">{cat.icon}</div>
                  <span className="text-sm font-bold text-[#070D1A] tracking-tight leading-snug pt-1.5">{cat.label}</span>
                </div>
                <div className="p-4 border-r border-[#E2E8F4] bg-[#FEF2F2]/20 flex items-start">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                    <p className="text-xs text-[#DC2626]/70 font-medium leading-relaxed">{cat.without}</p>
                  </div>
                </div>
                {(['stabilization', 'acceleration', 'fullAutomation'] as const).map((tierKey, tierIdx) => {
                  const val = cat[tierKey];
                  const tier = tiers[tierIdx];
                  const isUnavailable = val === "—";
                  return (
                    <div key={tierKey} className={`p-4 flex items-start ${tier.featured ? 'bg-[#0F1E35]/[0.03]' : ''} ${tierIdx < 2 && !tier.featured ? 'border-r border-[#E2E8F4]/80' : ''}`}>
                      {isUnavailable ? (
                        <div className="flex items-center gap-2 w-full justify-center pt-1">
                          <div className="w-5 h-5 rounded-full bg-[#E2E8F4] flex items-center justify-center"><svg className="w-3 h-3 text-[#B0BCCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg></div>
                          <span className="text-xs text-[#B0BCCC] font-medium">Not included</span>
                        </div>
                      ) : (
                        <div className="flex items-start gap-2.5">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${tier.featured ? 'bg-[#E8EFFF] ring-2 ring-[#1B5EE8]/20' : 'bg-[#059669]/10'}`}>
                            <svg className={`w-3 h-3 ${tier.featured ? 'text-[#1B5EE8]' : 'text-[#059669]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                          </div>
                          <p className={`text-xs font-medium leading-relaxed ${tier.featured ? 'text-[#070D1A] font-bold' : 'text-[#2E3D52]'}`}>{val}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}

            <div className="grid grid-cols-[260px_1fr_1fr_1fr_1fr] border-t-2 border-[#E2E8F4] bg-[#F3F6FC]/60">
              <div className="p-5 border-r border-[#E2E8F4]"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B0BCCC]">Monthly Impact</p></div>
              <div className="p-5 border-r border-[#E2E8F4] text-center bg-[#FEF2F2]/30">
                <p className="text-[#DC2626] font-bold text-lg tracking-tight" style={{ fontFamily: 'JetBrains Mono' }}>–$10–30k</p>
                <p className="text-[#DC2626]/60 text-[10px] font-semibold uppercase tracking-wider mt-1">Revenue Lost</p>
              </div>
              {tiers.map((tier, idx) => (
                <div key={tier.key} className={`p-5 text-center ${tier.featured ? 'bg-[#0F1E35]' : ''} ${idx < tiers.length - 1 && !tier.featured ? 'border-r border-[#E2E8F4]' : ''}`}>
                  <p className={`font-bold text-lg tracking-tight ${tier.featured ? 'text-[#C0942C]' : 'text-[#070D1A]'}`} style={{ fontFamily: 'JetBrains Mono' }}>{tier.recovery}</p>
                  <p className={`text-[10px] font-medium uppercase tracking-wider mt-1 ${tier.featured ? 'text-[#C0942C]/60' : 'text-[#B0BCCC]'}`}>Recovered /mo</p>
                  <p className={`text-xs font-bold mt-2 ${tier.featured ? 'text-white' : 'text-[#1B5EE8]'}`}>{tier.roi} ROI</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TABLET CHART (md–lg) */}
        <div className="hidden md:block lg:hidden">
          <div className="bg-white rounded-2xl border border-[#E2E8F4] shadow-xl overflow-hidden">
            <div className="grid grid-cols-4 border-b border-[#E2E8F4]">
              <div className="p-4 bg-[#F3F6FC]/80 border-r border-[#E2E8F4]"><p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B0BCCC]">Area</p></div>
              <div className="p-4 bg-[#F3F6FC]/50 border-r border-[#E2E8F4] text-center"><p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#1B5EE8] mb-0.5">Stabilization</p><p className="text-xs font-bold text-[#070D1A]">$997/mo</p></div>
              <div className="p-4 bg-[#F3F6FC]/50 border-r border-[#E2E8F4] text-center"><p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#1B5EE8] mb-0.5">Acceleration</p><p className="text-xs font-bold text-[#070D1A]">$1,300/mo</p></div>
              <div className="p-4 bg-[#0F1E35] text-center relative"><div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #1B5EE8, #C0942C)' }}></div><p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#C0942C] mb-0.5">Full Automation</p><p className="text-xs font-bold text-white">$2,000/mo</p></div>
            </div>
            <div className="bg-[#FEF2F2]/50 border-b border-[#DC2626]/10 px-4 py-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#DC2626]"></div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#DC2626]">Without Caliber: $10–30k/mo in leaked revenue</p>
            </div>
            {categories.map((cat, rowIdx) => (
              <div key={rowIdx} className={`${rowIdx < categories.length - 1 ? 'border-b border-[#E2E8F4]/80' : ''}`}>
                <div className="px-4 pt-4 pb-2 flex items-center gap-2 bg-[#F3F6FC]/30">
                  <div className="w-7 h-7 rounded-lg bg-[#E2E8F4] flex items-center justify-center text-[#7A8799]">{cat.icon}</div>
                  <span className="text-xs font-bold text-[#070D1A] tracking-tight">{cat.label}</span>
                </div>
                <div className="grid grid-cols-4 px-0">
                  <div className="p-3 border-r border-[#E2E8F4] bg-[#FEF2F2]/15">
                    <div className="flex items-start gap-1.5">
                      <svg className="w-3 h-3 text-[#DC2626] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                      <p className="text-[10px] text-[#DC2626]/60 font-medium leading-snug">{cat.without}</p>
                    </div>
                  </div>
                  {(['stabilization', 'acceleration', 'fullAutomation'] as const).map((tierKey, tierIdx) => {
                    const val = cat[tierKey];
                    const tier = tiers[tierIdx];
                    const isUnavailable = val === "—";
                    return (
                      <div key={tierKey} className={`p-3 ${tierIdx < 2 ? 'border-r border-[#E2E8F4]/80' : ''} ${tier.featured ? 'bg-[#0F1E35]/[0.02]' : ''}`}>
                        {isUnavailable ? (<div className="flex items-center justify-center pt-1"><span className="text-[10px] text-[#B0BCCC] font-medium">—</span></div>) : (
                          <div className="flex items-start gap-1.5">
                            <svg className={`w-3 h-3 flex-shrink-0 mt-0.5 ${tier.featured ? 'text-[#1B5EE8]' : 'text-[#059669]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                            <p className={`text-[10px] font-medium leading-snug ${tier.featured ? 'text-[#070D1A] font-bold' : 'text-[#2E3D52]'}`}>{val}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-4 border-t-2 border-[#E2E8F4] bg-[#F3F6FC]/60">
              <div className="p-4 border-r border-[#E2E8F4]"><p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#B0BCCC]">Recovery</p></div>
              {tiers.map((tier, idx) => (
                <div key={tier.key} className={`p-4 text-center ${tier.featured ? 'bg-[#0F1E35]' : ''} ${idx < 2 && !tier.featured ? 'border-r border-[#E2E8F4]' : ''}`}>
                  <p className={`font-bold text-sm tracking-tight ${tier.featured ? 'text-[#C0942C]' : 'text-[#070D1A]'}`}>{tier.recovery}</p>
                  <p className={`text-[9px] font-medium mt-0.5 ${tier.featured ? 'text-white' : 'text-[#1B5EE8]'}`}>{tier.roi} ROI</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE CARDS (below md) */}
        <div className="md:hidden space-y-4">
          <div className="bg-[#FEF2F2] border border-[#DC2626]/20 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DC2626]/60 to-[#DC2626]"></div>
            <div className="flex items-center gap-2 mb-3"><div className="w-2 h-2 rounded-full bg-[#DC2626]"></div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DC2626]">Without Caliber</p></div>
            <p className="text-[#DC2626] font-bold text-xl tracking-tight mb-1" style={{ fontFamily: 'JetBrains Mono' }}>–$10–30k/mo</p>
            <p className="text-[#DC2626]/60 text-xs font-medium">In leaked revenue from missed calls, no-shows, and slow follow-up</p>
          </div>

          {tiers.map((tier) => (
            <div key={tier.key} className={`rounded-2xl overflow-hidden border relative ${tier.featured ? 'bg-[#0F1E35] border-[#2E3D52] shadow-2xl' : 'bg-white border-[#E2E8F4] shadow-sm'}`}>
              {tier.featured && <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #1B5EE8, #C0942C)' }}></div>}
              <div className={`p-5 pb-4 ${tier.featured ? '' : 'border-b border-[#E2E8F4]'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className={`text-[9px] font-semibold uppercase tracking-[0.2em] mb-1 ${tier.featured ? 'text-[#C0942C]' : 'text-[#1B5EE8]'}`}>{tier.tagline}</p>
                    <h3 className={`text-xl font-bold tracking-tight ${tier.featured ? 'text-white' : 'text-[#070D1A]'}`}>{tier.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-bold tracking-tight ${tier.featured ? 'text-white' : 'text-[#070D1A]'}`} style={{ fontFamily: 'JetBrains Mono' }}>{tier.price}<span className={`text-xs font-medium ${tier.featured ? 'text-[#7A8799]' : 'text-[#B0BCCC]'}`}>/mo</span></p>
                  </div>
                </div>
                {tier.featured ? (
                  <div className="bg-[#1B5EE8]/10 border border-[#1B5EE8]/20 rounded-xl px-3 py-2 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[#C0942C] text-[10px] font-semibold uppercase tracking-wider">Recovery</span>
                      <span className="text-[#C0942C] font-bold text-sm" style={{ fontFamily: 'JetBrains Mono' }}>{tier.recovery}/mo</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[#7A8799] text-[10px] font-medium">Recovery: {tier.recovery}/mo</span>
                    <span className="text-[#1B5EE8] text-[10px] font-bold">{tier.roi} ROI</span>
                  </div>
                )}
              </div>
              <div className={`${tier.featured ? 'border-t border-[#2E3D52]/50' : ''}`}>
                {categories.map((cat, catIdx) => {
                  const val = cat[tier.key as 'stabilization' | 'acceleration' | 'fullAutomation'];
                  const isUnavailable = val === "—";
                  return (
                    <div key={catIdx} className={`flex items-start gap-3 px-5 py-3.5 ${catIdx < categories.length - 1 ? tier.featured ? 'border-b border-[#2E3D52]/30' : 'border-b border-[#F3F6FC]' : ''}`}>
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${tier.featured ? isUnavailable ? 'bg-[#142139]' : 'bg-[#1B5EE8]/10' : isUnavailable ? 'bg-[#F3F6FC]' : 'bg-[#059669]/10'}`}>
                        {isUnavailable ? (<svg className={`w-3.5 h-3.5 ${tier.featured ? 'text-[#2E3D52]' : 'text-[#B0BCCC]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>) : (<span className={`${tier.featured ? 'text-[#1B5EE8]' : 'text-[#059669]'}`}>{cat.icon}</span>)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] mb-0.5 ${tier.featured ? isUnavailable ? 'text-[#2E3D52]' : 'text-[#7A8799]' : isUnavailable ? 'text-[#B0BCCC]' : 'text-[#B0BCCC]'}`}>{cat.label}</p>
                        <p className={`text-xs font-medium leading-snug ${isUnavailable ? tier.featured ? 'text-[#2E3D52]' : 'text-[#B0BCCC]' : tier.featured ? 'text-[#E2E8F4]' : 'text-[#2E3D52]'}`}>{isUnavailable ? 'Not included in this tier' : val}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={`px-5 py-4 ${tier.featured ? 'border-t border-[#2E3D52]/50 bg-white/[0.03]' : 'border-t border-[#E2E8F4] bg-[#F3F6FC]/50'}`}>
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-bold ${tier.featured ? 'text-white' : 'text-[#1B5EE8]'}`}>{tier.roi} ROI</span>
                  <a href="#audit" className={`text-xs font-bold uppercase tracking-wider group ${tier.featured ? 'text-[#C0942C]' : 'text-[#070D1A]'}`} style={{ fontFamily: 'Space Grotesk' }}>Get Audit <span className="group-hover:translate-x-1 transition inline-block">→</span></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-[#B0BCCC] text-sm font-medium">
            Not sure which tier fits? <a href="#audit" className="text-[#1B5EE8] font-bold underline">Get a free audit</a> and we'll recommend the right infrastructure for your practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
