import { debugState } from "../905/407919"
import { getFeatureFlags } from "../905/601108"
import { localStorageRef } from "../905/657224"
import { IpcStorageHandler } from "../905/724705"
import { sendWithRetry } from "../905/910117"
import { trackUserEvent } from "../figma_app/314264"
import { fullscreenValue } from "../figma_app/455680"
import { oi } from "../figma_app/598952"
import { EditorPreferencesApi } from "../figma_app/740163"
import { BrowserInfo } from "../figma_app/778880"

// Navigation preference types
type NavigationPreference = "mouse-scroll-wheel-zoom" | "right-click-drag-to-pan"
type EventOrigin = "user_manual_change" | "onboarding"

interface NavigationPreferenceUpdate {
  navigationPreference: NavigationPreference
  enabled: boolean
  eventOrigin: EventOrigin
}

// Enum for navigation preferences
export enum NavigationPreferences {
  MouseScrollToZoom = "mouse-scroll-wheel-zoom",
  RightClickDragToPan = "right-click-drag-to-pan",
}

// Enum for event origins
enum EventOrigins {
  UserManualChange = "user_manual_change",
  Onboarding = "onboarding",
}

/**
 * Updates user navigation preferences on the server
 * @param preference - The navigation preference to update
 * @param enabled - Whether the preference is enabled
 */
function updateUserNavigationPreference(preference: NavigationPreference, enabled: boolean): void {
  const userId = debugState.getState().user?.id
  if (!userId)
    return

  const payload = preference === NavigationPreferences.MouseScrollToZoom
    ? { mouse_scroll_to_zoom: enabled }
    : { right_click_drag_to_pan: enabled }

  sendWithRetry.put("/api/user", payload)
}

/**
 * Handles navigation preference changes including tracking and storage
 * @param update - The navigation preference update details
 */
function handleNavigationPreferenceChange(update: NavigationPreferenceUpdate): void {
  const { navigationPreference, enabled, eventOrigin } = update

  // Send to other tabs
  new IpcStorageHandler().sendToOtherTabs(navigationPreference, JSON.stringify(enabled))

  // Track user event
  try {
    const state = debugState.getState()
    trackUserEvent("navigation_preferences", state, {
      navigationPreference,
      enabled,
      eventOrigin,
    })
  }
  catch {
    // Silently handle tracking errors
  }

  // Update user preference on server
  updateUserNavigationPreference(navigationPreference, enabled)
}

// Truthy values for preference parsing
const TRUTHY_VALUES = [true, 1, "1", "true"]

/**
 * Checks if a value should be considered truthy for preference settings
 * @param value - The value to check
 * @returns Whether the value is considered truthy
 */
function isTruthyPreferenceValue(value: any): boolean {
  return TRUTHY_VALUES.includes(value)
}

/**
 * Updates scroll wheel zoom preference
 * @param value - The preference value
 */
export function updateScrollWheelZoomPreference(value: any): void {
  const isFullscreenLoaded = debugState.getState().isFullscreenDocumentLoaded
  if (isFullscreenLoaded) {
    setScrollWheelZoomEnabled(isTruthyPreferenceValue(value))
  }
}

/**
 * Updates right click pan preference
 * @param value - The preference value
 */
export function updateRightClickPanPreference(value: any): void {
  const isFullscreenLoaded = debugState.getState().isFullscreenDocumentLoaded
  if (isFullscreenLoaded) {
    setRightClickPanEnabled(isTruthyPreferenceValue(value))
  }
}

/**
 * Enables or disables scroll wheel zoom
 * @param enabled - Whether to enable scroll wheel zoom
 */
function setScrollWheelZoomEnabled(enabled: boolean): void {
  const action = enabled
    ? "set-scroll-wheel-zoom-enabled"
    : "set-scroll-wheel-zoom-disabled"
  fullscreenValue.triggerAction(action)
}

/**
 * Enables or disables right click pan
 * @param enabled - Whether to enable right click pan
 */
function setRightClickPanEnabled(enabled: boolean): void {
  const action = enabled
    ? "set-right-click-pan-enabled"
    : "set-right-click-pan-disabled"
  fullscreenValue.triggerAction(action)
}

/**
 * Gets navigation preference menu items
 * @returns Array of menu item configurations
 */
export function getNavigationPreferenceMenuItems() {
  return [{
    separator: true,
    platforms: ["!ipad"],
  }, {
    "action": "toggle-scroll-wheel-zoom",
    "platforms": ["!ipad"],
    "hideForQuickCommand": BrowserInfo.isIpad,
    "data-onboarding-key": oi.ZOOM,
    "callback": () => {
      handleNavigationPreferenceChange({
        navigationPreference: NavigationPreferences.MouseScrollToZoom,
        enabled: !EditorPreferencesApi().scrollWheelZoom.getCopy(),
        eventOrigin: EventOrigins.UserManualChange,
      })
    },
    "property": EditorPreferencesApi().scrollWheelZoom,
    "propertyValue": true,
    "flags": ["!figmake"],
  }, {
    "action": "toggle-right-click-pan",
    "platforms": ["!ipad"],
    "hideForQuickCommand": BrowserInfo.isIpad,
    "data-onboarding-key": oi.PAN,
    "callback": () => {
      handleNavigationPreferenceChange({
        navigationPreference: NavigationPreferences.RightClickDragToPan,
        enabled: !EditorPreferencesApi().rightClickPan.getCopy(),
        eventOrigin: EventOrigins.UserManualChange,
      })
    },
    "property": EditorPreferencesApi().rightClickPan,
    "propertyValue": true,
    "flags": ["!figmake"],
  }, {
    separator: true,
    platforms: ["!ipad"],
    flags: ["!edit"],
  }]
}

/**
 * Initializes navigation preferences from storage
 * @param preference - The navigation preference to initialize
 * @param defaultValue - Default value if not found in storage
 */
function initializeNavigationPreference(preference: NavigationPreference, defaultValue: boolean = false): void {
  if (!localStorageRef)
    return

  let effectiveValue = defaultValue
  const storedValue = localStorageRef.getItem(preference)
  const userPreference = preference === NavigationPreferences.MouseScrollToZoom
    ? debugState.getState().user?.mouse_scroll_to_zoom
    : debugState.getState().user?.right_click_drag_to_pan

  if (storedValue !== null) {
    effectiveValue = isTruthyPreferenceValue(storedValue)
  }
  else if (userPreference != null) {
    effectiveValue = userPreference
  }

  // Apply the preference
  if (preference === NavigationPreferences.MouseScrollToZoom) {
    setScrollWheelZoomEnabled(effectiveValue)
  }
  else {
    setRightClickPanEnabled(effectiveValue)
  }

  // Sync with other tabs
  new IpcStorageHandler().sendToOtherTabs(preference, JSON.stringify(effectiveValue))

  // Update server if user preference differs
  if (userPreference !== effectiveValue) {
    updateUserNavigationPreference(preference, effectiveValue)
  }
}

/**
 * Initializes all navigation preferences
 */
export function initializeNavigationPreferences(): void {
  const isNewUserOnboarding = getFeatureFlags().figjam_nav_new_user_onboarding
  initializeNavigationPreference(NavigationPreferences.MouseScrollToZoom, isNewUserOnboarding)
  initializeNavigationPreference(NavigationPreferences.RightClickDragToPan, isNewUserOnboarding)
}

// Exported functions and constants
export const Sd = getNavigationPreferenceMenuItems
export const Z1 = initializeNavigationPreferences
export const Zp = updateScrollWheelZoomPreference
export const tB = updateRightClickPanPreference
export const wc = NavigationPreferences
