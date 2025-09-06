import { useEffect } from 'react'

/**
 * EventEmitter - Original: $$i0
 * Provides a simple event emitter with subscribe and emit methods.
 */
export function createEventEmitter() {
  const subscribers = new Set<(payload: any) => void>()

  return {
    /**
     * Subscribe to events.
     * @param handler - Function to call when an event is emitted.
     * @returns Unsubscribe function.
     */
    subscribe(handler: (payload: any) => void): () => void {
      subscribers.add(handler)
      return () => {
        subscribers.delete(handler)
      }
    },

    /**
     * Emit an event to all subscribers.
     * @param payload - Data to pass to subscribers.
     */
    emit(payload: any): void {
      for (const handler of subscribers) {
        handler(payload)
      }
    },
  }
}

/**
 * useEventSubscription - Original: $$a1
 * React hook to subscribe to an event emitter.
 * @param emitter - The event emitter instance.
 * @param handler - The handler function to call on event.
 */
export function useEventSubscription(emitter: { subscribe: (handler: (payload: any) => void) => () => void }, handler: (payload: any) => void) {
  useEffect(() => emitter.subscribe(handler), [handler, emitter])
}

// Refactored exports for clarity and traceability
export const o = createEventEmitter // Original: o = $$i0
export const p = useEventSubscription // Original: p = $$a1
