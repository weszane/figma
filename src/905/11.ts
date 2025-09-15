import { datadogRum } from '@datadog/browser-rum'
import { captureException, captureMessage, captureSession, normalize, setContext, setTag, setTags, setUser, startSession, withScope } from '@sentry/core'
import { ServiceCategories as _$$e } from '../905/165054'
import { getSentryConfig } from '../905/256712'
import { EventEmitter } from '../905/690073'
import { normalizeUrl } from '../3973/348894'
import { getInitialOptions } from '../figma_app/169182'
import { flattenObject } from '../figma_app/493477'
// import { NUh } from '../figma_app/763686'

/**
 * Error patterns for filtering known issues (yO)
 */
const errorPatterns = [
  /a\[b\]\.target\.className\.indexOf is not a function/,
  /\(event\.target\.className \|\| ""\)\.indexOf is not a function/,
  /XHR for ".*" failed with status/,
  /Endpoint requires authenticated user/,
]

/**
 * Patterns for filtering external URLs (xg)
 */
const externalUrlPatterns = [
  /\bintercomcdn\.com\b/,
  /\bkaspersky-labs\.com\b/,
  /\bchrome-extension:\/\//,
  /\bmoz-extension:\/\//,
  /\bsafari-extension:\/\//,
]

/**
 * Sentry event emitter (Zx)
 */
const sentryEventEmitter = new EventEmitter('sentry')

/**
 * Capture an exception with Sentry (Cp)
 * @param error - The error to capture
 */
export function captureError(error: unknown) {
  // $$A2
  captureException(error)
}

/**
 * Normalize Sentry event URLs (xn)
 * @param event - Sentry event object
 */
export function normalizeSentryEvent(event: any) {
  // $$y19
  for (const exception of event.exception?.values || []) {
    for (const frame of exception.stacktrace?.frames || []) {
      if (frame.filename)
        frame.filename = normalizeUrl(frame.filename)
    }
  }
  if (event.request?.url)
    event.request.url = normalizeUrl(event.request.url)
  if (typeof event.tags?.url === 'string')
    event.tags.url = normalizeUrl(event.tags.url)
}

/**
 * Process and emit breadcrumbs (it)
 * @param breadcrumb - Breadcrumb object
 * @returns The processed breadcrumb or null
 */
export function processBreadcrumb(breadcrumb: any) {
  // $$b10
  const { category, data } = breadcrumb
  if (category === 'xhr' || category === 'fetch') {
    const url = data?.url
    if (
      url
      && (url.match(/segment.io/)
        || url.startsWith('/api/figment-proxy')
        || url.startsWith(`${location.origin}/api/figment-proxy`))
    ) {
      return null
    }
    if (data && url && url.startsWith('data:')) {
      data.url = `${url.substring(0, 36)}... (truncated from ${url.length} characters)`
    }
  }
  if (breadcrumb.category === 'navigation') {
    if (data?.from)
      data.from = normalizeUrl(data.from)
    if (data?.to)
      data.to = normalizeUrl(data.to)
  }
  sentryEventEmitter.trigger('breadcrumb', breadcrumb)
  return breadcrumb
}

/**
 * Severity levels (DZ)
 */
export enum SeverityLevel {
  Critical = 'critical',
  Major = 'major',
  Minor = 'minor',
  Trivial = 'trivial',
}

const sentryConfig = getSentryConfig()

/**
 * Set a tag in Sentry and Datadog (kF)
 * @param key - Tag key
 * @param value - Tag value
 */
export function setTagGlobal(key: string, value: any) {
  // $$E11
  if (sentryConfig.enabled) {
    setTag(key, value)
    datadogRum?.setGlobalContextProperty(key, value)
  }
}

/**
 * Set multiple tags in Sentry and Datadog (Bc)
 * @param tags - Tags object
 */
export function setTagsGlobal(tags: Record<string, any>) {
  // $$x1
  if (sentryConfig.enabled) {
    setTags(tags)
    datadogRum
    && datadogRum.setGlobalContext({
      ...tags,
      ...datadogRum.getGlobalContext(),
    })
  }
}

/**
 * Set context in Sentry (XM)
 * @param key - Context key
 * @param value - Context value
 */
export function setContextGlobal(key: string, value: any) {
  // $$S7
  if (sentryConfig.enabled)
    setContext(key, value)
}

/**
 * Set branching tags for file (xZ)
 * @param file - File object
 */
export function setBranchingTags(file: { key: string, fileRepoId: string | null, sourceFileKey: string | null }) {
  // $$w17
  setTagGlobal('file.key', file.key)
  if (file.fileRepoId === null) {
    setTagGlobal('branching', 'not enabled')
  }
  else {
    setTagGlobal('branching_repo', file.fileRepoId)
    setTagGlobal('branching', file.sourceFileKey === null ? 'main branch' : 'user branch')
  }
}

