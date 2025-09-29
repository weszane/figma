import { jsxs, jsx } from "react/jsx-runtime";
import { RT } from "../905/867927";
import { props } from "@stylexjs/stylex";
export function $$a0({
  selectedValue: e,
  value: t,
  IconComponent: n,
  text: a
}) {
  let s = jsxs("div", {
    className: "x78zum5 x6s0dn4 xl56j7k x1cmmqis",
    children: [jsx(n, {
      ...props(e === t ? l.iconSelected : l.icon),
      style: e === t ? {} : {
        "--color-icon": "var(--color-icon-secondary)"
      }
    }), a]
  });
  return jsx(RT, {
    value: t,
    label: s,
    htmlAttributes: {
      "data-testid": `segmented-control-${t}`
    }
  });
}
let l = {
  icon: {
    color: "xvkybfu",
    $$css: !0
  },
  iconSelected: {
    color: "x52n8ys",
    $$css: !0
  }
};
export const A = $$a0;
