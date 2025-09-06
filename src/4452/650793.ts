import { jsx, jsxs } from "react/jsx-runtime";
import { b, bL, mc } from "../figma_app/860955";
import { J } from "../905/125993";
import i, { a } from "../905/964520";
import { Me } from "../figma_app/617427";
import { getI18nString } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { Hv, Ib, oi } from "../figma_app/527041";
if (443 == require.j) {}
if (443 == require.j) {}
export function $$u1({
  children: e
}) {
  return jsx("div", {
    className: Hv,
    children: e
  });
}
export function $$m3({
  dataOnboardingKey: e,
  children: t
}) {
  let {
    getTriggerProps,
    manager
  } = b();
  let {
    isOpen
  } = i;
  return jsxs(bL, {
    manager,
    "data-testid": "multi-select-list-menu",
    children: [jsx("div", {
      className: isOpen ? void 0 : Ib,
      children: jsx(Me, {
        ...getTriggerProps(),
        "aria-label": getI18nString("multi_select_list.more"),
        "data-testid": "multi-select-list-menu-cell-icon",
        "data-onboarding-key": e,
        trackingProperties: {
          trackingDescriptor: _$$c.MORE
        },
        children: jsx(J, {})
      })
    }), jsx(mc, {
      children: t
    })]
  });
}
function _({
  children: e
}) {
  return jsx("div", {
    className: oi,
    "data-testid": "multi-select-list-icon-column",
    children: e
  });
}
export function $$p2() {
  return jsx(Me, {
    "aria-label": getI18nString("multi_select_list.manage"),
    trackingProperties: {
      trackingDescriptor: _$$c.MANAGE
    },
    children: jsx(a, {})
  });
}
export let $$g0 = {
  name: "chevron-right",
  className: oi,
  cellComponent: (e, {
    isClickable: t
  }) => jsx(_, {
    children: t ? jsx($$p2, {}) : null
  })
};
export const VU = $$g0;
export const cd = $$u1;
export const jT = $$p2;
export const zx = $$m3;