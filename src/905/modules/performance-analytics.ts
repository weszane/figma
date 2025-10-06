/**
 * Performance Monitoring and Analytics Module
 * 
 * This module handles performance measurement, analytics tracking, telemetry collection,
 * and profiling functionality extracted from the main plugin file.
 * 
 * Key responsibilities:
 * - Performance measurement and profiling operations
 * - Analytics event tracking and user behavior monitoring
 * - Telemetry data collection and reporting
 * - Metrics aggregation and performance optimization
 * - Usage statistics and execution time measurement
 * - Stack invariant enforcement and data histogram tracking
 * - Browser performance API integration
 * - User interaction analytics and workflow tracking
 */

/**
 * Performance Measurement Types
 */
export interface PerformanceMetric {
  min: number
  max: number
  sum: number
  cnt: number
}

export interface PerformanceMeasurement {
  name: string
  startTime: number
  endTime?: number
  duration?: number
  attributes?: Record<string, any>
}

export interface ProfilerConfiguration {
  enabled: boolean
  sampleRate: number
  maxMeasurements: number
  categories: string[]
}

/**
 * Analytics Event Types
 */
export interface AnalyticsEvent {
  eventType: string
  properties: Record<string, any>
  timestamp: number
  userId?: string
  sessionId?: string
}

export interface UserAnalyticsData {
  num_edit_days_30_day?: number
  num_edit_days_60_day?: number
  num_edit_days_90_day?: number
  num_edits_30_day?: number
  num_edits_60_day?: number
  num_edits_90_day?: number
  num_files_created?: number
  work_location?: string
  is_company?: boolean
  is_agency?: boolean
  is_freelancer?: boolean
  is_school?: boolean
}

export interface TelemetryData {
  type: 'telemetry'
  date: number
  service: string
  version: string
  source: 'browser' | 'plugin'
  runtime_env?: string
  connectivity?: any
  sdk_setup?: string
  experimental_features?: string[]
}

/**
 * Performance Metrics Manager
 * Original: class $$s0 from 545265.ts - performance metrics collection
 */
export class PerformanceMetricsManager {
  _perfMetrics: Map<string, PerformanceMetric> = new Map()
  _pluginDataHistogram: Map<string, Map<string, number>> = new Map()
  _stackInvariantFields: Record<string, number> = {}
  _tmpStackInvariantFields: Map<string, Set<string>> = new Map()
  _executionTimeMeasurementState = 0
  _numPagesLoaded = 0

  /**
   * Add performance metric
   * Original: addPerfMetric(e, t)
   */
  addPerfMetric(name: string, value: number): void {
    const existing = this._perfMetrics.get(name)

    if (existing) {
      existing.min = Math.min(existing.min, value)
      existing.max = Math.max(existing.max, value)
      existing.sum += value
      existing.cnt += 1
    } else {
      this._perfMetrics.set(name, {
        min: value,
        max: value,
        sum: value,
        cnt: 1
      })
    }
  }

  /**
   * Update plugin data histogram
   * Original: updatePluginDataHistogram(e, t)
   */
  updatePluginDataHistogram(pluginId: string, dataSize: number): void {
    let histogram = this._pluginDataHistogram.get(pluginId)

    if (!histogram) {
      histogram = new Map()
      this._pluginDataHistogram.set(pluginId, histogram)
    }

    // Log2 bucket for size histogram
    const bucket = Math.floor(dataSize <= 0 ? 0 : Math.log(dataSize) / Math.log(2)).toString()
    const current = histogram.get(bucket) || 0
    histogram.set(bucket, current + 1)
  }

  /**
   * Increment general counter
   * Original: increment(e)
   */
  increment(counterName: string): void {
    const current = this._stackInvariantFields[counterName] || 0
    this._stackInvariantFields[counterName] = current + 1
  }

  /**
   * Record stack field set operation
   * Original: stackFieldSet(e, t)
   */
  stackFieldSet(category: string, field: string): void {
    if (!this._tmpStackInvariantFields.has(category)) {
      this._tmpStackInvariantFields.set(category, new Set())
    }
    this._tmpStackInvariantFields.get(category)!.add(field)
  }

