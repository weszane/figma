import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { memo, useState, useEffect, useRef, useCallback } from "react";
import { clamp } from "../figma_app/492908";
import { ButtonPrimitive } from "../905/632989";
import { k as _$$k } from "../905/443820";
import { K } from "../905/443068";
import { p as _$$p } from "../905/673591";
import { O as _$$O } from "../905/301080";
import { P as _$$P } from "../905/547523";
import { L as _$$L } from "../905/473569";
import _ from "classnames";
import { R7 } from "../905/508367";
import { logger } from "../905/651849";
import { BrowserInfo } from "../figma_app/778880";
import { _d } from "../figma_app/795674";
import { Fe, uz } from "../905/284552";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { KindEnum } from "../905/129884";
import { j as _$$j, Y5, bb, _v, YC, TN, yG, qD, sf, Ct, It, tS, xE, CN, Yq, CY, ct, J_ } from "../905/765801";
var h = _;
let v = {
  BUTTON_SHAPE_FILL: "#FFFFFF",
  BUTTON_BG_FILL: "#000000",
  BUTTON_STROKE_OPACITY: .2,
  BUTTON_BG_FILL_OPACITY: .7,
  BUTTON_BG_FILL_HOVER_OPACITY: .9
};
function $$A(e) {
  if (null == e || Number.isNaN(e)) return "";
  let {
    seconds,
    minutes
  } = _d(e);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}
