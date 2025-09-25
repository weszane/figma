import { createContext } from 'react'

interface AlsoTrackContext {
  trackablePath: TrackablePath[]
  interactable: Interactable
  error?: string
}

interface Interactable {
  name: string
  alsoTrackRef: AlsoTrackRef
}

interface AlsoTrackRef {
}

interface TrackablePath {
  name: string
  alsoTrackRef: string
  trackingEnabled?: boolean
}
export let InteractivityContext = createContext<AlsoTrackContext>({
  trackablePath: [],
  interactable: void 0,
  error: void 0,
})
export const f = InteractivityContext
