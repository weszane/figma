import { datadogRum } from '@datadog/browser-rum';
// Imports refactored to match new exported names
import { ServiceCategories } from '../905/165054';
import { LogLevelStr, PriorityStr } from '../905/361972';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { getFeatureFlags } from '../905/601108';
import { isDebugFlowActive } from '../905/667887';

/**
 * WeakMaps for storing FPS and frame time data for DurationVital
 * (original: c, u)
 */
const fpsDataMap = new WeakMap<DurationVital, Array<{
  timestamp: number;
  fps: number;
}>>();
const frameTimeDataMap = new WeakMap<DurationVital, number[]>();

/**
 * ObservabilityClient provides methods for logging actions, timings, errors, vitals, and user flows.
 * (original: $$p0)
 */
class ObservabilityClient {
  isEnabled: boolean;
  constructor() {
    this.isEnabled = !!getFeatureFlags().observability_client;
  }

  /**
   * Add an action to Datadog RUM.
   */
  addAction(name: string, team: string, level: LogLevelStr, context?: Record<string, any>, options?: {
    forceEnable?: boolean;
  }) {
    if (options?.forceEnable || this.isEnabled && getFeatureFlags().datadog_rum_fs_action_logger) {
      if (level !== LogLevelStr.DEBUG || isDebugFlowActive()) {
        datadogRum?.addAction(`${name} [${team}]`, {
          ...context,
          level,
          team
        });
      }
    }
  }

  /**
   * Add a timing to Datadog RUM.
   */
  addTiming(name: string, duration: number, level: LogLevelStr) {
    if (this.isEnabled && (level !== LogLevelStr.DEBUG || isDebugFlowActive())) {
      datadogRum?.addTiming(name, duration);
    }
  }

  /**
   * Add an error to Datadog RUM.
   */
  addError(error: Error, team: string, context?: Record<string, any>) {
    if (this.isEnabled) {
      datadogRum?.addError(error, {
        ...context,
        team
      });
    }
  }

  /**
   * Log a vital metric to Datadog RUM.
   */
  logVital(name: string, {
    level,
    startTime,
    duration,
    description,
    context
  }: {
    level: LogLevelStr;
    startTime: number;
    duration: number;
    description?: string;
    context?: Record<string, any>;
  }) {
    if (this.isEnabled && (level !== LogLevelStr.DEBUG || isDebugFlowActive())) {
      if (startTime < performance.timeOrigin) {
        // Warn if timestamp is relative, not epoch
        console.warn('You appear to be logging a relative timestamp and not an epoch timestamp. Try adding performance.timeOrigin to the timestamp.');
      }
      datadogRum?.addDurationVital(name, {
        startTime,
        duration,
        description,
        context
      });
    }
  }

  /**
   * Measure a synchronous callback as a vital.
   */
  measureCallbackAsVital<T>(name: string, callback: () => T): T {
    this.startVital(name);
    const result = callback();
    this.stopVital(name);
    return result;
  }

  /**
   * Measure an async callback as a vital.
   */
  async measureCallbackAsyncAsVital<T>(name: string, callback: () => Promise<T>): Promise<T> {
    this.startVital(name);
    const result = await callback();
    this.stopVital(name);
    return result;
  }

  /**
   * Create a new DurationVital instance.
   */
  createVital(name: string, {
    level,
    description,
    context,
    trackFps
  }: {
    level: LogLevelStr;
    description?: string;
    context?: Record<string, any>;
    trackFps?: boolean;
  }) {
    return new DurationVital(name, {
      level,
      description,
      context,
      trackFps
    });
  }

  /**
   * Start a vital metric.
   */
  startVital(name: string, {
    level = LogLevelStr.INFO,
    description,
    context
  }: {
    level?: LogLevelStr;
    description?: string;
    context?: Record<string, any>;
  } = {}) {
    if (this.isEnabled && (level !== LogLevelStr.DEBUG || isDebugFlowActive())) {
      datadogRum?.startDurationVital(name, {
        description,
        context
      });
    }
  }

  /**
   * Stop a vital metric.
   */
  stopVital(name: string, {
    level = LogLevelStr.INFO,
    context
  }: {
    level?: LogLevelStr;
    context?: Record<string, any>;
  } = {}) {
    if (this.isEnabled && (level !== LogLevelStr.DEBUG || isDebugFlowActive())) {
      datadogRum?.stopDurationVital(name, {
        context
      });
    }
  }

