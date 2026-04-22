
import React from 'react';
import { ServiceTier, TierDetails } from './types';

export const TIERS: Record<ServiceTier, TierDetails> = {
  [ServiceTier.FOUNDATION]: {
    name: "Stabilization",
    monthlyFee: 997,
    setupFee: 3500,
    description: "Revenue Protection System · Entry Tier. Built for practices that are busy but leaking revenue through the cracks.",
    positioning: "Start here if you're under $100k/mo",
    valueMonthly: 7100,
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
    valueMonthly: 16100,
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
    valueMonthly: 26300,
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
