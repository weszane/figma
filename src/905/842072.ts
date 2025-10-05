import { useMemo } from 'react'
import { createVariableResConfig, mapVariableToWorkflow, searchAPIHandler } from '../905/144933'
import { hubFileAPI } from '../905/473998'
import { liveStoreInstance, setupResourceAtomHandler } from '../905/713695'
import { transformCommunityLibraryFile } from '../figma_app/630951'
import { useFigmaLibrariesEnabled } from '../figma_app/657017'

// Default result structure for community library search
const defaultCommunityLibraryResult = {
  assets: {
    components: [],
    stateGroups: [],
    styles: [],
    variables: [],
    variableSets: [],
  },
  libraries: [],
}

/**
 * Query configuration for fetching community library assets and libraries.
 * Original name: $$c1
 */
export const communityLibraryQuery = liveStoreInstance.Query({
  fetch: async ({ query }: { query: string }) => {
    let searchResults
    try {
      searchResults = (await searchAPIHandler.getCommunityLibraryAssets({ query })).data.meta.results
    } catch {
      return null
    }
    const hubFileIds = Object.values(searchResults).flatMap((result: any) => result.map((item: any) => item.hub_file_id))
    if (!hubFileIds.length) return null
    const uniqueHubFileIds = Array.from(new Set(hubFileIds))
    try {
      const libraries = (await hubFileAPI.getLibraries({ libraryIds: uniqueHubFileIds })).data.meta
      return {
        assets: searchResults,
        libraries,
      }
    } catch {
      return null
    }
  },
  enabled: ({ query }: { query: string }) => !!(query && query.trim().length > 0),
  output: ({ data }: { data: any }) => {
    if (!data) return defaultCommunityLibraryResult
    const { assets, libraries } = data
    const variables = assets.variables ? assets.variables.map(mapVariableToWorkflow) : []
    const variableSets = assets.variable_sets ? assets.variable_sets.map(createVariableResConfig) : []
    const libraryIds = new Set(libraries.map((lib: any) => lib.id))
    const filteredAssets = {
      components: (assets.components || []).filter((item: any) => libraryIds.has(item.hub_file_id)),
      stateGroups: (assets.state_groups || []).filter((item: any) => libraryIds.has(item.hub_file_id)),
      styles: (assets.styles || []).filter((item: any) => libraryIds.has(item.hub_file_id)),
      variables: variables.filter((item: any) => libraryIds.has(item.hub_file_id)),
      variableSets: variableSets.filter((item: any) => libraryIds.has(item.hub_file_id)),
    }
    const maxScores = Object.values(filteredAssets).flat().reduce((acc: Record<string, number>, item: any) => {
      acc[item.hub_file_id] = Math.max(item.score, acc[item.hub_file_id] || -Infinity)
      return acc
    }, {})
    return {
      assets: filteredAssets,
      libraries: libraries.sort((a: any, b: any) => (maxScores[a.id] < maxScores[b.id] ? 1 : -1)),
    }
  },
})

/**
 * Hook to search community libraries and return results.
 * Original name: $$u0
 * @param query - The search query string.
 * @returns Object containing assets, libraries, hasResults, and isLoading.
 */
export function useCommunityLibrarySearch(query: string) {
  const isFigmaLibrariesEnabled = useFigmaLibrariesEnabled()
  const [resource] = setupResourceAtomHandler(communityLibraryQuery({ query }), {
    enabled: isFigmaLibrariesEnabled,
  })
  const hasResults = resource.status === 'loaded' && resource.data.libraries.length > 0
  const { assets, libraries } = hasResults ? resource.data : defaultCommunityLibraryResult
  return {
    assets,
    libraries,
    hasResults,
    isLoading: resource.status === 'loading',
  }
}

/**
 * Hook to get processed library results with associated assets.
 * Original name: $$p2
 * @param query - The search query string.
 * @returns Array of library objects with filtered assets.
 */
export function useProcessedLibraryResults(query: string) {
  const { hasResults, libraries, assets } = useCommunityLibrarySearch(query)
  return useMemo(() => hasResults
    ? libraries.map((library: any) => {
        const { id } = library
        return {
          file: transformCommunityLibraryFile(library),
          components: assets.components.filter((item: any) => item.hub_file_id === id),
          stateGroups: assets.stateGroups.filter((item: any) => item.hub_file_id === id),
          styles: assets.styles.filter((item: any) => item.hub_file_id === id),
          variables: assets.variables.filter((item: any) => item.hub_file_id === id),
          variableSets: assets.variableSets.filter((item: any) => item.hub_file_id === id),
        }
      })
    : [], [libraries, assets, hasResults])
}

// Exported aliases for backward compatibility or external use
export const DV = useCommunityLibrarySearch
export const XD = communityLibraryQuery
export const gE = useProcessedLibraryResults
