/**
 * Handles deferred execution of a callback function.
 * @module DeferredCallbackHandler
 */

type Callback = () => void

let deferredCallback: Callback | null = null
let shouldDefer: boolean = false

/**
 * Registers a callback to be executed. If a deferred execution was requested,
 * executes the callback immediately.
 * @param callback - The callback function to register.
 * @originalName $$r1
 */
export function registerDeferredCallback(callback: Callback): void {
  deferredCallback = callback
  if (shouldDefer) {
    shouldDefer = false
    callback()
  }
}

/**
 * Requests execution of the registered callback. If no callback is registered,
 * sets a flag to defer execution until a callback is registered.
 * @originalName $$s0
 */
export function requestDeferredExecution(): void {
  if (deferredCallback) {
    deferredCallback()
  }
  else {
    shouldDefer = true
  }
}

// Exported aliases for compatibility
export const H = requestDeferredExecution
export const R = registerDeferredCallback
