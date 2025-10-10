import { useCallback, useEffect, useRef } from "react"
import { useMemoShallow } from "../905/19536"
import { eventEmitterAtom } from "../905/502364"
import { logCuratorEvent } from "../905/994802"
import { useAtomWithSubscription } from "../figma_app/27355"



/**
 * Custom hook to forward events from an event emitter to a handler function
 * ($$l0 - original function name)
 */
export function useEventForwarder( overlayId, eventIds, handler): void {
  const eventEmitter = useAtomWithSubscription(eventEmitterAtom) as any
  const eventIdsArray = useMemoShallow(() =>
    typeof eventIds === "string" ? [eventIds] : eventIds, [eventIds])
  const handlerRef = useRef(handler)

  // Keep handler reference updated
  handlerRef.current = handler

  // Create event handler with proper typing
  const eventHandler = useCallback((event: any) => {
    const eventProperties = "properties" in event ? event.properties : undefined

    logCuratorEvent({
      type: "triggered",
      name: "event_forwarded",
      properties: {
        overlayId,
        eventId: event.id,
        eventProperties,
      },
    }, "debug")

    handlerRef.current(event)
  }, [overlayId])

  // Manage event listener subscription lifecycle
  useEffect(() => {
    // Register event listeners
    for (const eventId of eventIdsArray) {
      logCuratorEvent({
        type: "triggered",
        name: "event_listener_registered",
        properties: {
          overlayId,
          eventId,
        },
      }, "trace")

      eventEmitter.addEventListener(eventId, eventHandler)
    }

    // Cleanup: Deregister event listeners
    return () => {
      for (const eventId of eventIdsArray) {
        logCuratorEvent({
          type: "triggered",
          name: "event_listener_deregistered",
          properties: {
            overlayId,
            eventId,
          },
        }, "trace")

        eventEmitter.removeEventListener(eventId, eventHandler)
      }
    }
  }, [overlayId, eventIdsArray, eventEmitter, eventHandler])
}

// Export alias for backward compatibility
export const E = useEventForwarder
