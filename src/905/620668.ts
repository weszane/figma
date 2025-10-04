import { localStorageRef } from "../905/657224"
import { FFileType } from "../figma_app/191312"

const LAST_USED_EDITOR_TYPE_KEY = "last-used-editor-type"

/**
 * Retrieves the last used editor type from local storage.
 * @returns The last used editor type if it exists and is valid, otherwise undefined.
 */
export function getLastUsedEditorType(): FFileType | undefined {
  const storedValue = localStorageRef?.getItem(LAST_USED_EDITOR_TYPE_KEY)
  if (storedValue && Object.values(FFileType).includes(storedValue as FFileType)) {
    return storedValue as FFileType
  }
  return undefined
}

/**
 * Saves the last used editor type to local storage.
 * @param editorType - The editor type to save.
 */
export function saveLastUsedEditorType(editorType: FFileType): void {
  localStorageRef?.setItem(LAST_USED_EDITOR_TYPE_KEY, editorType)
}

export const b = saveLastUsedEditorType
export const r = getLastUsedEditorType
