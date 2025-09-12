import { createActionCreator } from '../905/73481'

/**
 * Notification action creators grouped by domain.
 * Original variable: $$n0
 */
export const notificationActions = {
  /** Enqueue notification at the front */
  enqueueFront: createActionCreator('NOTIFICATION_ENQUEUE_FRONT'),
  /** Enqueue notification */
  enqueue: createActionCreator('NOTIFICATION_ENQUEUE'),
  /** Dequeue notification */
  dequeue: createActionCreator('NOTIFICATION_DEQUEUE'),
  /** Clear all notifications */
  clearAll: createActionCreator('NOTIFICATIONS_CLEAR_ALL'),
}

// Refactored export name for clarity and maintainability
export const $ = notificationActions
