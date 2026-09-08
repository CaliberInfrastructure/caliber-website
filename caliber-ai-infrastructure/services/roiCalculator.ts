
import { RevenueCalculation, CalculationResults } from '../types';
import { ROI_FLOOR } from '../constants';

/** Lowest treatment price the model accepts. Below this the arithmetic stops
 *  meaning anything, and at 0 it used to divide by zero and print "$NaN"
 *  through every output on the page. */
export const MIN_AVG_TICKET = 50;

/** Highest share of realized monthly revenue the model will call "leakage".
 *  Without it the sliders reach outputs like a $75k/mo practice leaking $82k,
 *  which is arithmetically what the formula says and obvious nonsense to the
 *  buyer reading it. Disclosed in the methodology panel. */
export const LEAKAGE_CEILING_PCT = 0.30;

export const calculateROI = (params: RevenueCalculation): CalculationResults => {
  const { currentMonthlyRevenue, weeklyMissedCalls, noShowRate } = params;

  // Guard the divisor. The treatment-price field is free text, so it can arrive
  // as 0, blank, or negative before the input's own clamp catches up.
  const avgTicket = Math.max(MIN_AVG_TICKET, params.avgTicket || MIN_AVG_TICKET);
  const noShowFraction = Math.min(Math.max(noShowRate, 0), 90) / 100;

  // 1. Missed-call leakage: (weekly calls × 4 weeks) × 50% booking intent × ticket
  const missedCallLossMonthly = Math.max(0, weeklyMissedCalls) * 4 * 0.5 * avgTicket;

  // 2. No-show leakage.
  //    Monthly revenue is *realized* revenue, so revenue ÷ ticket counts only
  //    the appointments that happened — a no-show bills nothing and is not in
  //    that figure. Dividing completed appointments by (1 − no-show rate) gets
  //    back to appointments booked, which is the population no-shows come out
  //    of. The old model applied the rate directly to completed appointments
  //    and so understated the count at every input.
  const completedAppointments = currentMonthlyRevenue / avgTicket;
  const bookedAppointments = completedAppointments / (1 - noShowFraction);
  const noShowAppointments = bookedAppointments * noShowFraction;
  //    The 50% factor is partial recovery that already happens organically
  //    through rebooks and last-minute fills.
  const noShowLossMonthly = noShowAppointments * avgTicket * 0.5;

  // 3. Sanity ceiling, applied to the total rather than either component.
  const uncappedLossMonthly = missedCallLossMonthly + noShowLossMonthly;
  const ceiling = currentMonthlyRevenue * LEAKAGE_CEILING_PCT;
  const leakageCapped = uncappedLossMonthly > ceiling;
  const totalLossMonthly = leakageCapped ? ceiling : uncappedLossMonthly;
  const totalLossAnnual = totalLossMonthly * 12;

  // 4. Recovery: 75% of identified leakage with the infrastructure in place.
  const recoveryMonthly = totalLossMonthly * 0.75;
  const recoveryAnnual = recoveryMonthly * 12;

  // 5. ROI against the $2,000/mo flagship retainer.
  const autopilotFee = 2000;
  const roi = Math.max(0, Math.round((recoveryMonthly - autopilotFee) / autopilotFee));

  return {
    missedCallLossMonthly,
    noShowLossMonthly,
    totalLossMonthly,
    totalLossAnnual,
    recoveryMonthly,
    recoveryAnnual,
    roi,
    leakageCapped,
    // Below the floor the page shows a qualification message instead of a
    // multiple. Printing "1x" underneath a headline that promises 10x+ is the
    // page arguing with itself in front of the buyer.
    meetsFlagshipFloor: roi >= ROI_FLOOR,
  };
};
