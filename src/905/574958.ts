import { reportError } from '../905/11'
import { qB } from '../905/124270'
import { ServiceCategories } from '../905/165054'
import { trackEventAnalytics } from '../905/449184'
import { localStorageRef } from '../905/657224'
import { OrganizationType } from '../905/833838'
import { ContentPreviewMode, PublicModelType, SearchFieldType, SearchTypeMode } from '../figma_app/162807'
import { trackFileBrowserFileClicked } from '../figma_app/314264'
import { generateSessionId } from '../figma_app/925970'

// Original code: $$n1 - Refactored to SearchAnalytics namespace
// This module handles search analytics, session management, and tracking for the application.
// It includes functions for managing search sessions, analytics tracking, and related utilities.

// Original code: g - Refactored to isViewValid
const isViewValid = (view: any): boolean => !!view.view

// Original code: f - Refactored to SESSION_KEY
const SESSION_KEY = 'search-session'

/**
 * Retrieves the current search session from localStorage.
 * @returns The session object or null if invalid or expired.
 */
export function getSession(): any {
  const stored = localStorageRef?.getItem(SESSION_KEY)
  if (!stored)
    return null
  try {
    const session = JSON.parse(stored)
    if (!session || !session.id || new Date(session.expires).getTime() < Date.now())
      return null
    return session
  }
  catch (error) {
    reportError(ServiceCategories.SEARCH, error)
    return null
  }
}

/**
 * Sets the search session in localStorage.
 * @param id - The session ID.
 * @param entryPoint - The entry point.
 */
function setSession(id: string, entryPoint: string): void {
  const session = {
    id,
    entryPoint,
    expires: Date.now() + 60000, // 1 minute
  }
  localStorageRef?.setItem(SESSION_KEY, JSON.stringify(session))
}

/**
 * Clears the search session from localStorage.
 */
function clearSession(): void {
  localStorageRef?.removeItem(SESSION_KEY)
}

/**
 * Creates or retains a search session.
 * @param entryPoint - The entry point.
 * @returns An object with sessionId and isRetained flag.
 */
function createOrRetainSession(entryPoint: string): { sessionId: string, isRetained: boolean } {
  const sessionId = generateSessionId()
  let isRetained = false
  const existingSession = getSession()
  if (existingSession) {
    if (existingSession.entryPoint !== entryPoint) {
      clearSession()
    }
    else {
      return { sessionId: existingSession.id, isRetained: true }
    }
  }
  setSession(sessionId, entryPoint)
  return { sessionId, isRetained }
}

/**
 * Determines the entry point based on the view.
 * @param view - The view object.
 * @returns The entry point string.
 */
export function getEntryPoint(view: any): string {
  if (!isViewValid(view))
    return view
  switch (view.view) {
    case 'allProjects':
    case 'deletedFiles':
    case 'search':
    case 'orgSelfServe':
    case 'folder':
    case 'orgAdminSettings':
    case 'licenseGroup':
    case 'resourceUnavailable':
    case 'user':
    case 'team':
    case 'teamCreation':
    case 'teamUpgrade':
    case 'addCollaborators':
    case 'promoReview':
    case 'eduReview':
    case 'feed':
    case 'modalInIFrame':
    case 'teamFeed':
    case 'teamAdminConsole':
    case 'recentsAndSharing':
    case 'trashedFolders':
      return 'file_browser'
    case 'communityHub':
      return 'community'
    case 'desktopNewTab':
      return 'desktop_new_tab'
    default:
      return 'unattributed'
  }
}

/**
 * Determines the content preview mode.
 * @param view - The view object.
 * @param entryPoint - The entry point.
 * @returns The content preview mode.
 */
function getContentPreviewMode(view: any, entryPoint: string): ContentPreviewMode {
  if (entryPoint !== 'file_browser')
    return ContentPreviewMode.OUTSIDE_FILE_BROWSER
  return view.view === 'search' ? ContentPreviewMode.FULL_PAGE : ContentPreviewMode.PREVIEW
}

