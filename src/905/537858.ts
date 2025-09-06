import { BrowserInfo } from "../figma_app/778880";
import { FEditorType } from "../figma_app/53721";
import { eC } from "../905/595131";
export function $$s0(e) {
  let t = "fullscreen" === e.selectedView.view && e.selectedView.editorType === FEditorType.Whiteboard;
  let i = !!e.user;
  return t && eC(e) && !BrowserInfo.isIpadNative && i;
}
export const h = $$s0;