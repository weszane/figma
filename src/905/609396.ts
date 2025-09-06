/**
 * Timer utility classes and performance analytics.
 * Original class names: $$r4, a, s, $$o5, d, u, p, m, $$h3, g, $$f0, _, $$b1
 */

let periodicCleanupInterval: ReturnType<typeof setInterval> | undefined

/**
 * Timer class for measuring elapsed time.
 * Original: $$r4
 */
export class Timer {
  elapsedTime = 0
  totalElapsedTime = 0
  startTime = 0
  callDepth = 0
  topLevelCallCount = 0
  totalCallCount = 0
  performanceNow: () => number

  constructor(performanceNow?: () => number) {
    this.performanceNow = performanceNow || (() => performance.now())
  }

  /**
   * Start the timer.
   */
  start(): void {
    if (this.callDepth === 0) {
      this.startTime = this.performanceNow()
      this.topLevelCallCount++
    }
    this.callDepth++
    this.totalCallCount++
  }

  /**
   * Stop the timer.
   */
  stop(): void {
    if (this.callDepth === 0) {
      // eslint-disable-next-line no-console
      console.debug('Called stop on an already-stopped timer')
      return
    }
    this.callDepth--
    if (this.callDepth === 0) {
      const elapsed = this.performanceNow() - this.startTime
      this.elapsedTime += elapsed
      this.totalElapsedTime += elapsed
    }
  }

  /**
   * Time a function execution.
   * @param fn Function to time.
   */
  time<T>(fn: () => T): T {
    this.start()
    const result = fn()
    this.stop()
    return result
  }

  /**
   * Static method to time a function.
   * @param fn Function to time.
   */
  static time<T>(fn: () => T): number {
    const timer = new Timer()
    timer.time(fn)
    return timer.getElapsedTime()
  }

  /**
   * Get elapsed time.
   */
  getElapsedTime(): number {
    return this.callDepth === 0
      ? this.elapsedTime
      : this.elapsedTime + this.performanceNow() - this.startTime
  }

  /**
   * Get total elapsed time.
   */
  getTotalElapsedTime(): number {
    return this.callDepth === 0
      ? this.totalElapsedTime
      : this.totalElapsedTime + this.performanceNow() - this.startTime
  }

  /**
   * Get top-level call count.
   */
  getTopLevelCallCount(): number {
    return this.topLevelCallCount
  }

  /**
   * Get total call count.
   */
  getTotalCallCount(): number {
    return this.totalCallCount
  }

  /**
   * Reset the timer.
   */
  reset(): void {
    if (this.callDepth > 0) {
      console.error('Cannot reset a running timer')
      return
    }
    this.startTime = 0
    this.elapsedTime = 0
    this.topLevelCallCount = 0
  }
}

/**
 * Timer group for managing multiple timers.
 * Original: a
 */
class TimerGroup {
  timerStack: { name: string, timer: Timer }[] = []
  startListeners: Set<(name: string, depth: number) => void> = new Set()
  stopListeners: Set<(name: string, elapsed: number) => void> = new Set()

  start(name: string): void {
    const timer = new Timer()
    this.timerStack.push({ name, timer })
    this.startListeners.forEach(listener => listener(name, 0))
    timer.start()
  }

  stop(name: string): void {
    const entry = this.timerStack.pop()
    if (!entry) {
      console.error(`Expected last started timer to be ${name}, but got an empty timer stack`)
      return
    }
    if (entry.name !== name) {
      console.error(`Expected last started timer to be ${name}, but got ${entry.name}`)
      return
    }
    entry.timer.stop()
    this.stopListeners.forEach(listener => listener(name, entry.timer.getElapsedTime()))
  }

  time<T>(name: string, fn: () => T): T {
    this.start(name)
    const result = fn()
    this.stop(name)
    return result
  }

  addStartListener(listener: (name: string, depth: number) => void): void {
    this.startListeners.add(listener)
  }

  removeStartListener(listener: (name: string, depth: number) => void): void {
    this.startListeners.delete(listener)
  }

  addStopListener(listener: (name: string, elapsed: number) => void): void {
    this.stopListeners.add(listener)
  }

  removeStopListener(listener: (name: string, elapsed: number) => void): void {
    this.stopListeners.delete(listener)
  }
}

/**
 * Timer node for hierarchical timer reporting.
 * Original: s
 */
