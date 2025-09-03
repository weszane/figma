/**
 * Represents an internal error with additional context.
 * (Original: $$n2)
 */
export class InternalError extends Error {
  internalError: unknown;

  /**
   * @param error The original error or error message.
   */
  constructor(error: unknown) {
    super(typeof error === 'string' ? error : (error as Error).message);
    this.internalError = error;
  }
}

/**
 * Represents a request error with additional context.
 * (Original: $$r0)
 */
export class RequestError extends Error {
  internalError: unknown;

  /**
   * @param error The original error or error message.
   */
  constructor(error: unknown) {
    super(typeof error === 'string' ? error : (error as Error).message);
    this.internalError = error;
  }
}

/**
 * Represents an authentication error with additional context.
 * (Original: $$a1)
 */
export class AuthError extends Error {
  internalError: unknown;

  /**
   * @param error The original error or error message.
   */
  constructor(error: unknown) {
    super(typeof error === 'string' ? error : (error as Error).message);
    this.internalError = error;
  }
}

// Export aliases for backward compatibility (Original: $f, AR, o9)
export const $f = RequestError;
export const AR = AuthError;
export const o9 = InternalError;
