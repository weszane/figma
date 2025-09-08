import { createDeferredPromise } from '../905/874553'

/**
 * Tracks the timestamp when the document becomes hidden.
 * @original r
 */
let hiddenTimestamp: number | null = document.visibilityState === 'hidden' ? Date.now() : null

/**
 * Stores resolve functions for deferred promises waiting for visibility change.
 * @original a
 */
const deferredResolves = new Set<(value?: any) => void>()

/**
 * Returns a promise that resolves when the document becomes visible,
 * if it was hidden for at least 30 seconds. Otherwise, resolves immediately.
 * @original $$s0
 */
export function waitForVisibility(): Promise<void> {
  if (hiddenTimestamp === null || Date.now() - hiddenTimestamp < 30000) {
    return Promise.resolve()
  }
  const { promise, resolve } = createDeferredPromise()
  deferredResolves.add(resolve)
  return promise
}

/**
 * Handles document visibility changes.
 * @original document.addEventListener("visibilitychange", ...)
 */
function handleVisibilityChange(): void {
  if (document.visibilityState === 'hidden') {
    hiddenTimestamp = Date.now()
  }
  else if (document.visibilityState === 'visible') {
    hiddenTimestamp = null
    deferredResolves.forEach(resolve => resolve())
    deferredResolves.clear()
  }
}

document.addEventListener('visibilitychange', handleVisibilityChange)

/** Exported alias for waitForVisibility (original: p) */
export const p = waitForVisibility
