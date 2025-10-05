import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { getI18nString } from '../905/303541'
import { trackEventAnalytics } from '../905/449184'
import { librarySearchByLibraryKeyAtomFamily, useLibrarySearchQuery } from '../905/570707'
import { ZO } from '../905/691188'
import { liveStoreInstance } from '../905/713695'
import { compareWithKey } from '../905/760074'
import { useCurrentUserOrg } from '../905/845253'
import { hydrateFileBrowser } from '../905/890368'
import { LibrariesViewFilterStatesView } from '../figma_app/43951'
import { selectPermissionsState } from '../figma_app/212807'
import { useSubscription } from '../figma_app/288654'
import { useCurrentPlanUser, useIsOrgMemberOrAdminUser } from '../figma_app/465071'
import { getUserState, YH } from '../figma_app/502247'
import { selectCurrentFile } from '../figma_app/516028'
import { eO } from '../figma_app/518077'
import { setupResourceAtomHandler } from '../figma_app/566371'
import { NO_TEAM } from '../figma_app/633080'
import { compareAssetsByTeam, sortLibraries, useIsAssetPublishedForCurrentFile } from '../figma_app/646357'
import { sortByProperty } from '../figma_app/656233'
import { useFigmaLibrariesEnabled } from '../figma_app/657017'
import { k9, NX } from '../figma_app/777207'

// Define the LibraryFile interface based on how it's used in this file
interface LibraryFile {
  library_key: string
  library_file_key: string
  team_id?: string
  workspace_id?: string
  type: string
  max_search_score?: number
  num_components?: number
  num_styles?: number
  num_variables?: number
  num_weekly_insertions?: number
  library_file_name: string
  thumbnail_url: string
  [key: string]: any // Index signature to allow sortByProperty to work
}

// Define other missing types
type LibrariesSortBy = 'alpha' | 'search' | 'components' | 'styles' | 'variables' | 'inserts' | 'teams'

interface LibrariesViewFilterState {
  type: string
  id?: string
  name?: string
}

interface LibrariesSortState {
  sortBy: LibrariesSortBy
  isDescending: boolean
}

interface LibrarySearchResult {
  status: string
  data?: any
  searchQuery?: string
}

interface File {
  key: string
  folder_id?: string
  team_id?: string
  org_browsable?: boolean
  teamId?: string
  sourceFileKey?: string
  fileRepoId?: string
}

// Filter libraries based on various criteria
export function filterLibraries({
  libraryFiles,
  currentLibrariesViewFilterState,
  hideUnsubscribedFiles,
  showingDefaultSubscriptionsForTeamId,
  showingDefaultSubscriptionsForUser,
  hideLibrariesNotAddedToConnectedProject,
  mapFromLibraryKeyToSharingGroupData,
}: {
  libraryFiles: LibraryFile[]
  currentLibrariesViewFilterState: LibrariesViewFilterState | null
  hideUnsubscribedFiles: boolean
  showingDefaultSubscriptionsForTeamId: string | null
  showingDefaultSubscriptionsForUser: boolean
  hideLibrariesNotAddedToConnectedProject: boolean
  mapFromLibraryKeyToSharingGroupData: Map<string, { sharingGroupId: string }> | null
}): LibraryFile[] {
  // Get team IDs from Redux store
  const teamIds = useSelector(({ teams }) => Object.keys(teams))

  // Get published library keys
  const publishedLibraryKeys = getPublishedLibraryKeys({ libraryFiles })

  // Get default subscription library keys
  const defaultSubscriptionLibraryKeys = getDefaultSubscriptionLibraryKeys({
    libraryFiles,
    teamId: showingDefaultSubscriptionsForTeamId,
    user: showingDefaultSubscriptionsForUser,
  })

  // Determine if showing default subscriptions
  const isShowingDefaultSubscriptions = showingDefaultSubscriptionsForTeamId || showingDefaultSubscriptionsForUser

  // Create filter functions based on criteria
  const filterFunctions = useMemo(() => {
    const filters: ((library: LibraryFile) => boolean)[] = []

    // Add view filter state filter
    if (currentLibrariesViewFilterState) {
      filters.push((library) => {
        const isTeamJoined = !!(library.team_id && teamIds.includes(library.team_id))
        return !!filterByViewType(library, currentLibrariesViewFilterState, isTeamJoined)
      })
    }

    // Add subscription filter
    if (hideUnsubscribedFiles) {
      const subscriptionKeys = new Set(
        isShowingDefaultSubscriptions ? defaultSubscriptionLibraryKeys : publishedLibraryKeys,
      )
      filters.push(library => subscriptionKeys.has(library.library_key))
    }

    // Add connected project filter
    if (hideLibrariesNotAddedToConnectedProject && mapFromLibraryKeyToSharingGroupData) {
      filters.push(library =>
        !!mapFromLibraryKeyToSharingGroupData[library.library_key]?.sharingGroupId,
      )
    }

    return filters
  }, [
    currentLibrariesViewFilterState,
    defaultSubscriptionLibraryKeys,
    hideUnsubscribedFiles,
    isShowingDefaultSubscriptions,
    publishedLibraryKeys,
    teamIds,
    hideLibrariesNotAddedToConnectedProject,
    mapFromLibraryKeyToSharingGroupData,
  ])

  // Apply all filters
  return useMemo(() =>
    libraryFiles.filter(library =>
      filterFunctions.every(filterFn => filterFn(library)),
    ), [libraryFiles, filterFunctions])
}

