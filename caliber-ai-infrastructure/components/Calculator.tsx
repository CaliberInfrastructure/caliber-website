
import React, { useState, useMemo } from 'react';
import { calculateROI, MIN_AVG_TICKET, LEAKAGE_CEILING_PCT } from '../services/roiCalculator';
import { RevenueCalculation } from '../types';
import { CALCULATOR_DEFAULTS, ROI_FLOOR_LABEL } from '../constants';
import { ArrowRight, Chevron } from './icons';

const METHODOLOGY = [
  {
    n: 1,
    accent: 'bg-terracotta-deep',
    title: 'Missed Call Leakage',
    formula: '(Weekly Missed Calls × 4 weeks) × 50% booking intent × Avg Ticket',
    body: (
      <>We assume <strong className="text-navy font-bold">50% of missed calls</strong> represent genuine booking intent. Monthly missed calls are multiplied by your average treatment price.</>
    ),
  },
  {
    n: 2,
    accent: 'bg-terracotta-deep',
    title: 'No-Show Leakage',
    formula: '((Monthly Revenue ÷ Avg Ticket) ÷ (1 − No-Show Rate)) × No-Show Rate × Avg Ticket × 50%',
    body: (
      <>
        Your monthly revenue is <strong className="text-navy font-bold">realized</strong> revenue, so
        dividing it by your average ticket counts only the appointments that actually happened,
        since a no-show bills nothing. Dividing by <strong className="text-navy font-bold">(1 − your no-show rate)</strong> gets
        back to appointments <em>booked</em>, which is the population no-shows come out of. The
        <strong className="text-navy font-bold"> 50% factor</strong> then accounts for partial recovery through
        rebooks and last-minute fills that already happen organically.
      </>
    ),
  },
  {
    n: 3,
    accent: 'bg-navy',
    title: 'Sanity Ceiling',
    formula: `Total leakage capped at ${LEAKAGE_CEILING_PCT * 100}% of current monthly revenue`,
    body: (
      <>
        A practice cannot be leaking more than roughly a third of what it collects and still be the
        practice you described at the top of this form. When your inputs push past that line, the
        model holds at the ceiling and says so rather than printing a number nobody believes.
      </>
    ),
  },
  {
    n: 4,
    accent: 'bg-teal',
    title: 'Recovery Projection',
    formula: 'Total Monthly Leakage × 75% Recovery Rate',
    body: (
      <>With Caliber infrastructure (AI text-back, reminder sequences, reactivation), we project <strong className="text-navy font-bold">75% recovery</strong> of identified leakage. This accounts for leads that can't be recovered regardless of follow-up.</>
    ),
  },
  {
    n: 5,
    accent: 'bg-teal',
    title: 'ROI Calculation',
    formula: '(Monthly Recovery − $2,000 Full Autonomy retainer) ÷ $2,000',
    body: (
      <>
        ROI is measured against the <strong className="text-navy font-bold">$2,000/mo flagship retainer</strong>.
        Counting the $10,000 build across a first year, the all-in first-year cost is $2,833/mo, so a
        first-year multiple runs roughly 30% lower than the figure above. Lower tiers have different
        ROI profiles based on their monthly fee.
      </>
    ),
  },
];

const REVENUE_BRACKETS = [
  { value: 75000,  label: '$50k – $100k' },
  { value: 137500, label: '$100k – $175k' },
  { value: 262500, label: '$175k – $350k' },
  { value: 450000, label: '$350k+' },
];

