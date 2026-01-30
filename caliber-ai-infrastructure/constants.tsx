
import React from 'react';
import { ServiceTier, TierDetails } from './types';

export const TIERS: Record<ServiceTier, TierDetails> = {
  [ServiceTier.STABILIZATION]: {
    name: "Stabilization",
    monthlyFee: 997,
    setupFee: 3500,
    description: "Revenue Protection System. Stop the bleeding on missed calls and no-shows.",
    valueMonthly: 7100,
    features: [
      "Missed Call Text-Back (Instant SMS)",
      "Appointment Reminders (72/24/3/1hr)",
      "Basic Booking Automation",
      "Full KPI Dashboard"
    ]
  },
  [ServiceTier.ACCELERATION]: {
    name: "Acceleration",
    monthlyFee: 1300,
    setupFee: 5000,
    description: "Intelligent Growth Engine. Accelerate growth without adding headcount.",
    valueMonthly: 16100,
    features: [
      "Everything in Stabilization",
      "AI Lead Qualification (Hot/Warm/Cold)",
      "90-Day Client Reactivation",
      "Review Generation Automation",
      "Waitlist & Cancellation Fills"
    ]
  },
  [ServiceTier.FULL_AUTOMATION]: {
    name: "Full Automation",
    monthlyFee: 2000,
    setupFee: 8500,
    description: "Complete AI Ecosystem. 24/7 Voice AI reception that qualifies and books.",
    valueMonthly: 26300,
    features: [
      "24/7 AI Voice Reception",
      "Outbound Confirmation Calls",
      "Intelligent Live Transfer",
      "Multi-Channel AI Orchestration",
      "Monthly Strategy Call",
      "Priority 4-hour Support"
    ]
  }
};
