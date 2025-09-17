import { useRef } from 'react'
import { SI } from '../905/705398'
import { setSelectionToEnd, setSelectionToStart } from '../905/914656'
import { compareElementPosition } from '../905/987614'

/**
 * Handles pointer events for faux focus and selection logic.
 * Original function name: $$$$o0
 * @param handler Optional event handler to be called before faux focus logic.
 * @returns Pointer event handler function.
 */
export function setupFauxFocusHandler(handler?: (event: React.PointerEvent) => void) {
  const lastSelectTimeRef = useRef(0)

  /**
   * Pointer event handler for faux focus and selection.
   * Original export: o
   * @param event PointerEvent
   */
  const handlePointerEvent = (event: React.PointerEvent) => {
    handler?.(event)

    if (event.pointerType !== 'mouse')
      return

    const target = event.target as Element
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)
      return

    const currentTarget = SI(event.currentTarget)
    if (!currentTarget)
      return

    currentTarget.focus()
    if (target instanceof HTMLButtonElement)
      return

    currentTarget.setPointerCapture(event.pointerId)
    currentTarget.setAttribute('data-faux-focus', '')

    setTimeout(() => {
      currentTarget.focus()
      currentTarget.removeAttribute('data-faux-focus')
    })

    if (compareElementPosition(target, currentTarget) < 0) {
      setSelectionToStart(currentTarget)
    }
    else {
      setSelectionToEnd(currentTarget)
    }

    const now = Date.now()
    if (now - lastSelectTimeRef.current < 500) {
      currentTarget.select()
    }
    lastSelectTimeRef.current = now
  }

  return handlePointerEvent
}

// Refactored export name for clarity and consistency
export const o = setupFauxFocusHandler
