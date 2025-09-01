import { Ay } from "../figma_app/778880";
import { nT } from "../figma_app/53721";
import { eC } from "../905/595131";
export function $$s0(e) {
  let t = "fullscreen" === e.selectedView.view && e.selectedView.editorType === nT.Whiteboard;
  let i = !!e.user;
  return t && eC(e) && !Ay.isIpadNative && i;
}
export const h = $$s0;