class TimerNode {
  name: string
  hitCount = 0
  totalElapsedTime = 0
  maxElapsedTime = 0
  elapsedTimes: number[] = []
  children: TimerNode[] = []

  constructor(name: string) {
    this.name = name
  }

  reset(): void {
    this.hitCount = 0
    this.totalElapsedTime = 0
    this.maxElapsedTime = 0
    this.elapsedTimes = []
    this.children.forEach(child => child.reset())
  }
}

/**
 * Hierarchical timer group for reporting.
 * Original: $$o5
 */
export class HierarchicalTimerGroup {
  options: { bufferSize: number }
  timerGroup: TimerGroup
  rootNodes: TimerNode[] = []
  nodeStack: TimerNode[] = []
  warnOpenCount = 0

  constructor(options: { bufferSize: number }) {
    this.options = options
    this.timerGroup = new TimerGroup()

    this.timerGroup.addStartListener(this.onStart)
    this.timerGroup.addStopListener(this.onStop)
  }

  /**
   * Start a named timer.
   */
  start(name: string): void {
    this.timerGroup.start(name)
  }

  /**
   * Stop a named timer.
   */
  stop(name: string): void {
    this.timerGroup.stop(name)
  }

  /**
   * Time a function execution.
   */
  time<T>(name: string, fn: () => T): T {
    this.start(name)
    const result = fn()
    this.stop(name)
    return result
  }

  /**
   * Check if any timers are open.
   */
  areTimersOpen(): boolean {
    return this.nodeStack.length > 0
  }

  /**
   * Get timer report.
   */
  report(): TimerNode[] {
    if (this.nodeStack.length > 0) {
      this.warnOpenCount++
      if ((this.warnOpenCount & (this.warnOpenCount - 1)) === 0) {
        console.warn(
          'Asking for a report while some timers remain open',
          JSON.stringify(this.nodeStack.map(node => node.name)),
        )
      }
    }
    return this.rootNodes
  }

  /**
   * Reset all timers.
   */
  reset(): void {
    this.rootNodes.forEach(node => node.reset())
  }

  /**
   * Add start listener.
   */
  addStartListener(listener: (name: string, depth: number) => void): void {
    this.timerGroup.addStartListener(listener)
  }

  /**
   * Remove start listener.
   */
  removeStartListener(listener: (name: string, depth: number) => void): void {
    this.timerGroup.removeStartListener(listener)
  }

  /**
   * Add stop listener.
   */
  addStopListener(listener: (name: string, elapsed: number) => void): void {
    this.timerGroup.addStopListener(listener)
  }

  /**
   * Remove stop listener.
   */
  removeStopListener(listener: (name: string, elapsed: number) => void): void {
    this.timerGroup.removeStopListener(listener)
  }

  /**
   * Get buffer size.
   */
  getBufferSize(): number {
    return this.options.bufferSize
  }

  /**
   * Start event handler.
   * Original: onStart
   */
  private onStart = (name: string) => {
    let node: TimerNode | null = null
    let nodes = this.rootNodes
    if (this.nodeStack.length > 0) {
      nodes = this.nodeStack[this.nodeStack.length - 1].children
    }
    for (const n of nodes) {
      if (n.name === name) {
        node = n
        break
      }
    }
    if (!node) {
      node = new TimerNode(name)
      nodes.push(node)
    }
    this.nodeStack.push(node)
  }

  /**
   * Stop event handler.
   * Original: onStop
   */
  private onStop = (name: string, elapsed: number) => {
    const node = this.nodeStack.pop()
    if (!node) {
      console.error('Got onStop with an empty result stack')
      return
    }
    node.hitCount++
    node.totalElapsedTime += elapsed
    node.maxElapsedTime = Math.max(node.maxElapsedTime, elapsed)
    while (node.elapsedTimes.length >= this.options.bufferSize) node.elapsedTimes.shift()
    node.elapsedTimes.push(elapsed)
  }
}

// Performance API support check
const isPerfApiAvailable
  = typeof performance !== 'undefined'
    && 'mark' in performance
    && 'measure' in performance
    && 'clearMarks' in performance

/**
 * PerfTimer class for advanced performance measurement.
 * Original: d
 */
class PerfTimer extends Timer {
  static operationSeq = 0
  _isUnreliable = false
  name: string
  attributes: Record<string, any>
  group?: PerfTimerManager
  ref: WeakRef<PerfTimer>
  mark?: PerformanceMark
  id?: number