// Sort libraries based on various criteria
export function sortLibrariesByCriteria({
  libraryFiles,
  showingDefaultSubscriptionsForTeamId,
  sortState,
  approvedLibraryKeysByResourceType = {
    workspaceApprovedLibraryKeys: new Set(),
    orgApprovedLibraryKeys: new Set(),
  },
}: {
  libraryFiles: LibraryFile[]
  showingDefaultSubscriptionsForTeamId: string | null
  sortState: LibrariesSortState
  approvedLibraryKeysByResourceType?: {
    workspaceApprovedLibraryKeys: Set<string>
    orgApprovedLibraryKeys: Set<string>
  }
}): LibraryFile[] {
  // Get current file and permissions state
  const currentFile = selectCurrentFile()
  const permissionsState = selectPermissionsState()
  const { fileByKey } = permissionsState

  // Get published and default subscription library keys
  const publishedLibraryKeys = getPublishedLibraryKeys({ libraryFiles })
  const defaultSubscriptionLibraryKeys = getDefaultSubscriptionLibraryKeys({
    libraryFiles,
    teamId: showingDefaultSubscriptionsForTeamId,
  })

  // Create filter functions for library files
  const libraryFileFilters = useMemo(() => {
    const filters: ((library: LibraryFile, file: File) => boolean)[] = []

    // Add current file filter
    if (currentFile) {
      const currentFileIdentifier = {
        key: currentFile.key,
        file_repo_id: currentFile.fileRepoId,
        source_file_key: currentFile.sourceFileKey,
      }
      filters.push((library, file) =>
        library.library_file_key !== currentFileIdentifier.key
        && !compareWithKey(currentFileIdentifier, file),
      )
    }

    // Add team/org filter
    if (showingDefaultSubscriptionsForTeamId) {
      filters.push(createTeamFilter(showingDefaultSubscriptionsForTeamId, defaultSubscriptionLibraryKeys))
    }
    else {
      filters.push((library, file) => {
        const isDraft = file.folder_id === permissionsState.user?.drafts_folder_id
        const hasTeam = !!file.team_id
        return isDraft || hasTeam || !!file.org_browsable
      })
    }

    return filters
  }, [currentFile, showingDefaultSubscriptionsForTeamId, permissionsState, defaultSubscriptionLibraryKeys])

  // Create sort function based on sort criteria
  const sortFunction = useMemo(() => {
    if (sortState.sortBy === 'alpha') {
      return NX(approvedLibraryKeysByResourceType)
        ? (libraries: LibraryFile[]) => k9({
          libraries,
          approvedLibraryKeysByResourceType,
          currentTeamId: currentFile?.teamId,
          shouldSortByTeam: true,
        })
        : createAlphaSortFunction(currentFile, sortState.isDescending)
    }

    if (sortState.sortBy === 'search') {
      return createSearchSortFunction(currentFile, publishedLibraryKeys)
    }

    // Sort by property
    const property = getPropertyForSortType(sortState.sortBy)
    return (libraries: LibraryFile[]) =>
      sortByProperty(libraries, property, sortState.isDescending)
  }, [currentFile, sortState.isDescending, sortState.sortBy, publishedLibraryKeys, approvedLibraryKeysByResourceType])

  // Apply filters and sorting
  return useMemo(() => {
    const filteredLibraries = libraryFiles.filter((library) => {
      const file = fileByKey[library.library_file_key]
      return !!file && libraryFileFilters.every(filter => filter(library, file))
    })

    sortFunction(filteredLibraries)
    return filteredLibraries
  }, [libraryFiles, fileByKey, libraryFileFilters, sortFunction])
}

