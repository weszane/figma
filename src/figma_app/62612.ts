import { useRef, useEffect, useContext, useMemo } from "react";
import { flushSync } from "../vendor/944059";
import { Fullscreen } from "../figma_app/763686";
import { memoizeByArgs } from "../figma_app/815945";
import { parsePxNumber } from "../figma_app/783094";
import { logError } from "../905/714362";
import { Point } from "../905/736624";
import { requestDeferredExecution } from "../905/561433";
import { previousViewportRefContext, currentViewportRefContext, defaultViewportState, viewportXContext, frameCountContext, viewportYContext, viewportWidthContext, viewportHeightContext, viewportZoomContext, viewportPanningContext, activeStateContext, viewportOffsetXContext, viewportOffsetYContext, viewportZoomingContext } from "../figma_app/298911";
import { fullscreenValue } from "../figma_app/455680";
import { lK } from "../figma_app/740163";
import { rulerThickness } from "../figma_app/786175";
export let $$n20;
export function $$g16(e, t, r = !0) {
  let n = {
    x: e.width / 2 + (t.x - e.offsetX) * e.zoomScale,
    y: e.height / 2 + (t.y - e.offsetY) * e.zoomScale
  };
  return r ? Point.rounded(n) : n;
}
export function $$f7(e, t) {
  let r = new Point(e.x, e.y);
  return $$T0(e, Point.subtract(t, r));
}
export function $$E1(e, t) {
  let r = new Point(e.x, e.y);
  let n = $$g16(e, t);
  return Point.add(n, r);
}
export function $$y21(e, t) {
  return Math.round(e / t - .5);
}
export function $$b12(e, t, r, n) {
  return Math.round(n / 2 + (e - t) * r);
}
export function $$T0(e, t) {
  return Point.rounded({
    x: (t.x - e.width / 2) / e.zoomScale + e.offsetX,
    y: (t.y - e.height / 2) / e.zoomScale + e.offsetY
  });
}
export function $$I15(e, t, r) {
  let n = $$g16(e, {
    x: t.x,
    y: t.y
  }, r);
  return {
    x: n.x,
    y: n.y,
    width: t.width * e.zoomScale,
    height: t.height * e.zoomScale
  };
}
export function $$S17(e, t) {
  return !(e.x + e.width < 0) && !(e.x > t.width) && !(e.y + e.height < 0) && !(e.y > t.height);
}
export function $$v14(e, t) {
  let {
    offsetX,
    offsetY,
    zoomScale,
    width,
    height
  } = t;
  return !(e.x < offsetX - width / 2 / zoomScale) && !(e.x + e.width > offsetX + width / 2 / zoomScale) && !(e.y < offsetY - height / 2 / zoomScale) && !(e.y + e.height > offsetY + height / 2 / zoomScale);
}
export function $$A24(e) {
  if (e.height < 0 || e.width < 0 || e.zoomScale <= 0) {
    logError("Viewport", "invalid values", {
      info: e
    });
    return Error("Invalid Viewport");
  }
  return {
    x: e.offsetX - e.width / e.zoomScale / 2,
    y: e.offsetY - e.height / e.zoomScale / 2,
    width: e.width / e.zoomScale,
    height: e.height / e.zoomScale
  };
}
export function $$x4(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y,
    width: e.width,
    height: e.height
  };
}
export function $$N25(e) {
  return memoizeByArgs((e, t, r, n) => ({
    x: e,
    y: t,
    height: r,
    width: n
  }))(e.x, e.y, e.height, e.width);
}
export function $$C19(e) {
  let t = $$j18(e);
  let r = useRef(t);
  useEffect(() => {
    r.current = t;
  }, [r, t]);
  return r;
}
export function $$w8({
  subscribeToUpdates_expensive: e
}) {
  let t = $$j18({
    subscribeToUpdates_expensive: e
  });
  let r = useContext(previousViewportRefContext).current || t;
  let n = t.offsetX - r.offsetX;
  let a = t.offsetY - r.offsetY;
  let s = t.zoomScale - r.zoomScale;
  return {
    ...t,
    deltaOffsetX: n,
    deltaOffsetY: a,
    deltaZoomScale: s
  };
}
export function $$O3(e, t) {
  useEffect(() => {
    fullscreenValue?.isReady() && e.subscribeToUpdates_expensive && (t(fullscreenValue.getViewportInfo()), requestDeferredExecution());
  }, [t, e.subscribeToUpdates_expensive]);
  useEffect(() => {
    if (fullscreenValue && e.subscribeToUpdates_expensive) {
      let e = e => {
        flushSync(() => {
          t(e);
        });
      };
      fullscreenValue.viewport.on("onSetViewport", e);
      return () => {
        fullscreenValue.viewport.removeListener("onSetViewport", e);
      };
    }
  }, [t, e.subscribeToUpdates_expensive]);
}
function R(e) {
  useContext(e);
  return useContext(currentViewportRefContext).current || defaultViewportState;
}
export function $$L6(e) {
  return R(e.subscribeToUpdates_expensive ? viewportXContext : frameCountContext).x;
}
export function $$P13(e) {
  return R(e.subscribeToUpdates_expensive ? viewportYContext : frameCountContext).y;
}
export function $$D10(e) {
  return R(e.subscribeToUpdates_expensive ? viewportWidthContext : frameCountContext).width;
}
function k(e) {
  return R(e.subscribeToUpdates_expensive ? viewportHeightContext : frameCountContext).height;
}
export function $$M9(e) {
  return R(e.subscribeToUpdates_expensive ? viewportZoomContext : frameCountContext).zoomScale;
}
export function $$F5(e) {
  return R(e.subscribeToUpdates_expensive ? viewportPanningContext : activeStateContext).isPanning;
}
export function $$j18(e) {
  let t = $$L6(e);
  let r = $$P13(e);
  let n = $$D10(e);
  let a = k(e);
  let s = R(e.subscribeToUpdates_expensive ? viewportOffsetXContext : frameCountContext).offsetX;
  let o = R(e.subscribeToUpdates_expensive ? viewportOffsetYContext : frameCountContext).offsetY;
  let l = $$M9(e);
  let d = $$F5(e);
  let c = R(e.subscribeToUpdates_expensive ? viewportZoomingContext : activeStateContext).isZooming;
  return useMemo(() => ({
    x: t,
    y: r,
    width: n,
    height: a,
    offsetX: s,
    offsetY: o,
    zoomScale: l,
    isPanning: d,
    isZooming: c
  }), [t, r, n, a, s, o, l, d, c]);
}
export function $$U23() {
  let e = {
    subscribeToUpdates_expensive: !0
  };
  let t = $$L6(e);
  let r = $$P13(e);
  let n = $$D10(e);
  let a = k(e);
  return useMemo(() => ({
    x: t,
    y: r,
    width: n,
    height: a
  }), [t, r, n, a]);
}
export function $$B22() {
  $$n20 = void 0;
}
export function $$G11(e) {
  return fullscreenValue.onReady().then(() => {
    if (!Fullscreen) return Promise.reject(Error("Fullscreen bindings are not initialized"));
    let t = new Promise(e => {
      $$n20 = e;
    });
    Fullscreen.computeViewportSettingsForNode__DO_NOT_USE_DIRECTLY(e);
    return t;
  });
}
let V = parsePxNumber(rulerThickness);
export function $$H2() {
  let e = {
    subscribeToUpdates_expensive: !0
  };
  let t = lK() ? V : 0;
  let r = $$L6(e) + t;
  let n = $$P13(e) + t;
  let a = $$D10(e) - t;
  let s = k(e) - t;
  return useMemo(() => ({
    x: r,
    y: n,
    width: a,
    height: s
  }), [r, n, a, s]);
}
export const $$ = $$T0;
export const $g = $$E1;
export const Cj = $$H2;
export const D6 = $$O3;
export const HD = $$x4;
export const LE = $$F5;
export const MG = $$L6;
export const Nd = $$f7;
export const PD = $$w8;
export const Pl = $$M9;
export const QU = $$D10;
export const QZ = $$G11;
export const Qt = $$b12;
export const TZ = $$P13;
export const UN = $$v14;
export const Yb = $$I15;
export const Z0 = $$g16;
export const ZT = $$S17;
export const _X = $$j18;
export const bs = $$C19;
export const gc = $$n20;
export const kE = $$y21;
export const lc = $$B22;
export const ni = $$U23;
export const qc = $$A24;
export const th = $$N25;