import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { memo, useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useSelector } from "../vendor/514228";
import { k as _$$k } from "../905/443820";
import { tHB } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import { am } from "../figma_app/901889";
import { tH } from "../905/751457";
import { renderI18nText } from "../905/303541";
import { EE, lB } from "../figma_app/731583";
import { _X, Yb } from "../figma_app/62612";
import { OF } from "../figma_app/562352";
import { m as _$$m } from "../9410/643761";
import { Y5 } from "../figma_app/455680";
import { Mj } from "../figma_app/624361";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { BrowserInfo } from "../figma_app/778880";
import { sQ, _L } from "../9410/635978";
import { s4 } from "../figma_app/8833";
import { RJ, mc, DD, ZU } from "../9410/640042";
import { vE, H } from "../figma_app/376315";
var c = d;
function g(e) {
  let t = e.mirror.sceneGraph;
  let i = e.mirror.sceneGraphSelection;
  if (1 !== Object.keys(i).length) return null;
  let r = t.get(Object.keys(i)[0]);
  return r && "MEDIA" === r.type ? r : null;
}
let C = _$$m(v);
async function v(e) {
  let t = await OF(() => E(e), 10, 1e3);
  await new Promise((i, r) => {
    let n = new Image();
    n.crossOrigin = "anonymous";
    n.addEventListener("load", i);
    n.addEventListener("error", t => {
      r(t.type + " loading the image with hash " + e);
    });
    n.src = t;
  });
  return t;
}
async function E(e) {
  let t = (await Mj([e], await Y5.openFilePromise())).s3_urls[e];
  if (!t) throw Error("Couldn't resolve image URL from server");
  return t;
}
let N = "rich_media_overlay--loadingFallback---qUKd";
let A = "rich_media_overlay--croppedClipPath--BeUH-";
function O(e, t) {
  e && (t ? (e.play(), BrowserInfo.safari && (e.currentTime = .1)) : sQ(e) ? e.pause() : (BrowserInfo.safari && e.currentTime > .1 && (e.currentTime -= .1), e.play()));
}
let L = memo(({
  nodeId: e,
  mediaHash: t,
  isMaximized: i,
  setIsMaximized: a
}) => {
  RJ(t);
  let s = am();
  let [o, l] = useState(null);
  let [d, p, h, m] = function () {
    let [e, t] = useState(!1);
    let [i, r] = useState(null);
    useEffect(() => {
      if (i) {
        let e = () => t(!0);
        let r = () => t(!1);
        i.addEventListener("mousemove", e);
        i.addEventListener("mouseleave", r);
        return () => {
          i.removeEventListener("mousemove", e);
          i.removeEventListener("mouseleave", r);
        };
      }
    }, [i]);
    return [i, r, e, t];
  }();
  let f = useRef(null);
  let g = useRef(!1);
  let _ = useAtomWithSubscription(vE);
  let [x, y] = useState(!1);
  let [b, C] = useState(!0);
  let v = useRef(!1);
  useEffect(() => {
    _ && s("figjam_video_started_playing", {
      mediaHash: t
    });
  }, [s, t, _]);
  useEffect(() => {
    !g.current && d && (g.current = !0, mc(f.current, d, t).then(e => {
      f.current = e;
    }));
  }, [g, t, d]);
  useEffect(() => {
    if (d) {
      e();
      d.addEventListener("loadeddata", e);
      d.addEventListener("canplay", e);
      return () => {
        d.removeEventListener("loadeddata", e);
        d.removeEventListener("canplay", e);
      };
    }
    function e() {
      d && (2 > (d.readyState || 0) && !v.current ? C(!0) : (v.current = !0, C(!1)));
    }
  }, [d]);
  useEffect(() => {
    s("figjam_video_selected", {
      mediaHash: t
    });
  }, [s, t]);
  let E = DD(e);
  let N = ZU(e);
  let [L, R] = useAtomValueAndSetter(H);
  let {
    isVideoNodeHovered,
    pointerDownOnVideo
  } = L;
  let P = useCallback((e, t) => {
    R({
      isVideoNodeHovered: e,
      pointerDownOnVideo: t
    });
  }, [R]);
  return jsxs("div", {
    className: "rich_media_overlay--videoContainer--oC3oc",
    ref: l,
    children: [jsx("div", {
      className: c()("rich_media_overlay--clippedVideo--JljnC", i ? "rich_media_overlay--noClipPath--ZooJK" : A),
      children: jsx("video", {
        ref: p,
        crossOrigin: "anonymous",
        autoPlay: _ && !BrowserInfo.safari,
        className: c()("rich_media_overlay--video--O6uP2", i && s4, i && "rich_media_overlay--maximizedVideoBg--FUhbn"),
        onMouseUp: function () {
          document.activeElement instanceof HTMLElement && document.activeElement.blur();
        },
        controls: BrowserInfo.isIpad && i,
        onClick: function () {
          i && O(d, x);
        }
      })
    }), jsx(_L, {
      didAutoplayOnSelection: _,
      hasEnded: x,
      isLoading: b,
      isMaximized: i,
      isVideoHovered: h,
      isVideoNodeHovered,
      mediaHash: t,
      pointerDownOnVideo,
      setHasEnded: y,
      setIsMaximized: a,
      setIsVideoHovered: m,
      setVideoControls: P,
      shouldHideControlBar: N,
      shouldHidePlaybackButton: E,
      toggleVideoPlayback: O,
      videoContainerElement: o,
      videoElement: d
    })]
  });
});
let $$R0 = memo(function () {
  let e = useSelector(g);
  return e && e.richMediaInfo && (!getFeatureFlags().video_in_canvas_figjam || "VIDEO" !== e.richMediaInfo.richMediaType) ? jsx(D, {
    nodeGuid: e.guid,
    mediaHash: e.richMediaInfo.mediaHash,
    mediaType: e.richMediaInfo.richMediaType
  }, e.richMediaInfo.mediaHash) : null;
});
let D = memo(function (e) {
  let {
    nodeGuid,
    mediaHash,
    mediaType
  } = e;
  let s = useRef(null);
  let o = useRef(null);
  let l = _X({
    subscribeToUpdates_expensive: !0
  });
  let [d, u] = useState(!1);
  useEffect(() => {
    let e = EE("rich-media", [nodeGuid], e => {
      o.current = e.position;
      B(s, l, o, d);
    });
    o.current = e.currentNodePosition[nodeGuid]?.position || null;
    B(s, l, o, d);
    return () => {
      lB("rich-media");
    };
  }, [nodeGuid, l, d]);
  return jsx(Fragment, {
    children: jsx("div", {
      ref: s,
      className: c()("rich_media_overlay--richMediaOverlay--G9rnR", {
        "rich_media_overlay--maximizedMediaPositioner--vewL5": d
      }),
      children: jsx(tH, {
        fallback: jsx(P, {
          mediaType,
          mediaHash
        }),
        boundaryKey: "Video",
        children: jsxs(Suspense, {
          fallback: jsx(M, {}),
          children: ["ANIMATED_IMAGE" === mediaType && jsx(F, {
            mediaHash
          }), "VIDEO" === mediaType && jsx(L, {
            nodeId: nodeGuid,
            mediaHash,
            setIsMaximized: u,
            isMaximized: d
          })]
        })
      })
    })
  });
});
function M() {
  return jsx("div", {
    className: c()(N, A),
    children: jsx(_$$k, {
      size: "lg"
    })
  });
}
function P({
  mediaHash: e,
  mediaType: t
}) {
  let i = renderI18nText("whiteboard.gif.failed_to_load");
  "VIDEO" === t && (i = renderI18nText("whiteboard.video.failed_to_load"), tHB?.isVideoBeingUploaded(e) && (i = renderI18nText("whiteboard.video.still_uploading")));
  return jsx("div", {
    className: c()(N, A),
    children: jsx("div", {
      className: "rich_media_overlay--errorText--upGwm text--fontNeg16--JtecD text--_fontBase--QdLsd text--_negText--j9g-L",
      children: i
    })
  });
}
function F({
  mediaHash: e
}) {
  let t = C.useValue(e);
  let i = am();
  useEffect(() => {
    i("figjam_gif_started_playing");
  }, [i]);
  return jsx("img", {
    crossOrigin: "anonymous",
    style: {
      height: "100%",
      backgroundColor: "white",
      width: "100%"
    },
    src: t,
    alt: "",
    className: A
  });
}
function B(e, t, i, r) {
  if (!e.current || !t || !i.current) return;
  let n = e.current;
  if (r) {
    n.style.position = "fixed";
    n.style.height = "auto";
    n.style.width = "auto";
    n.style.transform = "none";
    n.style.pointerEvents = "all";
  } else {
    let e = i.current;
    let r = Yb(t, e);
    n.style.height = `${r.height}px`;
    n.style.width = `${r.width}px`;
    n.style.transform = `translate(${r.x + t.x}px, ${r.y + t.y}px) rotate(${e.angle}deg)`;
    n.style.transformOrigin = "top left";
  }
}
export const J = $$R0;