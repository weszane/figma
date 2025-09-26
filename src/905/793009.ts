import { debugState } from '../905/407919'
import { trackEventAnalytics } from '../905/449184'
import { logInfo } from '../905/714362'

/**
 * Enum for template types
 * Original name: $$s0
 */
export enum AITemplateType {
  AI = 'AI',
  STANDARD = 'Standard',
}

/**
 * Track template event with analytics
 * Original name: $$o1
 * @param eventName - The name of the event to track
 * @param eventProperties - Additional properties for the event
 */
export function trackTemplateEvent(eventName: string, eventProperties: Record<string, any> = {}): void {
  logInfo(eventName, 'trackTemplateEvent', eventProperties)

  trackEventAnalytics(eventName, {
    userId: debugState?.getState()?.user?.id,
    ...eventProperties,
  }, {
    forwardToDatadog: true,
  })
}

// Export aliases for backward compatibility
export const T = AITemplateType
export const _ = trackTemplateEvent
