import { FEditorType } from '../figma_app/53721'
/**
 * Checks if the given object has a fullscreen view and is of Slides editor type.
 *
 * @param e - The object to check, typically a view configuration
 * @returns true if the view is fullscreen and editor type is Slides, false otherwise
 */
export function isFullscreenSlidesView(e: { view?: string, editorType?: FEditorType }): boolean {
  return e?.view === 'fullscreen' && e?.editorType === FEditorType.Slides
}

/** Alias for isFullscreenSlidesView */
export const P = isFullscreenSlidesView
