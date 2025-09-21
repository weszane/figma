import { useSelector } from 'react-redux'
import { customHistory } from '../905/612521'
import { getActiveResourceHubSearchRoute } from '../figma_app/455722'
import { ResourceHubInternalSearchRoute, ResourceHubSearchRoute } from '../figma_app/600006'
import { parseSearchRoute } from '../figma_app/640564'
import { matchPath, useLocation } from '../vendor/130505'

/**
 * Extracts searchSessionId from location state if present.
 * Original: function d(e)
 * @param state - The location state object.
 * @returns The searchSessionId if available, otherwise undefined.
 */
function getSearchSessionIdFromState(state: any): string | undefined {
  if (state && 'searchSessionId' in state) {
    return state.searchSessionId
  }
}

/**
 * Extracts search session ID from search state with conditions.
 * Original: function c(e, t, r = !1)
 * @param state - The state object containing search.
 * @param isResourceHubRoute - Whether it's a resource hub route.
 * @param force - Force return even if conditions not met.
 * @returns The session ID if conditions are met, otherwise undefined.
 */
function getSearchSessionIdFromSearch(state: any, isResourceHubRoute: boolean, force: boolean = false): string | undefined {
  if ('search' in state && state.search.sessionId && (parseSearchRoute() || isResourceHubRoute || force)) {
    return state.search.sessionId
  }
}

/**
 * Gets the current search session ID from history or state.
 * Original: export function $$u3(e, t = !1)
 * @param state - The Redux state.
 * @param force - Force fallback to search session ID.
 * @returns The search session ID.
 */
export function getCurrentSearchSessionId(state: any, force: boolean = false): string | undefined {
  const isResourceHubRoute = !!matchPath(customHistory.location.pathname, {
    path: [ResourceHubSearchRoute.path, ResourceHubInternalSearchRoute.path],
  })
  return getSearchSessionIdFromState(customHistory.location.state) || getSearchSessionIdFromSearch(state, isResourceHubRoute, force)
}

/**
 * Gets search session ID using hooks and selector.
 * Original: export function $$p1(e = !1)
 * @param force - Force return from selector.
 * @returns The search session ID.
 */
export function getSearchSessionIdFromSelector(force: boolean = false): string | undefined {
  const sessionIdFromLocation = getSearchSessionIdFromState(useLocation().state)
  const isResourceHubRoute = !!getActiveResourceHubSearchRoute()
  const sessionIdFromSelector = useSelector((state: any) => getSearchSessionIdFromSearch(state, isResourceHubRoute, force))
  return sessionIdFromLocation || sessionIdFromSelector
}

/**
 * Gets the current query ID from selector.
 * Original: export function $$_0()
 * @returns The query ID if conditions met, otherwise undefined.
 */
export function getCurrentQueryId(): string | undefined {
  const isResourceHubRoute = !!getActiveResourceHubSearchRoute()
  const isParsedSearchRoute = !!parseSearchRoute()
  return useSelector((state: any) => {
    if ('search' in state && state.search.queryId) {
      return isParsedSearchRoute || isResourceHubRoute ? state.search.queryId : undefined
    }
  }) ?? undefined
}

/**
 * Extracts query ID from state with conditions.
 * Original: export function $$h2(e)
 * @param state - The state object.
 * @returns The query ID if conditions met, otherwise undefined.
 */
export function getQueryIdFromState(state: any): string | undefined {
  const isResourceHubRoute = !!matchPath(customHistory.location.pathname, {
    path: [ResourceHubSearchRoute.path, ResourceHubInternalSearchRoute.path],
  })
  const isParsedSearchRoute = !!parseSearchRoute()
  if ('search' in state && state.search.queryId && (isParsedSearchRoute || isResourceHubRoute)) {
    return state.search.queryId || undefined
  }
}

// Refactored exports with meaningful names
export const BY = getCurrentQueryId
export const Jm = getSearchSessionIdFromSelector
export const Ux = getQueryIdFromState
export const wr = getCurrentSearchSessionId