  /**
   * Process stack invariants enforcement
   * Original: stackInvariantsEnforced(e)
   */
  stackInvariantsEnforced(invariants: Record<string, string[]>): void {
    for (const [category, fields] of Object.entries(invariants)) {
      for (const field of fields) {
        if (this._tmpStackInvariantFields.get(category)?.has(field)) {
          const current = this._stackInvariantFields[field] || 0
          this._stackInvariantFields[field] = current + 1
        }
      }
    }
    this._tmpStackInvariantFields = new Map()
  }

  /**
   * Check if execution time should be measured
   * Original: shouldMeasureExecutionTime(e)
   */
  shouldMeasureExecutionTime(metricName: string): boolean {
    // Feature flag check would go here
    const perfMetricsEnabled = true // getFeatureFlags().plugins_perf_metrics

    if (!perfMetricsEnabled) return false

    if (this._perfMetrics.has(metricName)) {
      if (this._executionTimeMeasurementState === 0) {
        this._executionTimeMeasurementState++
        return true
      } else {
        this._executionTimeMeasurementState++
        if (this._executionTimeMeasurementState >= 4) {
          this._executionTimeMeasurementState = 0
        }
        return false
      }
    } else {
      this._executionTimeMeasurementState++
      return true
    }
  }

  /**
   * Increment pages loaded counter
   * Original: incrementNumPagesLoaded()
   */
  incrementNumPagesLoaded(): void {
    this._numPagesLoaded++
  }

  /**
   * Get pages loaded count
   * Original: getNumPagesLoaded()
   */
  getNumPagesLoaded(): number {
    return this._numPagesLoaded
  }

  /**
   * Export performance metrics as JSON
   * Original: perfMetricsToJSON()
   */
  perfMetricsToJSON(): string {
    const metrics: Record<string, PerformanceMetric> = {}
    this._perfMetrics.forEach((value, key) => {
      metrics[key] = value
    })
    return JSON.stringify(metrics)
  }

  /**
   * Export plugin data histogram as JSON
   * Original: pluginDataHistogramToJSON()
   */
  pluginDataHistogramToJSON(): string {
    const histograms: Record<string, Record<string, number>> = {}
    this._pluginDataHistogram.forEach((histogram, pluginId) => {
      const buckets: Record<string, number> = {}
      histogram.forEach((count, bucket) => {
        buckets[bucket] = count
      })
      histograms[pluginId] = buckets
    })
    return JSON.stringify(histograms)
  }

  /**
   * Get all metric keys
   * Original: keys()
   */
  keys(): string[] {
    return Array.from(this._perfMetrics.keys())
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this._perfMetrics.clear()
    this._pluginDataHistogram.clear()
    this._stackInvariantFields = {}
    this._tmpStackInvariantFields.clear()
  }
}

/**
 * Browser Performance Profiler
 * Original: performance timing and profiling operations from 670985.ts, 609396.ts
 */
export class BrowserPerformanceProfiler {
  markers: Map<string, number> = new Map()
  measurements: PerformanceMeasurement[] = []
  isEnabled: boolean

  constructor(enabled = true) {
    this.isEnabled = enabled && this.isPerformanceAPIAvailable()
  }

  /**
   * Check if Performance API is available
   * Original: performance API availability checks
   */
  isPerformanceAPIAvailable(): boolean {
    return typeof performance !== 'undefined' &&
      'mark' in performance &&
      'measure' in performance &&
      'clearMarks' in performance
  }

  /**
   * Start performance span
   * Original: $$c1(e, t, i) from 670985.ts
   */
  startSpan(spanName: string, team?: string, startTime?: number): void {
    if (!this.isEnabled) return

    const actualStartTime = startTime || performance.now()
    this.markers.set(spanName, actualStartTime)

    if (performance.mark) {
      performance.mark(`${spanName}.startSpan`, {
        startTime: actualStartTime
      })
    }

    // Track vital start - would integrate with monitoring system
    this.trackVitalStart(spanName, team)
  }

