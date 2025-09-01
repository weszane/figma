import { jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { d4 } from "../vendor/514228";
import { U1 } from "../figma_app/343967";
import { Xr } from "../figma_app/27355";
import { G as _$$G } from "../figma_app/318030";
import d from "classnames";
import { P } from "../vendor/348225";
import { parsePxNumber } from "../figma_app/783094";
import { Dm } from "../figma_app/8833";
import { p8, aV } from "../figma_app/722362";
import { o3, nt } from "../905/226610";
import { U1 as _$$U } from "../figma_app/144692";
import { GQ, xT, qm, g_, Yh, Ye, dc } from "../figma_app/32128";
import { wV } from "../figma_app/779965";
import { R4 } from "../figma_app/74043";
import { M } from "../figma_app/119924";
import { M$q } from "../figma_app/27776";
var c = d;
let I = "left_panel_container--sizeContainer--OhUA2";
let S = "left_panel_container--leftPanelWidth--wPtYl";
let v = "left_panel_container--panel--ILPCV";
let A = "left_panel_container--transparentBackground--JsC--";
let x = "left_panel_container--allowOverflow--b8OTU";
let N = "left_panel_container--withInsetEditorEnabled--CQbgz";
let $$C0 = "left-panel-container";
function w({
  customLoadingView: e
}) {
  return jsx("div", {
    className: c()(Dm, I, S),
    children: jsx("div", {
      className: c()(v, S, "left_panel_container--loading--YwG7B", N),
      children: e ?? jsx(_$$U, {})
    })
  });
}
function O({
  children: e,
  width: t,
  disableResizing: r,
  currentPageId: a,
  defaultWidth: d,
  maxWidth: u,
  minWidth: p,
  transparentBackground: h = !1,
  allowOverflow: g = !1,
  onDragStart: T,
  onDragEnd: w,
  shouldDeferCanvasUpdateOnPanelResize: O
}) {
  let R = useRef(null);
  let L = U1(R);
  let P = GQ(p, u);
  let D = o3(nt.newResizablePanel);
  let k = Xr(R4);
  let {
    setRulerVisibilityOnInitialSizeChange,
    setRulerVisibilityOnDragEnd,
    shouldShowGhostRulers
  } = M({
    shouldDeferCanvasUpdateOnPanelResize: !!O
  });
  let [U, B] = useState(void 0);
  if (useEffect(() => {
    void 0 !== U && P === U && (B(void 0), k(void 0));
  }, [U, P, k]), !a) return null;
  let G = jsx(wV, {
    className: c()(Dm, I, S),
    "data-cancel-insertable-resource-drag-and-drop": !0,
    defaultSize: d,
    disableResizing: r,
    id: $$C0,
    onDragEnd: w,
    onDragStart: T,
    onResize: (e) => xT(e, p, u),
    recordingKey: "leftPanelContainer.resizablePanel",
    side: "right",
    size: t,
    style: {
      maxWidth: u
    },
    children: jsx("div", {
      ref: L,
      className: c()(v, S, N, {
        [A]: h,
        [x]: g
      }),
      children: e
    })
  });
  let V = jsx(_$$G, {
    className: c()(Dm, I, {
      "left_panel_container--ghostRuler--hLFw2": shouldShowGhostRulers
    }),
    "data-cancel-insertable-resource-drag-and-drop": !0,
    defaultSize: P,
    disableResizing: r,
    doubleClickDefaultSize: d,
    id: $$C0,
    maxSize: u,
    minSize: p,
    onDragEnd: (e) => {
      O && (xT(e, p, u), setRulerVisibilityOnDragEnd());
      B(e);
      w?.();
    },
    onDragStart: T,
    onInitialSizeChange: (e) => {
      O && (xT(p, p, u), setRulerVisibilityOnInitialSizeChange());
      k(e);
    },
    onSizeChange__SLOW: O ? k : (e) => xT(e, p, u),
    recordingKey: "leftPanelContainer.resizablePanel",
    shouldDeferCanvasUpdateOnPanelResize: O,
    side: "right",
    style: {
      maxWidth: u
    },
    children: jsx("div", {
      ref: L,
      className: c()(v, N, "left_panel_container--newResizablePanel--Rp5Ig", {
        [A]: h,
        [x]: g
      }),
      children: e
    })
  });
  return D ? V : G;
}
function R({
  children: e,
  width: t,
  isCollapsed: r,
  isAllUiHidden: i,
  durationMedium: a,
  animateVisibility: s,
  useMarginInsteadOfTranslateX: o
}) {
  var l;
  l = `${parsePxNumber(M$q)}px`;
  let d = {
    collapsed: {
      opacity: 0,
      display: "block",
      transitionEnd: {
        display: "none"
      },
      ...(o ? {
        marginLeft: `calc(-${t}px - ${l})`
      } : {
        translateX: `calc(-${t}px - ${l})`
      })
    },
    expanded: {
      opacity: 1,
      display: "block",
      ...(o ? {
        marginLeft: 0
      } : {
        translateX: 0
      })
    },
    uiHidden: {
      display: "none"
    },
    uiShowing: {}
  };
  return jsx(P.div, {
    className: "left_panel_container--motionContainer--HkdCP",
    transition: {
      duration: s ? a > 0 ? a : .2 : 0,
      ease: "easeOut"
    },
    variants: d,
    animate: [r ? "collapsed" : "expanded", i ? "uiHidden" : "uiShowing"],
    initial: !1,
    children: e
  });
}
export function $$L1({
  children: e,
  width: t,
  disableResizing: r = !1,
  defaultWidth: i = qm,
  maxWidth: s = g_,
  minWidth: o = Yh,
  customLoadingView: l,
  transparentBackground: d = !1,
  useMarginInsteadOfTranslateX: c = !1,
  allowOverflow: u = !1,
  onDragStart: p,
  onDragEnd: _,
  shouldDeferCanvasUpdateOnPanelResize: g
}) {
  let E = !p8("showUi");
  let y = d4((e) => e.mirror.appModel?.currentPage);
  let b = aV();
  let T = GQ(o, s);
  let I = t ?? T;
  let S = Ye();
  let v = dc();
  let A = o3(nt.newResizablePanel);
  return jsx("div", {
    children: jsx(R, {
      width: I,
      isCollapsed: S,
      isAllUiHidden: E,
      animateVisibility: !1,
      durationMedium: v,
      useMarginInsteadOfTranslateX: c,
      children: b ? jsx(w, {
        customLoadingView: l
      }) : jsx(O, {
        allowOverflow: u,
        currentPageId: y,
        defaultWidth: i,
        disableResizing: r,
        maxWidth: s,
        minWidth: o,
        onDragEnd: _,
        onDragStart: p,
        shouldDeferCanvasUpdateOnPanelResize: g,
        transparentBackground: d,
        width: A ? void 0 : I,
        children: e
      })
    })
  });
}
export const k = $$C0;
export const $ = $$L1;