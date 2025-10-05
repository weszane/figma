import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { jsx } from 'react/jsx-runtime'
import { useDebounce } from 'use-debounce'
import { Tabs } from '../905/150656'
import { UsedStylesContext, useUsedStyles } from '../905/336143'
import { analyticsEventManager } from '../905/449184'
import { librarySearchByLibraryKeyAtomFamily } from '../905/570707'
import { lastActionDetails } from '../905/612212'
import { createLoadedState, createLoadingState } from '../905/723791'
import { useFigmaLibraries, usePublishedLibraries, useTeamOrgAccess } from '../905/825399'
import { communityLibraryQuery } from '../905/842072'
import { generateUUIDv4 } from '../905/871474'
import { getParentOrgId } from '../905/872904'
import { LOADING_STATUS, resourceUtils } from '../905/989992'
import { WorkspaceSelectorView } from '../figma_app/43951'
import { assertNotNullish, isNotNullish } from '../figma_app/95419'
import { useSubscription } from '../figma_app/288654'
import { useCurrentFileKey } from '../figma_app/516028'
import { setupResourceAtomHandler } from '../figma_app/566371'
import { getCurrentTeam } from '../figma_app/598018'
import { LibraryTabEnum } from '../figma_app/633080'
import { useFigmaLibrariesEnabled } from '../figma_app/657017'
import { useLatestRef } from '../figma_app/922077'

// Original constants: w, C
const loadingState = resourceUtils.loading()
const disabledState = resourceUtils.disabled()

// Original context: k
const LibraryModalContext = createContext<LibraryModalContextValue | null>(null)

/**
 * Maps LibraryTabEnum to a string key for tabs.
 * Original: $$R1
 */
export function getTabKeyFromEnum(tab: LibraryTabEnum): string {
  switch (tab) {
    case LibraryTabEnum.UPDATES:
      return 'updates'
    case LibraryTabEnum.TEAM_LIBRARIES:
      return 'teams'
    case LibraryTabEnum.RECOMMENDED:
      return 'recommended'
    default:
      return 'thisFile'
  }
}

/**
 * Custom hook to get the last non-search tab.
 * Original: V (IIFE in $$N0)
 */
function useLastNonSearchTab(tabManager: ReturnType<typeof Tabs.useTabs>[2]): string {
  const lastTabRef = useRef('thisFile')
  useEffect(() => {
    if (tabManager.activeTab !== 'search') {
      lastTabRef.current = tabManager.activeTab
    }
  }, [tabManager.activeTab])
  return lastTabRef.current
}

/**
 * Custom hook to check if tabs have switched.
 * Original: G (IIFE in $$N0)
 */
function useHasSwitchedTabs(tabManager: ReturnType<typeof Tabs.useTabs>[2]): boolean {
  const latestTabRef = useLatestRef(tabManager.activeTab)
  const [hasSwitched, setHasSwitched] = useState(false)
  useEffect(() => {
    if (latestTabRef.current && tabManager.activeTab !== latestTabRef.current) {
      setHasSwitched(true)
    }
  }, [tabManager.activeTab, latestTabRef])
  return hasSwitched
}

/**
 * Custom hook for search functionality.
 * Original: [z, H, W, K, Y, q, $, Z] (IIFE in $$N0)
 */
