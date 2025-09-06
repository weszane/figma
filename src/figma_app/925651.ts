import { createEventEmitter } from '../figma_app/516794'
import { desktopAPIInstance } from '../figma_app/876459'
/**
 * Event emitter for desktop API visibility changes.
 * Original variable: $$a2
 */
export const desktopVisibilityEmitter = createEventEmitter()

/**
 * Tracks the current visibility state.
 * Original variable: s
 */
let currentDesktopVisibility: string | null = null

/**
 * Tracks the last emitted visibility state.
 * Original variable: o
 */
let lastEmittedVisibility: string = document.visibilityState

/**
 * Event emitter for app visibility changes.
 * Original variable: l
 */
export const appVisibilityEmitter = createEventEmitter()

/**
 * Handles visibility change events and emits updates.
 * Original function: d
 */
function handleVisibilityChange() {
  const newVisibility
    = document.visibilityState === 'hidden' || currentDesktopVisibility === 'hidden'
      ? 'hidden'
      : 'visible'
  if (newVisibility !== lastEmittedVisibility) {
    lastEmittedVisibility = newVisibility
    appVisibilityEmitter.emit(newVisibility)
  }
}

// Listen for document visibility changes
document.addEventListener('visibilitychange', handleVisibilityChange)

// Subscribe to desktop API visibility changes
if (desktopAPIInstance) {
  desktopVisibilityEmitter.subscribe((visibility: string) => {
    currentDesktopVisibility = visibility
    handleVisibilityChange()
  })
}

/**
 * Subscribes to app visibility changes.
 * Original function: $$c0
 * @param listener - Callback for visibility changes.
 * @returns Unsubscribe function.
 */
export function subscribeToAppVisibility(listener: (visibility: string) => void) {
  return appVisibilityEmitter.subscribe(listener)
}

/**
 * Gets the current app visibility state.
 * Original function: $$u1
 * @returns Current visibility state.
 */
export function getAppVisibilityState(): string {
  return lastEmittedVisibility
}

// Export aliases for backward compatibility
export const B1 = subscribeToAppVisibility
export const Zt = getAppVisibilityState
export const bM = desktopVisibilityEmitter
