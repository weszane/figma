import { createContext, useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createSelector } from "reselect"

import { useStableMemo } from "../905/19536"
import { EverPublishedLibraryQuery } from "../905/404538"
import { liveStoreInstance } from "../905/713695"
import { getParentOrgId } from "../905/872904"
import { filesByLibraryKeyAtom } from "../905/977779"
import { useAtomWithSubscription } from "../figma_app/27355"
import { allSubscribedStylesNodeIdsFromLoadedPagesSelector, subscribedStateGroupsNodeIdsFromLoadedPagesSelector, subscribedSymbolsNodeIdsFromLoadedPagesSelector } from "../figma_app/141508"
import { useHasResourcePresetKey } from "../figma_app/255679"
import { selectCurrentFile, useFileLibraryKeys } from "../figma_app/516028"
import { fetchUnpublishedStyles } from "../figma_app/646357"
import { selectSceneGraph } from "../figma_app/889655"
import { useLatestRef } from "../figma_app/922077"

// Original selector: f
const selectAllStyles = createSelector([(e: AppState) => e.library.used__LIVEGRAPH], e => Object.values(e.styles))

// Original selector: _
const selectLoadedStylesByKey = createSelector([selectAllStyles], (styles) => {
  const loadedStyles: Record<string, any> = {}
  for (const style of styles) {
    if (style.status === "loaded") {
      loadedStyles[style.data.key] = style.data
    }
  }
  return loadedStyles
})

// Original context: $$v0
export const UsedStylesContext = createContext<{
  allUsedStylesByLibraryKey: Record<string, any>
  allUsedLibraryKeys: string[]
} | null>(null)

/**
 * Hook to manage used styles and library keys from subscribed nodes.
 * Original hook: $$I1
 */
export function useUsedStyles() {
  const dispatch = useDispatch<AppDispatch>()
  const [usedStylesData, setUsedStylesData] = useState<{
    allUsedStylesByLibraryKey: Record<string, any>
    allUsedLibraryKeys: string[]
  } | null>(null)

  const sceneGraph = useSelector(selectSceneGraph)
  const subscribedSymbolsNodeIds = useSelector(subscribedSymbolsNodeIdsFromLoadedPagesSelector)
  const subscribedStateGroupsNodeIds = useSelector(subscribedStateGroupsNodeIdsFromLoadedPagesSelector)
  const currentFile = selectCurrentFile()
  const parentOrgId = getParentOrgId()

  // Memoize unique library keys from subscribed nodes
  const uniqueLibraryKeys = useMemo(() => {
    const keys = new Set<string>()
    const allSubscribedNodes = [...subscribedSymbolsNodeIds, ...subscribedStateGroupsNodeIds]
      .map(nodeId => sceneGraph.get(nodeId))
      .filter(node => node && !node.isState && node.sourceLibraryKey && node.sourceLibraryKey !== currentFile?.libraryKey)
    for (const node of allSubscribedNodes) {
      if (node?.sourceLibraryKey) {
        keys.add(node.sourceLibraryKey)
      }
    }
    return Array.from(keys)
  }, [sceneGraph, subscribedSymbolsNodeIds, subscribedStateGroupsNodeIds, currentFile])

  const allSubscribedStylesNodeIds = useSelector(allSubscribedStylesNodeIdsFromLoadedPagesSelector)
  const fileVersion = useSelector<AppState>(e => e.fileVersion)
  const filesByLibraryKey = useAtomWithSubscription(filesByLibraryKeyAtom)
  const fileLibraryKeys = useFileLibraryKeys()
  const latestSubscribedStylesRef = useLatestRef(allSubscribedStylesNodeIds)
  const loadedStylesByKey = useSelector(selectLoadedStylesByKey)
  const hasResourcePresetKey = useHasResourcePresetKey()

  useEffect(() => {
    if (allSubscribedStylesNodeIds !== latestSubscribedStylesRef.current) {
      Promise.all([
        fetchUnpublishedStyles(sceneGraph, allSubscribedStylesNodeIds, loadedStylesByKey, filesByLibraryKey, parentOrgId, fileLibraryKeys, dispatch),
        liveStoreInstance.fetch(EverPublishedLibraryQuery({
          libraryKeys: uniqueLibraryKeys,
        })),
      ]).then(([{ usedStylesByLibraryKey }, publishedLibraries]) => {
        const allUsedLibraryKeys = Array.from(new Set([...publishedLibraries, ...Object.keys(usedStylesByLibraryKey)])).sort()
        setUsedStylesData({
          allUsedStylesByLibraryKey: usedStylesByLibraryKey,
          allUsedLibraryKeys,
        })
      })
    }
  }, [parentOrgId, fileLibraryKeys, dispatch, fileVersion, filesByLibraryKey, sceneGraph, uniqueLibraryKeys, allSubscribedStylesNodeIds, latestSubscribedStylesRef, loadedStylesByKey, hasResourcePresetKey])

  return useStableMemo(usedStylesData)
}

export const r = UsedStylesContext
export const F = useUsedStyles
