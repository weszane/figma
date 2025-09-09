import { throwTypeError } from "../figma_app/465776";
import { logger } from "../905/651849";
import { y } from "../905/958284";
import { r as _$$r } from "../905/121508";
let o = e => {
  let t = _$$r();
  switch (e) {
    case "debug":
      return "debug" === t || "trace" === t;
    case "trace":
      return "trace" === t;
    case "disabled":
      return !1;
    default:
      throwTypeError(e);
  }
};
export function $$l0(e, t) {
  let i = {
    ...e,
    timestamp: new Date().toISOString()
  };
  if (window.postMessage({
    event: i,
    source: "figma-devtools-bridge"
  }, "*"), o(t)) {
    let t = {
      ...i,
      description: function (e) {
        switch (e.name) {
          case "overlay_show_called":
            return `The overlay.show() function was called on overlay ${y(e.properties.overlayId)}`;
          case "overlay_complete_called":
            return `The overlay.complete() function was called on overlay ${y(e.properties.overlayId)} because it was ${e.properties.completeReason}`;
          case "paused_on_current_overlay":
            return `The ExperienceSelector paused/queued this overlay with id ${e.properties.overlayId} because an overlay (${e.properties.blockingOverlayId}) is currently showing`;
          case "failed_on_current_overlay":
            return `The ExperienceSelector failed to show this overlay with id ${e.properties.overlayId} because an overlay (${e.properties.blockingOverlayId}) is currently showing`;
          case "remove_blocked_experiences":
            return `The ExperienceSelector is running through all the queued experiences for channel ${e.properties.channelId} to either pause or fail them.`;
          case "get_experience_for_channel":
            return `The ExperienceSelector is getting an experience for channel ${e.properties.channelId}`;
          case "complete_experience":
            return `The ExperienceSelector was notified that experience ${e.properties.experienceId} finished showing`;
          case "queue_experience":
            return `The experience ${e.properties.experienceId} was sent to the ExperienceSelector`;
          case "run_experiences_for_channel":
            return `The ExperienceSelector is about to run through the list of queued experiences for channel ${e.properties.channelId} to either show or block them`;
          case "overlay_mounted":
            return `The overlay ${y(e.properties.overlayId)} was mounted`;
          case "overlay_unmounted":
            return `The overlay ${y(e.properties.overlayId)} was unmounted`;
          case "overlay_showing":
            return `The overlay ${y(e.properties.overlayId)} is showing`;
          case "data_dependencies_loading":
            return `The data dependencies for overlay ${y(e.properties.overlayId)} are loading`;
          case "data_dependencies_loaded":
            return `The data dependencies for overlay ${y(e.properties.overlayId)} have loaded`;
          case "data_dependencies_load_error":
            return `The data dependencies for overlay ${y(e.properties.overlayId)} failed to load${e.properties.timedOut ? " (timed out)" : ""}`;
          case "data_dependencies_disabled":
            return `One or more data dependencies for overlay ${y(e.properties.overlayId)} is disabled`;
          case "can_show_failed":
            return `The overlay ${y(e.properties.overlayId)} failed the canShow() check`;
          case "higher_priority_overlay_loading":
            return `The overlay ${y(e.properties.overlayId)} is paused because a higher priority overlay ${y(e.properties.higherPriorityOverlayId)} is loading`;
          case "higher_priority_overlay_loaded":
            return `The overlay ${y(e.properties.overlayId)} is resumed because a higher priority overlay has loaded (took ${e.properties.queueDurationMs}ms)`;
          case "event_forwarded":
            return `The overlay ${y(e.properties.overlayId)} received the event ${e.properties.eventId} from the Event Bus`;
          case "event_listener_registered":
            return `The overlay ${y(e.properties.overlayId)} is listening to ${e.properties.eventId} on the Event Bus`;
          case "event_listener_deregistered":
            return `The overlay ${y(e.properties.overlayId)} is no longer listening to ${e.properties.eventId} on the Event Bus`;
          case "dequeue_experience":
            return `The ExperienceSelector dequeued the experience with id: ${e.properties.experienceId}`;
          case "rule_check_failed":
            return `The overlay ${y(e.properties.overlayId)} failed the rule: ${e.properties.name} (${e.properties.description})`;
          case "experiment_check_passed":
            return `The overlay ${y(e.properties.overlayId)} passed its experiment check`;
          case "experiment_check_failed":
            return `The overlay ${y(e.properties.overlayId)} failed its experiment check`;
          case "lifecycle_check_failed":
            return `The overlay ${y(e.properties.overlayId)} failed the lifecycle check: ${e.properties.description}`;
          default:
            throwTypeError(e);
        }
      }(e)
    };
    logger.log("Curator", JSON.stringify(t, null, 2));
  }
}
export const R = $$l0;