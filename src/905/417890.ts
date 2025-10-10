import type { Store } from "redux"
import { selectViewAction } from "../905/929976"
import { getFullscreenPreloadTiming } from "../figma_app/298277"
import { desktopAPIInstance } from "../figma_app/876459"
import { isInteractionOrEvalMode } from "../figma_app/897289"
// Refactored from minified code: Renamed functions for clarity ($$o0 to shouldEnableFullscreenPreload, $$l1 to viewActionMiddleware), added TypeScript interfaces for type safety, simplified logic with early returns, and added comments explaining Redux-like middleware behavior. Assumed dependencies: desktopAPIInstance, isInteractionOrEvalMode, selectViewAction, getFullscreenPreloadTiming (from imports). Original function names kept in comments for reference.

// Original: export function $$o0()
export function shouldEnableFullscreenPreload(): boolean {
  // Check if fullscreen preload is enabled: not in desktop API or interaction/eval mode, and timing is not "never"
  return !(desktopAPIInstance || isInteractionOrEvalMode()) && getFullscreenPreloadTiming() !== "never"
}

// Original: export let $$l1 = e => t => function (i)
export function viewActionMiddleware(store: Store) {
  return (next: (action) => void) => (action) => {
    const state = store.getState()
    if (selectViewAction.matches(action)) {
      // If switching to "prototype" view from non-prototype, and fullscreen preload is not enabled, skip the action
      if (state.selectedView.view !== "prototype" && action.payload?.view === "prototype" && !shouldEnableFullscreenPreload()) {
        return // Early return to prevent dispatching
      }
      next(action)
      return
    }
    // For non-matching actions, pass through
    next(action)
  }
}

// Keep original export names as per instructions
export const q = shouldEnableFullscreenPreload
export const v = viewActionMiddleware
