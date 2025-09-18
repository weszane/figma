import dayjs from 'dayjs'

import { getResourceDataOrFallback } from '../905/723791'
import { useCurrentPrivilegedPlan } from '../figma_app/465071'

/**
 * Checks if proration billing is enabled for the given plan.
 * @param plan - The plan object containing prorationBillingEnabledAt.
 * @returns True if proration billing is enabled, false otherwise.
 * (Original function: $$s0)
 */
export function isProrationBillingEnabled(plan: { prorationBillingEnabledAt?: any } | null): boolean {
  const enabledAt = getResourceDataOrFallback(plan?.prorationBillingEnabledAt) as Date
  if (!enabledAt)
    return false
  return dayjs().utc(true).isSameOrAfter(dayjs(enabledAt).utc(true))
}

/**
 * Checks if proration billing is enabled for the current privileged plan.
 * @returns True if proration billing is enabled for the current plan, false otherwise.
 * (Original function: $$o1)
 */
export function isProrationBillingEnabledForCurrentPlan(): boolean {
  const currentPlan = useCurrentPrivilegedPlan('useProrationEnabledForCurrentPlan').unwrapOr(null)
  return isProrationBillingEnabled(currentPlan)
}

// Aliases for backward compatibility (Original: g, k)
export const g = isProrationBillingEnabled
export const k = isProrationBillingEnabledForCurrentPlan
