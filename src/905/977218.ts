import { createActionCreator } from '../905/73481'
import { searchAPIHandler } from '../905/144933'
import { resolveMessage } from '../905/231762'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { deepEqual } from '../905/382883'
import { SearchAnalytics } from '../905/574958'
import { getFeatureFlags } from '../905/601108'
import { PerfTimer } from '../905/609396'
import { setupLoadingStateHandler } from '../905/696711'
import { sendWithRetry, XHRError } from '../905/910117'
import { debounce } from '../905/915765'
import { convertFilterKeysToApiParams, DEFAULT_PAGE_SIZE, PublicModelType, SearchTypeMode, SortingCriteria, SpaceAccessType, TeamSortField } from '../figma_app/162807'
import { trackFileBrowserPlanFilterSelected } from '../figma_app/314264'
import { isCommunitySearchView } from '../figma_app/740025'
import { generateSessionId, searchEndSession, searchIncrementQueryCount, searchRestoreSession, searchSelected, searchSessionEnteredSearchView, searchSessionEnteredSearchViewViaEnter, searchSessionSeeMoreClick, searchStartSession } from '../figma_app/925970'

// --- All original code preserved below ---

/**
 * Thunk to update recent searches without sorting
 * @param context - Redux context with dispatch and getState
 * @param payload - Parameters containing orgId, searchQuery, and previousSearches
 */
export let updateRecentSearchesThunk = createOptimistThunk(async (context, payload: {
  orgId: string
  searchQuery: string
  previousSearches: Array<{ query: string, timestamp: string }>
}) => {
  const { orgId, searchQuery, previousSearches } = payload
  const { getState } = context

  // Guard clause for user authentication
  if (!getState().user?.id) {
    return
  }

  // Filter out existing search query and update recent searches
  const filteredSearches = previousSearches.filter(search => search.query !== searchQuery)

  try {
    await sendWithRetry.put('/api/recent_search', {
      org_id: orgId,
      searches: filteredSearches,
    })
  }
  catch (error) {
    console.error(`Failed to add search history with error: ${error.data.message}`)
  }
})

/**
 * Thunk to update recent searches with sorting by timestamp
 * @param context - Redux context with dispatch and getState
 * @param payload - Parameters containing searchQuery and previousSearches
 */
export let updateRecentSearchesWithSortThunk = createOptimistThunk(async (context, payload: {
  searchQuery: string
  previousSearches: Array<{ query: string, timestamp: string }>
}) => {
  const { searchQuery, previousSearches } = payload
  const { getState } = context
  const state = getState()
  const userId = state.user?.id
  const orgId = state.currentUserOrgId
  const isCommunityView = isCommunitySearchView(state.selectedView)

  // Guard clause for user authentication or community view
  if (!userId || isCommunityView) {
    return
  }

  // Filter out existing search query
  let updatedSearches = previousSearches.filter(search => search.query !== searchQuery)

  // Add new search with current timestamp
  const newSearch = {
    query: searchQuery,
    timestamp: new Date().getTime().toString(),
  }
  updatedSearches.push(newSearch)

  // Sort by timestamp (newest first) and limit to default page size
  updatedSearches.sort((a, b) => parseInt(b.timestamp) - parseInt(a.timestamp))
  updatedSearches = updatedSearches.slice(0, DEFAULT_PAGE_SIZE)

  try {
    await sendWithRetry.put('/api/recent_search', {
      org_id: orgId,
      searches: updatedSearches,
    })
  }
  catch (error) {
    console.error(`Failed to add search history with error: ${error.message}`)
  }
})

/**
 * Thunk to handle search parameter changes
 * @param context - Redux context with dispatch and getState
 * @param payload - Search parameters
 */
