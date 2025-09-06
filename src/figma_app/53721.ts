import { logError } from '../905/714362'
import { FFileType } from '../figma_app/191312'
import { returnSecond } from '../figma_app/465776'
import { _YF } from '../figma_app/763686'

// Decoded constants (original obfuscated names: $$o11, $$l3, $$d16, $$c13, $$u0, p)
const SITES_STRING = 'sites'
const FIGMAKE_STRING = 'figmake'
const SLACK_STRING = 'slack'
const COOPER_STRING = 'cooper'
const DEV_MODE_STRING = 'dev_mode'
const DRAW_STRING = 'draw'

// Original function: $$_18
/**
 * Checks if the editor type is Design or Illustration.
 * @param editorType - The editor type number.
 * @returns True if editor type is 1 (Design) or 7 (Illustration).
 */
export function isDesignOrIllustration(editorType: number): boolean {
  return editorType === 1 || editorType === 7
}

// Original function: $$h4
/**
 * Checks if the editor type is Whiteboard or Design/Illustration.
 * @param editorType - The editor type number.
 * @returns True if editor type is 2 (Whiteboard) or Design/Illustration.
 */
export function isWhiteboardOrDesignOrIllustration(editorType: number): boolean {
  return editorType === 2 || isDesignOrIllustration(editorType)
}

// Original function: $$m6
/**
 * Checks if the editor type is Slides or Whiteboard/Design/Illustration.
 * @param editorType - The editor type number.
 * @returns True if editor type is 4 (Slides) or Whiteboard/Design/Illustration.
 */
export function isSlidesOrWhiteboardOrDesignOrIllustration(editorType: number): boolean {
  return editorType === 4 || isWhiteboardOrDesignOrIllustration(editorType)
}

// Original function: $$g8
/**
 * Checks if the editor type matches the file type.
 * @param editorType - The editor type number.
 * @param fileType - The file type.
 * @returns True if they match, false otherwise.
 */
export function doesEditorTypeMatchFileType(editorType: number, fileType: FFileType): boolean {
  switch (editorType) {
    case 1:
    case 7:
    case 3:
      return fileType === FFileType.DESIGN
    case 2:
      return fileType === FFileType.WHITEBOARD
    case 4:
      return fileType === FFileType.SLIDES
    case 5:
      return fileType === FFileType.SITES
    case 8:
      return fileType === FFileType.FIGMAKE
    case 6:
      return fileType === FFileType.COOPER
    default:
      logError('editorType', 'Unknown editor type', {
        editorType,
      })
      return false
  }
}

// Original enum: FEditorType
export enum FEditorType {
  Design = 1,
  Whiteboard = 2,
  DevHandoff = 3,
  Slides = 4,
  Sites = 5,
  Cooper = 6,
  Illustration = 7,
  Figmake = 8,
}

// Original function: $$E17
/**
 * Maps editor type to _YF enum value.
 * @param editorType - The editor type number.
 * @returns The corresponding _YF value.
 */
export function mapEditorTypeToYF(editorType: number): typeof _YF[keyof typeof _YF] {
  switch (editorType) {
    case 1:
      return _YF.DESIGN
    case 2:
      return _YF.WHITEBOARD
    case 3:
      return _YF.DEV_HANDOFF
    case 4:
      return _YF.SLIDES
    case 5:
      return _YF.SITES
    case 6:
      return _YF.COOPER
    case 7:
      return _YF.ILLUSTRATION
    case 8:
      return _YF.FIGMAKE
    default:
      logError('editorType', 'Unknown editor type', {
        editorType,
      })
      return _YF.DESIGN
  }
}

// Original function: $$y10
/**
 * Maps editor type to file type.
 * @param editorType - The editor type number.
 * @returns The corresponding file type.
 */
export function mapEditorTypeToFileType(editorType: number): FFileType {
  switch (editorType) {
    case 2:
      return FFileType.WHITEBOARD
    case 4:
      return FFileType.SLIDES
    case 5:
      return FFileType.SITES
    case 8:
      return FFileType.FIGMAKE
    case 3:
    case 1:
    case 7:
      return FFileType.DESIGN
    case 6:
      return FFileType.COOPER
    default:
      logError('editorType', 'Unknown editor type', {
        editorType,
      })
      return FFileType.DESIGN
  }
}

// Original function: $$b5
/**
 * Maps editor type to a string representation.
 * @param editorType - The editor type number.
 * @returns The string representation.
 */
export function mapEditorTypeToString(editorType: number): string {
  switch (editorType) {
    case 2:
      return 'whiteboard'
    case 4:
      return 'slides'
    case 5:
      return 'sites'
    case 8:
      return FIGMAKE_STRING
    case 3:
      return 'dev_handoff'
    case 7:
      return 'draw'
    case 6:
      return 'cooper'
    case 1:
      return 'design'
    default:
      return returnSecond(editorType, 'design')
  }
}

