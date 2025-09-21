import { jsxs, jsx } from "react/jsx-runtime";
import { s as _$$s } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
export function $$l0({
  title: e,
  children: t,
  dataTestId: a
}) {
  return jsxs("div", {
    style: styleBuilderInstance.p24.colorBg.add({
      borderRadius: "13px",
      height: "fit-content"
    }).$,
    "data-testid": a,
    children: [e && jsx("h3", {
      className: _$$s.mb16.fontMedium.font15.$,
      children: e
    }), t]
  });
}
export const x = $$l0;