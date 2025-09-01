import type { InitialOptions } from '../../types/global'
import { getGlobalThis } from '../905/841449'

/**
 * Key used for storing feature flag overrides in localStorage.
 * (Original: $$r0)
 */
export const FEATURE_FLAG_OVERRIDES_KEY = 'figma_ff_overrides'

/**
 * Checks if two objects have the same keys.
 * (Original: anonymous function inside a)
 * @param obj1 - First object to compare.
 * @param obj2 - Second object to compare.
 * @returns True if both objects have the same keys, false otherwise.
 */
function haveSameKeys(obj1: Record<string, unknown>, obj2: Record<string, unknown>): boolean {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length)
    return false
  const keySet2 = new Set(keys2)
  for (const key of keys1) {
    if (!keySet2.has(key))
      return false
  }
  return true
}

/**
 * Retrieves the feature flags, applying any localStorage overrides if present and valid.
 * (Original: a)
 * @returns The merged feature flags object.
 */
export const getInternalFeatureFlags = (() => {
  const globalThisObj = getGlobalThis()
  // Deep clone to avoid mutation
  const initialFlags: Record<string, unknown> = JSON.parse(
    JSON.stringify(globalThisObj?.INITIAL_OPTIONS?.feature_flags || {}),
  )
  let overrideFlags: Record<string, boolean> = {}

  try {
    if (
      initialFlags.internal_only_debug_tools
      || initialFlags.internal_prototyping_debug_tool
    ) {
      const stored = localStorage.getItem(FEATURE_FLAG_OVERRIDES_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        const isExpired = parsed.expiration && parsed.expiration < Date.now()
        const keysChanged
          = parsed.prevWindowFlags
            && !haveSameKeys(initialFlags, parsed.prevWindowFlags)

        if (isExpired || keysChanged) {
          localStorage.removeItem(FEATURE_FLAG_OVERRIDES_KEY)
        }
        else {
          overrideFlags = parsed.flags
        }
      }
    }
  }
  catch (err) {
    console.error(
      'Error reading localStorage for feature flag overrides',
      err,
    )
  }

  const mergedFlags = {
    ...initialFlags,
    ...overrideFlags,
  }
  // Always set campfire to true if present
  mergedFlags.campfire = !!mergedFlags.campfire
  Object.freeze(mergedFlags)
  return mergedFlags as InitialOptions['feature_flags']
})()

/**
 * Returns the current feature flags.
 * (Original: $$s1)
 */
export function getFeatureFlags(): InitialOptions['feature_flags'] {
  return getInternalFeatureFlags
}

/**
 * Exported alias for getFeatureFlags.
 * (Original: k)
 */
export const k = getFeatureFlags
