import { useSelector } from "react-redux"
import { jY } from "../figma_app/151869"
import { getMultipleSelectedKeys, getSingleSelectedKey, selectSceneGraphSelectionKeys } from "../figma_app/889655"
// Origin: /Users/allen/sigma-main/src/figma_app/311375.ts
// Refactored: Renamed variables/functions, added TypeScript types, improved readability, added comments, simplified logic, noted assumed dependencies.

// Assumed dependencies:
// - useSelector: from react-redux
// - getSingleSelectedKey, selectSceneGraphSelectionKeys, getMultipleSelectedKeys: selector functions returning string or string[]
// - jY: assumed to return a Map<string, unknown> (scene graph map)
// - The original code uses minified names; these have been expanded for clarity.

// Type definitions for selectors and scene graph
type SceneGraphMap = Map<string, unknown>

// Selector return types (assumed based on usage)
type SingleSelectedKey = string | null
type MultipleSelectedKeys = string[]
type SceneGraphSelectionKeys = string[]

// Returns the single selected key from the Redux store
export function useSingleSelectedKey(): SingleSelectedKey {
  return useSelector(getSingleSelectedKey)
}

// Returns all selected scene graph keys from the Redux store
export function useSceneGraphSelectionKeys(): SceneGraphSelectionKeys {
  return useSelector(selectSceneGraphSelectionKeys)
}

// Returns multiple selected keys from the Redux store
export function useMultipleSelectedKeys(): MultipleSelectedKeys {
  return useSelector(getMultipleSelectedKeys)
}

// Returns an array of scene graph items for the currently selected keys
export function getSelectedSceneGraphItems(): unknown[] {
  const selectedKeys = useSceneGraphSelectionKeys()
  const sceneGraph = jY() as SceneGraphMap
  // Map each selected key to its scene graph item, filter out nulls
  return selectedKeys
    .map(key => getSceneGraphItemByKey(sceneGraph, key))
    .filter((item): item is unknown => item !== null)
}

// Returns a scene graph item by key
export function getSceneGraphItem(key: string): unknown | null {
  const sceneGraph = jY() as SceneGraphMap
  return getSceneGraphItemByKey(sceneGraph, key)
}

// Helper: Gets a scene graph item from the map by key, returns null if key is falsy
export function getSceneGraphItemByKey(
  sceneGraph: SceneGraphMap,
  key: string | null | undefined,
): unknown | null {
  return key ? sceneGraph.get(key) ?? null : null
}

// Export aliases to preserve original code's export names
export const NM = useMultipleSelectedKeys
export const O1 = getSelectedSceneGraphItems
export const Tv = useSceneGraphSelectionKeys
export const Zl = getSceneGraphItemByKey
export const mJ = getSceneGraphItem
export const uQ = useSingleSelectedKey
