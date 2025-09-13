import { jsxs, jsx } from "react/jsx-runtime";
import { SvgComponent } from "../905/714743";
import { sx } from "../905/941192";
import { Ni, md, i4 } from "../905/737988";
import { A } from "../1617/316388";
export function $$l0({
  text: e,
  noMargin: t
}) {
  return jsxs("div", {
    className: Ni,
    style: t ? sx.m0.$ : void 0,
    children: [jsx(SvgComponent, {
      className: md,
      svg: A
    }), jsx("div", {
      children: jsx("span", {
        className: i4,
        children: e
      })
    })]
  });
}
export const T = $$l0;