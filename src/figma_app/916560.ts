import dompurify from 'dompurify'
import { getFeatureFlags } from '../905/601108'
import { pasteEmbedThunk } from '../905/994901'

/**
 * Allowed embed domains for FigJam.
 * (original: s)
 */
const EMBED_DOMAIN_ALLOWLIST = new Set([
  'airtable.com',
  'asana.com',
  'calendly.com',
  'chorus.ai',
  'coda.io',
  'codepen.io',
  'docs.google.com',
  'drive.google.com',
  'paper.dropbox.com',
  'figma.com',
  'framer.com',
  'github.com',
  'gmail.com',
  'atlassian.com',
  'loom.com',
  'lottiefiles.com',
  'lucidchart.com',
  'maze.co',
  'office.com',
  'miro.com',
  'mode.com',
  'mural.co',
  'notion.so',
  'quip.com',
  'rollbar.com',
  'sentry.io',
  'slab.com',
  'slideshare.net',
  'surveymonkey.com',
  'tableau.com',
  'trello.com',
  'typeform.com',
  'usertesting.com',
  'whimsical.com',
  'behance.net',
  'dribbble.com',
  'facebook.com',
  'google.com',
  'maps.google.com ',
  'instagram.com',
  'linkedin.com',
  'medium.com',
  'pinterest.com',
  'soundcloud.com',
  'spotify.com',
  'open.spotify.com',
  'tiktok.com',
  'twitter.com',
  'vimeo.com',
  'youtu.be',
  'youtube.com',
])

/**
 * Regex to extract src from iframe HTML.
 * (original: o)
 */
const IFRAME_SRC_REGEX = /^<iframe[^>]+src\s*=\s*(?:"([^">]+)"|'([^'>]+)').*><\/iframe>$/

/**
 * Regex to validate URLs.
 * (original: l)
 */
const URL_VALIDATION_REGEX = /^(?:(?:https?|ftp):)?\/\/(?:\S+@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[01])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4])|(?:(?:[a-z0-9\u00A1-\uFFFF][\w\u00A1-\uFFFF-]{0,62})?[a-z0-9\u00A1-\uFFFF]\.)+[a-z\u00A1-\uFFFF]{2,}\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i

/**
 * Extracts the hostname from a URL string.
 * @param url - The URL string.
 * @returns The hostname without 'www.' prefix.
 * (original: $$d3)
 */
export function extractHostname(url: string): string {
  let hostname = new URL(url).hostname
  if (hostname.startsWith('www.')) {
    hostname = hostname.slice(4)
  }
  return hostname
}

/**
 * Checks if a URL is allowed for embedding based on feature flags and allowlist.
 * @param url - The URL string.
 * @returns True if allowed, false otherwise.
 * (original: $$c2)
 */
export function isEmbedAllowed(url: string): boolean {
  if (!getFeatureFlags().figjam_embeds_allowlist) {
    return true
  }
  try {
    const hostname = extractHostname(url)
    return EMBED_DOMAIN_ALLOWLIST.has(hostname)
  }
  catch {
    console.error('Invalid URL in embed')
    return false
  }
}

/**
 * Sanitizes and extracts the src attribute from an iframe HTML string.
 * @param html - The HTML string.
 * @returns The src URL or empty string.
 * (original: $$u1)
 */
export function extractIFrameSrc(html: string): string {
  if (!html.startsWith('<iframe')) {
    return ''
  }
  const sanitized = dompurify.sanitize(html, {
    ALLOWED_TAGS: ['iframe'],
    ALLOWED_ATTR: ['src'],
  })
  const match = IFRAME_SRC_REGEX.exec(sanitized)
  return match && match.length > 1 ? match[1] : ''
}

/**
 * Validates and parses a URL or iframe HTML string.
 * @param input - The input string (URL or iframe HTML).
 * @returns EmbedInfo object if valid, null otherwise.
 * (original: $$p4)
 */
export interface EmbedInfo {
  isFromIFrame: boolean
  url: string
}

export function parseEmbedInput(input: string): EmbedInfo | null {
  const iframeSrc = extractIFrameSrc(input)
  const urlCandidate = iframeSrc || input
  const normalizedUrl = urlCandidate.startsWith('http://') || urlCandidate.startsWith('https://')
    ? urlCandidate
    : `https://${urlCandidate}`
  if (URL_VALIDATION_REGEX.test(normalizedUrl)) {
    return {
      isFromIFrame: Boolean(iframeSrc),
      url: normalizedUrl,
    }
  }
  return null
}

/**
 * Handles embed paste logic and returns validation result.
 * @param dispatch - Dispatch function.
 * @param clipboardText - Clipboard text.
 * @param entrypoint - Entrypoint string.
 * @returns Validation result object.
 * (original: $$_0)
 */
export interface EmbedValidationResult {
  valid: boolean
  reason?: string
}

export function handleEmbedPaste(
  dispatch: (action: any) => void,
  clipboardText: string,
  entrypoint: string,
): EmbedValidationResult {
  const embedInfo = parseEmbedInput(clipboardText.trim())
  if (embedInfo) {
    dispatch(
      pasteEmbedThunk({
        clipboardText,
        url: embedInfo.url,
        isTextIframe: embedInfo.isFromIFrame,
        entrypoint,
      }),
    )
    return { valid: true }
  }
  return {
    valid: false,
    reason: 'Text was not a valid URL or IFrame',
  }
}

/**
 * Parses Asana embed HTML and returns array of embed info.
 * @param html - The HTML string.
 * @param originalText - The original clipboard text.
 * @returns Array of EmbedInfo or null if mismatch.
 * (original: $$h5)
 */
export function parseAsanaEmbed(
  html: string = '',
  originalText: string,
): EmbedInfo[] | null {
  if (!html.startsWith('<meta charset=\'utf-8\'><div><a href=\'https://app.asana.com')) {
    return null
  }
  const sanitized = dompurify.sanitize(html, {
    ALLOWED_TAGS: ['a'],
    ALLOWED_ATTR: ['href'],
  }).split('<a')
  const hrefRegex = /href="(https:\/\/app\.asana\.com[^"]*)"/
  const embeds: EmbedInfo[] = []
  for (const part of sanitized) {
    const match = part.match(hrefRegex)
    if (match && match[1]) {
      embeds.push({
        url: match[1],
        isFromIFrame: false,
      })
    }
  }
  return embeds.length !== originalText.split('\n').length ? null : embeds
}

// Exported names refactored for clarity and traceability
export const CV = handleEmbedPaste
export const Cg = extractIFrameSrc
export const Cy = isEmbedAllowed
export const Js = extractHostname
export const KJ = parseEmbedInput
export const LU = parseAsanaEmbed