  constructor(name: string, attributes: Record<string, any>, group?: PerfTimerManager) {
    super()
    this.name = name
    this.attributes = attributes
    this.group = group
    this.ref = new WeakRef(this)
    PerfTimerRegistry.add(this)
  }

  start(): void {
    this.callDepth = 0
    this.reset()
    super.start()
    if (PerfTimerManager.isPerfReportEnabled && isPerfApiAvailable) {
      this.mark = performance.mark(this.performanceMarkStartName, {
        detail: this.attributes,
      })
    }
  }

  pause(): void {
    super.stop()
  }

  resume(): void {
    super.start()
  }

  get isUnreliable(): boolean {
    return this._isUnreliable || document.hidden
  }

  set isUnreliable(value: boolean) {
    this._isUnreliable = value
  }

  get isRunning(): boolean {
    return this.callDepth > 0
  }

  setTime(ms: number): void {
    this.elapsedTime = ms
  }

  stop(): number {
    super.stop()
    if (PerfTimerManager.isPerfReportEnabled && this.mark) {
      performance.mark(this.performanceMarkEndName, {
        detail: this.attributes,
      })
      try {
        performance.measure(
          this.performanceMeasureName,
          this.performanceMarkStartName,
          this.performanceMarkEndName,
        )
        performance.clearMarks(this.performanceMarkStartName)
        performance.clearMarks(this.performanceMarkEndName)
      }
      catch {}
      this.mark = undefined
    }
    if (this.group) {
      this.group.onStop(this)
      this.group = undefined
    }
    return this.getElapsedTime()
  }

  setAttribute(key: string, value: any): void {
    this.attributes[key] = value
  }

  getAttributes(): Record<string, any> {
    return this.attributes
  }

  stableId(): string {
    let key = this.attributes.key
    if (key === undefined) {
      if (this.id === undefined) {
        this.id = PerfTimer.operationSeq++
      }
      key = this.id.toString()
    }
    return key
  }

  get performanceMeasureName(): string {
    return `${this.name}::${this.stableId()}`
  }

  get performanceMarkStartName(): string {
    return `${this.performanceMeasureName}::start`
  }

  get performanceMarkEndName(): string {
    return `${this.performanceMeasureName}::end`
  }
}

/**
 * Registry for PerfTimer instances.
 * Original: u
 */
// Polyfill or type declaration for WeakRef if not available
declare class WeakRef<T> {
  constructor(value: T)
  deref(): T | undefined
}

// Polyfill or type declaration for FinalizationRegistry if not available
declare class FinalizationRegistry<T> {
  constructor(cleanup: (heldValue: T) => void)
  register(target: object, heldValue: T, unregisterToken?: object): void
  unregister(unregisterToken: object): void
}

class PerfTimerRegistry {
  static operations: Set<WeakRef<PerfTimer>> = new Set()
  static registry = new FinalizationRegistry(PerfTimerRegistry.registryCallback)

  static registryCallback(ref: WeakRef<PerfTimer>) {
    PerfTimerRegistry.operations.delete(ref)
  }

  static add(timer: PerfTimer) {
    PerfTimerRegistry.operations.add(timer.ref)
    PerfTimerRegistry.registry.register(timer, timer.ref, timer.ref)
  }

  static forEach(fn: (timer: PerfTimer) => void) {
    PerfTimerRegistry.operations.forEach((ref) => {
      const timer = ref.deref()
      if (timer) {
        fn(timer)
      }
      else {
        PerfTimerRegistry.operations.delete(ref)
        PerfTimerRegistry.registry.unregister(ref)
      }
    })
  }
}

/**
 * PerfTimer visibility change handler.
 * Original: p
 */
class PerfTimerVisibilityHandler {
  static add(timer: PerfTimer) {
    PerfTimerRegistry.add(timer)
  }

  static onVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      PerfTimerRegistry.forEach((timer) => {
        if (timer.isRunning)
          timer.isUnreliable = true
      })
    }
  }
}

/**
 * PerfTimerManager for managing PerfTimer instances.
 * Original: m
 */
export class PerfTimerManager {
  static isPerfReportEnabled = !isPerfApiAvailable && false
  static globalInstance: PerfTimerManager
  _keepResults = false
  operations: Map<string, Map<string | undefined, PerfTimer>> = new Map()

  static installCallbacks() {
    PerfTimerManager.installVisibilityChangeCallback()
    PerfTimerManager.installPeriodicCleanupCallback()
  }

