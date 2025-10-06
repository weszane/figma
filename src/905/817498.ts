import { FPSDistribution } from '../905/609396'
import { PanTracker, ZoomScaleTracker } from '../905/967662'
import { CoverageStatus, Fullscreen, FullscreenPerfMetrics } from '../figma_app/763686'
/**
 * Thresholds for stale time accumulators.
 * Original variable: $$s
 */
const staleTimeThresholds = [1000, 2000]

/**
 * Benchmark metrics collected for performance analysis.
 */
interface BenchmarkOnlyMetrics {
  editFrames: number[]
  editFramesWhileNotPanningOrZooming: number[]
  allFramesViewportCoverage: { value: number, duration: number }[]
  allFramesMinSharpness: { value: number, duration: number }[]
  allFramesAvgSharpness: { value: number, duration: number }[]
}

/**
 * Accumulator for stale time metrics.
 */
interface StaleTimeAccumulator {
  thresholdMs: number
  msAboveThreshold: number
  msAboveThresholdWhileNotPanningOrZooming: number
}

/**
 * PerformanceLogger
 * Original class: $$o0
 * Collects and manages frame timing and sharpness metrics for fullscreen rendering.
 */
export class PerformanceLogger {
  _benchmarkOnlyMetrics: BenchmarkOnlyMetrics
  _collectBenchmarkOnlyMetrics: boolean
  _editFrameDistribution: FPSDistribution
  _editFrameDistributionWhileNotPanningOrZooming: FPSDistribution
  _remoteFrameDistribution: FPSDistribution
  _remoteFrameDistributionWhileNotPanningOrZooming: FPSDistribution
  _staleTimeAccumulators: StaleTimeAccumulator[]
  _panEventTracker: PanTracker
  _zoomEventTracker: ZoomScaleTracker
  _lastFrameTime: number
  _lastEditFrameTime: number
  _lastFrameStaleness: number
  _lastDisplayedRenderChangeCounter: number | null
  _renderTreeSwapStartTime: number | null

  constructor() {
    this._benchmarkOnlyMetrics = this.createEmptyBenchmarkMetrics()
    this._collectBenchmarkOnlyMetrics = false
    this._editFrameDistribution = new FPSDistribution()
    this._editFrameDistributionWhileNotPanningOrZooming = new FPSDistribution()
    this._remoteFrameDistribution = new FPSDistribution()
    this._remoteFrameDistributionWhileNotPanningOrZooming = new FPSDistribution()
    this._staleTimeAccumulators = []
    this._panEventTracker = new PanTracker()
    this._zoomEventTracker = new ZoomScaleTracker()
    this._lastFrameTime = 0
    this._lastEditFrameTime = 0
    this._lastFrameStaleness = 0
    this._lastDisplayedRenderChangeCounter = null
    this._renderTreeSwapStartTime = null
    this.resetLogState()
  }

  /**
   * Called on each frame to update metrics.
   * Original method: onFrame
   */
  onFrame(): void {
    const panOccurred = this._panEventTracker.didEventOccur()
    const zoomOccurred = this._zoomEventTracker.didEventOccur()
    const interactionOccurred = panOccurred || zoomOccurred
    const displayedCounter = Fullscreen?.displayedRenderChangeCounterIndex() ?? 0
    const latestCounter = Fullscreen?.latestRenderChangeCounterIndex() ?? 0
    const renderTreeChanged = this._lastDisplayedRenderChangeCounter !== displayedCounter

    if (renderTreeChanged && this._renderTreeSwapStartTime !== null) {
      const elapsed = performance.now() - this._renderTreeSwapStartTime
      const isRemote = !Fullscreen?.lastChangeToDisplayedRenderTreeIncludesLocalEdit()

      this._editFrameDistribution.add(elapsed)
      if (isRemote)
        this._remoteFrameDistribution.add(elapsed)

      if (!interactionOccurred) {
        this._editFrameDistributionWhileNotPanningOrZooming.add(elapsed)
        if (isRemote)
          this._remoteFrameDistributionWhileNotPanningOrZooming.add(elapsed)
      }

      if (this._collectBenchmarkOnlyMetrics) {
        this._benchmarkOnlyMetrics.editFrames.push(elapsed)
        if (!interactionOccurred) {
          this._benchmarkOnlyMetrics.editFramesWhileNotPanningOrZooming.push(elapsed)
        }
      }

      this._lastEditFrameTime = elapsed
    }
    else {
      this._lastEditFrameTime = 0
    }

    if (renderTreeChanged || displayedCounter === latestCounter) {
      this._renderTreeSwapStartTime = performance.now()
    }
    this._lastDisplayedRenderChangeCounter = displayedCounter

    const frameStaleness = FullscreenPerfMetrics?.getRenderTreeStaleTimeMs() ?? 0
    this._lastFrameStaleness = frameStaleness

    if (this._lastFrameTime !== 0) {
      const frameDuration = performance.now() - this._lastFrameTime
      for (const accumulator of this._staleTimeAccumulators) {
        const msAbove = frameStaleness > accumulator.thresholdMs ? frameDuration : 0
        accumulator.msAboveThreshold += msAbove
        if (!interactionOccurred) {
          accumulator.msAboveThresholdWhileNotPanningOrZooming += msAbove
        }
      }

      if (this._collectBenchmarkOnlyMetrics) {
        this._benchmarkOnlyMetrics.allFramesViewportCoverage.push({
          value: Fullscreen?.estimatedViewportRenderCoverage(CoverageStatus.DEFINITELY_COVERED_ONLY) ?? 0,
          duration: frameDuration,
        })
        this._benchmarkOnlyMetrics.allFramesMinSharpness.push({
          value: Fullscreen.minViewportSharpness(),
          duration: frameDuration,
        })
        this._benchmarkOnlyMetrics.allFramesAvgSharpness.push({
          value: Fullscreen.avgViewportSharpness(),
          duration: frameDuration,
        })
      }
    }

    this._lastFrameTime = performance.now()
  }

