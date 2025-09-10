import { addBreadcrumb } from '@sentry/core'
import { delay } from '../905/236856'
// import { z } from '../905/239603' // Removed unused import
import { getWAFChallengeType, wafManager } from '../905/394005'
import { trackEventAnalytics } from '../905/449184'
import { getTrackingSessionId } from '../905/471229'
import { alertOnNumericIds } from '../905/551280'
import { waitForVisibility } from '../905/621429'
import { serializeQuery } from '../905/634134'
import { logWarning } from '../905/714362'
import { getUserPlan } from '../905/912096'
import { normalizeUrl, normalizeUrlStrict } from '../3973/348894'
import { fakePath, getInitialOptions } from '../figma_app/169182'
import { addUnique, removeElement, unshiftUnique } from '../figma_app/656233'
import { isInteractionPathCheck } from '../figma_app/897289'

interface XhrRequestSettings {
  url: string
  method: XHRMethod
  params?: Record<string, any>
  data?: any
  headers?: Record<string, string>
  responseType?: XMLHttpRequestResponseType | ''
  withCredentials?: boolean
  timeout?: number
  raw?: boolean
  rawResponse?: boolean
  rawBody?: boolean
  dump?: (data: any) => string
  load?: (data: string) => any
  uploadEvents?: Record<string, (xhr?: XMLHttpRequest) => void>
  downloadEvents?: Record<string, (xhr?: XMLHttpRequest) => void>
  waitForTabRecentlyVisible?: boolean
  retryCount?: number
  retryStrategyOverride?: Record<number, number>
}
export interface AjaxResponse<T = any> {
  cause?: Error
  status: number
  response: any
  contentType: string | null
  responseType?: XMLHttpRequestResponseType | ''
  wafChallenge?: any
  data: T | null
  url?: string
  timeout?: number
}
/**
 * Adds request data to the log if contentType is JSON.
 * @param res - The request object.
 * @param method - HTTP verb.
 * @param pathname - Pathname.
 */
function logRequestData(res: AjaxResponse, method: XHRMethod, pathname: string) {
  // A
  if (res.data && res.contentType?.startsWith('application/json')) {
    alertOnNumericIds(res.data, {
      verb: method,
      pathname,
    })
  }
  return res
}

/**
 * Formats the XHR response.
 * @param url - URL.
 * @param xhr - XMLHttpRequest.
 * @param data - Parsed data.
 */
function formatResponse(url: string, xhr: XMLHttpRequest, data: any): AjaxResponse {
  // y
  return {
    status: xhr.status,
    response: xhr.response,
    contentType: xhr.getResponseHeader('content-type'),
    responseType: xhr.responseType,
    wafChallenge: getWAFChallengeType(xhr),
    data,
    url,
  }
}
let mockServerInstance: MockServer | null = null

/**
 * XHRRequest class for handling request settings and responses.
 */
class MockRequest {
  settings: XhrRequestSettings
  _response: Promise<AjaxResponse> | 'SEND_REAL_REQUEST' | undefined
  constructor(e: XhrRequestSettings) {
    this.settings = e
    this._response = void 0
  }

  /**
   * Parses the URL from settings.
   */
  parsedURL() {
    let e = document.createElement('a')
    e.href = this.settings.url || ''
    return {
      host: e.host,
      hostname: e.hostname,
      port: e.port,
      pathname: e.pathname,
      search: e.search,
    }
  }

  hostname() {
    return this.parsedURL().hostname
  }

  pathname() {
    return this.parsedURL().pathname
  }

  pathnameMatches(e) {
    return !!new RegExp(e).exec(this.pathname())
  }

  search() {
    return this.parsedURL().search
  }

  sendRealRequest() {
    this._response = 'SEND_REAL_REQUEST'
  }

  respond(e) {
    this._response = Promise.resolve(e)
  }

  respondPromise(e) {
    this._response = e
  }

  failResponse() {
    this._response = Promise.resolve({
      status: 0,
      response: '',
      data: null,
      contentType: null,
    })
  }

  neverRespond() {
    this._response = new Promise(() => { })
  }

  response() {
    return this._response
  }

  maybeDispatchLoadStart() {
    this.settings.uploadEvents?.loadstart && this.settings.uploadEvents.loadstart()
  }
}

/**
 * MockServer for handling XHR requests in tests.
 */
