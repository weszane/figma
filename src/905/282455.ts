import { debugState } from '../905/407919'
import { $A } from '../905/782918'
import { PluginIframeMode } from '../905/968269'
import { isCooperSelectedView, isValidForCooper, isValidForCooperSelectedView } from '../figma_app/300692'

/**
 * Determines the appropriate PluginIframeMode based on the input event.
 * Original function name: $$o0
 * @param event - The event object containing trigger or run mode information.
 * @returns PluginIframeMode
 */
export function getPluginIframeMode(event: any): PluginIframeMode {
  // Handle events triggered from specific sources
  if ('triggeredFrom' in event) {
    const triggeredFrom = event.triggeredFrom;
    if (isValidForCooper(triggeredFrom)) {
      return PluginIframeMode.INSPECT;
    }
    if (isValidForCooperSelectedView(triggeredFrom)) {
      return PluginIframeMode.BUZZ_LEFT_PANEL;
    }
    switch (triggeredFrom) {
      case 'handoff-relaunch':
      case 'handoff-panel':
        return PluginIframeMode.INSPECT;
      default:
        return PluginIframeMode.MODAL;
    }
  }

  // Handle events with a runMode property
  if ('runMode' in event) {
    switch (event.runMode) {
      case 'codegen':
      case 'linkpreview':
        // No specific mode for these cases, fall through to default
        break;
      default: {
        const selectedView = debugState.getState().selectedView;
        if (isCooperSelectedView(selectedView)) {
          return PluginIframeMode.BUZZ_LEFT_PANEL;
        }
        return $A(selectedView) ? PluginIframeMode.INSPECT : PluginIframeMode.MODAL;
      }
    }
  }

  // Default fallback mode
  return PluginIframeMode.MODAL;
}

/** Alias for getPluginIframeMode (original export E) */
export const E = getPluginIframeMode;
