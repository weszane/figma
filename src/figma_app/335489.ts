import { MIXED_MARKER } from '../905/216495'

/**
 * Groups instances by their associated state ID.
 * Original function name: $$i0
 * @param instances - Array of instance IDs
 * @param nodeMap - Map of node IDs to node objects
 * @returns Object mapping state IDs to arrays of instance IDs
 */
export function groupInstancesByState(
  instances: string[],
  nodeMap: Map<string, any>,
): Record<string, string[]> {
  const result: Record<string, string[]> = {}
  for (const instanceId of instances) {
    const node = nodeMap.get(instanceId)
    let stateId: string | undefined
    if (node?.type === 'INSTANCE') {
      stateId = node.symbolId
    }
    else {
      stateId = node?.containingSymbolId ?? node?.topmostBackingStateId
    }
    if (stateId && nodeMap.get(stateId)?.isState) {
      if (!result[stateId]) {
        result[stateId] = []
      }
      result[stateId].push(instanceId)
    }
  }
  return result
}

/**
 * Aggregates state variant properties, marking mixed values.
 * Original function name: $$a1
 * @param stateMap - Map of state IDs to state objects
 * @param stateIds - Array of state IDs to process
 * @param propertyKeys - Array of property keys to aggregate
 * @returns Object mapping property keys to aggregated values or MIXED_MARKER
 */
export function aggregateStateVariantProps(
  stateMap: Record<string, any> | null,
  stateIds: string[],
  propertyKeys: string[],
) {
  if (!stateMap)
    return {}
  const result: Record<string, string | typeof MIXED_MARKER> = {}
  for (const stateId of stateIds) {
    const propertyValues = stateMap[stateId]?.stateVariantProps?.propertyValues
    if (propertyValues) {
      for (const key of propertyKeys) {
        if (key in result && result[key] !== propertyValues[key]) {
          result[key] = result[key] && propertyValues[key] ? MIXED_MARKER : ''
        }
        else {
          result[key] = propertyValues[key] || ''
        }
      }
    }
  }
  return result
}

// Refactored exports to match new function names
export const D = groupInstancesByState
export const s = aggregateStateVariantProps
