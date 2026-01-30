
import { RevenueCalculation, CalculationResults } from '../types';

export const calculateROI = (params: RevenueCalculation): CalculationResults => {
  const { currentMonthlyRevenue, avgTicket, weeklyMissedCalls, noShowRate } = params;

  // 1. Missed Call Leakage: (Weekly Calls × 4 weeks) × 50% booking intent × Avg Ticket
  const missedCallLossMonthly = (weeklyMissedCalls * 4) * 0.5 * avgTicket;

  // 2. No-Show Leakage: Estimate monthly appointments, then apply no-show rate
  // Loss = Appointments × No-Show Rate × Avg Ticket × 50% (accounting for rebooks/partial recovery)
  const monthlyAppointments = currentMonthlyRevenue / avgTicket;
  const noShowLossMonthly = monthlyAppointments * (noShowRate / 100) * avgTicket * 0.5;

  const totalLossMonthly = missedCallLossMonthly + noShowLossMonthly;
  const totalLossAnnual = totalLossMonthly * 12;

  // 3. Recovery Logic (75% Recovery with Caliber infrastructure)
  const recoveryMonthly = totalLossMonthly * 0.75;
  const recoveryAnnual = recoveryMonthly * 12;

  // ROI calculation against $2,000 monthly fee (Full Automation tier)
  const fullAutomationFee = 2000;
  const roi = (recoveryMonthly - fullAutomationFee) / fullAutomationFee;

  return {
    missedCallLossMonthly,
    noShowLossMonthly,
    totalLossMonthly,
    totalLossAnnual,
    recoveryMonthly,
    recoveryAnnual,
    roi: Math.max(0, Math.round(roi))
  };
};
