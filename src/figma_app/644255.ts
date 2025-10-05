import { HandoffBindingsCpp } from "../figma_app/763686"

// Node change callback registry
let nodeChangeCallbacks: Array<(event: any) => void> = []

// Node change handler object
export let nodeChangeHandler: { nodeChange: (event: any) => void } | undefined

/**
 * Register a node change callback
 * @param callback - Function to be called when node changes occur
 */
export function registerNodeChangeCallback(callback: (event: any) => void): void {
  nodeChangeCallbacks.push(callback)
  if (nodeChangeCallbacks.length > 0) {
    HandoffBindingsCpp.setIsNodeChangeCallbackRegistered(true)
  }
}

/**
 * Unregister a node change callback
 * @param callback - Function to be removed from the callback registry
 */
export function unregisterNodeChangeCallback(callback: (event: any) => void): void {
  nodeChangeCallbacks = nodeChangeCallbacks.filter(cb => cb !== callback)
  if (nodeChangeCallbacks.length === 0) {
    HandoffBindingsCpp.setIsNodeChangeCallbackRegistered(false)
  }
}

/**
 * Initialize the node change handler
 */
export function initializeNodeChangeHandler(): void {
  nodeChangeHandler = {
    nodeChange: (event: any) => {
      for (const callback of nodeChangeCallbacks) {
        callback(event)
      }
    },
  }
}

// Aliases for backward compatibility
export const BT = registerNodeChangeCallback // alias for $$s0
export const Ju = initializeNodeChangeHandler // alias for $$l1
export const q$ = unregisterNodeChangeCallback // alias for $$o2
export const rS = nodeChangeHandler // alias for $$n3
