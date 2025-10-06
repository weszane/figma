import { getPluginApiDebugCopy as getPluginApiDebugCopyRef } from '../905/535481'
import { getFeatureFlags as getFeatureFlagsRef } from '../905/601108'
import { logger as loggerRef } from '../905/651849'

/**
 * Performance and usage metrics tracker for plugin API.
 * Original class name: $$s0
 */
export class PluginApiMetrics {
  _counters: Map<string, number>
  _perfMetrics: Map<string, PerfMetric>
  _pluginDataHistogram: Map<string, Map<string, number>>
  _pluginDataSize: Map<string, number>
  _sharedPluginDataSize: Map<string, number>
  _pluginDataMaximumKeyCountExceeded: boolean
  _hasResizedNodeWithMissingFont: boolean
  _executionTimeMeasurementState: number
  _tmpStackInvariantFields: Map<string, Set<string>>
  _stackInvariantFields: Record<string, number>
  _totalValidationDuration: number
  _validationCount: number
  _clientStorageUsageDelta: number
  _totalClientStorageUsage: number
  _startTimestamp: number
  _timeMarks: Record<string, number>
  _numPagesLoaded: number
  _parameterValues?: Record<string, unknown>

  constructor() {
    this._counters = new Map()
    this._perfMetrics = new Map()
    this._pluginDataHistogram = new Map()
    this._pluginDataSize = new Map()
    this._sharedPluginDataSize = new Map()
    this._pluginDataMaximumKeyCountExceeded = false
    this._hasResizedNodeWithMissingFont = false
    this._executionTimeMeasurementState = 0
    this._tmpStackInvariantFields = new Map()
    this._stackInvariantFields = Object.create(null)
    this._totalValidationDuration = 0
    this._validationCount = 0
    this._clientStorageUsageDelta = 0
    this._totalClientStorageUsage = 0
    this._startTimestamp = Date.now()
    this._timeMarks = {}
    this._numPagesLoaded = 0
  }

  /** Returns approximate duration since metrics started. (getApproximateDuration) */
  getApproximateDuration(): number {
    return Date.now() - this._startTimestamp
  }

  /** Marks a named time point if not already marked. (markTime) */
  markTime(mark: string): void {
    if (this._timeMarks[mark] == null) {
      this._timeMarks[mark] = Date.now() - this._startTimestamp
    }
  }

  /**
   * Measures and marks duration for an async operation.
   * (markDuration)
   */
  async markDuration<T>(mark: string, fn: () => Promise<T>): Promise<T> {
    const start = Date.now()
    const result = await fn()
    this._timeMarks[mark] = Date.now() - start
    return result
  }

  /**
   * Measures and aggregates duration for an async operation.
   * (markAndAggregateDuration)
   */
  async markAndAggregateDuration<T>(mark: string, fn: () => Promise<T>): Promise<T> {
    const start = Date.now()
    try {
      return await fn()
    }
    finally {
      const duration = Date.now() - start
      const prev = this._timeMarks[mark] || 0
      this._timeMarks[mark] = duration + prev
    }
  }

  /** Returns timing marks with approximate duration. (getTimingMarks) */
  getTimingMarks(): Record<string, number> {
    return {
      ...this._timeMarks,
      approximateDurationMS: Date.now() - this._startTimestamp,
    }
  }

  /** Records validation performance data. (recordValidationPerfData) */
  recordValidationPerfData(duration: number): void {
    this._totalValidationDuration += duration
    this._validationCount++
  }

  /** Returns total validation duration. (totalValidationDuration) */
  totalValidationDuration(): number {
    return this._totalValidationDuration
  }

  /** Returns validation count. (validationCount) */
  validationCount(): number {
    return this._validationCount
  }

  /** Records client storage usage data. (recordClientStorageUsageData) */
  recordClientStorageUsageData(delta: number, total: number): void {
    this._clientStorageUsageDelta = (this._clientStorageUsageDelta || 0) + delta
    this._totalClientStorageUsage = total
  }

  /** Returns client storage usage delta. (clientStorageUsageDelta) */
  clientStorageUsageDelta(): number {
    return this._clientStorageUsageDelta
  }

  /** Returns total client storage usage. (totalClientStorageUsage) */
  totalClientStorageUsage(): number {
    return this._totalClientStorageUsage
  }