  static global(): PerfTimerManager {
    return PerfTimerManager.globalInstance
  }

  static removePeriodicCleanupCallback() {
    if (periodicCleanupInterval !== undefined) {
      clearInterval(periodicCleanupInterval)
      periodicCleanupInterval = undefined
    }
  }

  static installVisibilityChangeCallback() {
    document.addEventListener('visibilitychange', () => {
      PerfTimerVisibilityHandler.onVisibilityChange()
      if (document.visibilityState === 'visible') {
        this.installPeriodicCleanupCallback()
      }
    })
  }

  static installPeriodicCleanupCallback(intervalMs = 60000, maxMs = 3600000) {
    this.removePeriodicCleanupCallback()
    periodicCleanupInterval = setInterval(() => {
      PerfTimerManager.globalInstance.cleanup(maxMs)
    }, intervalMs)
  }

  keepResults(keep?: boolean) {
    this._keepResults = keep === undefined ? true : keep
  }

  resetAllTimersBeforeTest() {
    this.operations = new Map()
  }

  start(name: string, attributes?: Record<string, any>): PerfTimer {
    const timer = this.getOrCreate(name, attributes)
    timer.start()
    return timer
  }

  getOrCreate(name: string, attributes?: Record<string, any>): PerfTimer {
    let attrMap = this.operations.get(name)
    if (!attrMap) {
      attrMap = new Map()
      this.operations.set(name, attrMap)
    }
    const key = attributes ? attributes.key : undefined
    let timer = attrMap.get(key)
    if (timer)
      return timer
    timer = new PerfTimer(name, attributes || {}, this)
    attrMap.set(key, timer)
    return timer
  }

  get(name: string, key?: string): PerfTimer | undefined {
    return this.operations.get(name)?.get(key)
  }

  getAll(name: string): Map<string | undefined, PerfTimer> | undefined {
    return this.operations.get(name)
  }

  delete(name?: string, key?: string): boolean {
    if (name) {
      return this.operations.get(name)?.delete(key) || false
    }
    else {
      this.operations.clear()
      return true
    }
  }

  pause(name: string, key?: string): boolean {
    const timer = this.operations.get(name)?.get(key)
    if (timer) {
      timer.pause()
      return true
    }
    this.maybeThrowError(name, key)
    return false
  }

  resume(name: string, key?: string): boolean {
    const timer = this.operations.get(name)?.get(key)
    if (timer) {
      timer.resume()
      return true
    }
    this.maybeThrowError(name, key)
    return false
  }

  trySetAttribute(name: string, key: string | undefined, attr: string, value: any) {
    const timer = this.operations.get(name)?.get(key)
    if (timer)
      timer.setAttribute(attr, value)
  }

  tryGetAttribute(name: string, key?: string): Record<string, any> {
    const timer = this.operations.get(name)?.get(key)
    return timer ? timer.getAttributes() : {}
  }

  reset(name: string, key?: string): boolean {
    const timer = this.operations.get(name)?.get(key)
    if (timer) {
      timer.reset()
      return true
    }
    return false
  }

  tryStop(name: string, key?: string): number {
    const timer = this.operations.get(name)?.get(key)
    return timer ? timer.stop() : 0
  }

  maybeThrowError(_name: string, _key?: string) {
    // No-op for compatibility
  }

  stop(name: string, key?: string): number {
    const timer = this.operations.get(name)?.get(key)
    if (timer) {
      return timer.stop()
    }
    this.maybeThrowError(name, key)
    return 0
  }

  onStop(timer: PerfTimer) {
    if (!this._keepResults) {
      this.delete(timer.name, timer.attributes.key)
    }
  }

  report(): Map<string, Map<string | undefined, PerfTimer>> {
    return this.operations
  }

  cleanup(maxMs = 3600000) {
    for (const [name, attrMap] of this.operations.entries()) {
      for (const timer of attrMap.values()) {
        if (timer.getElapsedTime() >= maxMs)
          timer.stop()
      }
      if (attrMap.size === 0)
        this.operations.delete(name)
    }
  }
}

PerfTimerManager.globalInstance = new PerfTimerManager()

/**
 * Distribution analytics for timing.
 * Original: $$f0
 */
export class DistributionAnalytics {
  private _distributions: Map<string, Distribution> = new Map()

  create(name: string, bins: number[]): void {
    this._distributions.set(name, new Distribution(name, bins))
  }

