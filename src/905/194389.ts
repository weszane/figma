// Original code from /Users/allen/sigma-main/src/905/194389.ts

/**
 * Custom error class that extends the built-in Error class.
 * Original name: $$n2
 */
export class CustomCauseError extends Error {
  /**
   * Constructs a new CustomError instance.
   * @param message - The error message.
   * @param cause - An optional cause error to set the cause property.
   */
  constructor(message: string, cause?: any) {
    super(message)
    if (cause) {
      this.cause = cause.cause
    }
  }
}

/**
 * Checks if the given object has a 'filePath' property.
 * Original name: $$r1
 * @param obj - The object to check.
 * @returns True if the object exists and has a 'filePath' property, false otherwise.
 */
export function hasFilePath(obj: any): boolean {
  return obj && 'filePath' in obj
}

/**
 * Checks if the error message indicates a stack overflow or excessive recursion.
 * Original name: $$a0
 * @param error - The error object to check.
 * @returns True if the error message includes stack overflow or recursion indicators, false otherwise.
 */
export function isStackOverflowError(error: Error): boolean {
  return error.message.includes('Maximum call stack size exceeded') || error.message.includes('too much recursion')
}

// Refactored export aliases to match new names
export const fF = isStackOverflowError
export const hi = hasFilePath
export const s9 = CustomCauseError
