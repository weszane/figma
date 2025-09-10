import type { Fn } from '../../../types/global'
import { trackEventAnalytics } from '../905/449184'
import { globalPerfTimer } from '../905/542194'
import { getCurrentReferrer, getInitialReferrer, updateReferrer } from '../905/747968'
import { subscribeToAppVisibility } from '../figma_app/925651'

/**
 * NavigationType enum for page navigation events.
 * Original variable: l
 */
export enum NavigationType {
  PUSH = 'push',
  REPLACE = 'replace',
  POP = 'pop',
  VISIBILITY_CHANGE = 'visibility_change',
}

/**
 * Page information type.
 * Used in getPage and analytics events.
 */
export interface PageInfo {
  path?: string
  referrer?: string
  document_referrer?: string
  search?: string
  title?: string
  url?: string
}

const PAGE_TIMESPENT = 'page_timespent'
const PAGE_TIMESPENT_ERROR = 'page_timespent_error'

let currentPageInfo: PageInfo | undefined

/**
 * PageTimeSpentManager handles page visit timing and analytics.
 * Original object: u
 */
export const PageTimeSpentManager = {
  /**
   * Starts timing for the current page.
   * Original method: startPageVisit
   */
  startPageVisit(): void {
    const timers = globalPerfTimer.getAll(PAGE_TIMESPENT)
    currentPageInfo = PageTimeSpentManager.getPage()
    if (timers?.size) {
      let hasOtherTimers = false
      const timerKeys = Array.from(timers.keys()).join(', ')
      timers.forEach((_, key) => {
        if (key !== currentPageInfo?.path) {
          hasOtherTimers = true
          globalPerfTimer.delete(PAGE_TIMESPENT, key)
        }
      })
      if (hasOtherTimers) {
        trackEventAnalytics(PAGE_TIMESPENT_ERROR, {
          error: 'Timer already running for another page',
          keys: timerKeys,
          path: currentPageInfo?.path,
        }, {
          forwardToDatadog: true,
          sendAsBeacon: true,
        })
      }
    }
    if (globalPerfTimer.get(PAGE_TIMESPENT, currentPageInfo?.path)) {
      trackEventAnalytics(PAGE_TIMESPENT_ERROR, {
        error: 'Timer already running for this page',
        ...currentPageInfo,
      }, {
        forwardToDatadog: true,
        sendAsBeacon: true,
      })
      return
    }
    globalPerfTimer.start(PAGE_TIMESPENT, {
      key: currentPageInfo?.path,
    })
  },

  /**
   * Ends timing for the current page and sends analytics.
   * Original method: endPageVisit
   * @param navigationType NavigationType
   */
  endPageVisit(navigationType: NavigationType | string): void {
    if (!currentPageInfo) {
      trackEventAnalytics(PAGE_TIMESPENT_ERROR, {
        error: 'Undefined page info',
        navigation_type: navigationType,
      }, {
        forwardToDatadog: true,
        sendAsBeacon: true,
      })
      return
    }
    try {
      const timeSpent = globalPerfTimer.stop(PAGE_TIMESPENT, currentPageInfo?.path)
      trackEventAnalytics(PAGE_TIMESPENT, {
        ...currentPageInfo,
        time_on_page_ms: timeSpent,
        navigation_type: navigationType,
      }, {
        sendAsBeacon: true,
        page: currentPageInfo,
      })
      globalPerfTimer.delete(PAGE_TIMESPENT, currentPageInfo?.path)
      currentPageInfo = undefined
    }
    catch (err: any) {
      trackEventAnalytics(PAGE_TIMESPENT_ERROR, {
        ...currentPageInfo,
        error: err.message,
        navigation_type: navigationType,
      }, {
        forwardToDatadog: true,
        sendAsBeacon: true,
      })
    }
  },

  /**
   * Ends timing for the current page and starts timing for a new page if navigation type and path differ.
   * Original method: endPageVisitAndStartNewPageVisit
   * @param navigationType NavigationType | string
   * @param newPath string
   */
  endPageVisitAndStartNewPageVisit(navigationType: NavigationType | string, newPath: string): void {
    if (navigationType !== NavigationType.VISIBILITY_CHANGE && currentPageInfo?.path !== newPath) {
      PageTimeSpentManager.endPageVisit(navigationType)
      PageTimeSpentManager.startPageVisit()
    }
  },

  /**
   * Gets current page information.
   * Original method: getPage
   */
  getPage: (): PageInfo => ({
    path: self.window?.location.pathname,
    referrer: getCurrentReferrer(),
    document_referrer: getInitialReferrer(),
    search: self.window?.location.search,
    title: self.document?.title,
    url: self.window?.location.href,
  }),

  /**
   * Gets current page timing info.
   * Original method: getCurrentPageTimeSpent
   */
  getCurrentPageTimeSpent() {
    const time = globalPerfTimer.get(PAGE_TIMESPENT, currentPageInfo?.path)
    return {
      pageInfo: currentPageInfo,
      time,
    }
  },
}

/**
 * Sets up navigation listeners for page time spent tracking.
 * Original function: $$p0
 * @param history History object with listen method
 */
export function setupPageTimeSpentTracking(history: { listen: (cb: Fn) => void, location: Location }) {
  const navigationTypeMapper = (type: string): NavigationType | undefined => {
    switch (type) {
      case 'PUSH': return NavigationType.PUSH
      case 'REPLACE': return NavigationType.REPLACE
      case 'POP': return NavigationType.POP
      default: return undefined
    }
  }

  [updateReferrer, (navType: string) => {
    PageTimeSpentManager.endPageVisitAndStartNewPageVisit(
      navigationTypeMapper(navType)!,
      history.location.pathname,
    )
  }].forEach((listener) => {
    history.listen(listener)
  })
}

// Start tracking on initial load
PageTimeSpentManager.startPageVisit()

// Subscribe to app visibility changes
subscribeToAppVisibility((visibility: string) => {
  if (visibility === 'hidden') {
    PageTimeSpentManager.endPageVisit(NavigationType.VISIBILITY_CHANGE)
  }
  if (visibility === 'visible') {
    PageTimeSpentManager.startPageVisit()
  }
})

/**
 * Exported for external usage.
 * Original export: U = $$p0
 */
export const U = setupPageTimeSpentTracking