class MockServer {
  static SEND_REAL_REQUEST = 'SEND_REAL_REQUEST'
  private _handlers: Array<(req: MockRequest) => void>
  areUnitTestsRunning: boolean
  constructor({
    areUnitTestsRunning,
  }: {
    areUnitTestsRunning: boolean
  }) {
    this._handlers = []
    this.areUnitTestsRunning = areUnitTestsRunning
  }

  static install(options: {
    areUnitTestsRunning: boolean
  }) {
    if (!mockServerInstance) {
      mockServerInstance = new MockServer(options)
    }
    return mockServerInstance
  }

  resetHandlers() {
    this._handlers = []
  }

  addHandler(handler: (req: MockRequest) => void, prepend = false) {
    prepend ? unshiftUnique(this._handlers, handler) : addUnique(this._handlers, handler)
  }

  removeHandler(handler: (req: MockRequest) => void) {
    removeElement(this._handlers, handler)
  }

  handleRequest(settings: XhrRequestSettings) {
    for (const handler of this._handlers) {
      const req = new MockRequest(settings)
      handler(req)
      const resp = req.response()
      if (resp) {
        req.maybeDispatchLoadStart()
        return resp
      }
    }
    if (!isInteractionPathCheck() && !this.areUnitTestsRunning && settings.url && !settings.url.endsWith('realtime_token') && settings.url !== 'https://api.segment.io/v1/track' && !settings.url.includes('/api/figment-proxy')) {
      // eslint-disable-next-line no-console
      console.log(`[xr.MockServer]: Ignoring ${settings.method} request to ${settings.url}`, settings)
    }
    return new Promise(() => { })
  }
}
type XHRMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD'
export const XHR = {
  Methods: {
    GET: 'GET' as XHRMethod,
    POST: 'POST' as XHRMethod,
    PUT: 'PUT' as XHRMethod,
    DELETE: 'DELETE' as XHRMethod,
    PATCH: 'PATCH' as XHRMethod,
    OPTIONS: 'OPTIONS' as XHRMethod,
    HEAD: 'HEAD' as XHRMethod,
  },
  Events: {
    READY_STATE_CHANGE: 'readystatechange',
    LOAD_START: 'loadstart',
    PROGRESS: 'progress',
    ABORT: 'abort',
    ERROR: 'error',
    LOAD: 'load',
    TIMEOUT: 'timeout',
    LOAD_END: 'loadend',
  },
  requiredHeaders: {
    'X-Figma-User-ID': getInitialOptions().user_data?.id ?? '',
  },
  defaults: {
    method: 'GET' as XHRMethod,
    data: undefined,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Csrf-Bypass': 'yes',
      'tsid': getTrackingSessionId(),
      'X-Figma-User-Plan-Max': getUserPlan() ?? '',
      ...(getInitialOptions().user_data?.id && {
        'X-Figma-User-ID': getInitialOptions().user_data.id,
      } || {}),
    },
    responseType: '',
    dump: JSON.stringify,
    load: JSON.parse,
    withCredentials: false,
    timeout: 0,
  } as XhrRequestSettings,
  getDefaults: {} as XhrRequestSettings,
  crossOriginDefaults: {} as XhrRequestSettings,
  crossOriginGetDefaults: {} as XhrRequestSettings,
  assertSameOrigin: (_url?: string) => { },
  put: async (url: string, data: any = {}, options?: Partial<XhrRequestSettings>) => {
    const method = XHR.Methods.PUT
    const response = await sendWithRetry({
      url,
      method,
      data,
      ...options,
    })
    logRequestData(response, method, url)
    return response
  },
  post: async (url: string, data: any = {}, options?: Partial<XhrRequestSettings>) => {
    const method = XHR.Methods.POST
    const response = await sendWithRetry({
      url,
      method,
      data,
      ...options,
    })
    logRequestData(response, method, url)
    return response
  },
  patch: async (url: string, data: any = {}, options?: Partial<XhrRequestSettings>) => {
    const method = XHR.Methods.PATCH
    const response = await sendWithRetry({
      url,
      method,
      data,
      ...options,
    })
    logRequestData(response, method, url)
    return response
  },
  del: async (url: string, data: any = {}, options?: Partial<XhrRequestSettings>) => {
    const method = XHR.Methods.DELETE
    const response = await sendWithRetry({
      url,
      method,
      data,
      ...options,
    })
    logRequestData(response, method, url)
    return response
  },
  options: async (url: string, options?: Partial<XhrRequestSettings>) => {
    return await sendWithRetry({
      url,
      method: XHR.Methods.OPTIONS,
      ...options,
    })
  },
  crossOriginGet: async (url: string, params?: Record<string, any>, options?: Partial<XhrRequestSettings>) => {
    return await sendWithRetry({
      url,
      method: XHR.Methods.GET,
      params,
      ...options,
    }, XHR.crossOriginGetDefaults)
  },
  crossOriginGetAny: async (url: string, params?: Record<string, any>, options?: Partial<XhrRequestSettings>) => {
    return await XHR.crossOriginGet(url, params, options)
  },
  crossOriginHead: async (url: string, params?: Record<string, any>, options?: Partial<XhrRequestSettings>) => {
    return await sendWithRetry({
      url,
      method: XHR.Methods.HEAD,
      params,
      ...options,
    }, XHR.crossOriginDefaults)
  },
  crossOriginPut: async (url: string, data: any, options?: Partial<XhrRequestSettings>) => {
    return await sendWithRetry({
      url,
      method: XHR.Methods.PUT,
      data,
      ...options,
    }, XHR.crossOriginDefaults)
  },
  crossOriginPost: async (url: string, data: any, options?: Partial<XhrRequestSettings>) => {
    return await sendWithRetry({
      url,
      method: XHR.Methods.POST,
      data,
      ...options,
    }, XHR.crossOriginDefaults)
  },
  shouldTreatStatusCodeAsFailure: (status: number) => {
    return status === 202 || !(status >= 200 && status < 300)
  },
  retryStrategyForStatusCode: (status: number, override?: Record<number, number>) => {
    if (override && override[status] !== null && override[status] !== undefined)
      return override[status]
    if (status === 0)
      return 2
    if (status > 0 && status < 200 || status >= 200 && status < 400 || status >= 400 && status < 500 && status !== 429)
      return 0
    if (status === 429 || status >= 500 && status <= 504)
      return 1
    return 0
  },
  RetryStrategy: {
    NO_RETRY: 0,
    JITTERED_EXPONENTIAL_BACKOFF: 1,
    LINEAR_BACKOFF: 2,
  },
}
XHR.getDefaults = {
  ...XHR.defaults,
  waitForTabRecentlyVisible: true,
  retryCount: 3,
}
XHR.crossOriginDefaults = {
  ...XHR.defaults,
}
delete XHR.crossOriginDefaults.headers
XHR.crossOriginGetDefaults = {
  ...XHR.crossOriginDefaults,
  retryCount: 3,
}
/**
 * Custom error for XHR failures.
 */
