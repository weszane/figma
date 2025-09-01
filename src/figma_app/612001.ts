import { glU } from "../figma_app/763686";
import { YQ } from "../905/502364";
let a = null;
let $$s1 = "Upsell Libraries Valid Paste For Nudge";
export function $$o0(e, t) {
  a && a.pasteID === e && a.fileKey === t ? a.offset = a.offset + 1 : a = {
    pasteID: e,
    fileKey: t,
    offset: 1
  };
  2 === a.offset && glU.shouldNudgeComponentCreationForSelection() && YQ({
    id: $$s1
  });
}
export const nd = $$o0;
export const zb = $$s1;