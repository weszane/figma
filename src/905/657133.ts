import { d4 } from "../vendor/514228";
import { nT } from "../figma_app/53721";
export function $$a0() {
  let e = d4(e => e.selectedView);
  return "fullscreen" === e.view && (e.editorType === nT.Design || e.editorType === nT.Illustration || e.editorType === nT.Sites || e.editorType === nT.Figmake);
}
export const W = $$a0;