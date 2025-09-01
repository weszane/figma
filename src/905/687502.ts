import { jsxs, jsx } from "react/jsx-runtime";
import { N } from "../905/438674";
import { $n } from "../905/521428";
import { g } from "../905/687265";
import { xk } from "@stylexjs/stylex";
import { Ay } from "../905/612521";
import { t, tx } from "../905/303541";
export function $$c0() {
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 xdt5ytf xl56j7k x2b8uid xh8yej3 x5yr21d x1v2ro7d",
    children: [jsxs("div", {
      children: [jsx("div", {
        ...xk(u.textBodyMedium),
        children: t("general.root_error_boundary_title")
      }), tx("general.root_error_boundary_description", {
        status_page: jsx(N, {
          href: "https://status.figma.com",
          children: tx("general.root_error_boundary_status_page")
        })
      })]
    }), jsx($n, {
      variant: "primary",
      onClick: () => Ay.reload("File browser page crash"),
      children: t("general.root_error_boundary_refresh")
    })]
  });
}
let u = {
  textBodyMedium: {
    ...g.textBodyMedium,
    $$css: !0
  }
};
export const R = $$c0;