import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { debounce } from "../905/915765";
import { ButtonPrimitive } from "../905/632989";
import { O } from "../905/969533";
import { k } from "../905/44647";
import { RecordingScrollContainer } from "../905/347284";
import { G } from "../905/750789";
import { renderI18nText } from "../905/303541";
import { trackUserEvent } from "../figma_app/314264";
import { selectCurrentFile } from "../figma_app/516028";
import { x } from "../figma_app/584132";
let g = "asset_panel_shared_components--sectionHeader--URtCn";
let f = debounce((e, t, r, n) => {
  trackUserEvent("action_left_panel_scroll", {
    user: e
  }, {
    assetsPanelVersion: 3,
    tab: "assets",
    fileKey: t,
    fileTeamId: r,
    fileOrgId: n
  });
}, 500);
export function $$E0(e) {
  let {
    children,
    onScroll,
    ...s
  } = e;
  let o = useSelector(x);
  let l = selectCurrentFile();
  let d = useCallback((e, t) => {
    onScroll?.(e, t);
    o && f(o, l?.key, l?.teamId ?? void 0, l?.parentOrgId ?? void 0);
  }, [onScroll, l?.key, l?.parentOrgId, l?.teamId, o]);
  return jsx(RecordingScrollContainer, {
    ...s,
    className: "asset_panel_shared_components--scrollContainer--YbltE",
    onScroll: d,
    children: jsx("div", {
      "data-testid": "asset-panel-scroll-container",
      children
    })
  });
}
export function $$y2({
  title: e,
  numResults: t,
  onboardingKey: r,
  collapsible: i = !1,
  isExpanded: a = !0,
  toggleExpanded: s
}) {
  let c = jsx(G, {
    text: e
  });
  return (t && renderI18nText("design_systems.assets_panel.num_results_parenthesis", {
    numResults: t
  }), i) ? jsxs(ButtonPrimitive, {
    className: g,
    "data-onboarding-key": r,
    onClick: s,
    children: [jsx("div", {
      className: "x1rm44br",
      children: a ? jsx(O, {}) : jsx(k, {})
    }), c]
  }) : jsx("div", {
    className: g,
    "data-onboarding-key": r,
    children: c
  });
}
export function $$b3({
  height: e
}) {
  return jsx("div", {
    style: {
      height: e
    }
  });
}
export function $$T1() {
  return jsx("div", {
    className: "asset_panel_shared_components--divider--II5X3"
  });
}
export const xU = $$E0;
export const cG = $$T1;
export const X3 = $$y2;
export const hK = $$b3;
