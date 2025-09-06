/* eslint-disable no-console */
import { addBreadcrumb, captureException } from '@sentry/browser'
import { getSentryConfig } from '../905/256712'
import { y as _$$y } from '../905/270963'
import { addToMultiValueMapAtom } from '../905/755472'
import { getLogLevelName } from '../905/954389'
import { NUh } from '../figma_app/763686'
import { withScope } from '../vendor/325489'

/**
 * Sentry configuration instance.
 * @original u
 */
let sentryConfig = getSentryConfig()

/**
 * Logs an error message.
 * @original $$p4
 */
export function logError(category: string, message: string, data?: any, options?: Partial<LogOptions>) {
  logWithLevel('error', category, message, data, options)
}

/**
 * Logs a warning message.
 * @original $$m5
 */
export function logWarning(
  category: string,
  message: string,
  data?: any,
  options?: Partial<LogOptions>,
) {
  logWithLevel('warning', category, message, data, options)
}

/**
 * Logs a debug message.
 * @original $$h0
 */
export function logDebug(
  category: string,
  message: string,
  data?: any,
  options?: Partial<LogOptions>,
) {
  logWithLevel('debug', category, message, data, options)
}

/**
 * Logs an info message.
 * @original $$g1
 */
export function logInfo(category: string, message: string, data?: any, options?: Partial<LogOptions>) {
  logWithLevel('info', category, message, data, options)
}

/**
 * Logs a message with custom severity and additional metadata.
 * @original $$f2
 */
export function logCustom(
  severity: number,
  category: string,
  message: string,
  filePath: string,
  lineNumber: number,
  data?: any,
  options: Partial<LogOptions> = {},
) {
  const level = getLogLevelName(severity)
  if (!level)
    throw new Error('unknown severity')
  const mergedOptions: LogOptions = {
    ...options,
    filePath,
    lineNumber,
  }
  logWithLevel(level, category, message, data, mergedOptions)
}

/**
 * Sets the mode event handler.
 * @original $$A3
 */
let modeEventHandler: ModeEventHandler | null = null
export function setModeEventHandler(handler: ModeEventHandler) {
  modeEventHandler = handler
}

/**
 * Logging options type.
 */
export interface LogOptions {
  logToConsole?: typeof NUh
  createSentryBreadcrumb?: boolean
  modeEventName?: string
  forwardToDatadog?: boolean
  figmentOnly?: boolean
  reportAsSentryError?: boolean
  includePayloadAsTags?: boolean
  filePath?: string
  lineNumber?: number
  reportOnFigmaScopeGuid?: string
}

/**
 * Mode event handler type.
 */
export type ModeEventHandler = (
  eventName: string,
  data?: any,
  forwardToDatadog?: boolean
) => void

/**
 * Logs a message with the specified level and options.
 * @original y
 */
function logWithLevel(
  level: string,
  category: string,
  message: string,
  data?: any,
  options?: Partial<LogOptions>,
) {
  const opts: LogOptions = {
    logToConsole: NUh.DEFAULT,
    createSentryBreadcrumb: true,
    modeEventName: '',
    forwardToDatadog: false,
    figmentOnly: false,
    reportAsSentryError: false,
    includePayloadAsTags: false,
    ...options,
  }

  // Console logging
  if (
    opts.logToConsole === NUh.ALWAYS
    || (opts.logToConsole === NUh.DEFAULT && sentryConfig.slogToConsole)
  ) {
    ({
      debug: console.debug,
      info: console.info,
      warning: console.warn,
      error: console.error,
    })[level]?.call(console, category, message, data)
  }
  else {
    const mobile = (window as any).FigmaMobile
    mobile?.logMessageToNative
    && mobile.logMessageToNative({
      severity: level,
      category,
      message,
      filePath: opts.filePath,
      lineNumber: opts.lineNumber,
      data,
    })
  }

  // Sentry breadcrumb
  if (opts.createSentryBreadcrumb && sentryConfig.enabled && level) {
    const breadcrumb: any = { level }
    if (message)
      breadcrumb.message = message
    if (data)
      breadcrumb.data = data
    if (category)
      breadcrumb.category = category
    addBreadcrumb(breadcrumb)
  }

  // Sentry error reporting
  if (opts.reportAsSentryError) {
    const error: any = new Error(category ? `[${category}] ${message}` : message)
    if (opts.filePath) {
      error.filePath = opts.filePath
      error.lineNumber = opts.lineNumber
    }
    if (opts.includePayloadAsTags) {
      withScope((scope) => {
        if (data) {
          for (const [key, value] of Object.entries(data)) {
            scope.setTag(key, value)
          }
        }
        captureException(error)
      })
    }
    else {
      captureException(error)
    }
  }

  // Figma scope reporting
  if (opts.reportOnFigmaScopeGuid) {
    addToMultiValueMapAtom(opts.reportOnFigmaScopeGuid, {
      severity: level,
      message,
      data,
      filePath: opts.filePath,
      lineNumber: opts.lineNumber,
      timestamp: Date.now(),
    })
  }

  // Mode event handler
  if (opts.modeEventName && modeEventHandler) {
    modeEventHandler(
      normalizeModeEventName(opts.modeEventName),
      data,
      opts.forwardToDatadog,
    )
  }

  // External logger
  _$$y?.logger.log(
    message,
    data,
    mapLogLevel(level),
  )
}

/**
 * Normalizes mode event names.
 * @original inline function in y
 */
function normalizeModeEventName(eventName: string): string {
  let normalized = ''
  for (const char of eventName) {
    if (char >= 'A' && char <= 'Z') {
      normalized += char.toLowerCase()
    }
    else if (char === '-') {
      normalized += '_'
    }
    else {
      normalized += char
    }
  }
  return normalized
}

/**
 * Maps log level to logger method.
 * @original inline function in y
 */
function mapLogLevel(level: string): string {
  switch (level) {
    case 'fatal':
    case 'error':
      return 'error'
    case 'warning':
      return 'warn'
    default:
      return 'info'
  }
}

// Export aliases for backward compatibility
export const ED = logDebug
export const Lo = logInfo
export const fj = logCustom
export const gb = setModeEventHandler
export const x1 = logError
export const xi = logWarning
