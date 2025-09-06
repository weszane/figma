import { delay } from '../905/236856';
// import { z } from '../905/239603' // Removed unused import
import { getWAFChallengeType, wafManager } from '../905/394005';
import { trackEventAnalytics } from '../905/449184';
import { fF } from '../905/471229';
import { h as _$$h } from '../905/551280';
import { p as _$$p } from '../905/621429';
import { serializeQuery } from '../905/634134';
import { logWarning } from '../905/714362';
import { T } from '../905/912096';
import { normalizeUrl, normalizeUrlStrict } from '../3973/348894';
import { fakePath, getInitialOptions } from '../figma_app/169182';
import { isInteractionPathCheck } from '../figma_app/897289';
import { removeElement, unshiftUnique, addUnique } from '../figma_app/656233';
import { addBreadcrumb } from '../vendor/39153';

/**
 * Adds request data to the log if contentType is JSON.
 * @param e - The request object.
 * @param t - HTTP verb.
 * @param i - Pathname.
 */
function logRequestData(e, t, i) {
  // A
  if (e.data && e.contentType?.startsWith('application/json')) {
    _$$h(e.data, {
      verb: t,
      pathname: i
    });
  }
  return e;
}

/**
 * Formats the XHR response.
 * @param url - URL.
 * @param xhr - XMLHttpRequest.
 * @param data - Parsed data.
 */
function formatResponse(url, xhr, data) {
  // y
  return {
    status: xhr.status,
    response: xhr.response,
    contentType: xhr.getResponseHeader('content-type'),
    responseType: xhr.responseType,
    wafChallenge: getWAFChallengeType(xhr),
    data,
    url
  };
}
let mockServerInstance = null;

/**
 * XHRRequest class for handling request settings and responses.
 */
class XHRRequest {
  // v

  constructor(e) {
    this.settings = e;
    this._response = void 0;
  }

  /**
   * Parses the URL from settings.
   */
  parsedURL() {
    let e = document.createElement('a');
    e.href = this.settings.url || '';
    return {
      host: e.host,
      hostname: e.hostname,
      port: e.port,
      pathname: e.pathname,
      search: e.search
    };
  }
  hostname() {
    return this.parsedURL().hostname;
  }
  pathname() {
    return this.parsedURL().pathname;
  }
  pathnameMatches(e) {
    return !!new RegExp(e).exec(this.pathname());
  }
  search() {
    return this.parsedURL().search;
  }
  sendRealRequest() {
    this._response = 'SEND_REAL_REQUEST';
  }
  respond(e) {
    this._response = Promise.resolve(e);
  }
  respondPromise(e) {
    this._response = e;
  }
  failResponse() {
    this._response = Promise.resolve({
      status: 0,
      response: '',
      data: null,
      contentType: null
    });
  }
  neverRespond() {
    this._response = new Promise(() => {});
  }
  response() {
    return this._response;
  }
  maybeDispatchLoadStart() {
    this.settings.uploadEvents?.loadstart && this.settings.uploadEvents.loadstart();
  }
}

/**
 * MockServer for handling XHR requests in tests.
 */
class MockServer {
  // I

