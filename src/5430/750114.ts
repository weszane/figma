import { jsx } from "react/jsx-runtime";
import { n as _$$n, v } from "../905/458699";
import { sx } from "../figma_app/410936";
export function $$o0(e) {
  let t = _$$n(e);
  if (t) {
    let r = e.hideTooltip ? t : jsx(v, {
      children: t
    });
    return jsx("div", {
      className: sx,
      children: r
    });
  }
  return null;
}
export const I = $$o0;