  /**
   * Returns the staleness of the last frame.
   * Original method: lastFrameStaleness
   */
  lastFrameStaleness(): number {
    return this._lastFrameStaleness
  }

  /**
   * Returns the time of the last edit frame.
   * Original method: lastEditFrameTime
   */
  lastEditFrameTime(): number {
    return this._lastEditFrameTime
  }

  /**
   * Enables or disables collection of benchmark-only metrics.
   * Original method: setCollectBenchmarkOnlyMetrics
   */
  setCollectBenchmarkOnlyMetrics(collect: boolean): void {
    this._collectBenchmarkOnlyMetrics = collect
  }

  /**
   * Returns all edit frame times.
   * Original method: allEditFrames
   */
  allEditFrames(): number[] {
    return this._benchmarkOnlyMetrics.editFrames
  }

  /**
   * Returns all edit frame times while not panning or zooming.
   * Original method: allEditFramesWhileNotPanningOrZooming
   */
  allEditFramesWhileNotPanningOrZooming(): number[] {
    return this._benchmarkOnlyMetrics.editFramesWhileNotPanningOrZooming
  }

  /**
   * Returns all viewport coverage metrics for all frames.
   * Original method: allFramesViewportCoverage
   */
  allFramesViewportCoverage(): { value: number, duration: number }[] {
    return this._benchmarkOnlyMetrics.allFramesViewportCoverage
  }

  /**
   * Returns all minimum sharpness metrics for all frames.
   * Original method: allFramesMinSharpness
   */
  allFramesMinSharpness(): { value: number, duration: number }[] {
    return this._benchmarkOnlyMetrics.allFramesMinSharpness
  }

  /**
   * Returns all average sharpness metrics for all frames.
   * Original method: allFramesAvgSharpness
   */
  allFramesAvgSharpness(): { value: number, duration: number }[] {
    return this._benchmarkOnlyMetrics.allFramesAvgSharpness
  }

  /**
   * Returns a plain object representation of the logger state.
   * Original method: toPOJO
   */
  toPOJO(): object {
    return {
      editFrameTime: this._editFrameDistribution.toPOJO(),
      editFrameTimeWhileNotPanningOrZooming: this._editFrameDistributionWhileNotPanningOrZooming.toPOJO(),
      remoteFrameTime: this._remoteFrameDistribution.toPOJO(),
      remoteFrameTimeWhileNotPanningOrZooming: this._remoteFrameDistributionWhileNotPanningOrZooming.toPOJO(),
      staleTimeAccumulators: this._staleTimeAccumulators,
    }
  }

  /**
   * Returns the edit frame distribution.
   * Original method: editFrameDistribution
   */
  editFrameDistribution(): FPSDistribution {
    return this._editFrameDistribution
  }

  /**
   * Returns the edit frame distribution while not panning or zooming.
   * Original method: editFrameDistributionWhileNotPanningOrZooming
   */
  editFrameDistributionWhileNotPanningOrZooming(): FPSDistribution {
    return this._editFrameDistributionWhileNotPanningOrZooming
  }

  /**
   * Returns the remote frame distribution.
   * Original method: remoteFrameDistribution
   */
  remoteFrameDistribution(): FPSDistribution {
    return this._remoteFrameDistribution
  }

  /**
   * Returns the remote frame distribution while not panning or zooming.
   * Original method: remoteFrameDistributionWhileNotPanningOrZooming
   */
  remoteFrameDistributionWhileNotPanningOrZooming(): FPSDistribution {
    return this._remoteFrameDistributionWhileNotPanningOrZooming
  }

  /**
   * Resets the logger state and metrics.
   * Original method: resetLogState
   */
  resetLogState(): void {
    this._benchmarkOnlyMetrics = this.createEmptyBenchmarkMetrics()
    this._editFrameDistribution = new FPSDistribution()
    this._editFrameDistributionWhileNotPanningOrZooming = new FPSDistribution()
    this._remoteFrameDistribution = new FPSDistribution()
    this._remoteFrameDistributionWhileNotPanningOrZooming = new FPSDistribution()
    this._lastFrameTime = 0
    this._staleTimeAccumulators = staleTimeThresholds.map(threshold => ({
      thresholdMs: threshold,
      msAboveThreshold: 0,
      msAboveThresholdWhileNotPanningOrZooming: 0,
    }))
  }

  /**
   * Creates an empty BenchmarkOnlyMetrics object.
   */
  createEmptyBenchmarkMetrics(): BenchmarkOnlyMetrics {
    return {
      editFrames: [],
      editFramesWhileNotPanningOrZooming: [],
      allFramesViewportCoverage: [],
      allFramesMinSharpness: [],
      allFramesAvgSharpness: [],
    }
  }
}

/**
 * Export with original variable name for compatibility.
 * Original export: export const s = $$o0;
 */
export const s = PerformanceLogger
