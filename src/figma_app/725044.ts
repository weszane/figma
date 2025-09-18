import { StickyWidgetType, Fullscreen } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { reactTimerGroup } from "../905/542194";
import { FPSDistribution } from "../905/609396";
import { y } from "../905/913008";
import { R9 } from "../905/977824";
import { getGpuDeviceInfo, addDeviceInfoToTarget } from "../905/190247";
import { N } from "../905/200059";
export function $$u1(e) {
  switch (e) {
    case StickyWidgetType.SWT_CREATED:
      return "shapeWithTextCreated";
    case StickyWidgetType.SWT_EDITED:
      return "shapeWithTextEdited";
    case StickyWidgetType.SWT_DELETED:
      return "shapeWithTextDeleted";
    case StickyWidgetType.SWT_RESIZED:
      return "shapeWithTextResized";
    case StickyWidgetType.STICKY_EDITED:
      return "stickyEdited";
    case StickyWidgetType.STICKY_DELETED:
      return "stickyDeleted";
    case StickyWidgetType.STICKY_RESIZED:
      return "stickyResized";
  }
}
export class $$p0 {
  constructor(e, t, r = 1, l = !1, u = null, p = () => {}, _ = !1, h = () => {}, m = () => {}) {
    this._analyticsEventName = e;
    this._processTimersForLogging = t;
    this._timerDepth = r;
    this._forwardToDatadog = l;
    this._tsmerMetrics = u;
    this._customLogMetricsCallbackHistogram = p;
    this._isRecording = !1;
    this._isCanceled = !1;
    this._onFrameStartCallback = () => {};
    this._isFirstLogForTab = !0;
    this._imagesLoadingState = null;
    this._ongoingSpotlight = !1;
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
    this._productType = "unknown";
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
    this._currentTileRenderer = "";
    this.scheduleLogTwoMinutesFromNow = () => {
      null === this._scheduledLogAtMs && (this._scheduledLogAtMs = performance.now() + 12e4);
    };
    this._onDocumentVisibilityChange = () => {
      this.handleDocumentVisibilityChange(document.visibilityState);
    };
    this.updateLastKnownFrameMs = e => {
      this._lastKnownFrameMs = e;
    };
    this.startRecording = e => {
      this._isRecording = !0;
      this._resetLogState();
      this._lastKnownFrameMs = performance.now();
      null === this._lastLogTime && (this._lastLogTime = this._lastKnownFrameMs);
      e && this.scheduleLogTwoMinutesFromNow();
    };
    this.stopRecordingAndLog = e => {
      let t = {};
      this._distributionByWorkName.forEach((e, r) => {
        t[r] = e.toPOJO();
      });
      this._shouldLogToAnalytics() && (this._logToAnalytics(e), this._resetLogState());
      this._isRecording = !1;
      return t;
    };
    this.setFileInfo = (e, t) => {
      (e !== this._fileKey || t !== this._productType) && (this._fileKey = e, this._productType = t, this._resetLogState());
    };
    this._startRecordingNamedEvent = e => {
      this._activeNamedEvents.add(e);
    };
    this.recordSingleFrameNamedEvent = e => {
      this._singleFrameNamedEvents.add(e);
    };
    this._stopRecordingNamedEvent = e => {
      this._activeNamedEvents.$$delete(e);
    };
    this.handleZoomStart = () => {
      this._startRecordingNamedEvent("zoomActive");
    };
    this.handleZoomStop = () => {
      this._stopRecordingNamedEvent("zoomActive");
    };
    this.handleScrollEvent = () => {
      this.recordSingleFrameNamedEvent("scrollActive");
    };
    this.onNodeDragStart = () => {
      this._startRecordingNamedEvent("nodeDragActive");
    };
    this.onNodeDragEnd = () => {
      this._stopRecordingNamedEvent("nodeDragActive");
    };
    this.onTileRendererChanged = e => {
      this._tileRenderersUsed.add(e);
      this._currentTileRenderer = e;
    };
    this.onContextRestored = () => {
      this._contextRestoredCount++;
    };
    this.updateMaxRenderLayerCount = e => {
      this._maxRenderLayerCount = Math.max(this._maxRenderLayerCount, e);
    };
    this.updateMaxRenderedTileBytesUsed = e => {
      this._maxRenderedTileBytesUsed = Math.max(this._maxRenderedTileBytesUsed, e);
    };
    this.incrementNumAnimationsFromCpp = () => {
      this._numAnimationsFromCpp++;
    };
    this.incrementNumAnimationsFromTs = () => {
      this._numAnimationsFromTs++;
    };
    this.handleDocumentVisibilityChange = e => {
      "hidden" === e && this._shouldLogToAnalytics() && (this._logToAnalytics("tab-hidden"), this._resetLogState());
      "hidden" !== e && this._resetLogState();
    };
    this._logToAnalytics = (e, t = !1) => {
      let r = {};
      r.schema = new FPSDistribution().schema();
      r.reason = e;
      r.isFirstLogAfterLoad = this._isFirstLogForTab;
      r.imagesLoading = "loading" === this._imagesLoadingState;
      r.multiplayerUserCount = this._multiplayerUserCount;
      r.ongoingSpotlight = this._ongoingSpotlight;
      r.fileKey = this._fileKey;
      r.productType = this._productType;
      r.refreshRate = this.refreshRate();
      r.commentsRenderCount = this._numberOfRenderedCommentsWatermark;
      r.contextRestoredCount = this._contextRestoredCount;
      r.maxRenderLayerCount = this._maxRenderLayerCount;
      r.maxRenderedTileBytesUsed = this._maxRenderedTileBytesUsed;
      addDeviceInfoToTarget(this._gpuDeviceInfo, r);
      r.numAnimationsFromCpp = this._numAnimationsFromCpp;
      r.numAnimationsFromTs = this._numAnimationsFromTs;
      this._isFirstLogForTab = !1;
      null !== this._tsmerMetrics && (r.editFrames = this._tsmerMetrics.editFrameDistribution().toLogParams(), r.editFramesWhileNotPanningOrZooming = this._tsmerMetrics.editFrameDistributionWhileNotPanningOrZooming().toLogParams(), r.remoteFrames = this._tsmerMetrics.remoteFrameDistribution().toLogParams(), r.remoteFramesWhileNotPanningOrZooming = this._tsmerMetrics.remoteFrameDistributionWhileNotPanningOrZooming().toLogParams());
      this._customLogMetricsCallbackHistogram(r);
      r.tileRenderersUsed = JSON.stringify(Array.from(this._tileRenderersUsed));
      this._tileRenderersUsed.clear();
      this._tileRenderersUsed.add(this._currentTileRenderer);
      this._distributionByWorkName.forEach((e, t) => {
        if (t in r) throw Error(`attempt to track performance for a work item with a reserved name: ${t}`);
        r[t] = e.toLogParams();
      });
      r.totalBatchTime = performance.now() - this._lastLogTime;
      this._lastLogTime = performance.now();
      t ? setTimeout(() => {
        this._sendLogRequest(r);
      }, 0) : this._sendLogRequest(r);
    };
    this._sendLogRequest = e => {
      let t = {
        forwardToDatadog: this._forwardToDatadog,
        batchRequest: !0
      };
      trackEventAnalytics(this._analyticsEventName, e, t);
    };
    this._processTimerTree = (e, t, r) => {
      if (t >= this._timerDepth) return [];
      let n = [];
      for (let i of e) {
        let e = [...r, i.name];
        let a = e.join(".");
        if (!(a in this._lastRecordedHitCountByName) || !(a in this._lastRecordedDurationSinceLastFrame)) {
          this._lastRecordedHitCountByName[a] = i.hitCount;
          this._lastRecordedDurationSinceLastFrame[a] = i.totalElapsedTime;
          continue;
        }
        let s = i.hitCount - this._lastRecordedHitCountByName[a];
        if (0 === s) continue;
        s > i.elapsedTimes.length && console.warn(`Logged performance for ${a} too many times in one animation frame`);
        let o = i.totalElapsedTime - this._lastRecordedDurationSinceLastFrame[a];
        this._lastRecordedHitCountByName[a] = i.hitCount;
        this._lastRecordedDurationSinceLastFrame[a] = i.totalElapsedTime;
        n.push({
          path: e,
          elapsedTime: o
        });
        let l = t + 1;
        l < this._timerDepth && i.children.length > 0 && (n = n.concat(this._processTimerTree(i.children, l, e)));
      }
      return n;
    };
    this.onFrameStart = () => {
      this._isRecording && !this._isCanceled && "ok" === y.getFullscreenCrashState() && this._onFrameStartCallback();
    };
    this.setOnFrameStartCallback = e => {
      this._onFrameStartCallback = e;
    };
    this.checkNotVisibleOrRecording = () => "visible" !== document.visibilityState || !this._isRecording;
    this.onMetricsEventLoopFrame = () => {
      if (this.checkNotVisibleOrRecording()) {
        this._lastKnownMetricsFrameMs = null;
        return;
      }
      let e = performance.now();
      if (null != this._lastKnownMetricsFrameMs) {
        let t = e - this._lastKnownMetricsFrameMs;
        t < 6e4 && this._getOrCreateDistribution("metrics_loop").add(t);
      }
      this._lastKnownMetricsFrameMs = e;
    };
    this.onFrame = () => {
      if ("ok" !== y.getFullscreenCrashState()) return "canceled";
      try {
        if (this._isCanceled) return "canceled";
        if (this.checkNotVisibleOrRecording()) return "not-recording";
        let e = performance.now();
        if (null != this._lastKnownFrameMs) {
          let t = e - this._lastKnownFrameMs;
          if (t < 6e4) {
            for (let e of (this._getOrCreateDistribution("all").add(t), this._activeNamedEvents)) this._getOrCreateDistribution(e).add(t);
            let e = performance.now();
            let r = [];
            for (let [e, n] of this._eventTrackers) n.didEventOccur() && (r.push(e), this._getOrCreateDistribution(e).add(t));
            let i = performance.now() - e;
            for (let e of (Fullscreen?.updatePerfMode(r), this._singleFrameNamedEvents)) this._getOrCreateDistribution(e).add(t);
            null !== this._scheduledLogAtMs && this._slowFrameTracker?.checkSlowFrameAndSample(t, r, i, this._fileKey, this._productType);
            this._singleFrameNamedEvents.clear();
          }
        }
        if (this._lastKnownFrameMs = e, reactTimerGroup.areTimersOpen()) {
          this._isCanceled = !0;
          return "canceled";
        }
        let t = this._processTimerTree(reactTimerGroup.report(), 0, []);
        for (let e of this._processTimersForLogging(t)) this._getOrCreateDistribution(e.path.join(".")).add(e.elapsedTime);
        this._tsmerMetrics?.onFrame();
        null !== this._scheduledLogAtMs && performance.now() > this._scheduledLogAtMs && (this._logToAnalytics("two-minutes-elapsed", !0), this._resetLogState());
        return "success";
      } finally {
        this._slowFrameTracker?.clearPerFrameMetricsAndIncrementFrameCounter();
      }
    };
    this.testOnlyGetAllDistribution = () => this._getOrCreateDistribution("all");
    this.pendingImagesChanged = e => {
      if ("loaded" === this._imagesLoadingState) return;
      let t = e > 0 ? "loading" : "loaded";
      t !== this._imagesLoadingState && ("loading" === this._imagesLoadingState && (this._logToAnalytics("images-loaded"), this._resetLogState()), this._imagesLoadingState = t);
    };
    this._slowFrameTracker = new N(_, h, m);
    document.addEventListener("mousemove", this.scheduleLogTwoMinutesFromNow, !0);
    document.addEventListener("keydown", this.scheduleLogTwoMinutesFromNow, !0);
    document.addEventListener("touchdown", this.scheduleLogTwoMinutesFromNow, !0);
    document.addEventListener("touchstart", this.scheduleLogTwoMinutesFromNow, !0);
    document.addEventListener("touchmove", this.scheduleLogTwoMinutesFromNow, !0);
    document.addEventListener("visibilitychange", this._onDocumentVisibilityChange);
  }
  uninstall() {
    document.removeEventListener("mousemove", this.scheduleLogTwoMinutesFromNow, !0);
    document.removeEventListener("keydown", this.scheduleLogTwoMinutesFromNow, !0);
    document.removeEventListener("touchdown", this.scheduleLogTwoMinutesFromNow, !0);
    document.removeEventListener("touchstart", this.scheduleLogTwoMinutesFromNow, !0);
    document.removeEventListener("touchmove", this.scheduleLogTwoMinutesFromNow, !0);
    document.removeEventListener("visibilitychange", this._onDocumentVisibilityChange);
  }
  hasScheduledLog() {
    return null != this._scheduledLogAtMs;
  }
  _shouldLogToAnalytics() {
    return this._isRecording && null != this._scheduledLogAtMs;
  }
  productTypeForTests() {
    return this._productType;
  }
  _resetLogState() {
    this._lastKnownFrameMs = null;
    this._imagesLoadingState = null;
    this._ongoingSpotlight = !1;
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
  getSlowFrameTracker() {
    return this._slowFrameTracker;
  }
  refreshRate() {
    let e = this._distributionByWorkName.get("all");
    if (e) {
      let t = e.getMode();
      if (t) {
        if (t.min < 9) return "120FPS";
        if (t.min < 32) return "60FPS";
        if (t.min < 48) return "30FPS";
      }
    }
    return "UNKNOWN";
  }
  estimatedRefreshRate() {
    let e = this._distributionByWorkName.get("all");
    if (e) {
      let t = e.getMode();
      if (t) {
        if (t.min < 9) return {
          frameLength: 1e3 / 120,
          fps: 120
        };
        if (t.min < 32) return {
          frameLength: 1e3 / 60,
          fps: 60
        };
        t.min;
      }
    }
    return {
      frameLength: 1e3 / 30,
      fps: 30
    };
  }
  tsmerMetrics() {
    return this._tsmerMetrics;
  }
  _getOrCreateDistribution(e) {
    let t = this._distributionByWorkName.get(e);
    t || (t = new FPSDistribution(), this._distributionByWorkName.set(e, t));
    return t;
  }
  addEventTracker(e, t) {
    this._eventTrackers.set(e, t);
  }
  addTimeEvent(e, t) {
    this._getOrCreateDistribution(e).add(t);
  }
  setNumberOfRenderedComments(e) {
    this._lastRecordedNumberOfRenderedComments = e;
    this._numberOfRenderedCommentsWatermark = Math.max(e, this._numberOfRenderedCommentsWatermark);
  }
  setMultiplayerPerfInfo(e) {
    let {
      multiplayerUserCount,
      ongoingSpotlight
    } = e;
    this._ongoingSpotlight = ongoingSpotlight;
    this._multiplayerUserCount = multiplayerUserCount;
  }
  trackOtherUserCursorMoved() {
    R9?.setOtherUserMouseMovedCallback(() => {
      this.recordSingleFrameNamedEvent("otherUserCursorMoved");
    });
  }
}
export const AH = $$p0;
export const jY = $$u1;