import { useEffect } from 'react'
import { getIsIOS } from '../figma_app/778880'

/**
 * CSS class name used to disable body scroll on iOS devices.
 * Original variable: a
 */
const DISABLE_BODY_SCROLL_CLASS = 'use_prevent_scroll_mobile--disableBodyScroll--W-dt5'

/**
 * Adds a CSS class to the #react-page element to prevent scroll on iOS devices.
 * Removes the class on cleanup.
 * Original function: $$s0
 */
export function usePreventScrollOnIOS(): void {
  useEffect(() => {
    const reactPageElement = document.getElementById('react-page')
    if (reactPageElement && getIsIOS()) {
      reactPageElement.classList.add(DISABLE_BODY_SCROLL_CLASS)
      return () => {
        const cleanupElement = document.getElementById('react-page')
        cleanupElement?.classList.remove(DISABLE_BODY_SCROLL_CLASS)
      }
    }
  }, [])
}

/**
 * Exported alias for usePreventScrollOnIOS.
 * Original export: h
 */
export const h = usePreventScrollOnIOS