  /**
   * Start a vital for debugging.
   */
  startVitalForDebugging(name: string, {
    description,
    context
  }: {
    description?: string;
    context?: Record<string, any>;
  } = {}) {
    this.startVital(name, {
      level: LogLevelStr.DEBUG,
      description,
      context
    });
  }

  /**
   * Stop a vital for debugging.
   */
  stopVitalForDebugging(name: string, {
    context
  }: {
    context?: Record<string, any>;
  } = {}) {
    this.stopVital(name, {
      level: LogLevelStr.DEBUG,
      context
    });
  }

  /**
   * Set a global context property for Datadog RUM.
   */
  setGlobalContext(key: string, value: any) {
    if (this.isEnabled) {
      datadogRum?.setGlobalContextProperty(key, value);
    }
  }

  /**
   * Set a view context property for Datadog RUM.
   */
  setViewContext(key: string, value: any) {
    if (this.isEnabled) {
      datadogRum?.setViewContextProperty(key, value);
    }
  }

  /**
   * Start a user flow and return a UserFlow instance.
   */
  startUserFlow({
    name,
    team,
    priority,
    trackFps,
    context,
    eventOptions
  }: {
    name: string;
    team: string;
    priority?: PriorityStr;
    trackFps?: boolean;
    context?: Record<string, any>;
    eventOptions?: Record<string, any>;
  }) {
    return new UserFlow({
      name,
      team,
      priority: priority ?? PriorityStr.P2,
      trackFps,
      context,
      eventOptions
    });
  }
}
export const observabilityClient = new ObservabilityClient();
/**
 * UserFlow tracks a user flow and its associated vitals and events.
 * (original: m)
 */
class UserFlow {
  public context: Record<string, any>;
  ended: boolean;
  name: string;
  eventOptions?: Record<string, any>;
  trackFps?: boolean;
  internalDuration: DurationVital;
  constructor({
    name,
    team,
    priority,
    trackFps,
    context,
    eventOptions
  }: {
    name: string;
    team: string;
    priority: PriorityStr;
    trackFps?: boolean;
    context?: Record<string, any>;
    eventOptions?: Record<string, any>;
  }) {
    this.context = {};
    this.ended = false;
    this.name = name;
    this.context.flowName = name;
    this.context.team = team;
    this.context.priority = priority;
    this.eventOptions = eventOptions;
    this.trackFps = trackFps;
    this.internalDuration = new DurationVital(`${this.name}`, {
      level: LogLevelStr.INFO,
      team,
      trackFps: trackFps ?? true,
      context
    });
    this.internalDuration.start();
  }

  /**
   * Start a named duration vital within the flow.
   */
  startDuration(name: string, options: {
    level?: LogLevelStr;
    description?: string;
  } = {}) {
    const vital = new DurationVital(`${this.name}.${name}`, {
      level: options.level ?? LogLevelStr.INFO,
      description: options.description,
      context: this.context,
      trackFps: this.trackFps ?? false,
      onStop: duration => {
        this.context[name] = duration;
      }
    });
    vital.start();
    return vital;
  }

  /**
   * Measure a synchronous callback as a duration.
   */
  measureDuration<T>(name: string, callback: () => T, options?: {
    level?: LogLevelStr;
    description?: string;
  }): T {
    const vital = this.startDuration(name, options);
    try {
      return callback();
    } finally {
      vital.stop();
    }
  }

  /**
   * Measure an async callback as a duration.
   */
  async measureDurationAsync<T>(name: string, callback: () => Promise<T>, options?: {
    level?: LogLevelStr;
    description?: string;
  }): Promise<T> {
    const vital = this.startDuration(name, options);
    try {
      return await callback();
    } finally {
      vital.stop();
    }
  }

  /**
   * Measure a timer for a synchronous callback.
   */
  measureTimer<T>(name: string, callback: () => T): T {
    const start = performance.now();
    try {
      return callback();
    } finally {
      const duration = performance.now() - start;
      this.context[name] = duration;
      observabilityClient.addTiming(`${this.name}.${name}`, duration, LogLevelStr.INFO);
    }
  }

  /**
   * Measure a timer for an async callback.
   */
  async measureTimerAsync<T>(name: string, callback: () => Promise<T>): Promise<T> {
    const start = performance.now();
    try {
      return await callback();
    } finally {
      const duration = performance.now() - start;
      this.context[name] = duration;
      observabilityClient.addTiming(`${this.name}.${name}`, duration, LogLevelStr.INFO);
    }
  }

