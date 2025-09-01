import { jsxs, jsx } from "react/jsx-runtime";
import { useId } from "react";
import { J } from "../905/270045";
import { bL, DZ, mc, zW, c$ } from "../905/493196";
export function $$o0({
  labelContent: e,
  onChange: t,
  value: i,
  options: o,
  placeholder: l,
  resetOption: d
}) {
  let c = useId();
  return jsxs("div", {
    className: "dsa_select--dsaSelectWrapper--ttncF",
    children: [jsx(J, {
      htmlFor: c,
      className: "dsa_select--dsaSelectLabel--aAGpR text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: e
    }), jsx("div", {
      className: "dsa_select--dsaSelect--zOQFX",
      children: jsxs(bL, {
        value: i,
        onChange: t,
        children: [jsx(DZ, {
          id: c,
          width: "fill",
          placeholder: l
        }), jsxs(mc, {
          children: [d ? jsx(zW, {
            children: d
          }) : null, o.map(e => jsx(c$, {
            value: e.value,
            children: e.label
          }, e.value))]
        })]
      })
    })]
  });
}
export const h = $$o0;