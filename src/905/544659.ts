/* eslint-disable regexp/no-unused-capturing-group */
import { logger } from '../905/651849'
import { ManifestErrorType } from '../figma_app/155287'
import { buildStaticUrl } from '../figma_app/169182'

// Regular expressions for URL validation
const ALLOWED_DOMAINS_REGEX = /^(?:(https?:|wss?:)\/\/)?((?:\*\.)?(?:[-a-z\d]+\.)+[a-z]{2,})((?:\/[-\w%.~+@]*)*$)/
const DEV_ALLOWED_DOMAINS_REGEX = /^(?:(https?:|wss?:)\/\/)?((?:\*\.)?(?:[-a-z\d]+\.)+[a-z]{2,}|localhost)(?::(\d+))?((?:\/[-\w%.~+@]*)*$)/
const SCHEME_REQUIRED_REGEX = /^(https?:|wss?:)\/\//

// Validation error messages
const REASONING_REQUIRED_ALL_DOMAINS = 'Invalid value for networkAccess. If you want to allow all domains, please add a "reasoning" field to the networkAccess object.'
const REASONING_REQUIRED_LOCALHOST = 'Invalid value for networkAccess. If you want to allow localhost, please add a "reasoning" field to the networkAccess object. If you only need to access localhost for development, please add a "devAllowedDomains" field instead.'

/**
 * Checks if a manifest error is related to network access validation
 * @param error - The manifest error to check
 * @returns True if the error is a network access validation error
 */
export function isNetworkAccessValidationError(error: any): boolean {
  return error.type === ManifestErrorType.VALIDATE
    && (error.text === REASONING_REQUIRED_ALL_DOMAINS || error.text === REASONING_REQUIRED_LOCALHOST)
}

/**
 * Validates if a domain is valid
 * @param domain - The domain to validate
 * @returns True if the domain is valid
 */
function isValidDomain(domain: string): boolean {
  return !!DEV_ALLOWED_DOMAINS_REGEX.test(domain) || domain === '*'
}

/**
 * Validates an array of allowed domains
 * @param allowedDomains - Array of domains to validate
 * @returns Validation result with isValid flag and optional error message
 */
function validateAllowedDomains(allowedDomains: string[]): { isValid: boolean, validationErr?: string } {
  if (allowedDomains.length === 0) {
    return {
      isValid: false,
      validationErr: 'Invalid value for allowedDomains. To block all network access, set allowedDomains: ["none"]',
    }
  }

  if (allowedDomains.length === 1 && allowedDomains[0] === 'none') {
    return { isValid: true }
  }

  if (allowedDomains.includes('none')) {
    return {
      isValid: false,
      validationErr: 'Invalid value for allowedDomains. \'none\' must be the only value in the array.',
    }
  }

  // Check each domain is valid
  for (const domain of allowedDomains) {
    if (!isValidDomain(domain)) {
      return {
        isValid: false,
        validationErr: `Invalid value for allowedDomains. '${domain}' must be a valid URL.`,
      }
    }
  }

  // Check for duplicates
  const domainCounts = new Map<string, number>()
  for (const domain of allowedDomains) {
    const count = domainCounts.get(domain) || 0
    domainCounts.set(domain, count + 1)
  }

  for (const [domain, count] of domainCounts) {
    if (count > 1) {
      return {
        isValid: false,
        validationErr: `Invalid value for allowedDomains. '${domain}' is duplicated.`,
      }
    }
  }

  return { isValid: true }
}

/**
 * Validates network access configuration
 * @param config - Network access configuration object
 * @returns Validation result with isValid flag and optional error message
 */
export function validateNetworkAccess(config: {
  allowedDomains: string[]
  devAllowedDomains?: string[]
  reasoning?: string
}): { isValid: boolean, validationErr?: string } {
  const { allowedDomains, devAllowedDomains, reasoning } = config

  // Check if all domains are allowed without reasoning
  if (allowedDomains.includes('*') && !reasoning) {
    return {
      isValid: false,
      validationErr: REASONING_REQUIRED_ALL_DOMAINS,
    }
  }

  // Check if localhost is allowed without reasoning
  if (allowedDomains.some(domain =>
    isValidDomain(domain) && !ALLOWED_DOMAINS_REGEX.test(domain) && domain !== '*')
  && !reasoning
  ) {
    return {
      isValid: false,
      validationErr: REASONING_REQUIRED_LOCALHOST,
    }
  }

  // Check reasoning length
  if (reasoning && reasoning.length > 1000) {
    return {
      isValid: false,
      validationErr: 'Invalid value for networkAccess. The "reasoning" field must be less than 1000 characters.',
    }
  }

  // Validate allowed domains
  const allowedDomainsValidation = validateAllowedDomains(allowedDomains)
  if (!allowedDomainsValidation.isValid) {
    return allowedDomainsValidation
  }

  // Check that all domains have a scheme
  for (const domain of allowedDomains) {
    if (!SCHEME_REQUIRED_REGEX.test(domain) && domain !== '*' && domain !== 'none') {
      return {
        isValid: false,
        validationErr: `Invalid value for allowedDomains. '${domain}' must include a scheme, such as https://.`,
      }
    }
  }

  // Validate dev allowed domains if present
  if (devAllowedDomains) {
    for (const domain of devAllowedDomains) {
      if (!isValidDomain(domain)) {
        return {
          isValid: false,
          validationErr: `Invalid value for devAllowedDomains. '${domain}' must be a valid URL.`,
        }
      }
    }
  }

  return { isValid: true }
}

