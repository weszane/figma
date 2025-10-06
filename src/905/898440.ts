// Refactored from 898440.ts



// Constant for localStorage key (original: s)
const AWS_WAF_TOKEN_CHALLENGE_ATTEMPTS = 'aws_waf_token_challenge_attempts'

// Get window object, throws if not available (original: o)
function getWindow(): Window {
  const win = n ?? (typeof window !== 'undefined' ? window : undefined)
  if (!win)
    throw new Error('Expected window object to be defined')
  return win
}

// Get document object, throws if not available (original: l)
function getDocument(): Document {
  const doc = r ?? (typeof document !== 'undefined' ? document : undefined)
  if (!doc)
    throw new Error('Expected document object to be defined')
  return doc
}

// Deferred promise helper (original: inline in waitForWAFValidation)
interface Deferred<T = void> {
  promise: Promise<T>
  resolve: (value: T) => void
  reject: (reason?: any) => void
  status: 'pending' | 'resolved' | 'rejected'
  result?: T
  error?: any
}

/**
 * Creates a deferred promise object.
 */
function createDeferred<T = void>(): Deferred<T> {
  let resolve!: (value: T) => void
  let reject!: (reason?: any) => void
  const deferred: Deferred<T> = {
    promise: new Promise<T>((res, rej) => {
      resolve = res
      reject = rej
    }),
    resolve: (value: T) => {
      deferred.status = 'resolved'
      deferred.result = value
      resolve(value)
    },
    reject: (reason?: any) => {
      deferred.status = 'rejected'
      deferred.error = reason
      reject(reason)
    },
    status: 'pending',
  }
  return deferred
}

// WAFVerification types
type WAFVerificationType = 'challenge' | 'captcha'
interface PendingWAFVerification {
  type: WAFVerificationType
  deferred: Deferred
  iframe: HTMLIFrameElement
}

/**
 * Handles WAF validation logic.
 * Original class name: $$d1
 */
export class WAFValidationHandler {
  pendingWAFVerification?: PendingWAFVerification

  /**
   * Waits for WAF validation to complete.
   * @param type - The type of WAF action ("challenge" or "captcha").
   */
  waitForWAFValidation(type: WAFVerificationType): Promise<void> {
    if (this.pendingWAFVerification) {
      return this.pendingWAFVerification.deferred.promise
    }

    const deferred = createDeferred()

    // Update localStorage attempts
    try {
      const attemptsRaw = getWindow().localStorage.getItem(AWS_WAF_TOKEN_CHALLENGE_ATTEMPTS)
      if (attemptsRaw) {
        const attempts = JSON.parse(attemptsRaw)
        attempts.attempts = 1
        getWindow().localStorage.setItem(AWS_WAF_TOKEN_CHALLENGE_ATTEMPTS, JSON.stringify(attempts))
      }
    }
    catch (err) {
      console.error(err)
    }

    if (type === 'challenge') {
      const iframe = getDocument().createElement('iframe')
      iframe.src = `${getWindow().location.origin}/waf-validation`
      iframe.id = 'waf-iframe'
      getDocument().body.appendChild(iframe)
      getWindow().addEventListener('message', this.onMessage)

      this.pendingWAFVerification = {
        type: 'challenge',
        deferred,
        iframe,
      }
      return deferred.promise
    }

    if (type === 'captcha') {
      throw new Error('Unhandled in Cortex client')
    }

    return deferred.promise
  }

  /**
   * Handles postMessage events for WAF validation.
   * Original property name: onMessage
   */
  onMessage = (event: MessageEvent) => {
    if (
      this.pendingWAFVerification
      && event.data === 'waf-successful'
    ) {
      if (this.pendingWAFVerification.type === 'challenge') {
        const { deferred, iframe } = this.pendingWAFVerification
        this.pendingWAFVerification = undefined
        deferred.resolve()
        iframe.remove()
      }
      getWindow().removeEventListener('message', this.onMessage)
    }
  }
}

// Exported instance (original: $$d1)
export const WAFValidationHandlerInstance = new WAFValidationHandler()
export const Kg = WAFValidationHandlerInstance

/**
 * Determines the WAF action type from a fetch response.
 * Original function name: $$c0
 * @param response - The fetch response object.
 * @returns "challenge", "captcha", or null.
 */
export function getWAFActionType(response: { url?: string, headers: Headers }): WAFVerificationType | null {
  if (!response.url || !response.url.startsWith(getWindow().location.origin))
    return null
  const wafAction = response.headers.get('x-amzn-waf-action')
  if (!wafAction)
    return null
  return wafAction === 'challenge' ? 'challenge' : 'captcha'
}

// Exported alias (original: HP)
export const HP = getWAFActionType

// Internal variables (original: n, r)
let n: Window | undefined
let r: Document | undefined
