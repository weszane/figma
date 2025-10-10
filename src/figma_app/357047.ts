// Refactored code: renamed variables, added types, simplified logic, improved readability
import { getI18nString } from "../905/303541"
import { initAction } from "../905/929976"
import { updateMirror } from "../figma_app/91703"
import { defaultAppState } from "../figma_app/198712"
import { NoneColor } from "../figma_app/763686"
import { BrowserInfo } from "../figma_app/778880"

interface AppState {
  [key: string]: any
  currentSelectedGradientStop: {
    index: number
    type: string
  }
  isInitialized?: boolean
  currentPage?: string
}

interface Action {
  type: string
  payload?: {
    appModelChanges?: Partial<AppState>
  }
}

/**
 * Reducer function to handle state updates based on actions
 * Origin: $$d7
 */
export function appStateReducer(
  state = { ...defaultAppState },
  action: Action,
) {
  if (initAction.matches(action)) {
    return defaultAppState
  }

  if (
    updateMirror.matches(action)
    && action.payload?.appModelChanges
  ) {
    state = {
      ...state,
      ...action.payload.appModelChanges,
      isInitialized: true,
    }

    // Reset gradient stop selection if invalid
    if (state.currentSelectedGradientStop.index === -1) {
      state.currentSelectedGradientStop = {
        index: 0,
        type: NoneColor.COLOR,
      }
    }
  }

  return state
}

// Dropdown type constants
export const FULLSCREEN_MENU_DROPDOWN = "fullscreen-menu-dropdown"
export const PAGE_PICKER_DROPDOWN = "page-picker-dropdown"
export const QUICK_ACTIONS_DROPDOWN = "quick-actions-dropdown"

/**
 * Type guard for fullscreen menu dropdown
 * Origin: $$u4
 */
export function isFullscreenMenuDropdown(action: { type?: string }): boolean {
  return action?.type === FULLSCREEN_MENU_DROPDOWN
}

/**
 * Type guard for page picker dropdown
 * Origin: $$_1
 */
export function isPagePickerDropdown(action: { type?: string }): boolean {
  return action?.type === PAGE_PICKER_DROPDOWN
}

// Action enabled property cache
const actionEnabledPropertyCache: Record<string, string> = Object.create(null)

/**
 * Generate or retrieve cached property name for action enabled check
 * Origin: $$g3
 */
export function getActionEnabledPropertyName(actionType: string): string {
  if (!actionEnabledPropertyCache[actionType]) {
    actionEnabledPropertyCache[actionType] = `actionEnabled__${actionType}`
  }
  return actionEnabledPropertyCache[actionType]
}

/**
 * Check if action is enabled in state
 * Origin: $$f5
 */
export function isActionEnabled(state: Record<string, any>, actionType: string): boolean {
  return !!state[getActionEnabledPropertyName(actionType)]
}

/**
 * Check if property name corresponds to action enabled pattern
 * Origin: $$E10
 */
export function isActionEnabledProperty(propertyName: string): boolean {
  return propertyName.startsWith("actionEnabled__")
}

/**
 * Get keyboard shortcut for action
 * Origin: $$y6
 */
export function getKeyboardShortcut(
  customShortcuts: Record<string, Array<{ text: string }> | undefined>,
  actionType: string,
): string {
  const globeSymbol = "\u{1F310}"

  switch (actionType) {
    case "set-tool-bend":
      return BrowserInfo.mac ? "\u2318" : "Ctrl"
    case "set-tool-vector-lasso":
      return "Q"
    case "stack-reorder-left":
    case "stack-counter-align-left":
      return "\u2190"
    case "stack-reorder-left-end":
      return "\u2325\u2190"
    case "stack-reorder-right":
    case "stack-counter-align-right":
      return "\u2192"
    case "stack-reorder-right-end":
      return "\u2325\u2192"
    case "stack-reorder-up":
    case "stack-counter-align-top":
      return "\u2191"
    case "stack-reorder-up-end":
    case "stack-reorder-down-end":
      return "\u2325\u2191"
    case "stack-reorder-down":
    case "stack-counter-align-bottom":
      return "\u2193"
    case "set-tool-default-desc-figjam":
    case "set-tool-default-desc-figma":
      return "V"
    case "set-tool-marker":
      return "M"
    case "set-tool-stamp":
    case "set-tool-code-component":
      return "E"
    case "set-tool-type":
      return "T"
    case "set-tool-connector-elbowed":
      return "X"
    case "toggle-publish":
      return BrowserInfo.mac ? "\u23252" : "Alt+2"
    case "toggle-inline-preview":
    case "toggle-inline-html-preview":
      return `\u21E7${getI18nString("whiteboard.keyboard_shortcuts.key_label.space")}`
    case "set-tool-sites-responsive-set":
      return "W"
    case "deselect-all":
      return "\u238B"
    case "multi-edit-text":
      return "Enter"
    case "page-next":
      if (BrowserInfo.mac)
        return `${globeSymbol}\u2193`
      break
    case "page-previous":
      if (BrowserInfo.mac)
        return `${globeSymbol}\u2191`
      break
  }

  // Check for custom shortcuts
  const shortcut = customShortcuts[actionType]
  if (shortcut && shortcut.length >= 1) {
    return shortcut[0].text
  }

  return ""
}

/**
 * Get current page ID or default
 * Origin: $$b2
 */
export function getCurrentPageId(state: { currentPage?: string }): string {
  return state && state.currentPage ? state.currentPage : "0:1"
}

// Export aliases maintaining original names
export const G = PAGE_PICKER_DROPDOWN
export const IS = isPagePickerDropdown
export const Nf = getCurrentPageId
export const Rn = getActionEnabledPropertyName
export const TY = isFullscreenMenuDropdown
export const Yh = isActionEnabled
export const c1 = getKeyboardShortcut
export const fj = appStateReducer
export const jv = QUICK_ACTIONS_DROPDOWN
export const pi = FULLSCREEN_MENU_DROPDOWN
export const vg = isActionEnabledProperty
