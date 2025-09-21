import { useRouteStateInstance } from '../figma_app/321395'
import { ResourceHubInternalSearchRoute, ResourceHubSearchRoute, SearchRouteWithCommunity } from '../figma_app/600006'

/**
 * Original function: $$a2
 * Gets the active search route, checking ResourceHubSearchRoute, ResourceHubInternalSearchRoute, or SearchRouteWithCommunity.
 * @returns The first active route state or null if none are active.
 */
export function getActiveSearchRouteWithCommunity(): ReturnType<typeof useRouteStateInstance> {
  const resourceHubSearch = useRouteStateInstance(ResourceHubSearchRoute)
  const resourceHubInternalSearch = useRouteStateInstance(ResourceHubInternalSearchRoute)
  const searchWithCommunity = useRouteStateInstance(SearchRouteWithCommunity)
  return resourceHubSearch || resourceHubInternalSearch || searchWithCommunity || null
}

/**
 *
 * Original function: $$s0
 * Gets the active Resource Hub search route, checking ResourceHubSearchRoute or ResourceHubInternalSearchRoute.
 * @returns The first active route state or null if none are active.
 */
export function getActiveResourceHubSearchRoute(): ReturnType<typeof useRouteStateInstance> {
  const resourceHubSearch = useRouteStateInstance(ResourceHubSearchRoute)
  const resourceHubInternalSearch = useRouteStateInstance(ResourceHubInternalSearchRoute)
  return resourceHubSearch || resourceHubInternalSearch || null
}

/**
 * Original function: $$o1
 * Gets the active Resource Hub search route, checking ResourceHubSearchRoute or ResourceHubInternalSearchRoute.
 * @returns The first active route state or null if none are active.
 */
export function getActiveResourceHubSearchRouteStrict(): ReturnType<typeof useRouteStateInstance> {
  const resourceHubSearch = useRouteStateInstance(ResourceHubSearchRoute)
  const resourceHubInternalSearch = useRouteStateInstance(ResourceHubInternalSearchRoute)
  return resourceHubSearch || resourceHubInternalSearch
}

// Refactored exports to match new function names
export const UX = getActiveResourceHubSearchRoute
export const e3 = getActiveResourceHubSearchRouteStrict
export const v$ = getActiveSearchRouteWithCommunity