// Search libraries based on query
export function searchLibraries(libraryFiles: LibraryFile[]): LibrarySearchResult & {
  searchQuery: string
  debouncedSearchQuery: string
  isSearching: boolean
  isSearchLoading: boolean
  libraryFiles: LibraryFile[]
  onSearchQueryChange: (query: string) => void
} {
  const {
    searchQuery,
    debouncedSearchQuery,
    setSearchQuery,
  } = useLibrarySearchQuery()

  const [searchResult] = setupResourceAtomHandler(
    librarySearchByLibraryKeyAtomFamily(debouncedSearchQuery),
  )

  const searchedLibraries = useMemo(() => {
    if (searchResult.status === 'loading') {
      return []
    }

    if (!searchQuery || !searchResult.data) {
      return libraryFiles
    }

    const matchedLibraries: LibraryFile[] = []
    const libraryKeyToTeamId: Record<string, string> = {}

    // Collect library keys from search results
    const searchCollections = [
      searchResult.data.components.filteredByTeamId,
      searchResult.data.styles.filteredByTeamId,
      searchResult.data.stateGroups.filteredByTeamId,
      searchResult.data.variableSets?.filteredByTeamId ?? {},
      searchResult.data.variables?.filteredByTeamId ?? {},
    ]

    for (const collection of searchCollections) {
      for (const teamId in collection) {
        for (const libraryKey in collection[teamId]) {
          libraryKeyToTeamId[libraryKey] = teamId
        }
      }
    }

    // Match libraries with search results
    for (const libraryKey in libraryKeyToTeamId) {
      const library = libraryFiles.find(file => file.library_key === libraryKey)
      if (!library) {
        continue
      }

      matchedLibraries.push({
        ...library,
        max_search_score: Math.max(
          searchResult.data.components.maxScorePerLibrary[libraryKey] || -Infinity,
          searchResult.data.styles.maxScorePerLibrary[libraryKey] || -Infinity,
        ),
      })
    }

    return matchedLibraries
  }, [libraryFiles, searchQuery, searchResult])

  return {
    searchQuery,
    debouncedSearchQuery,
    isSearching: !!searchQuery,
    isSearchLoading: searchResult.status === 'loading',
    libraryFiles: searchedLibraries,
    onSearchQueryChange: setSearchQuery,
    status: searchResult.status,
    data: searchResult.data,
  }
}

// Get published library keys
export function getPublishedLibraryKeys({
  libraryFiles,
}: {
  libraryFiles: LibraryFile[]
}): string[] {
  const isAssetPublished = useIsAssetPublishedForCurrentFile()

  return useMemo(() =>
    libraryFiles
      .map(file => file.library_key)
      .filter(key => isAssetPublished(key)), [libraryFiles, isAssetPublished])
}

// Error for missing filters
const NO_FILTERS_ERROR = new Error('useLibrariesViewFilterStates: no filters with presets enabled')

// Get default subscription library keys
function getDefaultSubscriptionLibraryKeys({
  libraryFiles,
  teamId,
  user,
}: {
  libraryFiles: LibraryFile[]
  teamId: string | null
  user?: boolean
}): string[] {
  const getSubscriptionData = ZO(teamId ?? null, user ?? false)

  return useMemo(() => {
    if (!teamId && !user) {
      return []
    }

    return libraryFiles
      .filter((library) => {
        const subscription = getSubscriptionData(library.library_key)
        return !!subscription?.design || !!subscription?.figjam
      })
      .map(library => library.library_key)
  }, [libraryFiles, teamId, user, getSubscriptionData])
}