// Original function: $$T12
/**
 * Maps file type to editor type (nullable).
 * @param fileType - The file type.
 * @returns The corresponding editor type or null.
 */
export function mapFileTypeToEditorTypeNullable(fileType: FFileType | null): number | null {
  if (fileType == null) return null
  switch (fileType) {
    case FFileType.DESIGN:
      return 1
    case FFileType.WHITEBOARD:
      return 2
    case FFileType.SLIDES:
      return 4
    case FFileType.SITES:
      return 5
    case FFileType.COOPER:
      return 6
    case FFileType.FIGMAKE:
      return 8
  }
  return null
}

// Original function: $$I15
/**
 * Maps file type to editor type (default to 1).
 * @param fileType - The file type.
 * @returns The corresponding editor type.
 */
export function mapFileTypeToEditorType(fileType: FFileType | null): number {
  if (fileType == null) return 1
  switch (fileType) {
    case FFileType.DESIGN:
      return 1
    case FFileType.WHITEBOARD:
      return 2
    case FFileType.SLIDES:
      return 4
    case FFileType.SITES:
      return 5
    case FFileType.COOPER:
      return 6
    case FFileType.FIGMAKE:
      return 8
  }
  return 1
}

// Original function: $$S1
/**
 * Maps editor type to a string (with obfuscated strings).
 * @param editorType - The editor type number.
 * @returns The string representation.
 */
export function mapEditorTypeToStringWithObfuscated(editorType: number): string {
  switch (editorType) {
    case 1:
      return 'design'
    case 2:
      return 'whiteboard'
    case 3:
      return 'dev_handoff'
    case 4:
      return 'slides'
    case 5:
      return SITES_STRING
    case 8:
      return FIGMAKE_STRING
    case 6:
      return COOPER_STRING
    case 7:
      return DRAW_STRING
    default:
      return editorType as any
  }
}

// Original function: $$v7
/**
 * Maps _YF enum to editor type.
 * @param yfValue - The _YF value.
 * @returns The corresponding editor type.
 */
export function mapYFToEditorType(yfValue: typeof _YF[keyof typeof _YF]): number {
  switch (yfValue) {
    case _YF.DESIGN:
      return 1
    case _YF.WHITEBOARD:
      return 2
    case _YF.DEV_HANDOFF:
      return 3
    case _YF.SLIDES:
      return 4
    case _YF.SITES:
      return 5
    case _YF.FIGMAKE:
      return 8
    case _YF.COOPER:
      return 6
    case _YF.ILLUSTRATION:
      return 7
    default:
      logError('editorType', 'Unknown editor type', {
        editorType: yfValue,
      })
      return 1
  }
}

// Original function: $$A2
/**
 * Maps editor type to string with error logging.
 * @param editorType - The editor type number.
 * @returns The string representation.
 */
export function mapEditorTypeToStringWithError(editorType: number): string {
  switch (editorType) {
    case 1:
      return 'design'
    case 2:
      return 'whiteboard'
    case 3:
      return 'dev_handoff'
    case 4:
      return 'slides'
    case 5:
      return SITES_STRING
    case 8:
      return FIGMAKE_STRING
    case 6:
      return COOPER_STRING
    case 7:
      return DRAW_STRING
    default:
      logError('editorType', 'Unknown editor type', {
        editorType,
      })
      return ''
  }
}

// Original function: $$x14
/**
 * Maps file type to a numeric string.
 * @param fileType - The file type.
 * @returns The numeric string representation.
 */
export function mapFileTypeToNumericString(fileType: FFileType): string {
  switch (fileType) {
    case FFileType.DESIGN:
      return '0'
    case FFileType.WHITEBOARD:
      return '1'
    case FFileType.SLIDES:
      return '2'
    case FFileType.SITES:
      return '3'
    case FFileType.COOPER:
      return '4'
    case FFileType.FIGMAKE:
      return '5'
    default:
      return returnSecond(fileType, '0')
  }
}

// Refactored exports (original aliases: $t, Bu, CO, GJ, Nw, YP, co, fB, fP, nT, oD, oQ, sL, sq, vD, wN, xi, xq, yY)
export const $t = DEV_MODE_STRING
export const Bu = mapEditorTypeToStringWithObfuscated
export const CO = mapEditorTypeToStringWithError
export const GJ = FIGMAKE_STRING
export const Nw = isWhiteboardOrDesignOrIllustration
export const YP = mapEditorTypeToString
export const co = isSlidesOrWhiteboardOrDesignOrIllustration
export const fB = mapYFToEditorType
export const fP = doesEditorTypeMatchFileType
export const nT = FEditorType
export const oD = mapEditorTypeToFileType
export const oQ = SITES_STRING
export const sL = mapFileTypeToEditorTypeNullable
export const sq = COOPER_STRING
export const vD = mapFileTypeToNumericString
export const wN = mapFileTypeToEditorType
export const xi = SLACK_STRING
export const xq = mapEditorTypeToYF
export const yY = isDesignOrIllustration
