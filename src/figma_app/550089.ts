import { jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { flushSync } from "../vendor/944059";
import { useSelector } from "react-redux";
import { Fullscreen, SceneGraphHelpers } from "../figma_app/763686";
import { defaultSessionLocalIDArrayString, defaultSessionLocalIDString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { memoizeByArgs } from "../figma_app/815945";
import { trackEventAnalytics } from "../905/449184";
import { parsePxNumber } from "../figma_app/783094";
import { Point } from "../905/736624";
import { lg } from "../figma_app/976749";
import { fullscreenValue } from "../figma_app/455680";
import { UK } from "../figma_app/740163";
import { useFullscreenReady } from "../905/924253";
import { updateHoveredNode } from "../figma_app/741237";
import { FFileType } from "../figma_app/191312";
import { getObservableOrFallback } from "../figma_app/84367";
import { requestDeferredExecution } from "../905/561433";
import { ViewportNavigator, defaultNavigationConfig, viewportNavigatorContext, ViewportProvider } from "../figma_app/298911";
import { y9S, IuL, MJh } from "../figma_app/27776";
let v = new Set(["DOCUMENT", "CANVAS", "NONE"]);
let A = parsePxNumber(y9S);
let x = parsePxNumber(IuL);
let N = parsePxNumber(MJh);
let C = (e, t, r) => r ? e === FFileType.WHITEBOARD ? x : t ? N : 0 : 0;
let w = memoizeByArgs((e, t, r, n, i) => {
  let {
    x,
    y,
    offsetX,
    offsetY,
    width,
    height,
    zoomScale
  } = e;
  t && (a += A, s += A, o += A / zoomScale / 2, l += A / zoomScale / 2, d -= A, c -= A, d = Math.max(width, 0), c = Math.max(height, 0));
  let p = C(n, i, r);
  c -= p;
  c = Math.max(height, 1);
  l -= p / zoomScale / 2;
  return {
    ...e,
    x,
    y,
    offsetX,
    offsetY,
    width,
    height
  };
});
let O = e => {
  let t = e.split(",");
  if (t.length) return t[0].replace(/[\[\]\s]/g, "");
};
let R = e => e.replace(/[\[\]\s]/g, "").split(",");
function L(e, t, r) {
  let n;
  let i = Fullscreen.getActiveCommentAnchorData();
  n = r && i && i.stablePath !== defaultSessionLocalIDArrayString && i.stablePath.length > 0 ? i.stablePath : Fullscreen.getCommentAnchorDataAtPosition(e.x, e.y).stablePath;
  let a = {
    canvasPosition: e,
    pageId: t,
    viewport: fullscreenValue.getViewportInfo(),
    createdIn: window.FigmaMobile ? "mobileViewer" : "fullscreen"
  };
  if (null == n || n === defaultSessionLocalIDArrayString) return a;
  let s = SceneGraphHelpers.getBoundsForStablePath(n);
  if (!s && r && (trackEventAnalytics("Comment stablePathBounds invalid", {
    usingActiveNode: !0
  }, {
    forwardToDatadog: !0
  }), s = SceneGraphHelpers.getBoundsForStablePath(n)), !s) return (trackEventAnalytics("Comment stablePathBounds invalid", {
    usingActiveNode: !1
  }, {
    forwardToDatadog: !0
  }), t) ? {
    ...a,
    nodeId: t,
    inFrame: !1,
    stablePath: [t]
  } : a;
  let d = {
    x: s.x,
    y: s.y
  };
  let c = Point.subtract(e, d);
  let p = O(n);
  return {
    ...a,
    nodeId: p,
    nodeOffset: c,
    inFrame: t !== p,
    stablePath: R(n)
  };
}
function P(e) {
  let t = getObservableOrFallback(UK().renderRulers);
  let r = useSelector(e => e.mirror.appModel.showUi);
  let c = lg();
  let u = useRef(fullscreenValue.getViewportInfo());
  let [p, _] = useState(fullscreenValue.getViewportInfo());
  !function (e) {
    let t = useSelector(e => "prototype" === e.selectedView.view || "communityHub" === e.selectedView.view);
    useEffect(() => {
      !t && fullscreenValue.isReady() && (e(fullscreenValue.getViewportInfo()), requestDeferredExecution());
    }, [e, t]);
    useEffect(() => {
      let t = t => {
        flushSync(() => {
          e(t);
        });
      };
      fullscreenValue.viewport.on("onSetViewport", t);
      return () => {
        fullscreenValue.viewport.removeListener("onSetViewport", t);
      };
    }, [e]);
  }(useCallback(e => {
    u.current = e;
    _(e);
  }, [_]));
  let f = useMemo(() => ({
    getViewportInfo: () => w(u.current, t, r, c, !0),
    getRawViewportInfo: () => u.current,
    getCommentsWrapperOffset: e => ({
      x: 0,
      y: 1
    }),
    setCanvasSpaceCenter: e => Fullscreen.setCanvasSpaceCenter(e.x, e.y),
    setZoomScale: (e, t) => Fullscreen.setCanvasZoomScale(t),
    setHovering: e => {
      if (!e) {
        updateHoveredNode(defaultSessionLocalIDString);
        return;
      }
      let t = Fullscreen.getCommentAnchorDataAtPosition(e.x, e.y).stablePath;
      let r = t ? getSingletonSceneGraph().getFromStablePath(R(t)) : null;
      r && !v.has(r.type) ? updateHoveredNode(r.guid) : updateHoveredNode(defaultSessionLocalIDString);
    },
    setCurrentPageIdAsync: async e => await getSingletonSceneGraph().setCurrentPageFromNodeAsync(e),
    pageIdForNodeId: e => Fullscreen.getPageIdFromNode(e),
    getCommentDestinationForCanvasPosition: L,
    getValidCommentsRect: () => null
  }), [t, r, c]);
  let y = useMemo(() => new ViewportNavigator(f, {
    ...defaultNavigationConfig,
    isGetViewportAtomic: !0
  }), [f]);
  return jsx(viewportNavigatorContext.Provider, {
    value: y,
    children: jsx(ViewportProvider, {
      latestViewport: p,
      children: e.children
    })
  });
}
export function $$D0(e) {
  return useFullscreenReady() ? jsx(P, {
    children: e.children
  }) : jsx(Fragment, {
    children: e.children
  });
}
export const d = $$D0;