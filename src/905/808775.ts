import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { FDocumentType } from '../905/862883'
import { FEditorType } from '../figma_app/53721'

/**
 * Maps editor types to corresponding $A values.
 * Original function name: $$l0
 * @param editorType - The editor type to map.
 * @returns Corresponding $A value.
 */
export function mapEditorTypeTo(editorType: FEditorType): FDocumentType {
  switch (editorType) {
    case FEditorType.Design:
    case FEditorType.Sites:
    case FEditorType.Figmake:
    case FEditorType.Illustration:
      return FDocumentType.Design
    case FEditorType.Cooper:
      return FDocumentType.Cooper
    case FEditorType.Slides:
      return FDocumentType.Slides
    case FEditorType.DevHandoff:
      return FDocumentType.Handoff
    case FEditorType.Whiteboard:
      return FDocumentType.FigJam
    default:
      // Optionally handle unknown editor types
      return FDocumentType.Design
  }
}

/**
 * Returns the mapped $A value for the current selected editor type.
 * Original function name: $$$$o1
 * @returns $A value based on selected editor type and view.
 */
export function useMappedEditorTypeA() {
  const editorType = useSelector((state: any) => state.selectedView.editorType)
  const isOrgAdminSettings = useSelector((state: any) => state.selectedView.view === 'orgAdminSettings')
  const effectiveEditorType = isOrgAdminSettings ? FEditorType.DevHandoff : editorType
  return useMemo(() => mapEditorTypeTo(effectiveEditorType), [effectiveEditorType])
}

// Export aliases for backward compatibility
export const B = mapEditorTypeTo // Original: $$l0
export const o = useMappedEditorTypeA // Original: $$$$o1