class XHRError extends Error {
  status: number
  response: any
  data: any
  contentType: string | null
  wafChallenge: any
  constructor(response: AjaxResponse) {
    super(Object.prototype.hasOwnProperty.call(response, 'toString') ? response.toString() : 'Unknown XHR error')
    this.status = response.status
    this.response = response.response
    this.data = response.data
    this.contentType = response.contentType
    this.wafChallenge = response.wafChallenge
  }
}

/**
 * Determines if a request should be sampled for logging.
 * @param e -  or similar object.
 * @param t - Response URL.
 * @returns Boolean indicating if request should be sampled.
 */
export function shouldSampleRequest(e, t) {
  // $$x2
  const excludedPatterns = ['api/web_logger', 's3-alpha-sig.figma.com', 's3-figma-videos-production-sig.com', 'figma-fonts-private-production', 'data:image/png;base64']
  for (const pattern of excludedPatterns) {
    if (t && t.includes(pattern)) {
      return false
    }
  }
  return Math.random() <= 0.05
}

/**
 * Logs request/response metrics.
 * @param url - Original URL.
 * @param method - HTTP method.
 * @param xhr - XMLHttpRequest object.
 * @param timer -  instance.
 * @param attempt - Attempt number.
 * @param requestEvent - Event type.
 */
