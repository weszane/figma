import type { DOMPurify } from 'dompurify'
import dompurify from 'dompurify'

/**
 * Original: a
 * Default DOMPurify configuration used for sanitization.
 */
const defaultConfig = {
  ALLOWED_TAGS: ['p', 'ol', 'ul', 'blockquote', 'h1', 'h2', 'strong', 'i', 'em', 's', 'a', 'li', 'code', 'pre', 'br', 'div'],
}

/**
 * Original: s = dompurify()()
 * Preserve the initializer shape to maintain behavior.
 */
const sanitizer: DOMPurify = dompurify()()

/**
 * Original: $$o1
 * Sanitize HTML using the default configuration.
 */
export function sanitizeHtml(input: string): string {
  return sanitizer.sanitize(input, defaultConfig)
}

/**
 * Original: $$l0
 * Sanitize HTML using default config while forbidding specific attributes.
 * @param input HTML string to sanitize
 * @param forbiddenAttributes List of attribute names to forbid
 */
export function sanitizeHtmlWithForbiddenAttributes(input: string, forbiddenAttributes: string[]): string {
  return sanitizer.sanitize(input, {
    ...defaultConfig,
    FORBID_ATTR: forbiddenAttributes,
  })
}

/**
 * Hook to enforce link target and rel attributes post-sanitization.
 * Original hook attached to: s.addHook('afterSanitizeAttributes', ...)
 */
sanitizer.addHook('afterSanitizeAttributes', (node: any) => {
  if ('target' in node) {
    node.setAttribute('target', '_blank')
    node.setAttribute('rel', 'noreferrer noopener nofollow ugc')
  }
})

/**
 * Backward-compatible exports mapping old names to refactored functions.
 * - Original function names: $$o1, $$l0
 * - Original re-exports: W = $$l0, z = $$o1
 */
export const $$o1 = sanitizeHtml
export const $$l0 = sanitizeHtmlWithForbiddenAttributes
export const W = sanitizeHtmlWithForbiddenAttributes
export const z = sanitizeHtml
