import { setBrowserViewBarModeOptions, setBrowserViewBarSortOptions } from "../905/34809"
import { SortViewMode } from "../905/77553"
import { localStorageRef } from "../905/657224"
import { hydrateFileBrowser } from "../905/929976"

const STORAGE_KEYS = {
  [SortViewMode.VIEW_MODE]: "view-bar-view-mode-option",
  [SortViewMode.SORT_MODE]: "view-bar-sort-options",
} as const

/**
 * Retrieves and parses an item from localStorage
 * (Original function: l)
 * @param key - The localStorage key to retrieve
 * @returns Parsed JSON object or empty object if parsing fails
 */
function getLocalStorageItem(key: string): Record<string, unknown> {
  const item = localStorageRef && localStorageRef.getItem(key) || "{}"
  try {
    return JSON.parse(item)
  }
  catch {
    return {}
  }
}

/**
 * Stringifies and saves an item to localStorage
 * (Original function: d)
 * @param key - The localStorage key to save to
 * @param value - The value to save
 * @returns The value that was passed in
 */
function setLocalStorageItem<T>(key: string, value: T): T {
  if (localStorageRef) {
    try {
      const stringified = JSON.stringify(value)
      localStorageRef.setItem(key, stringified)
    }
    catch { }
  }
  return value
}

/**
 * Reducer function for managing view mode state
 * (Original function: $$c1)
 * @param state - Current state
 * @param action - Action to process
 * @returns New state
 */
export function viewModeReducer(state: Record<string, unknown> = {}, action: unknown): Record<string, unknown> {
  if (hydrateFileBrowser.matches(action)) {
    return getLocalStorageItem(STORAGE_KEYS[SortViewMode.VIEW_MODE])
  }

  if (setBrowserViewBarModeOptions.matches(action)) {
    const newState = {
      ...state,
      [action.payload.viewId]: action.payload.viewMode,
    }
    return setLocalStorageItem(STORAGE_KEYS[SortViewMode.VIEW_MODE], newState)
  }

  return state
}

/**
 * Reducer function for managing sort mode state
 * (Original function: $$u0)
 * @param state - Current state
 * @param action - Action to process
 * @returns New state
 */
export function sortModeReducer(state: Record<string, unknown> = {}, action: any): Record<string, unknown> {
  if (hydrateFileBrowser.matches(action)) {
    return getLocalStorageItem(STORAGE_KEYS[SortViewMode.SORT_MODE])
  }

  if (setBrowserViewBarSortOptions.matches(action)) {
    const newState = {
      ...state,
      [action.payload.viewId]: action.payload.sortMode,
    }
    return setLocalStorageItem(STORAGE_KEYS[SortViewMode.SORT_MODE], newState)
  }

  return state
}

/**
 * Gets a value from an object with a fallback
 * (Original function: $$p2)
 * @param key - Key to look up
 * @param obj - Object to look in
 * @param fallback - Fallback value
 * @returns Value from object or fallback
 */
export function getValueWithFallback<T>(
  key: string,
  obj: Record<string, T>,
  fallback: T,
): T {
  return obj[key] ?? fallback
}

export const pw = sortModeReducer
export const q5 = viewModeReducer
export const y2 = getValueWithFallback