  /**
   * Create a vital metric within the flow.
   */
  createVital(name: string, {
    level,
    description,
    context
  }: {
    level: LogLevelStr;
    description?: string;
    context?: Record<string, any>;
  }) {
    return new DurationVital(name, {
      level,
      description,
      context
    });
  }

  /**
   * Add context to the flow and its internal duration.
   */
  addContext(context: Record<string, any>) {
    Object.assign(this.context, context);
    this.internalDuration.addContext(context);
  }

  /**
   * End the flow and stop its internal duration.
   */
  end() {
    if (!this.ended) {
      this.ended = true;
      this.internalDuration.stop();
    }
  }

  /**
   * Track an analytics event for the flow.
   */
  trackEvent(eventName: string, eventContext?: Record<string, any>, eventOptions?: Record<string, any>) {
    trackEventAnalytics(eventName, {
      ...this.context,
      ...eventContext
    }, {
      ...this.eventOptions,
      ...eventOptions
    });
  }

  /**
   * Track a defined analytics event for the flow.
   */
  trackDefinedEvent(eventName: string, eventContext: Record<string, any> = {}) {
    analyticsEventManager.trackDefinedEvent(eventName, {
      ...this.context,
      ...eventContext
    });
  }
}

/**
 * DurationVital tracks a vital metric's duration and optionally FPS/frame time stats.
 * (original: h)
 */
class DurationVital {
  started: boolean;
  stopped: boolean;
  startTime: number;
  fpsMonitorId: number | null;
  frameCount: number;
  lastFpsUpdate: number;
  name: string;
  description?: string;
  context: Record<string, any>;
  level: LogLevelStr;
  trackFps: boolean;
  team: string;
  fpsCollectionDurationMs: number;
  onStop?: (duration: number, fpsStats?: any, frameTimeStats?: any) => void;
  constructor(name: string, {
    level,
    description,
    team,
    context,
    trackFps = false,
    fpsCollectionDurationMs = 180_000,
    onStop
  }: {
    level: LogLevelStr;
    description?: string;
    team?: string;
    context?: Record<string, any>;
    trackFps?: boolean;
    fpsCollectionDurationMs?: number;
    onStop?: (duration: number, fpsStats?: any, frameTimeStats?: any) => void;
  }) {
    this.started = false;
    this.stopped = false;
    this.startTime = 0;
    this.fpsMonitorId = null;
    this.frameCount = 0;
    this.lastFpsUpdate = 0;
    this.name = name;
    this.description = description;
    this.context = context ?? {};
    this.level = level;
    this.trackFps = trackFps && !!getFeatureFlags().observability_client_fps;
    this.team = team ?? ServiceCategories.UNOWNED;
    this.fpsCollectionDurationMs = Math.min(fpsCollectionDurationMs, 180_000);
    this.onStop = onStop;
  }

  /**
   * Start monitoring frame rate for FPS stats.
   */
  startFrameRateMonitoring() {
    if (this.fpsMonitorId !== null) return;
    this.frameCount = 0;
    this.lastFpsUpdate = performance.now();
    fpsDataMap.set(this, []);
    frameTimeDataMap.set(this, []);
    let prevTime = performance.now();
    const monitor = () => {
      const now = performance.now();
      const frameDuration = now - prevTime;
      const frameTimes = this.getFrameTimeData();
      frameTimes && frameTimes.push(frameDuration);
      prevTime = now;
      this.frameCount++;
      const elapsed = now - this.lastFpsUpdate;
      const totalElapsed = now - this.startTime;
      if (elapsed >= 1000) {
        const fps = Math.round(1000 * this.frameCount / elapsed);
        const fpsStats = this.getFpsData();
        fpsStats && fpsStats.push({
          timestamp: now,
          fps
        });
        this.frameCount = 0;
        this.lastFpsUpdate = now;
      }
      if (!this.stopped && totalElapsed < this.fpsCollectionDurationMs) {
        this.fpsMonitorId = requestAnimationFrame(monitor);
      } else if (!this.stopped) {
        this.stopFpsMonitoring();
      }
    };
    this.fpsMonitorId = requestAnimationFrame(monitor);
  }

  /**
   * Stop FPS monitoring and add stats to context.
   */
  stopFpsMonitoring() {
    if (this.fpsMonitorId !== null) {
      cancelAnimationFrame(this.fpsMonitorId);
      this.fpsMonitorId = null;
      const fpsStats = calculateFpsStats(this.getFpsData());
      const frameTimeStats = calculateFrameTimeStats(this.getFrameTimeData());
      this.addContext({
        fpsStats,
        frameTimeStats
      });
    }
  }

