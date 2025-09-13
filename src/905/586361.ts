import { isBrowser } from '../905/268204';

/**
 * Cached feature flags object.
 * @original n
 */
let cachedFeatureFlags: Readonly<Record<string, unknown>> | undefined;

/**
 * Returns a frozen object containing feature flags from INITIAL_OPTIONS.
 * If not available, returns an empty frozen object.
 * @original $$a0
 */
export function loadFeatureFlags(): Readonly<Record<string, unknown>> {
  if (!cachedFeatureFlags) {
    const flags = isBrowser && window.INITIAL_OPTIONS?.feature_flags && typeof window.INITIAL_OPTIONS.feature_flags === 'object' ? window.INITIAL_OPTIONS.feature_flags : {};
    cachedFeatureFlags = Object.freeze({
      ...flags
    });
  }
  return cachedFeatureFlags;
}

/** Alias for getFeatureFlags (original Q) */
export const Q = loadFeatureFlags;