import { debugState } from "../905/407919"; // Store/State management (original: D)
import { sx } from "../905/449184"; // Analytics/Segment tracking (original: sx)
import { debounce } from "../905/915765"; // Debounce utility (original: debounce)

/**
 * Configuration constants for error tracking
 */
const ERROR_TRACKING_CONFIG = {
  MAX_ERRORS_PER_TYPE: 5,
  FLUSH_DEBOUNCE_DELAY: 1000, // 1 second
  MAX_ERROR_MESSAGE_LENGTH: 50,
} as const;

/**
 * Supported error types for widget error tracking
 */
type ErrorType =
  | "validation"
  | "invalid_prop"
  | "applying_prop"
  | "locked_down_api_usage"
  | "scene_divergence"
  | "widget_update_error";

/**
 * Widget context information for error tracking
 */
interface WidgetContext {
  widgetNodeID?: string;
  pluginID?: string;
  widgetName?: string;
  widgetVersionID?: string;
}

/**
 * Reported error information with context
 */
interface ReportedError extends WidgetContext {
  type: ErrorType;
  errors: Error[];
  isInPlaygroundFile: boolean;
}

/**
 * Error data sent to analytics service
 */
interface AnalyticsErrorData extends WidgetContext {
  type: ErrorType;
  fileKey: string | null;
  numErrors: number;
  errors: string;
  widgetNodeID: string;
}

/**
 * Widget Error Tracker - Manages error reporting and analytics for widget-related errors
 * Handles rate limiting, batching, and analytics integration
 *
 * Original class name: P (anonymous class)
 */
class WidgetErrorTracker {
  private readonly errorsReported: ReportedError[] = [];
  private readonly numErrorsReported: Record<ErrorType, number> = {
    validation: 0,
    invalid_prop: 0,
    applying_prop: 0,
    locked_down_api_usage: 0,
    scene_divergence: 0,
    widget_update_error: 0,
  };

  private readonly scheduleFlushErrors: () => void;

  constructor() {
    this.scheduleFlushErrors = debounce(() => {
      // Use setTimeout to add the delay that was originally hardcoded
      setTimeout(() => {
        this.sendSegmentErrors("validation");
        this.sendSegmentErrors("locked_down_api_usage");
        this.errorsReported.length = 0; // Clear errors array
      }, ERROR_TRACKING_CONFIG.FLUSH_DEBOUNCE_DELAY);
    });
  }

  /**
   * Checks if the current file is a playground file
   * Original: inline anonymous function
   */
  private isInPlaygroundFile(): boolean {
    if (!debugState || !debugState.getState()) {
      return false;
    }

    const selectedView = debugState.getState().selectedView;
    return Boolean(
      selectedView &&
        "isPlaygroundFile" in selectedView &&
        selectedView.isPlaygroundFile,
    );
  }

  /**
   * Internal method to track errors with rate limiting
   * Original method: trackErrorInner(e, t, i)
   *
   * @param errorType - Type of error being tracked
   * @param errors - Array of error instances
   * @param context - Widget context information
   */
  private trackErrorInner(
    errorType: ErrorType,
    errors: Error[],
    context: WidgetContext = {},
  ): void {
    // Early return if rate limit exceeded
    if (
      this.numErrorsReported[errorType] >=
      ERROR_TRACKING_CONFIG.MAX_ERRORS_PER_TYPE
    ) {
      return;
    }

    this.numErrorsReported[errorType] += 1;

    const errorReport: ReportedError = {
      type: errorType,
      errors,
      isInPlaygroundFile: this.isInPlaygroundFile(),
      ...context,
    };

    this.errorsReported.push(errorReport);
    this.scheduleFlushErrors();
  }

  /**
   * Track widget update errors
   * Original method: trackWidgetUpdateError(e, t)
   */
  trackWidgetUpdateError(error: Error, context?: WidgetContext): void {
    this.trackErrorInner("widget_update_error", [error], context);
  }

  /**
   * Track validation errors
   * Original method: trackValidationErrors(e, t)
   */
  trackValidationErrors(errors: Error[], context?: WidgetContext): void {
    this.trackErrorInner("validation", errors, context);
  }

  /**
   * Track locked down API usage errors
   * Original method: trackLockDownApiError(e, t)
   */
  trackLockDownApiError(error: Error, context?: WidgetContext): void {
    this.trackErrorInner("locked_down_api_usage", [error], context);
  }

  /**
   * Track invalid property errors
   * Original method: trackInvalidPropError(e, t)
   */
  trackInvalidPropError(error: Error, context?: WidgetContext): void {
    this.trackErrorInner("invalid_prop", [error], context);
  }

  /**
   * Track property application errors
   * Original method: trackPropApplicationError(e, t)
   */
  trackPropApplicationError(errors: Error[], context?: WidgetContext): void {
    this.trackErrorInner("applying_prop", errors, context);
  }

  /**
   * Track scene divergence errors
   * Original method: trackSceneDivergenceError(e, t)
   */
  trackSceneDivergenceError(error: Error, context?: WidgetContext): void {
    this.trackErrorInner("scene_divergence", [error], context);
  }

  /**
   * Groups errors by widget node ID for the specified error type
   * Original method: part of sendSegmentErrors logic
   */
  private groupErrorsByWidgetNode(
    errorType: ErrorType,
  ): Record<string, ReportedError> {
    const groupedErrors: Record<string, ReportedError> = {};

    const filteredErrors = this.errorsReported.filter(
      (error) => error.type === errorType,
    );

    for (const errorReport of filteredErrors) {
      const nodeId = errorReport.widgetNodeID;
      if (!nodeId) continue;

      if (!(nodeId in groupedErrors)) {
        groupedErrors[nodeId] = {
          ...errorReport,
          errors: [],
        };
      }

      groupedErrors[nodeId].errors.push(...errorReport.errors);
    }

    return groupedErrors;
  }

  /**
   * Formats error messages for analytics
   * Original: inline logic in sendSegmentErrors
   */
  private formatErrorMessages(errors: Error[]): string {
    return errors
      .map((error) =>
        error
          .toString()
          .slice(0, ERROR_TRACKING_CONFIG.MAX_ERROR_MESSAGE_LENGTH),
      )
      .join("\n");
  }

  /**
   * Gets current file key from application state
   * Original: inline logic in sendSegmentErrors
   */
  private getCurrentFileKey(): string | null {
    const state = debugState.getState();
    return state?.openFile?.key ?? null;
  }

  /**
   * Send batched errors to analytics service for a specific error type
   * Original method: sendSegmentErrors(e)
   *
   * @param errorType - Type of errors to send
   */
  private sendSegmentErrors(errorType: ErrorType): void {
    const groupedErrors = this.groupErrorsByWidgetNode(errorType);
    const currentFileKey = this.getCurrentFileKey();

    for (const [widgetNodeID, errorGroup] of Object.entries(groupedErrors)) {
      const analyticsData: AnalyticsErrorData = {
        type: errorType,
        fileKey: currentFileKey,
        numErrors: errorGroup.errors.length,
        errors: this.formatErrorMessages(errorGroup.errors),
        widgetNodeID,
        pluginID: errorGroup.pluginID,
        widgetName: errorGroup.widgetName,
        widgetVersionID: errorGroup.widgetVersionID,
      };

      sx("Widget Error", analyticsData);
    }
  }
}

/**
 * Global instance of the widget error tracker
 * Original export: P
 */
export const widgetErrorTracker = new WidgetErrorTracker();

// Maintain backward compatibility with original export name
export const P = widgetErrorTracker;
