import { useSelector } from "../vendor/514228";
import { FEditorType } from "../figma_app/53721";
export function $$a0() {
  let e = useSelector(e => e.selectedView);
  return "fullscreen" === e.view && (e.editorType === FEditorType.Design || e.editorType === FEditorType.Illustration || e.editorType === FEditorType.Sites || e.editorType === FEditorType.Figmake);
}
export const W = $$a0;