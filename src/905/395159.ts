import { jsx } from "react/jsx-runtime";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { xk } from "../905/561298";
export function $$s0({
  showToSCheckbox: e,
  onOrgMsaChange: t,
  blockPublishingOnToS: i
}) {
  return e ? jsx("div", {
    className: cssBuilderInstance.flex.alignCenter.preWrap.$,
    children: jsx(xk, {
      onChange: t,
      isChecked: !i
    })
  }) : null;
}
export const A = $$s0;