  /**
   * End performance span
   * Original: $$u0(e, t) from 670985.ts
   */
  endSpan(spanName: string): number | null {
    if (!this.isEnabled) return null

    const startTime = this.markers.get(spanName)
    if (!startTime) return null

    const endTime = performance.now()
    const duration = endTime - startTime

    if (performance.mark && performance.measure) {
      performance.mark(`${spanName}.endSpan`, {
        startTime: endTime
      })

      try {
        const measure = performance.measure(spanName, `${spanName}.startSpan`, `${spanName}.endSpan`)

        // Store measurement
        this.measurements.push({
          name: spanName,
          startTime,
          endTime,
          duration: measure.duration
        })

        // Clean up marks
        performance.clearMarks(`${spanName}.startSpan`)
        performance.clearMarks(`${spanName}.endSpan`)
      } catch (error) {
        console.warn('Performance measurement failed:', error)
      }
    }

    // Track vital end
    this.trackVitalEnd(spanName)
    this.markers.delete(spanName)

    return duration
  }

  /**
   * Measure function execution time
   * Original: execution time measurement patterns
   */
  measureExecution<T>(name: string, fn: () => T): T {
    this.startSpan(name)
    try {
      const result = fn()
      return result
    } finally {
      this.endSpan(name)
    }
  }

  /**
   * Measure async function execution time
   */
  async measureAsyncExecution<T>(name: string, fn: () => Promise<T>): Promise<T> {
    this.startSpan(name)
    try {
      const result = await fn()
      return result
    } finally {
      this.endSpan(name)
    }
  }

  /**
   * Get performance measurements
   */
  getMeasurements(): PerformanceMeasurement[] {
    return [...this.measurements]
  }

  /**
   * Clear measurements
   */
  clearMeasurements(): void {
    this.measurements = []
    this.markers.clear()
  }

  // Private helper methods

  trackVitalStart(_spanName: string, _team?: string): void {
    // Would integrate with monitoring system like Sentry or DataDog
    // Removing debug logging to comply with lint rules
  }

  trackVitalEnd(_spanName: string): void {
    // Would integrate with monitoring system
    // Removing debug logging to comply with lint rules
  }
}

/**
 * Analytics Event Tracker
 * Original: analytics tracking from 449184.ts, 331365.ts, 293658.ts
 */
export class AnalyticsEventTracker {
  userId?: string
  anonymousId?: string
  sessionId: string
  events: AnalyticsEvent[] = []
  isEnabled: boolean

  constructor(isEnabled = true) {
    this.isEnabled = isEnabled
    this.sessionId = this.generateSessionId()
  }

  /**
   * Identify user for analytics
   * Original: identifyUser(e) from 449184.ts
   */
  identifyUser(userData: {
    id: string
    email?: string
    name?: string
    handle?: string
    track_tags?: string[]
    created_at?: string
    locale?: string
  }): void {
    if (!this.isEnabled || !userData.id) {
      this.logoutUser()
      return
    }

    this.userId = userData.id

    // Store user traits
    const traits = {
      email: userData.email,
      name: userData.name,
      username: userData.handle || userData.name,
      handle: userData.handle,
      utcOffset: new Date().getTimezoneOffset(),
      trackTags: userData.track_tags,
      createdAt: userData.created_at,
      locale: userData.locale
    }

    this.trackEvent('user_identified', traits)
  }

  /**
   * Logout user and clear analytics data
   * Original: logoutUser() from 449184.ts
   */
  logoutUser(): void {
    this.userId = undefined
    this.trackEvent('user_logged_out', {})
  }

  /**
   * Track analytics event
   * Original: track(e, t, i) from 449184.ts
   */
  trackEvent(eventType: string, properties: Record<string, any> = {}): void {
    if (!this.isEnabled) return

    const event: AnalyticsEvent = {
      eventType,
      properties,
      timestamp: Date.now(),
      userId: this.userId,
      sessionId: this.sessionId
    }

    this.events.push(event)

    // In real implementation, would send to analytics service
    // Note: Using console.warn to comply with lint rules
    if (event.eventType === 'user_identified' || event.eventType === 'user_logged_out') {
      console.warn('Analytics event tracked:', event.eventType)
    }
  }

  /**
   * Track performance event
   * Original: trackPerformanceEvent patterns from search results
   */
  trackPerformanceEvent(eventName: string, properties: Record<string, any> = {}): void {
    this.trackEvent('performance_event', {
      event_name: eventName,
      ...properties
    })
  }

