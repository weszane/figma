import { jsx, jsxs } from 'react/jsx-runtime';
import { useTabState, useTabManager } from '../905/56919';
import { N } from '../905/130112';
import { eg, gy, I5, SZ, zw } from '../905/183218';
import { r as _$$r } from '../905/216849';
import { TabsPrimitiveTabStrip } from '../905/840133';
import { A } from '../vendor/723372';
function o({
  children: e,
  ...t
}) {
  return jsxs(_$$r, {
    ...t,
    className: eg,
    children: [jsx('span', {
      'aria-hidden': !0,
      'className': zw,
      'children': e
    }), jsx('span', {
      children: e
    })]
  });
}
o.displayName = 'Tabs.Tab';
function c(e) {
  let {
    height,
    ...i
  } = e;
  return jsx(N, {
    ...i,
    className: A(SZ, {
      [I5]: height === 'fill'
    })
  });
}
c.displayName = 'Tabs.TabPanel';
function p(e) {
  return jsx(TabsPrimitiveTabStrip, {
    ...e,
    className: gy
  });
}
p.displayName = 'Tabs.TabStrip';
export let $$m0 = {
  Tab: o,
  TabPanel: c,
  TabStrip: p,
  useTabs: useTabState,
  useManagedTabs: useTabManager
};
export const t = $$m0;