/**
 * Checks if a URL's protocol matches the expected protocol
 * @param url - The URL to check
 * @param expectedProtocol - The expected protocol
 * @returns True if protocols match or are compatible
 */
function isProtocolMatch(url: URL, expectedProtocol: string = ''): boolean {
  if (!expectedProtocol)
    return true

  const expected = expectedProtocol.toLowerCase()
  const actual = url.protocol.toLowerCase()

  return expected === actual
    || (expected === 'http:' && actual === 'https:')
    || (expected === 'ws:' && (actual === 'wss:' || actual === 'http:' || actual === 'https:'))
    || (expected === 'wss:' && actual === 'https:')
}

/**
 * Checks if a URL's host matches the expected host
 * @param url - The URL to check
 * @param expectedHost - The expected host
 * @returns True if hosts match or match with wildcard
 */
function isHostMatch(url: URL, expectedHost: string = ''): boolean {
  if (!expectedHost)
    return false

  const expected = expectedHost.toLowerCase()
  const actual = url.host.toLowerCase()

  if (expected.startsWith('*')) {
    const suffix = expected.slice(1)
    return actual.endsWith(suffix)
  }

  return expected === actual
}

/**
 * Checks if a URL's path matches the expected path
 * @param url - The URL to check
 * @param expectedPath - The expected path
 * @returns True if paths match
 */
function isPathMatch(url: URL, expectedPath: string = ''): boolean {
  if (!expectedPath)
    return true

  const actualPath = url.pathname

  if (expectedPath === '/' && actualPath === '')
    return true

  const expectsTrailingSlash = expectedPath.endsWith('/')
  const expectedParts = expectedPath.split('/')
  const actualParts = actualPath.split('/')

  if (expectedParts.length > actualParts.length)
    return false

  if (!expectsTrailingSlash) {
    if (expectedParts.length !== actualParts.length)
      return false
    if (expectedParts.pop() !== '')
      return false
  }

  return expectedParts.every((part, index) => decodeURI(part) === decodeURI(actualParts[index]))
}

/**
 * Checks if a URL is allowed based on allowed domains
 * @param url - The URL to check
 * @param allowedDomains - Array of allowed domains
 * @returns True if the URL is allowed
 */
export function isUrlAllowed(url: string, allowedDomains: string[]): boolean {
  const validation = validateAllowedDomains(allowedDomains)
  if (!validation.isValid) {
    logger.warn(validation.validationErr)
    return true // Allow if validation fails
  }

  if (allowedDomains.includes('*'))
    return true
  if (allowedDomains.length === 1 && allowedDomains[0] === 'none')
    return false

  try {
    const requestUrl = new Request(url).url
    return allowedDomains.some((domain) => {
      const match = domain.match(ALLOWED_DOMAINS_REGEX)
      if (!match)
        return false

      const [, protocol, host, path] = match
      const urlObj = new URL(requestUrl)

      return isProtocolMatch(urlObj, protocol)
        && isHostMatch(urlObj, host)
        && isPathMatch(urlObj, path)
    })
  }
  catch {
    return false
  }
}

/**
 * Applies Content Security Policy to a document based on allowed domains
 * @param iframe - The iframe element
 * @param allowedDomains - Array of allowed domains
 */
export function applyContentSecurityPolicy(iframe: HTMLIFrameElement, allowedDomains: string[]): void {
  const head = iframe.contentDocument?.head
  if (!head)
    return

  const validation = validateAllowedDomains(allowedDomains)
  if (!validation.isValid) {
    logger.warn(validation.validationErr)
    return
  }

  if (allowedDomains.includes('*'))
    return

  const meta = document.createElement('meta')
  meta.httpEquiv = 'Content-Security-Policy'

  const domainsString = allowedDomains.join(' ')
  let defaultSrc = 'default-src data: blob:'
  let scriptSrc = 'script-src \'unsafe-inline\' \'unsafe-eval\' data: blob:'
  let styleSrc = 'style-src \'unsafe-inline\' \'unsafe-eval\' data: blob:'
  let fontSrc = `font-src ${buildStaticUrl('webfont/')} data: blob:`

  if (domainsString !== 'none') {
    defaultSrc += ` ${domainsString}`
    scriptSrc += ` ${domainsString}`
    styleSrc += ` ${domainsString}`
    fontSrc += ` ${domainsString}`
  }

  meta.content = `${defaultSrc}; ${scriptSrc}; ${styleSrc}; ${fontSrc};`
  head.append(meta)
}

export const jl = isNetworkAccessValidationError
export const of = applyContentSecurityPolicy
export const pI = validateNetworkAccess
export const pT = isUrlAllowed
