import { useSelector } from "react-redux"
import { getFeatureFlags } from "../905/601108"

import { FPlanNameType } from "../figma_app/191312"

// Renamed variables, added types, simplified logic, improved readability
interface UserPlan {
  tier?: FPlanNameType
}

interface UserAccessInfo {
  plan?: UserPlan
  canAccessFullDevMode?: boolean
  teamId?: string
  libraryKey?: string
}

interface LibraryState {
  components: {
    [teamId: string]: {
      [libraryKey: string]: any[]
    }
  }
}

interface ReduxState {
  library: LibraryState
}

/**
 * Checks if the user has access to component browser features
 * Based on feature flags, user plan tier, and dev mode access
 *
 * Original function name: $$o1
 */
export function checkComponentBrowserAccess(user: UserAccessInfo, hasPublishedComponents: boolean): boolean {
  const eligiblePlanTiers = [FPlanNameType.ORG, FPlanNameType.ENTERPRISE]
  const userPlanTier = user?.plan?.tier
  const isFeatureEnabled = (getFeatureFlags().dt_component_browser ?? false)
    && hasPublishedComponents
    && !!user?.canAccessFullDevMode
  const hasEligiblePlan = !!userPlanTier && eligiblePlanTiers.includes(userPlanTier)

  return isFeatureEnabled && hasEligiblePlan
}

/**
 * Checks if the user has published components in their library
 *
 * Original function name: $$l0
 */
export function checkUserHasPublishedComponents(user: UserAccessInfo): boolean {
  const hasPublishedComponents = (function (userInfo: UserAccessInfo): boolean {
    const publishedByLibraryKey = useSelector((state: ReduxState) => state.library.publishedByLibraryKey)

    if (!userInfo) {
      return false
    }

    const teamId = userInfo.teamId
    const libraryKey = userInfo.libraryKey

    return !!teamId
      && !!libraryKey
      && Object.keys(publishedByLibraryKey.components[teamId]?.[libraryKey] ?? []).length > 0
  })(user)

  return checkComponentBrowserAccess(user, hasPublishedComponents)
}

export const Dl = checkUserHasPublishedComponents
export const wm = checkComponentBrowserAccess
