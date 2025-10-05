import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { renderI18nText } from "../905/303541"
import { c as _$$c } from "../905/511370"
import { librarySearchByLibraryKeyAtomFamily } from "../905/570707"
import { setupResourceAtomHandler } from "../905/713695"
import { LibraryItemTileGrid } from "../905/909811"
import { LibraryModalVariablesDataByLibraryKey } from "../figma_app/43951"
import { isNotNullish } from "../figma_app/95419"
import { getSelectedViewSelector } from "../figma_app/198885"
import { RV } from "../figma_app/214643"
import { useSubscription } from "../figma_app/288654"

/**
 * Get library data by team ID and library key from filtered search results
 * @param filteredData - Filtered search results by team ID
 * @param library - Library object containing team_id and library_key
 * @returns Library data or undefined
 */
function getLibraryDataByTeamAndKey(
  filteredData: Record<string, Record<string, any>> | undefined,
  library: { team_id?: string, library_key?: string } | null,
): Record<string, { variableSetId: string, score: number, [key: string]: any }> | undefined {
  const teamId = library && library.team_id ? library.team_id : undefined
  const libraryKey = library?.library_key

  if (teamId && libraryKey) {
    return filteredData?.[teamId]?.[libraryKey]
  }
}

/**
 * Component for displaying variable sets in best matches
 * @param publishedLibrary - The published library data
 * @param searchResults - Search results containing variables and variable sets
 */
function VariableSetsBestMatches({
  publishedLibrary,
  searchResults,
}: {
  publishedLibrary: { library_key?: string } | null
  searchResults: {
    variables?: { filteredByTeamId?: Record<string, Record<string, any>> }
    variableSets?: { filteredByTeamId?: Record<string, Record<string, any>> }
  } | null
}) {
  const variableData = useSubscription(LibraryModalVariablesDataByLibraryKey, {
    libraryKey: publishedLibrary?.library_key ?? "",
  }, {
    enabled: !!publishedLibrary?.library_key,
  })

  // Aggregate variable match counts and minimum scores by variable set ID
  const variableSetAggregates = useMemo(() => {
    const variablesByLibrary = getLibraryDataByTeamAndKey(
      searchResults?.variables?.filteredByTeamId ?? {},
      publishedLibrary,
    )

    return variablesByLibrary
      ? Object.values(variablesByLibrary).reduce((acc, variable: { variableSetId: string, score: number, [key: string]: any }) => {
        const existing = acc[variable.variableSetId]
        return {
          ...acc,
          [variable.variableSetId]: {
            count: (existing?.count ?? 0) + 1,
            minScore: Math.min(existing?.minScore ?? Infinity, variable.score),
          },
        }
      }, {} as Record<string, { count: number, minScore: number }>)
      : {}
  }, [searchResults?.variables?.filteredByTeamId, publishedLibrary])

  // Get variable sets filtered by team and library
  const variableSetsByLibrary = useMemo(
    () => getLibraryDataByTeamAndKey(
      searchResults?.variableSets?.filteredByTeamId ?? {},
      publishedLibrary,
    ),
    [searchResults?.variableSets?.filteredByTeamId, publishedLibrary],
  )

  // Process and sort variable collections
  const processedVariableSets = useMemo(() => {
    if (variableData.status !== "loaded") {
      return []
    }

    const variableCollections = variableData.data?.libraryKeyToFile?.file?.variableCollections
    if (!variableCollections) {
      return []
    }

    const variableSetItems = variableCollections
      .map((collection) => {
        const variableSetAggregate = variableSetAggregates[collection.id]

        // If we have variable matches for this collection
        if (variableSetAggregate) {
          return {
            ...collection,
            numVariableMatches: variableSetAggregate.count,
            score: variableSetAggregate.minScore,
          }
        }

        // If we have a direct variable set match
        const directVariableSet = variableSetsByLibrary?.[collection.nodeId]
        if (directVariableSet) {
          return {
            ...collection,
            score: directVariableSet.score ?? 0,
          }
        }

        // No match found
        return undefined
      })
      .filter(isNotNullish)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)

    return variableSetItems
  }, [variableData, variableSetAggregates, variableSetsByLibrary])

  return jsx(RV, {
    forBestMatches: true,
    variableSets: processedVariableSets,
  })
}

/**
 * Best matches component for library search results
 * @param props - Component props
 */
