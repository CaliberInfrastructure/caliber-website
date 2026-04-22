
export enum ServiceTier {
  FOUNDATION = 'FOUNDATION',
  GROWTH = 'GROWTH',
  FULL_AUTONOMY = 'FULL_AUTONOMY'
}

export interface TierDetails {
  name: string;
  monthlyFee: number;
  setupFee: number;
  description: string;
  positioning: string;
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
