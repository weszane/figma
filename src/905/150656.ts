import { u as _$$u, H } from "../905/56919";
import { jsxs, jsx } from "react/jsx-runtime";
import { r as _$$r } from "../905/216849";
import { eg, zw, SZ, I5, gy } from "../905/183218";
import { A } from "../vendor/723372";
import { N } from "../905/130112";
import { TabsPrimitiveTabStrip } from "../905/840133";
function o({
  children: e,
  ...t
}) {
  return jsxs(_$$r, {
    ...t,
    className: eg,
    children: [jsx("span", {
      "aria-hidden": !0,
      className: zw,
      children: e
    }), jsx("span", {
      children: e
    })]
  });
}
o.displayName = "Tabs.Tab";
function c(e) {
  let {
    height,
    ...i
  } = e;
  return jsx(N, {
    ...i,
    className: A(SZ, {
      [I5]: "fill" === height
    })
  });
}
c.displayName = "Tabs.TabPanel";
function p(e) {
  return jsx(TabsPrimitiveTabStrip, {
    ...e,
    className: gy
  });
}
p.displayName = "Tabs.TabStrip";
export let $$m0 = {
  Tab: o,
  TabPanel: c,
  TabStrip: p,
  useTabs: _$$u,
  useManagedTabs: H
};
export const t = $$m0;