export let handleSearchParameterChangeThunk = createOptimistThunk((context, payload: any) => {
  const { dispatch, getState } = context
  const previousParameters = getState().search.parameters
  const searchTypeBehavior = payload.searchTypeBehavior

  // Remove searchTypeBehavior from payload before dispatching
  delete payload.searchTypeBehavior

  dispatch(searchSetParametersAction({
    ...payload,
  }))

  const state = getState()
  const currentParameters = state.search.parameters

  // Track model or scope change if applicable
  if (
    currentParameters.query === previousParameters.query
    && (currentParameters.searchModelType !== previousParameters.searchModelType
      || currentParameters.searchScope !== previousParameters.searchScope)
  ) {
    SearchAnalytics.Session.trackModelOrScopeChange(
      payload.searchModelType,
      payload.searchScope,
    )
  }

  // Load search results if needed
  if (
    !state.search.responses
    || state.search.responses[currentParameters.searchModelType] !== null
    || !deepEqual(previousParameters, currentParameters)
  ) {
    dispatch(loadSearchResultsThunk({
      precacheInactiveTypes: true,
      searchTypeBehavior,
    }))
  }
})

/**
 * Thunk to track license group filter dropdown clicks
 * @param context - Redux context with dispatch and getState
 * @param payload - Parameters containing clickType
 */
export let trackLicenseGroupFilterDropdownClickThunk = createOptimistThunk((context, payload: {
  clickType: string
}) => {
  const { getState } = context
  const state = getState()
  SearchAnalytics.Session.trackLicenseGroupFilterDropdownClick(state.search, payload.clickType)
})

/**
 * Thunk to clear plan filter
 * @param context - Redux context with dispatch and getState
 */
export let clearPlanFilterThunk = createOptimistThunk((context) => {
  const { dispatch, getState } = context
  const state = getState()
  if (state.search.parameters.planFilter !== null) {
    dispatch(loadSearchResultsThunk({
      parameters: {
        planFilter: null,
        workspaceFilter: null,
      },
      precacheInactiveTypes: true,
    }))
  }
})

/**
 * Thunk to select plan filter
 * @param context - Redux context with dispatch and getState
 * @param payload - Parameters containing planFilter
 */
export let selectPlanFilterThunk = createOptimistThunk((context, payload: {
  planFilter: string
}) => {
  const { dispatch, getState } = context
  const state = getState()
  if (state.search.parameters.planFilter !== payload.planFilter) {
    trackFileBrowserPlanFilterSelected(payload.planFilter, 'search', undefined)
    dispatch(loadSearchResultsThunk({
      parameters: {
        ...payload,
        workspaceFilter: null,
      },
      precacheInactiveTypes: true,
    }))
  }
})

export let searchResetFileTypeFilterAction = createActionCreator('SEARCH_RESET_FILE_TYPE_FILTER')

export let clearWorkspaceFilterThunk = createOptimistThunk((context) => {
  const { dispatch, getState } = context
  let t = getState()
  if (t.search.parameters.workspaceFilter !== null) {
    SearchAnalytics.Session.trackWorkspaceFilterChange(t.search, null)
    dispatch(loadSearchResultsThunk({
      parameters: {
        workspaceFilter: null,
      },
      precacheInactiveTypes: !0,
    }))
  }
})

export let selectWorkspaceFilterThunk = createOptimistThunk((context, payload) => {
  const { dispatch, getState } = context
  let i = getState()
  if (i.search.parameters.workspaceFilter !== payload.workspaceFilter) {
    SearchAnalytics.Session.trackWorkspaceFilterChange(i.search, payload.workspaceFilter)
    dispatch(loadSearchResultsThunk({
      parameters: {
        ...payload,
      },
      precacheInactiveTypes: !0,
    }))
  }
})

export let sortStateThunk = createOptimistThunk((context, payload) => {
  const { dispatch, getState } = context
  let i = getState()
  let n = i.search.parameters.sortState
  if (n && JSON.stringify(n) !== JSON.stringify(payload.sortState)) {
    if (shouldSortByOwner(n, payload.sortState)) {
      sortFilesByOwner(payload.sortState, i)
      dispatch(searchSetParametersAction(payload))
      dispatch(setResponseSortStateAction(payload.sortState))
      return
    }
    dispatch(loadSearchResultsThunk({
      parameters: {
        ...payload,
      },
      precacheInactiveTypes: !1,
    }))
  }
})

/**
 * Sorts files by owner's handle in the search results
 * @param sortState - Current sort state configuration
 * @param state - Redux state containing search responses
 */
