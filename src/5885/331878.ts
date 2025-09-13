import { jsxs, jsx } from "react/jsx-runtime";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { TextWithTruncation } from "../905/984674";
import { A } from "../6828/191424";
if (443 == require.j) {}
export function $$l0(e) {
  return jsxs("p", {
    className: _$$s.flex.itemsCenter.gap8.mt8.$,
    children: [jsx(SvgComponent, {
      svg: A,
      className: _$$s.colorIconDesign.$
    }), jsx(TextWithTruncation, {
      fontSize: 13,
      children: e.bulletLabel
    })]
  });
}
export const X = $$l0;