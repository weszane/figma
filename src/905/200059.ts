import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
let a = class e {
  constructor(e, t, i) {
    this.frameNumber = 0;
    this.lastSampledFrame = 0;
    this.forceNextFrameToBeSampled = !1;
    this.addPerFrameMetricsCallback = () => { };
    this.clearPerFrameMetricsCallback = () => { };
    this.isPrototypingFrameTracker = e;
    this.addPerFrameMetricsCallback = t;
    this.clearPerFrameMetricsCallback = i;
  }
  incrementFrameCounter() {
    this.frameNumber++;
  }
  checkSlowFrameAndSample(t, i, n, r, a) {
    let s = this.forceNextFrameToBeSampled;
    let o = 1;
    t < 300 && !s && (o = t < 1 ? e.sampleRateUpTo1ms : t < 9 ? e.sampleRateUpTo9ms : t < 17 ? e.sampleRateUpTo17ms : t < 19 ? e.sampleRateUpTo19ms : t < 20 ? e.sampleRateUpTo20ms : t < 23 ? e.sampleRateUpTo23ms : t < 25 ? e.sampleRateUpTo25ms : t < 29 ? e.sampleRateUpTo29ms : t < 32 ? e.sampleRateUpTo32ms : t < 48 ? e.sampleRateUpTo48ms : t < 64 ? e.sampleRateUpTo64ms : t < 80 ? e.sampleRateUpTo80ms : t < 100 ? e.sampleRateUpTo100ms : e.sampleRateUpTo300ms);
    this.forceNextFrameToBeSampled = t >= e.unsampledFrameTimeMs;
    (s || this.forceNextFrameToBeSampled || o > Math.random()) && this.sampleFrame(t, o, s, i, n, r, a, t >= e.unsampledFrameTimeMs);
  }
  clearPerFrameMetricsAndIncrementFrameCounter() {
    this.incrementFrameCounter();
    this.clearPerFrameMetricsCallback(this.frameNumber);
  }
  sampleFrame(t, i, a, s, o, l, d, c) {
    let u = {};
    u.frameTimeMs = t;
    u.frameSamplingRate = i;
    u.protoSlowFrameTracker = this.isPrototypingFrameTracker;
    u.frameNumber = this.frameNumber;
    u.frameWasForceSampled = a;
    u.trackersHit = s;
    u.trackerTotalTimeMs = o;
    u.fileKey = l;
    u.productType = d;
    let p = this.lastSampledFrame < this.frameNumber - 1;
    this.addPerFrameMetricsCallback(u, p);
    this.lastSampledFrame = this.frameNumber;
    getFeatureFlags().defer_network_call_slow_frame ? setTimeout(() => {
      trackEventAnalytics(e.analyticsName, u, {
        ...e.loggerOptions,
        forwardToDatadog: c
      });
    }, 0) : trackEventAnalytics(e.analyticsName, u, {
      ...e.loggerOptions,
      forwardToDatadog: c
    });
  }
  getDrawCallsForGuardrails() {
    return 0;
  }
};
a.optimizationExposuresKey = "optimizationExposures";
a.gpuMetricsCurrentFrameKey = "gpuMetricsCurrentFrame";
a.gpuMetricsPreviousFrameKey = "gpuMetricsPreviousFrame";
a.cpuTimerTreeCurrentFrameKey = "cpuTimerTreeCurrentFrame";
a.cpuTimerTreePreviousFrameKey = "cpuTimerTreePreviousFrame";
a.activeAnimationsKey = "activeAnimations";
a.numberOfDevAnnotationsVisibleKey = "numberOfDevAnnotationsVisible";
a.sampleRateUpTo1ms = .00224;
a.sampleRateUpTo9ms = 7e-4 / 15;
a.sampleRateUpTo17ms = 4e-4 / 15;
a.sampleRateUpTo19ms = .0016 / 15;
a.sampleRateUpTo20ms = 58e-5;
a.sampleRateUpTo23ms = .0076 / 15;
a.sampleRateUpTo25ms = .00186;
a.sampleRateUpTo29ms = .00156;
a.sampleRateUpTo32ms = .0338 / 15;
a.sampleRateUpTo48ms = .0113 / 15;
a.sampleRateUpTo64ms = .0585 / 15;
a.sampleRateUpTo80ms = .1204 / 15;
a.sampleRateUpTo100ms = .2134 / 15;
a.sampleRateUpTo300ms = .2134 / 30;
a.unsampledFrameTimeMs = 300;
a.loggerOptions = {
  forwardToDatadog: !1,
  batchRequest: !0
};
a.analyticsName = "slow_frame_tracker";
export let $$s0 = a;
export const N = $$s0;
