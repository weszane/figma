import dompurify from 'dompurify'
/**
 * Sanitizes HTML input and extracts plain text content.
 * Original function name: $$a0
 * @param input - The HTML string to process.
 * @returns The extracted plain text, or an empty string if input is falsy or an error occurs.
 */
export function sanitizeAndExtractText(input: string): string {
  if (!input) {
    return ''
  }
  try {
    // Replace specific tags with newlines for better text flow
    let modifiedInput = input.replace(/<br>|<\/p>|<\/h2>|<\/li>/g, '$&\n')
    // Sanitize the input using DOMPurify
    let sanitized = sanitizeHtml(modifiedInput)
    // Parse and extract text content
    return new DOMParser().parseFromString(sanitized, 'text/html').documentElement.textContent?.trim() ?? ''
  }
  catch (error) {
    console.error(error)
    return ''
  }
}

/**
 * Sanitizes HTML input using DOMPurify.
 * Original variable name: s
 * @param input - The HTML string to sanitize.
 * @returns The sanitized HTML string.
 */
function sanitizeHtml(input: string): string {
  return dompurify.sanitize(input)
}

/**
 * Escapes HTML entities in a string.
 * Original function name: $$o1
 * @param input - The string to escape.
 * @returns The escaped string, or an empty string if input is falsy.
 */
export function escapeHtmlEntities(input: string): string {
  if (!input) {
    return ''
  }
  return input.replace(/[&"'<>]/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;'
      case '"':
        return '&quot;'
      case '\'':
        return '&#39;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      default:
        return char
    }
  })
}

// Export aliases for backward compatibility
// Original export names: At, Ul
export const At = sanitizeAndExtractText
export const Ul = escapeHtmlEntities