function sortFilesByOwner(sortState: any, state: any) {
  const results = state.search.responses.files?.results
  if (results) {
    results.sort((a: any, b: any) =>
      a.model.owner?.handle.localeCompare(b.model.owner?.handle ?? '') ?? 0,
    )
    if (sortState.files.sortDesc) {
      results.reverse()
    }
  }
}

/**
 * Determines if sorting by owner is required based on sort state changes
 * @param previousSortState - Previous sort state
 * @param currentSortState - Current sort state
 * @returns Boolean indicating if owner-based sorting is needed
 */
function shouldSortByOwner(previousSortState: any, currentSortState: any): boolean {
  return currentSortState.files.sortKey === TeamSortField.OWNER
    && (previousSortState.files.sortKey !== currentSortState.files.sortKey
      || previousSortState.files.sortDesc !== currentSortState.files.sortDesc)
}

/**
 * Thunk to handle search operations with debouncing and session management
 * @param context - Redux context with dispatch and getState
 * @param payload - Search parameters and options
 */
export const searchThunk = createOptimistThunk((context, payload) => {
  const { dispatch, getState } = context

  const executeSearch = () => {
    const tokenizeQuery = (query: string) => query.trim().split(/\s+/)
    const currentQueryTokens = tokenizeQuery(getState().search.parameters.query)
    const newQueryTokens = tokenizeQuery(payload.query)
    const currentFacetFilters = getState().search.parameters.facetFilters
    const newFacetFilters = payload.facetFilters ?? null
    const isFullResultsView = isSearchView(getState().selectedView.view) || !!payload.overrideIsFullResultsView
    const shouldProceedWithSearch = isFullResultsView || payload.query.length < 500

    // Early return if search parameters haven't changed significantly
    if (shouldProceedWithSearch
      && JSON.stringify(currentQueryTokens) === JSON.stringify(newQueryTokens)
      && !payload.forceRefreshSearchResults
      && deepEqual(currentFacetFilters, newFacetFilters)) {
      dispatch(handleSearchParameterChangeThunk({
        searchModelType: payload.searchModelType,
        searchScope: payload.searchScope,
        searchTypeBehavior: payload.searchTypeBehavior,
      }))
      return
    }

    // Update parameters without triggering search for long queries
    if (!shouldProceedWithSearch) {
      dispatch(searchSetParametersAction({
        ...payload,
      }))
      return
    }

    // Ensure search session exists
    if (!getState().search.sessionId) {
      dispatch(startSearchSessionAction({
        entryPoint: 'unattributed',
      }))
      console.error('No search session when changing query')
    }

    // Execute the search
    dispatch(loadSearchResultsThunk({
      parameters: {
        ...payload,
      },
      precacheInactiveTypes: payload.precacheInactiveTypes ?? true,
      searchTypeBehavior: payload.searchTypeBehavior,
      overrideIsFullResultsView: payload.overrideIsFullResultsView,
    }))
  }

  payload.debounce ? debounceSearch(executeSearch) : executeSearch()
})

/**
 * Loads full search results from the API
 * @param sessionId - Current search session ID
 * @param searchModelType - Type of model being searched
 * @param searchParameters - Current search parameters
 * @param orgParams - Organization-related parameters
 * @param context - Redux context
 * @param queryId - Unique query identifier
 * @returns Promise resolving when results are loaded
 */
