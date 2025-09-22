import { addDeviceInfoToTarget, getGpuDeviceInfo } from '../905/190247'
import { SlowFrameTracker } from '../905/200059'
import { trackEventAnalytics } from '../905/449184'
import { reactTimerGroup } from '../905/542194'
import { FPSDistribution } from '../905/609396'
import { fullscreenCrashHandler } from '../905/913008'
import { multiplayerSessionManager } from '../905/977824'
import { Fullscreen, StickyWidgetType } from '../figma_app/763686'

// Original: $$u1
/**
 * Maps StickyWidgetType to corresponding analytics event names.
 * @param type - The StickyWidgetType enum value.
 * @returns The string representation of the event name.
 */
export function getStickyWidgetEventName(type: StickyWidgetType): string {
  switch (type) {
    case StickyWidgetType.SWT_CREATED:
      return 'shapeWithTextCreated';
    case StickyWidgetType.SWT_EDITED:
      return 'shapeWithTextEdited';
    case StickyWidgetType.SWT_DELETED:
      return 'shapeWithTextDeleted';
    case StickyWidgetType.SWT_RESIZED:
      return 'shapeWithTextResized';
    case StickyWidgetType.STICKY_EDITED:
      return 'stickyEdited';
    case StickyWidgetType.STICKY_DELETED:
      return 'stickyDeleted';
    case StickyWidgetType.STICKY_RESIZED:
      return 'stickyResized';
    default:
      throw new Error(`Unknown StickyWidgetType: ${type}`);
  }
}

// Original: $$p0
/**
 * Class responsible for tracking performance metrics, including frame rates, events, and analytics logging.
 */
export class PerformanceTracker {
  private _analyticsEventName: string;
  private _processTimersForLogging: (timers: any[]) => any[];
  private _timerDepth: number;
  private _forwardToDatadog: boolean;
  private _tsmerMetrics: any;
  private _customLogMetricsCallbackHistogram: (metrics: any) => void;
  private _isRecording: boolean;
  private _isCanceled: boolean;
  private _onFrameStartCallback: () => void;
  private _isFirstLogForTab: boolean;
  private _imagesLoadingState: 'loading' | 'loaded' | null;
  private _ongoingSpotlight: boolean;
  private _multiplayerUserCount: number;
  private _numberOfRenderedCommentsWatermark: number;
  private _lastRecordedNumberOfRenderedComments: number;
  private _distributionByWorkName: Map<string, FPSDistribution>;
  private _lastKnownFrameMs: number | null;
  private _lastKnownMetricsFrameMs: number | null;
  private _lastKnownFrameIndex: number | null;
  private _lastLogTime: number | null;
  private _scheduledLogAtMs: number | null;
  private _lastRecordedHitCountByName: Record<string, number>;
  private _lastRecordedDurationSinceLastFrame: Record<string, number>;
  private _fileKey: string | null;
  private _productType: string;
  private _gpuDeviceInfo: any;
  private _activeNamedEvents: Set<string>;
  private _singleFrameNamedEvents: Set<string>;
  private _eventTrackers: Map<string, any>;
  private _contextRestoredCount: number;
  private _maxRenderLayerCount: number;
  private _maxRenderedTileBytesUsed: number;
  private _numAnimationsFromCpp: number;
  private _numAnimationsFromTs: number;
  private _tileRenderersUsed: Set<string>;
  private _currentTileRenderer: string;
  private _slowFrameTracker: SlowFrameTracker;

