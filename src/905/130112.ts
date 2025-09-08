import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { defaultComponentAttribute } from "../905/577641";
function o({
  children: e,
  display: t,
  id: i,
  manager: r,
  triggerId: o,
  panelId: l,
  htmlAttributes: d,
  className: c,
  forceMount: u,
  ...p
}, m) {
  let h = !t || i !== r.activeTab;
  return h && !u ? null : jsx("div", {
    ref: m,
    ...defaultComponentAttribute,
    ...d,
    className: A(c, {
      "tabs-primitive__tabPanelHidden__4RMiV": h
    }),
    role: "tabpanel",
    "aria-labelledby": o,
    id: l,
    ...p,
    children: e
  });
}
o.displayName = "TabsPrimitive.TabPanel";
export let $$l0 = forwardRef(o);
export const N = $$l0;