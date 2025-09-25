/**
 * Base error class for custom errors.
 * Original name: $$n2
 */
export class BaseCustomError extends Error {
  reportToSentry: boolean;

  /**
   * @param reportToSentry - Whether to report this error to Sentry.
   */
  constructor(reportToSentry?: boolean) {
    super();
    this.reportToSentry = !!reportToSentry;
  }
}

/**
 * Error for internal content fill issues.
 * Original name: $$r1
 */
export class ContentFillInternalError extends BaseCustomError {
  /**
   * @param message - Error message.
   * @param options - Optional object with reportToSentry property.
   */
  constructor(message?: string, options?: { reportToSentry?: boolean }) {
    super(options?.reportToSentry);
    this.name = 'ContentFillInternalError';
    if (message) this.message = message;
  }
}

/**
 * Error for invalid selection.
 * Original name: $$a4
 */
export class InvalidSelectionError extends BaseCustomError {
  /**
   * @param message - Error message.
   * @param options - Optional object with reportToSentry property.
   */
  constructor(message?: string, options?: { reportToSentry?: boolean }) {
    super(options?.reportToSentry);
    this.name = 'InvalidSelectionError';
    if (message) this.message = message;
  }
}

/**
 * Error for layer generation failures.
 * Original name: $$s5
 */
export class LayerGenerationError extends BaseCustomError {
  /**
   * @param message - Error message.
   * @param options - Optional object with reportToSentry property.
   */
  constructor(message?: string, options?: { reportToSentry?: boolean }) {
    super(options?.reportToSentry);
    this.name = 'LayerGenerationError';
    if (message) this.message = message;
  }
}

/**
 * Error for too many nodes.
 * Original name: $$o3
 */
export class TooManyNodesError extends BaseCustomError {
  /**
   * @param message - Error message.
   * @param options - Optional object with reportToSentry property.
   */
  constructor(message?: string, options?: { reportToSentry?: boolean }) {
    super(options?.reportToSentry);
    this.name = 'TooManyNodesError';
    if (message) this.message = message;
  }
}

/**
 * Error for duplicate nodes.
 * Original name: $$l0
 */
export class NoDuplicateNodesError extends BaseCustomError {
  /**
   * @param message - Error message.
   * @param options - Optional object with reportToSentry property.
   */
  constructor(message?: string, options?: { reportToSentry?: boolean }) {
    super(options?.reportToSentry);
    this.name = 'NoDuplicateNodesError';
    if (message) this.message = message;
  }
}

// Refactored exports to match new class names
export const Aq = NoDuplicateNodesError;
export const IL = ContentFillInternalError;
export const JB = BaseCustomError;
export const Lg = TooManyNodesError;
export const SA = InvalidSelectionError;
export const YK = LayerGenerationError;
