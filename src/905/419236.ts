import type { Fn } from '../../../types/global'
import { ResourceStatus } from '../905/957591'

/**
 * Creates a deferred promise with exposed resolve and reject functions.
 * @returns [promise, resolve, reject]
 * @originalName $$r6
 */
export function createDeferredPromise<T>(): [Promise<T>, (value: T) => void, (reason?: any) => void] {
  let resolve: (value: T | PromiseLike<T>) => void
  let reject: (reason?: any) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return [promise, resolve!, reject!]
}

/**
 * Custom error class with sentry context.
 * @originalName a
 */
class SentryError extends Error {
  sentryContext: any
  constructor(message: string, sentryContext?: any) {
    super(message)
    this.sentryContext = sentryContext
  }
}

/**
 * Throws an error asynchronously if condition is falsy.
 * @originalName $$s3
 */
export function throwAsyncIf(
  condition: any,
  message: string,
  sentryContext?: any,
): void {
  if (!condition) {
    const error = new SentryError(message, sentryContext)
    setTimeout(() => {
      throw error
    })
  }
}

/**
 * Throws an error immediately if condition is falsy.
 * @originalName $$o10
 */
export function throwIf(
  condition: any,
  message: string,
  sentryContext?: any,
): void {
  if (!condition)
    throw new SentryError(message, sentryContext)
}

/**
 * No-op function.
 * @originalName $$l11
 */
export function noop(_?: any): void { }

/**
 * Deep compares two objects using JSON.stringify.
 * @originalName $$d7
 */
export function deepEqual(a: any, b: any): boolean {
  try {
    return JSON.stringify(a) === JSON.stringify(b)
  }
  catch {
    throwAsyncIf(false, 'Comparison of embedded objects failed')
    return false
  }
}

/**
 * Compares two objects for equality based on a list of fields and their types.
 * Handles datetime fields with getTime().
 * @originalName $$c0
 */
export function compareFields(
  objA: Record<string, any>,
  objB: Record<string, any>,
  fields: Array<[string, { def: { type: { kind: string } } }]>,
): boolean {
  for (const [field, meta] of fields) {
    if (meta.def.type.kind === 'datetime') {
      if (
        objA[field]?.getTime() !== objB[field]?.getTime()
        || ((!objA[field] || !objB[field]) && objA[field] !== objB[field])
      ) {
        return false
      }
    }
    else if (objA[field] !== objB[field]) {
      return false
    }
  }
  return true
}

/**
 * Compares two arrays of objects with fieldName and info properties for equality.
 * @originalName $$u1
 */
export function compareFieldInfoArrays(
  arrA: Array<{ fieldName: string, info: any }>,
  arrB: Array<{ fieldName: string, info: any }>,
): boolean {
  if (arrA.length !== arrB.length)
    return false
  const map = new Map<string, any>()
  arrB.forEach(({ fieldName, info }) => map.set(fieldName, info))
  for (const { fieldName, info } of arrA) {
    if (!map.has(fieldName) || map.get(fieldName) !== info)
      return false
  }
  return true
}

/**
 * No-op function.
 * @originalName $$p8
 */
export function noop2(): void { }

const ONCE_SYMBOL = Symbol('once')

/**
 * Ensures a function can only be called once.
 * @originalName $$h2
 */
export function once(fn: Fn & { [ONCE_SYMBOL]: boolean }): () => void {
  if ((fn)[ONCE_SYMBOL])
    return fn
  let called = false
  const wrapper = () => {
    if (!called) {
      called = true
      fn()
    }
  };
  (wrapper)[ONCE_SYMBOL] = true
  return wrapper
}

/**
 * Returns a promise that resolves after a given number of milliseconds.
 * @originalName $$g12
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Executes a function after a delay, catching and attaching the original error as cause.
 * @originalName $$f4
 */
export function delayedTryCatch(
  fn: () => void,
  ms: number,
): void {
  // eslint-disable-next-line unicorn/error-message
  const originalError = new Error()
  setTimeout(() => {
    try {
      fn()
    }
    catch (err: any) {
      err.cause = originalError
      return err
    }
  }, ms)
}

/**
 * Error thrown when max attempts are exhausted.
 * @originalName _
 */
class MaxAttemptError extends Error { }

/**
 * Exponential backoff utility with jitter.
 * @originalName $$A5
 */
export interface BackoffConfig {
  backoffInitialMs: number
  backoffMaxMs: number
  backoffMultiplier: number
  maxAttempt?: number
}

export class ExponentialBackoff {
  config: BackoffConfig
  timeoutMs: number
  count: number

  constructor(config: BackoffConfig) {
    this.config = config
    ExponentialBackoff.validateConfig(config)
    this.timeoutMs = this.jitter(config.backoffInitialMs)
    this.count = 0
  }

  /**
   * Returns the next backoff delay in ms.
   * Throws if max attempts are exhausted.
   */
  nextBackoffMs(): number {
    if (!this.shouldAttempt())
      throw new MaxAttemptError('Max attempt exhausted')
    const delay = this.timeoutMs
    this.count += 1
    this.timeoutMs = this.jitter(
      this.config.backoffInitialMs
      * this.config.backoffMultiplier ** this.count,
    )
    this.timeoutMs = Math.min(this.timeoutMs, this.config.backoffMaxMs)
    return delay
  }

  /**
   * Returns true if another attempt should be made.
   */
  shouldAttempt(): boolean {
    return (
      this.config.maxAttempt === undefined
      || this.config.maxAttempt > this.count
    )
  }

  /**
   * Resets the backoff state.
   */
  reset(): void {
    this.timeoutMs = this.config.backoffInitialMs
    this.count = 0
  }

  /**
   * Returns the number of attempts so far.
   */
  attemptsSoFar(): number {
    return this.count
  }

  /**
   * Applies jitter to a delay.
   */
  jitter(ms: number): number {
    return ms * (0.5 + Math.random())
  }

  /**
   * Validates the backoff configuration.
   */
  static validateConfig(config: BackoffConfig): void {
    if (config.backoffInitialMs <= 0)
      throw new Error('backoffInitialMs must be > 0')
    if (config.backoffMaxMs <= 0)
      throw new Error('backoffMaxMs must be > 0')
    if (config.backoffMultiplier < 1)
      throw new Error('backoffMultiplier must be >= 1')
  }
}

/**
 * Returns the data from a resource, or a fallback if the resource is null or errored.
 * @originalName $$y9
 */
export function getResourceDataOrFallback<T>(
  resource: any,
  fallback?: T,
): T {
  if (resource == null)
    return fallback
  if (
    typeof resource === 'object'
    && 'status' in resource
  ) {
    return resource.status === ResourceStatus.Error
      ? fallback
      : resource.data
  }
  return resource
}

// Export aliases for backward compatibility with original names
export const $W = compareFields
export const Ak = compareFieldInfoArrays
export const Oo = once
export const QI = throwAsyncIf
export const VG = delayedTryCatch
export const _c = ExponentialBackoff
export const dS = createDeferredPromise
export const jQ = deepEqual
export const lQ = noop2
export const oA = getResourceDataOrFallback
export const vA = throwIf
export const xb = noop
export const yy = delay