  constructor(
    analyticsEventName: string,
    processTimersForLogging: (timers: any[]) => any[],
    timerDepth: number = 1,
    forwardToDatadog: boolean = false,
    tsmerMetrics: any = null,
    customLogMetricsCallbackHistogram: (metrics: any) => void = () => {},
    enableSlowFrameTracking: boolean = false,
    onSlowFrameDetected: Fn,
    onFrameSampled: Fn
  ) {
    this._analyticsEventName = analyticsEventName;
    this._processTimersForLogging = processTimersForLogging;
    this._timerDepth = timerDepth;
    this._forwardToDatadog = forwardToDatadog;
    this._tsmerMetrics = tsmerMetrics;
    this._customLogMetricsCallbackHistogram = customLogMetricsCallbackHistogram;
    this._isRecording = false;
    this._isCanceled = false;
    this._onFrameStartCallback = () => {};
    this._isFirstLogForTab = true;
    this._imagesLoadingState = null;
    this._ongoingSpotlight = false;
    this._multiplayerUserCount = 1;
    this._numberOfRenderedCommentsWatermark = 0;
    this._lastRecordedNumberOfRenderedComments = 0;
    this._distributionByWorkName = new Map();
    this._lastKnownFrameMs = null;
    this._lastKnownMetricsFrameMs = null;
    this._lastKnownFrameIndex = null;
    this._lastLogTime = null;
    this._scheduledLogAtMs = null;
    this._lastRecordedHitCountByName = {};
    this._lastRecordedDurationSinceLastFrame = {};
    this._fileKey = null;
    this._productType = 'unknown';
    this._gpuDeviceInfo = getGpuDeviceInfo();
    this._activeNamedEvents = new Set();
    this._singleFrameNamedEvents = new Set();
    this._eventTrackers = new Map();
    this._contextRestoredCount = 0;
    this._maxRenderLayerCount = 0;
    this._maxRenderedTileBytesUsed = 0;
    this._numAnimationsFromCpp = 0;
    this._numAnimationsFromTs = 0;
    this._tileRenderersUsed = new Set();
    this._currentTileRenderer = '';
    this._slowFrameTracker = new SlowFrameTracker(enableSlowFrameTracking, onSlowFrameDetected, onFrameSampled);

    // Event listeners
    document.addEventListener('mousemove', this.scheduleLogTwoMinutesFromNow.bind(this), true);
    document.addEventListener('keydown', this.scheduleLogTwoMinutesFromNow.bind(this), true);
    document.addEventListener('touchdown', this.scheduleLogTwoMinutesFromNow.bind(this), true);
    document.addEventListener('touchstart', this.scheduleLogTwoMinutesFromNow.bind(this), true);
    document.addEventListener('touchmove', this.scheduleLogTwoMinutesFromNow.bind(this), true);
    document.addEventListener('visibilitychange', this._onDocumentVisibilityChange.bind(this));
  }

  // Original: scheduleLogTwoMinutesFromNow
  /**
   * Schedules a log event to occur two minutes from now if not already scheduled.
   */
  private scheduleLogTwoMinutesFromNow(): void {
    if (this._scheduledLogAtMs === null) {
      this._scheduledLogAtMs = performance.now() + 120000; // 2 minutes
    }
  }

  // Original: _onDocumentVisibilityChange
  /**
   * Handles document visibility changes, logging if necessary.
   */
  private _onDocumentVisibilityChange(): void {
    this.handleDocumentVisibilityChange(document.visibilityState);
  }

  // Original: updateLastKnownFrameMs
  /**
   * Updates the last known frame timestamp.
   * @param ms - The timestamp in milliseconds.
   */
  updateLastKnownFrameMs(ms: number): void {
    this._lastKnownFrameMs = ms;
  }

  // Original: startRecording
  /**
   * Starts recording performance metrics.
   * @param scheduleLog - Whether to schedule a log event.
   */
  startRecording(scheduleLog: boolean = false): void {
    this._isRecording = true;
    this._resetLogState();
    this._lastKnownFrameMs = performance.now();
    if (this._lastLogTime === null) {
      this._lastLogTime = this._lastKnownFrameMs;
    }
    if (scheduleLog) {
      this.scheduleLogTwoMinutesFromNow();
    }
  }

