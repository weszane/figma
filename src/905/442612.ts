import { getFeatureFlags } from "../905/601108"

/**
 * Checks if the bake starter paywall feature is enabled and the limit is not set.
 *
 * @returns {boolean} True if bake starter paywall is enabled and limit is disabled, false otherwise.
 */
export function isBakeStarterPaywallEnabledWithoutLimit(): boolean {
  const featureFlags = getFeatureFlags()
  return !!featureFlags.bake_starter_paywall && !featureFlags.bake_starter_limit
}

export const W = isBakeStarterPaywallEnabledWithoutLimit
