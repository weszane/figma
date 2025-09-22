// Original variables: n -> pendingCallbacks, r -> sideHandlers
let pendingCallbacks: (() => void)[] = []
let sideHandlers: { left: (() => void) | null, right: (() => void) | null } = {
  left: null,
  right: null,
}

/**
 * Sets a handler for a specified side ('left' or 'right'), calling the previous handler if it exists.
 * Original function name: $$a1
 * @param side - The side to set the handler for.
 * @param handler - The new handler function or null.
 */
export function setSideHandler(side: 'left' | 'right', handler: (() => void) | null): void {
  const previous = sideHandlers[side]
  if (previous) {
    previous()
  }
  sideHandlers[side] = handler
}

/**
 * Defers a callback by adding it to the pending list. If it's the first callback, sets up a 'right' handler to flush all pending callbacks.
 * Original function name: $$s0
 * @param callback - The callback function to defer.
 */
export function deferCallback(callback: () => void): void {
  if (pendingCallbacks.length === 0) {
    setSideHandler('right', () => {
      pendingCallbacks.forEach(cb => cb())
      pendingCallbacks = []
    })
  }
  pendingCallbacks.push(callback)
}

// Refactored export names to match new function names
export const D = deferCallback
export const W = setSideHandler
