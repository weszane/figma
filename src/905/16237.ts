import { getFeatureFlags } from '../905/601108'
/**
 * Returns RUM logging configuration if the temp_rum_logging feature flag is enabled.
 * @returns {RumLoggingConfig | undefined} Configuration object or undefined.
 */
export interface RumLoggingConfig {
  addToRUM: boolean
  forceEnableActionLogging: boolean
}

/**
 * getRumLoggingConfig - Checks feature flags and returns RUM logging config if enabled.
 */
export function getRumLoggingConfig(): RumLoggingConfig | undefined {
  // Original function: $$r0
  const flags = getFeatureFlags()
  if (!flags.temp_rum_logging)
    return undefined
  return {
    addToRUM: true,
    forceEnableActionLogging: true,
  }
}

// Export with original alias for compatibility
export const u = getRumLoggingConfig
