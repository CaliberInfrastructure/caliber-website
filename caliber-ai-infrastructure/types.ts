
export enum ServiceTier {
  STABILIZATION = 'STABILIZATION',
  ACCELERATION = 'ACCELERATION',
  FULL_AUTOMATION = 'FULL_AUTOMATION'
}

export interface TierDetails {
  name: string;
  monthlyFee: number;
  setupFee: number;
  description: string;
  valueMonthly: number;
  features: string[];
}

export interface RevenueCalculation {
  currentMonthlyRevenue: number;
  avgTicket: number;
  weeklyMissedCalls: number;
  noShowRate: number;
}

export interface CalculationResults {
  missedCallLossMonthly: number;
  noShowLossMonthly: number;
  totalLossMonthly: number;
  totalLossAnnual: number;
  recoveryMonthly: number;
  recoveryAnnual: number;
  roi: number;
}
