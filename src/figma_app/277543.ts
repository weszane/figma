import { editorUtilities } from '../905/22009'
import { throwTypeError } from '../figma_app/465776'

/**
 * EditorType enum (original: $$a1)
 * Represents the different types of editors.
 */
export enum DesignToolType {
  DESIGN = 'design',
  WHITEBOARD = 'whiteboard',
  SLIDES = 'slides',
  DEV_HANDOFF = 'dev_handoff',
  SITES = 'sites',
  COOPER = 'cooper',
  FIGMAKE = 'figmake',
}

/**
 * Maps editorUtilities.Editors to EditorType string values.
 * @param editor - The editor type from editorUtilities.Editors.
 * @returns The corresponding EditorType string or undefined.
 * @throws Throws a type error if the editor is not recognized.
 * (original: $$s0)
 */
export function mapEditorToType(editor: unknown): DesignToolType | undefined {
  switch (editor) {
    case editorUtilities.Editors.FIGMA:
      return DesignToolType.DESIGN
    case editorUtilities.Editors.FIGJAM:
      return DesignToolType.WHITEBOARD
    case editorUtilities.Editors.SLIDES:
      return DesignToolType.SLIDES
    case editorUtilities.Editors.DEV_MODE:
      return DesignToolType.DEV_HANDOFF
    case editorUtilities.Editors.SITES:
      return DesignToolType.SITES
    case editorUtilities.Editors.COOPER:
      return DesignToolType.COOPER
    case editorUtilities.Editors.FIGMAKE:
      return DesignToolType.FIGMAKE
    case editorUtilities.Editors.PROTOTYPE:
    case editorUtilities.Editors.ALL:
    case void 0:
      return
    default:
      throwTypeError(editor)
  }
}

/** Exported aliases for backward compatibility (original: S, q) */
export const S = mapEditorToType
export const q = DesignToolType
