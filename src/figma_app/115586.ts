import { useEffect, useState } from "react"
import { atomWithDefault, useAtomWithSubscription } from "../figma_app/27355"
import { fullscreenValue } from "../figma_app/455680"

const fullscreenReadyAtom = atomWithDefault<boolean>(() =>
  fullscreenValue.isReady() || fullscreenValue.onReady(),
)

/**
 * Custom hook that subscribes to fullscreen ready state changes
 * Original name: $$o0
 */
export function useFullscreenReadySubscription(): void {
  useAtomWithSubscription(fullscreenReadyAtom)
}

/**
 * Custom hook that returns whether fullscreen is ready
 * Original name: $$l1
 */
export function useIsFullscreenReady(): boolean {
  const [isReady, setIsReady] = useState<boolean>(false)

  useEffect(() => {
    // Check if already ready
    if (fullscreenValue.isReady()) {
      setIsReady(true)
      return
    }

    // Setup async ready listener
    let isUnmounted = false

    fullscreenValue.onReady().then(() => {
      if (!isUnmounted) {
        setIsReady(true)
      }
    })

    // Cleanup function to prevent state updates after unmount
    return () => {
      isUnmounted = true
    }
  }, [])

  return isReady
}

export const N = useFullscreenReadySubscription
export const g = useIsFullscreenReady
