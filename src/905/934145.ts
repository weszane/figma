import { getValueOrFallback } from '../905/872825'
import { captureRouteEvent, concatStrings, RouteState } from '../figma_app/321395'
import { UserProfileTab } from '../figma_app/707808'
import { parseFuidQuery, RESOURCE_ROUTE, toResourceParams, toRouteParams } from '../figma_app/979714'

/**
 * ProfileRouteState - Handles routing for user profile pages.
 */
export class ProfileRouteState extends RouteState {
  static displayName = 'ProfileRoute'
  static path = '/@:profileHandle/:tabView?'

  /**
   * Deserialize route parameters for ProfileRouteState.
   * @param params - Route parameters.
   */
  static deserializeParams(params: any) {
    return {
      profileHandle: params.profileHandle,
      tabView: getValueOrFallback(params.tabView, UserProfileTab),
    }
  }

  /**
   * Serialize route parameters for ProfileRouteState.
   * @param params - Route parameters.
   */
  static serializeParams(params: any) {
    return params
  }
}
captureRouteEvent(ProfileRouteState)

/**
 * Generates a profile route href based on tab and profile handle.
 * @param profileHandle - The user's profile handle.
 * @param tabView - The tab view to display.
 * @param profileData - Additional profile data.
 * @returns Route href string.
 */
export function getProfileRouteHref(
  profileHandle: string,
  tabView: UserProfileTab,
  profileData?: { community_profile_handle?: string },
): string {
  // $$d0
  if (
    tabView === UserProfileTab.RESOURCES
    || (tabView === UserProfileTab.METRICS && profileData?.community_profile_handle !== profileHandle)
  ) {
    return new ProfileRouteState({ profileHandle }).href
  }
  return new ProfileRouteState({ profileHandle, tabView }).href
}

/**
 * ResourceHubProfileRouteState - Handles routing for resource hub profile pages.
 */
export class ResourceHubProfileRouteState extends RouteState {
  static displayName = 'ResourceHubProfileRoute'
  static path = concatStrings(RESOURCE_ROUTE, '/community/@:profileHandle')

  /**
   * Serialize route parameters for ResourceHubProfileRouteState.
   * @param params - Route parameters.
   */
  static serializeParams(params: any) {
    return {
      ...toResourceParams(params),
      profileHandle: params.profileHandle,
    }
  }

  /**
   * Deserialize route parameters for ResourceHubProfileRouteState.
   * @param params - Route parameters.
   */
  static deserializeParams(params: any) {
    return {
      ...toRouteParams(params),
      profileHandle: params.profileHandle,
    }
  }

  /**
   * Parse query string for ResourceHubProfileRouteState.
   * @param query - Query string.
   */
  static parseQueryString(query: any) {
    return {
      ...parseFuidQuery(query),
    }
  }
}
captureRouteEvent(ResourceHubProfileRouteState)

// Export refactored route states and helpers
// export const ProfileRoute = ProfileRouteState // $$l2
export const $$u1 = ResourceHubProfileRouteState // $$u1
export const bL = getProfileRouteHref // bL
export const qL = ResourceHubProfileRouteState // qL
export const xn = ProfileRouteState // xn
