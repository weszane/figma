import { jsx } from "react/jsx-runtime";
import { B } from "../905/714743";
import { TD } from "../905/499018";
import { jl, I5 } from "../905/112861";
let o = jl;
export function $$l0({
  icon: e,
  fill: t = "default",
  dataTestId: i,
  ariaHidden: l
}) {
  let d = e.split("-").join(" ");
  let c = e in o;
  return jsx(B, {
    style: {
      fill: TD(t)
    },
    dataTestId: i,
    title: d,
    ariaLabel: d,
    ariaHidden: l,
    svg: I5[e],
    useOriginalSrcFills_DEPRECATED: c
  });
}
export const I = $$l0;