/**
 * Supported input types for text-like fields.
 * (original variable: n)
 */
export const supportedInputTypes = [
  'text',
  'email',
  'number',
  'password',
  'search',
  'tel',
  'url',
]

/**
 * Checks if the element is a text-like input or textarea.
 * @param element - The DOM element to check.
 * @returns True if element is HTMLTextAreaElement or supported HTMLInputElement.
 * (original function: $$r0)
 */
export function isTextLikeInput(element: Element): boolean {
  return (
    element instanceof HTMLTextAreaElement
    || (element instanceof HTMLInputElement && supportedInputTypes.includes(element.type))
  )
}

/**
 * Checks if the element is an input that is NOT a text-like input.
 * @param element - The DOM element to check.
 * @returns True if element is HTMLInputElement and not a supported type.
 * (original function: $$a2)
 */
export function isNonTextInput(element: Element): boolean {
  return (
    element instanceof HTMLInputElement
    && !supportedInputTypes.includes(element.type)
  )
}

/**
 * Finds the first text-like input or textarea within the given element.
 * @param root - The root DOM element to search within.
 * @returns The first matching input or textarea, or null if none found.
 * (original function: $$s1)
 */
export function findFirstTextInput(root: Element): HTMLInputElement | HTMLTextAreaElement | null {
  for (const el of Array.from(root.querySelectorAll('input, textarea'))) {
    if (isTextLikeInput(el))
      return el as HTMLInputElement | HTMLTextAreaElement
  }
  return null
}

// Export with original variable names for compatibility
export const AI = isTextLikeInput // $$r0
export const hg = isNonTextInput // $$a2
export const SI = findFirstTextInput // $$s1
