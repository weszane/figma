import { getFeatureFlags } from "../905/601108";
import { useHasUserPermissionInOrg } from "../figma_app/543529";
// Origin: 705249.ts
// Changes: Renamed variables and functions for clarity, added type annotations, added comments, improved readability.

// Assumed dependencies:
// - getFeatureFlags(): Returns an object with feature flags, including xr_debounce_threshold (boolean).
// - useHasUserPermissionInOrg(): Returns a boolean indicating if the user has permission in the org.

/**
 * Checks if the XR debounce threshold feature flag is enabled
 * and if the user has permission in the organization.
 */
export function isXrDebounceThresholdEnabledForUser(): boolean {
  const hasPermission: boolean = useHasUserPermissionInOrg();
  const featureFlags = getFeatureFlags();
  // Returns true only if both the feature flag is enabled and the user has permission
  return Boolean(featureFlags.xr_debounce_threshold) && hasPermission;
}

/**
 * Checks if the XR debounce threshold feature flag is enabled.
 */
export function isXrDebounceThresholdEnabled(): boolean {
  const featureFlags = getFeatureFlags();
  return Boolean(featureFlags.xr_debounce_threshold);
}

// Export with original names for compatibility
export const w = isXrDebounceThresholdEnabledForUser;
export const y = isXrDebounceThresholdEnabled;