  /**
   * Track defined analytics event
   * Original: trackDefinedEvent from 293658.ts
   */
  trackDefinedEvent(eventName: string, properties: Record<string, any> = {}): void {
    this.trackEvent('defined_event', {
      event_name: eventName,
      ...properties
    })
  }

  /**
   * Track user interaction event
   * Original: user interaction tracking from 331365.ts
   */
  trackUserInteraction(interactionType: string, elementId?: string, properties: Record<string, any> = {}): void {
    this.trackEvent('user_interaction', {
      interaction_type: interactionType,
      element_id: elementId,
      ...properties
    })
  }

  /**
   * Generate unique session ID
   */
  generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  /**
   * Get tracked events
   */
  getEvents(): AnalyticsEvent[] {
    return [...this.events]
  }

  /**
   * Clear tracked events
   */
  clearEvents(): void {
    this.events = []
  }
}

/**
 * Telemetry Data Collector
 * Original: telemetry collection from 815544.ts, 193284.ts
 */
export class TelemetryDataCollector {
  telemetryData: TelemetryData[] = []
  isEnabled: boolean
  sampleRate: number
  maxEventsPerPage: number
  service: string
  version: string

  constructor(config: {
    enabled?: boolean
    sampleRate?: number
    maxEventsPerPage?: number
    service: string
    version: string
  }) {
    this.isEnabled = config.enabled ?? true
    this.sampleRate = config.sampleRate ?? 0.1
    this.maxEventsPerPage = config.maxEventsPerPage ?? 15
    this.service = config.service
    this.version = config.version
  }

  /**
   * Collect telemetry data
   * Original: telemetry collection patterns from 815544.ts
   */
  collectTelemetryData(data: Partial<TelemetryData>): void {
    if (!this.isEnabled || !this.shouldSample()) return

    if (this.telemetryData.length >= this.maxEventsPerPage) return

    const telemetryEntry: TelemetryData = {
      type: 'telemetry',
      date: Date.now(),
      service: this.service,
      version: this.version,
      source: 'browser',
      runtime_env: this.getRuntimeEnvironment(),
      connectivity: this.getConnectivityInfo(),
      sdk_setup: 'npm',
      experimental_features: this.getExperimentalFeatures(),
      ...data
    }

    this.telemetryData.push(telemetryEntry)
  }

  /**
   * Check if telemetry should be sampled
   * Original: sampling logic from 815544.ts
   */
  shouldSample(): boolean {
    return Math.random() < this.sampleRate
  }

  /**
   * Get runtime environment information
   */
  getRuntimeEnvironment(): string {
    return typeof window !== 'undefined' ? 'browser' : 'node'
  }

  /**
   * Get connectivity information
   * Original: connectivity detection patterns
   */
  getConnectivityInfo(): any {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection
      return {
        effective_type: connection?.effectiveType,
        downlink: connection?.downlink,
        rtt: connection?.rtt
      }
    }
    return null
  }

  /**
   * Get experimental features
   */
  getExperimentalFeatures(): string[] {
    // Would check feature flags or experimental API usage
    return []
  }

  /**
   * Get collected telemetry data
   */
  getTelemetryData(): TelemetryData[] {
    return [...this.telemetryData]
  }

  /**
   * Clear telemetry data
   */
  clearTelemetryData(): void {
    this.telemetryData = []
  }
}

/**
 * Context Menu Performance Tracker
 * Original: context menu performance tracking from 293658.ts
 */
export class ContextMenuPerformanceTracker {
  profiler: BrowserPerformanceProfiler
  analytics: AnalyticsEventTracker
  type: string

  constructor(type: string, profiler: BrowserPerformanceProfiler, analytics: AnalyticsEventTracker) {
    this.type = type
    this.profiler = profiler
    this.analytics = analytics
  }

  /**
   * Start context menu load tracking
   * Original: start(e) from 293658.ts
   */
  start(menuId: string): void {
    const spanName = `${this.type}_${menuId}`
    this.profiler.startSpan(spanName)
  }

