import { jsx } from "react/jsx-runtime";
import { X } from "../905/647103";
import { V } from "../905/900932";
import { getFeatureFlags } from "../905/601108";
import { tx } from "../905/303541";
import { Dz } from "../figma_app/847915";
import { A } from "../905/482208";
import { JT } from "../figma_app/632248";
export function $$u0(e) {
  if (e.extensionSearchString) return e.extensionSearchString;
  if (e.displayText && !e.displayForQuickCommand) return e.displayText;
  let t = e.displayForQuickCommand ? e.displayForQuickCommand : Dz(e);
  return A(t, e.args);
}
export function $$p3(e) {
  return e.action === JT.MAGIC_LINK ? tx("magic_link.qa_suggestion_button") : $$u0(e);
}
export function $$_2(e, t) {
  switch (e) {
    case JT.MAGIC_LINK:
      return tx("magic_link.qa_suggestion_toast");
    case JT.UPSCALE_IMAGE:
      let r = t.nodeImagePairs.length;
      return getFeatureFlags().aip_batch_image_modify ? tx("image_ai.upscale_image.qa_suggestion_toast.multiple_images", {
        num: r
      }) : tx("image_ai.upscale_image.qa_suggestion_toast");
    default:
      return tx("qa.toast.suggestion");
  }
}
export function $$h1(e) {
  return e === JT.UPSCALE_IMAGE ? jsx(X, {}) : jsx(V, {});
}
export function $$m4(e) {
  return e.pluginLocalFileId ? `local-extension-${e.pluginLocalFileId}` : e.action || e.pluginId || e.args?.labName || e.name || "";
}
export const EG = $$u0;
export const Hr = $$h1;
export const J8 = $$_2;
export const ah = $$p3;
export const ee = $$m4;