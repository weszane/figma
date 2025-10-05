import { useContext, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fileVersionSelector } from "../905/91038"
import { groupAssetsByLibraryKey } from "../905/131786"
import { UsedStylesContext } from "../905/336143"
import { withParsedMeta } from "../905/405710"
import { liveStoreInstance } from "../905/713695"
import { librariesAPI } from "../905/939602"
import { filesByLibraryKeyAtom } from "../905/977779"
import { atomStoreManager } from "../figma_app/27355"
import { subscribedStateGroupsNodeIdsFromLoadedPagesSelector, subscribedSymbolsNodeIdsFromLoadedPagesSelector } from "../figma_app/141508"
import { PrimaryWorkflowEnum } from "../figma_app/633080"
import { selectSceneGraph } from "../figma_app/889655"

// Original: $$_1
/**
 * mergeComponentsWithOrphanStateGroups (original: $$_1)
 *
 * Merge components with state groups, placing state groups first and then
 * any components that are not contained within a state group's frame.
 *
 * @param components - Array of component-like objects
 * @param stateGroups - Array of state-group-like objects
 * @returns merged array with state groups first then orphan components
 */
export function mergeComponentsWithOrphanStateGroups(
  components: Array<{ containing_frame?: { containingStateGroup?: unknown } | null }>,
  stateGroups: unknown[],
) {
  return [...stateGroups, ...components.filter((c) => c.containing_frame?.containingStateGroup == null)]
}

// Original: $$A2
/**
 * useLibraryAssetsFromStats (original: $$A2)
 *
 * Hook that returns either a merged productComponentStats listing (when files for a library exist
 * in the atom store) or a computed grouped asset list built from the scene graph and library state.
 *
 * @param params.productComponentStats - optional product stats with components & stateGroups
 * @param params.libraryKey - optional library key to look up on-disk files
 */
export function useLibraryAssetsFromStats({
  productComponentStats,
  libraryKey,
}: {
  productComponentStats?: { components?: any[]; stateGroups?: any[] }
  libraryKey?: string
}) {
  // Pull local files cache for libraryKey from atom store manager
  const filesByLibrary = atomStoreManager.get(filesByLibraryKeyAtom)
  const localFilesForLibrary = libraryKey ? filesByLibrary[libraryKey] : undefined

  // merged list from productComponentStats
  const mergedFromStats = useMemo(
    () => mergeComponentsWithOrphanStateGroups(productComponentStats?.components ?? [], productComponentStats?.stateGroups ?? []),
    [productComponentStats],
  )

  // useAssetsForLibrary encapsulates all hooks needed to compute grouped assets from app state
  // Original: inner IIFE returning memoized grouped assets
  function useAssetsForLibrary(libraryKeyParam?: string) {
    const dispatch = useDispatch()
    const sceneGraph = useSelector(selectSceneGraph)
    const libraryState = useSelector((s: any) => s.library)
    const currentFileVersion = useSelector(fileVersionSelector)
    const subscribedSymbols = useSelector(subscribedSymbolsNodeIdsFromLoadedPagesSelector)
    const subscribedStateGroups = useSelector(subscribedStateGroupsNodeIdsFromLoadedPagesSelector)

    return useMemo(() => {
      if (!libraryKeyParam) return []
      const grouped = groupAssetsByLibraryKey(
        sceneGraph,
        subscribedSymbols,
        subscribedStateGroups,
        libraryState.publishedByLibraryKey,
        currentFileVersion,
        dispatch,
      )[libraryKeyParam] ?? []

      return grouped.map((asset: any) =>
        asset.type === PrimaryWorkflowEnum.COMPONENT
          ? {
              ...asset,
              num_existing_instances: 0,
              num_insertions: 0,
              num_detachments: 0,
            }
          : {
              ...asset,
              num_existing_instances: 0,
              num_insertions: 0,
              num_detachments: 0,
              num_states: 0,
            },
      )
    }, [dispatch, libraryKeyParam, currentFileVersion, libraryState, sceneGraph, subscribedSymbols, subscribedStateGroups])
  }

  const computedGroupedAssets = useAssetsForLibrary(libraryKey)

  return localFilesForLibrary ? mergedFromStats : computedGroupedAssets
}

// Original: $$y0
/**
 * getLibraryLooseComponentAndStateGroupCount (original: $$y0)
 *
 * Returns the total number of loose components and state-groups in the scene graph
 * that originate from the provided library key.
 *
 * @param libraryKey - library key to filter nodes by
 */
export function getLibraryLooseComponentAndStateGroupCount(libraryKey?: string) {
  const sceneGraph = useSelector(selectSceneGraph)
  const subscribedSymbols = useSelector(subscribedSymbolsNodeIdsFromLoadedPagesSelector)
  const subscribedStateGroups = useSelector(subscribedStateGroupsNodeIdsFromLoadedPagesSelector)

  const looseComponentsCount = useMemo(
    () =>
      subscribedSymbols.filter((id) => {
        const node = sceneGraph.get(id)
        return node?.isLooseComponent && node.sourceLibraryKey === libraryKey
      }).length,
    [sceneGraph, libraryKey, subscribedSymbols],
  )

  const stateGroupsCount = useMemo(
    () =>
      subscribedStateGroups.filter((id) => {
        const node = sceneGraph.get(id)
        return node?.sourceLibraryKey === libraryKey
      }).length,
    [sceneGraph, subscribedStateGroups, libraryKey],
  )

  return looseComponentsCount + stateGroupsCount
}

// Original: $$b3
/**
 * useUsedStylesCount (original: $$b3)
 *
 * Return number of used styles for a library key from UsedStylesContext.
 *
 * @param libraryKey - library key to look up style usage
 */
export function useUsedStylesCount(libraryKey?: string) {
  const usedStyles = useContext(UsedStylesContext)
  return usedStyles?.allUsedStylesByLibraryKey?.[libraryKey]?.length ?? 0
}

// Original: $$v4
/**
 * fetchLibraryStylesByFileKeyQuery (original: $$v4)
 *
 * Live query for fetching library styles by library file key.
 */
export const fetchLibraryStylesByFileKeyQuery = liveStoreInstance.Query({
  fetch: async (libraryFileKey?: string) =>
    libraryFileKey == null
      ? []
      : ((await librariesAPI.getLibraryStyles({ libraryFileKey })).data.meta.styles ?? []).map(withParsedMeta),
})

// Original: $$I5
/**
 * fetchLibraryStylesByLibraryKeyQuery (original: $$I5)
 *
 * Live query for fetching library styles by library key.
 */
export const fetchLibraryStylesByLibraryKeyQuery = liveStoreInstance.Query({
  fetch: async (libraryKey?: string) =>
    libraryKey == null
      ? []
      : ((await librariesAPI.getLibraryStylesByLibraryKey({ libraryKey })).data.meta.styles ?? []).map(withParsedMeta),
})

// Keep the original exported short names but map them to the refactored implementations
export const Go = getLibraryLooseComponentAndStateGroupCount // Original export: Go -> $$y0
export const Tf = mergeComponentsWithOrphanStateGroups // Original export: Tf -> $$_1
export const Ze = useLibraryAssetsFromStats // Original export: Ze -> $$A2
export const jN = useUsedStylesCount // Original export: jN -> $$b3
export const lH = fetchLibraryStylesByFileKeyQuery // Original export: lH -> $$v4
export const sU = fetchLibraryStylesByLibraryKeyQuery // Original export: sU -> $$I5
