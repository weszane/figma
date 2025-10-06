import { BoundsWatcherCpp } from "../figma_app/763686"
// Refactored code for bounds watching functionality
const boundsChangeCallbacks = new Set<() => void>()

/**
 * Watch bounds for specified nodes
 * (Original function: $$a3)
 */
export function watchBoundsForNodes(nodes: any[]): void {
  BoundsWatcherCpp.watchBoundsForNodes(nodes)
}

/**
 * Watch bounds for stable paths
 * (Original function: $$s0)
 */
export function watchBoundsForStablePaths(paths: any[]): void {
  BoundsWatcherCpp.watchBoundsForStablePaths(paths)
}

/**
 * Add callback for bounds change notifications
 * (Original function: $$o1)
 */
export function addBoundsChangeListener(callback: () => void): void {
  boundsChangeCallbacks.add(callback)
}

/**
 * Remove callback from bounds change notifications
 * (Original function: $$l4)
 */
export function removeBoundsChangeListener(callback: () => void): void {
  boundsChangeCallbacks.delete(callback)
}

/**
 * Handler for node bounds changes
 */
class BoundsChangeHandler {
  /**
   * Notify all registered callbacks when node bounds change
   */
  nodeBoundsChanged(): void {
    for (const callback of boundsChangeCallbacks) {
      callback()
    }
  }
}

let boundsChangeHandlerInstance: BoundsChangeHandler | null = null

/**
 * Get singleton instance of bounds change handler
 * (Original function: $$u2)
 */
export function getBoundsChangeHandler(): BoundsChangeHandler {
  if (!boundsChangeHandlerInstance) {
    boundsChangeHandlerInstance = new BoundsChangeHandler()
  }
  return boundsChangeHandlerInstance
}

// Export aliases for backward compatibility
export const $r = watchBoundsForStablePaths
export const B_ = addBoundsChangeListener
export const Iu = getBoundsChangeHandler
export const PN = watchBoundsForNodes
export const mo = removeBoundsChangeListener
