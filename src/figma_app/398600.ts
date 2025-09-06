import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { E } from "../905/632989";
import { K } from "../905/851274";
import { Dk } from "../figma_app/623293";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { jN } from "../905/612685";
export function $$p1(e) {
  return useCallback(() => e ? jN({
    file: e,
    isFigmakeFullscreenPreview: !0
  }) : null, [e]);
}
function _({
  file: e
}) {
  let t = useDispatch();
  let r = $$p1(e);
  let i = async () => {
    try {
      let e = r();
      e && (await Dk(e), t(F.enqueue({
        type: "make_preview_link_copied_to_clipboard",
        message: getI18nString("figmake.share_modal.link_copied_to_clipboard")
      })));
    } catch (e) {}
  };
  return jsxs(E, {
    className: "figmake--workshopRow--cNBoG",
    onClick: i,
    children: [jsx("div", {
      className: "figmake--workshopRowIcon--7go8R role_row--linkAccessIcon--kLG-n role_row--roleRowIcon--BatSn",
      children: jsx(K, {})
    }), jsxs("div", {
      className: "figmake--workshopRowInfo--HD-jM",
      children: [jsx("div", {
        children: getI18nString("figmake.share_modal.copy_link_to_preview")
      }), jsx("div", {
        className: "figmake--descriptionRow--EExtB",
        children: getI18nString("figmake.share_modal.copy_link_to_preview_chat_hint")
      })]
    })]
  });
}
export function $$h0({
  file: e
}) {
  return jsx(_, {
    file: e
  });
}
export const j = $$h0;
export const B = $$p1;