import { useMemo } from 'react'
import { useAtomWithSubscription } from '../figma_app/27355'
import { isModalOpenAtom } from '../figma_app/69680'
import { filterArrayByEditorType, filterEntriesByEditorType, isDevModeWithCodegen } from '../figma_app/300692'
import { getEditorTypeOrNull, isDevHandoffEditorType } from '../figma_app/976749'

export function filterEntriesByEditorTypeAndMemo(entries: any, options: any = {}) {
  const editorType = getEditorTypeOrNull()
  return useMemo(
    () => filterEntriesByEditorType(editorType, entries, options),
    [editorType, options, entries],
  )
}

export function filterArrayByEditorTypeAndMemo(array: any[]) {
  const editorType = getEditorTypeOrNull()
  return useMemo(
    () => filterArrayByEditorType(editorType, array),
    [editorType, array],
  )
}

export function filterDevModeEntriesAndMemo(entries: any[]) {
  const isDevHandoff = isDevHandoffEditorType()
  const shouldFilterDevMode = useAtomWithSubscription(isModalOpenAtom) && isDevHandoff
  return useMemo(
    () => shouldFilterDevMode ? entries.filter(entry => isDevModeWithCodegen(entry)) : entries,
    [shouldFilterDevMode, entries],
  )
}

// Maintain backwards compatibility with existing exports
export const Ol = filterArrayByEditorTypeAndMemo
export const bT = filterDevModeEntriesAndMemo
export const xy = filterEntriesByEditorTypeAndMemo