function loadFullResults(sessionId: string | null, searchModelType: PublicModelType, searchParameters: any, orgParams: any, context: any, queryId: string): Promise<void> {
  if (!sessionId) {
    console.error('We shouldn\'t be searching without setting a sessionId')
  }

  const perfTimer = new PerfTimer('search.timer.unified_search', {})
  perfTimer.start()

  const sortParams = getSortParams(searchModelType, searchParameters.sortState)
  const filterParams = convertFilterKeysToApiParams(searchParameters.facetFilters)

  return new Promise<void>((resolve, reject) => {
    const searchParams = {
      query: searchParameters.query,
      ...sortParams,
      ...getOrgParams(orgParams, true, searchModelType),
      queryId,
      sessionId: sessionId || '',
      ...filterParams,
      searchModelType,
    }

    searchAPIHandler.getFullResults(searchParams).then((response: any) => {
      if (!response.data) {
        reject(getI18nString('search.invalid_search_endpoint_result'))
        return
      }

      const currentSearchModelType = context.getState().search.parameters.facetFilters?.searchModelType ?? PublicModelType.FILES

      if (currentSearchModelType === searchModelType) {
        context.dispatch(setFullResultsSearchResponseAction({
          parameters: {
            ...searchParameters,
          },
          response: {
            ...(response.data?.meta || {}),
            search_model_type: searchModelType,
            metrics: {
              roundTripTime: perfTimer.getElapsedTime(),
            },
          },
          queryId,
        }))

        SearchAnalytics.Session.trackTimeToLoad(context.getState().search)
        resolve()

        // Debug logging for file browser search results
        if (getFeatureFlags().scrub_file_browser_search_results && currentSearchModelType === PublicModelType.FILES) {
          const thumbnailMap: Record<string, any> = {}
          response.data?.meta?.results?.forEach((result: any) => {
            const model = result.model
            thumbnailMap[model.name] = model.preview_thumbnail_urls
          })
          console.log('[Search FB Fragments Debug] Preview thumbnail URLs:', thumbnailMap)
        }
      }
    }, (error) => {
      if (error instanceof XHRError && error.data && error.data.i18n) {
        console.error(error)
        reject(error)
      }
      else {
        console.error(error)
        reject(error)
      }
    }).finally(() => {
      perfTimer.stop()
    })
  })
}

/**
 * Loads preview search results from the API
 * @param sessionId - Current search session ID
 * @param searchParameters - Current search parameters
 * @param reset - Whether to reset existing results
 * @param orgParams - Organization-related parameters
 * @param context - Redux context
 * @param queryId - Unique query identifier
 * @returns Promise resolving when results are loaded
 */
function loadPreviewResults(sessionId: string | null, searchParameters: any, reset: boolean, orgParams: any, context: any, queryId: string): Promise<void> {
  if (!sessionId) {
    console.error('We shouldn\'t be searching without setting a sessionId')
  }

  const perfTimer = new PerfTimer('search.timer.unified_search', {})
  perfTimer.start()
  const filterParams = convertFilterKeysToApiParams(searchParameters.facetFilters)

  return new Promise<void>((resolve, reject) => {
    const searchParams = {
      query: searchParameters.query,
      sort: SortingCriteria.RELEVANCY,
      desc: true,
      ...getOrgParams(orgParams, true),
      queryId,
      sessionId: sessionId || '',
      ...filterParams,
    }

    searchAPIHandler.getPreviewResults(searchParams).then((response: any) => {
      if (!response.data) {
        reject(getI18nString('search.invalid_search_endpoint_result'))
        return
      }

      context.dispatch(setResponsesAction({
        parameters: {
          ...searchParameters,
        },
        responses: response.data?.meta || {},
        queryId,
        reset,
        roundTripTime: perfTimer.getElapsedTime(),
      }))

      SearchAnalytics.Session.trackTimeToLoad(context.getState().search)
      resolve()
    }, (error) => {
      if (error instanceof XHRError && error.data && error.data.i18n) {
        console.error(error)
        reject(error)
      }
      else {
        console.error(error)
        reject(error)
      }
    }).finally(() => {
      perfTimer.stop()
    })
  })
}

let isSearchView = e => e === 'search'

/**
 * Thunk to load search results based on current parameters and view type
 * @param context - Redux context with dispatch and getState
 * @param payload - Search parameters and options
 */
interface LoadSearchResultsPayload {
  parameters?: ObjectOf
  searchTypeBehavior?: SearchTypeMode
  overrideIsFullResultsView?: boolean
  precacheInactiveTypes?: boolean
}

