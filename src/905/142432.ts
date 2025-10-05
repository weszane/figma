import { useSprigWithSampling } from "../905/99656"
import { createEventEmitter, useEventSubscription } from "../figma_app/516794"

// Original: $$a1
/**
 * Event emitter for interactive slide element insertion events.
 */
export let interactiveSlideElementInsertedEmitter = createEventEmitter()

// Original: $$s0
/**
 * Sets up event subscription to track interactive slide element insertions using Sprig analytics.
 * @returns null - This is a side-effect hook component.
 */
export function setupInteractiveSlideElementTracking() {
  const { Sprig } = useSprigWithSampling()
  useEventSubscription(interactiveSlideElementInsertedEmitter, () => {
    Sprig("track", "interactive_slide_element_inserted")
  })
  return null
}

// Original: A = $$s0
export const A = setupInteractiveSlideElementTracking

// Original: g = $$a1
export const g = interactiveSlideElementInsertedEmitter