  constructor({
    areUnitTestsRunning
  }) {
    this._handlers = [];
    this.areUnitTestsRunning = areUnitTestsRunning;
  }
  static install(t) {
    if (!mockServerInstance) {
      mockServerInstance = new MockServer(t);
    }
    return mockServerInstance;
  }
  resetHandlers() {
    this._handlers = [];
  }
  addHandler(e, t = false) {
    t ? unshiftUnique(this._handlers, e) : addUnique(this._handlers, e);
  }
  removeHandler(e) {
    removeElement(this._handlers, e);
  }
  handleRequest(e) {
    for (let t of this._handlers) {
      let i = new XHRRequest(e);
      t(i);
      let n = i.response();
      if (n) {
        i.maybeDispatchLoadStart();
        return n;
      }
    }
    isInteractionPathCheck() || this.areUnitTestsRunning || !e.url || e.url.endsWith('realtime_token') || e.url === 'https://api.segment.io/v1/track' || e.url.includes('/api/figment-proxy') || console.warn(`[xr.MockServer]: Ignoring ${e.method} request to ${e.url}`, e);
    return new Promise((_e, _t) => {});
  }
  static SEND_REAL_REQUEST = 'SEND_REAL_REQUEST';
}
export let XHR;
(function (_XHR) {
  let Methods = /*#__PURE__*/function (Methods) {
    Methods["GET"] = "GET";
    Methods["POST"] = "POST";
    Methods["PUT"] = "PUT";
    Methods["DELETE"] = "DELETE";
    Methods["PATCH"] = "PATCH";
    Methods["OPTIONS"] = "OPTIONS";
    Methods["HEAD"] = "HEAD";
    return Methods;
  }({});
  _XHR.Methods = Methods;
  let Events = /*#__PURE__*/function (Events) {
    Events["READY_STATE_CHANGE"] = "readystatechange";
    Events["LOAD_START"] = "loadstart";
    Events["PROGRESS"] = "progress";
    Events["ABORT"] = "abort";
    Events["ERROR"] = "error";
    Events["LOAD"] = "load";
    Events["TIMEOUT"] = "timeout";
    Events["LOAD_END"] = "loadend";
    return Events;
  }({});
  _XHR.Events = Events;
  const requiredHeaders = _XHR.requiredHeaders = {
    'X-Figma-User-ID': getInitialOptions().user_data?.id ?? ''
  };
  const defaults = _XHR.defaults = {
    method: Methods.GET,
    data: void 0,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Csrf-Bypass': 'yes',
      'tsid': fF(),
      'X-Figma-User-Plan-Max': T() ?? '',
      ...requiredHeaders
    },
    responseType: '',
    dump: JSON.stringify,
    load: JSON.parse,
    withCredentials: false,
    timeout: 0
  };
  const getDefaults = _XHR.getDefaults = {
    ...defaults,
    waitForTabRecentlyVisible: true,
    retryCount: 3
  };
  let RetryStrategy = /*#__PURE__*/function (RetryStrategy) {
    RetryStrategy[RetryStrategy["NO_RETRY"] = 0] = "NO_RETRY";
    RetryStrategy[RetryStrategy["JITTERED_EXPONENTIAL_BACKOFF"] = 1] = "JITTERED_EXPONENTIAL_BACKOFF";
    RetryStrategy[RetryStrategy["LINEAR_BACKOFF"] = 2] = "LINEAR_BACKOFF";
    return RetryStrategy;
  }({});
  _XHR.RetryStrategy = RetryStrategy;
  const crossOriginDefaults = _XHR.crossOriginDefaults = {
    ...defaults
  };
  delete crossOriginDefaults.headers;
  const crossOriginGetDefaults = _XHR.crossOriginGetDefaults = {
    ...crossOriginDefaults,
    retryCount: 3
  };
  function assertSameOrigin(_e) {}
  _XHR.assertSameOrigin = assertSameOrigin;
  const put = _XHR.put = putRequest;
  const post = _XHR.post = postRequest;
  const patch = _XHR.patch = patchRequest;
  const del = _XHR.del = deleteRequest;
  const options = _XHR.options = optionsRequest;
  const crossOriginGet = _XHR.crossOriginGet = crossOriginGetRequest;
  const crossOriginGetAny = _XHR.crossOriginGetAny = crossOriginGetAnyRequest;
  const crossOriginHead = _XHR.crossOriginHead = crossOriginHeadRequest;
  const crossOriginPut = _XHR.crossOriginPut = crossOriginPutRequest;
  const crossOriginPost = _XHR.crossOriginPost = crossOriginPostRequest;
  function shouldTreatStatusCodeAsFailure(e) {
    return e === 202 || !(e >= 200 && e < 300);
  }
  _XHR.shouldTreatStatusCodeAsFailure = shouldTreatStatusCodeAsFailure;
  function retryStrategyForStatusCode(e, t) {
    return t && t[e] !== null && void 0 !== t[e] ? t[e] : e === 0 ? RetryStrategy.LINEAR_BACKOFF : e > 0 && e < 200 || e >= 200 && e < 400 || e >= 400 && e < 500 && e !== 429 ? RetryStrategy.NO_RETRY : e === 429 || e >= 500 && e <= 504 ? RetryStrategy.JITTERED_EXPONENTIAL_BACKOFF : RetryStrategy.NO_RETRY;
  }
  _XHR.retryStrategyForStatusCode = retryStrategyForStatusCode;
})(XHR || (XHR = {}));
/**
 * Custom error for XHR failures.
 */
