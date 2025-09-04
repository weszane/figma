import { NodeAPISetupUtils } from '../modules'

/**
 * IncLoadingErrorLogger - Handles logging and telemetry for incremental loading errors.
 * Provides methods to log errors and conditionally log errors based on API call tracking.
 * Original: IncLoadingErrorLogger
 */
export class IncLoadingErrorLogger {
  options: any
  loggedApiCalls: Set<string>

  /**
   * Constructs a new IncLoadingErrorLogger.
   * @param options - Configuration options for the logger.
   */
  constructor(options: any) {
    this.options = options
    this.loggedApiCalls = new Set()
  }

  /**
   * Logs an error using the NodeAPISetupUtils telemetry system.
   * @param args - Arguments to pass to the telemetry logError function.
   */
  logError = NodeAPISetupUtils.setupTelemetryLogError

  /**
   * Conditionally logs an error if it hasn't been logged for the given API call.
   * Uses the NodeAPISetupUtils telemetry system.
   * @param args - Arguments to pass to the telemetry maybeLogError function.
   */
  maybeLogError = NodeAPISetupUtils.setupTelemetryMaybeLogError
}