const Calculator: React.FC = () => {
  const [params, setParams] = useState<RevenueCalculation>(CALCULATOR_DEFAULTS);
  // Held separately so the field can be empty mid-typing without the model
  // seeing NaN. Committing on blur is what clamps it to the floor.
  const [ticketDraft, setTicketDraft] = useState(String(CALCULATOR_DEFAULTS.avgTicket));
  const [showMethodology, setShowMethodology] = useState(false);

  const results = useMemo(() => calculateROI(params), [params]);

  const handleChange = (name: keyof RevenueCalculation, value: number) => {
    setParams(prev => ({ ...prev, [name]: value }));
  };

  const commitTicket = (raw: string) => {
    const parsed = Number.parseInt(raw, 10);
    const clamped = Number.isFinite(parsed) ? Math.max(MIN_AVG_TICKET, parsed) : MIN_AVG_TICKET;
    setTicketDraft(String(clamped));
    handleChange('avgTicket', clamped);
  };

  const money = (n: number) => `$${Math.round(n).toLocaleString()}`;

  return (
    <section id="calculator" className="bg-white">
      <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        {/* Off-centre head, with the standing assumption pulled out beside it. */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5 lg:gap-16 lg:items-end mb-10 lg:mb-12">
          <div>
            <div className="text-xs tracking-[0.06em] uppercase text-teal-deep font-semibold mb-3.5">Revenue Audit</div>
            <h2 className="font-serif font-normal text-[32px] sm:text-4xl md:text-[44px] tracking-[-0.01em] text-navy leading-[1.12]">
              Infrastructure leakage calculator
            </h2>
          </div>
          <p className="text-sm leading-[1.6] text-muted lg:max-w-[280px] lg:text-right lg:pb-2">
            Assumes 75% recovery efficiency on hot leads and repeat patients. Every step is shown below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch mb-6">
          {/* Input panel */}
          <div className="flex-none w-full lg:w-[360px] bg-surface-2 rounded-lg p-6 sm:p-8 flex flex-col gap-[26px]">
            <div>
              <label htmlFor="rev-bracket" className="block text-[11px] tracking-[0.08em] uppercase text-muted font-semibold mb-3">Current Monthly Revenue</label>
              <select
                id="rev-bracket"
                value={params.currentMonthlyRevenue}
                onChange={(e) => handleChange('currentMonthlyRevenue', parseInt(e.target.value, 10))}
                className="w-full p-[15px] rounded-sm border border-hairline-2 bg-white text-[15px] font-semibold text-navy outline-none focus:ring-2 focus:ring-teal/40 appearance-none cursor-pointer"
              >
                {REVENUE_BRACKETS.map((b) => (
                  <option key={b.value} value={b.value}>{b.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="avg-ticket" className="block text-[11px] tracking-[0.08em] uppercase text-muted font-semibold mb-3">Avg. Treatment Price</label>
              <div className="relative">
                <span aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-2 font-semibold">$</span>
                <input
                  id="avg-ticket"
                  type="number"
                  inputMode="numeric"
                  min={MIN_AVG_TICKET}
                  step={25}
                  value={ticketDraft}
                  onChange={(e) => {
                    setTicketDraft(e.target.value);
                    const parsed = Number.parseInt(e.target.value, 10);
                    if (Number.isFinite(parsed) && parsed >= MIN_AVG_TICKET) handleChange('avgTicket', parsed);
                  }}
                  onBlur={(e) => commitTicket(e.target.value)}
                  aria-describedby="avg-ticket-hint"
                  className="w-full py-[15px] pl-[30px] pr-[15px] rounded-sm border border-hairline-2 bg-white text-lg font-bold text-teal outline-none focus:ring-2 focus:ring-teal/40"
                />
              </div>
              <p id="avg-ticket-hint" className="text-[11.5px] text-muted mt-2">Minimum ${MIN_AVG_TICKET}.</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3.5">
                <label htmlFor="missed-calls" className="text-[11px] tracking-[0.08em] uppercase text-muted font-semibold">Weekly Missed Calls</label>
                <output htmlFor="missed-calls" className="bg-teal text-white text-xs font-bold px-3 py-[3px] rounded-full tabular-nums">{params.weeklyMissedCalls}</output>
              </div>
              <input
                id="missed-calls"
                type="range"
                min="5"
                max="50"
                value={params.weeklyMissedCalls}
                onChange={(e) => handleChange('weeklyMissedCalls', parseInt(e.target.value, 10))}
                aria-valuetext={`${params.weeklyMissedCalls} missed calls per week`}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-3.5">
                {/* Capped at 35%, not 50%. No functioning practice runs a 50%
                    no-show rate, and this page's own copy says 20–30%. */}
                <label htmlFor="noshow-rate" className="text-[11px] tracking-[0.08em] uppercase text-muted font-semibold">Current No-Show Rate</label>
                <output htmlFor="noshow-rate" className="bg-teal text-white text-xs font-bold px-3 py-[3px] rounded-full tabular-nums">{params.noShowRate}%</output>
              </div>
              <input
                id="noshow-rate"
                type="range"
                min="5"
                max="35"
                value={params.noShowRate}
                onChange={(e) => handleChange('noShowRate', parseInt(e.target.value, 10))}
                aria-valuetext={`${params.noShowRate} percent no-show rate`}
                className="w-full"
              />
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 flex flex-col gap-[18px]">
            {/* Navy leakage panel */}
            <div className="bg-navy rounded-lg p-6 sm:p-[34px] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-terracotta-deep text-white text-[10px] tracking-[0.12em] uppercase font-semibold px-[18px] py-2 rounded-tr-lg rounded-bl-md">Revenue Leakage Detected</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-9 mt-9 md:mt-[18px]">
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-onnavy-3 font-semibold mb-2">Total Monthly Leakage</div>
                  <div className="font-serif font-medium text-[38px] sm:text-[48px] tracking-[-0.02em] leading-none text-terracotta-light mb-[18px] tabular-nums">{money(results.totalLossMonthly)}</div>
                  <div className="border-t border-navy-line pt-3.5 flex flex-col gap-[9px]">
                    <div className="flex justify-between gap-3 text-[12.5px]"><span className="text-onnavy">Missed calls</span><span className="text-onnavy-3 font-semibold tabular-nums">{money(results.missedCallLossMonthly)}</span></div>
                    <div className="flex justify-between gap-3 text-[12.5px]"><span className="text-onnavy">No-shows</span><span className="text-onnavy-3 font-semibold tabular-nums">{money(results.noShowLossMonthly)}</span></div>
                  </div>
                  {results.leakageCapped && (
                    <p className="text-[11.5px] leading-[1.55] text-onnavy mt-3.5 border-t border-navy-line pt-3">
                      Held at the model's ceiling of {LEAKAGE_CEILING_PCT * 100}% of monthly revenue.
                      The components above add to more than that at these inputs.
                    </p>
                  )}
                </div>
                <div className="bg-white/[0.04] border border-navy-line rounded-md p-5 sm:p-6 flex flex-col justify-center">
                  <div className="text-[11px] tracking-[0.1em] uppercase text-onnavy-3 font-semibold mb-2">Total Annualized Leakage</div>
                  <div className="font-serif font-medium text-[36px] sm:text-[46px] tracking-[-0.02em] leading-none text-white tabular-nums">{money(results.totalLossAnnual)}</div>
                </div>
              </div>
            </div>

            {/* Teal recovery panel */}
            <div className="bg-teal rounded-lg p-6 sm:p-[34px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-9">
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-white font-semibold mb-2">Monthly Recovery Goal</div>
                  <div className="font-serif font-medium text-[38px] sm:text-[48px] tracking-[-0.02em] leading-none text-white mb-4 tabular-nums">+{money(results.recoveryMonthly)}</div>
                  <div className="inline-flex items-center gap-2 bg-white/[0.18] rounded-full px-3.5 py-[7px] text-[11px] tracking-[0.06em] uppercase text-white font-semibold">
                    <span className="w-[7px] h-[7px] bg-positive rounded-full" aria-hidden="true"></span> Deploy the Full Autonomy System
                  </div>
                </div>
                <div className="bg-white/[0.18] rounded-md p-5 sm:p-6 flex flex-col justify-center">
                  <div className="text-[11px] tracking-[0.1em] uppercase text-white font-semibold mb-2">Annualized Recovery</div>
                  <div className="font-serif font-medium text-[34px] sm:text-[40px] tracking-[-0.02em] leading-none text-white tabular-nums">+{money(results.recoveryAnnual)}</div>

                  {/* Below the flagship floor the honest output is a
                      qualification, not a multiple. Printing "1x" under a page
                      that promises 10x+ is the page arguing with itself. */}
                  <div className="mt-4 border-t border-white/25 pt-3.5">
                    {results.meetsFlagshipFloor ? (
                      <div className="flex justify-between items-center gap-3">
                        <span className="text-[11px] tracking-[0.06em] uppercase text-white font-semibold">Modeled ROI</span>
                        <span className="font-serif font-medium text-[26px] text-white tabular-nums">{results.roi}x</span>
                      </div>
                    ) : (
                      <>
                        <div className="text-[11px] tracking-[0.06em] uppercase text-white font-semibold mb-1.5">Flagship fit</div>
                        <p className="text-[13px] leading-[1.5] text-white font-semibold">
                          At these volumes the flagship's {ROI_FLOOR_LABEL} math doesn't hold. A
                          stepping-stone tier is the honest recommendation, and we'll tell you which
                          one on the demo.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA that refers to the number the visitor just produced, rather than
            repeating the hero's "Book a Free Demo" for the fourth time. */}
        <div className="bg-surface-2 border border-hairline-2 rounded-md px-6 py-5 mb-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <p className="text-[14.5px] leading-[1.55] text-ink-2 flex-1">
            {results.meetsFlagshipFloor ? (
              <>That {money(results.recoveryMonthly)} is a model, not a measurement. On the demo we rebuild it against your actual call logs and calendar.</>
            ) : (
              <>Think the inputs are wrong? On the demo we rebuild this against your actual call logs and calendar instead of a slider.</>
            )}
          </p>
          <a href="#demo" className="flex-none inline-flex items-center justify-center gap-2 bg-navy text-white text-[14px] font-semibold px-6 py-3.5 rounded-sm hover:bg-ink-5 transition">
            Pressure-test this number <ArrowRight />
          </a>
        </div>

        {/* Methodology disclosure */}
        <div>
          <button
            type="button"
            onClick={() => setShowMethodology(!showMethodology)}
            aria-expanded={showMethodology}
            aria-controls="methodology-panel"
            className="w-full flex items-center justify-between gap-4 bg-surface-2 border border-hairline-2 hover:bg-hairline/40 transition px-5 sm:px-6 py-[18px] rounded-md text-left"
          >
            <span className="flex items-center gap-3.5">
              <span aria-hidden="true" className="w-[34px] h-[34px] bg-white border border-hairline-2 rounded-full flex items-center justify-center text-muted text-[15px] font-bold flex-shrink-0">i</span>
              <span className="text-[15px] font-semibold text-navy">How we calculate these numbers</span>
            </span>
            <span className={`text-muted-2 text-[15px] transition-transform flex-shrink-0 ${showMethodology ? 'rotate-180' : ''}`}>
              <Chevron />
            </span>
          </button>

          <div id="methodology-panel" hidden={!showMethodology} className="mt-4 bg-white border border-hairline rounded-lg p-6 sm:p-10 flex-col gap-8 flex">
            {METHODOLOGY.map((step) => (
              <div key={step.n}>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <span aria-hidden="true" className={`w-7 h-7 ${step.accent} text-white rounded-full flex items-center justify-center font-bold text-[13px] flex-shrink-0`}>{step.n}</span>
                  <h3 className="font-serif font-medium text-[19px] sm:text-[21px] text-navy">{step.title}</h3>
                </div>
                <div className="bg-surface-2 border border-hairline rounded-sm p-4 font-mono text-[12px] sm:text-[13px] text-ink-3 mb-3 overflow-x-auto">{step.formula}</div>
                <p className="text-[13.5px] leading-[1.6] text-ink-3 max-w-[760px]">{step.body}</p>
              </div>
            ))}

            <div className="bg-navy rounded-md p-6 sm:p-[26px] text-center">
              <p className="text-[13.5px] leading-[1.6] text-onnavy-3">
                These are estimates built on industry benchmarks, not client results. Your{' '}
                <a href="#demo" className="text-teal-light font-semibold underline underline-offset-2 hover:text-white transition">free demo</a>{' '}
                walks through actual measurements specific to your practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
