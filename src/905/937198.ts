import { logDebug, logError, logWarning } from '../905/714362'

/**
 * Logs a debug message for CMS.
 * @param args - Arguments to log.
 * @originalName $$r0
 */
export function logCmsDebug(...args: any[]) {
  logDebug('CMS', ...args)
}

/**
 * Logs an error message for CMS and ensures Sentry error reporting.
 * @param args - Arguments to log. The third argument may be augmented.
 * @originalName $$a2
 */
export function logCmsError(...args: any[]) {
  const logArgs = [...args]
  if (logArgs[2]?.reportAsSentryError == null) {
    logArgs[2] = {
      ...logArgs[2],
      reportAsSentryError: true,
    }
  }
  logError('CMS', ...logArgs)
}

/**
 * Logs a warning message for CMS.
 * @param args - Arguments to log.
 * @originalName $$s1
 */
export function logCmsWarning(...args: unknown[]) {
  logWarning('CMS', ...args)
}

// Export aliases for backward compatibility and refactored usage
export const FU = logCmsDebug
export const Q2 = logCmsWarning
export const sD = logCmsError