  add(name: string, value: number): void {
    this._distributions.get(name)?.add(value)
  }

  remove(name: string): void {
    this._distributions.delete(name)
  }

  reset(name: string): void {
    this._distributions.get(name)?.resetMetrics()
  }

  analyticsProperties(name: string): any {
    return this._distributions.get(name)?.analyticsProperties()
  }
}

/**
 * Distribution class for bucketed analytics.
 * Original: _
 */
class Distribution {
  maxMs = -1
  totalMs = 0
  count = 0
  meanDistanceSq = 0
  private _analytics_distribution_name: string
  _buckets: number[]
  _bins: number[]

  constructor(name: string, bins: number[]) {
    this._analytics_distribution_name = name
    this._bins = bins
    this._buckets = Array.from<number>({ length: bins.length }).fill(0)
  }

  add(ms: number): void {
    for (let i = 0; i < this._bins.length; i++) {
      if (ms <= this._bins[i]) {
        this._buckets[i]++
        break
      }
    }
    const prevMean = this.count > 0 ? this.totalMs / this.count : 0
    this.maxMs = Math.max(this.maxMs, ms)
    this.totalMs += ms
    this.count++
    const newMean = this.totalMs / this.count
    this.meanDistanceSq += (ms - prevMean) * (ms - newMean)
  }

  getMode(): { min: number, max: number } | null {
    if (this.count === 0)
      return null
    let maxBucket = 0
    let maxIndex = -1
    for (let i = 0; i < this._bins.length; i++) {
      if (this._buckets[i] > maxBucket) {
        maxBucket = this._buckets[i]
        maxIndex = i
      }
    }
    if (maxIndex < 0)
      return null
    return {
      min: maxIndex === 0 ? 0 : this._bins[maxIndex - 1],
      max: this._bins[maxIndex],
    }
  }

  toLogParams(): number[] {
    return [...this._buckets]
  }

  schema(): string[] {
    const schema: string[] = []
    for (let i = 0; i < this._bins.length; i++) {
      const min = i === 0 ? 0 : this._bins[i - 1]
      const max = this._bins[i] === Number.MAX_SAFE_INTEGER ? 'or_higher' : this._bins[i]
      schema.push(`count_${min}_to_${max}_ms`)
    }
    return schema
  }

  toPOJO(): Record<string, any> {
    const obj: Record<string, any> = {}
    for (let i = 0; i < this._bins.length; i++) {
      obj[this._bins[i]] = this._buckets[i]
    }
    obj._avg = this.totalMs / this.count
    obj._max = this.maxMs
    obj._stdd = this.count > 1 ? Math.sqrt(this.meanDistanceSq / (this.count - 1)) : 0
    obj._count = this.count
    obj._total = this.totalMs
    return obj
  }

  resetMetrics(): void {
    this._buckets = Array.from<number>({ length: this._bins.length }).fill(0)
    this.maxMs = 0
    this.count = 0
    this.totalMs = 0
    this.meanDistanceSq = 0
  }

  analyticsProperties(): any {
    return {
      schema: this.schema(),
      [this._analytics_distribution_name]: this.toLogParams(),
    }
  }
}

const FPS_BINS = [
  1,
  9,
  17,
  19,
  20,
  23,
  25,
  29,
  32,
  48,
  64,
  80,
  96,
  112,
  224,
  448,
  896,
  1792,
  3584,
  Number.MAX_SAFE_INTEGER,
]

/**
 * Helper for rounding.
 * Original: y
 */
function roundTo(e: number, decimals: number): number {
  const factor = 10 ** decimals
  return Math.floor(e * factor) / factor
}

/**
 * FPS analytics distribution.
 * Original: $$b1
 */
export class FPSDistribution extends Distribution {
  constructor() {
    super('fps', FPS_BINS)
  }

  toLogParams(): number[] {
    const params = [this.count, roundTo(this.totalMs / this.count, 2), roundTo(this.maxMs, 2)]
    for (let i = 0; i < this._bins.length; i++) params.push(this._buckets[i])
    return params
  }

  schema(): string[] {
    return ['frame_count', 'mean_frame_ms', 'max_frame_ms', ...super.schema()]
  }
}

// Export refactored names
export const Sp = DistributionAnalytics
export const UP = FPSDistribution
export const jk = PerfTimer
export const y7 = PerfTimerManager
export const M4 = Timer
export const t1 = HierarchicalTimerGroup
