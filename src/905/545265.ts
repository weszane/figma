import { getFeatureFlags } from "../905/601108";
import { k as _$$k } from "../905/651849";
import { j } from "../905/535481";
export class $$s0 {
  constructor() {
    this._counters = new Map();
    this._perfMetrics = new Map();
    this._pluginDataHistogram = new Map();
    this._pluginDataSize = new Map();
    this._sharedPluginDataSize = new Map();
    this._pluginDataMaximumKeyCountExceeded = !1;
    this._hasResizedNodeWithMissingFont = !1;
    this._executionTimeMeasurementState = 0;
    this._tmpStackInvariantFields = new Map();
    this._stackInvariantFields = Object.create(null);
    this._totalValidationDuration = 0;
    this._validationCount = 0;
    this._clientStorageUsageDelta = 0;
    this._totalClientStorageUsage = 0;
    this._startTimestamp = Date.now();
    this._timeMarks = {};
    this._numPagesLoaded = 0;
  }
  getApproximateDuration() {
    return Date.now() - this._startTimestamp;
  }
  markTime(e) {
    null == this._timeMarks[e] && (this._timeMarks[e] = Date.now() - this._startTimestamp);
  }
  async markDuration(e, t) {
    let i = Date.now();
    let n = await t();
    this._timeMarks[e] = Date.now() - i;
    return n;
  }
  async markAndAggregateDuration(e, t) {
    let i = Date.now();
    try {
      return await t();
    } finally {
      let t = Date.now() - i;
      let n = this._timeMarks[e] || 0;
      this._timeMarks[e] = t + n;
    }
  }
  getTimingMarks() {
    return {
      ...this._timeMarks,
      approximateDurationMS: Date.now() - this._startTimestamp
    };
  }
  recordValidationPerfData(e) {
    this._totalValidationDuration += e;
    this._validationCount++;
  }
  totalValidationDuration() {
    return this._totalValidationDuration;
  }
  validationCount() {
    return this._validationCount;
  }
  recordClientStorageUsageData(e, t) {
    this._clientStorageUsageDelta = (this._clientStorageUsageDelta || 0) + e;
    this._totalClientStorageUsage = t;
  }
  clientStorageUsageDelta() {
    return this._clientStorageUsageDelta;
  }
  totalClientStorageUsage() {
    return this._totalClientStorageUsage;
  }
  resizeNodeWithMissingFont() {
    this._hasResizedNodeWithMissingFont = !0;
  }
  hasResizedNodeWithMissingFont() {
    return this._hasResizedNodeWithMissingFont;
  }
  setRunParameters(e) {
    this._parameterValues = e;
  }
  ranWithParameters() {
    return !!this._parameterValues;
  }
  parameterCount() {
    return this._parameterValues ? Object.keys(this._parameterValues).length : 0;
  }
  increment(e) {
    let t = this._counters.get(e) || 0;
    this._counters.set(e, t + 1);
  }
  incrementNumPagesLoaded() {
    this._numPagesLoaded++;
  }
  getNumPagesLoaded() {
    return this._numPagesLoaded;
  }
  stackFieldSet(e, t) {
    let i = this._tmpStackInvariantFields.get(e);
    i || (i = new Set(), this._tmpStackInvariantFields.set(e, i));
    i.add(t);
  }
  stackInvariantsEnforced(e) {
    for (let [t, i] of Object.entries(e)) for (let e of i) if (this._tmpStackInvariantFields.get(t)?.has(e)) {
      let t = this._stackInvariantFields[e] ?? 0;
      this._stackInvariantFields[e] = t + 1;
    }
    this._tmpStackInvariantFields = new Map();
  }
  shouldMeasureExecutionTime(e) {
    return !!j() || !!getFeatureFlags().plugins_perf_metrics && (this._perfMetrics.has(e) ? 0 === this._executionTimeMeasurementState ? (this._executionTimeMeasurementState++, !0) : (this._executionTimeMeasurementState++, this._executionTimeMeasurementState >= 4 && (this._executionTimeMeasurementState = 0), !1) : (this._executionTimeMeasurementState++, !0));
  }
  addPerfMetric(e, t) {
    let i = this._perfMetrics.get(e);
    i ? (i.min = Math.min(i.min, t), i.max = Math.max(i.max, t), i.sum += t, i.cnt += 1) : this._perfMetrics.set(e, {
      min: t,
      max: t,
      sum: t,
      cnt: 1
    });
  }
  updatePluginDataHistogram(e, t) {
    let i = this._pluginDataHistogram.get(e);
    i || (i = new Map(), this._pluginDataHistogram.set(e, i));
    let n = Math.floor(t <= 0 ? 0 : Math.log(t) / Math.log(2)).toString();
    i.has(n) ? i.set(n, i.get(n) + 1) : i.set(n, 1);
  }
  recordSetPluginDataSize(e, t, i) {
    this.updatePluginDataHistogram("node.setPluginData:key_size", t.length);
    this.updatePluginDataHistogram("node.setPluginData:value_size", i.length);
    let n = [e, t].join(":");
    this._pluginDataSize.has(n) || this._pluginDataSize.size < 128 ? this._pluginDataSize.set(n, i.length) : this._pluginDataMaximumKeyCountExceeded = !0;
  }
  recordSetSharedPluginDataSize(e, t, i, n) {
    this.updatePluginDataHistogram("node.setSharedPluginData:key_size", i.length);
    this.updatePluginDataHistogram("node.setSharedPluginData:value_size", n.length);
    let r = [e, t, i].join(":");
    this._sharedPluginDataSize.has(r) || this._sharedPluginDataSize.size < 128 ? this._sharedPluginDataSize.set(r, n.length) : this._pluginDataMaximumKeyCountExceeded = !0;
  }
  metricsWrapper(e, t) {
    let i = this;
    return function (n, s, o, l) {
      let d = j();
      d && _$$k.debug("[Plugin API]", `${e} started`);
      i.increment(e);
      let c = i.shouldMeasureExecutionTime(e);
      let u = 0;
      c && (u = performance.now());
      let p = t.call(this, n, s, o, l);
      let m = performance.now() - u;
      c && i.addPerfMetric(e, m);
      d && _$$k.debug("[Plugin API]", `${e} finished`, {
        executionTime: m
      });
      return p;
    };
  }
  keys() {
    return [...this._counters.keys()];
  }
  callCountsToJSON() {
    let e = {};
    this._counters.forEach((t, i) => {
      e[i] = t;
    });
    return JSON.stringify(e);
  }
  perfMetricsToJSON() {
    let e = {};
    this._perfMetrics.forEach((t, i) => {
      e[i] = {
        min: t.min,
        max: t.max,
        avg: t.sum / t.cnt,
        sum: t.sum
      };
    });
    return JSON.stringify(e);
  }
  pluginDataHistogramToJSON() {
    let e = {};
    this._pluginDataHistogram.forEach((t, i) => {
      e[i] = {};
      t.forEach((t, n) => {
        e[i][n] = t;
      });
    });
    return JSON.stringify(e);
  }
  pluginDataTotalSetSize() {
    return Array.from(this._pluginDataSize.values()).reduce((e, t) => e + t, 0);
  }
  sharedPluginDataTotalSetSize() {
    return Array.from(this._sharedPluginDataSize.values()).reduce((e, t) => e + t, 0);
  }
  pluginDataMaximumKeyCountExceeded() {
    return this._pluginDataMaximumKeyCountExceeded;
  }
  stackInvariantFieldsToJSON() {
    return JSON.stringify(this._stackInvariantFields);
  }
}
export const P = $$s0;