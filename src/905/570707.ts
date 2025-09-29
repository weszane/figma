import { useEffect, useMemo, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { fileByKeyAtom, fileVersionSelector } from '../905/91038'
import { createVariableResConfig as _$$YQ, mapVariableToWorkflow, searchAPIHandler } from '../905/144933'
import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { getFileKey } from '../905/412913'
import { trackEventAnalytics } from '../905/449184'
import { handleAtomEvent } from '../905/502364'
import { liveStoreInstance } from '../905/713695'
import { atom, createRemovableAtomFamily } from '../figma_app/27355'
import { getSelectedViewSelector } from '../figma_app/198885'
import { kb } from '../figma_app/502247'
import { openFileAtom } from '../figma_app/516028'
import { LIBRARY_PREFERENCES_MODAL, NO_TEAM } from '../figma_app/633080'
import { resolveFileParentOrgId } from '../figma_app/646357'

interface AssetData {
  score: number
  team_id?: string
  node_id: string
  library_key?: string
}

interface FileProcessingResult {
  filteredByTeamId: Record<string, Record<string, Record<string, AssetData>>>
  maxScorePerFile: Record<string, number>
  numAssetsByFileKey: Record<string, number>
}

interface LibraryProcessingResult {
  filteredByTeamId: Record<string, Record<string, Record<string, AssetData>>>
  maxScorePerLibrary: Record<string, number>
  numAssetsByLibraryKey: Record<string, number>
}

const getFileKeyFn = getFileKey()

/**
 * Process assets by file key
 * Original function: y
 */
function processAssetsByFile(
  assets: AssetData[],
  numAssetsByFileKey: Record<string, number>,
  fileByKey: any,
): FileProcessingResult {
  const filteredByTeamId: Record<string, Record<string, Record<string, AssetData>>> = {}
  const maxScorePerFile: Record<string, number> = {}

  for (const asset of assets) {
    const fileKey = getFileKeyFn(asset)

    // Skip if file key not found in fileByKey
    if (!(fileKey in fileByKey)) {
      trackEventAnalytics('library_modal_search_inconsistency')
      continue
    }

    // Update max score per file
    if (!(fileKey in maxScorePerFile) || asset.score > maxScorePerFile[fileKey]) {
      maxScorePerFile[fileKey] = asset.score
    }

    // Group by team ID
    const teamId = asset.team_id || NO_TEAM
    if (!filteredByTeamId[teamId]) {
      filteredByTeamId[teamId] = {}
    }

    if (!filteredByTeamId[teamId][fileKey]) {
      filteredByTeamId[teamId][fileKey] = {}
    }

    filteredByTeamId[teamId][fileKey][asset.node_id] = asset
  }

  return {
    filteredByTeamId,
    maxScorePerFile,
    numAssetsByFileKey,
  }
}

/**
 * Process assets by library key
 * Original function: b
 */
function processAssetsByLibrary(
  assets: AssetData[],
  numAssetsByLibraryKey: Record<string, number>,
): LibraryProcessingResult {
  const filteredByTeamId: Record<string, Record<string, Record<string, AssetData>>> = {}
  const maxScorePerLibrary: Record<string, number> = {}

  for (const asset of assets) {
    const libraryKey = asset.library_key

    // Update max score per library
    if (libraryKey && (!(libraryKey in maxScorePerLibrary) || asset.score > maxScorePerLibrary[libraryKey])) {
      maxScorePerLibrary[libraryKey] = asset.score
    }

    // Group by team ID
    const teamId = asset.team_id || NO_TEAM
    if (!filteredByTeamId[teamId]) {
      filteredByTeamId[teamId] = {}
    }

    if (libraryKey) {
      if (!filteredByTeamId[teamId][libraryKey]) {
        filteredByTeamId[teamId][libraryKey] = {}
      }

      filteredByTeamId[teamId][libraryKey][asset.node_id] = asset
    }
  }

  return {
    filteredByTeamId,
    maxScorePerLibrary,
    numAssetsByLibraryKey,
  }
}

/**
 * Hook for managing library search query state
 * Original function: $$v2
 */
export function useLibrarySearchQuery() {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery] = useDebounce(searchQuery, 100)

  useEffect(() => {
    handleAtomEvent({
      id: 'Library Search Query Changed',
      properties: {
        text: debouncedSearchQuery,
      },
    })
  }, [debouncedSearchQuery])

  return useMemo(() => ({
    searchQuery,
    debouncedSearchQuery,
    setSearchQuery,
  }), [searchQuery, debouncedSearchQuery, setSearchQuery])
}

