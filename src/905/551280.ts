import { getFeatureFlags } from '../905/601108'
import { logError } from '../905/714362'
import { normalizePathname } from '../3973/348894'
import { LogToConsoleMode } from '../figma_app/290762'
/**
 * Checks for numeric IDs in the payload and logs an error if found.
 * Original function name: $$o0
 * @param payload - The object to inspect for numeric IDs.
 * @param request - The request object containing pathname and verb.
 */
export function alertOnNumericIds(payload: any, request: { pathname: string, verb: string }) {
  const flags = getFeatureFlags()
  // Early return if monitoring is disabled or required objects are missing
  if (
    !flags.numeric_id_sentry_monitoring
    || !payload
    || !window.scheduler
    || (flags.numeric_id_sentry_sample && Math.random() > 0.05)
  ) {
    return
  }

  window.scheduler.postTask(() => {
    const normalizedPath = normalizePathname(request.pathname)
    const context = `${request.verb} ${normalizedPath}`
    const foundPairs: Array<[string, any]> = []

    // Helper function to collect numeric IDs from the payload
    JSON.parse(JSON.stringify(payload), (key, value) => {
      // Check for single numeric ID fields
      if (
        (key === 'id' || key.endsWith('_id') || key.endsWith('_id_or_key'))
        && typeof value === 'number'
      ) {
        foundPairs.push([key, value])
      }
      // Check for arrays of numeric IDs
      if (
        key.endsWith('_ids')
        && Array.isArray(value)
        && value.some(item => typeof item === 'number')
      ) {
        foundPairs.push([key, value])
      }
      return value
    })

    if (foundPairs.length) {
      logError(
        'alertOnNumericIds',
        'numeric ids found in payload',
        {
          context,
          obj: payload,
          foundPairs,
        },
        {
          logToConsole: LogToConsoleMode.ALWAYS,
          reportAsSentryError: true,
        },
      )
    }
  }, {
    priority: 'background',
  })
}

/** Exported for compatibility with original code (h) */
export const h = alertOnNumericIds
