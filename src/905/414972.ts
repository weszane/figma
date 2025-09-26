import { getInitialOptions } from '../figma_app/169182'

/**
 * Tracks and reports various performance metrics and user state events.
 * Original class name: anonymous class assigned to $$r0
 */
export class PerformanceMetricsTracker {
  userStateXHRDuration: number = -1
  userStateResourceEvents: Record<string, any> = {}
  domContentLoadedMs: number = -1
  jsonParseDurationMs: number = 0
  fileBrowserInitDurationMs: number = -1
  hydrateDurationMs: number = -1
  initialRenderDurationMs: number = -1
  timeToLoadMs: number = -1
  i18nFetchPreloadedDictMs: number = 0
  i18nFetchPreloadedEnglishDictMs: number = 0
  i18nFetchPreloadedDbDictMs: number = 0
  i18nNonPreloadedFetchDictMs: number = 0
  i18nNonPreloadedFetchDbDictMs: number = 0
  i18nInitStateWithLocaleDurationMs: number = 0
  i18nLocale: string = 'en'

  /**
   * Logs user state info from an sendWithRetry response.
   * Original method name: logUserStateInfo
   * @param e - The sendWithRetry response object
   */
  logUserStateInfo(e: { responseURL: string, status: number }) {
    // Early return if performance API is not available
    if (!performance.getEntriesByName)
      return

    this.userStateXHRDuration = Math.round((window as any).userStateXHRDuration || 0)

    const resourceEntry = performance.getEntriesByName(e.responseURL, 'resource').pop()
    if (!resourceEntry)
      return

    this.userStateResourceEvents['apiUserState.status'] = e.status
    const resourceData = (resourceEntry as PerformanceResourceTiming).toJSON()
    for (const key in resourceData) {
      this.userStateResourceEvents[`apiUserState.${key}`] = resourceData[key]
    }
  }

  /**
   * Reports the collected metrics using the provided reporting function.
   * Original method name: report
   * @param reportFn - The reporting function
   */
  report(reportFn: (
    eventName: string,
    metrics: Record<string, any>,
    options: { forwardToDatadog: boolean }
  ) => void) {
    reportFn('React Load Time', {
      version: 1,
      timeToLoad: this.timeToLoadMs,
      timeToDOMContentLoaded: this.domContentLoadedMs,
      fileBrowserInitDuration: this.fileBrowserInitDurationMs,
      jsonParseDuration: this.jsonParseDurationMs,
      hydrateDuration: this.hydrateDurationMs,
      initialRenderDuration: this.initialRenderDurationMs,
      userStateXHRDuration: this.userStateXHRDuration,
      i18nDictLoadDuration: this.i18nFetchPreloadedDictMs,
      i18nInitStateWithLocaleDuration: this.i18nInitStateWithLocaleDurationMs,
      i18nNonPreloadedFetchDictMs: this.i18nNonPreloadedFetchDictMs,
      i18nNonPreloadedFetchDbDictMs: this.i18nNonPreloadedFetchDbDictMs,
      i18nLocale: this.i18nLocale,
      isFastma: false,
      isStatsigBootstrapFlagOn: true,
      hasStatsigBootstrapValues: !!getInitialOptions().statsig_bootstrap_values,
      isUsingStatsigClientSDK: true,
      isUsingStatsigPrefetch: true,
      ...this.userStateResourceEvents,
    }, {
      forwardToDatadog: true,
    })
  }
}

// Export with original variable names for traceability
export const performanceMetricsTracker = new PerformanceMetricsTracker()
export const X = performanceMetricsTracker
