import { trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'

/**
 * @typedef {object} FrameMetrics
 * @property {number} frameTimeMs
 * @property {number} frameSamplingRate
 * @property {boolean} protoSlowFrameTracker
 * @property {number} frameNumber
 * @property {boolean} frameWasForceSampled
 * @property {any} trackersHit
 * @property {number} trackerTotalTimeMs
 * @property {string} fileKey
 * @property {string} productType
 */

/**
 * Type definition for frame metrics.
 * Original type name: FrameMetrics
 */
export interface FrameMetrics {
  frameTimeMs: number
  frameSamplingRate: number
  protoSlowFrameTracker: boolean
  frameNumber: number
  frameWasForceSampled: boolean
  trackersHit: any
  trackerTotalTimeMs: number
  fileKey: string
  productType: string
}

/**
 * Class for tracking slow frames and sampling metrics.
 * Original class name: e
 */
export class SlowFrameTracker {
  static optimizationExposuresKey = 'optimizationExposures'
  static gpuMetricsCurrentFrameKey = 'gpuMetricsCurrentFrame'
  static gpuMetricsPreviousFrameKey = 'gpuMetricsPreviousFrame'
  static cpuTimerTreeCurrentFrameKey = 'cpuTimerTreeCurrentFrame'
  static cpuTimerTreePreviousFrameKey = 'cpuTimerTreePreviousFrame'
  static activeAnimationsKey = 'activeAnimations'
  static numberOfDevAnnotationsVisibleKey = 'numberOfDevAnnotationsVisible'
  static sampleRateUpTo1ms = 0.00224
  static sampleRateUpTo9ms = 7e-4 / 15
  static sampleRateUpTo17ms = 4e-4 / 15
  static sampleRateUpTo19ms = 0.0016 / 15
  static sampleRateUpTo20ms = 58e-5
  static sampleRateUpTo23ms = 0.0076 / 15
  static sampleRateUpTo25ms = 0.00186
  static sampleRateUpTo29ms = 0.00156
  static sampleRateUpTo32ms = 0.0338 / 15
  static sampleRateUpTo48ms = 0.0113 / 15
  static sampleRateUpTo64ms = 0.0585 / 15
  static sampleRateUpTo80ms = 0.1204 / 15
  static sampleRateUpTo100ms = 0.2134 / 15
  static sampleRateUpTo300ms = 0.2134 / 30
  static unsampledFrameTimeMs = 300
  static loggerOptions = {
    forwardToDatadog: false,
    batchRequest: true,
  }

  static analyticsName = 'slow_frame_tracker'

  frameNumber: number = 0
  lastSampledFrame: number = 0
  forceNextFrameToBeSampled: boolean = false
  isPrototypingFrameTracker: boolean
  addPerFrameMetricsCallback: (metrics: FrameMetrics, missedFrames: boolean) => void
  clearPerFrameMetricsCallback: (frameNumber: number) => void

  /**
   * @param {boolean} isPrototypingFrameTracker
   * @param {(metrics: FrameMetrics, missedFrames: boolean) => void} addPerFrameMetricsCallback
   * @param {(frameNumber: number) => void} clearPerFrameMetricsCallback
   */
  constructor(
    isPrototypingFrameTracker: boolean,
    addPerFrameMetricsCallback: (metrics: FrameMetrics, missedFrames: boolean) => void,
    clearPerFrameMetricsCallback: (frameNumber: number) => void,
  ) {
    this.isPrototypingFrameTracker = isPrototypingFrameTracker
    this.addPerFrameMetricsCallback = addPerFrameMetricsCallback
    this.clearPerFrameMetricsCallback = clearPerFrameMetricsCallback
  }

  /**
   * Increment the frame counter.
   * Original method: incrementFrameCounter
   */
  incrementFrameCounter(): void {
    this.frameNumber++
  }

  /**
   * Check if the frame is slow and sample if needed.
   * Original method: checkSlowFrameAndSample
   */
  checkSlowFrameAndSample(
    frameTimeMs: number,
    trackersHit: any,
    trackerTotalTimeMs: number,
    fileKey: string,
    productType: string,
  ): void {
    const wasForceSampled = this.forceNextFrameToBeSampled
    let sampleRate = 1
    // Refactored nested conditional for sampleRate assignment (original logic: checkSlowFrameAndSample)
    if (frameTimeMs < 300 && !wasForceSampled) {
      /**
       * Helper function to determine sample rate based on frame time.
       * @param {number} frameTimeMs
       * @returns {number}
       */
      const getSampleRateForFrameTime = (frameTimeMs: number): number => {
        if (frameTimeMs < 1)
          return SlowFrameTracker.sampleRateUpTo1ms
        if (frameTimeMs < 9)
          return SlowFrameTracker.sampleRateUpTo9ms
        if (frameTimeMs < 17)
          return SlowFrameTracker.sampleRateUpTo17ms
        if (frameTimeMs < 19)
          return SlowFrameTracker.sampleRateUpTo19ms
        if (frameTimeMs < 20)
          return SlowFrameTracker.sampleRateUpTo20ms
        if (frameTimeMs < 23)
          return SlowFrameTracker.sampleRateUpTo23ms
        if (frameTimeMs < 25)
          return SlowFrameTracker.sampleRateUpTo25ms
        if (frameTimeMs < 29)
          return SlowFrameTracker.sampleRateUpTo29ms
        if (frameTimeMs < 32)
          return SlowFrameTracker.sampleRateUpTo32ms
        if (frameTimeMs < 48)
          return SlowFrameTracker.sampleRateUpTo48ms
        if (frameTimeMs < 64)
          return SlowFrameTracker.sampleRateUpTo64ms
        if (frameTimeMs < 80)
          return SlowFrameTracker.sampleRateUpTo80ms
        if (frameTimeMs < 100)
          return SlowFrameTracker.sampleRateUpTo100ms
        return SlowFrameTracker.sampleRateUpTo300ms
      }
      sampleRate = getSampleRateForFrameTime(frameTimeMs)
    }
    this.forceNextFrameToBeSampled = frameTimeMs >= SlowFrameTracker.unsampledFrameTimeMs
    if (
      wasForceSampled
      || this.forceNextFrameToBeSampled
      || sampleRate > Math.random()
    ) {
      this.sampleFrame(
        frameTimeMs,
        sampleRate,
        wasForceSampled,
        trackersHit,
        trackerTotalTimeMs,
        fileKey,
        productType,
        frameTimeMs >= SlowFrameTracker.unsampledFrameTimeMs,
      )
    }
  }

  /**
   * Clear per-frame metrics and increment frame counter.
   * Original method: clearPerFrameMetricsAndIncrementFrameCounter
   */
  clearPerFrameMetricsAndIncrementFrameCounter(): void {
    this.incrementFrameCounter()
    this.clearPerFrameMetricsCallback(this.frameNumber)
  }

  /**
   * Sample the frame and send analytics.
   * Original method: sampleFrame
   */
  sampleFrame(
    frameTimeMs: number,
    frameSamplingRate: number,
    frameWasForceSampled: boolean,
    trackersHit: any,
    trackerTotalTimeMs: number,
    fileKey: string,
    productType: string,
    forwardToDatadog: boolean,
  ): void {
    const metrics: FrameMetrics = {
      frameTimeMs,
      frameSamplingRate,
      protoSlowFrameTracker: this.isPrototypingFrameTracker,
      frameNumber: this.frameNumber,
      frameWasForceSampled,
      trackersHit,
      trackerTotalTimeMs,
      fileKey,
      productType,
    }
    const missedFrames = this.lastSampledFrame < this.frameNumber - 1
    this.addPerFrameMetricsCallback(metrics, missedFrames)
    this.lastSampledFrame = this.frameNumber

    const loggerOptions = {
      ...SlowFrameTracker.loggerOptions,
      forwardToDatadog,
    }

    if (getFeatureFlags().defer_network_call_slow_frame) {
      setTimeout(() => {
        trackEventAnalytics(SlowFrameTracker.analyticsName, metrics, loggerOptions)
      }, 0)
    }
    else {
      trackEventAnalytics(SlowFrameTracker.analyticsName, metrics, loggerOptions)
    }
  }

  /**
   * Get draw calls for guardrails.
   * Original method: getDrawCallsForGuardrails
   */
  getDrawCallsForGuardrails(): number {
    return 0
  }
}

// Export with original variable name
export const N = SlowFrameTracker
