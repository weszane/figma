import { useCallback } from "react"
import { useStore } from "react-redux"
import { trackFileEvent } from "../figma_app/314264"
/**
 * Enum for spotlight event types
 * Original name: $$s0
 */
export enum SpotlightEventType {
  START = "start",
  STOP = "stop",
  IGNORE = "ignore",
}

/**
 * Custom hook for tracking spotlight CTA events
 * Original name: $$o1
 */
export function useSpotlightCTATracking() {
  const store = useStore()

  return useCallback((eventType: SpotlightEventType) => {
    const state: AppState = store.getState() as AppState
    const fileKey = state.openFile?.key
    const multiplayer = state.multiplayer

    const currentUser = multiplayer.allUsers.find(
      user => user.sessionID === multiplayer.sessionID,
    )

    const userCount = multiplayer.allUsers.length
    const userId = currentUser?.userID

    trackFileEvent("Spotlight CTA Clicked", fileKey, state, {
      userId,
      numFileUsers: userCount,
      eventType,
    })
  }, [store])
}

export const N = SpotlightEventType
export const T = useSpotlightCTATracking