function useSearch(
  lastNonSearchTab: string,
  tabManager: ReturnType<typeof Tabs.useTabs>[2],
  sessionId: string
): [
  string,
  string,
  (query: string) => void,
  () => void,
  () => void,
  ReturnType<typeof useSearchResults>['results'],
  string | undefined,
  string | undefined
] {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchSessionId, setSearchSessionId] = useState<string | undefined>(undefined)

  const setSearchQueryAndTab = useCallback((query: string) => {
    setSearchQuery(query)
    if (query === '') {
      lastActionDetails.setLastAction(lastActionDetails.NavAction.CLEAR_SEARCH)
      tabManager.setActiveTab(lastNonSearchTab)
    } else {
      tabManager.setActiveTab('search')
    }
  }, [tabManager, lastNonSearchTab])

  const clearSearchQuery = useCallback(() => {
    setSearchQuery('')
    tabManager.setActiveTab(lastNonSearchTab)
    lastActionDetails.setLastAction(lastActionDetails.NavAction.CLEAR_SEARCH)
  }, [tabManager, lastNonSearchTab])

  const onFocusSearchBar = useCallback(() => {
    if (searchQuery) {
      tabManager.setActiveTab('search')
    }
  }, [searchQuery, tabManager])

  const [debouncedSearchQuery] = useDebounce(searchQuery, 100)

  const { results, queryId } = useSearchResults(debouncedSearchQuery, sessionId, searchSessionId)

  const latestTabRef = useLatestRef(tabManager.activeTab)
  useEffect(() => {
    if (latestTabRef.current === 'search' && tabManager.activeTab !== 'search') {
      setSearchSessionId(undefined)
    } else if (latestTabRef.current !== 'search' && tabManager.activeTab === 'search') {
      setSearchSessionId(generateUUIDv4())
    }
  }, [latestTabRef, tabManager.activeTab])

  return [searchQuery, debouncedSearchQuery, setSearchQueryAndTab, clearSearchQuery, onFocusSearchBar, results, searchSessionId, queryId]
}

/**
 * Custom hook for search results.
 * Original: results and queryId from inner IIFE in useSearch
 */
function useSearchResults(
  debouncedQuery: string,
  sessionId: string,
  searchSessionId: string | undefined
): { results: any; queryId: string | undefined } {
  const publishedLibraries = usePublishedLibraries({ includeLocalLibrary: true })
  const figmaLibraries = useFigmaLibraries()
  const figmaLibrariesEnabled = useFigmaLibrariesEnabled()

  const [librarySearchResource] = setupResourceAtomHandler(
    librarySearchByLibraryKeyAtomFamily(debouncedQuery),
    { enabled: !!debouncedQuery }
  )

  const [communitySearchResource] = setupResourceAtomHandler(
    communityLibraryQuery({ query: debouncedQuery }),
    { enabled: !!debouncedQuery && figmaLibrariesEnabled }
  )

  const publishedLibrariesResults = useMemo(() => {
    if (librarySearchResource.status === 'disabled') return disabledState
    if (librarySearchResource.status !== 'loaded' || publishedLibraries.status !== 'loaded') return loadingState

    const { components, styles, stateGroups, variableSets, variables } = librarySearchResource.data
    const filteredItems = [components.filteredByTeamId, styles.filteredByTeamId, stateGroups.filteredByTeamId, variableSets?.filteredByTeamId ?? {}, variables?.filteredByTeamId ?? {}]
    const results: Array<{ library: any; score: number }> = []
    const seenKeys = new Set<string>()

    for (const item of filteredItems) {
      for (const teamId in item) {
        for (const libraryKey in item[teamId]) {
          if (seenKeys.has(libraryKey)) continue
          const library = publishedLibraries.result.find(lib => lib.library_key === libraryKey)
          if (library) {
            const score = Math.max(
              librarySearchResource.data?.components.maxScorePerLibrary[libraryKey] || -Infinity,
              librarySearchResource.data?.styles.maxScorePerLibrary[libraryKey] || -Infinity,
              librarySearchResource.data?.stateGroups.maxScorePerLibrary[libraryKey] || -Infinity,
              librarySearchResource.data?.variableSets?.maxScorePerLibrary[libraryKey] || -Infinity,
              librarySearchResource.data?.variables?.maxScorePerLibrary[libraryKey] || -Infinity
            )
            results.push({ library, score })
            seenKeys.add(libraryKey)
          }
        }
      }
    }
    results.sort((a, b) => b.score - a.score)
    return resourceUtils.loaded(results.map(r => r.library))
  }, [publishedLibraries, librarySearchResource])

  const communityLibrariesResults = useMemo(() => {
    if (communitySearchResource.status === 'disabled') return disabledState
    if (figmaLibraries.status === 'disabled' || figmaLibraries.status === 'error' || communitySearchResource.status === 'error') {
      return resourceUtils.loaded([])
    }
    if (communitySearchResource.status !== 'loaded' || figmaLibraries.status !== 'loaded') return resourceUtils.loading()

    const results = communitySearchResource.data.libraries
      .map(lib => figmaLibraries.result.find(figLib => figLib.hub_file_id === lib.id))
      .filter(isNotNullish)
    return resourceUtils.loaded(results)
  }, [figmaLibraries, communitySearchResource])

  const combinedResults = useMemo(() => {
    if (publishedLibrariesResults.status === 'disabled' && communityLibrariesResults.status === 'disabled') return disabledState
    if (publishedLibrariesResults.status === 'loading' || communityLibrariesResults.status === 'loading') return loadingState

    const pubData = publishedLibrariesResults.status === 'loaded' ? publishedLibrariesResults.data : []
    const comData = communityLibrariesResults.status === 'loaded' ? communityLibrariesResults.data : []
    return resourceUtils.loaded([...pubData, ...comData])
  }, [publishedLibrariesResults, communityLibrariesResults])

  const queryId = useQueryIdTracker(combinedResults, debouncedQuery, sessionId, searchSessionId)

  return { results: combinedResults, queryId }
}

