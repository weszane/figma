import { jsxs, jsx } from "react/jsx-runtime";
import { r as _$$r } from "../905/216849";
import { H } from "../905/855344";
import s from "classnames";
var o = s;
export function $$l0({
  index: e,
  text: t,
  selected: i = !1,
  hasErrors: s = !1,
  showUnreadDot: l = !1,
  ...d
}) {
  return jsxs(_$$r, {
    ...d,
    className: o()("tab_label--tabLabel--QFvWM", {
      "tab_label--selected--2iGXZ": i,
      "tab_label--error--n0K6o": !i && s
    }),
    children: [jsx("span", {
      className: "tab_label--tabLabelIndex--HPxJu",
      "aria-hidden": !0,
      children: e
    }), jsxs("span", {
      children: [t, l && jsx("span", {
        className: "tab_label--unreadIcon--nXSiz",
        children: jsx(H, {})
      })]
    })]
  });
}
export const y = $$l0;