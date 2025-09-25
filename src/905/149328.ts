import { parsePxNumber } from '../figma_app/783094'
import { getCurrentFileType } from '../figma_app/976749'

/**
 * Pre-parsed pixel values for use in theme logic.
 * Original variables: s, $$o1, l, d
 */
const whiteboardPx = parsePxNumber('48px')
const defaultPx = parsePxNumber('48px')
const whiteboardLargePx = parsePxNumber('92px')
const defaultLargePx = parsePxNumber('60px')

/**
 * Returns the pixel value for the current file type.
 * Original function: $$c0
 */
export function getFileTypePx(): number {
  return getCurrentFileType() === 'whiteboard' ? whiteboardPx : defaultPx
}

/**
 * Returns the large pixel value for the current file type.
 * Original function: $$u2
 */
export function getFileTypeLargePx(): number {
  return getCurrentFileType() === 'whiteboard' ? whiteboardLargePx : defaultLargePx
}

/**
 * Returns the pixel value based on the editor theme.
 * Original function: $$p3
 */
export function getThemePx(): number {
  return document.body.getAttribute('data-editor-theme') === 'whiteboard' ? whiteboardPx : defaultPx
}

// Export aliases for compatibility with original code
export const Av = getFileTypePx
export const J9 = defaultPx
export const Pg = getFileTypeLargePx
export const bG = getThemePx
