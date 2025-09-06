import { isNullish } from '../figma_app/95419'

/**
 * Throws an error if the condition is falsy.
 * @param condition - The condition to assert.
 * @param message - Optional message for the error.
 * @throws {Error} If the condition is falsy.
 * (Original: $$i5)
 */
export function assert(condition: unknown, message = ''): void {
  if (!condition) {
    throw new Error(`Assertion failure${message ? `: ${message}` : ''}`)
  }
}

/**
 * Throws an error if the value is nullish (null or undefined).
 * @param value - The value to check.
 * @param message - Optional error message.
 * @throws {Error} If the value is nullish.
 * (Original: $$a0)
 */
export function assertNotNullish<T>(value: T, message?: string): asserts value is NonNullable<T> {
  if (isNullish(value)) {
    throw new Error(message ?? 'Expected value not to be nullish')
  }
}

/**
 * Throws an error with the provided message or the stringified value.
 * @param value - The value to include in the error.
 * @param message - Optional error message.
 * @throws {Error} Always throws.
 * (Original: $$s7)
 */
export function throwTypeError(value: unknown, message?: string): never {
  throw new Error(message ?? `Uncaught type ${JSON.stringify(value)}`)
}

/**
 * No-op function.
 * (Original: $$o4)
 */
export function noop(_arg?: unknown): void {}

/**
 * Throws an error with the provided message.
 * @param message - The error message.
 * @throws {Error} Always throws.
 * (Original: $$l6)
 */
export function throwError(message: string): never {
  throw new Error(message)
}

/**
 * No-op debug function.
 * (Original: $$d1)
 */
export function debug(_arg1: unknown, _arg2: unknown, ..._rest: unknown[]): void {}

/**
 * Returns the second argument.
 * @param _arg1 - Ignored.
 * @param arg2 - Returned value.
 * @param _arg3 - Ignored.
 * @returns The second argument.
 * (Original: $$c2)
 */
export function returnSecond<T>(_arg1: unknown, arg2: T, _arg3?: unknown): T {
  return arg2
}

/**
 * No-op utility function.
 * (Original: $$u3)
 */
export function utilityNoop(_arg?: unknown): void {}

// Export aliases for backward compatibility with original names
export const B1 = assertNotNullish
export const KF = debug
export const S9 = returnSecond
export const d_ = utilityNoop
export const j = noop
export const vA = assert
export const wc = throwError
export const xb = throwTypeError
