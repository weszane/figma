import { jsx, jsxs } from "react/jsx-runtime";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { cq } from "../905/794154";
import { ActionButton } from "../905/189361";
import { FlexBox } from "../905/222272";
import { Panel } from "../905/236825";
export function $$d0({
  children: e,
  buttons: t
}) {
  let {
    close
  } = cq();
  return jsx(Panel, {
    onDismiss: close,
    children: jsxs(FlexBox, {
      justify: "space-between",
      align: "center",
      fullWidth: !0,
      fullHeight: !0,
      children: [jsx(FlexBox, {
        children: jsx("span", {
          className: cssBuilderInstance.textBodyMediumStrong.ml8.$,
          children: e
        })
      }), jsx(FlexBox, {
        children: t && t.map(e => jsx(ActionButton, {
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