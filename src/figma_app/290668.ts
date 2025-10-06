import { useCallback, useEffect, useLayoutEffect, useRef } from "react"
import { tabbable } from "tabbable"
import { KeyCodes } from "../905/63728"
import { AccessibilityActionType, trackAccessibilityEvent } from "../905/693155"
import { useIsScreenReaderEnabled } from "../905/810168"
import { KeyboardFocusManager } from "../905/826900"
import { useFullscreenReady } from "../905/924253"

export const FOCUS_NEXT_AREA = "focus-next-area"
export const FOCUS_PREVIOUS_AREA = "focus-previous-area"
export const focusAreas: Array<{
  element: HTMLElement
  focus?: () => void
}> = []

/**
 * Custom hook for managing focus areas registration and cleanup
 * Original name: $$_2
 */
export function useFocusAreaRef() {
  const elementRef = useRef<HTMLElement | null>(null)

  return useCallback((element: HTMLElement | null) => {
    if (elementRef.current) {
      unregisterFocusArea(elementRef.current)
    }

    if (element) {
      elementRef.current = element
      registerFocusArea(element)
    }
  }, [])
}

/**
 * Custom hook for applying focus management to a ref
 * Original name: $$h0
 */
export function useFocusArea(ref: React.RefObject<HTMLElement>, disabled?: boolean) {
  useEffect(() => {
    if (disabled)
      return

    const element = ref.current
    if (element) {
      registerFocusArea(element)
      return () => {
        unregisterFocusArea(element)
      }
    }
  }, [ref, disabled])
}

/**
 * Custom hook that returns a ref with focus area management
 * Original name: $$m7
 */
export function useManagedFocusArea(disabled?: boolean) {
  const elementRef = useRef<HTMLElement | null>(null)
  useFocusArea(elementRef, disabled)
  return elementRef
}

/**
 * Custom hook for handling screen reader and fullscreen focus management
 * Original name: $$g8
 */
export function useAccessibilityFocusManager(ref: React.RefObject<HTMLElement>) {
  const isScreenReaderEnabled = useIsScreenReaderEnabled()
  const element = ref.current
  const isFullscreenReady = useFullscreenReady()

  useLayoutEffect(() => {
    if (isScreenReaderEnabled && element) {
      registerFocusArea(element)
      return () => unregisterFocusArea(element)
    }

    if (!isFullscreenReady)
      return

    const fullscreenRoot: HTMLElement = document.querySelector("#fullscreen-root")
    if (fullscreenRoot) {
      registerFocusArea(fullscreenRoot, KeyboardFocusManager.focusCustomCanvasFocusElement)
      return () => {
        unregisterFocusArea(fullscreenRoot)
      }
    }
  }, [isScreenReaderEnabled, isFullscreenReady, element])
}

/**
 * Registers an element as a focus area
 * Original name: f
 */
function registerFocusArea(element: HTMLElement, focusCallback?: () => void) {
  const focusArea = focusCallback
    ? {
        element,
        focus: focusCallback,
      }
    : {
        element,
      }

  // If no areas registered yet, simply add this one
  if (!focusAreas.length) {
    focusAreas.push(focusArea)
    return
  }

  // Find the correct position to insert based on DOM order
  for (const [index, { element: existingElement }] of focusAreas.entries()) {
    const position = existingElement.compareDocumentPosition(element)

    if (position === Node.DOCUMENT_POSITION_PRECEDING
      || position === Node.DOCUMENT_POSITION_CONTAINS) {
      // Avoid duplicate registration
      if (focusAreas[index - 1]?.element === element)
        return

      focusAreas.splice(index, 0, focusArea)
      return
    }
  }

  // Add to the end if it should be last
  focusAreas.push(focusArea)
}

/**
 * Unregisters an element from focus areas
 * Original name: E
 */
function unregisterFocusArea(element: HTMLElement) {
  const index = focusAreas.findIndex(area => area.element === element)
  if (index !== -1) {
    focusAreas.splice(index, 1)
  }
}

/**
 * Gets the first tabbable element within a container
 * Original name: $$y9
 */
export function getFirstTabbableElement(container: HTMLElement | null) {
  return container
    ? tabbable(container, {
      getShadowRoot: true,
    })[0]
    : null
}

/**
 * Focuses an element or its first tabbable child
 * Original name: b
 */
function focusElementOrTabbable(area: {
  element: HTMLElement
  focus?: () => void
}) {
  if (area.focus) {
    area.focus()
    return null
  }

  const elementToFocus = getFirstTabbableElement(area.element) || area.element
  elementToFocus?.focus()
  return elementToFocus
}

/**
 * Cycles focus between registered areas
 * Original name: T
 */
function cycleFocus(direction: "forward" | "backward") {
  // Find currently focused area
  for (const [currentIndex, { element }] of focusAreas.entries()) {
    if (element.contains(document.activeElement)) {
      const totalAreas = focusAreas.length
      const nextIndex = (totalAreas + currentIndex + (direction === "forward" ? 1 : -1)) % totalAreas
      const nextArea = focusAreas[nextIndex]

      if (nextArea) {
        const focusedElement = focusElementOrTabbable(nextArea)
        if (focusedElement)
          return focusedElement
      }
    }
  }

  // If no area currently focused, focus first or last
  const targetArea = direction === "forward" ? focusAreas[0] : focusAreas[focusAreas.length - 1]
  return targetArea ? focusElementOrTabbable(targetArea) : null
}

/**
 * Moves focus to the previous focus area
 * Original name: $$I4
 */
export function focusPreviousArea(key?: string) {
  cycleFocus("backward")
  trackAccessibilityEvent(AccessibilityActionType.FOCUS_CYCLE_PREVIOUS_AREA, {
    key,
  })
}

/**
 * Moves focus to the next focus area
 * Original name: $$S3
 */
export function focusNextArea(key?: string) {
  cycleFocus("forward")
  trackAccessibilityEvent(AccessibilityActionType.FOCUS_CYCLE_NEXT_AREA, {
    key,
  })
}

/**
 * Handles keyboard events for accessibility
 * Original name: $$v6
 */
export interface AccessibilityKeyboardHandlerProps {
  e: KeyboardEvent
  onClickHandler?: (event: KeyboardEvent) => void
  onEscapeHandler?: (event: KeyboardEvent) => void
}

export function handleAccessibilityKeyboardEvents({
  e: event,
  onClickHandler,
  onEscapeHandler,
}: AccessibilityKeyboardHandlerProps) {
  if (onClickHandler && event.keyCode === KeyCodes.ENTER) {
    onClickHandler(event)
  }

  if (onEscapeHandler && event.keyCode === KeyCodes.ESCAPE) {
    onEscapeHandler(event)
  }
}

// Export aliases for backward compatibility
export const C_ = useFocusArea
export const Jt = FOCUS_PREVIOUS_AREA
export const OC = useFocusAreaRef
export const WU = focusNextArea
export const cw = focusPreviousArea
export const dz = FOCUS_NEXT_AREA
export const hx = handleAccessibilityKeyboardEvents
export const jL = useManagedFocusArea
export const k4 = useAccessibilityFocusManager
export const xv = getFirstTabbableElement