/**
 * Custom hook to track query ID for analytics.
 * Original: d (inner IIFE in useSearchResults)
 */
function useQueryIdTracker(
  results: any,
  query: string,
  libraryModalSessionId: string,
  searchSessionId: string | undefined
): string | undefined {
  const [queryId, setQueryId] = useState<string | undefined>(undefined)
  const [hasTracked, setHasTracked] = useState(true)
  const fileKey = useCurrentFileKey() ?? undefined
  const teamId = getCurrentTeam()?.id
  const orgId = getParentOrgId() ?? undefined

  useEffect(() => {
    if (query) {
      setQueryId(generateUUIDv4())
      setHasTracked(false)
    } else {
      setQueryId(undefined)
      setHasTracked(true)
    }
  }, [query])

  const isLoaded = results.status === 'loaded'
  useEffect(() => {
    if (query && queryId && !hasTracked && isLoaded) {
      analyticsEventManager.trackDefinedEvent('library_modal.search_result', {
        fileKey,
        teamId,
        orgId,
        queryId,
        query,
        numResults: results.data.length,
        libraryModalSessionId,
        searchSessionId,
      })
      setHasTracked(true)
    }
  }, [query, hasTracked, isLoaded, fileKey, orgId, queryId, results.data?.length, searchSessionId, teamId])

  return queryId
}

/**
 * Custom hook for workspaces.
 * Original: X (IIFE in $$N0)
 */
function useWorkspaces(): any {
  const orgId = getParentOrgId()
  const { hasEntAccess } = useTeamOrgAccess()
  const workspacesSubscription = useSubscription(WorkspaceSelectorView, { orgId }, { enabled: hasEntAccess })

  return useMemo(() => {
    return workspacesSubscription.status === LOADING_STATUS.LOADING
      ? createLoadingState()
      : createLoadedState(workspacesSubscription.data?.org?.workspaces ?? [])
  }, [workspacesSubscription.data?.org?.workspaces, workspacesSubscription.status])
}

interface LibraryModalContextValue {
  sessionId: string
  tabPropsMap: any
  tabPanelPropsMap: any
  tabManager: any
  searchQuery: string
  debouncedSearchQuery: string
  setSearchQuery: (query: string) => void
  clearSearchQuery: () => void
  searchResults: any
  searchSessionId: string | undefined
  queryId: string | undefined
  onFocusSearchBar: () => void
  entrypoint: any
  hasSwitchedTabs: boolean
  initialUpdatesModalScope: any
  workspaces: any
  modalRef: any
}

