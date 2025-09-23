import { getSingletonSceneGraph } from '../905/700578'
import { filterNotNullish } from '../figma_app/656233'

/**
 * Returns the scene graph node if it is a SYMBOL or a state group.
 * Original: $$a1
 */
export function getSymbolOrStateGroupNode(guid: string) {
  const node = getSingletonSceneGraph().get(guid)
  return node?.type === 'SYMBOL' || node?.isStateGroup ? node : null
}

/**
 * Finds all nodes matching the given types from the scene graph.
 * Original: s
 */
function findNodesByTypes(node: { sceneGraph: Map<string, any>, findAllWithCriteriaGUIDs: ({types}: {types: string[]}) => string[] }, types: string[]) {
  const sceneGraph = node.sceneGraph
  return filterNotNullish(
    node.findAllWithCriteriaGUIDs({ types }).map((guid: string) => sceneGraph.get(guid)),
  )
}

/**
 * Traverses nodes and collects SYMBOLs and state groups based on options.
 * Original: $$o0
 */
export function collectSymbolsAndStateGroups(nodes: any[], options: { followInstances: boolean }) {
  const result: any[] = []
  const visited = new Set<string>()
  const stack = [...nodes]

  while (stack.length !== 0) {
    const node = stack.pop()
    if (!node || visited.has(node.guid))
      continue
    visited.add(node.guid)

    if (node.parentNode?.isStateGroup) {
      stack.push(node.parentNode)
      if (!options.followInstances)
        continue
    }
    else if (node.type === 'SYMBOL') {
      result.push(node)
      if (!options.followInstances)
        continue
    }

    if (!node.isStateGroup || (result.push(node), options.followInstances)) {
      if (options.followInstances) {
        if (node.type === 'INSTANCE' && node.symbolId) {
          const symbolNode = node.sceneGraph.get(node.symbolId)
          if (symbolNode)
            stack.push(symbolNode)
        }
        stack.push(...findNodesByTypes(node, ['INSTANCE', 'COMPONENT', 'COMPONENT_SET']))
      }
      else {
        stack.push(...findNodesByTypes(node, ['COMPONENT', 'COMPONENT_SET']))
      }
    }
  }
  return result
}

// Export aliases for backward compatibility
export const B = collectSymbolsAndStateGroups
export const c = getSymbolOrStateGroupNode
