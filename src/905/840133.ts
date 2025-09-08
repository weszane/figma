import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { _ } from "../905/302698";
import { defaultComponentAttribute } from "../905/577641";
function o({
  children: e,
  manager: t,
  htmlAttributes: i,
  className: r,
  ...o
}, l) {
  let d = _({
    container: "tab-strip"
  });
  return jsx("div", {
    ref: l,
    ...d,
    ...defaultComponentAttribute,
    ...i,
    className: r,
    role: "tablist",
    "aria-orientation": t.orientation,
    "data-tab-group": t.tabGroupId,
    ...o,
    children: e
  });
}
o.displayName = "TabsPrimitive.TabStrip";
export let $$l0 = forwardRef(o);
export const r = $$l0;