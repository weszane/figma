import { getFeatureFlags } from "../905/601108";
import { localStorageRef } from "../905/657224";
import { Ay } from "../figma_app/778880";
import { uE } from "../figma_app/314264";
import { Y5 } from "../figma_app/455680";
import { UK } from "../figma_app/740163";
import { oi } from "../figma_app/598952";
import { debugState } from "../905/407919";
import { P } from "../905/724705";
import { XHR } from "../905/910117";
var $$_4 = (e => (e.MouseScrollToZoom = "mouse-scroll-wheel-zoom", e.RightClickDragToPan = "right-click-drag-to-pan", e))($$_4 || {});
var h = (e => (e.UserManualChange = "user_manual_change", e.Onboarding = "onboarding", e))(h || {});
function m(e, t) {
  debugState.getState().user?.id && XHR.put("/api/user", "mouse-scroll-wheel-zoom" === e ? {
    mouse_scroll_to_zoom: t
  } : {
    right_click_drag_to_pan: t
  });
}
function g({
  navigationPreference: e,
  enabled: t,
  eventOrigin: r
}) {
  new P().sendToOtherTabs(e, JSON.stringify(t));
  (function (e) {
    try {
      let t = debugState.getState();
      uE("navigation_preferences", t, {
        navigationPreference: e.navigationPreference,
        enabled: e.enabled,
        eventOrigin: e.eventOrigin
      });
    } catch (e) {}
  })({
    navigationPreference: e,
    enabled: t,
    eventOrigin: r
  });
  m(e, t);
}
let f = [!0, 1, "1", "true"];
function E(e) {
  return f.includes(e);
}
export function $$y2(e) {
  debugState.getState().isFullscreenDocumentLoaded && T(E(e));
}
export function $$b3(e) {
  debugState.getState().isFullscreenDocumentLoaded && I(E(e));
}
function T(e) {
  Y5.triggerAction(e ? "set-scroll-wheel-zoom-enabled" : "set-scroll-wheel-zoom-disabled");
}
function I(e) {
  Y5.triggerAction(e ? "set-right-click-pan-enabled" : "set-right-click-pan-disabled");
}
export function $$S0() {
  return [{
    separator: !0,
    platforms: ["!ipad"]
  }, {
    action: "toggle-scroll-wheel-zoom",
    platforms: ["!ipad"],
    hideForQuickCommand: Ay.isIpad,
    "data-onboarding-key": oi.ZOOM,
    callback: () => {
      g({
        navigationPreference: "mouse-scroll-wheel-zoom",
        enabled: !UK().scrollWheelZoom.getCopy(),
        eventOrigin: "user_manual_change"
      });
    },
    property: UK().scrollWheelZoom,
    propertyValue: !0,
    flags: ["!figmake"]
  }, {
    action: "toggle-right-click-pan",
    platforms: ["!ipad"],
    hideForQuickCommand: Ay.isIpad,
    "data-onboarding-key": oi.PAN,
    callback: () => {
      g({
        navigationPreference: "right-click-drag-to-pan",
        enabled: !UK().rightClickPan.getCopy(),
        eventOrigin: "user_manual_change"
      });
    },
    property: UK().rightClickPan,
    propertyValue: !0,
    flags: ["!figmake"]
  }, {
    separator: !0,
    platforms: ["!ipad"],
    flags: ["!edit"]
  }];
}
function v(e, t = !1) {
  var r;
  if (!localStorageRef) return;
  let n = t;
  let a = localStorageRef.getItem(e);
  let s = "mouse-scroll-wheel-zoom" === e ? debugState.getState().user?.mouse_scroll_to_zoom : debugState.getState().user?.right_click_drag_to_pan;
  null !== a ? n = E(a) : null != s && (n = s);
  r = n;
  "mouse-scroll-wheel-zoom" === e ? T(r) : I(r);
  new P().sendToOtherTabs(e, JSON.stringify(n));
  s !== n && m(e, n);
}
export function $$A1() {
  let e = getFeatureFlags().figjam_nav_new_user_onboarding;
  v("mouse-scroll-wheel-zoom", e);
  v("right-click-drag-to-pan", e);
}
export const Sd = $$S0;
export const Z1 = $$A1;
export const Zp = $$y2;
export const tB = $$b3;
export const wc = $$_4;