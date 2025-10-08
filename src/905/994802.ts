import { getCuratorLoggingLevel } from "../905/121508"
import { logger } from "../905/651849"
import { removeUUID } from "../905/958284"
import { throwTypeError } from "../figma_app/465776"
/**
 * Determines if logging is enabled based on the current logging level and the requested level.
 *
 * @param level - The requested logging level
 * @returns Whether logging is enabled for the given level
 *
 * Original function name: o
 */
function isLoggingEnabled(level: string): boolean {
  const currentLevel = getCuratorLoggingLevel()

  switch (level) {
    case "debug":
      return currentLevel === "debug" || currentLevel === "trace"
    case "trace":
      return currentLevel === "trace"
    case "disabled":
      return false
    default:
      throwTypeError(level)
  }
}

/**
 * Logs curator events with detailed descriptions based on event type.
 *
 * @param event - The event object to log
 * @param logLevel - The logging level for this event
 *
 * Original function name: $$l0
 */
export function logCuratorEvent(event: any, logLevel: string) {
  const eventWithTimestamp = {
    ...event,
    timestamp: new Date().toISOString(),
  }

  // Post message to devtools bridge
  window.postMessage({
    event: eventWithTimestamp,
    source: "figma-devtools-bridge",
  }, "*")

  // Log event if logging is enabled
  if (isLoggingEnabled(logLevel)) {
    const eventToLog = {
      ...eventWithTimestamp,
      description: getEventDescription(event),
    }

    logger.log("Curator", JSON.stringify(eventToLog, null, 2))
  }
}

/**
 * Generates a human-readable description for a curator event based on its name and properties.
 *
 * @param event - The event object
 * @returns A descriptive string for the event
 *
 * Original function was an inline anonymous function
 */
function getEventDescription(event: any): string {
  switch (event.name) {
    case "overlay_show_called":
      return `The overlay.show() function was called on overlay ${removeUUID(event.properties.overlayId)}`
    case "overlay_complete_called":
      return `The overlay.complete() function was called on overlay ${removeUUID(event.properties.overlayId)} because it was ${event.properties.completeReason}`
    case "paused_on_current_overlay":
      return `The ExperienceSelector paused/queued this overlay with id ${event.properties.overlayId} because an overlay (${event.properties.blockingOverlayId}) is currently showing`
    case "failed_on_current_overlay":
      return `The ExperienceSelector failed to show this overlay with id ${event.properties.overlayId} because an overlay (${event.properties.blockingOverlayId}) is currently showing`
    case "remove_blocked_experiences":
      return `The ExperienceSelector is running through all the queued experiences for channel ${event.properties.channelId} to either pause or fail them.`
    case "get_experience_for_channel":
      return `The ExperienceSelector is getting an experience for channel ${event.properties.channelId}`
    case "complete_experience":
      return `The ExperienceSelector was notified that experience ${event.properties.experienceId} finished showing`
    case "queue_experience":
      return `The experience ${event.properties.experienceId} was sent to the ExperienceSelector`
    case "run_experiences_for_channel":
      return `The ExperienceSelector is about to run through the list of queued experiences for channel ${event.properties.channelId} to either show or block them`
    case "overlay_mounted":
      return `The overlay ${removeUUID(event.properties.overlayId)} was mounted`
    case "overlay_unmounted":
      return `The overlay ${removeUUID(event.properties.overlayId)} was unmounted`
    case "overlay_showing":
      return `The overlay ${removeUUID(event.properties.overlayId)} is showing`
    case "data_dependencies_loading":
      return `The data dependencies for overlay ${removeUUID(event.properties.overlayId)} are loading`
    case "data_dependencies_loaded":
      return `The data dependencies for overlay ${removeUUID(event.properties.overlayId)} have loaded`
    case "data_dependencies_load_error":
      return `The data dependencies for overlay ${removeUUID(event.properties.overlayId)} failed to load${event.properties.timedOut ? " (timed out)" : ""}`
    case "data_dependencies_disabled":
      return `One or more data dependencies for overlay ${removeUUID(event.properties.overlayId)} is disabled`
    case "can_show_failed":
      return `The overlay ${removeUUID(event.properties.overlayId)} failed the canShow() check`
    case "higher_priority_overlay_loading":
      return `The overlay ${removeUUID(event.properties.overlayId)} is paused because a higher priority overlay ${removeUUID(event.properties.higherPriorityOverlayId)} is loading`
    case "higher_priority_overlay_loaded":
      return `The overlay ${removeUUID(event.properties.overlayId)} is resumed because a higher priority overlay has loaded (took ${event.properties.queueDurationMs}ms)`
    case "event_forwarded":
      return `The overlay ${removeUUID(event.properties.overlayId)} received the event ${event.properties.eventId} from the Event Bus`
    case "event_listener_registered":
      return `The overlay ${removeUUID(event.properties.overlayId)} is listening to ${event.properties.eventId} on the Event Bus`
    case "event_listener_deregistered":
      return `The overlay ${removeUUID(event.properties.overlayId)} is no longer listening to ${event.properties.eventId} on the Event Bus`
    case "dequeue_experience":
      return `The ExperienceSelector dequeued the experience with id: ${event.properties.experienceId}`
    case "rule_check_failed":
      return `The overlay ${removeUUID(event.properties.overlayId)} failed the rule: ${event.properties.name} (${event.properties.description})`
    case "experiment_check_passed":
      return `The overlay ${removeUUID(event.properties.overlayId)} passed its experiment check`
    case "experiment_check_failed":
      return `The overlay ${removeUUID(event.properties.overlayId)} failed its experiment check`
    case "lifecycle_check_failed":
      return `The overlay ${removeUUID(event.properties.overlayId)} failed the lifecycle check: ${event.properties.description}`
    default:
      throwTypeError(event)
  }
}

export const R = logCuratorEvent