  /** Marks that a node was resized with missing font. (resizeNodeWithMissingFont) */
  resizeNodeWithMissingFont(): void {
    this._hasResizedNodeWithMissingFont = true
  }

  /** Checks if node was resized with missing font. (hasResizedNodeWithMissingFont) */
  hasResizedNodeWithMissingFont(): boolean {
    return this._hasResizedNodeWithMissingFont
  }

  /** Sets run parameters. (setRunParameters) */
  setRunParameters(params: Record<string, unknown>): void {
    this._parameterValues = params
  }

  /** Checks if ran with parameters. (ranWithParameters) */
  ranWithParameters(): boolean {
    return !!this._parameterValues
  }

  /** Returns parameter count. (parameterCount) */
  parameterCount(): number {
    return this._parameterValues ? Object.keys(this._parameterValues).length : 0
  }

  /** Increments a named counter. (increment) */
  increment(key: string): void {
    const count = this._counters.get(key) || 0
    this._counters.set(key, count + 1)
  }

  /** Increments number of pages loaded. (incrementNumPagesLoaded) */
  incrementNumPagesLoaded(): void {
    this._numPagesLoaded++
  }

  /** Returns number of pages loaded. (getNumPagesLoaded) */
  getNumPagesLoaded(): number {
    return this._numPagesLoaded
  }

  /** Sets a stack field for invariants. (stackFieldSet) */
  stackFieldSet(field: string, value: string): void {
    let set = this._tmpStackInvariantFields.get(field)
    if (!set) {
      set = new Set()
      this._tmpStackInvariantFields.set(field, set)
    }
    set.add(value)
  }

  /** Enforces stack invariants. (stackInvariantsEnforced) */
  stackInvariantsEnforced(fields: Record<string, string[]>): void {
    for (const [field, values] of Object.entries(fields)) {
      for (const value of values) {
        if (this._tmpStackInvariantFields.get(field)?.has(value)) {
          const prev = this._stackInvariantFields[value] ?? 0
          this._stackInvariantFields[value] = prev + 1
        }
      }
    }
    this._tmpStackInvariantFields = new Map()
  }

  /**
   * Determines if execution time should be measured for a key.
   * (shouldMeasureExecutionTime)
   */
  shouldMeasureExecutionTime(key: string): boolean {
    const debug = getPluginApiDebugCopyRef()
    const perfFlag = getFeatureFlagsRef().plugins_perf_metrics
    if (debug || perfFlag) {
      if (this._perfMetrics.has(key)) {
        if (this._executionTimeMeasurementState === 0) {
          this._executionTimeMeasurementState++
          return true
        }
        else {
          this._executionTimeMeasurementState++
          if (this._executionTimeMeasurementState >= 4) {
            this._executionTimeMeasurementState = 0
          }
          return false
        }
      }
      else {
        this._executionTimeMeasurementState++
        return true
      }
    }
    return false
  }

  /** Adds a performance metric. (addPerfMetric) */
  addPerfMetric(key: string, value: number): void {
    const metric = this._perfMetrics.get(key)
    if (metric) {
      metric.min = Math.min(metric.min, value)
      metric.max = Math.max(metric.max, value)
      metric.sum += value
      metric.cnt += 1
    }
    else {
      this._perfMetrics.set(key, {
        min: value,
        max: value,
        sum: value,
        cnt: 1,
      })
    }
  }

  /** Updates plugin data histogram. (updatePluginDataHistogram) */
  updatePluginDataHistogram(type: string, size: number): void {
    let histogram = this._pluginDataHistogram.get(type)
    if (!histogram) {
      histogram = new Map()
      this._pluginDataHistogram.set(type, histogram)
    }
    const bin = Math.floor(size <= 0 ? 0 : Math.log(size) / Math.log(2)).toString()
    histogram.set(bin, (histogram.get(bin) || 0) + 1)
  }

  /** Records set plugin data size. (recordSetPluginDataSize) */
  recordSetPluginDataSize(nodeId: string, key: string, value: string): void {
    this.updatePluginDataHistogram('node.setPluginData:key_size', key.length)
    this.updatePluginDataHistogram('node.setPluginData:value_size', value.length)
    const compositeKey = `${nodeId}:${key}`
    if (!this._pluginDataSize.has(compositeKey) || this._pluginDataSize.size < 128) {
      this._pluginDataSize.set(compositeKey, value.length)
    }
    else {
      this._pluginDataMaximumKeyCountExceeded = true
    }
  }

