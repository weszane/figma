/**
 * Enum for different types of menu items
 * Original name: $$n3
 */
export enum DMenuItemType {
  TOOL = 0,
  ACTION = 1,
  CUSTOM_ACTION = 2,
  ACTION_SUBMENU = 3,
  FLYOUT = 4,
  LABEL = 5,
  TEXT_BUTTON = 6,
}

/**
 * Enum for different types of buttons
 * Original name: $$i1
 */
export enum DButtonType {
  STANDARD_BUTTON = "STANDARD_BUTTON",
  DIALOG_TRIGGER_BUTTON = "DIALOG_TRIGGER_BUTTON",
  DROPDOWN_TRIGGER_BUTTON = "DROPDOWN_TRIGGER_BUTTON",
  DROPDOWN_GROUP_HEADER = "DROPDOWN_GROUP_HEADER",
}

/**
 * Type definition for menu item
 * Used in function: isDropdownGroupHeader
 */
interface MenuItem {
  type: DMenuItemType
  customActionType?: string
}

/**
 * Checks if a menu item is a dropdown group header
 * Original name: $$a4
 * @param item - The menu item to check
 * @returns true if the item is a dropdown group header, false otherwise
 */
export function isDropdownGroupHeader(item: MenuItem): boolean {
  return item.type === DMenuItemType.CUSTOM_ACTION
    && item.customActionType === DButtonType.DROPDOWN_GROUP_HEADER
}

// Constants for flyout IDs
export const MODIFIERS_OVERFLOW_FLYOUT_ID = "MODIFIERS_OVERFLOW_FLYOUT_ID"
export const BOOLEAN_OPERATIONS_FLYOUT_ID = "BOOLEAN_OPERATIONS_FLYOUT_ID"
export const COMPONENT_CONTROLS_ID = "COMPONENT_CONTROLS_ID"
export const CREATE_COMPONENT_OPTIONS_ID = "CREATE_COMPONENT_OPTIONS_ID"

// Exported constants with meaningful names
export const IF = BOOLEAN_OPERATIONS_FLYOUT_ID
export const Wg = DButtonType
export const Xz = COMPONENT_CONTROLS_ID
export const ZU = DMenuItemType
export const fT = isDropdownGroupHeader
export const gc = MODIFIERS_OVERFLOW_FLYOUT_ID
export const uo = CREATE_COMPONENT_OPTIONS_ID
