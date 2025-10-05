import type { PrimitiveAtom } from "jotai"
import { atom, atomStoreManager } from "../figma_app/27355"
// Original: $$n0
// Refactored to use proper TypeScript enum, atom, and function for better readability and maintainability.

/**
 * Enum representing navigation actions.
 * Original: NavAction
 */
export enum NavAction {
  OPEN_MODAL = "open_modal",
  BACK_BUTTON = "click_back_button",
  TAB = "click_tab",
  WORKSPACE = "click_workspace",
  TEAM_SEE_MORE = "click_team_see_more",
  LIBRARY = "click_library",
  FOCUS_SEARCH = "focus_search",
  CLEAR_SEARCH = "clear_search",
}

/**
 * Atom to store the last navigation action.
 * Original: lastActionAtom
 */
export const lastActionAtom = atom<NavAction | undefined>(undefined) as PrimitiveAtom<NavAction | undefined>

/**
 * Sets the last navigation action in the atom store.
 * @param action - The navigation action to set.
 * Original: setLastAction
 */
export function setLastAction(action: NavAction | undefined) {
  atomStoreManager.set(lastActionAtom, action)
}
export const lastActionDetails = {
  NavAction,
  lastActionAtom,
  setLastAction,
}
export const S = lastActionDetails