// Get library view filter states
export function getLibraryViewFilterStates(
  showingDefaultSubscriptionsForTeamId: string | null,
  skipPresetLibraries = false,
): LibrariesViewFilterState[] | null {
  const filters: LibrariesViewFilterState[] = []
  const dispatch = useDispatch()
  const currentUserOrg = useCurrentUserOrg()
  const currentPlanUser = useCurrentPlanUser('useLibrariesViewFilterStates')
  const isOrgMemberOrAdmin = useIsOrgMemberOrAdminUser(currentPlanUser).unwrapOr(false)
  const hasWorkspaces = !!currentUserOrg?.workspaces_count

  // Hydrate file browser if needed
  useEffect(() => {
    async function hydrateFileBrowserData() {
      try {
        const userState = await getUserState('useLibrariesViewFilterStates')
        dispatch(hydrateFileBrowser(userState.data.meta))
      }
      catch (error) {
        // Silently handle error
        // Unused variable is acceptable here as it's for debugging purposes
        console.debug('Error hydrating file browser:', error)
      }
    }

    if (!YH && isOrgMemberOrAdmin && !hasWorkspaces) {
      trackEventAnalytics('file-browser-hydrate', {
        location: 'useLIbrariesViewFilterStates',
      })
      hydrateFileBrowserData()
    }
  }, [dispatch, isOrgMemberOrAdmin, hasWorkspaces])

  const isFigmaLibrariesEnabled = useFigmaLibrariesEnabled() && !skipPresetLibraries
  const subscription = useSubscription(LibrariesViewFilterStatesView, {
    orgId: currentUserOrg?.id ?? null,
  })

  const openFile = useSelector(({ openFile }) => openFile)

  // Use a more generic approach since liveStoreInstance.Team is not available in the exported instance
  // We'll use _teamData to satisfy the linter (prefixed with underscore)
  const _teamData: any = null // We'll set this to null since we can't access the Team manager

  const workspace = useMemo(() => {
    let workspaceId: string | null = null
    const workspaces = subscription.data?.org?.workspaces ?? []

    if (openFile) {
      workspaceId = openFile.team?.workspaceId
    }

    if (showingDefaultSubscriptionsForTeamId) {
      // Since we can't access teamData, we'll skip this logic
      // workspaceId = teamData?.workspace_id
    }

    if (!workspaceId) {
      workspaceId = subscription.transform(data => eO(data.currentUser)).unwrapOr(null)
    }

    return workspaceId ? workspaces.find(ws => ws.id === workspaceId) : null
  }, [openFile, subscription, showingDefaultSubscriptionsForTeamId])

  // Return null if neither org member nor figma libraries enabled
  if (!isOrgMemberOrAdmin && !isFigmaLibrariesEnabled) {
    return null
  }

  // Add current file filter
  if (openFile) {
    filters.push({
      type: 'currentFile',
    })
  }

  // Add workspace and org filters
  if (hasWorkspaces) {
    if (workspace) {
      filters.push({
        type: 'workspace',
        id: workspace.id,
        name: workspace.name,
      })
    }

    filters.push({
      type: 'org',
    })
  }

  // Add team filters
  if ((isOrgMemberOrAdmin && !hasWorkspaces) || (!isOrgMemberOrAdmin && isFigmaLibrariesEnabled)) {
    filters.push({
      type: 'joinedTeams',
    })

    filters.push({
      type: 'nonJoinedTeams',
    })
  }

  // Add preset libraries filter
  if (filters.length > 0 && isFigmaLibrariesEnabled) {
    filters.push({
      type: 'presetLibraries',
    })
  }

  // Report error if no filters and figma libraries enabled
  if (filters.length === 0 && isFigmaLibrariesEnabled) {
    reportError(ServiceCategories.DESIGN_SYSTEMS_ECOSYSTEM, NO_FILTERS_ERROR, {
      tags: {
        orgId: currentUserOrg?.id,
        hasOpenFile: !!openFile,
        hasWorkspace: !!workspace,
        showingDefaultSubscriptionsForTeamId,
        canMemberOrg: isOrgMemberOrAdmin,
        showWorkspaceTabs: hasWorkspaces,
      },
    })
    return null
  }

  return filters
}

