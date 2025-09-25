import { VisualBellIcon } from '../905/576487'
/**
 * Determines the timeout value for a notification based on its properties.
 * Original function name: $$r1
 * @param notification - The notification object containing timeout and display properties.
 * @returns The calculated timeout in milliseconds.
 */
export function getNotificationTimeout(notification: {
  timeoutOverride?: number
  error?: boolean
  icon?: VisualBellIcon
  button?: boolean
  messageComponentKey?: string
  i18n?: string
  message?: string
}): number {
  if (notification.timeoutOverride)
    return notification.timeoutOverride
  if (
    notification.error
    || notification.icon === VisualBellIcon.PROGRESS
    || notification.icon === VisualBellIcon.SPINNER
    || notification.icon === VisualBellIcon.RETURN_TO_INSTANCE
  ) {
    return Infinity
  }
  if (notification.button)
    return 10000
  if (
    notification.messageComponentKey
    || notification.i18n
    || (notification.message && notification.message.length > 25)
  ) {
    return 6000
  }
  return 3000
}

/**
 * Calculates the final timeout for a notification, factoring in repeat count and delay.
 * Original function name: $$a0
 * @param notification - The notification object.
 * @param repeatCount - Number of times the notification has been repeated.
 * @returns The final timeout in milliseconds.
 */
export function calculateNotificationTimeout(notification: {
  timeoutOverride?: number
  error?: boolean
  icon?: VisualBellIcon
  button?: boolean
  messageComponentKey?: string
  i18n?: string
  message?: string
  timeoutType?: string
  delay?: number
}, repeatCount: number): number {
  let timeout = getNotificationTimeout(notification)
  if (
    repeatCount > 1
    && (!notification.timeoutType || notification.timeoutType === 'suggested')
  ) {
    timeout *= 0.5 ** (repeatCount - 1)
  }
  if (notification.delay) {
    timeout += notification.delay
  }
  return timeout
}

// Exported names refactored for clarity
export const L = calculateNotificationTimeout
export const R = getNotificationTimeout
