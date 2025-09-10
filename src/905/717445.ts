import type { FeatureFlags } from '../../../types/global'
import { getFeatureFlags } from '../905/601108'

/**
 * Returns the current feature flags, or an empty FeatureFlags object if the 'ce_il_lina' flag is enabled.
 * Original function name: $$r0
 */
export function getFilteredFeatureFlags(): FeatureFlags {
  const flags = getFeatureFlags();
  if (flags.ce_il_lina) {
    return {} as FeatureFlags;
  }
  return flags;
}

/**
 * Alias for getFilteredFeatureFlags.
 * Original export name: m
 */
export const m = getFilteredFeatureFlags;
