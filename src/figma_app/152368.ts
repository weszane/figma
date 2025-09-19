import { F4 as getFigmaAppConfig } from '../figma_app/546509'

/** Timer onboarding event name (original: $$i5) */
export const TIMER_ONBOARDING_EVENT = 'timer-start-onboarding'

/** Maximum allowed timer duration in ms (original: $$a13) */
export const MAX_TIMER_DURATION_MS = 5999000

/** Timer threshold in ms (original: $$s11) */
export const TIMER_THRESHOLD_MS = 1250

/** Timer increment step (original: $$o1) */
export const TIMER_INCREMENT_STEP = 1

/**
 * Calculates the remaining time for a timer.
 * @param timer - Timer object
 * @returns Remaining time in ms, or -Infinity if timer is undefined
 * (original: $$l7)
 */
export function getTimeRemaining(timer: Timer | undefined): number {
  if (!timer)
    return -Infinity
  if (timer.isPaused)
    return timer.timeRemainingMs
  return timer.timeRemainingMs - performance.now() + timer.timeOrigin
}

/**
 * Checks if the timer is done.
 * @param timer - Timer object
 * @returns True if timer is done or invalid
 * (original: $$d4)
 */
export function isTimerDone(timer: Timer | undefined): boolean {
  const remaining = getTimeRemaining(timer)
  return !timer || timer.totalTimeMs === 0 || remaining <= -TIMER_THRESHOLD_MS
}

/**
 * Checks if the timer has finished.
 * @param timer - Timer object
 * @returns True if timer finished
 * (original: $$c6)
 */
export function isTimerFinished(timer: Timer | undefined): boolean {
  return getTimeRemaining(timer) <= 0 && !!timer?.totalTimeMs
}

/**
 * Checks if the timer is paused and has started.
 * @param timer - Timer object
 * @returns True if timer is paused and started
 * (original: $$u2)
 */
export function isTimerPausedAndStarted(timer: Timer | undefined): boolean {
  return !!timer?.isPaused && timer.totalTimeMs > 0 && timer.timeRemainingMs > 0 && timer.totalTimeMs !== timer.timeRemainingMs
}

/**
 * Converts minutes and seconds to total seconds.
 * @param time - Object with minutes and seconds
 * @returns Total seconds
 * (original: $$p9)
 */
export function getTotalSeconds(time: { minutes: number | string, seconds: number | string }): number {
  return Math.floor(60 * Number(time.minutes) + Number(time.seconds))
}

/**
 * Checks if timer can be incremented.
 * @param timer - Timer object
 * @param time - Object with minutes
 * @returns True if timer can be incremented
 * (original: $$_0)
 */
export function canIncrementTimer(timer: Timer | undefined, time: { minutes: string }): boolean {
  const done = isTimerDone(timer)
  const remaining = getTimeRemaining(timer)
  const minutes = parseInt(time.minutes)
  if (done)
    return (minutes || 0) + TIMER_INCREMENT_STEP <= 99
  return remaining + 60000 * TIMER_INCREMENT_STEP <= MAX_TIMER_DURATION_MS
}

/**
 * Checks if timer has run for at least 5 seconds and t >= 2.
 * @param timer - Timer object
 * @param t - Number
 * @returns True if timer has run for at least 5 seconds and t >= 2
 * (original: $$h12)
 */
export function hasTimerRunEnough(timer: Timer, t: number): boolean {
  const remaining = getTimeRemaining(timer)
  const elapsed = timer.totalTimeMs - remaining
  return t >= 2 && elapsed >= 5000
}

/**
 * Pads a number with leading zero if less than 10.
 * @param value - Number
 * @returns Padded string
 * (original: $$m10)
 */
export function padTime(value: number): string {
  return value < 10 ? `0${value}` : `${value}`
}

/**
 * Plays timer chime sound.
 * @param audio - HTMLAudioElement
 * @param volume - Volume (0-100)
 * (original: $$g8)
 */
export function playTimerChime(audio: HTMLAudioElement, volume: number): void {
  audio.volume = volume / 100
  audio.currentTime = 0
  audio.play().catch((err) => {
    if (err.name !== 'NotAllowedError')
      throw new Error(`Failed to play FigJam timer chimes: ${err}`)
  })
}

/**
 * Checks if timer should show on the left.
 * @returns True if timer should show on the left
 * (original: $$f3)
 */
export function shouldShowTimerOnLeft(): boolean {
  const config = getFigmaAppConfig()
  return !!config?.shouldShowTimerOnTheLeft
}

// Exported aliases for backward compatibility
export const $V = canIncrementTimer
export const AC = TIMER_INCREMENT_STEP
export const CM = isTimerPausedAndStarted
export const FR = shouldShowTimerOnLeft
export const G8 = isTimerDone
export const Hm = TIMER_ONBOARDING_EVENT
export const IQ = isTimerFinished
export const P$ = getTimeRemaining
export const PF = playTimerChime
export const RE = getTotalSeconds
export const YI = padTime
export const cu = TIMER_THRESHOLD_MS
export const fQ = hasTimerRunEnough
export const y0 = MAX_TIMER_DURATION_MS

/**
 * Timer type definition
 */
export interface Timer {
  isPaused: boolean
  timeRemainingMs: number
  timeOrigin: number
  totalTimeMs: number
}