/**
 * Set user in Sentry (Tm)
 * @param userId - User ID
 */
export function setSentryUser(userId: string) {
  // $$C5
  if (userId)
    setUser({ id: userId })
}

/**
 * Set organization ID tag in Sentry (mR)
 * @param orgId - Organization ID
 */
export function setOrgIdTag(orgId: string) {
  // $$T12
  if (orgId)
    setTag('org.id', orgId)
}

/**
 * Set server release tag in Sentry (uy)
 * @param release - Release string
 */
export function setServerReleaseTag(release: string) {
  // $$k14
  if (release)
    setTag('server_release', release)
}

/**
 * Normalize and flatten error object (V5)
 * @param error - Error object
 * @param options - Normalization options
 * @returns Flattened error object
 */
export function normalizeErrorObject(
  error: Record<string, any>,
  {
    depth = 3,
    maxProperties = Infinity,
    exclude = [],
  }: { depth?: number, maxProperties?: number, exclude?: string[] } = {},
) {
  // $$R6
  const excludeProps = [
    'name',
    'message',
    'stack',
    'line',
    'column',
    'fileName',
    'lineNumber',
    'columnNumber',
    'toJSON',
  ]
  const result: Record<string, any> = {}
  for (const key of Object.keys(error)) {
    if (!excludeProps.includes(key) || !exclude.includes(key)) {
      result[key] = error[key]
    }
  }
  return flattenObject(normalize(result, depth, maxProperties))
}

const reportedSet = new Set<string>()

/**
 * Clear reported errors set (du)
 */
export function clearReportedErrors() {
  // $$P9
  reportedSet.clear()
}

/**
 * Report error to Sentry and Datadog (D$)
 * @param area - Service area
 * @param error - Error object
 * @param context - Context object
 * @param dedupe - Whether to deduplicate
 * @returns Sentry event ID or undefined
 */
export function reportError(
  area: string,
  error: any,
  context?: any,
  dedupe?: boolean,
) {
  // $$O0
  let eventId
  if (!(error.reportedToSentry || error.cause?.reportedToSentry) && !sentryConfig.ignoreErrors) {
    if (dedupe) {
      const dedupeKey = (() => {
        const stack = error.stack?.split('\n').slice(1, 3).join('|') || ''
        return `${error.name}:${error.message}:${stack}`
      })()
      if (reportedSet.has(dedupeKey))
        return
      reportedSet.add(dedupeKey)
    }
    error.reportedToSentry = true
    if (sentryConfig.slogToConsole)
      console.error(error, context)
    if (sentryConfig.enabled) {
      withScope((scope) => {
        if (area !== _$$e.UNOWNED)
          scope.setTag('area', area)
        if (error.sentryTags) {
          for (const tag in error.sentryTags) scope.setTag(tag, error.sentryTags[tag])
        }
        eventId = captureException(error, context)
      })
      datadogRum
      && datadogRum.addError(error, {
        captureContext: context,
        ...(area !== _$$e.UNOWNED && { area }),
        ...error.sentryTags,
      })
    }
    return eventId
  }
}

/**
 * Capture message in Sentry (us)
 * @param message - Message string
 */
export function captureSentryMessage(message: string) {
  // $$D13
  if (sentryConfig.slogToConsole)
    console.error(message)
  if (sentryConfig.enabled)
    captureMessage(message)
}

/**
 * Report undefined/null value error (xO)
 * @param area - Service area
 * @param value - Value to check
 */
export function reportValueError(area: string, value: any) {
  // $$L16
  if (value == null)
    reportError(area, new Error(`value is ${void 0 === value ? 'undefined' : 'null'}`))
}

/**
 * Start Sentry session and drain errors (wp)
 */
export function startSentrySession() {
  // $$F15
  const commit = getInitialOptions().release_manifest_git_commit
  if (sentryConfig.enabled && commit) {
    startSession()
    captureSession()
    window.drainErrors && window.drainErrors()
  }
}

// Export statements with original names preserved
export const $D = reportError
export const Bc = setTagsGlobal
export const Cp = captureError
export const DZ = SeverityLevel
// export const NU = NUh
export const Tm = setSentryUser
export const V5 = normalizeErrorObject
export const XM = setContextGlobal
export const Zx = sentryEventEmitter
export const du = clearReportedErrors
export const it = processBreadcrumb
export const kF = setTagGlobal
export const mR = setOrgIdTag
export const us = captureSentryMessage
export const uy = setServerReleaseTag
export const wp = startSentrySession
export const xO = reportValueError
export const xZ = setBranchingTags
export const xg = externalUrlPatterns
export const xn = normalizeSentryEvent
export const yO = errorPatterns
// export const setSentryTag = setTagGlobal
// export const setDatadogTags = setTagsGlobal
