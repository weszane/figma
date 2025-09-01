import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { tx } from "../905/303541";
import { E } from "../905/984674";
export function $$s0() {
  return jsxs(Fragment, {
    children: [jsx(E, {
      color: "handoff",
      fontWeight: "medium",
      fontSize: 11,
      children: tx("checkout.dev_mode_included_text_formatted.dev_mode")
    }), " ", jsx(E, {
      color: "secondary",
      fontSize: 11,
      children: tx("checkout.dev_mode_included_text_formatted.included")
    })]
  });
}
export const G = $$s0;