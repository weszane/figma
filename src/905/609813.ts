/**
 * TimerHandler manages timing, background/visibility state, and offline/disconnected events.
 * Original class name: $$n0
 */
export class TimerHandler {
  /** The performance-based start time (ms) */
  _startTime: number = performance.now()
  /** The epoch-based start time (ms) */
  _startEpochTime: number = Date.now()
  /** Timeout ID for scheduled timeout */
  _timerId: ReturnType<typeof setTimeout> | null = null
  /** Optional metadata associated with the timer */
  metadata: any = null
  /** Indicates if the timer has finished */
  finished: boolean = false
  /** Indicates if the document was backgrounded */
  backgrounded: boolean = false
  /** Indicates if the app was offline at start */
  wasOffline: boolean = false
  /** Indicates if the app was disconnected at start */
  wasDisconnected: boolean = false

  /**
   * Constructs a TimerHandler instance.
   * @param options - Timer options, may include onTimeout, timeoutMs, isConnectedToLG
   * @param metadata - Optional metadata to associate with the timer
   */
  constructor(
    options: {
      onTimeout?: (backgrounded: boolean, wasOffline: boolean, wasDisconnected: boolean) => void
      timeoutMs?: number
      isConnectedToLG?: boolean
    } = {},
    metadata?: any,
  ) {
    this.backgrounded = document.visibilityState === 'hidden'
    this.wasOffline = !navigator.onLine

    document.addEventListener('visibilitychange', this.onVisibilityChange)
    window.addEventListener('offline', this.onOffline)

    if (metadata) {
      this.metadata = metadata
    }

    if (options.onTimeout) {
      if (!options.timeoutMs) {
        throw new Error('onTimeout specified without timeoutMs')
      }
      this._timerId = setTimeout(() => {
        options.onTimeout(this.backgrounded, this.wasOffline, this.wasDisconnected)
      }, options.timeoutMs)
    }

    if (options.isConnectedToLG !== undefined) {
      this.wasDisconnected = !options.isConnectedToLG
    }
  }

  /** Returns the epoch-based start time (ms) */
  get startEpochTime(): number {
    return this._startEpochTime
  }

  /** Returns the performance-based start time (ms) */
  get startTime(): number {
    return this._startTime
  }

  /**
   * Marks the timer as finished, cleans up listeners and timers.
   * Original method name: finish
   * @returns Elapsed time in ms
   */
  finish = (): number => {
    if (this.finished) {
      console.debug('Timer already finished')
    }
    if (this._timerId) {
      clearTimeout(this._timerId)
    }
    this.finished = true
    document.removeEventListener('visibilitychange', this.onVisibilityChange)
    return Math.round(performance.now() - this._startTime)
  }

  /**
   * Returns the elapsed time in ms since timer started.
   * Original method name: getTime
   */
  getTime(): number {
    return Math.round(performance.now() - this._startTime)
  }

  /**
   * Handles document visibility changes.
   * Original method name: onVisibilityChange
   */
  onVisibilityChange = (): void => {
    if (document.visibilityState === 'hidden') {
      this.backgrounded = true
    }
  }

  /**
   * Handles offline event.
   * Original method name: onOffline
   */
  onOffline = (): void => {
    this.wasOffline = true
  }

  /**
   * Marks the timer as disconnected.
   * Original method name: markDisconnected
   */
  markDisconnected = (): void => {
    this.wasDisconnected = true
  }
}

/** Exported alias for TimerHandler (original export name: M) */
export const M = TimerHandler
