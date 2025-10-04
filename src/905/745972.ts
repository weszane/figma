import { useEffect, useState } from "react"
/**
 * Custom hook to track window dimensions
 * Original name: $$r0
 */
export function useWindowDimensions() {
  const [windowInnerWidth, setWindowInnerWidth] = useState<number>(window.innerWidth)
  const [windowInnerHeight, setWindowInnerHeight] = useState<number>(window.innerHeight)

  useEffect(() => {
    /**
     * Handler to update window dimensions
     * Original variable name: e
     */
    const handleResize = (): void => {
      setWindowInnerWidth(window.innerWidth)
      setWindowInnerHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return {
    windowInnerWidth,
    windowInnerHeight,
  }
}

// Export alias for backward compatibility
// Original name: l
export const l = useWindowDimensions
