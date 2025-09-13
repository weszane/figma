import { jsxs, jsx } from "react/jsx-runtime";
import { ButtonPrimitive } from "../905/632989";
import { getFeatureFlags } from "../905/601108";
import s from "classnames";
import { RecordableDiv } from "../905/511649";
import { r2 } from "../figma_app/479313";
import { Dn, Tz, iY, bW, sI, BI } from "../figma_app/317723";
var o = s;
let u = (e, t) => ({
  ...e,
  className: `${t} ${e.className || ""}`
});
function p(e) {
  let {
    doNotReserveSpaceForChevron,
    faded,
    extended,
    innerRef,
    isPanelBodyCollapsedAtom,
    forceNoChevron,
    highlightOnHover,
    ...d
  } = e;
  return u(d, o()({
    [Dn]: !0,
    [Tz]: faded,
    [iY]: extended,
    [bW]: isPanelBodyCollapsedAtom,
    [sI]: forceNoChevron,
    [BI]: highlightOnHover
  }));
}
export function $$m0(e) {
  let {
    doNotReserveSpaceForChevron,
    innerRef,
    isPanelBodyCollapsedAtom
  } = e;
  let s = p(e);
  return getFeatureFlags().eu_fpl_migration_interactive_panel ? jsxs("div", {
    ...s,
    tabIndex: -1,
    children: [!doNotReserveSpaceForChevron && jsx(r2, {
      isPanelBodyCollapsedAtom: isPanelBodyCollapsedAtom || null
    }), e.children]
  }) : jsxs(RecordableDiv, {
    ...s,
    forwardedRef: innerRef,
    tabIndex: -1,
    children: [!doNotReserveSpaceForChevron && jsx(r2, {
      isPanelBodyCollapsedAtom: isPanelBodyCollapsedAtom || null
    }), e.children]
  });
}
export function $$h1(e) {
  let {
    doNotReserveSpaceForChevron,
    innerRef,
    isPanelBodyCollapsedAtom
  } = e;
  let o = p(e);
  return getFeatureFlags().eu_fpl_migration_interactive_panel ? jsxs(ButtonPrimitive, {
    ...o,
    tabIndex: -1,
    children: [!doNotReserveSpaceForChevron && jsx(r2, {
      isPanelBodyCollapsedAtom: isPanelBodyCollapsedAtom || null
    }), e.children]
  }) : jsxs(RecordableDiv, {
    ...o,
    forwardedRef: innerRef,
    tabIndex: -1,
    children: [!doNotReserveSpaceForChevron && jsx(r2, {
      isPanelBodyCollapsedAtom: isPanelBodyCollapsedAtom || null
    }), e.children]
  });
}
export const Q = $$m0;
export const x = $$h1;