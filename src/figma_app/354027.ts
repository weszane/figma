import { shallowEqual } from "react-redux";
import { throwTypeError, assert, assertNotNullish } from "../figma_app/465776";
import { PresetType, RotationType } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { L_ } from "../figma_app/349969";
import { fullscreenValue } from "../figma_app/455680";
import { FEditorType } from "../figma_app/53721";
import { uF } from "../905/748636";
import { $W, is, BX } from "../figma_app/170018";
let $$_11 = 16;
let $$h0 = 216;
let $$m7 = 152;
let $$g1 = 104;
let $$f3 = 20;
export var $$E8 = (e => (e[e.DEVICE = 0] = "DEVICE", e[e.WEBSITE = 1] = "WEBSITE", e[e.SMALL = 2] = "SMALL", e))($$E8 || {});
export function $$y12(e) {
  return "fullscreen" === e.selectedView.view && (e.selectedView.editorType === FEditorType.Design || e.selectedView.editorType === FEditorType.DevHandoff || e.selectedView.editorType === FEditorType.Slides || e.selectedView.editorType === FEditorType.Illustration);
}
let b = 16 / 9;
let T = (e, t) => {
  let r = t.getCurrentPage();
  if (!r) throw Error("Expected currentPage to exist");
  let {
    prototypeDevice
  } = r;
  return prototypeDevice ? prototypeDevice.type === PresetType.PRESENTATION ? {
    x: e.absoluteBoundingBox.w,
    y: e.absoluteBoundingBox.h
  } : prototypeDevice.type === PresetType.NONE ? null : prototypeDevice.rotation === RotationType.NONE ? prototypeDevice.size : {
    x: prototypeDevice.size.y,
    y: prototypeDevice.size.x
  } : null;
};
export function $$I2(e, t) {
  let r = T(t, e);
  return r ? {
    type: 0,
    ...r
  } : t.absoluteBoundingBox.w >= 1280 ? {
    type: 1
  } : {
    type: 2
  };
}
export function $$S9(e, t) {
  switch (e.type) {
    case 0:
      return {
        x: e.x,
        y: e.y
      };
    case 1:
      return {
        x: t.absoluteBoundingBox.w,
        y: t.absoluteBoundingBox.w / b
      };
    case 2:
      return {
        x: t.absoluteBoundingBox.w,
        y: t.absoluteBoundingBox.h
      };
    default:
      throwTypeError(e);
  }
}
export function $$v10(e, t) {
  return (e.getCurrentPage()?.prototypeDevice?.rotation ?? RotationType.NONE) === RotationType.NONE ? {
    x: $$g1,
    y: $$f3 + (t ? uF : 0)
  } : {
    x: $$g1,
    y: $$g1
  };
}
let A = (e, {
  x: t,
  y: r
}, n) => {
  let i = r / e.y;
  let a = Math.min(i, t / e.x);
  let {
    x,
    y
  } = $$v10(n);
  if (a < 1) {
    if (a === i) {
      if (Math.max(e.x * a, x) !== x) return {
        x: e.x * a,
        y: e.y * a
      };
      {
        let t = x / e.x;
        return {
          x,
          y: e.y * t
        };
      }
    }
    if (Math.max(e.y * a, y) !== y) return {
      x: e.x * a,
      y: e.y * a
    };
    {
      let t = y / e.y;
      return {
        x: e.x * t,
        y
      };
    }
  }
  return e;
};
let x = (e, {
  x: t,
  y: r
}, n) => {
  let {
    x,
    y
  } = $$v10(n);
  let s = y / e.y;
  let o = Math.max(s, x / e.x);
  if (o > 1) {
    if (o === s) {
      if (Math.min(e.x * o, t) !== t) return {
        x: e.x * o,
        y: e.y * o
      };
      {
        let r = t / e.x;
        return {
          x: t,
          y: e.y * r
        };
      }
    }
    if (Math.min(e.y * o, r) !== r) return {
      x: e.x * o,
      y: e.y * o
    };
    {
      let t = r / e.y;
      return {
        x: e.x * t,
        y: r
      };
    }
  }
  return e;
};
export function $$N5(e, t, r, a, s) {
  let o = s.get(a);
  assert(!!o, "expected node to exist");
  let c = $$I2(s, o);
  if (e && shallowEqual(e.breakpoint, c) && !t) return e;
  let h = fullscreenValue.getViewportInfo();
  let m = h.height - uF - 2 * $$_11;
  let f = Math.max(.5 * h.width, $$g1);
  let E = $W(s);
  let y = !!E && L_(E);
  if (!(0 === c.type && r && y)) {
    let e = A($$S9(c, o), {
      x: f,
      y: m
    }, s);
    return {
      initialViewerSize: e = x(e, {
        x: f,
        y: m
      }, s),
      breakpoint: c
    };
  }
  let b = s.getCurrentPage()?.prototypeDevice?.rotation;
  assertNotNullish(b, "expected device rotation to exist");
  let {
    idealDeviceSize,
    framePresetSize
  } = is(E, b);
  let N = A(idealDeviceSize, {
    x: f,
    y: m
  }, s);
  N = x(N, {
    x: f,
    y: m
  }, s);
  return {
    initialViewerSize: BX(N, framePresetSize, idealDeviceSize),
    breakpoint: c
  };
}
export function $$C6(e, t, r, n) {
  assert(0 !== r.type, "Can't fit to aspect ratio for devices");
  let a = $$S9(r, t);
  if (e.x < a.x) switch (r.type) {
    case 1:
      a = {
        x: e.x,
        y: e.x / b
      };
      break;
    case 2:
      {
        let r = t.absoluteBoundingBox.w / t.absoluteBoundingBox.h;
        a = {
          x: e.x,
          y: e.x / r
        };
        break;
      }
    default:
      throwTypeError(r);
  }
  return {
    initialViewerSize: a = x(a, {
      x: 1 / 0,
      y: 1 / 0
    }, n),
    breakpoint: r
  };
}
export function $$w4(e, t, r) {
  let n = fullscreenValue.getViewportInfo();
  e.x > .9 * n.width && t(VisualBellActions.enqueue({
    type: "inline-preview-resize-to-actual-size",
    message: getI18nString("inline_preview.resize_to_actual_size_visual_bell"),
    button: {
      text: getI18nString("bindings.revert"),
      editScope: "inline-preview-resize-revert",
      action: r
    },
    error: !1
  }));
}
export const Ah = $$h0;
export const Fe = $$g1;
export const HS = $$I2;
export const Sq = $$f3;
export const UB = $$w4;
export const hF = $$N5;
export const hX = $$C6;
export const kl = $$m7;
export const l5 = $$E8;
export const nw = $$S9;
export const ut = $$v10;
export const wR = $$_11;
export const xY = $$y12;
