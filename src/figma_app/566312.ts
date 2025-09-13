import { jsxs, jsx } from "react/jsx-runtime";
import { k } from "../905/443820";
import a from "classnames";
import { BrowserInfo } from "../figma_app/778880";
import { ButtonBasePrimary } from "../figma_app/637027";
import { getI18nString } from "../905/303541";
import { useIsCanvasEditDisabled } from "../905/595131";
var s = a;
export function $$u0({
  children: e,
  isInsertingTemplate: t,
  shouldUseOpaqueBackground: r = !1,
  insertTemplate: a
}) {
  let u = useIsCanvasEditDisabled();
  let p = u ? getI18nString("browse_templates_modal.add_template.disabled") : "";
  return jsxs(ButtonBasePrimary, {
    className: s()("insert_template_cta--button--InTLP", r && "insert_template_cta--buttonOpaque--oEwuq"),
    onClick: BrowserInfo.isIpad ? void 0 : a,
    onPointerDown: BrowserInfo.isIpad ? a : void 0,
    disabled: t || u,
    "data-not-draggable": !0,
    title: p,
    children: [jsx("span", {
      style: {
        visibility: t ? "hidden" : "visible"
      },
      children: e
    }), t && jsx("span", {
      className: "insert_template_cta--spinner--xtwmE",
      children: jsx(k, {
        size: "md"
      })
    })]
  });
}
export const i = $$u0;