import { localStorageRef } from '../905/657224'
import { getFilteredFeatureFlags } from '../905/717445'
import { FEditorType } from '../figma_app/53721'

/**
 * Key used to store the last used design editor type in localStorage.
 * (original variable: s)
 */
const LAST_USED_EDITOR_TYPE_KEY = 'last-used-design-editor-type'

/**
 * Retrieves the last used editor type from localStorage.
 * (original function: $$o2)
 * @returns {FEditorType} The last used editor type.
 */
export function getLastUsedEditorType(): FEditorType {
  const storedType = localStorageRef?.getItem(LAST_USED_EDITOR_TYPE_KEY)
  switch (storedType) {
    case 'dev_handoff':
      return FEditorType.DevHandoff
    case 'draw':
      return FEditorType.Illustration
    default:
      return FEditorType.Design
  }
}

/**
 * Checks if the provided editor type is enabled.
 * (original function: $$l0)
 * @param {FEditorType} editorType
 * @returns {boolean} True if enabled, false otherwise.
 */
export function isEditorTypeEnabled(editorType: FEditorType): boolean {
  switch (editorType) {
    case FEditorType.Design:
    case FEditorType.DevHandoff:
      return true
    case FEditorType.Illustration:
      return !!getFilteredFeatureFlags().ce_il_root
    default:
      return false
  }
}

/**
 * Sets the last used editor type in localStorage if it is enabled.
 * (original function: $$d1)
 * @param {FEditorType} editorType
 */
export function setLastUsedEditorType(editorType: FEditorType): void {
  if (!isEditorTypeEnabled(editorType)) return

  let typeString: string
  switch (editorType) {
    case FEditorType.DevHandoff:
      typeString = 'dev_handoff'
      break
    case FEditorType.Illustration:
      typeString = 'draw'
      break
    default:
      typeString = 'design'
  }
  localStorageRef?.setItem(LAST_USED_EDITOR_TYPE_KEY, typeString)
}

// Export refactored names for external usage
export const Hy = isEditorTypeEnabled // (original export: Hy)
export const V6 = setLastUsedEditorType // (original export: V6)
export const b1 = getLastUsedEditorType // (original export: b1)
