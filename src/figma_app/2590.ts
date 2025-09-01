import { xb, B1, vA } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { bq3 } from "../figma_app/763686";
import { Ay } from "../vendor/159563";
import { Uz } from "../905/63728";
import { $D } from "../905/11";
import { nF } from "../905/350402";
import { sf } from "../905/929976";
import { hY, qt } from "../figma_app/349969";
import { ds, GS } from "../figma_app/314264";
import { Y5 } from "../figma_app/455680";
import { _W } from "../905/216495";
import { U2 } from "../figma_app/193867";
export function $$g9(e) {
  switch (e) {
    case "NONE":
      return bq3.NONE;
    case "PRESET":
      return bq3.PRESET;
    case "CUSTOM":
      return bq3.CUSTOM;
    case "PRESENTATION":
      return bq3.PRESENTATION;
    default:
      xb(e);
  }
}
export function $$f11(e) {
  return e === bq3.PRESET || e === bq3.CUSTOM ? "scale-down" : e === bq3.PRESENTATION ? "contain" : "min-zoom";
}
export function $$E5(e) {
  return "fixed";
}
export function $$y4(e, t) {
  return !t?.disableDefaultKeyboardNav && ([Uz.LEFT_ARROW, Uz.PAGE_UP].includes(e.keyCode) || e.shiftKey && e.keyCode === Uz.N);
}
export function $$b1(e, t) {
  return !(t?.disableDefaultKeyboardNav || t?.inlinePreview && e.keyCode === Uz.SPACE && e.shiftKey) && [Uz.RIGHT_ARROW, Uz.SPACE, Uz.ENTER, Uz.N, Uz.PAGE_DOWN].includes(e.keyCode);
}
export function $$T10(e, t) {
  return !t?.disableDefaultKeyboardNav && e.keyCode === Uz.R && !e.metaKey && !e.shiftKey && !e.ctrlKey;
}
export function $$I3(e) {
  var t;
  return {
    type: (t = _W(e, {
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
let S = (e) => "PRESET" === e.type ? e.presetIdentifier : "";
export function $$v0(e, t) {
  if ("NONE" === e) Y5.updateSelectionProperties({
    prototypeDevice: {
      type: "NONE",
      size: {
        x: 0,
        y: 0
      },
      rotation: "NONE"
    }
  });else if ("PRESENTATION" === e) Y5.updateSelectionProperties({
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
    Y5.updateSelectionProperties({
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
    Y5.updateSelectionProperties({
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
let $$x2 = nF((e, t) => {
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
    let n = Ay(r, (e) => {
      void 0 === e.scalingInfo && (e.scalingInfo = {});
      t.hasOwnProperty("viewportScalingMode") && (e.scalingInfo.viewportScalingMode = t.viewportScalingMode);
      t.hasOwnProperty("contentScalingMode") && (e.scalingInfo.contentScalingMode = t.contentScalingMode);
    });
    e.dispatch(sf(n));
  }
});
nF((e, {
  showHotspots: t
}) => {
  let r = e.getState().selectedView;
  if (r && "prototype" === r.view) {
    let n = {
      ...r,
      showHotspots: t
    };
    e.dispatch(sf(n));
  }
});
nF((e, {
  showDeviceFrame: t
}) => {
  let r = e.getState().selectedView;
  B1(r, "selectedView must be defined to show device frame");
  vA("prototype" === r.view, "must be in the view to show device frame");
  let i = {
    ...r,
    showDeviceFrame: t
  };
  e.dispatch(sf(i));
});
nF((e, {
  newDevice: t
}) => {
  let r = e.getState().selectedView;
  B1(r, "selectedView must be defined to set initial device frame");
  vA("prototype" === r.view, "must be in the view to set initial device frame");
  let i = {
    ...r,
    initialDevice: t,
    overrideDevice: void 0
  };
  e.dispatch(sf(i));
});
nF((e, {
  newDevice: t
}) => {
  let r = e.getState().selectedView;
  B1(r, "selectedView must be defined to set override device frame");
  vA("prototype" === r.view, "must be in the view to set override device frame");
  let i = {
    ...r,
    overrideDevice: t
  };
  e.dispatch(sf(i));
});
let $$N8 = nF((e, t) => {
  let r = e.getState();
  let n = t.params || {};
  let i = U2(r.selectedView);
  ds(t.name, i, r, n);
});
let $$C7 = (() => {
  let e = nF((e, t) => {
    let r = e.getState();
    let n = t.params || {};
    let a = U2(r.selectedView);
    if (!a) {
      $D(_$$e.PROTOTYPING, Error("No file key for prototype event"));
      return;
    }
    GS(t.name, a, r, n);
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