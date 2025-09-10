import { jsxs, jsx } from "react/jsx-runtime";
import { AutoLayout } from "../905/470281";
import { H8, Pf } from "../905/590952";
import { E } from "../905/984674";
export function $$o0({
  user: e,
  text: t
}) {
  return jsxs(AutoLayout, {
    direction: "vertical",
    spacing: 16,
    children: [jsx(H8, {
      size: Pf.XLARGE,
      user: e
    }), jsx(E, {
      fontWeight: "medium",
      fontSize: 15,
      children: t
    })]
  });
}
export const j = $$o0;