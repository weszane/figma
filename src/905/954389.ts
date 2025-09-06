/**
 * Handler function type for logging.
 */
export type LogHandler = (message: string, level: number, error?: unknown) => void

/**
 * Stores the current log handler.
 * @original n
 */
let currentLogHandler: LogHandler | null = null

/**
 * Sets the log handler function.
 * @param handler - The log handler to use.
 * @original $$r1
 */
export function setLogHandler(handler: LogHandler) {
  currentLogHandler = handler
}

/**
 * Logs a message using the current log handler, or falls back to console.error.
 * @param message - The log message.
 * @param level - The log level.
 * @param error - Optional error object.
 * @original $$a0
 */
export const logMessage: LogHandler = (message, level, error) => {
  if (currentLogHandler) {
    return currentLogHandler(message, level, error)
  }
  console.error(level, error)
}

/**
 * Converts a log level number to its string representation.
 * @param level - The log level.
 * @returns The string representation of the log level.
 * @original $$s2
 */
export function getLogLevelName(level: number): string | undefined {
  switch (level) {
    case 0:
      return 'debug'
    case 1:
      return 'info'
    case 2:
      return 'warning'
    case 3:
      return 'error'
    default:
      return undefined
  }
}

// Refactored exports for clarity and traceability
export const N7 = logMessage
export const pe = setLogHandler
export const v = getLogLevelName
