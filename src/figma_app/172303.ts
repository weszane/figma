import { VisualBellActions } from "../905/302958"
import { debugState } from "../905/407919"

interface VisualBellOptions {
  type: string
  error?: unknown
  onDismiss?: () => void
  timeoutOverride?: number
  icon?: string
  button?: unknown
  [key: string]: unknown
}

/**
 * Displays a visual bell notification with the specified options
 * @param type - The type of notification
 * @param error - Optional error object
 * @param options - Additional options for the notification
 * @param timeoutOverride - Override for the default timeout (default: 5000ms)
 * @param icon - Optional icon for the notification
 * @param button - Optional button configuration
 * @param onDismiss - Callback when notification is dismissed (default: noop)
 */
export function dispatchShowVisualBell(
  type: string,
  error: unknown,
  options: Record<string, unknown> = {},
  timeoutOverride: number = 5000,
  icon?: string,
  button?: unknown,
  onDismiss: () => void = () => { },
): void {
  const notificationOptions: VisualBellOptions = {
    type,
    error,
    onDismiss,
    timeoutOverride,
    icon,
    button,
    ...options,
  }

  debugState.dispatch(VisualBellActions.enqueue(notificationOptions))
}

export const j = dispatchShowVisualBell
