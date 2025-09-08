import { setTag } from '@sentry/browser'
import { createCookieManager } from '../905/414007'
import { getStorage } from '../905/657224'

// Constants for cookie and storage keys (s, o)
const COOKIE_KEY = 'figma.reporting'
const STORAGE_KEY = 'user.plan.max'

/**
 * Sets the Sentry tag for the user's plan.
 * @param plan - The user's plan value to set as a tag.
 * (Original: $$l0)
 */
export function setUserPlanTag(plan?: string): void {
  if (plan) {
    setTag(STORAGE_KEY, plan)
  }
}

/**
 * Retrieves and processes the user plan from cookies and storage.
 * Handles migration and cleanup of cookie data.
 * (Original: $$d1)
 */
export function getUserPlan(): string | undefined {
  const cookieManager = createCookieManager()
  if (!cookieManager)
    return

  const cookieValue = cookieManager.get(COOKIE_KEY)
  if (cookieValue) {
    let parsed: { uhp?: string } | undefined
    try {
      parsed = JSON.parse(atob(cookieValue))
    }
    catch {
      cookieManager.delete(COOKIE_KEY)
      return
    }

    if (parsed?.uhp) {
      getStorage().set(STORAGE_KEY, parsed.uhp)
    }

    cookieManager.delete(COOKIE_KEY)
    cookieManager.set(
      COOKIE_KEY,
      btoa(JSON.stringify(parsed)),
      { path: '/api/figment-proxy/monitor' },
    )
  }

  return getStorage().get(STORAGE_KEY)
}

// Exported names updated for clarity and traceability
export const C = setUserPlanTag
export const T = getUserPlan
