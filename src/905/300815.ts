import { trackEventAnalytics } from "../905/449184";
import { $j } from "../vendor/715708";
// Origin: /Users/allen/github/fig/src/905/300815.ts
// Refactored: Renamed variables, added types, simplified logic, added comments and type safety

/**
 * Checks if conditional mediation is available for WebAuthn.
 * Returns true if available, false otherwise.
 */
async function isConditionalMediationAvailable(): Promise<boolean> {
  // PublicKeyCredential may not exist in all browsers
  if (
    typeof window.PublicKeyCredential !== "undefined" &&
    typeof window.PublicKeyCredential.isConditionalMediationAvailable === "function"
  ) {
    return !!(await window.PublicKeyCredential.isConditionalMediationAvailable());
  }
  return false;
}

/**
 * Type for the flow parameter used in analytics tracking.
 * Adjust as needed based on actual usage.
 */
export type PasskeyFlowType = string;

/**
 * Tracks passkey support analytics.
 * @param flow - The
 */
export async function trackPasskeySupport(flow: PasskeyFlowType): Promise<void> {
  trackEventAnalytics(
    "passkey_support",
    {
      flow,
      supports_webauthn: $j(), // Assumed: $j returns boolean indicating WebAuthn support
      supports_mediation: await isConditionalMediationAvailable(),
    },
    {
      batchRequest: false,
    }
  );
}

// Alias for trackPasskeySupport for compatibility with original code
export const p = trackPasskeySupport;

/*
  Assumed dependencies:
  - trackEventAnalytics: imported from "../905/449184"
  - $j: imported from "../vendor/715708", assumed to return boolean for WebAuthn support
*/