/**
 * Provider component for Library Modal Context.
 * Original: $$N0
 */
export function LibraryModalContextProvider({
  entrypoint,
  initialUpdatesModalScope,
  initialTab,
  sessionId,
  modalRef,
  children,
}: {
  entrypoint: any
  initialUpdatesModalScope: any
  initialTab: LibraryTabEnum
  sessionId?: string
  modalRef: any
  children: React.ReactNode
}) {
  const usedStyles = useUsedStyles()
  const { hasProAccess, hasOrgAccess } = useTeamOrgAccess()
  const figmaLibrariesEnabled = useFigmaLibrariesEnabled()
  const [modalSessionId] = useState(() => sessionId ?? generateUUIDv4())

  const [tabPropsMap, tabPanelPropsMap, tabManager] = Tabs.useTabs(
    {
      thisFile: true,
      updates: true,
      teams: true,
      recommended: hasProAccess,
      search: true,
      org: hasOrgAccess,
      uiKits: figmaLibrariesEnabled,
    },
    {
      orientation: 'vertical',
      defaultActive: getTabKeyFromEnum(initialTab),
    }
  )

  const lastNonSearchTab = useLastNonSearchTab(tabManager)
  const hasSwitchedTabs = useHasSwitchedTabs(tabManager)
  const [searchQuery, debouncedSearchQuery, setSearchQuery, clearSearchQuery, onFocusSearchBar, searchResults, searchSessionId, queryId] = useSearch(
    lastNonSearchTab,
    tabManager,
    modalSessionId
  )
  const workspaces = useWorkspaces()

  const contextValue = useMemo<LibraryModalContextValue>(
    () => ({
      sessionId: modalSessionId,
      tabPropsMap,
      tabPanelPropsMap,
      tabManager,
      searchQuery,
      debouncedSearchQuery,
      setSearchQuery,
      clearSearchQuery,
      searchResults,
      searchSessionId,
      queryId,
      onFocusSearchBar,
      entrypoint,
      hasSwitchedTabs,
      initialUpdatesModalScope,
      workspaces,
      modalRef,
    }),
    [
      modalSessionId,
      tabPropsMap,
      tabPanelPropsMap,
      tabManager,
      searchQuery,
      debouncedSearchQuery,
      setSearchQuery,
      clearSearchQuery,
      searchResults,
      searchSessionId,
      queryId,
      onFocusSearchBar,
      entrypoint,
      hasSwitchedTabs,
      initialUpdatesModalScope,
      workspaces,
      modalRef,
    ]
  )

  return jsx(LibraryModalContext.Provider, {
    value: contextValue,
    children: jsx(UsedStylesContext.Provider, {
      value: usedStyles,
      children,
    }),
  })
}

/**
 * Hook to get the library modal context, throws if not provided.
 * Original: $$P3
 */
export function useLibraryModalContext(): LibraryModalContextValue {
  return assertNotNullish(useContext(LibraryModalContext), 'useLibraryModalContext must be used within a LibraryModalContextProvider')
}

/**
 * Hook to get the library modal context, returns null if not provided.
 * Original: $$O4
 */
export function useLibraryModalContextOptional(): LibraryModalContextValue | null {
  return useContext(LibraryModalContext)
}

/**
 * Hook to check if library modal context is available.
 * Original: $$D2
 */
export function isLibraryModalContextAvailable(): boolean {
  return !!useLibraryModalContextOptional()
}

// Refactored exports with new names
export const Tp = LibraryModalContextProvider
export const FX = getTabKeyFromEnum
export const er = isLibraryModalContextAvailable
export const zm = useLibraryModalContext
export const sz = useLibraryModalContextOptional
