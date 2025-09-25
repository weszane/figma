import { getFeatureFlags } from '../905/601108'

/**
 * Checks if server-side redaction feature is enabled
 * (original name: $$i0)
 */
const isServerSideRedactionEnabled = (): boolean => getFeatureFlags().figmascope_server_side_redaction

/**
 * Checks if server-side journal redaction feature is enabled
 * (original name: $$a1)
 */
const isServerSideJournalRedactionEnabled = (): boolean => getFeatureFlags().figmascope_server_side_journal_redaction

/**
 * Set of property names that should be redacted
 * (original name: $$s3)
 */
export const REDACTABLE_PROPERTIES = new Set<string>([
  'name',
  'characters',
  'symbolDescription',
  'description',
  'url',
  'canvasName',
  'textContent',
  'sourceCode',
  'summary',
])

/**
 * Regular expression to match strings that should not be redacted
 * (original name: o)
 */
// eslint-disable-next-line prefer-regex-literals
const NON_REDACTABLE_PATTERN = new RegExp(
  // eslint-disable-next-line regexp/no-useless-escape, regexp/no-unused-capturing-group
  `^(background|circle|column|component|dialog|document|ellipse|frame|group|icon|image|internal only canvas|line|padding|page|path|polygon|rectangle|row|star|text|union|vector)\\s*[\\d\\.]*$|^\\w\u2022+\\w( \\(\\d+ characters\\))?$`,
)

/**
 * Redacts text content based on the specified mode
 * (original name: $$l2)
 * @param text - The text to potentially redact
 * @param mode - The redaction mode ('show' to bypass redaction)
 * @returns The original or redacted text
 */
export function redactText(text: string, mode: string): string {
  if (text === '') {
    return ''
  }

  if (mode === 'show') {
    return text
  }

  const isQuoted = text[0] === '"' && text[text.length - 1] === '"'
  const content = isQuoted ? text.substring(1, text.length - 1) : text

  if (NON_REDACTABLE_PATTERN.test(content.toLowerCase())) {
    return text
  }

  const quote = isQuoted ? '"' : ''
  return quote + content[0] + content.substring(1, content.length - 1).replace(/\S/g, '\u2022') + content[content.length - 1] + quote
}

export const M0 = isServerSideRedactionEnabled
export const VG = isServerSideJournalRedactionEnabled
export const bU = redactText
export const wh = REDACTABLE_PROPERTIES
