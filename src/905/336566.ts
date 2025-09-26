import { getObjectEntries } from '../905/36803'
import { loadFeatureFlags } from '../905/586361'
import { defaultInputState } from '../905/768014'
/**
 * Checks if the currently active element is within the tab group specified by the tabGroupId.
 * @param e - Object containing the tabGroupId to check against.
 * @returns True if the active element is within the specified tab group, false otherwise.
 */
export function isTabGroupActive(e: { tabGroupId: string }): boolean {
  return !!document.activeElement?.closest(`[data-tab-group="${CSS.escape(e.tabGroupId)}"]`)
}

/**
 * Filters and returns an array of keys from the input object where the corresponding values are truthy.
 * @param e - Object to filter keys from.
 * @returns Array of keys with truthy values.
 */
export function getTruthyKeys<T>(e: Record<string, T>): string[] {
  return getObjectEntries(e).reduce((result: string[], [key, value]) => {
    if (value) {
      result.push(key)
    }
    return result
  }, [])
}

/**
 * Focuses on an element identified by the generated tab trigger ID.
 * If the fpl_tabs_focus feature flag is enabled and the last key pressed was an arrow key,
 * it ensures the focus is applied after the current execution cycle.
 * @param e - Tab group identifier.
 * @param t - Tab index within the group.
 */
export function focusTabElement(e: string, t: string): void {
  const elementId = generateTabTriggerId(e, t)
  const element = document.getElementById(elementId)

  element?.focus()

  const featureFlags = loadFeatureFlags()
  if (featureFlags.fpl_tabs_focus
    && (defaultInputState.key === 'ArrowLeft' || defaultInputState.key === 'ArrowRight')) {
    Promise.resolve().then(() => {
      element?.focus()
    })
  }
}

/**
 * Generates a standardized ID for a tab trigger element.
 * @param e - Tab group identifier.
 * @param t - Tab index within the group.
 * @returns Generated ID string for the tab trigger.
 */
export function generateTabTriggerId(e: string, t: string): string {
  return `tab${e}-${t}-trigger`
}

/**
 * Generates a standardized ID for a tab panel element.
 * @param e - Tab group identifier.
 * @param t - Tab index within the group.
 * @returns Generated ID string for the tab panel.
 */
export function generateTabPanelId(e: string, t: string): string {
  return `tab${e}-${t}-panel`
}

// Export aliases for backward compatibility
export const Kq = focusTabElement
export const aM = generateTabTriggerId
export const au = isTabGroupActive
export const eR = generateTabPanelId
export const nD = getTruthyKeys
