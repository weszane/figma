import { trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'

/**
 * Tracks authentication-related analytics events.
 *
 * @param eventSubtype - The subtype of the authentication event.
 * @param origin - The origin of the event.
 * @param extraData - Additional event data.
 * @param options - Analytics tracking options.
 */
export function trackAuthEvent(eventSubtype: string, origin: string, extraData: Record<string, unknown> = {}, options: Record<string, unknown> = {}): void {
  // $$a0 original function
  trackEventAnalytics(
    'Auth Actions',
    {
      eventSubtype,
      origin,
      googleFedCmEnabled: getFeatureFlags().google_federated_cm ?? false,
      cookiesAllowed: !!navigator.cookieEnabled,
      ...extraData,
    },
    {
      batchRequest: false,
      ...options,
    },
  )
}

// Export with refactored name for clarity and maintainability
export const g = trackAuthEvent
