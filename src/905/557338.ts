import { createSelector } from 'reselect'
import { memoizeWithDeepEquality } from '../905/270781'
import { isNotNullish } from '../figma_app/95419'
import { aK } from '../figma_app/524618'
import { selectSceneGraph } from '../figma_app/889655'

/**
 * Extracts publish information from a scene graph node.
 * @param nodeId - The ID of the node.
 * @param sceneGraph - The scene graph map.
 * @returns An object with publishID, key, and libraryKey if available, otherwise null.
 */
export function extractPublishInfo(nodeId: string, sceneGraph: Map<string, any>): { publishID: string, key: string, libraryKey: string } | null {
  const node = sceneGraph.get(nodeId)
  const { publishID, componentKey, stateGroupKey } = node ?? {}
  const key = componentKey || stateGroupKey
  const libraryKey = node?.sourceLibraryKey
  return publishID && key && libraryKey
    ? { publishID, key, libraryKey }
    : null
}

/**
 * Memoized selector for selected symbol GUIDs from mirror selection properties.
 * @param state - The state object containing mirror selection properties.
 * @returns An array of selected symbol GUIDs.
 */
const getSelectedSymbolGUIDs = memoizeWithDeepEquality((state: any) => Object.keys(state.mirror.selectionProperties.symbolGUIDsBackingSelection ?? {}))

/**
 * Selector for publish infos of selected symbol GUIDs.
 */
const selectPublishInfos = createSelector([selectSceneGraph, getSelectedSymbolGUIDs], (sceneGraph, guids) => guids.map(guid => extractPublishInfo(guid, sceneGraph)).filter(isNotNullish))

/**
 * Creates a selector for primary or swapped nested instances.
 * @returns A selector function.
 */
export function createPrimaryInstancesSelector() {
  return createSelector([selectSceneGraph, (state: any, nodeIds: string[]) => nodeIds], (sceneGraph, nodeIds) => nodeIds.filter((nodeId) => {
    const node = sceneGraph.get(nodeId)
    return node?.isPrimaryInstance || node?.isSwappedNestedInstance
  }).map(nodeId => aK(nodeId, sceneGraph)).filter(isNotNullish))
}

/**
 * Selector for the common library key among publish infos, if all share the same key.
 */
export const selectCommonLibraryKey = createSelector([selectPublishInfos], (publishInfos) => {
  if (publishInfos.length < 1)
    return null
  const firstLibraryKey = publishInfos[0]?.libraryKey
  if (!firstLibraryKey)
    return null
  for (const info of publishInfos) {
    if (info.libraryKey !== firstLibraryKey)
      return null
  }
  return firstLibraryKey
})

// Refactored exports with meaningful names
export const CX = selectCommonLibraryKey
export const QL = extractPublishInfo
export const bd = createPrimaryInstancesSelector
export const i2 = getSelectedSymbolGUIDs