export function LibraryBestMatchesComponent(props: {
  publishedLibrary: { team_id?: string, library_key?: string } | null
  inline?: boolean
  onItemClick?: (item: any) => void
  width?: number
  searchQuery: string
  maxShownItems?: number
  showLibraryModalUiRefresh?: boolean
}) {
  const {
    publishedLibrary,
    inline,
    onItemClick,
    width,
    searchQuery,
    maxShownItems = 8,
    showLibraryModalUiRefresh = false,
  } = props

  const selectedView = useSelector(getSelectedViewSelector)
  const dropdownShown = useSelector((state: any) => state.dropdownShown)
  const [searchResults] = setupResourceAtomHandler(librarySearchByLibraryKeyAtomFamily(searchQuery))
  const dispatch = useDispatch()

  // Early return if no search query or results not loaded
  if (!searchQuery || searchResults.status !== "loaded") {
    return null
  }

  // Get components and state groups
  const components = getFilteredLibraryItems(
    searchResults.data?.components.filteredByTeamId,
    maxShownItems,
    publishedLibrary,
  )
  const hasComponents = components.length > 0

  const stateGroups = getFilteredLibraryItems(
    searchResults.data?.stateGroups.filteredByTeamId,
    maxShownItems,
    publishedLibrary,
  )
  const hasStateGroups = stateGroups.length > 0

  // Get styles (only for non-inline mode)
  const styles = inline
    ? null
    : getFilteredLibraryItems(
      searchResults.data?.styles.filteredByTeamId,
      14,
      publishedLibrary,
    )?.sort((a, b) => b.score - a.score)
  const hasStyles = !!styles && styles.length > 0

  // Check if we have variable matches (only for non-inline mode)
  const hasVariableMatches = !inline && (function () {
    if (!searchResults.data?.variableSets || !searchResults.data?.variables) {
      return false
    }

    const variableSetsByLibrary = getLibraryDataByTeamAndKey(
      searchResults.data.variableSets.filteredByTeamId,
      publishedLibrary,
    )
    const variablesByLibrary = getLibraryDataByTeamAndKey(
      searchResults.data.variables.filteredByTeamId,
      publishedLibrary,
    )

    return (
      Object.keys(variableSetsByLibrary ?? {}).length > 0
      || Object.keys(variablesByLibrary ?? {}).length > 0
    )
  })()

  // If no matches found
  if (!hasComponents && !hasStyles && !hasStateGroups && !hasVariableMatches) {
    return inline
      ? jsx(BestMatchesSpacer, { v2: true })
      : null
  }

  // Combine and sort components and state groups
  const combinedItems = [...components, ...stateGroups]
    .sort((a, b) => b.score - a.score)
    .slice(0, maxShownItems)

  return jsxs("div", {
    className: inline ? "" : "best_matches--bestMatches--8TC5A",
    children: [
      // Header (only for non-inline mode)
      !inline && jsx("div", {
        className: "best_matches--header--7vka4",
        children: renderI18nText("design_systems.libraries_modal.search_query_best_matches", {
          searchQuery,
        }),
      }),

      // Variable sets section
      hasVariableMatches && jsx(VariableSetsBestMatches, {
        publishedLibrary,
        searchResults: searchResults.data,
      }),

      // Spacer for inline mode
      inline && jsx(BestMatchesSpacer, {
        v2: showLibraryModalUiRefresh,
      }),

      // Styles section
      styles && jsx(_$$c, {
        styleList: styles,
      }),

      // Styles spacing
      styles && jsx("div", {
        style: {
          height: 12,
        },
      }),

      // Components and state groups grid
      combinedItems.length > 0 && jsx(LibraryItemTileGrid, {
        dispatch,
        dropdownShown,
        items: combinedItems,
        onItemClick,
        recordingKey: "bestMatchesTiles",
        selectedView,
        showLibraryModalUiRefresh,
        sourceForTracking: "Library Modal",
        ui3Compact: true,
        width,
      }),

      // Bottom spacer for inline mode
      inline && jsx(BestMatchesSpacer, {
        v2: true,
      }),
    ],
  })
}

/**
 * Best matches component for library file
 * @param props - Component props
 */
export function LibraryFileBestMatchesComponent({
  libraryFile,
  width,
  inTeamLibrarySettingsModal,
  maxShownItems = 8,
}: {
  libraryFile: { components: Array<any>, stateGroups: Array<any> }
  width?: number
  inTeamLibrarySettingsModal?: boolean
  maxShownItems?: number
}) {
  const dispatch = useDispatch()
  const components = libraryFile.components
  const stateGroups = libraryFile.stateGroups
  const selectedView = useSelector(getSelectedViewSelector)
  const dropdownShown = useSelector((state: any) => state.dropdownShown)

  const combinedItems = [...components, ...stateGroups]
    .sort((a, b) => (a.score < b.score ? 1 : -1))
    .slice(0, maxShownItems)

  return combinedItems.length
    ? jsxs(Fragment, {
      children: [
        jsx(BestMatchesSpacer, { v2: true }),
        jsx(LibraryItemTileGrid, {
          items: combinedItems,
          sourceForTracking: "Library Modal",
          width,
          dispatch,
          selectedView,
          dropdownShown,
          recordingKey: "bestMatchesTiles",
          showLibraryModalUiRefresh: !inTeamLibrarySettingsModal,
          ui3Compact: true,
        }),
        jsx(BestMatchesSpacer, { v2: true }),
      ],
    })
    : null
}

/**
 * Spacer component for best matches
 * @param props - Component props
 */
function BestMatchesSpacer({
  v2,
}: {
  v2?: boolean
}) {
  return jsx("div", {
    className: v2
      ? "best_matches--bestMatchesSpacer_v2--XCkPE"
      : "best_matches--bestMatchesSpacer--W2Yff",
  })
}

/**
 * Get filtered library items by team ID and library key
 * @param filteredData - Filtered search results
 * @param limit - Maximum number of items to return
 * @param library - Library object
 * @returns Array of filtered items
 */
function getFilteredLibraryItems(
  filteredData: Record<string, Record<string, Array<any>>> | undefined,
  limit: number,
  library: { team_id?: string, library_key?: string } | null,
): Array<any> {
  const teamId = library && library.team_id ? library.team_id : null
  if (!teamId) {
    return []
  }

  const libraryKey = library?.library_key
  if (libraryKey && filteredData?.[teamId]?.[libraryKey]) {
    const items = filteredData[teamId][libraryKey]
    return (items ? Object.values(items) : []).slice(0, limit)
  }

  return []
}

// Export components with clearer names
export const C = LibraryBestMatchesComponent
export const y = LibraryFileBestMatchesComponent