function x(e, t) {
  e && (t ? (e.play(), BrowserInfo.safari && e.currentTime(.1)) : C(e) ? e.pause() : (BrowserInfo.safari && e.currentTime() > .1 && e.currentTime(e.currentTime() - .1), e.play()));
}
export let $$N0 = memo(({
  src: e,
  fallbackSrc: t,
  useHLS: r = !1,
  autoPlay: a = !1,
  muted: o = !1,
  showControlsOnVideoLoad: l = !1,
  hideControlsAlways: d = !1,
  onEnded: c,
  autoLoop: u = !1
}) => {
  let [p, _] = useState();
  useEffect(() => {
    (async () => {
      window.VIDEOJS_NO_DYNAMIC_STYLE = !0;
      _(await Fe());
    })();
  }, []);
  let E = useRef(null);
  let T = useRef(null);
  let [I, v] = useState(null);
  let [A, N] = useState(!1);
  let [C, O] = useState(!1);
  useEffect(() => {
    let e = E.current;
    if (e) {
      let t = () => {
        O(e => !e);
      };
      e.addEventListener(R7.fullscreenChangeEventName, t);
      return () => {
        e.removeEventListener(R7.fullscreenChangeEventName, t);
      };
    }
  }, []);
  useEffect(() => {
    let e = T.current;
    e && (e.style.height = "100%", e.style.width = "100%", e.style.objectFit = C ? "contain" : "cover");
  }, [C]);
  let [R, L] = useState(!1);
  useEffect(() => {
    R && (u ? I?.play() : c?.());
  }, [u, I, R, c]);
  let P = useRef(void 0);
  let D = useCallback(() => {
    d || (N(!0), clearTimeout(P.current), P.current = setTimeout(() => N(!1), 3e3));
  }, [d]);
  useEffect(() => {
    if (!T.current || !p) return;
    let e = !1;
    let t = p.videoJs(T.current, {
      muted: o,
      autoplay: a && !BrowserInfo.safari,
      controls: !1,
      controlBar: !1,
      bigPlayButton: !1,
      loadingSpinner: !1,
      errorDisplay: !1,
      textTrackSettings: !1,
      textTrackDisplay: !1,
      nativeTextTracks: !1
    }, () => {
      e || v(t);
    });
    return () => {
      t.dispose();
      e = !0;
      v(null);
    };
  }, [a, o, p]);
  let k = useCallback(async (e, n) => {
    try {
      await uz(e, r, n);
    } catch {
      logger.warn("Reverting to fallback video source");
      await uz(t ?? null, !1, n);
    }
    l && D();
  }, [t, D, l, r]);
  useEffect(() => {
    I && e && k(e, I);
  }, [k, e, I]);
  let M = useCallback(() => {
    if (C || document.fullscreenElement) R7.exitFullscreenFunc();else if (BrowserInfo.isIpad) {
      let e = T.current;
      e?.webkitEnterFullscreen?.();
    } else {
      let e = E.current;
      e && R7.requestFullscreenFunc.call(e);
    }
  }, [C]);
  return jsxs("div", {
    className: h()(_$$j, {
      [Y5]: C
    }),
    ref: E,
    onPointerMove: D,
    children: [jsx(ButtonPrimitive, {
      className: _$$s.hFull.wFull.bgTransparent.$,
      onClick: useCallback(() => {
        I && C && x(I, R);
      }, [R, C, I]),
      actionOnPointerDown: !0,
      children: jsx("video", {
        ref: T,
        crossOrigin: "anonymous",
        controls: BrowserInfo.isIpad && C
      })
    }), jsx(w, {
      videoJsPlayer: I,
      isFullscreen: C,
      toggleFullscreen: M,
      isActive: A,
      hasEnded: R,
      setHasEnded: L
    })]
  });
});
function C(e) {
  return !!e && !e.ended() && !e.paused() && e.currentTime() > 0 && e.readyState() > 2;
}
function w({
  videoJsPlayer: e,
  isFullscreen: t,
  toggleFullscreen: r,
  isActive: a,
  hasEnded: s,
  setHasEnded: u
}) {
  let [p, _] = useState(0);
  let m = useRef(!1);
  let [g, E] = useState(null);
  let [y, b] = useState(!1);
  let [v, N] = useState(!1);
  let w = useRef(!1);
  let R = useRef(!1);
  let D = g || e?.currentTime();
  let k = e?.duration();
  let M = C(e);
  let F = useRef(void 0);
  useEffect(() => {
    N(a || !M || s || w.current);
  }, [s, a, M]);
  let j = useCallback(() => {
    _(e => e + 1);
  }, []);
  useEffect(() => {
    if (e) {
      e.on("playing", i);
      e.on("canplay", t);
      e.on("ended", s);
      e.on("timeupdate", t);
      e.on("seeking", a);
      e.on("seeked", n);
      e.on("stalled", r);
      return () => {
        e.off("playing", i);
        e.off("canplay", t);
        e.off("ended", s);
        e.off("timeupdate", t);
        e.off("seeking", a);
        e.off("seeked", n);
        e.off("stalled", r);
      };
    }
    function t() {
      j();
    }
    function r() {
      w.current = !1;
    }
    function n() {
      w.current = !1;
      u(!1);
    }
    function i() {
      u(!1);
      j();
    }
    function a() {
      w.current = !0;
    }
    function s() {
      y || u(!0);
      j();
    }
  }, [y, j, u, e]);
  let U = useCallback(() => {
    e && (x(e, s), j());
  }, [s, j, e]);
  let B = useCallback(() => {
    e && (m.current = C(e) || s, e.pause());
  }, [s, e]);
  let G = useCallback(() => {
    e && (m.current && e.play(), F.current && e.currentTime(F.current), E(null), F.current = void 0);
  }, [e]);
  let V = useCallback(t => {
    if (e) {
      if (w.current) {
        F.current = t;
        return;
      }
      e.currentTime(t);
    }
  }, [e]);
  let H = jsx(P, {
    togglePlay: U,
    hasEnded: s,
    isPlaying: M,
    shouldShowVideoControls: v,
    isFullscreen: t
  });
  if ((e?.readyState() ?? 0) < 2 && !R.current) return jsx("div", {
    className: bb,
    children: jsx(_$$k, {
      size: "lg"
    })
  });
  if (R.current = !0, BrowserInfo.isIpad && t) return null;
  let z = t ? getI18nString("whiteboard.video.minimize_tooltip") : getI18nString("whiteboard.video.fullscreen_tooltip");
  return jsxs(Fragment, {
    children: [g ? null : H, jsxs("div", {
      className: h()(_v, !v && YC),
      children: [jsxs("div", {
        className: TN,
        children: [$$A(D), " / ", $$A(k)]
      }), jsx(L, {
        currentTime: D || 0,
        totalTime: k || 0,
        onScrubStart: B,
        onScrub: E,
        onScrubEnd: G,
        onVideoPositionUpdated: V,
        hasEnded: s,
        isScrubbing: y,
        setIsScrubbing: b
      }), jsxs("div", {
        className: yG,
        children: [jsx(K, {
          onClick: r,
          "aria-label": z,
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": z
          },
          children: t ? jsx(_$$p, {}) : jsx(_$$O, {})
        }), jsx(O, {
          rerender: j,
          videoJsPlayer: e
        })]
      })]
    })]
  });
}
function O({
  rerender: e,
  videoJsPlayer: t
}) {
  let [r, a] = useState(!1);
  let s = useCallback(() => {
    t && (t.muted(!t.muted()), e());
  }, [e, t]);
  let o = useCallback(r => {
    let n = r.target.valueAsNumber;
    t && (t.volume(n), t.muted(0 === n), e());
  }, [e, t]);
  let d = t?.muted() ? getI18nString("whiteboard.video.unmute_tooltip") : getI18nString("whiteboard.video.mute_tooltip");
  let c = t?.muted() ? jsx(_$$P, {}) : jsx(_$$L, {});
  return jsxs("div", {
    onPointerMove: () => a(!0),
    onPointerOut: () => a(!1),
    children: [jsx(K, {
      onClick: s,
      "aria-label": d,
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": d
      },
      children: c
    }), !BrowserInfo.isIpad && r ? jsx(R, {
      volume: t?.volume() ?? 1,
      muted: t?.muted() ?? !1,
      handleChange: o
    }) : null]
  });
}
function R({
  handleChange: e,
  volume: t,
  muted: r
}) {
  let a = r ? 0 : t;
  let s = 100 * a;
  let o = useRef(null);
  return jsx("div", {
    className: qD,
    children: jsx("div", {
      className: sf,
      children: jsx("input", {
        className: Ct,
        style: {
          background: `linear-gradient(to right,var(--active-slider-color) 0%,var(--active-slider-color) ${s}%,var(--inactive-slider-color) ${s}%,var(--inactive-slider-color) 100%)`
        },
        type: "range",
        min: 0,
        max: 1,
        step: .02,
        value: a,
        onChange: e,
        ref: o
      })
    })
  });
}
function L({
  currentTime: e,
  totalTime: t,
  hasEnded: r,
  onVideoPositionUpdated: s,
  onScrubStart: o,
  onScrub: l,
  onScrubEnd: d,
  isScrubbing: c,
  setIsScrubbing: u
}) {
  let [p, _] = useState(!1);
  let h = useRef(null);
  let m = useRef(null);
  let g = useCallback(t => {
    if (!h.current) return;
    t.stopPropagation();
    u(!0);
    o();
    let r = h.current.getBoundingClientRect();
    m.current = {
      minX: r.x,
      maxX: r.x + r.width,
      originX: t.clientX,
      newTime: e
    };
  }, [e, o, u]);
  let E = useCallback(e => {
    if (!h.current) return;
    e.stopPropagation();
    u(!0);
    o();
    let r = h.current.getBoundingClientRect();
    let n = r.x;
    let i = r.x + r.width;
    let l = e.clientX;
    let d = clamp(0, (l - n) / (i - n) * t, t);
    s(d);
    m.current = {
      minX: n,
      maxX: i,
      originX: e.clientX,
      newTime: d
    };
  }, [o, s, u, t]);
  let y = useCallback(e => {
    if (!m.current) return;
    let r = e.clientX;
    let {
      minX,
      maxX
    } = m.current;
    let o = clamp(0, (r - minX) / (maxX - minX) * t, t);
    m.current.newTime = o;
    l(o);
    s(m.current.newTime);
  }, [l, s, t]);
  let b = useCallback(() => {
    m.current && (s(m.current.newTime), u(!1), d(), m.current = null);
  }, [d, s, u]);
  useEffect(() => {
    if (c) {
      document.addEventListener("pointermove", y);
      document.addEventListener("pointerup", b);
      return () => {
        document.removeEventListener("pointermove", y);
        document.removeEventListener("pointerup", b);
      };
    }
  }, [c, y, b]);
  let T = Math.min(e / t * 100, 100);
  BrowserInfo.safari && r && (T = 100);
  let I = T > 0 ? 8 : 0;
  return jsx("div", {
    className: It,
    onPointerMove: useCallback(() => _(!0), []),
    onPointerOut: useCallback(() => _(!1), []),
    children: jsxs("div", {
      role: "progressbar",
      tabIndex: 0,
      className: tS,
      onPointerDown: E,
      children: [jsx("div", {
        className: xE,
        ref: h
      }), jsx("div", {
        className: CN,
        style: {
          width: `${T}%`
        }
      }), (p || c) && jsx("div", {
        className: Yq,
        style: {
          left: `calc(${T}% - ${I}px)`
        },
        onPointerDown: g,
        role: "button",
        tabIndex: 0
      })]
    })
  });
}
function P({
  shouldShowVideoControls: e,
  togglePlay: t,
  hasEnded: r,
  isPlaying: i,
  isFullscreen: a
}) {
  let s = M;
  r ? s = k : i && (s = j);
  return jsx(D, {
    shouldShowVideoControls: e,
    ButtonIcon: s,
    togglePlay: t,
    isFullscreen: a
  });
}
function D({
  ButtonIcon: e,
  shouldShowVideoControls: t,
  togglePlay: r,
  isFullscreen: a
}) {
  let [s, o] = useState(!1);
  let l = s ? v.BUTTON_BG_FILL_HOVER_OPACITY : v.BUTTON_BG_FILL_OPACITY;
  return jsx("button", {
    className: h()(CY, {
      [ct]: !t
    }),
    onPointerMove: useCallback(() => o(!0), []),
    onPointerOut: useCallback(() => o(!1), []),
    onPointerDown: r,
    children: jsx(e, {
      fillOpacityForBackground: l,
      isFullscreen: a
    })
  });
}
function k({
  fillOpacityForBackground: e,
  isFullscreen: t
}) {
  return jsxs("svg", {
    className: h()(t && J_),
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    children: [jsx("path", {
      d: "M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z",
      fill: v.BUTTON_BG_FILL,
      fillOpacity: e
    }), jsx("path", {
      d: "M34 24C34 18.4772 29.7175 14 24.4348 14C20.5763 14 17.2515 16.3884 15.7391 19.8282V14H14V22.1818H21.8261V20.3636H17.4222C18.7028 17.6696 21.362 15.8182 24.4348 15.8182C28.757 15.8182 32.2609 19.4813 32.2609 24C32.2609 28.5187 28.757 32.1818 24.4348 32.1818C21.362 32.1818 18.7028 30.3304 17.4222 27.6364H15.5216C16.9131 31.3612 20.3792 34 24.4348 34C29.7175 34 34 29.5228 34 24Z",
      fill: v.BUTTON_SHAPE_FILL
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "47",
      height: "47",
      rx: "23.5",
      stroke: v.BUTTON_BG_FILL,
      strokeOpacity: v.BUTTON_STROKE_OPACITY
    })]
  });
}
function M({
  fillOpacityForBackground: e,
  isFullscreen: t
}) {
  return jsxs("svg", {
    className: h()(t && J_),
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    children: [jsxs("g", {
      clipPath: "url(#clip0_403_4259)",
      children: [jsx("rect", {
        width: "48",
        height: "48",
        rx: "24",
        fill: v.BUTTON_BG_FILL,
        fillOpacity: e
      }), jsx("path", {
        d: "M19 34V14L35 24L19 34Z",
        fill: v.BUTTON_SHAPE_FILL
      })]
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "47",
      height: "47",
      rx: "23.5",
      stroke: v.BUTTON_BG_FILL,
      strokeOpacity: v.BUTTON_STROKE_OPACITY
    }), jsx("defs", {
      children: jsx("clipPath", {
        id: "clip0_403_4259",
        children: jsx("rect", {
          width: "48",
          height: "48",
          rx: "24",
          fill: v.BUTTON_BG_FILL
        })
      })
    })]
  });
}
export function $$F1() {
  return jsx(M, {
    fillOpacityForBackground: v.BUTTON_BG_FILL_OPACITY,
    isFullscreen: !1
  });
}
function j({
  fillOpacityForBackground: e,
  isFullscreen: t
}) {
  return jsxs("svg", {
    className: h()(t && J_),
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    children: [jsxs("g", {
      clipPath: "url(#clip0_1_16)",
      children: [jsx("rect", {
        width: "48",
        height: "48",
        rx: "24",
        fill: v.BUTTON_BG_FILL,
        fillOpacity: e
      }), jsx("path", {
        d: "M15 15H21V33H15V15Z",
        fill: v.BUTTON_SHAPE_FILL
      }), jsx("path", {
        d: "M27 15H33V33H27V15Z",
        fill: v.BUTTON_SHAPE_FILL
      })]
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "47",
      height: "47",
      rx: "23.5",
      stroke: v.BUTTON_BG_FILL,
      strokeOpacity: v.BUTTON_STROKE_OPACITY
    }), jsx("defs", {
      children: jsx("clipPath", {
        id: "clip0_1_16",
        children: jsx("rect", {
          width: "48",
          height: "48",
          rx: "24",
          fill: v.BUTTON_BG_FILL
        })
      })
    })]
  });
}
export const A = $$N0;
export const p = $$F1;