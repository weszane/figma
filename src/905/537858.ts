import { BrowserInfo } from "../figma_app/778880";
import { FEditorType } from "../figma_app/53721";
import { isCanvasEditDisabled } from "../905/595131";
export function $$s0(e) {
  let t = "fullscreen" === e.selectedView.view && e.selectedView.editorType === FEditorType.Whiteboard;
  let i = !!e.user;
  return t && isCanvasEditDisabled(e) && !BrowserInfo.isIpadNative && i;
}
export const h = $$s0;