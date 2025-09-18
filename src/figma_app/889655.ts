import { createSelector } from 'reselect'
import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { createDeepEqualSelector, memoizeWithDeepEquality } from '../905/270781'

/**
 * Selector for sceneGraphSelection from mirror.
 * (Original: $$s9)
 */
export const selectSceneGraphSelection = (state: any) => state.mirror.sceneGraphSelection

/**
 * Selector for sceneGraph from mirror.
 * (Original: $$o11)
 */
export const selectSceneGraph = (state: any) => state.mirror.sceneGraph

/**
 * Selector for appModel from mirror.
 * (Original: $$l14)
 */
export const selectAppModel = (state: any) => state.mirror.appModel

/**
 * Memoized selector for keys of sceneGraphSelection.
 * (Original: $$d7)
 */
export const selectSceneGraphSelectionKeys = memoizeWithDeepEquality(
  (state: any): string[] => Object.keys(selectSceneGraphSelection(state)),
)

/**
 * Returns the single selected key, or null if not exactly one.
 * (Original: $$c19)
 * @param state
 */
export function getSingleSelectedKey(state: any): string | null {
  const keys: any = selectSceneGraphSelectionKeys(state)
  const firstKey = keys[0]
  return keys.length === 1 && firstKey ? firstKey : null
}

/**
 * Returns multiple selected keys, or null if not more than one.
 * (Original: $$u10)
 * @param state
 */
export function getMultipleSelectedKeys(state: any): string[] | null {
  const keys: any = selectSceneGraphSelectionKeys(state)
  return keys.length > 1 ? keys : null
}

/**
 * Selector for a single selected node from sceneGraph.
 * (Original: $$p2)
 */
export const selectSingleSelectedNode = createSelector(
  [selectSceneGraph, getSingleSelectedKey],
  (sceneGraph, key) => key ? sceneGraph.get(key) : null,
)

/**
 * Returns a function to get a node by key from sceneGraph.
 * (Original: _)
 */
export const getNodeByKey = () => (state: any, key: string) => selectSceneGraph(state).get(key)

/**
 * Memoized selector for style publish info for a node.
 * (Original: $$h16)
 */
export function getStylePublishInfoSelector() {
  const getNode = getNodeByKey()
  return memoizeWithDeepEquality((state: any, key: string) => {
    const node = getNode(state, key)
    return node == null
      ? null
      : {
          key: node.styleKeyForPublish,
          version: node.styleVersionHash,
        }
  })
}

/**
 * Memoized selector for mapping keys to style publish info.
 * (Original: $$m0)
 */
export function getStylePublishInfoMapSelector() {
  const getStylePublishInfo = getStylePublishInfoSelector()
  return memoizeWithDeepEquality((state: any, keys: string[]) =>
    new Map(keys.map(key => [key, getStylePublishInfo(state, key)])),
  )
}

/**
 * Selector for number of selected items.
 * (Original: $$g1)
 */
export function getNumSelected(state: any) {
  return state.mirror.selectionProperties.numSelected || 0
}

/**
 * Deep equal selector for instance keys.
 * (Original: $$f12)
 */
export const selectInstanceKeys = createDeepEqualSelector(
  [selectSceneGraphSelectionKeys, selectSceneGraph],
  getInstanceKeys,
)

/**
 * Returns keys of selected nodes that are instances.
 * (Original: $$E15)
 * @param keys
 * @param sceneGraph
 */
export function getInstanceKeys(keys: string[], sceneGraph: Map<string, any>): string[] {
  const result: string[] = []
  keys.forEach((key) => {
    const node = sceneGraph.get(key)
    if (node?.type === 'INSTANCE' || node?.isInstanceSublayer) {
      result.push(key)
    }
  })
  return result
}

/**
 * Selector for selected nodes.
 * (Original: $$y4)
 */
export const selectSelectedNodes = createSelector(
  [selectSceneGraph, selectSceneGraphSelectionKeys],
  (sceneGraph, keys) => {
    const result: any[] = []
    keys.forEach((key) => {
      const node = sceneGraph.get(key)
      if (node)
        result.push(node)
    })
    return result
  },
)

/**
 * Memoized selector for publishable style node IDs.
 * (Original: $$b6)
 */
export const selectPublishableStyleNodeIds = memoizeWithDeepEquality(
  (state: any) => state.library.publishableStyles.map((style: any) => style.nodeId),
)

/**
 * Memoized selector for local styles with usages on loaded pages.
 * (Original: $$T5)
 */
export const selectLocalStylesWithUsagesOnLoadedPages = memoizeWithDeepEquality(
  (state: any) => state.library.localStylesThatHaveUsagesOnLoadedPages,
)

/**
 * Memoized selector for local styles with usages on current page.
 * (Original: $$I17)
 */
export const selectLocalStylesWithUsagesOnCurrentPage = memoizeWithDeepEquality(
  (state: any) => new Set(state.library.localStylesThatHaveUsagesOnCurrentPage),
)

/**
 * Redux subscription atom for local styles with usages on loaded pages.
 * (Original: $$S18)
 */
export const localStylesWithUsagesOnLoadedPagesAtom
  = createReduxSubscriptionAtomWithState(selectLocalStylesWithUsagesOnLoadedPages)

/**
 * Memoized selector for local symbols with usages on loaded pages.
 * (Original: $$v8)
 */
export const selectLocalSymbolsWithUsagesOnLoadedPages = memoizeWithDeepEquality(
  (state: any) => state.library.localSymbolsThatHaveUsagesOnLoadedPages,
)

/**
 * Memoized selector for local symbols with usages on current page.
 * (Original: $$A3)
 */
export const selectLocalSymbolsWithUsagesOnCurrentPage = memoizeWithDeepEquality(
  (state: any) => new Set(state.library.localSymbolsThatHaveUsagesOnCurrentPage),
)

/**
 * Returns true if the node is not visible.
 * (Original: $$x13)
 * @param state
 * @param key
 */
export function isNodeNotVisible(state: any, key: string): boolean {
  const sceneGraph = selectSceneGraph(state)
  return !sceneGraph.get(key)?.visible
}

// Exported variables with refactored names
export const YJ = getStylePublishInfoMapSelector
export const YU = getNumSelected
export const AF = selectSingleSelectedNode
export const BA = selectLocalSymbolsWithUsagesOnCurrentPage
export const F4 = selectSelectedNodes
export const O1 = selectLocalStylesWithUsagesOnLoadedPages
export const RW = selectPublishableStyleNodeIds
export const Sh = selectSceneGraphSelectionKeys
export const T_ = selectLocalSymbolsWithUsagesOnLoadedPages
export const Xt = selectSceneGraphSelection
export const a$ = getMultipleSelectedKeys
export const dK = selectSceneGraph
export const dT = selectInstanceKeys
export const f5 = isNodeNotVisible
export const nj = selectAppModel
export const rT = getInstanceKeys
export const t = getStylePublishInfoSelector
export const tX = selectLocalStylesWithUsagesOnCurrentPage
export const tn = localStylesWithUsagesOnLoadedPagesAtom
export const vD = getSingleSelectedKey