  // Original: stopRecordingAndLog
  /**
   * Stops recording and logs the collected metrics.
   * @param reason - The reason for stopping.
   * @returns The distribution data.
   */
  stopRecordingAndLog(reason: string): Record<string, any> {
    const distributions: Record<string, any> = {};
    this._distributionByWorkName.forEach((dist, name) => {
      distributions[name] = dist.toPOJO();
    });
    if (this._shouldLogToAnalytics()) {
      this._logToAnalytics(reason);
      this._resetLogState();
    }
    this._isRecording = false;
    return distributions;
  }

  // Original: setFileInfo
  /**
   * Sets the file key and product type, resetting log state if changed.
   * @param fileKey - The file key.
   * @param productType - The product type.
   */
  setFileInfo(fileKey: string | null, productType: string): void {
    if (fileKey !== this._fileKey || productType !== this._productType) {
      this._fileKey = fileKey;
      this._productType = productType;
      this._resetLogState();
    }
  }

  // Original: _startRecordingNamedEvent
  /**
   * Starts recording a named event.
   * @param eventName - The name of the event.
   */
  private _startRecordingNamedEvent(eventName: string): void {
    this._activeNamedEvents.add(eventName);
  }

  // Original: recordSingleFrameNamedEvent
  /**
   * Records a single-frame named event.
   * @param eventName - The name of the event.
   */
  recordSingleFrameNamedEvent(eventName: string): void {
    this._singleFrameNamedEvents.add(eventName);
  }

  // Original: _stopRecordingNamedEvent
  /**
   * Stops recording a named event.
   * @param eventName - The name of the event.
   */
  private _stopRecordingNamedEvent(eventName: string): void {
    this._activeNamedEvents.delete(eventName);
  }

  // Event handlers
  handleZoomStart(): void {
    this._startRecordingNamedEvent('zoomActive');
  }

  handleZoomStop(): void {
    this._stopRecordingNamedEvent('zoomActive');
  }

  handleScrollEvent(): void {
    this.recordSingleFrameNamedEvent('scrollActive');
  }

  onNodeDragStart(): void {
    this._startRecordingNamedEvent('nodeDragActive');
  }

  onNodeDragEnd(): void {
    this._stopRecordingNamedEvent('nodeDragActive');
  }

  onTileRendererChanged(renderer: string): void {
    this._tileRenderersUsed.add(renderer);
    this._currentTileRenderer = renderer;
  }

  onContextRestored(): void {
    this._contextRestoredCount++;
  }

  updateMaxRenderLayerCount(count: number): void {
    this._maxRenderLayerCount = Math.max(this._maxRenderLayerCount, count);
  }

  updateMaxRenderedTileBytesUsed(bytes: number): void {
    this._maxRenderedTileBytesUsed = Math.max(this._maxRenderedTileBytesUsed, bytes);
  }

  incrementNumAnimationsFromCpp(): void {
    this._numAnimationsFromCpp++;
  }

  incrementNumAnimationsFromTs(): void {
    this._numAnimationsFromTs++;
  }

  handleDocumentVisibilityChange(state: DocumentVisibilityState): void {
    if (state === 'hidden' && this._shouldLogToAnalytics()) {
      this._logToAnalytics('tab-hidden');
      this._resetLogState();
    }
    if (state !== 'hidden') {
      this._resetLogState();
    }
  }