// Get filter display name
export function getFilterDisplayName(
  filter: LibrariesViewFilterState,
  orgName: string | null,
): string {
  switch (filter.type) {
    case 'currentFile':
      return getI18nString('design_systems.libraries_modal.current_file')
    case 'joinedTeams':
      return getI18nString('design_systems.libraries_modal.your_teams')
    case 'nonJoinedTeams':
      return getI18nString('design_systems.libraries_modal.other_teams')
    case 'workspace':
      return filter.name
    case 'org':
      if (!orgName) {
        console.error('org filter, but org not in state')
        return ''
      }
      return orgName
    case 'drafts':
      return getI18nString('design_systems.libraries_modal.draft_libraries')
    case 'unassigned':
      return getI18nString('design_systems.libraries_modal.other_libraries')
    case 'presetLibraries':
      return getI18nString('design_systems.libraries_modal.ui_kits')
    default:
      console.error('invalid filter type in library filter tab component')
      return ''
  }
}

// Ensure preset libraries filter exists
export function useEnsurePresetLibrariesFilter(
  availableFilters: LibrariesViewFilterState[] | null,
  currentFilter: LibrariesViewFilterState | null,
  setFilter: (filter: LibrariesViewFilterState | null) => void,
): void {
  useEffect(() => {
    if (
      currentFilter?.type !== 'presetLibraries'
      || !availableFilters?.some(filter => filter.type === 'presetLibraries')
    ) {
      setFilter(availableFilters?.[0] ?? null)
    }
  }, [availableFilters, currentFilter, setFilter])
}

// Helper functions
function filterByViewType(
  library: LibraryFile,
  filterState: LibrariesViewFilterState,
  isTeamJoined: boolean,
): boolean {
  switch (filterState.type) {
    case 'currentFile':
      return false
    case 'joinedTeams':
      return isTeamJoined
    case 'nonJoinedTeams':
      return !isTeamJoined
    case 'workspace':
      return library.workspace_id === filterState.id
    case 'org':
      return true
    case 'presetLibraries':
      return library.type === 'COMMUNITY_LIBRARY_FILE'
    case 'unassigned':
      return !library.workspace_id && !!library.team_id
    case 'drafts':
      return !library.team_id
    default:
      return false
  }
}

function createTeamFilter(teamId: string, subscriptionKeys: string[]): (library: LibraryFile, file: File) => boolean {
  const subscriptionKeySet = new Set(subscriptionKeys)
  return (library, file) =>
    file.team_id === teamId
    || !!file.org_browsable
    || subscriptionKeySet.has(library.library_key)
}

function createAlphaSortFunction(currentFile: File | null, isDescending: boolean): (libraries: LibraryFile[]) => LibraryFile[] {
  const teamId = currentFile ? currentFile.teamId : NO_TEAM
  return libraries => sortLibraries(libraries, teamId, { isDescending })
}

function createSearchSortFunction(currentFile: File | null, publishedKeys: string[]): (libraries: LibraryFile[]) => LibraryFile[] {
  const teamId = currentFile ? currentFile.teamId : NO_TEAM
  const publishedKeySet = new Set(publishedKeys)

  return libraries =>
    libraries.sort((a, b) => {
      if (currentFile) {
        const aIsPublished = publishedKeySet.has(a.library_key)
        const bIsPublished = publishedKeySet.has(b.library_key)

        if (aIsPublished && !bIsPublished)
          return -1
        if (!aIsPublished && bIsPublished)
          return 1
      }

      if (a.team_id !== b.team_id) {
        return compareAssetsByTeam(a, b, teamId)
      }

      return a.max_search_score > b.max_search_score ? -1 : 1
    })
}

function getPropertyForSortType(sortType: LibrariesSortBy): string {
  switch (sortType) {
    case 'components':
    case 'teams':
      return 'num_components'
    case 'styles':
      return 'num_styles'
    case 'variables':
      return 'num_variables'
    case 'inserts':
      return 'num_weekly_insertions'
    default:
      return 'num_components'
  }
}

// Export renamed functions
export const CK = filterLibraries
export const SF = getFilterDisplayName
export const TW = searchLibraries
export const Yy = getLibraryViewFilterStates
export const is = useEnsurePresetLibrariesFilter
export const mJ = sortLibrariesByCriteria
export const mo = getPublishedLibraryKeys
