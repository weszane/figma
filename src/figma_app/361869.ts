import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { renderI18nText } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
export function $$s0() {
  return jsxs(Fragment, {
    children: [jsx(TextWithTruncation, {
      color: "handoff",
      fontWeight: "medium",
      fontSize: 11,
      children: renderI18nText("checkout.dev_mode_included_text_formatted.dev_mode")
    }), " ", jsx(TextWithTruncation, {
      color: "secondary",
      fontSize: 11,
      children: renderI18nText("checkout.dev_mode_included_text_formatted.included")
    })]
  });
}
export const G = $$s0;