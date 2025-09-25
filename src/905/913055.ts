import { useEffect, useState } from 'react'
import { getSingletonSceneGraph } from '../905/700578'
import { Tv } from '../figma_app/151869'
import { BreakpointFrameHelpersBindings } from '../figma_app/763686'

/**
 * Retrieves scene graph nodes by their IDs.
 * Original function: o
 * @param ids - Array of node IDs.
 * @returns Array of valid scene graph nodes.
 */
function getSceneGraphNodesByIds(ids: string[]): any[] {
  return ids
    .map(id => getSingletonSceneGraph().get(id))
    .filter(node => !!node)
}

/**
 * Gets selected nodes within a single breakpoint frame.
 * Original function: $$l2
 * @returns Array of selected scene graph nodes.
 */
export function getSelectedNodesWithinBreakpointFrame(): any[] {
  const selectedIds = BreakpointFrameHelpersBindings?.getSelectedNodesWithinSingleBreakpointFrame() ?? []
  return getSceneGraphNodesByIds(selectedIds)
}

/**
 * Gets matching nodes to update for a given query.
 * Original function: $$d1
 * @param query - Query object containing a guid.
 * @param param - Additional parameter for the query.
 * @returns Array of matching scene graph nodes.
 */
export function getMatchingNodesToUpdateForQuery(query: { guid: string }, param: any): any[] {
  const matchingIds = BreakpointFrameHelpersBindings?.getMatchingNodesToUpdateForQuery(query.guid, param) ?? []
  return getSceneGraphNodesByIds(matchingIds)
}

/**
 * React hook to get selected nodes within a breakpoint frame.
 * Original function: $$c0
 * @returns Array of selected scene graph nodes.
 */
export function useSelectedNodesWithinBreakpointFrame(): any[] {
  const [selectedNodes, setSelectedNodes] = useState<any[]>([])
  const tv = Tv()

  useEffect(() => {
    setSelectedNodes(getSelectedNodesWithinBreakpointFrame())
  }, [tv])

  return selectedNodes
}

// Refactored exports for compatibility with original names
export const JT = useSelectedNodesWithinBreakpointFrame
export const Mo = getMatchingNodesToUpdateForQuery
export const i2 = getSelectedNodesWithinBreakpointFrame
