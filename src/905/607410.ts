/**
 * Error stack history storage.
 * @original n
 */
let errorStackHistory: string[] = []

/**
 * Returns the current error stack history.
 * @returns {string[]} Array of error stack traces.
 * @original $$r2
 */
export function getErrorStackHistory(): string[] {
  return errorStackHistory
}

/**
 * Logs an error stack trace and returns the provided value.
 * @param value - The value to return.
 * @returns The provided value.
 * @original $$a0
 */
export function logErrorAndReturn<T>(value: T): T {
  // eslint-disable-next-line unicorn/error-message
  addErrorStack(new Error().stack || 'stack unavailable?')
  return value
}

/**
 * Adds an error stack trace to the history and removes it after 300ms.
 * @param stack - The error stack trace to add.
 * @original $$s1
 */
export function addErrorStack(stack: string): void {
  errorStackHistory.unshift(stack)
  setTimeout(() => {
    errorStackHistory = errorStackHistory.filter(item => item !== stack)
  }, 300)
}

// Refactored exports for compatibility with original names
export const WE = logErrorAndReturn
export const d4 = addErrorStack
export const fC = getErrorStackHistory
