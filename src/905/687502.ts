import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "../905/438674";
import { Button } from "../905/521428";
import { textDisplayConfig } from "../905/687265";
import { xk } from "@stylexjs/stylex";
import { customHistory } from "../905/612521";
import { getI18nString, renderI18nText } from "../905/303541";
export function $$c0() {
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 xdt5ytf xl56j7k x2b8uid xh8yej3 x5yr21d x1v2ro7d",
    children: [jsxs("div", {
      children: [jsx("div", {
        ...xk(u.textBodyMedium),
        children: getI18nString("general.root_error_boundary_title")
      }), renderI18nText("general.root_error_boundary_description", {
        status_page: jsx(Link, {
          href: "https://status.figma.com",
          children: renderI18nText("general.root_error_boundary_status_page")
        })
      })]
    }), jsx(Button, {
      variant: "primary",
      onClick: () => customHistory.reload("File browser page crash"),
      children: getI18nString("general.root_error_boundary_refresh")
    })]
  });
}
let u = {
  textBodyMedium: {
    ...textDisplayConfig.textBodyMedium,
    $$css: !0
  }
};
export const R = $$c0;