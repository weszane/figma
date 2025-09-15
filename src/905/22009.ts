import { FFileType } from '../figma_app/191312'
import { throwTypeError } from '../figma_app/465776'

/**
 * Enum representing different editor types.
 * Original: Editors
 */
export enum Editors {
  FIGJAM = 'figjam',
  FIGMA = 'figma',
  PROTOTYPE = 'prototype',
  DEV_MODE = 'devmode',
  SLIDES = 'slides',
  SITES = 'sites',
  COOPER = 'buzz',
  FIGMAKE = 'make',
  ALL = 'all',
}

/**
 * List of all editor parameter values.
 * Original: EditorParamList
 */
export const EditorParamList: string[] = Object.values(Editors)

/**
 * List of unique editor types, excluding 'ALL'.
 * Original: UniqueEditorTypes
 */
export const UniqueEditorTypes: string[] = Object.keys(Editors)
  .filter(key => key !== 'ALL')
  .map(key => Editors[key as keyof typeof Editors])

/**
 * Maps FFileType to corresponding editor type string.
 * Throws a type error for unknown file types.
 * Original: getApiEditorType
 * @param fileType - The file type to map.
 * @returns The corresponding editor type string.
 */
export function getApiEditorType(fileType: FFileType): string {
  switch (fileType) {
    case FFileType.DESIGN:
      return Editors.FIGMA
    case FFileType.SLIDES:
      return Editors.SLIDES
    case FFileType.WHITEBOARD:
      return Editors.FIGJAM
    case FFileType.COOPER:
      return Editors.COOPER
    case FFileType.FIGMAKE:
      return Editors.FIGMAKE
    case FFileType.SITES:
      return Editors.SITES
    default:
      throwTypeError(fileType)
  }
}

/**
 * Exported object containing all editor-related utilities.
 * Original: k
 */
export const editorUtilities = {
  Editors,
  EditorParamList,
  UniqueEditorTypes,
  getApiEditorType,
}
