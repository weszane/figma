import { trackEventAnalytics } from '../905/449184'

/**
 * Type for VersionHistoryAnalytics properties.
 */
interface VersionHistoryAnalyticsProps {
  _loadID: string | null
  fileKey: string | null
  pageId: string | null
  action: string | null
  versionHistoryLoadEnd: number | null
  versionHistoryLoadStart: number | null
  loadTime: number | null
  reportedLoad: boolean
  reportedAbandon: boolean
}

/**
 * Handles version history analytics reporting.
 */
class VersionHistoryAnalytics implements VersionHistoryAnalyticsProps {
  _loadID: string | null = null
  fileKey: string | null = null
  pageId: string | null = null
  action: string | null = null
  versionHistoryLoadEnd: number | null = null
  versionHistoryLoadStart: number | null = null
  loadTime: number | null = null
  reportedLoad: boolean = false
  reportedAbandon: boolean = false

  /**
   * Reports version history abandon event.
   * (reportAbandon)
   */
  reportAbandon = (): void => {
    if (this.reportedAbandon)
      return
    const abandonTime = Math.round(performance.now()) - (this.versionHistoryLoadStart ?? 0)
    trackEventAnalytics('Version History Abandon', {
      loadID: this.loadID(),
      fileKey: this.fileKey,
      pageId: this.pageId,
      abandonTime,
      action: this.action,
      loadTime: this.loadTime,
    }, {
      forwardToDatadog: true,
      sendAsBeacon: true,
    })
    this.reportedAbandon = true
  }

  /**
   * Returns current load ID.
   * (loadID)
   */
  loadID(): string | null {
    return this._loadID
  }

  /**
   * Generates a new load ID.
   * (newLoadID)
   */
  newLoadID(): string {
    return Date.now().toString(36)
  }

  /**
   * Marks the end of version history load and calculates load time.
   * (markVersionHistoryLoadEnd)
   */
  markVersionHistoryLoadEnd(): void {
    this.versionHistoryLoadEnd = Math.round(performance.now())
    this.loadTime = (this.versionHistoryLoadEnd ?? 0) - (this.versionHistoryLoadStart ?? 0)
  }

  /**
   * Marks the start of version history load and initializes properties.
   * (markVersionHistoryLoadStart)
   */
  markVersionHistoryLoadStart(fileKey: string, pageId: string, action: string): void {
    this.fileKey = fileKey
    this.pageId = pageId
    this.action = action
    this._loadID = this.newLoadID()
    this.versionHistoryLoadStart = Math.round(performance.now())
    this.versionHistoryLoadEnd = null
    this.loadTime = null
    this.installListeners()
    this.reportedLoad = false
    this.reportedAbandon = false
  }

  /**
   * Installs event listeners for abandon reporting.
   * (installListeners)
   */
  installListeners(): void {
    window.addEventListener('pagehide', this.reportAbandon)
  }

  /**
   * Uninstalls event listeners for abandon reporting.
   * (uninstallListeners)
   */
  uninstallListeners(): void {
    window.removeEventListener('pagehide', this.reportAbandon)
  }

  /**
   * Reports version history load time analytics.
   * (report)
   */
  report(fileKey: string, productType: string, source: string): void {
    if (this.reportedLoad || fileKey !== this.fileKey)
      return
    this.reportedLoad = true
    setTimeout(() => {
      this.uninstallListeners()
      trackEventAnalytics('Version History Load Time', {
        loadID: this.loadID(),
        fileKey,
        productType,
        pageId: this.pageId,
        action: this.action,
        loadTime: this.loadTime,
        source,
      }, {
        forwardToDatadog: true,
      })
    })
  }
}

// Export with refactored name for clarity and traceability
export const VersionHistoryAnalyticsInstance = new VersionHistoryAnalytics()
export const C = VersionHistoryAnalyticsInstance
