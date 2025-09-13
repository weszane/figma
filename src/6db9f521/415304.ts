import { jsx, Fragment } from "react/jsx-runtime";
import { useMemo, useCallback, useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { lQ } from "../905/934246";
import { sha1HexFromBytes } from "../905/125019";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { _L } from "../9410/635978";
import { replaceSelection } from "../figma_app/741237";
import { tB } from "../figma_app/731583";
import { y7 } from "../figma_app/385874";
import { getViewportInfo, scaleRect } from "../figma_app/62612";
import { Mw, KH } from "../figma_app/722362";
import { wA } from "../figma_app/167249";
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
function S(e) {
  let t = T(e.mirror.sceneGraph.get(e.mirror.appModel.hoveredNode));
  return t ? [t] : [];
}
export function $$I0() {
  let e = function () {
    let e = Mw();
    let t = useSelector(S);
    return useMemo(() => {
      let i = [...t];
      let n = T(e);
      n && i.push(n);
      return [...new Set(i)];
    }, [t, e]);
  }();
  return e.length ? jsx(N, {
    videoNodeIds: e
  }) : null;
}
function N({
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
    children: Object.entries(t).map(([e, t]) => jsx(k, {
      nodeId: e,
      position: t.position,
      viewportInfo: i
    }, e))
  }) : null;
}
function k({
  nodeId: e,
  position: t,
  viewportInfo: i
}) {
  let [u, T] = useState(!1);
  let S = sO();
  let I = KH();
  let N = useMemo(() => Object.keys(I), [I]);
  let k = useSelector(e => e.mirror.sceneGraph);
  let C = useMemo(() => scaleRect(i, t), [i, t]);
  let w = wA((e, t) => {
    let i = e.get(t);
    if (!i || !i.hasEnabledVideoPaint) return null;
    let n = i.fills.findIndex(e => y7(e)?.video?.hash);
    if (-1 === n) return null;
    let r = i.fills[n];
    return r && r.video?.hash ? {
      hexHash: sha1HexFromBytes(r.video.hash),
      index: n,
      showControls: !!(i.videoPlayback?.showControls || i.isInImmutableFrame)
    } : null;
  }, e);
  let [O, A, L, P, D] = function (e, t, i, n, l, s) {
    let [a, d] = useState("dormant");
    let [c, u, p] = useSyncedRef(null);
    let [x, h, m] = useSyncedRef(null);
    let [_, v, T] = useSyncedRef(null);
    let [S] = useAtomValueAndSetter(oe);
    let I = function (e, t, i, n, l, s, a, o) {
      let d = useRef(s);
      let c = useRef(a);
      return useCallback(() => {
        if (!e) return;
        t("loading");
        let r = document.createElement("video");
        r.crossOrigin = "anonymous";
        r.autoplay = !0;
        r.muted = 0 === o;
        r.volume = o;
        i(r);
        let s = document.createElement("div");
        s.appendChild(r);
        s.style.width = `${d.current}px`;
        s.style.height = `${c.current}px`;
        document.body.appendChild(s);
        n(s);
        (async function () {
          e && l(await mc(null, r, e));
        })();
      }, [e, t, l, i, n, o]);
    }(t, d, m, T, p, n, l, S[e]?.currentVolume !== void 0 ? S[e].currentVolume : 1);
    let N = useCallback(() => {
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
      x.current && x.current.parentNode && x.current.remove();
      m(null);
      _.current && _.current.parentNode && _.current.remove();
      T(null);
      AppStateTsApi?.removeAllVideoNodeReferences(e);
      d("dormant");
      t();
      setTimeout(t, 0);
    }, [e, i, c, p, d, x, m, _, T]);
    (function (e, t, i, n, l, s) {
      let a = useRef(s);
      a.current = s;
      useEffect(() => {
        i && n && n.parentNode && null != t && (i.on("playing", () => {
          l("playing");
          let i = getSingletonSceneGraph().get(e);
          if (i) {
            i.initializeVideoTextureInFillPaint(t, n.videoWidth, n.videoHeight);
            i.setVideoElementInFillPaint(t, n);
            AppStateTsApi?.moveToIndependentRenderLayer(i.guid);
            let r = () => {
              if (!a.current && (i = getSingletonSceneGraph().get(e))) {
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
      }, [e, t, i, n, l]);
    })(e, i, u, h, d, s);
    useEffect(() => () => {
      N();
    }, [N]);
    useEffect(() => {
      let e = tG().subscribeToContextLost(() => {
        N();
      });
      return () => {
        e();
      };
    }, [N]);
    return [h, v, a, I, N];
  }(e, w?.hexHash ?? null, w?.index ?? null, t.width * i.zoomScale, t.height * i.zoomScale, i.isPanning || i.isZooming);
  let R = useCallback(t => {
    let i = k.get(e);
    let n = i?.parentNode?.type || "";
    if (isSupportedNodeType(n)) {
      let e = i?.parentGuid;
      e && !N.includes(e) && replaceSelection([e]);
    } else N.includes(e) || replaceSelection([e]);
    t && "dormant" !== L ? t?.paused ? t?.play() : t?.pause() : (T(!1), P());
  }, [L, P, e, N, k]);
  let M = DD(e);
  let F = ZU(e);
  let [U, V] = useAtomValueAndSetter(_$$H);
  let {
    isVideoNodeHovered,
    pointerDownOnVideo
  } = U;
  let B = useCallback((e, t) => {
    V({
      isVideoNodeHovered: e,
      pointerDownOnVideo: t
    });
  }, [V]);
  return w && w.showControls ? jsx("div", {
    style: {
      position: "fixed",
      width: t.width * i.zoomScale,
      height: t.height * i.zoomScale,
      top: i.y,
      left: i.x,
      transform: `translate(${C.x}px, ${C.y}px) rotate(${t.angle}deg)`,
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
        isLoading: "loading" === L,
        isMaximized: !1,
        isVideoHovered: !0,
        isVideoNodeHovered,
        mediaHash: w.hexHash,
        pointerDownOnVideo,
        setHasEnded: e => {
          T(e);
          e && D();
        },
        setIsMaximized: lQ,
        setIsVideoHovered: lQ,
        setVideoControls: B,
        shouldHideControlBar: F,
        shouldHideFullscreenButton: S,
        shouldHidePlaybackButton: M,
        toggleVideoPlayback: R,
        videoContainerElement: A,
        videoElement: O
      })
    })
  }) : null;
}
export const H = $$I0;