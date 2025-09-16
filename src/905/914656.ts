// Refactored code from /Users/allen/sigma-main/src/905/914656.ts
// Original functions: $$n4, $$r1, $$a2, $$s0, $$o3
// Grouped into a module for text selection utilities
// Added TypeScript types, JSDoc comments, and meaningful names
// Converted to named functions for readability
// Maintained original functionality

/**
 * Sets the selection range to the start of the input element.
 * Original: $$n4
 * @param element - The HTML input or textarea element
 */
export function setSelectionToStart(element: HTMLInputElement | HTMLTextAreaElement): void {
  element.setSelectionRange(0, 0)
}

/**
 * Sets the selection range to the end of the input element.
 * Original: $$r1
 * @param element - The HTML input or textarea element
 */
export function setSelectionToEnd(element: HTMLInputElement | HTMLTextAreaElement): void {
  const length = element.value.length
  element.setSelectionRange(length, length)
}

/**
 * Checks if there is a text selection within or related to the given element.
 * Original: $$a2
 * @param element - The HTML element to check
 * @returns True if there is a selection, false otherwise
 */
export function hasSelection(element: HTMLElement): boolean {
  const selection = window.getSelection()
  return !!(selection && !selection.isCollapsed && selection.toString().length > 0
    && (element.contains(selection.anchorNode) || element.contains(selection.focusNode)))
}

/**
 * Checks if the element is a text input/textarea and has a selection.
 * Original: $$s0
 * @param element - The HTML element to check
 * @returns True if it's a text input with selection, false otherwise
 */
export function isTextInputWithSelection(element: HTMLElement): boolean {
  if (element.nodeName === 'LABEL') {
    element = (element as HTMLLabelElement).control ?? element
  }
  return !!(element.nodeName === 'TEXTAREA' || (element.nodeName === 'INPUT'
    // eslint-disable-next-line regexp/no-unused-capturing-group
    && /^(text|search|url|tel|password)$/i.test((element as HTMLInputElement).type)))
  && hasTextSelection(element as HTMLInputElement | HTMLTextAreaElement)
}

/**
 * Checks if the input element has a text selection (start !== end).
 * Original: $$o3
 * @param element - The HTML input or textarea element
 * @returns True if there is a selection, false otherwise
 */
export function hasTextSelection(element: HTMLInputElement | HTMLTextAreaElement): boolean {
  return element.selectionStart !== element.selectionEnd
}

// Updated exports to match refactored function names
// Original aliases: GC = $$s0, c7 = $$r1, eB = $$a2, f5 = $$o3, fh = $$n4
export const GC = isTextInputWithSelection
export const c7 = setSelectionToEnd
export const eB = hasSelection
export const f5 = hasTextSelection
export const fh = setSelectionToStart
