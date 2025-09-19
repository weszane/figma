import { jsx, Fragment } from "react/jsx-runtime";
import { useMemo, useCallback, useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { lQ } from "../905/934246";
import { sha1HexFromBytes } from "../905/125019";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { _L } from "../9410/635978";
import { replaceSelection } from "../figma_app/741237";
import { tB } from "../figma_app/731583";
import { getImageOrVideoPaint } from "../figma_app/385874";
import { getViewportInfo, scaleRect } from "../figma_app/62612";
import { useStableSelectedNode, useSceneGraphSelection } from "../figma_app/722362";
import { useStrictDeepEqualSceneValue } from "../figma_app/167249";
import { isSupportedNodeType } from "../905/321380";
import { mc, DD, ZU } from "../9410/640042";
import { AppStateTsApi } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { tG } from "../figma_app/723183";
import { useSyncedRef } from "../905/633914";
import { oe, H as _$$H } from "../figma_app/376315";
import { sO } from "../figma_app/21029";
function T(e) {
  return e ? e.richMediaInfo?.richMediaType === "VIDEO" ? e.childrenGuids[0] ?? null : e.hasEnabledVideoPaint ? e.guid : null : null;
}
function E(e) {
  let t = T(e.mirror.sceneGraph.get(e.mirror.appModel.hoveredNode));
  return t ? [t] : [];
}
export function $$S0() {
  let e = function () {
    let e = useStableSelectedNode();
    let t = useSelector(E);
    return useMemo(() => {
      let i = [...t];
      let n = T(e);
      n && i.push(n);
      return [...new Set(i)];
    }, [t, e]);
  }();
  return e.length ? jsx(w, {
    videoNodeIds: e
  }) : null;
}
function w({
  videoNodeIds: e
}) {
  let t = function (e) {
    let t = useCallback((e, t) => e.nodeId ? {
      nodeId: e.nodeId,
      position: t
    } : void 0, []);
    return tB("VideoOverlays", e, t, {
      useFlushSyncExpensive: !0
    });
  }(e);
  let i = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  return i ? jsx(Fragment, {
    children: Object.entries(t).map(([e, t]) => jsx(I, {
      nodeId: e,
      position: t.position,
      viewportInfo: i
    }, e))
  }) : null;
}
function I({
  nodeId: e,
  position: t,
  viewportInfo: i
}) {
  let [u, T] = useState(!1);
  let E = sO();
  let S = useSceneGraphSelection();
  let w = useMemo(() => Object.keys(S), [S]);
  let I = useSelector(e => e.mirror.sceneGraph);
  let L = useMemo(() => scaleRect(i, t), [i, t]);
  let N = useStrictDeepEqualSceneValue((e, t) => {
    let i = e.get(t);
    if (!i || !i.hasEnabledVideoPaint) return null;
    let n = i.fills.findIndex(e => getImageOrVideoPaint(e)?.video?.hash);
    if (-1 === n) return null;
    let r = i.fills[n];
    return r && r.video?.hash ? {
      hexHash: sha1HexFromBytes(r.video.hash),
      index: n,
      showControls: !!(i.videoPlayback?.showControls || i.isInImmutableFrame)
    } : null;
  }, e);
  let [A, O, k, R, M] = function (e, t, i, n, a, s) {
    let [o, d] = useState("dormant");
    let [c, u, p] = useSyncedRef(null);
    let [h, m, f] = useSyncedRef(null);
    let [_, C, T] = useSyncedRef(null);
    let [E] = useAtomValueAndSetter(oe);
    let S = function (e, t, i, n, a, s, o, l) {
      let d = useRef(s);
      let c = useRef(o);
      return useCallback(() => {
        if (!e) return;
        t("loading");
        let r = document.createElement("video");
        r.crossOrigin = "anonymous";
        r.autoplay = !0;
        r.muted = 0 === l;
        r.volume = l;
        i(r);
        let s = document.createElement("div");
        s.appendChild(r);
        s.style.width = `${d.current}px`;
        s.style.height = `${c.current}px`;
        document.body.appendChild(s);
        n(s);
        (async function () {
          e && a(await mc(null, r, e));
        })();
      }, [e, t, a, i, n, l]);
    }(t, d, f, T, p, n, a, E[e]?.currentVolume !== void 0 ? E[e].currentVolume : 1);
    let w = useCallback(() => {
      if (c.current) {
        try {
          c.current.dispose();
        } catch (e) {
          console.error("Error disposing of video player", e);
        }
        p(null);
      }
      function t() {
        let t = getSingletonSceneGraph().get(e);
        t && null != i && (AppStateTsApi?.markContainingIndependentLayerNodesDirty(t.guid) || AppStateTsApi?.invalidateCanvas(), AppStateTsApi?.moveFromIndependentRenderLayer(t.guid), t.invalidateCanvasSpaceBoundsForSelfAndParents());
      }
      h.current && h.current.parentNode && h.current.remove();
      f(null);
      _.current && _.current.parentNode && _.current.remove();
      T(null);
      AppStateTsApi?.removeAllVideoNodeReferences(e);
      d("dormant");
      t();
      setTimeout(t, 0);
    }, [e, i, c, p, d, h, f, _, T]);
    (function (e, t, i, n, a, s) {
      let o = useRef(s);
      o.current = s;
      useEffect(() => {
        i && n && n.parentNode && null != t && (i.on("playing", () => {
          a("playing");
          let i = getSingletonSceneGraph().get(e);
          if (i) {
            i.initializeVideoTextureInFillPaint(t, n.videoWidth, n.videoHeight);
            i.setVideoElementInFillPaint(t, n);
            AppStateTsApi?.moveToIndependentRenderLayer(i.guid);
            let r = () => {
              if (!o.current && (i = getSingletonSceneGraph().get(e))) {
                let e = Math.floor(1e3 * n.currentTime);
                i.setVideoCurrentTimeInFillPaint(t, e);
                i.setVideoIsPlayingInFillPaint(t, !n.paused);
                AppStateTsApi?.markContainingIndependentLayerNodesDirty(i.guid) || AppStateTsApi?.invalidateCanvas();
                i.invalidateCanvasSpaceBoundsForSelfAndParents();
              }
            };
            if ("requestVideoFrameCallback" in HTMLVideoElement.prototype) {
              let e = () => {
                r();
                n.requestVideoFrameCallback(e);
              };
              e();
            } else {
              let e = () => {
                r();
                requestAnimationFrame(e);
              };
              e();
            }
          }
        }), getSingletonSceneGraph().get(e)?.videoPlayback?.muted && (i.muted(!0), i.volume(0)), i.play());
      }, [e, t, i, n, a]);
    })(e, i, u, m, d, s);
    useEffect(() => () => {
      w();
    }, [w]);
    useEffect(() => {
      let e = tG().subscribeToContextLost(() => {
        w();
      });
      return () => {
        e();
      };
    }, [w]);
    return [m, C, o, S, w];
  }(e, N?.hexHash ?? null, N?.index ?? null, t.width * i.zoomScale, t.height * i.zoomScale, i.isPanning || i.isZooming);
  let D = useCallback(t => {
    let i = I.get(e);
    let n = i?.parentNode?.type || "";
    if (isSupportedNodeType(n)) {
      let e = i?.parentGuid;
      e && !w.includes(e) && replaceSelection([e]);
    } else w.includes(e) || replaceSelection([e]);
    t && "dormant" !== k ? t?.paused ? t?.play() : t?.pause() : (T(!1), R());
  }, [k, R, e, w, I]);
  let P = DD(e);
  let U = ZU(e);
  let [F, H] = useAtomValueAndSetter(_$$H);
  let {
    isVideoNodeHovered,
    pointerDownOnVideo
  } = F;
  let G = useCallback((e, t) => {
    H({
      isVideoNodeHovered: e,
      pointerDownOnVideo: t
    });
  }, [H]);
  return N && N.showControls ? jsx("div", {
    style: {
      position: "fixed",
      width: t.width * i.zoomScale,
      height: t.height * i.zoomScale,
      top: i.y,
      left: i.x,
      transform: `translate(${L.x}px, ${L.y}px) rotate(${t.angle}deg)`,
      transformOrigin: "top left",
      pointerEvents: "none"
    },
    children: jsx("div", {
      style: {
        pointerEvents: "auto"
      },
      children: jsx(_L, {
        didAutoplayOnSelection: !1,
        hasEnded: u,
        isLoading: "loading" === k,
        isMaximized: !1,
        isVideoHovered: !0,
        isVideoNodeHovered,
        mediaHash: N.hexHash,
        pointerDownOnVideo,
        setHasEnded: e => {
          T(e);
          e && M();
        },
        setIsMaximized: lQ,
        setIsVideoHovered: lQ,
        setVideoControls: G,
        shouldHideControlBar: U,
        shouldHideFullscreenButton: E,
        shouldHidePlaybackButton: P,
        toggleVideoPlayback: D,
        videoContainerElement: O,
        videoElement: A
      })
    })
  }) : null;
}
export const H = $$S0;