  // Original: _logToAnalytics
  /**
   * Logs metrics to analytics.
   * @param reason - The reason for logging.
   * @param async - Whether to log asynchronously.
   */
  private _logToAnalytics(reason: string, async: boolean = false): void {
    const metrics: Record<string, any> = {};
    metrics.schema = new FPSDistribution().schema();
    metrics.reason = reason;
    metrics.isFirstLogAfterLoad = this._isFirstLogForTab;
    metrics.imagesLoading = this._imagesLoadingState === 'loading';
    metrics.multiplayerUserCount = this._multiplayerUserCount;
    metrics.ongoingSpotlight = this._ongoingSpotlight;
    metrics.fileKey = this._fileKey;
    metrics.productType = this._productType;
    metrics.refreshRate = this.refreshRate();
    metrics.commentsRenderCount = this._numberOfRenderedCommentsWatermark;
    metrics.contextRestoredCount = this._contextRestoredCount;
    metrics.maxRenderLayerCount = this._maxRenderLayerCount;
    metrics.maxRenderedTileBytesUsed = this._maxRenderedTileBytesUsed;
    addDeviceInfoToTarget(this._gpuDeviceInfo, metrics);
    metrics.numAnimationsFromCpp = this._numAnimationsFromCpp;
    metrics.numAnimationsFromTs = this._numAnimationsFromTs;
    this._isFirstLogForTab = false;
    if (this._tsmerMetrics !== null) {
      metrics.editFrames = this._tsmerMetrics.editFrameDistribution().toLogParams();
      metrics.editFramesWhileNotPanningOrZooming = this._tsmerMetrics.editFrameDistributionWhileNotPanningOrZooming().toLogParams();
      metrics.remoteFrames = this._tsmerMetrics.remoteFrameDistribution().toLogParams();
      metrics.remoteFramesWhileNotPanningOrZooming = this._tsmerMetrics.remoteFrameDistributionWhileNotPanningOrZooming().toLogParams();
    }
    this._customLogMetricsCallbackHistogram(metrics);
    metrics.tileRenderersUsed = JSON.stringify(Array.from(this._tileRenderersUsed));
    this._tileRenderersUsed.clear();
    this._tileRenderersUsed.add(this._currentTileRenderer);
    this._distributionByWorkName.forEach((dist, name) => {
      if (name in metrics) {
        throw new Error(`attempt to track performance for a work item with a reserved name: ${name}`);
      }
      metrics[name] = dist.toLogParams();
    });
    metrics.totalBatchTime = performance.now() - this._lastLogTime!;
    this._lastLogTime = performance.now();
    if (async) {
      setTimeout(() => {
        this._sendLogRequest(metrics);
      }, 0);
    } else {
      this._sendLogRequest(metrics);
    }
  }

  // Original: _sendLogRequest
  /**
   * Sends the log request to analytics.
   * @param metrics - The metrics to send.
   */
  private _sendLogRequest(metrics: Record<string, any>): void {
    const options = {
      forwardToDatadog: this._forwardToDatadog,
      batchRequest: true,
    };
    trackEventAnalytics(this._analyticsEventName, metrics, options);
  }

  // Original: _processTimerTree
  /**
   * Processes the timer tree for logging.
   * @param timers - The timers array.
   * @param depth - Current depth.
   * @param path - Current path.
   * @returns Processed timer data.
   */
  private _processTimerTree(timers: any[], depth: number, path: string[]): any[] {
    if (depth >= this._timerDepth) {
      return [];
    }
    const results: any[] = [];
    for (const timer of timers) {
      const currentPath = [...path, timer.name];
      const pathStr = currentPath.join('.');
      if (!(pathStr in this._lastRecordedHitCountByName) || !(pathStr in this._lastRecordedDurationSinceLastFrame)) {
        this._lastRecordedHitCountByName[pathStr] = timer.hitCount;
        this._lastRecordedDurationSinceLastFrame[pathStr] = timer.totalElapsedTime;
        continue;
      }
      const hitCountDiff = timer.hitCount - this._lastRecordedHitCountByName[pathStr];
      if (hitCountDiff === 0) {
        continue;
      }
      if (hitCountDiff > timer.elapsedTimes.length) {
        console.warn(`Logged performance for ${pathStr} too many times in one animation frame`);
      }
      const durationDiff = timer.totalElapsedTime - this._lastRecordedDurationSinceLastFrame[pathStr];
      this._lastRecordedHitCountByName[pathStr] = timer.hitCount;
      this._lastRecordedDurationSinceLastFrame[pathStr] = timer.totalElapsedTime;
      results.push({
        path: currentPath,
        elapsedTime: durationDiff,
      });
      if (depth + 1 < this._timerDepth && timer.children.length > 0) {
        results.push(...this._processTimerTree(timer.children, depth + 1, currentPath));
      }
    }
    return results;
  }

