import { jsx, jsxs } from "react/jsx-runtime";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { cq } from "../905/794154";
import { r as _$$r } from "../905/189361";
import { B } from "../905/222272";
import { y } from "../905/236825";
export function $$d0({
  children: e,
  buttons: t
}) {
  let {
    close
  } = cq();
  return jsx(y, {
    onDismiss: close,
    children: jsxs(B, {
      justify: "space-between",
      align: "center",
      fullWidth: !0,
      fullHeight: !0,
      children: [jsx(B, {
        children: jsx("span", {
          className: cssBuilderInstance.textBodyMediumStrong.ml8.$,
          children: e
        })
      }), jsx(B, {
        children: t && t.map(e => jsx(_$$r, {
          onAction: e.onClick,
          variant: e.variant,
          iconPrefix: e.iconPrefix,
          shortcuts: e.shortcuts,
          children: e.label
        }, e.label))
      })]
    })
  });
}
export const u = $$d0;