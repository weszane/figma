import { useCallback, useContext, useEffect } from 'react'
import { A } from '../905/780920'

/**
 * Determines if an item should auto-focus based on layout and context.
 * Original name: $$$$a0
 */
export interface AutoFocusParams {
  isPrimaryLayout?: boolean
  itemIndex: number
  layoutIndex: number
  autoFocusOverride?: boolean
  enableAutoFocus?: boolean
}

/**
 * Returns whether auto-focus should be enabled for the given item.
 * @param params - AutoFocusParams
 */
export function setupAutoFocusHandler({
  isPrimaryLayout,
  itemIndex,
  layoutIndex,
  autoFocusOverride,
  enableAutoFocus = true,
}: AutoFocusParams): boolean {
  const contextItemIndex = useContext(A)
  // Enable auto-focus if allowed and either primary layout or first layout index,
  // with possible override from autoFocusOverride or context.
  if (!enableAutoFocus)
    return false
  const isLayoutPrimary = isPrimaryLayout !== undefined ? isPrimaryLayout : layoutIndex === 0
  const shouldOverride = autoFocusOverride !== undefined ? autoFocusOverride : itemIndex === contextItemIndex
  return isLayoutPrimary && shouldOverride
}

/**
 * Parameters for keyboard navigation focus management.
 * Original name: $$s1
 */
export interface KeyboardNavigationFocusParams {
  keyboardNavigationItem?: {
    focus: () => void
    blur: () => void
    fauxFocus: (event?: any) => void
    fauxBlur: () => void
  }
  shouldAutoFocus: boolean
  enableFauxFocus: boolean
}

/**
 * Provides focus and blur handlers for keyboard navigation items.
 * @param params - KeyboardNavigationFocusParams
 */
export function setupKeyboardNavigationFocus({
  keyboardNavigationItem,
  shouldAutoFocus,
  enableFauxFocus,
}: KeyboardNavigationFocusParams) {
  /**
   * Focus handler for keyboard navigation item.
   * Original variable: r
   */
  const focus = useCallback((event?: any) => {
    if (!keyboardNavigationItem)
      return
    if (enableFauxFocus) {
      keyboardNavigationItem.fauxFocus(event)
    }
    else {
      keyboardNavigationItem.focus()
    }
  }, [keyboardNavigationItem, enableFauxFocus])

  /**
   * Blur handler for keyboard navigation item.
   * Original variable: a
   */
  const blur = useCallback(() => {
    if (!keyboardNavigationItem)
      return
    if (enableFauxFocus) {
      keyboardNavigationItem.fauxBlur()
    }
    else {
      keyboardNavigationItem.blur()
    }
  }, [keyboardNavigationItem, enableFauxFocus])

  useEffect(() => {
    if (!keyboardNavigationItem || !shouldAutoFocus)
      return

    if (document.visibilityState === 'visible') {
      focus()
    }
    else {
      const onVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          requestAnimationFrame(() => focus())
          document.removeEventListener('visibilitychange', onVisibilityChange)
        }
      }
      document.addEventListener('visibilitychange', onVisibilityChange)
      return () => document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [keyboardNavigationItem, shouldAutoFocus, focus])

  return {
    focus,
    blur,
  }
}

// Export refactored names for clarity and maintainability
export const a = setupAutoFocusHandler
export const i = setupKeyboardNavigationFocus
