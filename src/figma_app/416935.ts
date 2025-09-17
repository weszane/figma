/* eslint-disable regexp/no-super-linear-backtracking */
/* eslint-disable no-control-regex */
import { jsonData } from '../905/306099'
import { levenshteinDistance } from '../905/561988'
import { getInitialOptions } from '../figma_app/169182'
/**
 * Checks if the given email string is valid.
 * Original: $$s9
 * @param email - The email string to validate.
 * @returns True if valid, false otherwise.
 */
export function isValidEmail(email: string): boolean {
  return (
    /^[^<>/\\:?*"|]*$/.test(email)
    && /^[\u0000-\u007F]+$/.test(email)
    && /^[^@\s]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(email)
  )
}

/**
 * Parses a string of emails separated by ;, ,, or newlines.
 * Original: $$o1
 * @param input - The input string containing emails.
 * @returns Array of trimmed email addresses.
 */
export function parseEmailList(input: string): string[] {
  const result: string[] = []
  for (const part of input.split(/[;,\n]/g)) {
    const match = part.match(/^.*<(.*)>$/)
    let email = match ? match[1] : part
    email = email.trim()
    if (email)
      result.push(email)
  }
  return result
}

const emailDomainList = jsonData
const emailDomainSet: Record<string, boolean> = {}
emailDomainList.forEach((domain) => {
  emailDomainSet[domain] = true
})
const allowedDomains = ['ge.com']

/**
 * Suggests a similar domain if the given domain is not allowed.
 * Original: $$u3
 * @param domain - The domain to check.
 * @returns Suggested domain or null.
 */
export function suggestSimilarDomain(domain: string): string | null {
  if (domain in emailDomainSet || allowedDomains.includes(domain))
    return null
  for (const knownDomain of emailDomainList) {
    if (levenshteinDistance(domain, knownDomain) === 1)
      return knownDomain
  }
  return null
}

/**
 * Extracts the domain part from an email.
 * Original: $$p10
 * @param email - The email address.
 * @returns Domain string or null.
 */
export function getEmailDomain(email: string): string | null {
  return email.toLowerCase().split('@')[1] || null
}

/**
 * Checks if the email ends with the configured figma email suffix.
 * Original: $$_7
 * @param email - The email address.
 * @returns True if matches, false otherwise.
 */
export function isFigmaEmailSuffix(email: string): boolean {
  return !!email && email.endsWith(getInitialOptions().figma_email_suffix)
}

/**
 * Checks if the domain of the email is in the allowed set.
 * Original: $$h8
 * @param email - The email address.
 * @returns True if domain is allowed, false otherwise.
 */
export function isAllowedDomain(email: string): boolean {
  const domain = getEmailDomain(email)
  return !!domain && domain in emailDomainSet
}

/**
 * Checks if the email is not in the allowed domain set and has a domain.
 * Original: $$m0
 * @param email - The email address.
 * @returns True if not allowed and has domain, false otherwise.
 */
export function isNotAllowedEmail(email: string): boolean {
  if (email) {
    const domain = getEmailDomain(email)
    if (isAllowedDomain(email))
      return false
    if (domain)
      return true
  }
  return false
}

/**
 * Checks if the email meta type is 'work'.
 * Original: $$g5
 * @param obj - Object with meta property.
 * @returns True if meta.email_domain_type is 'work', false otherwise.
 */
export function isWorkDomainType(obj: { meta?: { email_domain_type?: string } }): boolean {
  return (obj.meta ? obj.meta.email_domain_type : undefined) === 'work'
}

/**
 * Checks if the email is a valid figma email.
 * Original: $$f6
 * @param email - The email address.
 * @returns True if valid figma email, false otherwise.
 */
export function isFigmaEmail(email: string): boolean {
  return (
    !!email
    && isValidEmail(email)
    && (email.endsWith('@figma.com')
      || email.endsWith('@test.figma.com')
      || email.endsWith('@dev.figma.com'))
  )
}

/**
 * Checks if the email is a synthetic tester email.
 * Original: $$E2
 * @param email - The email address.
 * @returns True if synthetic tester, false otherwise.
 */
export function isSyntheticTesterEmail(email: string): boolean {
  return !!email && email.startsWith('synthetic-tester') && email.endsWith('@test.figma.com')
}

/**
 * Checks if the email is the support share email.
 * Original: $$y4
 * @param email - The email address.
 * @returns True if support share email, false otherwise.
 */
export function isSupportShareEmail(email: string): boolean {
  return email === 'support-share@figma.com'
}

// Exported names refactored for clarity
export const HS = isNotAllowedEmail
export const N0 = parseEmailList
export const Ng = isSyntheticTesterEmail
export const bs = suggestSimilarDomain
export const fT = isSupportShareEmail
export const iE = isWorkDomainType
export const jm = isFigmaEmail
export const nD = isFigmaEmailSuffix
export const qe = isAllowedDomain
export const xf = isValidEmail
export const zN = getEmailDomain