export let loadSearchResultsThunk = createOptimistThunk<any, LoadSearchResultsPayload>((context, payload: LoadSearchResultsPayload) => {
  const { dispatch, getState } = context

  // Update search parameters if provided
  if (payload.parameters !== undefined) {
    dispatch(searchSetParametersAction({
      ...payload.parameters,
    }))
  }

  // Set search type behavior
  dispatch(setSearchTypeBehaviorAction({
    searchTypeBehavior: payload.searchTypeBehavior ?? SearchTypeMode.ONE_TYPE,
  }))

  // Get current state
  const state = getState()
  const searchParameters = state.search.parameters
  const { sessionId } = state.search
  const {
    query,
    searchScope,
    workspaceFilter = null,
    planFilter = null,
    facetFilters,
  } = searchParameters

  // Determine if we're in full results view
  const isFullResultsView = isSearchView(state.selectedView.view) || !!payload.overrideIsFullResultsView

  // Prepare organization parameters
  const orgParams = {
    searchScope,
    currentOrgId: state.currentUserOrgId,
    workspaceId: workspaceFilter,
    planId: planFilter,
  }

  // Early return if no query and no filters
  if ((!query || query.trim() === '') && !facetFilters) {
    dispatch(setFocusAction({
      keepFocus: true,
    }))
    return
  }

  // Generate unique query ID
  const queryId = generateSessionId()

  // Error handler for search requests
  const handleError = (error: any) => {
    if (error.data && error.data.i18n) {
      return resolveMessage(error)
    }
  }

  // Load appropriate results based on view type
  if (isFullResultsView) {
    const searchModelType = searchParameters.facetFilters?.searchModelType ?? PublicModelType.FILES
    const fullResultsPromise = loadFullResults(sessionId, searchModelType, searchParameters, orgParams, context, queryId)
    const loadingKey = loadSearchResultsThunk.loadingKeyForPayload({
      parameters: searchParameters,
    })
    setupLoadingStateHandler(fullResultsPromise, context, loadingKey, handleError)
  }
  else {
    const previewResultsPromise = loadPreviewResults(sessionId, searchParameters, false, orgParams, context, queryId)
    const loadingKey = loadSearchResultsThunk.loadingKeyForPayload({
      parameters: searchParameters,
    })
    setupLoadingStateHandler(previewResultsPromise, context, loadingKey, handleError)
  }
}, ({
  parameters: searchParameters,
}: {
  parameters?: any
}) => `SEARCH_${searchParameters?.query}_${searchParameters?.facetFilters ? JSON.stringify(searchParameters.facetFilters) : ''}_${searchParameters ? JSON.stringify(searchParameters.sortState) : ''}`)
export let searchSelectedAction = searchSelected
export let startSearchSessionAction = searchStartSession
export let searchEndSessionAction = searchEndSession
export let searchRestoreSessionAction = searchRestoreSession
export let searchSessionSeeMoreClickAction = searchSessionSeeMoreClick
export let searchSessionEnteredSearchViewAction = searchSessionEnteredSearchView
export let searchSessionEnteredSearchViewViaEnterAction = searchSessionEnteredSearchViewViaEnter
export let searchIncrementQueryCountAction = searchIncrementQueryCount
export let setSearchTypeBehaviorAction = createActionCreator('SEARCH_SET_SEARCH_TYPE_BEHAVIOR')
export let searchSetScrollTopAction = createActionCreator('SEARCH_SET_SCROLL_TOP')
export let searchSetLastAckedQueryIdAction = createActionCreator('SEARCH_SET_LAST_ACKED_QUERY_ID')
export let searchSetLastLoadedQueryAction = createActionCreator('SEARCH_SET_LAST_LOADED_QUERY')
export let searchSetQueryIdAction = createActionCreator('SEARCH_SET_QUERY_ID')
export let searchSetParametersAction = createActionCreator('SEARCH_SET_PARAMETERS')
export let setResponsesAction = createActionCreator('SEARCH_SET_RESPONSES')
export let setFullResultsSearchResponseAction = createActionCreator('SEARCH_SET_FULL_RESULTS_SEARCH_RESPONSE')
export let setResponseAction = createActionCreator('SEARCH_SET_RESPONSE')

export let setFocusAction = createActionCreator('SEARCH_SET_FOCUS')
export let searchClearQueryAction = createActionCreator('SEARCH_CLEAR_QUERY')
export let searchClearResponsesAction = createActionCreator('SEARCH_CLEAR_RESPONSES')
export let setResponseSortStateAction = createActionCreator('SEARCH_SET_RESPONSE_SORT_STATE')
export let debounceSearch = debounce((e) => {
  e()
}, 400)