function logAsyncRequest(url: string, method: XHRMethod, xhr: XMLHttpRequest, timer: Timer | null, attempt: number, requestEvent: string) {
  // S
  if (timer == null)
    return
  try {
    const duration = timer.finish()
    if (shouldSampleRequest(duration, xhr.responseURL)) {
      const isSlow = duration >= 1000
      let sanitizedPath = ''
      try {
        sanitizedPath = new URL(normalizeUrlStrict(new URL(url, fakePath).toString())).pathname
      }
      catch (error) {
        logWarning('xhr', 'Failed to create a sanitized request path.', {
          requestUrl: url,
          error,
        }, {
          reportAsSentryError: true,
        })
      }
      const orgId = getInitialOptions().org_id
      trackEventAnalytics('web_async_request', {
        url: normalizeUrl(xhr.responseURL),
        requestPath: sanitizedPath,
        method,
        resultEvent: requestEvent,
        success: xhr.status >= 200 && xhr.status < 400,
        latencyms: duration,
        status: xhr.status,
        slowRequest: isSlow,
        currentOrgId: orgId,
        connectionState: timer.offlined ? 'offline' : 'online',
        backgrounded: timer.backgrounded,
        source: 'xhr',
        attempt,
        timeout: xhr.timeout,
      }, {
        batchRequest: true,
        forwardToDatadog: true,
      })
    }
  }
  catch {
    // Ignore errors in logging
  }
}

/**
 * Sends an XHR request.
 * @param attempt - Attempt number.
 * @param t - Request settings.
 * @param i - Defaults.
 * @returns Promise resolving to formatted response.
 */
