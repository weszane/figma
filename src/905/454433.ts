import { jsx } from "react/jsx-runtime";
import { ButtonWide } from "../905/521428";
import { pT } from "../figma_app/435995";
export function $$s0({
  onClick: e,
  disabled: t,
  children: i,
  icon: s,
  recordingKey: o,
  tooltipAttributes: l
}) {
  return jsx("div", {
    className: pT,
    children: jsx(ButtonWide, {
      variant: "secondary",
      recordingKey: o,
      iconPrefix: s,
      disabled: t,
      onClick: e,
      htmlAttributes: l,
      children: i
    })
  });
}
export const z = $$s0;