/**
 * Gets organization parameters for search API calls based on search scope and model type
 * @param searchParams - Object containing search scope and organization parameters
 * @param isGlobal - Whether the search is global
 * @param searchModelType - Type of model being searched (optional)
 * @returns Object with appropriate organization parameters for the API call
 */
function getOrgParams(
  searchParams: {
    searchScope: SpaceAccessType
    currentOrgId: string
    workspaceId: string | null
    planId: string | null
  },
  isGlobal: boolean,
  searchModelType?: PublicModelType,
): Record<string, any> {
  const { searchScope, currentOrgId, workspaceId, planId } = searchParams

  // Handle non-organization search scopes
  if (searchScope !== SpaceAccessType.ORG && searchScope !== SpaceAccessType.ORG_GUEST) {
    return {
      currentOrgId,
      isGlobal,
      planId: planId === 'NON_ORG_TEAMS' ? null : planId,
      planType: planId === 'NON_ORG_TEAMS' ? 'team' : 'org',
    }
  }

  // Handle  widgets model type
  if (searchModelType && searchModelType === PublicModelType.PRIVATE_WIDGETS) {
    return {
      orgSearch: true,
      currentOrgId,
      isGlobal,
    }
  }

  // Default organization search parameters
  return {
    workspaceId,
    orgId: currentOrgId,
    currentOrgId,
    planId: planId === 'NON_ORG_TEAMS' ? null : planId,
    planType: planId === 'NON_ORG_TEAMS' ? 'team' : 'org',
    isGlobal,
  }
}

/**
 * Extracts sorting parameters for a specific model type from sort state
 * @param modelType - The model type to get sort parameters for
 * @param sortState - Object containing sort configuration for different model types
 * @returns Object with sort and desc parameters, or undefined values if no sort is specified
 */
function getSortParams(
  modelType: PublicModelType,
  sortState: Record<PublicModelType, { sortKey?: string, sortDesc?: boolean }>,
): { sort: string | undefined, desc: boolean | undefined } {
  const modelSortState = sortState[modelType]

  // Return undefined sort parameters if no sort state exists for this model type
  if (!modelSortState) {
    return {
      sort: undefined,
      desc: undefined,
    }
  }

  // Create a clean copy of the sort state with default values
  const cleanSortState = {
    sortKey: undefined,
    sortDesc: undefined,
    ...modelSortState,
  }

  // Return sort parameters if either sort key or direction is specified
  if (cleanSortState.sortKey || cleanSortState.sortDesc) {
    return {
      sort: cleanSortState.sortKey,
      desc: cleanSortState.sortDesc,
    }
  }

  // Return undefined parameters if no sort is specified
  return {
    sort: undefined,
    desc: undefined,
  }
}

// --- Only export assignments refactored below ---

export const $P = loadSearchResultsThunk
export const Dy = startSearchSessionAction
export const H7 = setResponseSortStateAction
export const HI = clearWorkspaceFilterThunk
export const Je = searchSessionEnteredSearchViewViaEnterAction
export const KQ = setResponseAction
export const MB = selectWorkspaceFilterThunk
export const NR = searchRestoreSessionAction
export const Ns = handleSearchParameterChangeThunk
export const PI = searchThunk
export const PP = searchSetScrollTopAction
export const Pj = searchSessionSeeMoreClickAction
export const R7 = setFullResultsSearchResponseAction
export const Rz = searchSetParametersAction
export const W0 = searchSelectedAction
export const Z6 = setFocusAction
export const _z = searchClearQueryAction
export const c3 = selectPlanFilterThunk
export const eK = searchSetQueryIdAction
export const ej = searchSetLastAckedQueryIdAction
export const hS = setSearchTypeBehaviorAction
export const ky = searchEndSessionAction
export const nG = updateRecentSearchesWithSortThunk
export const pY = searchIncrementQueryCountAction
export const qr = searchClearResponsesAction
export const qv = sortStateThunk
export const r0 = searchSessionEnteredSearchViewAction
export const tw = clearPlanFilterThunk
export const uL = updateRecentSearchesThunk
export const vK = searchResetFileTypeFilterAction
export const vj = trackLicenseGroupFilterDropdownClickThunk
export const w2 = searchSetLastLoadedQueryAction
export const zy = setResponsesAction
