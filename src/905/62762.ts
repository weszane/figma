// Refactored code: Improved readability, added types, renamed variables for clarity
import md5 from "md5"
import { isIframe } from "../905/508367"

import { getFeatureFlags } from "../905/601108"

import { getInitialOptions } from "../figma_app/169182"
import { bellFeedAPIInstance } from "../figma_app/876459"
import { isInteractionPathCheck } from "../figma_app/897289"

/**
 * Generates a hash-based numeric identifier from a string input.
 * @origin $$d1
 */
export function generateHashId(input: string): number {
  const hash = md5(input)
  return parseInt(hash.slice(0, 8), 16)
}

/**
 * Checks if the current user location matches any of the specified geofence rules.
 * @origin c
 */
function isLocationInGeofence(
  location: { country: string, region: string },
  rules: Array<{ country?: string, region?: string }>,
): boolean {
  return rules.some((rule) => {
    const countryMatch = !rule.country || location.country === rule.country
    const regionMatch = !rule.region || location.region === rule.region
    return countryMatch && regionMatch
  })
}

/**
 * Determines if Sprig analytics should be enabled based on various conditions.
 * @origin $$u0
 */
export function shouldEnableSprigAnalytics(config: {
  geofence: {
    exclude?: Array<{ country?: string, region?: string }>
    include?: Array<{ country?: string, region?: string }>
  }
  canUseCookieForAnalytics: boolean
}): boolean {
  // Get user's location information
  const userLocation = (function () {
    const options = getInitialOptions()
    return {
      country: options.iso_code,
      region: options.viewer_region,
    }
  })()

  // Evaluate geofence rules
  const isExcluded = config.geofence.exclude && isLocationInGeofence(userLocation, config.geofence.exclude)
  const isIncluded = !config.geofence.include || isLocationInGeofence(userLocation, config.geofence.include)
  const passesGeofence = !isExcluded && isIncluded

  // Check all conditions for enabling Sprig
  return (
    !isIframe()
    && !isInteractionPathCheck()
    && !getInitialOptions().e2e_traffic
    && config.canUseCookieForAnalytics
    && passesGeofence
    && getFeatureFlags().sprig_enabled
    && !bellFeedAPIInstance
  )
}

// Export aliases to maintain backward compatibility
export const $z = shouldEnableSprigAnalytics
export const YZ = generateHashId