export class XHRError extends Error {
  // $$E1

  constructor(e) {
    super(Object.prototype.hasOwnProperty.call(e, 'toString') ? e.toString() : 'Unknown XHR error');
    this.status = e.status;
    this.response = e.response;
    this.data = e.data;
    this.contentType = e.contentType;
    this.wafChallenge = e.wafChallenge;
  }
}

/**
 * Determines if a request should be sampled for logging.
 * @param e - Timer or similar object.
 * @param t - Response URL.
 * @returns Boolean indicating if request should be sampled.
 */
export function shouldSampleRequest(e, t) {
  // $$x2
  const excludedPatterns = ['api/web_logger', 's3-alpha-sig.figma.com', 's3-figma-videos-production-sig.com', 'figma-fonts-private-production', 'data:image/png;base64'];
  for (const pattern of excludedPatterns) {
    if (t && t.includes(pattern)) {
      return false;
    }
  }
  return Math.random() <= 0.05;
}

/**
 * Logs request/response metrics.
 * @param url - Original URL.
 * @param method - HTTP method.
 * @param xhr - XMLHttpRequest object.
 * @param timer - Timer instance.
 * @param attempt - Attempt number.
 * @param requestEvent - Event type.
 */
function logMetrics(url, method, xhr, timer, attempt, requestEvent) {
  // S
  if (timer == null) return;
  try {
    const duration = timer.finish();
    if (shouldSampleRequest(duration, xhr.responseURL)) {
      const isSlow = duration >= 1000;
      let sanitizedPath = '';
      try {
        sanitizedPath = new URL(normalizeUrlStrict(new URL(url, fakePath).toString())).pathname;
      } catch (error) {
        logWarning('xhr', 'Failed to create a sanitized request path.', {
          requestUrl: url,
          error
        }, {
          reportAsSentryError: true
        });
      }
      const orgId = getInitialOptions().org_id;
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
        timeout: xhr.timeout
      }, {
        batchRequest: true,
        forwardToDatadog: true
      });
    }
  } catch {
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
async function sendXhrRequest(attempt, t, i) {
  // w
  const settings = {
    ...(i ?? XHR.defaults),
    ...t
  };
  if (settings.waitForTabRecentlyVisible) {
    await _$$p();
  }
  if (mockServerInstance) {
    const mockResponse = mockServerInstance.handleRequest(t);
    if (mockResponse !== MockServer.SEND_REAL_REQUEST) {
      return mockResponse;
    }
  }
  const error = new Error('XHR request failed');
  return new Promise((resolve, reject) => {
    let sanitizedUrl;
    const xhr = new XMLHttpRequest();
    let timer = null;
    timer = new Timer();
    sanitizedUrl = settings.url;
    if (sanitizedUrl != null) {
      sanitizedUrl = sanitizedUrl.replace(/\?.*$/, '');
      sanitizedUrl = sanitizedUrl.replace(/^(\/api\/multiplayer\/)\w+(\/create_savepoint)$/, '$1XXX$2');
      sanitizedUrl = sanitizedUrl.replace(/^(\/component\/)\w+(\/canvas)$/, '$1XXX$2');
      sanitizedUrl = sanitizedUrl.replace(/^(\/style\/)\w+(\/canvas)$/, '$1XXX$2');
      sanitizedUrl = sanitizedUrl.replace(/^(https:\/\/s3-alpha\.figma\.com\/checkpoints\/)\w+\/\w+\/\w+\/\w+(\.fig)$/, '$1XXX$2');
    }
    const finalUrl = sanitizedUrl || settings.url || '';
    const rejectWithCause = err => {
      err.cause = error;
      reject(err);
    };
    const resolveWithError = response => {
      if (!XHR.shouldTreatStatusCodeAsFailure(response.status)) {
        console.warn('sendXr: overriding failed result status from', response.status, 'to 0');
        response.status = 0;
      }
      response.toString = () => {
        if (response.status === 400 || response.status === 402) {
          if (typeof response.data === 'object' && 'error' in response.data && response.data?.error) {
            return response.data.message;
          }
          if (typeof response.data === 'string') {
            return response.data;
          }
        }
        return `XHR for "${finalUrl}" failed with status ${response.status}`;
      };
      response.cause = error;
      resolve(response);
    };
    xhr.withCredentials = !!settings.withCredentials;
    try {
      xhr.timeout = settings.timeout;
      xhr.responseType = settings.responseType;
    } catch {
      // Ignore errors in setting timeout/responseType
    }
    const urlWithParams = settings.params ? `${settings.url.split('?')[0]}?${serializeQuery(settings.params, '&', '=', '')}` : settings.url;
    xhr.open(settings.method, urlWithParams, true);
    xhr.addEventListener(XHR.Events.LOAD, () => {
      try {
        logMetrics(urlWithParams, settings.method, xhr, timer, attempt, XHR.Events.LOAD);
        let parsedData = null;
        if (xhr.responseType === 'arraybuffer') {
          parsedData = new Uint8Array(xhr.response);
        } else if (xhr.responseType === 'blob') {
          parsedData = xhr.response;
        } else if (xhr.responseText) {
          try {
            parsedData = settings.raw || settings.rawResponse ? xhr.responseText : settings.load(xhr.responseText);
          } catch (parseError) {
            addBreadcrumb({
              category: 'xhr',
              message: `failed to parse response: ${parseError.message}`,
              data: {
                responseType: xhr.responseType,
                responseText: xhr.responseText,
                url: finalUrl
              }
            }, {});
            logWarning('xhr', `failed to parse response: ${parseError.message}`, {
              responseText: xhr.responseText,
              url: finalUrl
            }, {
              reportAsSentryError: false
            });
            parsedData = parseError instanceof SyntaxError ? xhr.responseText : null;
          }
        } else {
          addBreadcrumb({
            category: 'xhr',
            message: `unhandled responseType: ${xhr.responseType}`,
            data: {
              url: finalUrl
            }
          }, {});
        }
        if (XHR.shouldTreatStatusCodeAsFailure(xhr.status)) {
          resolveWithError(formatResponse(finalUrl, xhr, parsedData));
        } else {
          resolve(formatResponse(finalUrl, xhr, parsedData));
        }
      } catch (err) {
        rejectWithCause(err);
      }
    });
    xhr.addEventListener(XHR.Events.ABORT, () => {
      logMetrics(urlWithParams, settings.method, xhr, timer, attempt, XHR.Events.ABORT);
      resolveWithError(formatResponse(finalUrl, xhr, null));
    });
    xhr.addEventListener(XHR.Events.ERROR, () => {
      logMetrics(urlWithParams, settings.method, xhr, timer, attempt, XHR.Events.ERROR);
      resolveWithError(formatResponse(finalUrl, xhr, null));
    });
    xhr.addEventListener(XHR.Events.TIMEOUT, () => {
      logMetrics(urlWithParams, settings.method, xhr, timer, attempt, XHR.Events.TIMEOUT);
      resolveWithError(formatResponse(finalUrl, xhr, null));
    });
    if (settings.headers) {
      for (const header in settings.headers) {
        if (!(header === 'Content-Type' && settings.data && settings.data instanceof FormData) && {}.hasOwnProperty.call(settings.headers, header)) {
          xhr.setRequestHeader(header, settings.headers[header]);
        }
      }
    }
    if (settings.uploadEvents) {
      for (const event in settings.uploadEvents) {
        if ({}.hasOwnProperty.call(settings.uploadEvents, event)) {
          xhr.upload.addEventListener(event, settings.uploadEvents[event].bind(null, xhr), false);
        }
      }
    }
    if (settings.downloadEvents) {
      for (const event in settings.downloadEvents) {
        if ({}.hasOwnProperty.call(settings.downloadEvents, event)) {
          xhr.addEventListener(event, settings.downloadEvents[event].bind(null, xhr), false);
        }
      }
    }
    const data = typeof settings.data !== 'object' || settings.raw || settings.rawBody ? settings.data : settings.dump(settings.data);
    if (data !== undefined) {
      xhr.send(data);
    } else {
      xhr.send();
    }
  });
}

/**
 * Handles retries and error logic for XHR requests.
 * @param e - Request settings.
 * @param t - Defaults.
 * @returns Promise resolving to response.
 */
async function sendWithRetry(e, t) {
  // C
  let response;
  let attempt = 0;
  let wafHandled = false;
  const maxRetries = e.retryCount ?? t?.retryCount ?? 0;
  do {
    response = await sendXhrRequest(attempt, e, t);
    let retryStrategy = XHR.retryStrategyForStatusCode(response.status, e.retryStrategyOverride);
    if (response.wafChallenge) {
      if (!wafHandled) {
        attempt = -1;
        wafHandled = true;
      }
      retryStrategy = XHR.RetryStrategy.LINEAR_BACKOFF;
      await wafManager.waitForWAFValidation(response.wafChallenge === 'challenge' ? 'challenge' : 'captcha');
    }
    if (retryStrategy === XHR.RetryStrategy.NO_RETRY) {
      if (XHR.shouldTreatStatusCodeAsFailure(response.status)) {
        throw new XHRError(response);
      }
      return response;
    }
    if (retryStrategy === XHR.RetryStrategy.LINEAR_BACKOFF) {
      await delay(500 * attempt);
    } else if (retryStrategy === XHR.RetryStrategy.JITTERED_EXPONENTIAL_BACKOFF) {
      const baseDelay = Math.min(500 * 2 ** attempt, 300000);
      const jitter = 0.25 * Math.random() * baseDelay;
      await delay(baseDelay + jitter);
    } else {
      break;
    }
    attempt++;
  } while (attempt < 1 + maxRetries);
  if (!XHR.shouldTreatStatusCodeAsFailure(response.status)) {
    return response;
  }
  throw new XHRError(response);
}

/**
 * GET request with retry and logging.
 * @param url - URL.
 * @param params - Parameters.
 * @param options - Options.
 * @returns Promise resolving to response.
 */
export async function getRequest(url, params = {}, options) {
  // $$T3
  XHR.assertSameOrigin(url);
  const method = XHR.Methods.GET;
  const response = await sendWithRetry({
    url,
    method,
    params,
    ...options
  }, XHR.getDefaults);
  logRequestData(response, method, url);
  return response;
}

/**
 * PUT request.
 * @param t - URL.
 * @param i - Data.
 * @param n - Options.
 * @returns Promise resolving to response.
 */
async function putRequest(t, i, n) {
  // i
  const method = XHR.Methods.PUT;
  const response = await sendWithRetry({
    url: t,
    method,
    data: i,
    ...n
  }, XHR.defaults);
  logRequestData(response, method, t);
  return response;
}

/**
 * POST request.
 * @param t - URL.
 * @param i - Data.
 * @param n - Options.
 * @returns Promise resolving to response.
 */
async function postRequest(t, i, n) {
  // n
  const method = XHR.Methods.POST;
  const response = await sendWithRetry({
    url: t,
    method,
    data: i,
    ...n
  }, XHR.defaults);
  logRequestData(response, method, t);
  return response;
}

/**
 * PATCH request.
 * @param t - URL.
 * @param i - Data.
 * @param n - Options.
 * @returns Promise resolving to response.
 */
async function patchRequest(t, i, n) {
  // r
  const method = XHR.Methods.PATCH;
  const response = await sendWithRetry({
    url: t,
    method,
    data: i,
    ...n
  }, XHR.defaults);
  logRequestData(response, method, t);
  return response;
}

/**
 * DELETE request.
 * @param t - URL.
 * @param i - Data.
 * @param n - Options.
 * @returns Promise resolving to response.
 */
async function deleteRequest(t, i, n) {
  // a
  const method = XHR.Methods.DELETE;
  const response = await sendWithRetry({
    url: t,
    method,
    data: i,
    ...n
  }, XHR.defaults);
  logRequestData(response, method, t);
  return response;
}

/**
 * OPTIONS request.
 */
async function optionsRequest(t, i) {
  // s
  return await sendWithRetry({
    url: t,
    method: XHR.Methods.OPTIONS,
    ...i
  }, XHR.defaults);
}

/**
 * Cross-origin GET request.
 */
async function crossOriginGetRequest(t, i, n) {
  // o
  return await sendWithRetry({
    url: t,
    method: XHR.Methods.GET,
    params: i,
    ...n
  }, XHR.crossOriginGetDefaults);
}

/**
 * Cross-origin GET any request.
 */
async function crossOriginGetAnyRequest(e, t, i) {
  // l
  return await crossOriginGetRequest(e, t, i);
}

/**
 * Cross-origin HEAD request.
 */
async function crossOriginHeadRequest(t, i, n) {
  // d
  return await sendWithRetry({
    url: t,
    method: XHR.Methods.HEAD,
    params: i,
    ...n
  }, XHR.crossOriginDefaults);
}

/**
 * Cross-origin PUT request.
 */
async function crossOriginPutRequest(t, i, n) {
  // u
  return await sendWithRetry({
    url: t,
    method: XHR.Methods.PUT,
    data: i,
    ...n
  }, XHR.crossOriginDefaults);
}

/**
 * Cross-origin POST request.
 */
async function crossOriginPostRequest(t, i, n) {
  // p
  return await sendWithRetry({
    url: t,
    method: XHR.Methods.POST,
    data: i,
    ...n
  }, XHR.crossOriginDefaults);
}

/**
 * XHR utility namespace.
 */

/**
 * Paginated GET request.
 */
async function getPaginated(e, t) {
  // N
  let i = {};
  let {
    cursor,
    ...r
  } = t || {
    cursor: void 0
  };
  if (t?.cursor) {
    let n = new URL(t.cursor, document.baseURI);
    n.pathname !== e && console.error(`Pagination cursor does not match endpoint: ${e} ${t.cursor}`);
    i = Object.fromEntries(n.searchParams.entries());
  }
  let a = await getRequest(e, {
    ...r,
    ...i
  });
  return {
    ...a,
    data: {
      ...a.data,
      pagination: a.data.pagination ? {
        nextPage: a.data.pagination?.next_page ?? null,
        prevPage: a.data.pagination?.prev_page ?? null
      } : {
        nextPage: null,
        prevPage: null
      }
    }
  };
}

/**
 * Timer utility for tracking request duration and state.
 */
class Timer {
  // P

  finish = () => {
    if (this.finished) console.error('Timer already finished');
    this._timerId && clearTimeout(this._timerId);
    this.finished = true;
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
    document.removeEventListener('offline', this.onOffline);
    return Math.round(performance.now() - this._startTime);
  };
  onVisibilityChange = () => {
    document.visibilityState === 'hidden' && (this.backgrounded = true);
  };
  onOffline = () => {
    this.offlined = true;
  };
  constructor(e = {}, t) {
    this._startTime = performance.now();
    this._timerId = null;
    this.metadata = null;
    this.finished = false;
    this.backgrounded = false;
    this.offlined = false;
    this.backgrounded = document.visibilityState === 'hidden';
    this.offlined = navigator.onLine === false;
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    document.addEventListener('offline', this.onOffline);
    if (t) this.metadata = t;
    if (e.onTimeout) {
      if (!e.timeoutMs) throw new Error('onTimeout specified without timeoutMs');
      this._timerId = setTimeout(() => {
        e.onTimeout(this.backgrounded);
      }, e.timeoutMs);
    }
  }
}
export const API = {
  get: getRequest,
  getPaginated,
  put: putRequest,
  post: postRequest,
  del: deleteRequest,
  patch: patchRequest,
  crossOriginGet: crossOriginGetRequest
};
// Exported API
export let $$O0 = XHR;
export const Ay = XHR;
export const Dr = XHRError;
export const Fs = shouldSampleRequest;
export const GD = getRequest;
export const IF = API;
export const k9 = getRequest;