import { Fullscreen, FullscreenPerfMetrics, CoverageStatus } from "../figma_app/763686";
import { H0, vu } from "../905/967662";
import { FPSDistribution } from "../905/609396";
let $$s = [1e3, 2e3];
export class $$o0 {
  constructor() {
    this._benchmarkOnlyMetrics = {
      editFrames: [],
      editFramesWhileNotPanningOrZooming: [],
      allFramesViewportCoverage: [],
      allFramesMinSharpness: [],
      allFramesAvgSharpness: []
    };
    this._collectBenchmarkOnlyMetrics = !1;
    this._editFrameDistribution = new FPSDistribution();
    this._editFrameDistributionWhileNotPanningOrZooming = new FPSDistribution();
    this._remoteFrameDistribution = new FPSDistribution();
    this._remoteFrameDistributionWhileNotPanningOrZooming = new FPSDistribution();
    this._staleTimeAccumulators = [];
    this._panEventTracker = new H0();
    this._zoomEventTracker = new vu();
    this._lastFrameTime = 0;
    this._lastEditFrameTime = 0;
    this._lastFrameStaleness = 0;
    this._lastDisplayedRenderChangeCounter = null;
    this._renderTreeSwapStartTime = null;
    this.resetLogState();
  }
  onFrame() {
    let e = this._panEventTracker.didEventOccur();
    let t = this._zoomEventTracker.didEventOccur();
    let i = e || t;
    let r = Fullscreen?.displayedRenderChangeCounterIndex() ?? 0;
    let a = Fullscreen?.latestRenderChangeCounterIndex() ?? 0;
    let s = this._lastDisplayedRenderChangeCounter !== r;
    if (s && null !== this._renderTreeSwapStartTime) {
      let e = performance.now() - this._renderTreeSwapStartTime;
      let t = !Fullscreen?.lastChangeToDisplayedRenderTreeIncludesLocalEdit();
      this._editFrameDistribution.add(e);
      t && this._remoteFrameDistribution.add(e);
      !i && (this._editFrameDistributionWhileNotPanningOrZooming.add(e), t && this._remoteFrameDistributionWhileNotPanningOrZooming.add(e));
      this._collectBenchmarkOnlyMetrics && (this._benchmarkOnlyMetrics.editFrames.push(e), i || this._benchmarkOnlyMetrics.editFramesWhileNotPanningOrZooming.push(e));
      this._lastEditFrameTime = e;
    } else this._lastEditFrameTime = 0;
    (s || r === a) && (this._renderTreeSwapStartTime = performance.now());
    this._lastDisplayedRenderChangeCounter = r;
    let o = FullscreenPerfMetrics?.getRenderTreeStaleTimeMs() ?? 0;
    if (this._lastFrameStaleness = o, 0 !== this._lastFrameTime) {
      let e = performance.now() - this._lastFrameTime;
      for (let t of this._staleTimeAccumulators) {
        let n = o > t.thresholdMs ? e : 0;
        t.msAboveThreshold += n;
        i || (t.msAboveThresholdWhileNotPanningOrZooming += n);
      }
      this._collectBenchmarkOnlyMetrics && (this._benchmarkOnlyMetrics.allFramesViewportCoverage.push({
        value: Fullscreen?.estimatedViewportRenderCoverage(CoverageStatus.DEFINITELY_COVERED_ONLY) ?? 0,
        duration: e
      }), this._benchmarkOnlyMetrics.allFramesMinSharpness.push({
        value: Fullscreen.minViewportSharpness(),
        duration: e
      }), this._benchmarkOnlyMetrics.allFramesAvgSharpness.push({
        value: Fullscreen.avgViewportSharpness(),
        duration: e
      }));
    }
    this._lastFrameTime = performance.now();
  }
  lastFrameStaleness() {
    return this._lastFrameStaleness;
  }
  lastEditFrameTime() {
    return this._lastEditFrameTime;
  }
  setCollectBenchmarkOnlyMetrics(e) {
    this._collectBenchmarkOnlyMetrics = e;
  }
  allEditFrames() {
    return this._benchmarkOnlyMetrics.editFrames;
  }
  allEditFramesWhileNotPanningOrZooming() {
    return this._benchmarkOnlyMetrics.editFramesWhileNotPanningOrZooming;
  }
  allFramesViewportCoverage() {
    return this._benchmarkOnlyMetrics.allFramesViewportCoverage;
  }
  allFramesMinSharpness() {
    return this._benchmarkOnlyMetrics.allFramesMinSharpness;
  }
  allFramesAvgSharpness() {
    return this._benchmarkOnlyMetrics.allFramesAvgSharpness;
  }
  toPOJO() {
    return {
      editFrameTime: this._editFrameDistribution.toPOJO(),
      editFrameTimeWhileNotPanningOrZooming: this._editFrameDistributionWhileNotPanningOrZooming.toPOJO(),
      remoteFrameTime: this._remoteFrameDistribution.toPOJO(),
      remoteFrameTimeWhileNotPanningOrZooming: this._remoteFrameDistributionWhileNotPanningOrZooming.toPOJO(),
      staleTimeAccumulators: this._staleTimeAccumulators
    };
  }
  editFrameDistribution() {
    return this._editFrameDistribution;
  }
  editFrameDistributionWhileNotPanningOrZooming() {
    return this._editFrameDistributionWhileNotPanningOrZooming;
  }
  remoteFrameDistribution() {
    return this._remoteFrameDistribution;
  }
  remoteFrameDistributionWhileNotPanningOrZooming() {
    return this._remoteFrameDistributionWhileNotPanningOrZooming;
  }
  resetLogState() {
    this._benchmarkOnlyMetrics = {
      editFrames: [],
      editFramesWhileNotPanningOrZooming: [],
      allFramesViewportCoverage: [],
      allFramesMinSharpness: [],
      allFramesAvgSharpness: []
    };
    this._editFrameDistribution = new FPSDistribution();
    this._editFrameDistributionWhileNotPanningOrZooming = new FPSDistribution();
    this._remoteFrameDistribution = new FPSDistribution();
    this._remoteFrameDistributionWhileNotPanningOrZooming = new FPSDistribution();
    this._lastFrameTime = 0;
    this._staleTimeAccumulators = $$s.map(e => ({
      thresholdMs: e,
      msAboveThreshold: 0,
      msAboveThresholdWhileNotPanningOrZooming: 0
    }));
  }
}
export const s = $$o0;