  /**
   * End and report context menu performance
   * Original: endAndReport(e) from 293658.ts
   */
  endAndReport(menuId: string): void {
    const spanName = `${this.type}_${menuId}`
    const duration = this.profiler.endSpan(spanName)

    if (duration !== null) {
      this.analytics.trackDefinedEvent('file_browser.total_context_menu_load_time', {
        durationMs: Math.round(duration),
        type: this.type
      })
    }
  }
}

/**
 * User Analytics Data Processor
 * Original: user analytics data processing from 931912.ts
 */
export class UserAnalyticsDataProcessor {
  /**
   * Process user analytics data
   * Original: analytics data extraction patterns from 931912.ts
   */
  processUserAnalyticsData(userAnalyticsData: UserAnalyticsData): Record<string, any> {
    return {
      num_edit_days_30_day: userAnalyticsData.num_edit_days_30_day,
      num_edit_days_60_day: userAnalyticsData.num_edit_days_60_day,
      num_edit_days_90_day: userAnalyticsData.num_edit_days_90_day,
      num_edits_30_day: userAnalyticsData.num_edits_30_day,
      num_edits_60_day: userAnalyticsData.num_edits_60_day,
      num_edits_90_day: userAnalyticsData.num_edits_90_day,
      num_files_created: userAnalyticsData.num_files_created,
      work_location: this.determineWorkLocation(userAnalyticsData)
    }
  }

  /**
   * Determine work location from analytics data
   * Original: work_location logic from 931912.ts
   */
  determineWorkLocation(data: UserAnalyticsData): string | undefined {
    // Note: work_location_no_answer property would need to be added to interface
    const workLocationNoAnswer = (data as any).work_location_no_answer

    if (workLocationNoAnswer) return 'no_answer'
    if (data.is_company) return 'company'
    if (data.is_agency) return 'agency'
    if (data.is_freelancer) return 'freelancer'
    if (data.is_school) return 'school'

    return undefined
  }
}

/**
 * Factory Functions
 */

/**
 * Create performance metrics manager
 */
export function createPerformanceMetricsManager(): PerformanceMetricsManager {
  return new PerformanceMetricsManager()
}

/**
 * Create browser performance profiler
 */
export function createBrowserPerformanceProfiler(enabled?: boolean): BrowserPerformanceProfiler {
  return new BrowserPerformanceProfiler(enabled)
}

/**
 * Create analytics event tracker
 */
export function createAnalyticsEventTracker(enabled?: boolean): AnalyticsEventTracker {
  return new AnalyticsEventTracker(enabled)
}

/**
 * Create telemetry data collector
 */
export function createTelemetryDataCollector(config: {
  enabled?: boolean
  sampleRate?: number
  maxEventsPerPage?: number
  service: string
  version: string
}): TelemetryDataCollector {
  return new TelemetryDataCollector(config)
}

/**
 * Create context menu performance tracker
 */
export function createContextMenuPerformanceTracker(
  type: string,
  profiler: BrowserPerformanceProfiler,
  analytics: AnalyticsEventTracker
): ContextMenuPerformanceTracker {
  return new ContextMenuPerformanceTracker(type, profiler, analytics)
}

/**
 * Create user analytics data processor
 */
export function createUserAnalyticsDataProcessor(): UserAnalyticsDataProcessor {
  return new UserAnalyticsDataProcessor()
}

/**
 * Convenience Exports
 */
export {
  AnalyticsEventTracker as Analytics,
  ContextMenuPerformanceTracker as ContextMenuTracker,
  PerformanceMetricsManager as Metrics,
  BrowserPerformanceProfiler as Profiler,
  TelemetryDataCollector as Telemetry,
  UserAnalyticsDataProcessor as UserAnalytics
}

/**
 * Default Export - Comprehensive Performance and Analytics System
 */
export default {
  PerformanceMetricsManager,
  BrowserPerformanceProfiler,
  AnalyticsEventTracker,
  TelemetryDataCollector,
  ContextMenuPerformanceTracker,
  UserAnalyticsDataProcessor,
  createPerformanceMetricsManager,
  createBrowserPerformanceProfiler,
  createAnalyticsEventTracker,
  createTelemetryDataCollector,
  createContextMenuPerformanceTracker,
  createUserAnalyticsDataProcessor
}
