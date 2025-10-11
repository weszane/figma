// Type definitions for menu item properties

import type { IMenuItem } from "../905/525678"

// Type guards for menu item properties
/**
 * Checks if a menu item has children or child dropdown elements
 * (Original: $$n3)
 */
export function hasChildrenOrDropdown(item: IMenuItem): boolean {
  return "children" in item || "childDropdown" in item
}

/**
 * Checks if a menu item has an action or callback function
 * (Original: $$i6)
 */
export function hasActionOrCallback(item: IMenuItem): boolean {
  return "action" in item || "callback" in item
}

/**
 * Checks if a menu item is a separator
 * (Original: $$a12)
 */
export function hasSeparator(item: IMenuItem): boolean {
  return "separator" in item
}

/**
 * Checks if a menu item is a header
 * (Original: $$s9)
 */
export function hasHeader(item: IMenuItem): boolean {
  return "header" in item
}

/**
 * Checks if a menu item has a render function
 * (Original: $$o11)
 */
export function hasRenderFunction(item: IMenuItem): boolean {
  return "render" in item
}

/**
 * Checks if a menu item has a checked state or property value
 * (Original: $$l5)
 */
export function isCheckedOrHasPropertyValue(item: IMenuItem): boolean {
  const hasPropertyValue = "propertyValue" in item && item.propertyValue !== undefined
  return "checked" in item || hasPropertyValue
}

/**
 * Determines if a menu item is checked based on its properties
 * (Original: $$d4)
 */
export function isMenuItemChecked(target: any, item: IMenuItem): boolean {
  if (item.checked) {
    return true
  }

  if (item.property != null) {
    const propertyValue = typeof item.property === "string"
      ? target[item.property]
      : item.property.getCopy()
    return propertyValue === item.propertyValue
  }

  return false
}

/**
 * Gets the value of a property from target object or item
 * (Original: $$c8)
 */
export function getProperty(target: any, item: string | { getCopy: () => any }): any {
  return typeof item === "string" ? target[item] : item.getCopy()
}

/**
 * Gets the action or name of a menu item
 * (Original: $$u0)
 */
export function getActionOrName(item: IMenuItem) {
  return item.action || item.name
}

// Menu identifiers
export const EDIT_MENU_ID = "edit-menu"
export const VIEW_MENU_ID = "view-menu"
export const OBJECT_MENU_ID = "object-menu"
export const VECTOR_MENU_ID = "vector-menu"
export const TEXT_MENU_ID = "text-menu"
export const ARRANGE_MENU_ID = "arrange-menu"
export const PREFERENCES_MENU_ID = "preferences-menu"
export const FIGMA_ACCOUNT_MENU_ID = "figma-account-menu"

// Exported constants with meaningful names
export const Dz = getActionOrName // Dz
export const M3 = OBJECT_MENU_ID // M3
export const MH = TEXT_MENU_ID // MH
export const TV = hasChildrenOrDropdown // TV
export const WJ = isMenuItemChecked // WJ
export const Zj = isCheckedOrHasPropertyValue // Zj
export const _o = hasActionOrCallback // _o
export const _p = VIEW_MENU_ID // _p
export const f4 = getProperty // f4
export const gN = hasHeader // gN
export const hV = FIGMA_ACCOUNT_MENU_ID // hV
export const id = hasRenderFunction // id
export const k$ = hasSeparator // k$
export const lW = PREFERENCES_MENU_ID // lW
export const pn = ARRANGE_MENU_ID // pn
export const rH = EDIT_MENU_ID // rH
export const u2 = VECTOR_MENU_ID // u2
