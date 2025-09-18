import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { atom } from "../figma_app/27355";
import { useEventListener } from "../figma_app/632319";
import { mt } from "../figma_app/102712";
import { getI18nString } from "../905/303541";
import { createOptimistThunk } from "../905/350402";
import { selectViewAction } from "../905/929976";
import { _P } from "../figma_app/2590";
export var $$p7 = (e => (e[e.PRESENTATION = 0] = "PRESENTATION", e[e.CUSTOM = 1] = "CUSTOM", e[e.LARGE = 2] = "LARGE", e[e.SMALL = 3] = "SMALL", e[e.DEFAULT = 4] = "DEFAULT", e))($$p7 || {});
function _(e, t, r) {
  -1 !== t.observingSessionID && (e?.setObservingSessionID(-1), r(_P({
    name: "Prototype Observation Ended",
    params: {
      multiplayerObservingSessionID: t.observingSessionID,
      multiplayerSessionID: t.sessionID
    }
  })));
}
export function $$h8() {}
export function $$m6(e, t = !1) {
  let [r, i] = useState(0);
  let [a, o] = useState(0);
  let [l, d] = useState([]);
  let [c, u] = useState(!1);
  let [p, _] = useState(!1);
  let [h, g] = useState(!1);
  let f = useCallback(() => {
    e?.hasActiveScene() && (i(e.getPrototypeStateCurrentIndex()), o(e.getNodesToShowInPrototype().length), d(e.getNodesToShowInPrototype()), u(e.supportsLinearNavigationOrder()), _(e.getNavigateForwardEnabled()), g(e.getNavigateBackwardEnabled()));
  }, [e]);
  let E = useCallback(() => {
    t && f();
  }, [f, t]);
  useEventListener(e, "navigationInfoInvalidated", f);
  useEventListener(e, "topLevelFramesListInvalidated", f);
  useEventListener(e, "topLevelFrameChange", f);
  useEventListener(e, "baseScreenChanged", E);
  useEffect(() => {
    f();
  }, [f]);
  return {
    currFrameIndex: r,
    numFrames: a,
    nodesToShowInPrototype: l,
    shouldShowFrameCounter: c,
    navigateForwardEnabled: p,
    navigateBackwardEnabled: h
  };
}
export function $$g4(e, t) {
  let r = useDispatch();
  return {
    navigateForward: useCallback(n => {
      t && _(e, t, r);
      e?.getNavigateForwardEnabled() && (mt()?.animateNext(), e?.navigateForward(n));
    }, [t, r, e]),
    navigateBackward: useCallback(() => {
      t && _(e, t, r);
      e?.getNavigateBackwardEnabled() && (mt()?.animateBack(), e?.navigateBackward());
    }, [t, r, e]),
    restartPrototype: useCallback(() => {
      e?.restartPrototype();
    }, [e])
  };
}
function f(e) {
  return e && "PRESET" === e;
}
createOptimistThunk((e, {
  nodeId: t,
  startingPointNodeId: r,
  forceReplaceState: n
}) => {
  let i = e.getState().selectedView;
  e.dispatch(selectViewAction({
    ...i,
    nodeId: t,
    startingPointNodeId: r,
    forceReplaceState: n
  }));
});
export var $$E2 = (e => (e.UNKNOWN = "UNKNOWN", e.ACTUAL_SIZE = "ACTUAL_SIZE", e.FIT_TO_SCREEN = "FIT_TO_SCREEN", e.FIT_WIDTH = "FIT_WIDTH", e.FILL_SCREEN = "FILL_SCREEN", e.RESPONSIVE = "RESPONSIVE", e))($$E2 || {});
let y = {
  4: ["ACTUAL_SIZE", "FIT_TO_SCREEN", "FIT_WIDTH", "FILL_SCREEN", "RESPONSIVE"],
  0: ["FILL_SCREEN", "ACTUAL_SIZE", "FIT_TO_SCREEN", "FIT_WIDTH", "RESPONSIVE"],
  2: ["ACTUAL_SIZE", "RESPONSIVE", "FIT_WIDTH", "FIT_TO_SCREEN", "FILL_SCREEN"],
  3: ["ACTUAL_SIZE", "FIT_TO_SCREEN", "FIT_WIDTH", "RESPONSIVE", "FILL_SCREEN"],
  1: ["FIT_TO_SCREEN", "FILL_SCREEN", "ACTUAL_SIZE", "RESPONSIVE", "FIT_WIDTH"]
};
let b = {
  ACTUAL_SIZE: {
    viewportScalingMode: "min-zoom",
    contentScalingMode: "fixed"
  },
  FIT_TO_SCREEN: {
    viewportScalingMode: "scale-down",
    contentScalingMode: "fixed"
  },
  FIT_WIDTH: {
    viewportScalingMode: "scale-down-width",
    contentScalingMode: "fixed"
  },
  FILL_SCREEN: {
    viewportScalingMode: "contain",
    contentScalingMode: "fixed"
  },
  RESPONSIVE: {
    viewportScalingMode: "contain",
    contentScalingMode: "responsive"
  }
};
export function $$T5(e) {
  return "RESPONSIVE" === e ? "responsive" : b[e]?.viewportScalingMode || "unknown";
}
export function $$I9(e) {
  switch (e.viewportScalingMode) {
    case "scale-down":
      return "FIT_TO_SCREEN";
    case "scale-down-width":
      return "FIT_WIDTH";
    case "min-zoom":
      return "ACTUAL_SIZE";
    case "contain":
      if ("fixed" === e.contentScalingMode) return "FILL_SCREEN";
      return "RESPONSIVE";
    default:
      return "UNKNOWN";
  }
}
function S(e) {
  return "UNKNOWN" === e ? b.ACTUAL_SIZE : b[e];
}
export function $$v0(e, t) {
  for (let r of t) {
    let t = !r.scalingInfo.viewportScalingMode || r.scalingInfo.viewportScalingMode === e.viewportScalingMode;
    let n = !r.scalingInfo.contentScalingMode || r.scalingInfo.contentScalingMode === e.contentScalingMode;
    if (t && n) return r.scalingOptionId;
  }
  return "UNKNOWN";
}
export function $$A3(e, t) {
  let r = y[t ?? 4];
  f(e) && (r = ["FIT_TO_SCREEN", "FILL_SCREEN", "ACTUAL_SIZE"]);
  return r.map(t => {
    let r = {
      scalingOptionId: t,
      scalingInfo: {}
    };
    f(e) ? r.scalingInfo.viewportScalingMode = S(t).viewportScalingMode : r.scalingInfo = S(t);
    return r;
  });
}
export function $$x1(e, t) {
  switch (e) {
    case "ACTUAL_SIZE":
      return t ? getI18nString("viewer.options_menu.actual_size_100_with_device", {
        zoomAmount: 100
      }) : getI18nString("viewer.options_menu.actual_size_100", {
        zoomAmount: 100
      });
    case "FIT_TO_SCREEN":
      return t ? getI18nString("viewer.options_menu.fit_to_screen_with_device") : getI18nString("viewer.options_menu.fit_width_and_height");
    case "FIT_WIDTH":
      return getI18nString("viewer.options_menu.fit_width");
    case "FILL_SCREEN":
      return t ? getI18nString("viewer.options_menu.fill_screen_with_device") : getI18nString("viewer.options_menu.fill_screen");
    case "RESPONSIVE":
      return getI18nString("viewer.options_menu.responsive");
    default:
      return "";
  }
}
atom(4);
export const Ac = $$v0;
export const GP = $$x1;
export const IK = $$E2;
export const Pz = $$A3;
export const Qd = $$g4;
export const Ti = $$T5;
export const Xl = $$m6;
export const Yu = $$p7;
export const on = $$h8;
export const w6 = $$I9;