async function sendXhrRequest<T>(requestId: number, settings: XhrRequestSettings, overrideSettings?: Partial<XhrRequestSettings>): Promise<AjaxResponse<T>> {
  const mergedSettings: XhrRequestSettings = {
    ...(overrideSettings ?? XHR.defaults),
    ...settings,
  }
  if (mergedSettings.waitForTabRecentlyVisible) {
    await waitForVisibility()
  }
  if (mockServerInstance) {
    const mockResponse: any = mockServerInstance.handleRequest(settings)
    if (mockResponse !== MockServer.SEND_REAL_REQUEST) {
      return mockResponse
    }
  }

  // eslint-disable-next-line unicorn/error-message
  const errorStack = new Error()
  return new Promise<AjaxResponse>((resolve, reject) => {
    let sanitizedUrl = mergedSettings.url
    sanitizedUrl = sanitizedUrl.replace(/\?.*$/, '').replace(/^(\/api\/multiplayer\/)\w+(\/create_savepoint)$/, '$1XXX$2').replace(/^(\/component\/)\w+(\/canvas)$/, '$1XXX$2').replace(/^(\/style\/)\w+(\/canvas)$/, '$1XXX$2').replace(/^(https:\/\/s3-alpha\.figma\.com\/checkpoints\/)\w+\/\w+\/\w+\/\w+(\.fig)$/, '$1XXX$2')
    const urlForRequest = mergedSettings.params ? `${mergedSettings.url.split('?')[0]}?${serializeQuery(mergedSettings.params)}` : mergedSettings.url
    const xhr = new XMLHttpRequest()
    let timer: Timer | null = new Timer()
    xhr.withCredentials = !!mergedSettings.withCredentials
    try {
      xhr.timeout = mergedSettings.timeout ?? 0
      xhr.responseType = mergedSettings.responseType ?? ''
    }
    catch { }
    const handleError = (err: any) => {
      err.cause = errorStack
      reject(err)
    }
    const handleFailure = (resp: AjaxResponse) => {
      if (!XHR.shouldTreatStatusCodeAsFailure(resp.status)) {
        console.warn('sendXr: overriding failed result status from', resp.status, 'to 0')
        resp.status = 0
      }
      resp.toString = () => {
        if (resp.status === 400 || resp.status === 402) {
          if (typeof resp.data === 'object' && 'error' in resp.data && resp.data?.error)
            return resp.data.message
          if (typeof resp.data === 'string')
            return resp.data
        }
        return `XHR for "${sanitizedUrl}" failed with status ${resp.status}`
      }
      resp.cause = errorStack
      resolve(resp)
    }
    xhr.open(mergedSettings.method, urlForRequest, true)

    // Set headers
    if (mergedSettings.headers) {
      for (const key in mergedSettings.headers) {
        if (!(key === 'Content-Type' && mergedSettings.data && mergedSettings.data instanceof FormData) && Object.prototype.hasOwnProperty.call(mergedSettings.headers, key)) {
          xhr.setRequestHeader(key, mergedSettings.headers[key])
        }
      }
    }

    // Upload events
    if (mergedSettings.uploadEvents) {
      for (const event in mergedSettings.uploadEvents) {
        if (Object.prototype.hasOwnProperty.call(mergedSettings.uploadEvents, event)) {
          xhr.upload.addEventListener(event, mergedSettings.uploadEvents[event].bind(null, xhr), false)
        }
      }
    }

    // Download events
    if (mergedSettings.downloadEvents) {
      for (const event in mergedSettings.downloadEvents) {
        if (Object.prototype.hasOwnProperty.call(mergedSettings.downloadEvents, event)) {
          xhr.addEventListener(event, mergedSettings.downloadEvents[event].bind(null, xhr), false)
        }
      }
    }

    // XHR event listeners
    xhr.addEventListener(XHR.Events.LOAD, () => {
      try {
        logAsyncRequest(urlForRequest, mergedSettings.method, xhr, timer, requestId, XHR.Events.LOAD)
        let data: any = null
        if (xhr.responseType === 'arraybuffer') {
          data = new Uint8Array(xhr.response as ArrayBuffer)
        }
        else if (xhr.responseType === 'blob') {
          data = xhr.response
        }
        else if (xhr.responseText) {
          try {
            data = mergedSettings.raw || mergedSettings.rawResponse ? xhr.responseText : mergedSettings.load ? mergedSettings.load(xhr.responseText) : xhr.responseText
          }
          catch (err: any) {
            addBreadcrumb({
              category: 'xhr',
              message: `failed to parse response: ${err.message}`,
              data: {
                responseType: xhr.responseType,
                responseText: xhr.responseText,
                url: sanitizedUrl,
              },
            })
            logWarning('xhr', `failed to parse response: ${err.message}`, {
              responseText: xhr.responseText,
              url: sanitizedUrl,
            }, {
              reportAsSentryError: false,
            })
            data = err instanceof SyntaxError ? xhr.responseText : null
          }
        }
        else {
          addBreadcrumb({
            category: 'xhr',
            message: `unhandled responseType: ${xhr.responseType}`,
            data: {
              url: sanitizedUrl,
            },
          })
        }
        if (XHR.shouldTreatStatusCodeAsFailure(xhr.status)) {
          handleFailure(formatResponse(sanitizedUrl, xhr, data))
        }
        else {
          resolve(formatResponse(sanitizedUrl, xhr, data))
        }
      }
      catch (err) {
        handleError(err)
      }
    })
    xhr.addEventListener(XHR.Events.ABORT, () => {
      logAsyncRequest(urlForRequest, mergedSettings.method, xhr, timer, requestId, XHR.Events.ABORT)
      handleFailure(formatResponse(sanitizedUrl, xhr, undefined))
    })
    xhr.addEventListener(XHR.Events.ERROR, () => {
      logAsyncRequest(urlForRequest, mergedSettings.method, xhr, timer, requestId, XHR.Events.ERROR)
      handleFailure(formatResponse(sanitizedUrl, xhr, undefined))
    })
    xhr.addEventListener(XHR.Events.TIMEOUT, () => {
      logAsyncRequest(urlForRequest, mergedSettings.method, xhr, timer, requestId, XHR.Events.TIMEOUT)
      handleFailure(formatResponse(sanitizedUrl, xhr, undefined))
    })

    // Prepare data for sending
    const body = typeof mergedSettings.data !== 'object' || mergedSettings.raw || mergedSettings.rawBody ? mergedSettings.data : mergedSettings.dump ? mergedSettings.dump(mergedSettings.data) : mergedSettings.data
    if (body !== undefined) {
      xhr.send(body)
    }
    else {
      xhr.send()
    }
  })
}

/**
 * Handles retries and error logic for XHR requests.
 * @param e - Request settings.
 * @param t - Defaults.
 * @returns Promise resolving to response.
 */

async function sendWithRetry(settings: XhrRequestSettings, overrideSettings?: Partial<XhrRequestSettings>): Promise<AjaxResponse> {
  let response: AjaxResponse
  let attempt = 0
  let handledWafChallenge = false
  const maxRetries = settings.retryCount ?? overrideSettings?.retryCount ?? 0
  do {
    response = await sendXhrRequest(attempt, settings, overrideSettings)
    let retryStrategy = XHR.retryStrategyForStatusCode(response.status, settings.retryStrategyOverride)
    if (response.wafChallenge) {
      if (!handledWafChallenge) {
        attempt = -1
        handledWafChallenge = true
      }
      retryStrategy = XHR.RetryStrategy.LINEAR_BACKOFF
      await wafManager.waitForWAFValidation(response.wafChallenge === 'challenge' ? 'challenge' : 'captcha')
    }
    if (retryStrategy === XHR.RetryStrategy.NO_RETRY) {
      if (XHR.shouldTreatStatusCodeAsFailure(response.status))
        throw new XHRError(response)
      return response
    }
    if (retryStrategy === XHR.RetryStrategy.LINEAR_BACKOFF) {
      await delay(500 * attempt)
    }
    else if (retryStrategy === XHR.RetryStrategy.JITTERED_EXPONENTIAL_BACKOFF) {
      const base = Math.min(500 * 2 ** attempt, 300000)
      const jitter = 0.25 * Math.random() * base
      await delay(base + jitter)
    }
    else {
      break
    }
    attempt++
  } while (attempt < 1 + maxRetries)
  if (!XHR.shouldTreatStatusCodeAsFailure(response.status))
    return response
  throw new XHRError(response)
}

