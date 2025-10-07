import { useSetAtom, type PrimitiveAtom } from "jotai"
import { useEffect } from "react"
import { atom, atomStoreManager, useAtomWithSubscription,  } from "../figma_app/27355"
import { shouldHandleMultiTouchOrPressure } from "../figma_app/753501"

// Mouse position atom to track current coordinates
const mousePositionAtom = atom<{ x: number, y: number } | null>(null)  as PrimitiveAtom<{ x: number, y: number } | null>

// Unused atom, kept for backward compatibility
const unusedAtom = atom(null)

// Global counter to track active listeners
let globalListenerCounter = 0

/**
 * Custom hook to track mouse position with optional subscription
 *
 * @param options - Configuration options
 * @param options.subscribeToUpdates_EXPENSIVE - Whether to subscribe to updates (expensive operation)
 * @returns Current mouse position coordinates
 */
export function useMousePositionTracker({
  subscribeToUpdates_EXPENSIVE: shouldSubscribe,
}: {
  subscribeToUpdates_EXPENSIVE: boolean
}) {
  // Determine appropriate event type based on touch/pressure support
  const eventType = shouldHandleMultiTouchOrPressure(true) ? "pointermove" : "mousemove"

  // Get setter function for mouse position atom
  const setMousePosition = useSetAtom(mousePositionAtom)

  // Conditionally subscribe to atom updates
  useAtomWithSubscription(shouldSubscribe ? mousePositionAtom : unusedAtom)

  // Setup and cleanup event listeners
  useEffect(() => {
    // Event handler to update mouse position
    const handleMouseMove = ({
      clientX,
      clientY,
    }: {
      clientX: number
      clientY: number
    }) => {
      setMousePosition({
        x: clientX,
        y: clientY,
      })
    }

    // Add event listener when first component mounts
    if (++globalListenerCounter === 1) {
      document.addEventListener(eventType, handleMouseMove)
    }

    // Cleanup: remove event listener when last component unmounts
    return () => {
      if (--globalListenerCounter === 0) {
        document.removeEventListener(eventType, handleMouseMove)
      }
    }
  }, [eventType, setMousePosition])

  // Return current value from atom store
  return atomStoreManager.get(mousePositionAtom)
}

// Export alias for the hook
export const x = useMousePositionTracker
