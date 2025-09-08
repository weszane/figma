import { getCookieValue, getStorage } from '../905/657224'
import { BrowserInfo } from '../figma_app/778880'

/**
 * The anonymous ID cookie name (original: $$a2)
 */
export const ANONYMOUS_ID_COOKIE = 'ajs_anonymous_id'

/**
 * CookieManager handles getting, setting, and deleting cookies.
 * (original class: s)
 */
export class CookieManager {
  /**
   * Retrieves a cookie value and parses it as JSON if possible.
   * @param name - Cookie name
   * @returns Parsed cookie value or null
   */
  // get
  get(name: string): any {
    const rawValue = getCookieValue(document.cookie, name)
    if (rawValue === null)
      return null
    try {
      return JSON.parse(rawValue)
    }
    catch {
      return rawValue
    }
  }

  /**
   * Sets a cookie with optional attributes.
   * @param name - Cookie name
   * @param value - Value to store
   * @param options - Optional cookie attributes
   */
  // set
  set(
    name: string,
    value: any,
    options?: { maxAge?: number, sameSite?: string, path?: string },
  ): void {
    const encodedValue = encodeURI(JSON.stringify(value))
    const expires = new Date(Date.now() + 2592e6).toUTCString()
    let cookieStr = `${name}=${encodedValue}; path=/;`

    if (options?.maxAge) {
      cookieStr += ` max-age=${options.maxAge};`
    }
    else {
      cookieStr += ` expires=${expires};`
    }

    // Special domain handling for anonymous ID cookie
    if (name === ANONYMOUS_ID_COOKIE) {
      const hostParts = location.hostname.split('.')
      cookieStr += ` domain=.${hostParts.slice(-2).join('.')};`
    }

    const isSecure = location.protocol === 'https:'
    const [osMajor, osMinor] = `${BrowserInfo.osversion}`.split('.')

    // Safari/macOS compatibility for SameSite=None
    if (
      !(
        options?.sameSite === 'none'
        && BrowserInfo.safari
        && +BrowserInfo.version < 13
        && BrowserInfo.mac
        && +osMajor < 11
        && +osMinor < 15
      )
    ) {
      let sameSite = options?.sameSite || 'lax'
      if (!isSecure && sameSite === 'none')
        sameSite = 'lax'
      cookieStr += ` samesite=${sameSite};`
    }

    if (options?.path) {
      cookieStr += ` path=${options.path};`
    }
    if (isSecure) {
      cookieStr += ' secure;'
    }

    document.cookie = cookieStr
  }

  /**
   * Deletes a cookie by name.
   * @param name - Cookie name
   * @param opts - Optional: includeDotDomainPrefix
   */
  // delete
  delete(
    name: string,
    opts: { includeDotDomainPrefix?: boolean } = {},
  ): void {
    let cookieStr = `${name}=; Max-Age=0; path=/;`
    if (opts.includeDotDomainPrefix) {
      cookieStr += `domain=.${window.location.hostname}`
    }
    document.cookie = cookieStr
  }
}

/**
 * Returns a CookieManager instance if cookies are enabled, else null.
 * (original: $$o0)
 */
export function createCookieManager(): CookieManager | null {
  if (navigator.cookieEnabled) {
    try {
      // eslint-disable-next-line ts/no-unused-expressions
      document.cookie
      return new CookieManager()
    }
    catch {
      // ignore
    }
  }
  return null
}

/**
 * Returns a CookieManager if possible, otherwise falls back to storage.
 * (original: $$l1)
 */
export function getCookieOrStorage(): CookieManager | ReturnType<typeof getStorage> | null {
  return createCookieManager() || getStorage()
}

// Refactored exports
export const OZ = createCookieManager
export const UG = getCookieOrStorage
export const nL = ANONYMOUS_ID_COOKIE