/**
 * GET request with retry and logging.
 * @param url - URL.
 * @param params - Parameters.
 * @param options - Options.
 * @returns Promise resolving to response.
 */
export async function getRequest<T>(url: string, params: Record<string, any> = {}, options: Partial<XhrRequestSettings> = {}): Promise<AjaxResponse<T>> {
  XHR.assertSameOrigin(url)
  const method = XHR.Methods.GET
  const response = await sendWithRetry({
    url,
    method,
    params,
    ...options,
  }, XHR.getDefaults)
  logRequestData(response, method, url)
  return response
}

/**
 * Paginated GET request.
 */
async function getPaginated<T = any>(url: string, options: Record<string, any> = {}) {
  // N
  let currentParams = {}
  let {
    cursor,
    ...rest
  } = options || {
    cursor: void 0,
  }
  if (options?.cursor) {
    let n = new URL(options.cursor, document.baseURI)
    n.pathname !== url && console.error(`Pagination cursor does not match endpoint: ${url} ${options.cursor}`)
    currentParams = Object.fromEntries(n.searchParams.entries())
  }
  let res = (await getRequest<T>(url, {
    ...rest,
    ...currentParams,
  })) as any
  return {
    ...res,
    data: {
      ...res.data,
      pagination: res.data!.pagination
        ? {
          nextPage: res.data.pagination?.next_page ?? null,
          prevPage: res.data.pagination?.prev_page ?? null,
        }
        : {
          nextPage: null,
          prevPage: null,
        },
    },
  }
}

/**
 *  utility for tracking request duration and state.
 */
class Timer {
  private _startTime: number
  private _timerId: ReturnType<typeof setTimeout> | null
  metadata: any
  finished: boolean
  backgrounded: boolean
  offlined: boolean
  finish: () => number
  onVisibilityChange: () => void
  onOffline: () => void
  constructor(options: {
    onTimeout?: (backgrounded: boolean) => void
    timeoutMs?: number
  } = {}, metadata?: any) {
    this._startTime = performance.now()
    this._timerId = null
    this.metadata = null
    this.finished = false
    this.backgrounded = document.visibilityState === 'hidden'
    this.offlined = !navigator.onLine
    this.finish = () => {
      if (this.finished)
        console.error(' already finished')
      if (this._timerId)
        clearTimeout(this._timerId)
      this.finished = true
      document.removeEventListener('visibilitychange', this.onVisibilityChange)
      document.removeEventListener('offline', this.onOffline)
      return Math.round(performance.now() - this._startTime)
    }
    this.onVisibilityChange = () => {
      if (document.visibilityState === 'hidden')
        this.backgrounded = true
    }
    this.onOffline = () => {
      this.offlined = true
    }
    document.addEventListener('visibilitychange', this.onVisibilityChange)
    document.addEventListener('offline', this.onOffline)
    if (metadata)
      this.metadata = metadata
    if (options.onTimeout) {
      if (!options.timeoutMs)
        throw new Error('onTimeout specified without timeoutMs')
      this._timerId = setTimeout(() => {
        options.onTimeout!(this.backgrounded)
      }, options.timeoutMs)
    }
  }
}
export const API = {
  get: getRequest,
  getPaginated,
  put: XHR.put,
  post: XHR.post,
  del: XHR.del,
  patch: XHR.patch,
  crossOriginGet: XHR.crossOriginGet,
}
// Exported API
export let $$O0 = XHR
export const Ay = XHR
export const Dr = XHRError
export const Fs = shouldSampleRequest
export const GD = getRequest
export const IF = API
export const k9 = getRequest