  /** Records set shared plugin data size. (recordSetSharedPluginDataSize) */
  recordSetSharedPluginDataSize(nodeId: string, namespace: string, key: string, value: string): void {
    this.updatePluginDataHistogram('node.setSharedPluginData:key_size', key.length)
    this.updatePluginDataHistogram('node.setSharedPluginData:value_size', value.length)
    const compositeKey = `${nodeId}:${namespace}:${key}`
    if (!this._sharedPluginDataSize.has(compositeKey) || this._sharedPluginDataSize.size < 128) {
      this._sharedPluginDataSize.set(compositeKey, value.length)
    }
    else {
      this._pluginDataMaximumKeyCountExceeded = true
    }
  }

  /**
   * Wraps a function to track metrics and execution time.
   * (metricsWrapper)
   */
  metricsWrapper<T extends (...args: any[]) => any>(key: string, fn: T): (...args: Parameters<T>) => ReturnType<T> {
    const self = this
    return function (...args: Parameters<T>): ReturnType<T> {
      const debug = getPluginApiDebugCopyRef()
      if (debug)
        loggerRef.debug('[Plugin API]', `${key} started`)
      self.increment(key)
      const shouldMeasure = self.shouldMeasureExecutionTime(key)
      let start = 0
      if (shouldMeasure)
        start = performance.now()
      const result = fn.apply(this, args)
      const duration = performance.now() - start
      if (shouldMeasure)
        self.addPerfMetric(key, duration)
      if (debug)
        loggerRef.debug('[Plugin API]', `${key} finished`, { executionTime: duration })
      return result
    }
  }

  /** Returns all counter keys. (keys) */
  keys(): string[] {
    return Array.from(this._counters.keys())
  }

  /** Returns call counts as JSON. (callCountsToJSON) */
  callCountsToJSON(): string {
    const obj: Record<string, number> = {}
    this._counters.forEach((count, key) => {
      obj[key] = count
    })
    return JSON.stringify(obj)
  }

  /** Returns performance metrics as JSON. (perfMetricsToJSON) */
  perfMetricsToJSON(): string {
    const obj: Record<string, { min: number, max: number, avg: number, sum: number }> = {}
    this._perfMetrics.forEach((metric, key) => {
      obj[key] = {
        min: metric.min,
        max: metric.max,
        avg: metric.sum / metric.cnt,
        sum: metric.sum,
      }
    })
    return JSON.stringify(obj)
  }

  /** Returns plugin data histogram as JSON. (pluginDataHistogramToJSON) */
  pluginDataHistogramToJSON(): string {
    const obj: Record<string, Record<string, number>> = {}
    this._pluginDataHistogram.forEach((hist, key) => {
      obj[key] = {}
      hist.forEach((count, bin) => {
        obj[key][bin] = count
      })
    })
    return JSON.stringify(obj)
  }

  /** Returns total set plugin data size. (pluginDataTotalSetSize) */
  pluginDataTotalSetSize(): number {
    return Array.from(this._pluginDataSize.values()).reduce((sum, size) => sum + size, 0)
  }

  /** Returns total set shared plugin data size. (sharedPluginDataTotalSetSize) */
  sharedPluginDataTotalSetSize(): number {
    return Array.from(this._sharedPluginDataSize.values()).reduce((sum, size) => sum + size, 0)
  }

  /** Checks if plugin data maximum key count exceeded. (pluginDataMaximumKeyCountExceeded) */
  pluginDataMaximumKeyCountExceeded(): boolean {
    return this._pluginDataMaximumKeyCountExceeded
  }

  /** Returns stack invariant fields as JSON. (stackInvariantFieldsToJSON) */
  stackInvariantFieldsToJSON(): string {
    return JSON.stringify(this._stackInvariantFields)
  }
}

/** Performance metric type for perfMetrics map. */
interface PerfMetric {
  min: number
  max: number
  sum: number
  cnt: number
}

/** Export for compatibility with original code. (P = $$s0) */
export const P = PluginApiMetrics
