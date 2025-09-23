import { throwTypeError, assertNotNullish, assert } from "../figma_app/465776";
import { ServiceCategories } from "../905/165054";
import { PresetType } from "../figma_app/763686";
import { produce } from "immer";
import { KeyCodes } from "../905/63728";
import { reportError } from "../905/11";
import { createOptimistThunk } from "../905/350402";
import { selectViewAction } from "../905/929976";
import { hY, qt } from "../figma_app/349969";
import { trackFileEvent, trackDefinedFileEvent } from "../figma_app/314264";
import { fullscreenValue } from "../figma_app/455680";
import { valueOrFallback } from "../905/216495";
import { getFileKeyFromSelectedView } from "../figma_app/193867";
export function $$g9(e) {
  switch (e) {
    case "NONE":
      return PresetType.NONE;
    case "PRESET":
      return PresetType.PRESET;
    case "CUSTOM":
      return PresetType.CUSTOM;
    case "PRESENTATION":
      return PresetType.PRESENTATION;
    default:
      throwTypeError(e);
  }
}
export function $$f11(e) {
  return e === PresetType.PRESET || e === PresetType.CUSTOM ? "scale-down" : e === PresetType.PRESENTATION ? "contain" : "min-zoom";
}
export function $$E5(e) {
  return "fixed";
}
export function $$y4(e, t) {
  return !t?.disableDefaultKeyboardNav && ([KeyCodes.LEFT_ARROW, KeyCodes.PAGE_UP].includes(e.keyCode) || e.shiftKey && e.keyCode === KeyCodes.N);
}
export function $$b1(e, t) {
  return !(t?.disableDefaultKeyboardNav || t?.inlinePreview && e.keyCode === KeyCodes.SPACE && e.shiftKey) && [KeyCodes.RIGHT_ARROW, KeyCodes.SPACE, KeyCodes.ENTER, KeyCodes.N, KeyCodes.PAGE_DOWN].includes(e.keyCode);
}
export function $$T10(e, t) {
  return !t?.disableDefaultKeyboardNav && e.keyCode === KeyCodes.R && !e.metaKey && !e.shiftKey && !e.ctrlKey;
}
export function $$I3(e) {
  var t;
  return {
    type: (t = valueOrFallback(e, {
      type: "NONE",
      size: {
        x: 0,
        y: 0
      }
    })).type || "NONE",
    size: t.size || {
      x: 0,
      y: 0
    },
    presetIdentifier: t.presetIdentifier || "",
    rotation: t.rotation || "NONE"
  };
}
let S = e => "PRESET" === e.type ? e.presetIdentifier : "";
export function $$v0(e, t) {
  if ("NONE" === e) fullscreenValue.updateSelectionProperties({
    prototypeDevice: {
      type: "NONE",
      size: {
        x: 0,
        y: 0
      },
      rotation: "NONE"
    }
  });else if ("PRESENTATION" === e) fullscreenValue.updateSelectionProperties({
    prototypeDevice: {
      type: "PRESENTATION",
      size: {
        x: 0,
        y: 0
      },
      rotation: "NONE"
    }
  });else if ("CUSTOM" === e) {
    let e = t.size;
    0 === e.x && 0 === e.y && (e = {
      x: 500,
      y: 500
    });
    let r = "CUSTOM" === t.type ? t.rotation : "NONE";
    fullscreenValue.updateSelectionProperties({
      prototypeDevice: {
        type: "CUSTOM",
        size: e,
        rotation: r
      }
    });
  } else {
    let r = hY[S(t)];
    if (null != r && r.deviceName === e.deviceName) return;
    let n = "PRESET" === t.type && qt(S(t)) === qt(e.presetIdentifier) ? t.rotation : "NONE";
    fullscreenValue.updateSelectionProperties({
      prototypeDevice: {
        type: "PRESET",
        size: {
          x: e.framePresetSize.x,
          y: e.framePresetSize.y
        },
        presetIdentifier: e.presetIdentifier,
        rotation: n
      }
    });
  }
}
let $$A6 = .2;
let $$x2 = createOptimistThunk((e, t) => {
  if (t.userInitiated) {
    let r = {
      scalingMode: t.viewportScalingMode,
      contentScalingMode: t.contentScalingMode,
      source: t.source
    };
    e.dispatch($$N8({
      name: "Prototype Scale Changed",
      params: r
    }));
  }
  let r = e.getState().selectedView;
  if ("prototype" === r.view) {
    let n = produce(r, e => {
      void 0 === e.scalingInfo && (e.scalingInfo = {});
      t.hasOwnProperty("viewportScalingMode") && (e.scalingInfo.viewportScalingMode = t.viewportScalingMode);
      t.hasOwnProperty("contentScalingMode") && (e.scalingInfo.contentScalingMode = t.contentScalingMode);
    });
    e.dispatch(selectViewAction(n));
  }
});
createOptimistThunk((e, {
  showHotspots: t
}) => {
  let r = e.getState().selectedView;
  if (r && "prototype" === r.view) {
    let n = {
      ...r,
      showHotspots: t
    };
    e.dispatch(selectViewAction(n));
  }
});
createOptimistThunk((e, {
  showDeviceFrame: t
}) => {
  let r = e.getState().selectedView;
  assertNotNullish(r, "selectedView must be defined to show device frame");
  assert("prototype" === r.view, "must be in the view to show device frame");
  let i = {
    ...r,
    showDeviceFrame: t
  };
  e.dispatch(selectViewAction(i));
});
createOptimistThunk((e, {
  newDevice: t
}) => {
  let r = e.getState().selectedView;
  assertNotNullish(r, "selectedView must be defined to set initial device frame");
  assert("prototype" === r.view, "must be in the view to set initial device frame");
  let i = {
    ...r,
    initialDevice: t,
    overrideDevice: void 0
  };
  e.dispatch(selectViewAction(i));
});
createOptimistThunk((e, {
  newDevice: t
}) => {
  let r = e.getState().selectedView;
  assertNotNullish(r, "selectedView must be defined to set override device frame");
  assert("prototype" === r.view, "must be in the view to set override device frame");
  let i = {
    ...r,
    overrideDevice: t
  };
  e.dispatch(selectViewAction(i));
});
let $$N8 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let n = t.params || {};
  let i = getFileKeyFromSelectedView(r.selectedView);
  trackFileEvent(t.name, i, r, n);
});
let $$C7 = (() => {
  let e = createOptimistThunk((e, t) => {
    let r = e.getState();
    let n = t.params || {};
    let a = getFileKeyFromSelectedView(r.selectedView);
    if (!a) {
      reportError(ServiceCategories.PROTOTYPING, Error("No file key for prototype event"));
      return;
    }
    trackDefinedFileEvent(t.name, a, r, n);
  });
  return ({
    name: t,
    params: r
  }) => e({
    name: t,
    params: r
  });
})();
export const $J = $$v0;
export const Hs = $$b1;
export const Jr = $$x2;
export const Qx = $$I3;
export const RL = $$y4;
export const Rv = $$E5;
export const UG = $$A6;
export const Zh = $$C7;
export const _P = $$N8;
export const _Q = $$g9;
export const fz = $$T10;
export const qb = $$f11;
