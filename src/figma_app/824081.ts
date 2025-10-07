import { useMemo } from "react"
import { getViewportInfo } from "../figma_app/62612"
import { useMousePositionTracker } from "../figma_app/943271"
/**
 * Hook to check if the mouse position is within the viewport bounds.
 * Original: $$s0
 */
export function useIsMouseInViewport(): boolean {
  // Original: e
  const mousePosition = useMousePositionTracker({
    subscribeToUpdates_EXPENSIVE: true,
  })
  // Original: t
  const viewport = getViewportInfo({
    subscribeToUpdates_expensive: true,
  })
  return useMemo(() => {
    if (!mousePosition || !viewport)
      return false
    return mousePosition.y >= viewport.y
      && mousePosition.x >= viewport.x
      && mousePosition.x <= viewport.x + viewport.width
  }, [mousePosition, viewport])
}
export const K = useIsMouseInViewport