// Original code: $$n1 - Refactored to SearchAnalytics namespace
export const SearchAnalytics = {
  // Original code: Analytics class - Refactored with JSDoc and types
  /**
   * Analytics class for handling search-related tracking.
   */
  Analytics: class {
    state: any
    info: any
    context: any

    constructor(state: any, info: any, context: any) {
      this.state = state
      this.info = info
      this.context = context
    }

    /**
     * Tracks category-specific click events.
     * @param modelType - The model type.
     * @param additionalData - Additional tracking data.
     */
    categorySpecificTrackClick(modelType: PublicModelType, _additionalData: any): void {
      if (modelType === PublicModelType.FILES) {
        const file = this.info.result.model
        trackEventAnalytics('Open File Click', {
          fileKey: file.key,
          fileRepoId: file.file_repo_id,
          uiSelectedView: 'search',
        })
        trackFileBrowserFileClicked(file.key, {
          selectedViewName: 'search',
        })
      }
    }

    /**
     * Updates the analytics state.
     * @param state - New state.
     * @param info - New info.
     * @param context - New context.
     */
    update(state: any, info: any, context: any): void {
      this.state = state
      this.info = info
      this.context = context
    }

    /**
     * Tracks a click event.
     * @param modelType - The model type.
     * @param view - The view.
     * @param additionalData - Additional data.
     * @param planFilter - Plan filter.
     */
    click(modelType: PublicModelType, view: any, additionalData: any, planFilter: string): void {
      const response = this.state.responses ? this.state.responses[modelType] : null
      if (!response) {
        console.error('Cannot record click event on null response')
        return
      }
      const entryPoint = getEntryPoint(view)
      const previewMode = getContentPreviewMode(view, entryPoint)
      const { position, resource_id, resource_type, matched_queries, result } = this.info
      const additionalInfo = qB()
      let fileInCurrentPlan: boolean | undefined
      if (modelType === PublicModelType.FILES && this.context?.plan) {
        const { plan } = this.context
        const file = result.model
        fileInCurrentPlan = plan.plan_type === OrganizationType.ORG
          ? file.parent_org_id === plan.plan_id
          : file.team_id === plan.plan_id
      }
      const previewThumbnails = modelType === PublicModelType.FILES && 'preview_thumbnail_urls' in result.model
        ? result.model.preview_thumbnail_urls ?? []
        : []
      trackEventAnalytics('search_result_clicked', {
        session_id: this.state.lastLoadedQuery.sessionId,
        query_id: this.state.lastLoadedQuery.queryId,
        position: position + 1,
        entry_point: entryPoint,
        file_browser_entry_point: previewMode,
        plan_filter_id: planFilter,
        plan_filter_type: planFilter === 'NON_ORG_TEAMS' ? 'team' : 'org',
        version: 3,
        query: this.state.lastLoadedQuery.query,
        scope: this.state.parameters.searchScope || null,
        ...SearchAnalytics.getResponseInfo(response, modelType),
        resource_id,
        resource_type,
        matched_queries: matched_queries || [],
        action: 'click',
        ...additionalData,
        ...additionalInfo,
        file_in_current_plan: fileInCurrentPlan,
        num_fragments: previewThumbnails.length,
      })
      this.categorySpecificTrackClick(modelType, additionalData)
    }
  },

  // Original code: t - Refactored to getQueryInfo
  /**
   * Extracts query information from the state.
   * @param state - The state object.
   * @param modelType - The model type.
   * @returns Query info object.
   */
  getQueryInfo: (state: any, modelType: string) => {
    const sortState = state?.responseSortState
    const sortInfo = sortState && modelType in sortState ? sortState[modelType] : {}
    return {
      query: state.parameters.query,
      sortKey: sortInfo.sortKey || null,
      sortDesc: sortInfo.sortDesc || null,
      scope: state.parameters.searchScope || null,
      workspaceId: state.parameters.workspaceFilter,
    }
  },

  // Original code: i - Refactored to getResponseInfo
  /**
   * Extracts response information.
   * @param response - The response object.
   * @param modelType - The model type.
   * @returns Response info object.
   */
  getResponseInfo: (response: any, modelType: string) => {
    let deepSearchStartPosition: number | null = null
    for (let i = 0; i < response.results.length; i++) {
      const result = response.results[i]
      if (result.matched_queries?.includes(SearchFieldType.DEEP_SEARCH_TEXT)) {
        deepSearchStartPosition = i
        break
      }
    }
    return {
      category: modelType,
      time: response.metrics?.roundTripTime || null,
      count: response.results.length,
      deep_search_start_position: deepSearchStartPosition !== null ? deepSearchStartPosition + 1 : null,
    }
  },

  // Original code: ClickAction enum
  ClickAction: {
    CLICK: 'click',
    CONTEXT_CLICK: 'context-click',
    ENTER: 'enter-key',
  },

  // Original code: Session namespace
  Session: {
    /**
     * Tracks time to load for search.
     * @param state - The state object.
     */
    trackTimeToLoad: (state: any) => {
      let slowestType: string
      let time: number
      const { parameters, responses, searchTypeBehavior } = state
      switch (searchTypeBehavior) {
        case SearchTypeMode.ALL_TYPES_BLOCKING:
          time = 0
          slowestType = parameters.searchModelType
          for (const type in responses) {
            const roundTripTime = responses[type]?.metrics.roundTripTime
            if (roundTripTime && roundTripTime > time) {
              time = roundTripTime
              slowestType = type
            }
          }
          break
        case SearchTypeMode.ONE_TYPE:
        case SearchTypeMode.ALL_TYPES_STREAMING:
          time = responses[parameters.searchModelType]?.metrics.roundTripTime
          slowestType = parameters.searchModelType
          break
        default:
          return
      }
      if (time !== undefined) {
        trackEventAnalytics('search_time_to_load', {
          sessionId: state.sessionId,
          queryId: state.queryId,
          searchModelType: slowestType,
          elapsedTime: time,
          searchTypeBehavior,
        })
      }
    },

    /**
     * Selects a search session.
     * @param state - The state object.
     * @param options - Options with entryPoint.
     * @returns Updated state.
     */
    select: (state: any, options: { entryPoint: string }) => {
      if (state.sessionId)
        return state
      const { sessionId, isRetained } = createOrRetainSession(options.entryPoint)
      trackEventAnalytics('search_selected', {
        session_id: sessionId,
        entry_point: options.entryPoint,
      })
      const queryCount = isRetained ? state.queryCount : 0
      return { ...state, sessionId, queryCount }
    },

    /**
     * Starts a search session.
     * @param state - The state object.
     * @param options - Options with entryPoint.
     * @returns Updated state.
     */
    start: (state: any, options: { entryPoint: string }) => {
      if (state.sessionId)
        return state
      const { sessionId, isRetained } = createOrRetainSession(options.entryPoint)
      trackEventAnalytics('search_start', {
        session_id: sessionId,
        entry_point: options.entryPoint,
        plan_filter_id: state.parameters.planFilter,
        plan_filter_type: state.parameters.planFilter === 'NON_ORG_TEAMS' ? 'team' : 'org',
      })
      const queryCount = isRetained ? state.queryCount : 0
      return { ...state, sessionId, queryCount }
    },

    /**
     * Increments the query count.
     * @param state - The state object.
     * @returns Updated state.
     */
    incrementQueryCount: (state: any) => ({ ...state, queryCount: state.queryCount + 1 }),

    /**
     * Tracks entering search view.
     * @param state - The state object.
     * @param entryPoint - The entry point.
     */
    enterSearchView: (state: any, entryPoint: string) => {
      trackEventAnalytics('search_enter_search_view', {
        session_id: state.sessionId,
        entry_point: entryPoint,
      })
    },

    /**
     * Tracks entering search view via enter key.
     * @param state - The state object.
     * @param entryPoint - The entry point.
     */
    enterSearchViewViaEnter: (state: any, entryPoint: string) => {
      trackEventAnalytics('search_enter_search_view_via_enter', {
        session_id: state.sessionId,
        entry_point: entryPoint,
      })
    },

    /**
     * Tracks search modal exit.
     * @param state - The state object.
     */
    searchModalExit: (state: any) => {
      trackEventAnalytics('search_modal_exit', {
        session_id: state.sessionId,
      })
    },

    /**
     * Tracks search query typed.
     * @param sessionId - The session ID.
     * @param view - The view.
     * @param query - The query string.
     */
    trackSearchQueryTyped: (sessionId: string, view: any, query: string) => {
      const entryPoint = getEntryPoint(view)
      const previewMode = getContentPreviewMode(view, entryPoint)
      trackEventAnalytics('search_query_typed', {
        session_id: sessionId,
        query,
        entry_point: entryPoint,
        file_browser_entry_point: previewMode,
      })
    },

    /**
     * Tracks model or scope change.
     * @param modelType - The model type.
     * @param scope - The scope.
     */
    trackModelOrScopeChange: (modelType: string | null, scope: string | null) => {
      const data: any = {}
      if (modelType)
        data.search_model_type = modelType
      if (scope)
        data.search_scope = scope
      trackEventAnalytics('search_model_or_scope_change', data)
    },

    /**
     * Tracks workspace filter change.
     * @param sessionId - The session ID.
     * @param workspaceFilter - The workspace filter.
     */
    trackWorkspaceFilterChange: (sessionId: string, workspaceFilter: string) => {
      trackEventAnalytics('search_workspace_filter_change', {
        workspace_filter: workspaceFilter,
        session_id: sessionId,
      })
    },

    /**
     * Tracks license group filter dropdown click.
     * @param sessionId - The session ID.
     * @param clickType - The click type.
     */
    trackLicenseGroupFilterDropdownClick: (sessionId: string, clickType: string) => {
      trackEventAnalytics('search_license_group_dropdown_click', {
        session_id: sessionId,
        click_type: clickType,
      })
    },

    /**
     * Tracks search results.
     * @param state - The state object.
     */
    trackResult: (state: any) => {
      if (!state.sessionId) {
        console.error('Cannot log query results w/o a sessionId')
        return
      }
      if (!state.responses) {
        console.error('Cannot log query results without responses')
        return
      }
      const modelType = state.parameters.searchModelType
      if (!state.responses[modelType]) {
        console.error('Cannot log query results w/o a response', modelType)
        return
      }
      SearchAnalytics.Session.trackTimeToLoad(state)
    },

    /**
     * Tracks client-side search results.
     * @param state - The state object.
     * @param view - The view.
     */
    trackClientResult: (state: any, view: any) => {
      const entryPoint = getEntryPoint(view)
      const previewMode = getContentPreviewMode(view, entryPoint)
      const modelType = state.parameters.searchModelType
      const response = state.responses ? state.responses[modelType] : null
      const totalCount = Object.values(state.responseCounts).reduce((sum: number, count: number) => (sum ?? 0) + (count ?? 0), 0)
      const counts: any = {}
      for (const [key, value] of Object.entries(state.responseCounts)) counts[key] = value ?? 0
      const resultCount = response ? response.results.length : -1
      const additionalInfo = qB()
      const data = {
        session_id: state.sessionId,
        query_id: state.queryId,
        entry_point: entryPoint,
        file_browser_entry_point: previewMode,
        plan_filter_id: state.parameters.planFilter,
        category: previewMode === ContentPreviewMode.PREVIEW ? 'preview' : modelType,
        count: previewMode === ContentPreviewMode.PREVIEW ? totalCount : resultCount,
        version: 2,
        plan_filter_type: state.parameters.planFilter === 'NON_ORG_TEAMS' ? 'team' : 'org',
        ...SearchAnalytics.getQueryInfo(state, modelType),
        ...counts,
        ...additionalInfo,
      }
      if (!response) {
        trackEventAnalytics('search_tracking_error', {
          event_name: 'search_query_result',
          entry_point: previewMode,
          incomplete_field: 'response',
        })
      }
      if (!state.sessionId) {
        trackEventAnalytics('search_tracking_error', {
          event_name: 'search_query_result',
          entry_point: previewMode,
          incomplete_field: 'sessionId',
        })
      }
      if (!state.queryId) {
        trackEventAnalytics('search_tracking_error', {
          event_name: 'search_query_result',
          entry_point: previewMode,
          incomplete_field: 'queryId',
        })
      }
      trackEventAnalytics('search_query_result', data)
    },

    /**
     * Tracks see more action.
     * @param state - The state object.
     * @param category - The category.
     */
    trackSeeMore: (state: any, category: string | null) => {
      if (!state.sessionId) {
        console.error('Cannot log query results w/o a sessionId')
        return
      }
      trackEventAnalytics('search_see_more', {
        session_id: state.sessionId,
        query_id: state.queryId,
        category: category ?? 'all',
      })
    },

    /**
     * Ends the search session.
     * @param state - The state object.
     * @returns Updated state.
     */
    trackEnd: (state: any) => {
      if (!state.sessionId)
        return state
      trackEventAnalytics('search_end', {
        session_id: state.sessionId,
        queryCount: state.queryCount,
      })
      const currentSession = getSession()
      if (currentSession) {
        if (currentSession.id === state.sessionId) {
          setSession(state.sessionId, currentSession.entryPoint)
        }
        else {
          clearSession()
        }
      }
      return { ...state, sessionId: null }
    },
  },

  // Original code: RecentType enum
  RecentType: {
    SEARCH: 0,
    FILE: 1,
  },

  // Original code: Recents namespace
  Recents: {
    /**
     * Tracks recents click.
     * @param sessionId - The session ID.
     * @param position - The position.
     * @param key - The key.
     * @param type - The type.
     */
    trackRecentsClick: (sessionId: string, position: number, key: string, type: number) => {
      if (type === 1) {
        trackEventAnalytics('search_recent_file_clicked', {
          session_id: sessionId,
          position: position + 1,
          key,
        })
      }
      else if (type === 0) {
        trackEventAnalytics('search_recent_search_clicked', {
          session_id: sessionId,
          position: position + 1,
        })
      }
    },
  },
}

// Original code: jr - Refactored to CAPTURE_FLAG
export const CAPTURE_FLAG = '!capture'
export const jr = CAPTURE_FLAG
// Original code: vj - Refactored to SearchAnalytics (matches the namespace)
export const vj = SearchAnalytics

// Original code: zQ - Refactored to getEntryPoint (matches the function)
export const zQ = getEntryPoint

// Original code: lM - Refactored to getSession (matches the function)
export const lM = getSession

// Original code: Ei - Refactored to generateSessionId (matches the import)
export const Ei = generateSessionId
