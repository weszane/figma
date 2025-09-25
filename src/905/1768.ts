import { useEffect } from 'react'
/**
 * Custom hook to handle closing an element on outside clicks or Escape key press.
 * @param onClose - Callback function to execute when closing is triggered.
 * @param options - Configuration options.
 * @param options.closeOnEsc - Whether to close on Escape key press. Default: false.
 * @param options.ignore - Elements or refs to ignore for outside clicks, or a function to determine if the target should be ignored.
 */
export function useClickOutside(
  onClose: () => void,
  options: {
    closeOnEsc?: boolean
    ignore?: (HTMLElement | React.RefObject<HTMLElement>)[] | ((target: EventTarget) => boolean) | string
  } = {},
) {
  const { closeOnEsc = false, ignore = [] } = options

  useEffect(() => {
    /**
     * Checks if the target element is a descendant of the ignored element.
     * @param target - The event target.
     * @param ignoreElement - The element to check against.
     * @returns True if target is inside ignoreElement.
     */
    const isDescendant = (target: EventTarget, ignoreElement: HTMLElement): boolean => {
      let current: Element | null = target as Element
      while (current) {
        if (current === ignoreElement)
          return true
        current = current.parentElement
      }
      return false
    }

    /**
     * Handler for pointerdown events to detect outside clicks.
     * @param event - The pointer event.
     */
    const handlePointerDown = (event: PointerEvent) => {
      if (!onClose || ignore === 'allClicks')
        return

      if (Array.isArray(ignore)) {
        for (const item of ignore) {
          let element: HTMLElement | null = null
          if (item && typeof item === 'object' && 'current' in item) {
            element = item.current
          }
          else if (item instanceof HTMLElement) {
            element = item
          }
          if (element && isDescendant(event.target as EventTarget, element))
            return
        }
      }
      else if (typeof ignore === 'function' && ignore(event.target as EventTarget)) {
        return
      }

      onClose()
    }

    /**
     * Handler for keydown events to detect Escape key.
     * @param event - The keyboard event.
     */
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    if (closeOnEsc) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      if (closeOnEsc) {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [onClose, closeOnEsc, ignore])
}

// Original export name refactored to match the new function name
export const Y = useClickOutside
