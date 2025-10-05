import { isNumber } from 'lodash-es'
import { analyticsEventManager } from '../905/449184'
import { atomStoreManager } from '../figma_app/27355'
import { suggestionsManagerAtom } from '../figma_app/235371'

import { ContextType, DEFAULT_SEARCH_CONTEXT } from '../figma_app/257779'
import { getDefaultConfigValue, getFrameSectionVersion } from '../figma_app/407767'
import { getUUID } from '../figma_app/517115'

export const AUTO_SUGGEST_EVENT_PREFIX = 'auto-suggest'

export const SKIP_LOGGING_CONTEXT_TYPES = new Set([
  ContextType.EVAL,
  ContextType.SHADOW_SUGGESTIONS,
])

/**
 * Analytics logger for auto-suggest functionality
 * Tracks funnel events, timers, and debug information
 */
export class AutoSuggestAnalyticsLogger {
  private analyticsData: typeof DEFAULT_SEARCH_CONTEXT
  private config: {
    logFunnelEvents?: boolean
    logTimers?: boolean
    logDebugInfo?: boolean
  }

  private timers: number[]
  private debugInfo: Record<string, unknown>
  private entryPoint: ContextType
  private shouldLog: boolean

  constructor({
    analyticsData = DEFAULT_SEARCH_CONTEXT,
    config,
    entryPoint,
  }: {
    analyticsData?: typeof DEFAULT_SEARCH_CONTEXT
    config: { loggerConfig: typeof this.config }
    entryPoint: ContextType
  }) {
    this.analyticsData = analyticsData
    this.config = config.loggerConfig
    this.timers = [Date.now()]
    this.debugInfo = {}
    this.entryPoint = entryPoint
    this.shouldLog = !SKIP_LOGGING_CONTEXT_TYPES.has(entryPoint)
  }

  /**
   * Log a funnel event if logging is enabled
   * @param eventName - Name of the funnel event to log
   */
  logFunnelEvent(eventName: string): void {
    if (this.config.logFunnelEvents && this.shouldLog) {
      trackAutoSuggestFunnelEvent(this.analyticsData, eventName, this.entryPoint)
    }
  }

  /**
   * Log a timer event with duration calculation
   * @param context - Context for the timer event
   * @param stepName - Name of the step being timed
   * @param timerIndex - Index of the timer to calculate duration from
   * @returns Index of the new timer, or -1 if logging is disabled
   */
  logTimer(context: string, stepName: string, timerIndex?: number): number {
    if (!this.config.logTimers) {
      return -1
    }

    const currentTime = Date.now()

    if (this.timers.length > 0) {
      const duration = currentTime - this.timers[
        isNumber(timerIndex) ? timerIndex : this.timers.length - 1
      ]

      const newTimerIndex = this.timers.push(currentTime)

      if (this.shouldLog) {
        analyticsEventManager.trackDefinedEvent('auto_suggest.timer', {
          ...this.analyticsData,
          context,
          stepName,
          duration,
          sessionId: getUUID(),
          entryPoint: this.entryPoint,
          suggestionsVersion: getDefaultConfigValue(),
          triggerVersion: getFrameSectionVersion(),
        })
      }

      return newTimerIndex - 1
    }

    return -1
  }

  /**
   * Log debug information if debug logging is enabled
   * @param key - Key for the debug information
   * @param value - Value of the debug information
   */
  logDebugInfo(key: string, value: unknown): void {
    if (this.config.logDebugInfo) {
      this.debugInfo[key] = value
    }
  }
}

/**
 * Track an auto-suggest funnel event
 * @param analyticsData - Base analytics data
 * @param eventName - Name of the funnel event
 * @param entryPoint - Entry point context
 */
export function trackAutoSuggestFunnelEvent(
  analyticsData: typeof DEFAULT_SEARCH_CONTEXT,
  eventName: string,
  entryPoint: ContextType,
): void {
  analyticsEventManager.trackDefinedEvent('auto_suggest.funnel', {
    ...analyticsData,
    funnelEvent: eventName,
    sessionId: getUUID(),
    entryPoint,
    suggestionsVersion: getDefaultConfigValue(),
    triggerVersion: getFrameSectionVersion(),
  })
}

/**
 * Track when a component is inserted via auto-suggest
 * @param eventData - Event data to track
 */
export function trackComponentInserted(eventData: Record<string, unknown>): void {
  const { analyticsData } = atomStoreManager.get(suggestionsManagerAtom)

  analyticsEventManager.trackDefinedEvent('auto_suggest.component_inserted', {
    ...eventData,
    ...analyticsData,
    sessionId: getUUID(),
    suggestionsVersion: getDefaultConfigValue(),
    triggerVersion: getFrameSectionVersion(),
  })
}

// Export aliases for backward compatibility
export const O = AutoSuggestAnalyticsLogger
export const gb = trackAutoSuggestFunnelEvent
export const k1 = trackComponentInserted
export const tM = AUTO_SUGGEST_EVENT_PREFIX
