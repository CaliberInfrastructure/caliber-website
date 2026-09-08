
import { ServiceTier, TierDetails, RevenueCalculation } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// Canonical figures.
//
// Every dollar amount and multiple a visitor can see on the homepage resolves
// to something in this file. Before the Sep 2026 copy audit the page carried
// five different statements of the monthly leak ($10–30k, ~$850/day, $20–30k,
// $25–35k, $6,250/week), three different flagship "value" totals ($16,100 in
// the heading, $13,500 in the components that were supposed to sum to it,
// $26,300 in the pricing sidebar), and a hero card whose $24,800 / 12x did not
// match what its own calculator returned at its own defaults ($20,438 / 9x).
//
// If a number changes, change it here. Do not retype one into a component.
// ─────────────────────────────────────────────────────────────────────────────

/** The one monthly-leak range. Repeated verbatim wherever the leak is stated. */
export const LEAK_RANGE_MONTHLY = '$20–30k';

/**
 * The ROI claim, stated as a floor rather than a range.
 *
 * A range ("10–17x") is disprovable in both directions with two slider drags,
 * and the calculator did exactly that: 1x at the bottom of its inputs, 58x at
 * the top. A floor is not. Below the floor the calculator stops printing a
 * multiple and says the practice is not a flagship fit — see roiCalculator.ts.
 */
export const ROI_FLOOR_LABEL = '10x+';
export const ROI_FLOOR = 10;

/** Flagship guarantee: a flat dollar threshold, not a multiple of the plan. */
export const GUARANTEE_AMOUNT = 20000;
export const GUARANTEE_AMOUNT_LABEL = '$20,000';
export const GUARANTEE_WINDOW_DAYS = 90;

/**
 * The input set the hero's recovery card is modeled at — identical to the
 * calculator's starting position, so clicking through from the card to the
 * calculator lands on the same numbers the card just showed.
 */
export const CALCULATOR_DEFAULTS: RevenueCalculation = {
  currentMonthlyRevenue: 137500,
  avgTicket: 450,
  weeklyMissedCalls: 15,
  noShowRate: 20,
};

/** Plain-language description of that input set, shown under the hero figure. */
export const CALCULATOR_DEFAULTS_LABEL =
  'Modeled at the revenue-audit defaults — a $100–175k/mo practice, $450 average ticket, 15 missed calls a week, 20% no-shows';

// ─────────────────────────────────────────────────────────────────────────────
// Stack component values.
//
// The flagship's stated value is the sum of these; ValueStack renders the same
// arrays it is summed from, so the column a prospect adds up is the column that
// produced the headline. Lower-tier values are priced off the same components
// so the ladder stays monotonic — Acceleration used to be listed at $16,100/mo,
// above the flagship, which is visible on screen the moment a visitor opens
// "See other tiers".
// ─────────────────────────────────────────────────────────────────────────────

export interface StackItem {
  name: string;
  /** Monthly standalone value in dollars, or null for a one-time bonus. */
  monthly: number | null;
  /** One-time value in dollars, for bonuses that are not recurring. */
  oneTime?: number;
  recovers: string;
}

export const CORE_STACK: StackItem[] = [
  { name: '24/7 AI Voice Reception',            monthly: 3500, recovers: '15–25 missed calls a week × $400 = $6k–$10k recovered' },
  { name: 'No-Show Elimination System',         monthly: 2000, recovers: '4–6 recovered appointments a week = $1,600–$2,400/mo' },
  { name: 'Dormant Client Reactivation Engine', monthly: 4000, recovers: '$8k–$12k from reactivated appointments' },
  { name: 'Omni-Channel Lead Capture',          monthly: 1500, recovers: 'Web, social, and phone inquiries land in one queue — nothing falls through' },
  { name: 'Reputation Compounding System',      monthly: 1000, recovers: 'Every completed visit becomes a review request, and reviews become inbound' },
  { name: 'Staff Pre-Qualification Filter',     monthly: 1500, recovers: 'Your team only picks up the phone for people ready to book' },
];

