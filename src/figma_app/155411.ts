import { getFeatureFlags } from '../905/601108'
import { FProviderConfigType } from '../figma_app/191312'

/**
 * Determines the provider config type based on feature flags.
 * @returns {FProviderConfigType} The selected provider config type.
 * (Original function: $$a0)
 */
export function getProviderConfigType(): FProviderConfigType {
  const featureFlags = getFeatureFlags()
  return featureFlags.dse_preset_group_internal
    ? FProviderConfigType.INTERNAL
    : FProviderConfigType.DEFAULT
}

/** Alias for getProviderConfigType (original export: M) */
export const M = getProviderConfigType