// Namespace for library search queries
const LibrarySearchQueries = {
  /**
   * Query for searching library assets by file
   */
  livestoreQuery: liveStoreInstance.Query({
    fetch: async ({
      query,
      fileVersion,
      currentOrgId,
      teamId,
    }: {
      query: string
      fileVersion?: number
      currentOrgId?: string
      teamId?: string
    }) => {
      const startTime = Date.now()
      await kb.promise

      const response = await searchAPIHandler.getLibraryAssets({
        query,
        fv: fileVersion || 0,
        orgId: currentOrgId || undefined,
        teamId: teamId || undefined,
      })

      trackEventAnalytics('library-preferences-modal-search-time', {
        useSSS: true,
        elapsedTime: Date.now() - startTime,
      })

      return response.data.meta
    },
    enabled: ({ query }: { query: string }) => query != null && query.trim().length > 0,
    output: ({
      data,
      get,
    }: {
      data: any
      get: any
    }) => {
      const fileByKey = get(fileByKeyAtom)

      return {
        components: processAssetsByFile(data.components, data.num_components_by_file, fileByKey),
        stateGroups: processAssetsByFile(data.state_groups, data.num_state_groups_by_file, fileByKey),
        styles: processAssetsByFile(data.styles, data.num_styles_by_file, fileByKey),
        variables: processAssetsByFile(
          data.variables ? data.variables.map((item: any) => mapVariableToWorkflow(item)) : [],
          data.num_variables_by_file ?? {},
          fileByKey,
        ),
        variableSets: processAssetsByFile(
          data.variable_sets ? data.variable_sets.map((item: any) => _$$YQ(item)) : [],
          data.num_variable_sets_by_file ?? {},
          fileByKey,
        ),
      }
    },
  }),

  /**
   * Query for searching library assets by library key
   */
  libraryKeyLivestoreQuery: liveStoreInstance.Query({
    fetch: async ({
      query,
      fileVersion,
      currentOrgId,
      teamId,
    }: {
      query: string
      fileVersion?: number
      currentOrgId?: string
      teamId?: string
    }) => {
      const startTime = Date.now()
      await kb.promise

      const response = await searchAPIHandler.getLibraryAssetsByLibraryKey({
        query,
        fv: fileVersion || 0,
        orgId: currentOrgId || undefined,
        teamId: teamId || undefined,
      })

      trackEventAnalytics('library-preferences-modal-search-time', {
        useSSS: true,
        elapsedTime: Date.now() - startTime,
      })

      return response.data.meta
    },
    enabled: ({ query }: { query: string }) => query != null && query.trim().length > 0,
    output: ({ data }: { data: any }) => ({
      components: processAssetsByLibrary(data.components, data.num_components_by_library_key),
      stateGroups: processAssetsByLibrary(data.state_groups, data.num_state_groups_by_library_key),
      styles: processAssetsByLibrary(data.styles, data.num_styles_by_library_key),
      variables: processAssetsByLibrary(
        data.variables ? data.variables.map((item: any) => mapVariableToWorkflow(item)) : [],
        data.num_variables_by_library_key ?? {},
      ),
      variableSets: processAssetsByLibrary(
        data.variable_sets ? data.variable_sets.map((item: any) => _$$YQ(item)) : [],
        data.num_variable_sets_by_library_key ?? {},
      ),
    }),
  }),
}

// Atoms for library search state
const orgIdAtom = createReduxSubscriptionAtomWithState(resolveFileParentOrgId)
const selectedViewAtom = createReduxSubscriptionAtomWithState(getSelectedViewSelector)
const modalShownAtom = createReduxSubscriptionAtomWithState((state: any) => state.modalShown)

const teamIdAtom = atom((get) => {
  const selectedView = get(selectedViewAtom)
  const modalShown = get(modalShownAtom)

  return selectedView.view === 'team' && modalShown?.type === LIBRARY_PREFERENCES_MODAL
    ? selectedView.teamId
    : null
})

export const fileVersionAtom = createReduxSubscriptionAtomWithState(fileVersionSelector)

/**
 * Atom family for library search by file
 * Original variable: $$C1
 */
export const librarySearchByFileAtomFamily = createRemovableAtomFamily((query: string) =>
  atom((get) => {
    const orgId = get(orgIdAtom)
    const teamId = get(teamIdAtom)
    const openFile = get(openFileAtom)
    const editorType = openFile?.editorType

    return get(LibrarySearchQueries.livestoreQuery({
      query,
      fileVersion: get(fileVersionAtom),
      currentOrgId: orgId,
      teamId,
      editorType,
    }))
  }),
)

/**
 * Atom family for library search by library key
 * Original variable: $$T0
 */
export const librarySearchByLibraryKeyAtomFamily = createRemovableAtomFamily((query: string) =>
  atom((get) => {
    const orgId = get(orgIdAtom)
    const teamId = get(teamIdAtom)
    const openFile = get(openFileAtom)
    const editorType = openFile?.editorType

    return get(LibrarySearchQueries.libraryKeyLivestoreQuery({
      query,
      fileVersion: get(fileVersionAtom),
      currentOrgId: orgId,
      teamId,
      editorType,
    }))
  }),
)

// Exported constants with meaningful names
export const Q_ = librarySearchByLibraryKeyAtomFamily
export const HK = librarySearchByFileAtomFamily
export const PG = useLibrarySearchQuery
