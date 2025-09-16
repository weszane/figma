import { selectCurrentUser } from '../905/372672'
import { FEditorType } from '../figma_app/53721'
import { getEditorTypeOrNull } from '../figma_app/976749'

/**
 * Checks if the user is not logged in and the editor type is one of the supported types (Design, Slides, Sites, Cooper, Figmake).
 * Original function: $$s1
 * @returns {boolean} True if conditions are met, false otherwise.
 */
export function isUserNotLoggedInAndEditorSupported(): boolean {
  const isUserNotLoggedIn = !selectCurrentUser()
  const editorType = getEditorTypeOrNull()
  const supportedEditors = [FEditorType.Design, FEditorType.Slides, FEditorType.Sites, FEditorType.Cooper, FEditorType.Figmake]
  const isSupportedEditor = supportedEditors.includes(editorType)
  return isUserNotLoggedIn && isSupportedEditor
};
export const k = isUserNotLoggedInAndEditorSupported
/**
 * Checks if the user is not logged in and the editor type is Design.
 * Original function: $$o0
 * @returns {boolean} True if conditions are met, false otherwise.
 */
export function isUserNotLoggedInAndDesignEditor(): boolean {
  const isUserNotLoggedIn = !selectCurrentUser()
  const isDesignEditor = getEditorTypeOrNull() === FEditorType.Design
  return isUserNotLoggedIn && isDesignEditor
};
export const F = isUserNotLoggedInAndDesignEditor
