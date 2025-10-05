import { jsx, jsxs } from "react/jsx-runtime";
import { setupMenu, MenuRootComp, MenuContainerComp } from "../figma_app/860955";
import { J } from "../905/125993";
import i, { a } from "../905/964520";
import { WithTrackedIconButton } from "../figma_app/617427";
import { getI18nString } from "../905/303541";
import { UpgradeAction } from "../905/370443";
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
  } = setupMenu();
  let {
    isOpen
  } = i;
  return jsxs(MenuRootComp, {
    manager,
    "data-testid": "multi-select-list-menu",
    children: [jsx("div", {
      className: isOpen ? void 0 : Ib,
      children: jsx(WithTrackedIconButton, {
        ...getTriggerProps(),
        "aria-label": getI18nString("multi_select_list.more"),
        "data-testid": "multi-select-list-menu-cell-icon",
        "data-onboarding-key": e,
        trackingProperties: {
          trackingDescriptor: UpgradeAction.MORE
        },
        children: jsx(J, {})
      })
    }), jsx(MenuContainerComp, {
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
  return jsx(WithTrackedIconButton, {
    "aria-label": getI18nString("multi_select_list.manage"),
    trackingProperties: {
      trackingDescriptor: UpgradeAction.MANAGE
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