  onFrameStart(): void {
    if (this._isRecording && !this._isCanceled && fullscreenCrashHandler.getFullscreenCrashState() === 'ok') {
      this._onFrameStartCallback();
    }
  }

  setOnFrameStartCallback(callback: () => void): void {
    this._onFrameStartCallback = callback;
  }

  checkNotVisibleOrRecording(): boolean {
    return document.visibilityState !== 'visible' || !this._isRecording;
  }

  onMetricsEventLoopFrame(): void {
    if (this.checkNotVisibleOrRecording()) {
      this._lastKnownMetricsFrameMs = null;
      return;
    }
    const now = performance.now();
    if (this._lastKnownMetricsFrameMs != null) {
      const delta = now - this._lastKnownMetricsFrameMs;
      if (delta < 60000) { // 60 seconds
        this._getOrCreateDistribution('metrics_loop').add(delta);
      }
    }
    this._lastKnownMetricsFrameMs = now;
  }

  onFrame(): 'canceled' | 'not-recording' | 'success' {
    if (fullscreenCrashHandler.getFullscreenCrashState() !== 'ok') {
      return 'canceled';
    }
    try {
      if (this._isCanceled) {
        return 'canceled';
      }
      if (this.checkNotVisibleOrRecording()) {
        return 'not-recording';
      }
      const now = performance.now();
      if (this._lastKnownFrameMs != null) {
        const delta = now - this._lastKnownFrameMs;
        if (delta < 60000) {
          this._getOrCreateDistribution('all').add(delta);
          for (const event of this._activeNamedEvents) {
            this._getOrCreateDistribution(event).add(delta);
          }
          const eventStart = performance.now();
          const occurredEvents: string[] = [];
          for (const [name, tracker] of this._eventTrackers) {
            if (tracker.didEventOccur()) {
              occurredEvents.push(name);
              this._getOrCreateDistribution(name).add(delta);
            }
          }
          const eventProcessingTime = performance.now() - eventStart;
          Fullscreen?.updatePerfMode(occurredEvents);
          for (const event of this._singleFrameNamedEvents) {
            this._getOrCreateDistribution(event).add(delta);
          }
          if (this._scheduledLogAtMs !== null) {
            this._slowFrameTracker?.checkSlowFrameAndSample(delta, occurredEvents, eventProcessingTime, this._fileKey, this._productType);
          }
          this._singleFrameNamedEvents.clear();
        }
      }
      this._lastKnownFrameMs = now;
      if (reactTimerGroup.areTimersOpen()) {
        this._isCanceled = true;
        return 'canceled';
      }
      const processedTimers = this._processTimerTree(reactTimerGroup.report(), 0, []);
      for (const timer of this._processTimersForLogging(processedTimers)) {
        this._getOrCreateDistribution(timer.path.join('.')).add(timer.elapsedTime);
      }
      this._tsmerMetrics?.onFrame();
      if (this._scheduledLogAtMs !== null && performance.now() > this._scheduledLogAtMs) {
        this._logToAnalytics('two-minutes-elapsed', true);
        this._resetLogState();
      }
      return 'success';
    } finally {
      this._slowFrameTracker?.clearPerFrameMetricsAndIncrementFrameCounter();
    }
  }

  testOnlyGetAllDistribution(): FPSDistribution {
    return this._getOrCreateDistribution('all');
  }

  pendingImagesChanged(count: number): void {
    if (this._imagesLoadingState === 'loaded') {
      return;
    }
    const newState: 'loading' | 'loaded' = count > 0 ? 'loading' : 'loaded';
    if (newState !== this._imagesLoadingState) {
      if (this._imagesLoadingState === 'loading') {
        this._logToAnalytics('images-loaded');
        this._resetLogState();
      }
      this._imagesLoadingState = newState;
    }
  }