export const BONUSES: StackItem[] = [
  { name: 'Close-Ready Staff Script Kit',           monthly: null, oneTime: 1200, recovers: 'Word-for-word handling for the objections that lose warm leads' },
  { name: 'Monthly Report + Strategy Call',         monthly: 600,                 recovers: 'Full ROI visibility every month, against the attribution ledger' },
  { name: '90-Day Competitor Intelligence Audit',   monthly: null, oneTime: 2500, recovers: 'Where you win and lose against the spas in your zip code' },
  { name: 'Seasonal Campaign Playbook (12 months)', monthly: null, oneTime: 1800, recovers: 'Revenue on demand from the database you already own' },
  { name: 'Emergency Response SLA',                 monthly: 1000,                recovers: '4-hour response, in writing' },
];

const sumMonthly = (items: StackItem[]) => items.reduce((t, i) => t + (i.monthly ?? 0), 0);
const sumOneTime = (items: StackItem[]) => items.reduce((t, i) => t + (i.oneTime ?? 0), 0);

/** $13,500/mo of core components. */
export const CORE_STACK_MONTHLY = sumMonthly(CORE_STACK);
/** $1,600/mo of recurring bonuses. */
export const BONUS_MONTHLY = sumMonthly(BONUSES);
/** $5,500 of one-time bonuses. */
export const BONUS_ONE_TIME = sumOneTime(BONUSES);
/** $15,100/mo — the one flagship value figure. */
export const FLAGSHIP_VALUE_MONTHLY = CORE_STACK_MONTHLY + BONUS_MONTHLY;

export const TIERS: Record<ServiceTier, TierDetails> = {
  [ServiceTier.FOUNDATION]: {
    name: "Stabilization",
    monthlyFee: 997,
    setupFee: 3500,
    description: "Revenue Protection System · Entry Tier. Built for practices that are busy but leaking revenue through the cracks.",
    positioning: "Start here if you're under $100k/mo",
    // Missed-call text-back 1,500 · reminders 2,000 · booking 1,200 · dashboard 800
    valueMonthly: 5500,
    features: [
      "Missed Call Text-Back (Instant SMS)",
      "Appointment Reminders (72/24/3/1hr)",
      "Basic Booking Automation",
      "Full KPI Dashboard"
    ]
  },
  [ServiceTier.GROWTH]: {
    name: "Acceleration",
    monthlyFee: 1300,
    setupFee: 5000,
    description: "Intelligent Growth Engine. Your existing client database is sitting on untapped revenue. This tier adds AI that qualifies every lead so your staff only talks to people who are ready to book.",
    positioning: "For practices ready to scale without hiring",
    // Stabilization 5,500 · lead qualification 1,500 · 90-day reactivation 2,500
    // · review generation 1,000 · waitlist fills 900
    valueMonthly: 11400,
    features: [
      "Everything in Stabilization",
      "AI Lead Qualification (Hot/Warm/Cold)",
      "90-Day Client Reactivation",
      "Review Generation Automation",
      "Waitlist & Cancellation Fills"
    ]
  },
  [ServiceTier.FULL_AUTONOMY]: {
    name: "Full Autonomy System™",
    monthlyFee: 2000,
    setupFee: 10000,
    description: "Our flagship — the one that comes with the guarantee.",
    positioning: "Our flagship — the one that comes with the guarantee",
    valueMonthly: FLAGSHIP_VALUE_MONTHLY,
    features: [
      "24/7 AI Voice Reception",
      "No-Show Elimination System",
      "Dormant Client Reactivation Engine",
      "Omni-Channel Lead Capture",
      "Reputation Compounding System",
      "Staff Pre-Qualification Filter",
      "Monthly Strategy Call",
      "Priority 4-hour Support"
    ]
  }
};
