
import React from 'react';
import { ServiceTier, TierDetails } from './types';

export const TIERS: Record<ServiceTier, TierDetails> = {
  [ServiceTier.STABILIZATION]: {
    name: "Stabilization",
    monthlyFee: 997,
    setupFee: 3500,
    description: "Revenue Protection System. Stop the bleeding on missed calls and no-shows.",
    valueMonthly: 7100,
    tierLabel: "REVENUE PROTECTION SYSTEM  ·  ENTRY TIER",
    hookHeadline: "You\u2019re losing $6,000\u2013$10,000/mo to missed calls and no-shows. This stops it.",
    hookDescription: "Built for practices that are busy but leaking revenue through the cracks. Missed calls get followed up automatically, appointment no-shows drop 60\u201380%, and new clients can book themselves \u2014 without anyone on your staff lifting a finger.",
    features: [
      "Every missed call gets an immediate text-back \u2014 leads do not go cold while your staff is busy",
      "No-show rates drop 60\u201380% with automated reminders at 72hrs, 24hrs, 3hrs, and 1hr out",
      "New clients book themselves 24/7 \u2014 no staff required, no phone tag",
      "Every text, email, Instagram DM, and Facebook message in one place \u2014 your team stops missing replies",
      "See exactly where you are recovering revenue \u2014 tracked weekly, in plain language",
      "More 5-star Google reviews without anyone on staff having to ask",
      "Every lead tracked from first contact to booked appointment \u2014 nothing falls through"
    ],
    outcomeCallout: {
      money: "Estimated monthly recovery: $7,100+",
      time: "Staff hours saved: 8\u201315 hrs/week on manual follow-up and reminders"
    },
    icpLine: "Best for practices doing $50k\u2013$75k/mo that are losing leads to missed calls and no-shows and want to fix it fast without adding headcount.",
    roiLabel: "7\u20139x"
  },
  [ServiceTier.ACCELERATION]: {
    name: "Acceleration",
    monthlyFee: 1300,
    setupFee: 5000,
    description: "Intelligent Growth Engine. Accelerate growth without adding headcount.",
    valueMonthly: 16100,
    tierLabel: "INTELLIGENT GROWTH ENGINE",
    hookHeadline: "You\u2019ve stopped the bleeding. Now grow \u2014 without hiring anyone.",
    hookDescription: "Your existing client database is sitting on untapped revenue. This tier adds AI that qualifies every lead so your staff only talks to people who are ready to book, automatically re-engages clients who have gone quiet, and fills cancellations before a chair ever sits empty.",
    features: [
      "Everything in Stabilization (all 7 workflows), plus:",
      "Your staff only speaks to ready-to-book leads \u2014 AI handles screening for everyone else",
      "Clients who have not been back in 90 days get automatically re-engaged \u2014 your database pays for itself",
      "A consistent flow of 5-star reviews on autopilot \u2014 no staff involvement required",
      "Every cancellation fills from your waitlist automatically \u2014 zero empty chairs"
    ],
    outcomeCallout: {
      money: "Estimated monthly recovery: $16,100+",
      time: "Staff hours saved: 15\u201325 hrs/week \u2014 no manual lead sorting, outreach, or waitlist calls"
    },
    icpLine: "Best for established practices doing $75k\u2013$100k/mo that are ready to grow revenue without growing their team.",
    roiLabel: "10\u201312x"
  },
  [ServiceTier.FULL_AUTOMATION]: {
    name: "Full Automation",
    monthlyFee: 2000,
    setupFee: 10000,
    description: "Complete AI Ecosystem. 24/7 Voice AI reception that qualifies and books.",
    valueMonthly: 26300,
    tierLabel: "COMPLETE REVENUE INFRASTRUCTURE  ·  FLAGSHIP TIER",
    hookHeadline: "Your phone never goes unanswered \u2014 not at 11pm, not on a Sunday, not ever.",
    hookDescription: "40% of your highest-intent leads call after 6pm. Right now, they get voicemail \u2014 and call your competitor. Full Automation deploys a 24/7 AI front desk that answers, qualifies, and books in real time. Combined with every workflow from our lower tiers, this is total revenue infrastructure \u2014 built once, running permanently.",
    features: [
      "Your AI answers every call, day or night \u2014 live, not voicemail",
      "Callers get qualified and booked on the first call \u2014 no hold, no callbacks",
      "Confirmations go out automatically \u2014 no one on your team has to call",
      "When a call needs a human, it is routed to the right person instantly",
      "Every channel \u2014 SMS, email, DMs \u2014 handled in one place, nothing missed",
      "AI screens every lead so your team only speaks to people ready to book",
      "Dormant clients re-engage on autopilot \u2014 your database becomes a revenue stream",
      "Google reviews build consistently without your staff ever asking",
      "Monthly strategy call to review what\u2019s working and optimize"
    ],
    outcomeCallout: {
      money: "Estimated monthly recovery: $26,300+",
      time: "Equivalent to a full-time front desk \u2014 without the salary, benefits, or turnover"
    },
    icpLine: "Best for practices doing $100k+/mo that want to eliminate phone-based revenue loss entirely and operate with a permanent AI infrastructure layer.",
    supportLine: "Priority support \u2014 4-hour critical response",
    roiLabel: "10\u201317x"
  }
};