  uninstall(): void {
    document.removeEventListener('mousemove', this.scheduleLogTwoMinutesFromNow.bind(this), true);
    document.removeEventListener('keydown', this.scheduleLogTwoMinutesFromNow.bind(this), true);
    document.removeEventListener('touchdown', this.scheduleLogTwoMinutesFromNow.bind(this), true);
    document.removeEventListener('touchstart', this.scheduleLogTwoMinutesFromNow.bind(this), true);
    document.removeEventListener('touchmove', this.scheduleLogTwoMinutesFromNow.bind(this), true);
    document.removeEventListener('visibilitychange', this._onDocumentVisibilityChange.bind(this));
  }

  hasScheduledLog(): boolean {
    return this._scheduledLogAtMs != null;
  }

  private _shouldLogToAnalytics(): boolean {
    return this._isRecording && this._scheduledLogAtMs != null;
  }

  productTypeForTests(): string {
    return this._productType;
  }

  private _resetLogState(): void {
    this._lastKnownFrameMs = null;
    this._imagesLoadingState = null;
    this._ongoingSpotlight = false;
    this._multiplayerUserCount = 1;
    this._distributionByWorkName = new Map();
    this._scheduledLogAtMs = null;
    this._lastRecordedHitCountByName = {};
    this._lastRecordedDurationSinceLastFrame = {};
    this._activeNamedEvents.clear();
    this._singleFrameNamedEvents.clear();
    this._numberOfRenderedCommentsWatermark = this._lastRecordedNumberOfRenderedComments;
    this._contextRestoredCount = 0;
    this._maxRenderLayerCount = 0;
    this._maxRenderedTileBytesUsed = 0;
    this._numAnimationsFromCpp = 0;
    this._numAnimationsFromTs = 0;
    this._tsmerMetrics?.resetLogState();
  }

  getSlowFrameTracker(): SlowFrameTracker {
    return this._slowFrameTracker;
  }

  refreshRate(): string {
    const dist = this._distributionByWorkName.get('all');
    if (dist) {
      const mode = dist.getMode();
      if (mode) {
        if (mode.min < 9) return '120FPS';
        if (mode.min < 32) return '60FPS';
        if (mode.min < 48) return '30FPS';
      }
    }
    return 'UNKNOWN';
  }

  estimatedRefreshRate(): { frameLength: number; fps: number } {
    const dist = this._distributionByWorkName.get('all');
    if (dist) {
      const mode = dist.getMode();
      if (mode) {
        if (mode.min < 9) {
          return { frameLength: 1000 / 120, fps: 120 };
        }
        if (mode.min < 32) {
          return { frameLength: 1000 / 60, fps: 60 };
        }
      }
    }
    return { frameLength: 1000 / 30, fps: 30 };
  }

  tsmerMetrics(): any {
    return this._tsmerMetrics;
  }

  private _getOrCreateDistribution(name: string): FPSDistribution {
    let dist = this._distributionByWorkName.get(name);
    if (!dist) {
      dist = new FPSDistribution();
      this._distributionByWorkName.set(name, dist);
    }
    return dist;
  }

  addEventTracker(name: string, tracker: any): void {
    this._eventTrackers.set(name, tracker);
  }

  addTimeEvent(name: string, time: number): void {
    this._getOrCreateDistribution(name).add(time);
  }

  setNumberOfRenderedComments(count: number): void {
    this._lastRecordedNumberOfRenderedComments = count;
    this._numberOfRenderedCommentsWatermark = Math.max(count, this._numberOfRenderedCommentsWatermark);
  }

  setMultiplayerPerfInfo(info: { multiplayerUserCount: number; ongoingSpotlight: boolean }): void {
    this._ongoingSpotlight = info.ongoingSpotlight;
    this._multiplayerUserCount = info.multiplayerUserCount;
  }

  trackOtherUserCursorMoved(): void {
    multiplayerSessionManager?.setOtherUserMouseMovedCallback(() => {
      this.recordSingleFrameNamedEvent('otherUserCursorMoved');
    });
  }
}

export const AH = PerformanceTracker;
export const jY = getStickyWidgetEventName;
