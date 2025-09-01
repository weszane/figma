import { jsxs, jsx } from "react/jsx-runtime";
import { G } from "../905/750789";
import { i } from "../905/186077";
import { i as _$$i } from "../905/415810";
export function $$o0({
  name: e,
  resolvedType: t
}) {
  return jsxs("div", {
    className: "variable_name--root--GmUoS",
    children: [null != t && jsx("div", {
      className: "variable_name--icon--z5cgt",
      children: jsx(_$$i, {
        type: t
      })
    }), jsx("div", {
      className: "variable_name--name--qIvui",
      children: "string" == typeof e ? jsx(G, {
        text: e,
        showTooltip: i.WHEN_TRUNCATED,
        className: "variable_name--truncatedText--hmQaA"
      }) : e
    })]
  });
}
export const m = $$o0;