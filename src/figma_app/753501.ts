import { getFeatureFlags } from '../905/601108'
import { BrowserInfo, isMobileUA } from '../figma_app/778880'

/**
 * Checks if the element or any of its ancestors has the class 'js-fullscreen-prevent-event-capture'
 * or the attribute 'data-fullscreen-prevent-event-capture'.
 * Original function name: $$a0
 * @param element - The DOM element to check.
 * @returns True if the condition is met, false otherwise.
 */
export function isFullscreenPreventEventCapture(element: HTMLElement | null): boolean {
  return element?.nodeType === 1 && (function checkAncestors(el: HTMLElement | null): boolean {
    for (; el;) {
      if (el.classList && (el.classList.contains('js-fullscreen-prevent-event-capture') || el.getAttribute('data-fullscreen-prevent-event-capture'))) {
        return true
      }
      el = el.parentElement
    }
    return false
  }(element))
}

/**
 * Determines if multi-touch handling or pressure sensitivity should be enabled based on device and flags.
 * Original function name: $$s2
 * @param force - Optional flag to force pressure sensitivity check.
 * @returns True if handling is required, false otherwise.
 */
export function shouldHandleMultiTouchOrPressure(force: boolean = false): boolean {
  return (
    (!!BrowserInfo.isIpadNative || !!BrowserInfo.ios && !!BrowserInfo.isInNativeApp)
    && !!window.FigmaMobile.shouldHandleMultiTouchInFullscreen
    || !!BrowserInfo.isMeetDevice
    || !!BrowserInfo.isIpad
    || !!force && !!getFeatureFlags().ce_il_pressure_sensitivity && !isMobileUA
  )
}

/**
 * Stops event propagation.
 * Original function name: $$o1
 * @param event - The event to stop propagation for.
 */
export function stopPropagation(event: React.SyntheticEvent): void {
  event.stopPropagation()
}

/**
 * Prevents the default action of the event.
 * Original function name: $$l4
 * @param event - The event to prevent default for.
 */
export function preventDefault(event: Event): void {
  event.preventDefault()
}

/**
 * Prevents the default action and stops propagation of the event.
 * Original function name: $$d3
 * @param event - The event to handle.
 */
export function preventDefaultAndStopPropagation(event: Event): void {
  preventDefault(event)
  stopPropagation(event)
}

export const UE = isFullscreenPreventEventCapture
export const dG = stopPropagation
export const ft = shouldHandleMultiTouchOrPressure
export const jo = preventDefaultAndStopPropagation
export const wo = preventDefault
