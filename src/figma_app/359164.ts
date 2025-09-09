import { useCallback } from "react";
import { AppStateTsApi, DrawingElementType, VisibilityCondition } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { vx } from "../figma_app/175258";
import { fullscreenValue } from "../figma_app/455680";
import { valueOrFallback, MIXED_MARKER, isInvalidValue } from "../905/216495";
import { zj, Gt } from "../905/275640";
import { KH } from "../figma_app/722362";
import { getObservableValue } from "../figma_app/84367";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { a2 } from "../figma_app/762558";
import { om } from "../figma_app/395097";
import { A8 } from "../figma_app/836943";
export function $$g13() {
  let {
    strokeAlign,
    strokeCap,
    terminalCap,
    strokeJoin,
    arcRadius,
    arcSweep,
    connectorLineStyle,
    miterLimitAngle,
    leftEndCap,
    rightEndCap,
    dashPattern,
    dashCap,
    strokePaints,
    strokeWeight,
    borderSharedWeight,
    styleIdForStrokeFill,
    inheritFillStyleKeyForStroke,
    strokeCapSize,
    leftCapSize,
    rightCapSize
  } = zj("strokeAlign", "strokeCap", "terminalCap", "strokeJoin", "arcRadius", "arcSweep", "connectorLineStyle", "miterLimitAngle", "leftEndCap", "rightEndCap", "dashPattern", "dashCap", "strokePaints", "strokeWeight", "borderSharedWeight", "styleIdForStrokeFill", "inheritFillStyleKeyForStroke", "strokeCapSize", "leftCapSize", "rightCapSize");
  let T = Gt("maxStrokeWeight");
  return {
    strokeAlign,
    strokeCap,
    terminalCap,
    strokeJoin,
    arcRadius,
    arcSweep,
    numSelectedByType: Gt("numSelectedByType"),
    connectorLineStyle,
    miterLimitAngle,
    leftEndCap,
    rightEndCap,
    dashPattern,
    dashCap,
    maxStrokeWeight: T,
    strokePaints,
    strokeWeight,
    borderSharedWeight,
    inheritStyleID: styleIdForStrokeFill ?? null,
    inheritStyleKey: inheritFillStyleKeyForStroke ?? null,
    strokeCapSize,
    leftCapSize,
    rightCapSize
  };
}
export function $$f4() {
  return getObservableValue(AppStateTsApi?.propertiesPanelState().strokePanelMode, DrawingElementType.NONE);
}
export function $$E2() {
  return getObservableValue(AppStateTsApi?.propertiesPanelState().strokePanelTerminalPointCount, 0);
}
export function $$y0(e, t, r) {
  let n = A8(r);
  return !(e && vx(e, "TABLE")) && (n || valueOrFallback(t, []).length > 0 || t === MIXED_MARKER);
}
export function $$b5() {
  let {
    numSelectedByType,
    strokePaints,
    inheritStyleKey
  } = $$g13();
  return $$y0(numSelectedByType, strokePaints, inheritStyleKey);
}
export function $$T11(e, t, r = yesNoTrackingEnum.YES) {
  let n = valueOrFallback(e, []);
  if (n.length > 0 && !n.find(e => e.visible)) {
    let e = n.map(e => ({
      ...e,
      visible: !0
    }));
    fullscreenValue.updateSelectionProperties({
      strokePaints: e
    }, {
      shouldCommit: yesNoTrackingEnum.NO,
      overwrite: VisibilityCondition.ONLY_WHEN_NOT_EMPTY
    });
  }
  fullscreenValue.updateSelectionProperties(t, {
    shouldCommit: r
  });
  a2("strokePaints");
}
export function $$I6() {
  let {
    strokePaints
  } = $$g13();
  return useCallback((t, r = yesNoTrackingEnum.YES) => $$T11(strokePaints, t, r), [strokePaints]);
}
export function $$S3() {
  let {
    numSelectedByType
  } = $$g13();
  let t = KH();
  return !!numSelectedByType && (!!(vx(numSelectedByType, "RECTANGLE") || vx(numSelectedByType, "ROUNDED_RECTANGLE") || vx(numSelectedByType, "SYMBOL") || vx(numSelectedByType, "INSTANCE")) || !!vx(numSelectedByType, "FRAME") && function e(t, r) {
    let n = new Set(["RECTANGLE", "ROUNDED_RECTANGLE", "SYMBOL", "INSTANCE"]);
    for (let i of t) if (n.has(i.type) || "FRAME" === i.type && !i.resizeToFit || "FRAME" === i.type && r < 2 && e(i.childrenNodes, r + 1)) return !0;
    return !1;
  }(Object.keys(t).map(getSingletonSceneGraph().get).filter(e => !!e), 0));
}
export function $$v7(e) {
  let t = e === om.ALL;
  return {
    borderTopVisible: t || e === om.TOP,
    borderRightVisible: t || e === om.RIGHT,
    borderBottomVisible: t || e === om.BOTTOM,
    borderLeftVisible: t || e === om.LEFT
  };
}
export let $$A8 = 1e3;
export function $$x9(e) {
  return e !== DrawingElementType.WASHI_TAPE;
}
export function $$N1(e) {
  if (isInvalidValue(e)) return MIXED_MARKER;
  switch (e) {
    case "NONE":
    case "ROUND":
    case "SQUARE":
      return e;
    default:
      return;
  }
}
export function $$C10(e) {
  return e ? isInvalidValue(e) ? MIXED_MARKER : 0 === e.length ? "LINE" : 2 !== e.length ? "CUSTOM_DASH" : 0 === e[0] && 0 === e[1] ? "LINE" : "SIMPLE_DASH" : "LINE";
}
export function $$w12(e, t, r, n) {
  return t && e === DrawingElementType.VECTOR && "LINE" !== $$C10(n) ? t : r;
}
export const Fc = $$y0;
export const Hd = $$N1;
export const Jt = $$E2;
export const R8 = $$S3;
export const V0 = $$f4;
export const W = $$b5;
export const Xd = $$I6;
export const e6 = $$v7;
export const fE = $$A8;
export const kW = $$x9;
export const qJ = $$C10;
export const w8 = $$T11;
export const x4 = $$w12;
export const zr = $$g13;