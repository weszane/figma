import { NN, y1 } from '../905/445814'
import { FFileType } from '../figma_app/191312'
import { throwTypeError } from '../figma_app/465776'
import { nb } from '../figma_app/543100'

// Helper: map file editorType to y1 enum
function mapEditorTypeToY1(editorType: any) {
  if (editorType === FFileType.WHITEBOARD)
    return y1.WHITEBOARD
  if (editorType === FFileType.SLIDES)
    return y1.SLIDES
  if (editorType === FFileType.SITES)
    return y1.SITES
  if (editorType === FFileType.COOPER)
    return y1.COOPER
  if (editorType === FFileType.FIGMAKE)
    return y1.FIGMAKE
  if (editorType === FFileType.DESIGN || editorType === null)
    return y1.DESIGN
  throwTypeError(editorType)
}
export function $$o0(e) {
  let t = NN()
  switch (e.type) {
    case nb.FILE:
      return t(e.file)
    case nb.PINNED_FILE:
      return mapEditorTypeToY1(e.file.editorType)
    case nb.OFFLINE_FILE:
      return mapEditorTypeToY1(e.file.editorType)
    case nb.PROTOTYPE:
      return y1.PROTOTYPE
    case nb.REPO:
      return y1.REPO
    default:
      throwTypeError(e)
  }
}
export const C = $$o0