  /**
   * Get frame time data array.
   */
  getFrameTimeData(): number[] | undefined {
    return frameTimeDataMap.get(this);
  }

  /**
   * Get FPS data array.
   */
  getFpsData(): Array<{
    timestamp: number;
    fps: number;
  }> | undefined {
    return fpsDataMap.get(this);
  }

  /**
   * Start the vital metric.
   */
  start() {
    if (this.started) {
      observabilityClient.addError(new Error(`DurationVital ${this.name} already started`), ServiceCategories.UNOWNED);
      return;
    }
    if (this.level !== LogLevelStr.DEBUG || isDebugFlowActive()) {
      this.startTime = performance.now();
      this.started = true;
      if (this.trackFps) this.startFrameRateMonitoring();
    }
  }

  /**
   * Stop the vital metric and log it.
   */
  stop() {
    if (this.stopped || !this.started) {
      observabilityClient.addError(new Error(`DurationVital ${this.name} ${this.stopped ? 'already stopped' : 'stopped but never started'}`), this.team);
      return;
    }
    if (this.level === LogLevelStr.DEBUG && !isDebugFlowActive()) return;
    this.stopFpsMonitoring();
    const duration = performance.now() - this.startTime;
    const epochStartTime = this.startTime + performance.timeOrigin;
    observabilityClient.logVital(this.name, {
      level: this.level,
      startTime: epochStartTime,
      duration,
      description: this.description,
      context: this.context
    });
    this.onStop?.(duration, this.context?.fpsStats, this.context?.frameTimeStats);
    this.stopped = true;
  }

  /**
   * Add context to the vital metric.
   */
  addContext(context: Record<string, any>) {
    this.context = {
      ...this.context,
      ...context
    };
  }
}

/**
 * Calculate FPS statistics from FPS data.
 * (original: anonymous function in stopFpsMonitoring)
 */
function calculateFpsStats(data?: Array<{
  timestamp: number;
  fps: number;
}>): {
  average: number;
  min: number;
  max: number;
  median: number;
  p90: number;
  samples: number;
} | null {
  if (!data?.length) return null;
  const fpsValues = data.map(d => d.fps).sort((a, b) => a - b);
  return {
    average: Math.round(fpsValues.reduce((sum, v) => sum + v, 0) / fpsValues.length),
    min: Math.min(...fpsValues),
    max: Math.max(...fpsValues),
    median: fpsValues[Math.floor(fpsValues.length / 2)] || 0,
    p90: fpsValues[Math.floor(0.1 * fpsValues.length)] || 0,
    samples: data.length
  };
}

/**
 * Calculate frame time statistics from frame time data.
 * (original: anonymous function in stopFpsMonitoring)
 */
function calculateFrameTimeStats(data?: number[]): {
  count: number;
  avg: number;
  min: number;
  max: number;
  median: number;
  p90: number;
  p95: number;
  p99: number;
  stddev: number;
  inferredFps: number;
  percentAbove30ms: number;
  percentAbove50ms: number;
} | null {
  if (!data?.length) return null;
  data.sort((a, b) => a - b);
  const avg = data.reduce((sum, v) => sum + v, 0) / data.length;
  const stddev = Math.sqrt(data.map(v => (v - avg) ** 2).reduce((sum, v) => sum + v, 0) / data.length);
  const r = Math.floor(0.9 * data.length);
  const a = Math.floor(0.95 * data.length);
  const s = Math.floor(0.99 * data.length);
  const percentAbove30ms = data.filter(v => v > 30).length / data.length;
  const percentAbove50ms = data.filter(v => v > 50).length / data.length;
  return {
    count: data.length,
    avg,
    min: data[0] ?? 0,
    max: data[data.length - 1] ?? 0,
    median: data[Math.floor(0.5 * data.length)] ?? 0,
    p90: data[r] ?? data[data.length - 1] ?? 0,
    p95: data[a] ?? data[data.length - 1] ?? 0,
    p99: data[s] ?? data[data.length - 1] ?? 0,
    stddev,
    inferredFps: 1000 / avg,
    percentAbove30ms,
    percentAbove50ms
  };
}

// Export refactored ObservabilityClient as J6 for compatibility
export const J6 = observabilityClient;
