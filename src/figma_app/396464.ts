import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useMemoStable } from '../905/19536'
import { getSingletonSceneGraph } from '../905/700578'
import { isValidSessionLocalID, parseSessionLocalID } from '../905/871411'
import { getVisibleSpecialChildren } from '../figma_app/387100'
/**
 * Checks if the node is a slide row or a state group (original $$c7).
 * @param node - The node to check.
 * @param isStateGroupCheck - Whether to check for state group.
 * @returns True if it's a slide row or state group.
 */
export function isSlideRowOrStateGroup(node: any, isStateGroupCheck: boolean): boolean {
  return node.type === 'SLIDE_ROW' || (isStateGroupCheck && node.isStateGroup)
}

/**
 * Retrieves cooper frames from the scene graph (original $$u2).
 * @returns Array of cooper frame nodes.
 */
export function getCooperFrames(): any[] {
  const getCanvasGridNode = (): any => {
    const sceneGraph = getSingletonSceneGraph()
    if (!sceneGraph || !sceneGraph.isValidScene)
      return []
    const visibleChildren = getVisibleSpecialChildren(sceneGraph, '0:1')
    return visibleChildren.filter((node: any) => node.type === 'SLIDE_GRID')
  }

  const gridNodes = getCanvasGridNode()
  if (gridNodes.length === 0) {
    console.warn('No valid canvas grid node found')
    return []
  }
  if (gridNodes.length > 1) {
    console.warn('Multiple canvas grid node found')
    return []
  }

  const gridNode = gridNodes[0]
  const slideRows = gridNode.childrenNodes.filter((node: any) => isSlideRowOrStateGroup(node, true))
  const cooperFrames: any[] = []
  for (const slideRow of slideRows) {
    const frames = slideRow.childrenNodes.filter((node: any) => node.isCooperFrame)
    cooperFrames.push(...frames)
  }
  return cooperFrames
}

/**
 * Gets GUIDs of cooper frames (original $$p3).
 * @returns Array of GUIDs.
 */
export function getCooperFrameGuids(): string[] {
  return getCooperFrames().map((frame: any) => frame.guid)
}

/**
 * Memoized cooper frame GUIDs (original $$_0).
 * @returns Memoized array of GUIDs.
 */
export function useCooperFrameGuids(): string[] {
  const guids = getCooperFrameGuids()
  return useMemoStable(() => guids, [guids])
}

/**
 * Gets the single selected cooper frame ID (original $$h4).
 * @returns The cooper frame ID or null.
 */
export function useSelectedCooperFrameId(): string | null {
  const selection = useSelector((state: any) => state.mirror.sceneGraphSelection)
  return useMemo(() => {
    const frameIds = new Set<string>()
    Object.keys(selection).forEach((key: string) => {
      const node = getSingletonSceneGraph().get(key)
      const frameId = node?.containingCooperFrameId()
      if (frameId && isValidSessionLocalID(parseSessionLocalID(frameId))) {
        frameIds.add(frameId)
      }
    })
    const ids = Array.from(frameIds)
    return ids.length === 1 ? ids[0] : null
  }, [selection])
}

/**
 * Gets multiple selected cooper frame IDs (original $$m6).
 * @returns Array of cooper frame IDs.
 */
export function useSelectedCooperFrameIds(): string[] {
  const selection = useSelector((state: any) => state.mirror.sceneGraphSelection)
  return useMemoStable(() => {
    const frameIds = new Set<string>()
    Object.keys(selection).forEach((key: string) => {
      const node = getSingletonSceneGraph().get(key)
      const frameId = node?.containingCooperFrameId()
      if (frameId && isValidSessionLocalID(parseSessionLocalID(frameId))) {
        frameIds.add(frameId)
      }
    })
    return [...frameIds]
  }, [selection])
}

/**
 * Gets selected slide row GUIDs (original $$g5).
 * @returns Array of slide row GUIDs.
 */
export function useSelectedSlideRowGuids(): string[] {
  const selection = useSelector((state: any) => state.mirror.sceneGraphSelection)
  return useMemoStable(() => {
    const guids = new Set<string>()
    Object.keys(selection).forEach((key: string) => {
      const node = getSingletonSceneGraph().get(key)
      if (node && isSlideRowOrStateGroup(node, true)) {
        guids.add(node.guid)
      }
    })
    return [...guids]
  }, [selection])
}

/**
 * Checks if the node's containing cooper frame is an instance (original $$f1).
 * @param node - The node to check.
 * @returns True if the containing frame is an instance.
 */
export function isContainingFrameInstance(node: any): boolean {
  const frame = node.containingCooperFrame()
  return !!(frame && frame.isInstance)
}

// Updated exports to match refactored function names
export const Pc = useCooperFrameGuids
export const Pk = isContainingFrameInstance
export const Wn = getCooperFrames
export const XR = getCooperFrameGuids
export const bd = useSelectedCooperFrameId
export const dS = useSelectedSlideRowGuids
export const gI = useSelectedCooperFrameIds
export const qq = isSlideRowOrStateGroup
