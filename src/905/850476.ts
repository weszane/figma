import { orgSubscriptionAtom } from "../905/296690"
import { getFeatureFlags } from "../905/601108"
import { atom, atomStoreManager } from "../figma_app/27355"
import { isBigmaEnabledSimple } from "../figma_app/336853"
import { hasTeamPaidAccess } from "../figma_app/345997"
import { openFileTeamAtom } from "../figma_app/516028"
// Original file: /Users/allen/sigma-main/src/905/850476.ts

// Enum for subscription tiers
// Original: $$d3
export enum SubscriptionTier {
  STARTER = "starter",
  PRO = "pro",
  ORG = "org",
  ENTERPRISE = "enterprise",
}

// Constant for maximum variables (assuming based on context)
// Original: $$c2
export const MAX_VARIABLES = 5000

/**
 * Gets the forced subscription tier from feature flags, if any.
 * @returns The forced tier string or null if none.
 */
// Original: u
function getForcedTier(): string | null {
  const flags = getFeatureFlags()
  if (flags.ds_variables_pp_force_enterprise)
    return "enterprise"
  if (flags.ds_variables_pp_force_org)
    return "org"
  if (flags.ds_variables_pp_force_pro)
    return "pro"
  if (flags.ds_variables_pp_force_starter)
    return "starter"
  return null
}

/**
 * Atom that computes the current subscription tier based on various conditions.
 * @param get - Atom getter function.
 * @returns The current tier string.
 */
// Original: $$p5
export const currentTierAtom = atom((get) => {
  const team = get(openFileTeamAtom)
  const subscription = get(orgSubscriptionAtom) ?? null
  const forced = getForcedTier()
  return forced || (isBigmaEnabledSimple(subscription) ? "enterprise" : subscription ? "org" : hasTeamPaidAccess(team) ? "pro" : "starter")
})

/**
 * Gets the maximum variables allowed for a given subscription tier.
 * @param tier - The subscription tier.
 * @returns The maximum variables number.
 */
// Original: $$m0
export function getMaxVariables(tier: string): number {
  if (getFeatureFlags().ds_100_modes)
    return 100
  switch (tier) {
    case "starter":
      return 1
    case "pro":
    case "org":
      return 4
    case "enterprise":
      return 40
    default:
      return 0 // Fallback, though switch should cover all
  }
}

/**
 * Gets the current maximum variables based on the current tier.
 * @returns The current maximum variables number.
 */
// Original: $$h4
export function getCurrentMaxVariables(): number {
  return getMaxVariables(getForcedTier() ?? atomStoreManager.get(currentTierAtom))
}

/**
 * Checks if extended collections are enabled for the enterprise tier.
 * @returns True if enabled and current tier is enterprise.
 */
// Original: $$g1
export function hasExtendedCollections(): boolean {
  return !!getFeatureFlags().ds_extended_collections && (getForcedTier() ?? atomStoreManager.get(currentTierAtom)) === "enterprise"
}

/**
 * Checks if the current tier is a paid tier (not starter).
 * @returns True if not starter.
 */
// Original: $$f6
export function isPaidTier(): boolean {
  const paywallTier = getFeatureFlags().prototype_multi_path_paywall ? null : "pro"
  return (paywallTier ?? atomStoreManager.get(currentTierAtom)) !== "starter"
}

// Exports with original names for compatibility
export const $A = getMaxVariables
export const Ot = hasExtendedCollections
export const RL = MAX_VARIABLES
export const V_ = SubscriptionTier
export const f8 = getCurrentMaxVariables
export const fm = currentTierAtom
export const s6 = isPaidTier
