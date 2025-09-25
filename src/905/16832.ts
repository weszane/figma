import { useSelector } from 'react-redux'
import { searchInputAtom } from '../905/61477'
import { OM, wf } from '../905/124270'
import { trackEventAnalytics } from '../905/449184'
import { useAtomWithSubscription } from '../figma_app/27355'

/**
 * Handles tracking analytics for facet query results.
 * Original function name: $$l0
 */
export function setupFacetQueryAnalytics() {
  // Subscribe to required atoms and selectors
  const facetSessionId = useAtomWithSubscription(OM)
  const facetQueryId = useAtomWithSubscription(wf)
  const searchQuery = useAtomWithSubscription(searchInputAtom)
  const sessionId = useSelector<AppState>(state => state.search.sessionId)
  const queryId = useSelector<AppState>(state => state.search.queryId)

  /**
   * Tracks a facet query result event.
   * @param facetQuery - The query for the facet.
   * @param facetType - The type of the facet.
   * @param facetEntrypoint - The entrypoint for the facet.
   */
  return (
    facetQuery: string,
    facetType: string,
    facetEntrypoint: string,
  ) => {
    trackEventAnalytics('facet_query_result', {
      session_id: sessionId,
      query_id: queryId,
      query: searchQuery,
      facet_session_id: facetSessionId,
      facet_query_id: facetQueryId,
      facet_query: facetQuery,
      facet_entrypoint: facetEntrypoint,
      facet_type: facetType,
    })
  }
}

// Export with refactored name
export const P = setupFacetQueryAnalytics
