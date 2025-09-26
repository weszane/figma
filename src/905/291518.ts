import { isValidSessionLocalID, parseSessionLocalID } from '../905/871411'
import { PrototypingTsApi } from '../figma_app/763686'
/**
 * Returns the active prototype starting point node ID if valid,
 * otherwise returns the first visually sorted base screen node ID if valid, or null.
 * (Original function: $$a0)
 */
export function getValidPrototypeNodeId(): string | null {
  // Try to get the active prototype starting point node ID
  const activeNodeId = PrototypingTsApi.getActivePrototypeStartingPointNodeIdOnCurrentPage()
  if (isValidSessionLocalID(parseSessionLocalID(activeNodeId))) {
    return activeNodeId
  }

  // Fallback: Try to get the first visually sorted base screen node ID
  const baseScreenNodeId = PrototypingTsApi.findFirstVisuallySortedBaseScreenOnCurrentPage()
  if (isValidSessionLocalID(parseSessionLocalID(baseScreenNodeId))) {
    return baseScreenNodeId
  }

  // If neither is valid, return null
  return null
}

/**
 * Alias for getValidPrototypeNodeId (original export: s)
 */
export const s = getValidPrototypeNodeId
