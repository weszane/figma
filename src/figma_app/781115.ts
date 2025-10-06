import { fullscreenPerfManager } from '../905/125218'
import { analyticsEventManager, trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { logDebug, logError } from '../905/714362'
import { getInitialOptions } from '../figma_app/169182'
import { CorePerfInfo } from '../figma_app/763686'
/**
 * Utility function to get high-resolution time.
 * @returns {number} Current time in milliseconds.
 * (Original: d)
 */
function getNow(): number {
  return window.performance ? window.performance.now() : Date.now()
}

/**
 * Utility function to generate a random ID string.
 * @returns {string} Random ID.
 * (Original: c)
 */
const generateRandomId = (): string => `${Math.random()}`.substr(2)

/**
 * Arguments for viewer connection events.
 */
export interface ViewerConnectArgs {
  entry?: string
  connectionType?: string
  fullscreen?: string
  afterConnectTo?: number
  logViewerWaiting?: boolean
  [key: string]: any
}

/**
 * LoadTimeTracker class tracks various performance and load events for the viewer.
 * (Original: $$u0)
 */
export class LoadTimeTracker {
  _lastConnectToMs: number = -1
  _lastConnectToID?: any
  _scheduledTimeouts: number[] = []
  _domContentLoaded: number = -1
  _livegraphStartTime: number = -1
  _multiplayerStartTime: number = -1
  _multiplayerSatisfiedTime: number = -1
  _liveGraphSubscriptionLoaded: number = -1
  _multiplayerFirstResponse: number = -1
  _multiplayerFirstFinish: number = -1
  _iflCompleted: number = -1
  _sentViewerConnectToMetric: boolean = false
  _connectArgs: ViewerConnectArgs | null = null
  _isInEmbed: boolean = self !== top
  reportedAbandon: boolean = false
  public enableProfiling: boolean = false
  public fullscreenEvents: Record<string, number> = {
    loadAndStartFullscreenIfNecessary: -1,
    fullscreenIsReady: -1,
  }

  public renderingEventsMaxSize: number = 10
  public renderingEvents: [number, number][] = []
  public renderingEventsReported: boolean = false
  public wasViewerLoadReported: boolean = false
  public wasInlinePreviewModalOpenedSinceViewerLoaded: boolean = false
  _wasBackgroundedOnceWhileLoading: boolean = false
  _totalVisibleLoadTime: number = 0
  _wasVisiblyLoading: boolean = false
  _lastTabSwitchOrLoadChange: number = -1

  /**
   * Reports viewer abandon event.
   * (Original: reportViewerAbandon)
   */
  public reportViewerAbandon = (): void => {
    const args = this._connectArgs
    if (
      this.reportedAbandon
      || this.renderingEventsReported
      || (args?.entry === 'Preview' && !this.wasInlinePreviewModalOpenedSinceViewerLoaded)
    ) {
      return
    }
    const abandonTime = Math.round(performance.now()) - (args?.afterConnectTo ?? 0)
    trackEventAnalytics('Viewer Abandon', {
      entry: args?.entry,
      connectionType: args?.connectionType,
      abandonTime,
    }, {
      forwardToDatadog: true,
      sendAsBeacon: true,
    })
    this.reportedAbandon = true
  }

  /**
   * Handles DOMContentLoaded event.
   * (Original: handleDOMContentLoaded)
   */
  public handleDOMContentLoaded = (): void => {
    this._domContentLoaded = this.now()
    this.mark('dom_content_loaded')
    analyticsEventManager.trackDefinedEvent('prototype.dom_content_loaded', {
      time: this._domContentLoaded,
    })
  }

  /**
   * Handles document loaded event.
   * (Original: handleDocumentIsLoaded)
   */
  public handleDocumentIsLoaded = (): void => {
    let fullscreenData: Record<string, number> = {}
    if (this._connectArgs?.fullscreen !== 'None') {
      fullscreenData = {
        ...this.fullscreenEvents,
        ...fullscreenPerfManager.getEventsToReport(false),
      }
    }
    const eventData = {
      domContentLoaded: this._domContentLoaded,
      preloadedTabStart: (window as any).preloadedTabStart,
      androidProtoPreloadedTabStart: (window as any).androidProtoPreloadedTabStart,
      androidProtoFsPreloaded: (window as any).androidProtoFsPreloaded,
      mobileFileViewerPreloadedTabStart: (window as any).mobileFileViewerPreloadedTabStart,
      mobileFileViewerPreloaded: (window as any).mobileFileViewerPreloaded,
      documentIsLoaded: this.now(),
      connectAttemptID: this._lastConnectToID,
      wasBackgroundedOnceWhileLoading: this._wasBackgroundedOnceWhileLoading,
      ...this._connectArgs,
      ...fullscreenData,
    }
    trackEventAnalytics('Viewer Document Is Loaded', eventData)
  }

  /**
   * Handles viewer loaded event.
   * (Original: handleViewerLoaded)
   */
  public handleViewerLoaded = (lastLoaded: string): void => {
    this.clearScheduledTimeouts()
    logDebug('Load Time Tracker', 'handleViewerLoaded', {
      lastConnectToMs: this._lastConnectToMs,
      lastConnectToID: this._lastConnectToID,
    })
    if (this._lastConnectToMs >= 0 && this._lastConnectToID != null) {
      this.handleTabSwitchOrLoadChange(document.visibilityState === 'visible', false)
      const baseEvent = {
        delaySecondsSinceConnect: (getNow() - this._lastConnectToMs) / 1e3,
        domContentLoaded: this._domContentLoaded,
        preloadedTabStart: (window as any).preloadedTabStart,
        androidProtoFsPreloaded: (window as any).androidProtoFsPreloaded,
        androidProtoPreloadedTabStart: (window as any).androidProtoPreloadedTabStart,
        mobileFileViewerPreloadedTabStart: (window as any).mobileFileViewerPreloadedTabStart,
        mobileFileViewerPreloaded: (window as any).mobileFileViewerPreloaded,
        connectAttemptID: this._lastConnectToID,
        timeNow: this.now(),
        visibleLoadTime: this._totalVisibleLoadTime,
        wasBackgroundedOnceWhileLoading: this._wasBackgroundedOnceWhileLoading,
        isStatsigBootstrapFlagOn: true,
        hasStatsigBootstrapValues: !!getInitialOptions().statsig_bootstrap_values,
        isUsingStatsigClientSDK: true,
        isUsingStatsigPrefetch: true,
      }
      if (this._connectArgs) {
        const loadTimeMs = baseEvent.timeNow - baseEvent.domContentLoaded
        const eventData = {
          ...baseEvent,
          entry: this._connectArgs.entry,
          connectionType: this._connectArgs.connectionType,
          isInEmbed: this._isInEmbed,
          loadTimeMs,
          lastLoaded,
        }
        this.mark('viewer_loaded')
        this.measure('viewer_loaded_measure', 'dom_content_loaded', 'viewer_loaded')
        analyticsEventManager.trackDefinedEvent('prototype.viewer_loaded', eventData)
      }
      this._lastConnectToMs = -1
      this.wasViewerLoadReported = true
    }
    else {
      logError('load', 'Unexpected Viewer Loaded event without Viewer Connect To report')
    }
  }

  /**
   * Handles font list loaded event.
   * (Original: handleFontListLoaded)
   */
  public handleFontListLoaded = (_e?: any): void => {
    const eventData = {
      ...this._connectArgs,
      domContentLoaded: this._domContentLoaded,
      connectAttemptID: this._lastConnectToID,
      timeNow: this.now(),
    }
    trackEventAnalytics('Viewer Font List Loaded', eventData)
  }

  /**
   * Computes load time since DOMContentLoaded.
   * (Original: computeLoadTimeSinceDomContentLoaded)
   */
  public computeLoadTimeSinceDomContentLoaded = (now: number = this.now()): number => {
    const win = window as any
    if (win.androidProtoFsPreloaded && win.androidProtoPreloadedTabStart && now >= win.androidProtoPreloadedTabStart) {
      return now - win.androidProtoPreloadedTabStart + win.androidProtoFsPreloaded - this._domContentLoaded
    }
    return now - this._domContentLoaded
  }

  /**
   * Handles after connect to event.
   * (Original: handleAfterConnectTo)
   */
  public handleAfterConnectTo = (args: ViewerConnectArgs): void => {
    this._lastConnectToMs = getNow()
    this._lastConnectToID = generateRandomId()
    logDebug('Load Time Tracker', 'handleAfterConnectTo', {
      lastConnectToMs: this._lastConnectToMs,
      lastConnectToID: this._lastConnectToID,
    })
    this._connectArgs = {
      ...args,
      afterConnectTo: this.now(),
    }
    const eventData = {
      domContentLoaded: this._domContentLoaded,
      preloadedTabStart: (window as any).preloadedTabStart,
      androidProtoFsPreloaded: (window as any).androidProtoFsPreloaded,
      androidProtoPreloadedTabStart: (window as any).androidProtoPreloadedTabStart,
      mobileFileViewerPreloadedTabStart: (window as any).mobileFileViewerPreloadedTabStart,
      mobileFileViewerPreloaded: (window as any).mobileFileViewerPreloaded,
      connectAttemptID: this._lastConnectToID,
      ...this._connectArgs,
    }
    if (
      !this._sentViewerConnectToMetric
      || getFeatureFlags().prototype_connectto_debug
    ) {
      analyticsEventManager.trackDefinedEvent('prototype.viewer_connect_to', {
        ...eventData,
        isInEmbed: this._isInEmbed,
      })
      this._sentViewerConnectToMetric = true
    }
    this.renderingEventsReported = false
    this.renderingEvents = []
    this.clearScheduledTimeouts()
    if (args.logViewerWaiting) {
      [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90].forEach((sec) => {
        const timeoutId = setTimeout(() => {
          const delay = (getNow() - this._lastConnectToMs) / 1e3
          trackEventAnalytics('Viewer Waiting', {
            waitedAtLeastSeconds: sec,
            delaySecondsSinceConnect: delay,
            connectAttemptID: this._lastConnectToID,
          })
        }, 1000 * sec)
        this._scheduledTimeouts.push(timeoutId as unknown as number)
      })
    }
    const sixtySecTimeout = setTimeout(() => {
      const delay = (getNow() - this._lastConnectToMs) / 1e3
      trackEventAnalytics('Viewer Waiting', {
        waitedAtLeastSeconds: 60,
        delaySecondsSinceConnect: delay,
        connectAttemptID: this._lastConnectToID,
        entry: this._connectArgs?.entry,
        connectionType: this._connectArgs?.connectionType,
        isInEmbed: this._isInEmbed,
      }, {
        forwardToDatadog: true,
      })
    }, 60000)
    this._scheduledTimeouts.push(sixtySecTimeout as unknown as number)
    window.addEventListener('pagehide', this.reportViewerAbandon)
    this.reportedAbandon = false
    document.addEventListener('visibilitychange', () => {
      const isVisible = document.visibilityState === 'visible'
      let shouldReport = false
      if (this._lastConnectToMs >= 0 && this._lastConnectToID != null) {
        shouldReport = !this.wasViewerLoadReported
      }
      this.handleTabSwitchOrLoadChange(isVisible, shouldReport)
    })
    this.handleTabSwitchOrLoadChange(document.visibilityState === 'visible', true)
  }

  /**
   * Handles tab switch or load change event.
   * (Original: handleTabSwitchOrLoadChange)
   */
  public handleTabSwitchOrLoadChange = (isVisible: boolean, isLoading: boolean): void => {
    if (isLoading) {
      this._wasBackgroundedOnceWhileLoading = this._wasBackgroundedOnceWhileLoading || !isVisible
    }
    const isVisiblyLoading = isVisible && isLoading
    if (!this._wasVisiblyLoading && isVisiblyLoading) {
      this._lastTabSwitchOrLoadChange = this.now()
    }
    else {
      if (!this._wasVisiblyLoading || isVisiblyLoading)
        return
      this._totalVisibleLoadTime += this.now() - this._lastTabSwitchOrLoadChange
    }
    this._lastTabSwitchOrLoadChange = this.now()
    this._wasVisiblyLoading = isVisiblyLoading
  }

  /**
   * Clears all scheduled timeouts.
   * (Original: clearScheduledTimeouts)
   */
  public clearScheduledTimeouts = (): void => {
    this._scheduledTimeouts.forEach(timeoutId => clearTimeout(timeoutId))
    this._scheduledTimeouts = []
  }

  /**
   * Returns current time in milliseconds.
   * (Original: now)
   */
  public now(): number {
    return Math.round(performance.now())
  }

  /**
   * Marks a performance event.
   * (Original: mark)
   */
  public mark(name: string): void {
    if (this.enableProfiling)
      performance.mark(name)
  }

  /**
   * Measures a performance event.
   * (Original: measure)
   */
  public measure(name: string, startMark: string, endMark: string): void {
    if (this.enableProfiling)
      performance.measure(name, startMark, endMark)
  }

  /**
   * Handles document render start.
   * (Original: handleDocumentRenderStart)
   */
  public handleDocumentRenderStart(): void {
    if (!this.renderingEventsReported && this.renderingEvents.length < this.renderingEventsMaxSize) {
      this.renderingEvents.push([this.now(), -1])
    }
  }

  /**
   * Handles document render stop.
   * (Original: handleDocumentRenderStop)
   */
  public handleDocumentRenderStop(): void {
    if (this.renderingEventsReported)
      return
    const lastIndex = this.renderingEvents.length - 1
    if (lastIndex >= 0 && this.renderingEvents[lastIndex][1] === -1) {
      this.renderingEvents[lastIndex][1] = this.now()
    }
    logDebug('Load Time Tracker', 'handleDocumentRenderStop', { lastIndex })
    window.removeEventListener('pagehide', this.reportViewerAbandon)
    if (this.renderingEvents.length >= this.renderingEventsMaxSize) {
      const frameData: Record<string, number> = {}
      let isValid = true
      let prevStop = 0
      let totalTime = 0
      this.renderingEvents.forEach((frame, idx) => {
        isValid = isValid && frame[0] >= prevStop && frame[1] >= frame[0]
        frameData[`frame.${idx}.start`] = frame[0]
        frameData[`frame.${idx}.stop`] = frame[1]
        totalTime += frame[1] - frame[0]
        prevStop = frame[1]
      })
      frameData.total = isValid ? totalTime : -1
      frameData.connectAttemptID = this._lastConnectToID
      frameData.totalUsedHeapMemory = CorePerfInfo?.getTotalUsedHeapMemory() ?? 0
      frameData.maxUsedHeapMemory = CorePerfInfo?.getMaxUsedHeapMemory() ?? 0
      if (!this.wasViewerLoadReported && this._connectArgs?.entry !== 'Prototype') {
        logError('load', 'Unexpected Viewer Rendering First Frames event without Viewer Loaded report')
      }
      const timeToFirstFrame = this.computeLoadTimeSinceDomContentLoaded()
      const eventData = {
        ...frameData,
        timeToFirstFrame,
        avgFirstTenFramesRenderingTimeMs: totalTime / this.renderingEvents.length,
        entry: this._connectArgs?.entry,
        connectionType: this._connectArgs?.connectionType,
        isInEmbed: this._isInEmbed,
      }
      trackEventAnalytics('Viewer Rendering First Frames', eventData, {
        forwardToDatadog: true,
      })
      this.renderingEventsReported = true
      this.renderingEvents = []
    }
  }

  /**
   * Forms native load time metadata event.
   * (Original: _formNativeLoadTimeMetadataFigmentEvent)
   */
  _formNativeLoadTimeMetadataFigmentEvent(e: any, timeOrigin: number): Record<string, any> {
    return {
      user_load_start_time: e.userLoadStartTime,
      user_load_start_relative: e.userLoadStartTime - timeOrigin,
      time_origin: timeOrigin,
      native_viewer_session_id: e.nativeViewerSessionId,
      native_semantic_viewer_session_id: e.nativeSemanticViewerSessionId,
      source: e.source,
    }
  }

  /**
   * Handles native load time metadata event.
   * (Original: handleNativeLoadTimeMetadata)
   */
  public handleNativeLoadTimeMetadata(e: any): void {
    const eventData = this._formNativeLoadTimeMetadataFigmentEvent(e, performance.timeOrigin)
    analyticsEventManager.trackDefinedEvent('native.load_time_metadata', eventData)
  }

  /**
   * Handles livegraph connection opened.
   * (Original: handleLivegraphConnectionOpened)
   */
  public handleLivegraphConnectionOpened(): void {
    if (this._livegraphStartTime === -1) {
      this._livegraphStartTime = this.now()
      this.mark('livegraph_subscription_started')
      this.measure('livegraph_subscription_started_measure', 'dom_content_loaded', 'livegraph_subscription_started')
    }
    analyticsEventManager.trackDefinedEvent('prototype.livegraph_subscription_started', {
      timeSinceDomContentLoaded: this.computeLoadTimeSinceDomContentLoaded(this._livegraphStartTime),
    })
  }

  /**
   * Handles livegraph connection responded.
   * (Original: handleLivegraphConnectionResponded)
   */
  public handleLivegraphConnectionResponded(): void {
    const now = this.now()
    if (this._liveGraphSubscriptionLoaded === -1) {
      this._liveGraphSubscriptionLoaded = now
      this.mark('livegraph_subscription_loaded')
      this.measure('livegraph_subscription_loaded_measure', 'dom_content_loaded', 'livegraph_subscription_loaded')
    }
    analyticsEventManager.trackDefinedMetric('prototype.livegraph_subscription_loaded', {
      timeSinceDomContentLoaded: this.computeLoadTimeSinceDomContentLoaded(now),
      responseTime: now - this._livegraphStartTime,
    })
  }

  /**
   * Handles multiplayer open connection.
   * (Original: handleMultiplayerOpenConnection)
   */
  public handleMultiplayerOpenConnection(): void {
    if (this._multiplayerStartTime === -1) {
      this._multiplayerStartTime = this.now()
      this.mark('multiplayer_connection_start')
      this.measure('multiplayer_connection_start_measure', 'dom_content_loaded', 'multiplayer_connection_start')
    }
    analyticsEventManager.trackDefinedEvent('prototype.multiplayer_connection_start', {
      timeSinceDomContentLoaded: this.computeLoadTimeSinceDomContentLoaded(this._multiplayerStartTime),
    })
  }

  /**
   * Handles multiplayer first response.
   * (Original: handleMultiplayerFirstResponse)
   */
  public handleMultiplayerFirstResponse(): void {
    if (this._multiplayerFirstResponse === -1) {
      this._multiplayerFirstResponse = this.now()
      this.mark('multiplayer_first_response')
      this.measure('multiplayer_first_response_measure', 'dom_content_loaded', 'multiplayer_first_response')
    }
    analyticsEventManager.trackDefinedMetric('prototype.multiplayer_first_response', {
      timeSinceDomContentLoaded: this.computeLoadTimeSinceDomContentLoaded(),
      responseTime: this.now() - this._multiplayerStartTime,
    })
  }

  /**
   * Handles multiplayer IFL satisfied.
   * (Original: handleMultiplayerIFLSatisfied)
   */
  public handleMultiplayerIFLSatisfied(): void {
    if (this._multiplayerFirstFinish === -1) {
      this._multiplayerFirstFinish = this.now()
      this.mark('multiplayer_first_finish')
      this.measure('multiplayer_first_finish_measure', 'dom_content_loaded', 'multiplayer_first_finish')
    }
    if (this._multiplayerSatisfiedTime === -1) {
      this._multiplayerSatisfiedTime = this.now()
    }
    analyticsEventManager.trackDefinedMetric('prototype.multiplayer_first_finish', {
      timeSinceDomContentLoaded: this.computeLoadTimeSinceDomContentLoaded(),
      responseTime: this.now() - this._multiplayerStartTime,
    })
  }

  /**
   * Handles IFL completed.
   * (Original: handleIFLCompleted)
   */
  public handleIFLCompleted(): void {
    if (this._iflCompleted === -1) {
      this._iflCompleted = this.now()
      this.mark('ifl_completed')
      this.measure('ifl_completed_measure', 'dom_content_loaded', 'ifl_completed')
    }
    analyticsEventManager.trackDefinedMetric('prototype.ifl_completed', {
      timeSinceDomContentLoaded: this.computeLoadTimeSinceDomContentLoaded(),
      responseTime: this.now() - this._multiplayerSatisfiedTime,
    })
  }

  /**
   * Sets whether inline preview modal was opened since viewer loaded.
   * (Original: setWasInlinePreviewModalOpenedSinceViewerLoaded)
   */
  public setWasInlinePreviewModalOpenedSinceViewerLoaded(opened: boolean): void {
    this.wasInlinePreviewModalOpenedSinceViewerLoaded = opened
  }
}

/** Singleton instance of LoadTimeTracker (Original: $$p1) */
export const loadTimeTrackerInstance = new LoadTimeTracker()

/** Exported class reference (Original: Se) */
export const Se = LoadTimeTracker

/** Exported singleton reference (Original: Su) */
export const Su = loadTimeTrackerInstance
