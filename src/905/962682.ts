/**
 * Custom error class for application-specific errors
 * Originally: $$n0
 */
export class CustomError extends Error {
  /**
   * Creates a new CustomError instance
   * @param message - The error message
   */
  constructor(message: string) {
    super(message);
    // Maintain proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Alias for CustomError class
 * Originally: A (alias for $$n0)
 */
export const A = CustomError;
