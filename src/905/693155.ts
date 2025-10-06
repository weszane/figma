import { debugState } from "../905/407919"
import { getFileKeyFromSelectedView } from "../figma_app/193867"
import { trackFileEvent } from "../figma_app/314264"

/**
 * Tracks accessibility-related events with file context
 * Original function name: $$s0
 * @param action - The action name to track
 * @param additionalProperties - Additional properties to include in the event
 */
export function trackAccessibilityEvent(
  action: string,
  additionalProperties?: Record<string, any>,
): void {
  const state = debugState.getState()
  const fileKey = getFileKeyFromSelectedView(state.selectedView)

  trackFileEvent(
    ACCESSIBILITY_EVENT_CATEGORY,
    fileKey,
    state,
    {
      actionName: action,
      ...additionalProperties,
    },
    {
      forwardToDatadog: true,
    },
  )
}

/**
 * Accessibility event category constant
 * Original variable name: o
 */
const ACCESSIBILITY_EVENT_CATEGORY = "accessibility_actions"

/**
 * Enumeration of accessibility action types
 * Original enum name: $$l1
 */
export enum AccessibilityActionType {
  TOGGLE_DOM_ON_MENU = "toggle_dom_on_menu",
  TOGGLE_DOM_OFF_MENU = "toggle_dom_off_menu",
  TOGGLE_ENHANCED_CONTRAST_ON = "toggle_enhanced_contrast_on",
  TOGGLE_ENHANCED_CONTRAST_OFF = "toggle_enhanced_contrast_off",
  PROTOTYPE_BUTTON_CLICKED = "prototype_button_clicked",
  SKIP_TO_CONTENT = "skip_to_content",
  ENABLE_AND_SKIP_TO_CONTENT = "enable_and_skip_to_content",
  FOCUS_CYCLE_NEXT_AREA = "focus_cycle_next_area",
  FOCUS_CYCLE_PREVIOUS_AREA = "focus_cycle_previous_area",
  DESIGN_INITIAL_TREE_LOAD = "design_initial_tree_load",
  DESIGN_UPDATE_NODE = "design_update_tree",
  DEVMODE_INITIAL_TREE_LOAD = "devmode_initial_tree_load",
  DEVMODE_UPDATE_NODE = "devmode_update_node",
  FIGJAM_UPDATE_TREE = "figjam_update_tree",
  FIGJAM_UPDATE_NODE = "figjam_update_node",
  FIGJAM_INITIAL_TREE_LOAD = "figjam_initial_tree_load",
  FIGJAM_INCREMENTAL_UPDATE_DISCREPANCY = "figjam_incremental_update_discrepancy",
  TOGGLE_DEFAULT_APPLICATION_ON_MENU = "toggle_default_application_on_menu",
  TOGGLE_DEFAULT_APPLICATION_OFF_MENU = "toggle_default_application_off_menu",
  SLIDES_INITIAL_TREE_LOAD = "slides_initial_tree_load",
  SLIDES_UPDATE_NODE = "slides_update_node",
}

// Export aliases for backward compatibility
export const f = trackAccessibilityEvent
export const h = AccessibilityActionType
