import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from "react";
import { clamp } from "../figma_app/492908";
import { noop } from 'lodash-es';
import { LoadingSpinner } from "../905/443820";
import { ButtonPrimitive } from "../905/632989";
import { p as _$$p } from "../905/673591";
import { O as _$$O } from "../905/301080";
import { P } from "../905/547523";
import { L as _$$L } from "../905/473569";
import h from "classnames";
import { browserFeatures } from "../905/508367";
import { trackFileEventWithUser } from "../figma_app/901889";
import { M as _$$M } from "../figma_app/749682";
import { BrowserInfo } from "../figma_app/778880";
import { _d } from "../figma_app/795674";
import { getI18nString } from "../905/303541";
import { jsFullscreenWheelEventPassthrough, jsFullscreenPreventEventCapture } from "../figma_app/8833";
import { KindEnum } from "../905/129884";
import { vx, jJ, bb, _v, YC, TN, yG, zR, TJ, z9, BT, qD, sf, Ct, It, tS, xE, CN, Yq, CY, ct, gJ } from "../9410/269644";
var m = h;
let T = {
  BUTTON_SHAPE_FILL: "#FFFFFF",
  BUTTON_BG_FILL: "#000000",
  BUTTON_STROKE_OPACITY: .2,
  BUTTON_BG_FILL_OPACITY: .7,
  BUTTON_BG_FILL_HOVER_OPACITY: .9
};
export function $$w0(e) {
  if (null == e || Number.isNaN(e)) return "";
  let {
    seconds,
    minutes
  } = _d(e);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}
export function $$S2(e) {
  return !!e && !e.ended && !e.paused && e.currentTime > 0 && e.readyState > 2;
}
export function $$j1({
  videoElement: e,
  videoContainerElement: t,
  isLoading: i,
  isMaximized: a,
  setIsMaximized: l,
  isVideoHovered: d,
  setIsVideoHovered: c,
  didAutoplayOnSelection: u,
  mediaHash: p,
  hasEnded: h,
  setHasEnded: y,
  toggleVideoPlayback: b,
  shouldHidePlaybackButton: v,
  shouldHideControlBar: T,
  isVideoNodeHovered: j,
  pointerDownOnVideo: N,
  setVideoControls: L,
  shouldHideFullscreenButton: R = !1,
  onSeekStart: D = noop,
  onSeekEnd: M = noop,
  onMute: P = noop,
  onUnmute: F = noop
}) {
  let [B, U] = useState(0);
  let G = useRef(!1);
  let K = useRef(u);
  let [H, z] = useState(null);
  let [V, W] = useState(!1);
  let [Y, J] = useState(!1);
  let q = trackFileEventWithUser();
  let [X, Z] = _$$M();
  let [Q, $] = _$$M();
  let ee = T || !e;
  let et = useRef(!1);
  let ei = a && (d || $);
  let er = H || e?.currentTime;
  let en = e?.duration;
  let ea = $$S2(e);
  let es = useRef(void 0);
  let eo = useRef(void 0);
  useEffect(() => {
    let e = (BrowserInfo.isIpad ? N : j) || Z || ei || !ea || h || et.current;
    J(e);
    clearTimeout(es?.current);
    e && (es.current = setTimeout(() => {
      h || !ea || Z || et.current || (J(!1), c(!1), L(!1, !1));
    }, 3e3));
  }, [h, ei, ea, j, Z, c, L, N]);
  let el = useCallback(() => {
    U(e => e + 1);
  }, []);
  useEffect(() => {
    if (e && t) {
      e.addEventListener("playing", s);
      e.addEventListener("canplay", i);
      e.addEventListener("ended", c);
      e.addEventListener("timeupdate", i);
      e.addEventListener("seeking", o);
      e.addEventListener("seeked", n);
      e.addEventListener("stalled", r);
      t.addEventListener(browserFeatures.fullscreenChangeEventName, d);
      return () => {
        e?.removeEventListener("playing", s);
        e?.removeEventListener("canplay", i);
        e?.removeEventListener("ended", c);
        e?.removeEventListener("timeupdate", i);
        e?.removeEventListener("seeking", o);
        e?.removeEventListener("seeked", n);
        e?.removeEventListener("stalled", r);
        t?.removeEventListener(browserFeatures.fullscreenChangeEventName, d);
      };
    }
    function i() {
      el();
    }
    function r() {
      et.current = !1;
    }
    function n() {
      et.current = !1;
      y(!1);
    }
    function s() {
      y(!1);
      el();
    }
    function o() {
      et.current = !0;
    }
    function d() {
      l(!a);
    }
    function c() {
      V || y(!0);
      el();
    }
  }, [a, V, el, y, l, t, e]);
  let ed = useCallback(() => {
    !1 === K.current && (K.current = !0, q("figjam_video_started_playing", {
      mediaHash: p
    }));
    b(e, h);
    el();
  }, [h, p, el, q, e, b]);
  let ec = useCallback(() => {
    e && (G.current = $$S2(e) || h, e.pause(), D());
  }, [h, D, e]);
  let eu = useCallback(() => {
    e && (G.current && e.play(), eo.current && (e.currentTime = eo.current), M(e.currentTime), z(null), eo.current = void 0);
  }, [e, M]);
  let ep = useCallback(t => {
    if (e) {
      if (et.current) {
        eo.current = t;
        return;
      }
      e.currentTime = t;
    }
  }, [e]);
  let eh = jsx(O, {
    togglePlay: ed,
    hasEnded: h,
    isPlaying: ea,
    shouldShowVideoControls: Y,
    isMaximized: a
  });
  return i ? jsx("div", {
    className: m()(vx, jJ, bb),
    children: jsx(LoadingSpinner, {
      size: "lg"
    })
  }) : BrowserInfo.isIpad && a ? null : ee ? Y && !v ? eh : null : jsxs(Fragment, {
    children: [H ? null : eh, jsxs("div", {
      className: m()(jsFullscreenWheelEventPassthrough, _v, !Y && YC),
      ref: Q,
      children: [jsxs("div", {
        className: TN,
        children: [$$w0(er), " / ", $$w0(en)]
      }), jsx(A, {
        currentTime: er || 0,
        totalTime: en || 0,
        onScrubStart: ec,
        onScrub: z,
        onScrubEnd: eu,
        onVideoPositionUpdated: ep,
        hasEnded: h,
        isScrubbing: V,
        setIsScrubbing: W
      }), jsxs("div", {
        className: yG,
        children: [!R && jsx(I, {
          isMaximized: a,
          toggleFullscreen: function () {
            a || document.fullscreenElement ? browserFeatures.exitFullscreenFunc() : BrowserInfo.isIpad ? e && e.webkitEnterFullscreen && e.webkitEnterFullscreen() : t && browserFeatures.requestFullscreenFunc.call(t);
          }
        }), jsx(k, {
          rerender: el,
          videoElement: e,
          volumeHoverRef: X,
          onMute: P,
          onUnmute: F
        })]
      })]
    })]
  });
}
function I({
  isMaximized: e,
  toggleFullscreen: t
}) {
  let i = zR;
  let n = e ? jsx(_$$p, {
    className: i
  }) : jsx(_$$O, {
    className: i
  });
  return jsx("div", {
    children: jsx(ButtonPrimitive, {
      onClick: t,
      className: TJ,
      htmlAttributes: {
        "data-tooltip": e ? getI18nString("whiteboard.video.minimize_tooltip") : getI18nString("whiteboard.video.fullscreen_tooltip"),
        "data-tooltip-type": KindEnum.TEXT
      },
      children: jsx("span", {
        "aria-hidden": !0,
        children: n
      })
    })
  });
}
function k({
  rerender: e,
  videoElement: t,
  volumeHoverRef: i,
  onMute: a,
  onUnmute: s
}) {
  let [o, d] = useState(!1);
  let c = useRef(1);
  let [h, f] = useState(t?.volume || 1);
  let g = t?.muted ?? !1;
  let _ = o && !BrowserInfo.isIpad;
  let y = useCallback(() => {
    t && (t.muted ? (t.muted = !1, t.volume = c.current, f(c.current), s()) : (t.volume > 0 && (c.current = t.volume), t.muted = !0, f(0), a()), e());
  }, [e, t, a, s]);
  let C = zR;
  let T = g ? jsx(P, {
    className: C
  }) : jsx(_$$L, {
    className: C
  });
  return jsxs("div", {
    ref: i,
    children: [jsx(ButtonPrimitive, {
      onClick: y,
      className: m()(TJ, z9, _ && BT),
      htmlAttributes: {
        onMouseEnter: () => d(!0),
        onMouseLeave: () => d(!1),
        "data-tooltip": g ? getI18nString("whiteboard.video.unmute_tooltip") : getI18nString("whiteboard.video.mute_tooltip"),
        "data-tooltip-type": KindEnum.TEXT
      },
      children: jsx("span", {
        "aria-hidden": !0,
        children: T
      })
    }), _ ? jsx(N, {
      volume: g ? 0 : h,
      handleChange: e => {
        let i = e.target.valueAsNumber;
        t && (t.volume = i, t.muted = 0 === i);
        f(i);
      },
      setIsHovered: d
    }) : null]
  });
}
function N({
  handleChange: e,
  setIsHovered: t,
  volume: i
}) {
  let a = 100 * i;
  let s = useRef(null);
  return jsx("div", {
    onMouseEnter: () => t(!0),
    onMouseLeave: () => t(!1),
    className: qD,
    children: jsx("div", {
      className: sf,
      children: jsx("input", {
        ref: s,
        className: m()(Ct, jsFullscreenPreventEventCapture, jsFullscreenWheelEventPassthrough),
        max: 1,
        min: 0,
        onChange: e,
        onKeyDown: function (e) {
          e?.key === "Escape" && t(!1);
        },
        onMouseUp: function () {
          s.current instanceof HTMLInputElement && s.current.blur();
        },
        step: .02,
        style: {
          background: `linear-gradient(to right,var(--active-slider-color) 0%,var(--active-slider-color) ${a}%,var(--inactive-slider-color) ${a}%,var(--inactive-slider-color) 100%)`
        },
        type: "range",
        value: i
      })
    })
  });
}
function A({
  currentTime: e,
  totalTime: t,
  hasEnded: i,
  onVideoPositionUpdated: s,
  onScrubStart: o,
  onScrub: l,
  onScrubEnd: d,
  isScrubbing: c,
  setIsScrubbing: u
}) {
  let [p, h] = useState(!1);
  let m = useRef(null);
  let f = useRef(null);
  useEffect(() => {
    if (c && f.current) {
      document.addEventListener("pointermove", e);
      document.addEventListener("pointerup", i);
      return () => {
        document.removeEventListener("pointermove", e);
        document.removeEventListener("pointerup", i);
      };
    }
    function e(e) {
      if (!f.current) return;
      let i = e.clientX;
      let {
        minX,
        maxX
      } = f.current;
      let o = clamp(0, (i - minX) / (maxX - minX) * t, t);
      f.current.newTime = o;
      l(o);
      s(f.current.newTime);
    }
    function i() {
      f.current && (s(f.current.newTime), u(!1), d(), f.current = null, document.activeElement instanceof HTMLElement && document.activeElement.blur());
    }
  }, [c, l, d, s, u, t]);
  let g = Math.min(e / t * 100, 100);
  let _ = g > 0 ? 8 : 0;
  BrowserInfo.safari && i && (g = 100);
  return jsx("div", {
    className: It,
    onPointerEnter: () => h(!0),
    onPointerLeave: () => h(!1),
    children: jsxs("div", {
      role: "progressbar",
      tabIndex: 0,
      className: tS,
      onPointerDown: e => {
        if (!m.current) return;
        e.stopPropagation();
        u(!0);
        o();
        let i = m.current.getBoundingClientRect();
        let r = i.x;
        let n = i.x + i.width;
        let l = e.clientX;
        let d = clamp(0, (l - r) / (n - r) * t, t);
        s(d);
        f.current = {
          minX: r,
          maxX: n,
          originX: e.clientX,
          newTime: d
        };
      },
      children: [jsx("div", {
        className: xE,
        ref: m
      }), jsx("div", {
        className: CN,
        style: {
          width: `${g}%`
        }
      }), (p || c) && jsx("div", {
        className: Yq,
        style: {
          left: `calc(${g}% - ${_}px)`
        },
        onPointerDown: t => {
          if (!m.current) return;
          t.stopPropagation();
          u(!0);
          o();
          let i = m.current.getBoundingClientRect();
          f.current = {
            minX: i.x,
            maxX: i.x + i.width,
            originX: t.clientX,
            newTime: e
          };
        },
        role: "button",
        tabIndex: 0
      })]
    })
  });
}
function O({
  shouldShowVideoControls: e,
  togglePlay: t,
  hasEnded: i,
  isPlaying: n,
  isMaximized: a
}) {
  let [s, o] = _$$M();
  let l = o ? T.BUTTON_BG_FILL_HOVER_OPACITY : T.BUTTON_BG_FILL_OPACITY;
  return jsx("button", {
    ref: s,
    className: m()(jsFullscreenWheelEventPassthrough, CY, !e && ct),
    onPointerDown: function () {
      document.activeElement instanceof HTMLElement && document.activeElement.blur();
      t();
    },
    children: jsx(i ? L : n ? D : R, {
      fillOpacityForBackground: l,
      isMaximized: a
    })
  });
}
function L({
  fillOpacityForBackground: e,
  isMaximized: t
}) {
  return jsxs("svg", {
    className: m()(t && gJ),
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    children: [jsx("path", {
      d: "M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z",
      fill: T.BUTTON_BG_FILL,
      fillOpacity: e
    }), jsx("path", {
      d: "M34 24C34 18.4772 29.7175 14 24.4348 14C20.5763 14 17.2515 16.3884 15.7391 19.8282V14H14V22.1818H21.8261V20.3636H17.4222C18.7028 17.6696 21.362 15.8182 24.4348 15.8182C28.757 15.8182 32.2609 19.4813 32.2609 24C32.2609 28.5187 28.757 32.1818 24.4348 32.1818C21.362 32.1818 18.7028 30.3304 17.4222 27.6364H15.5216C16.9131 31.3612 20.3792 34 24.4348 34C29.7175 34 34 29.5228 34 24Z",
      fill: T.BUTTON_SHAPE_FILL
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "47",
      height: "47",
      rx: "23.5",
      stroke: T.BUTTON_BG_FILL,
      strokeOpacity: T.BUTTON_STROKE_OPACITY
    })]
  });
}
function R({
  fillOpacityForBackground: e,
  isMaximized: t
}) {
  return jsxs("svg", {
    className: m()(t && gJ),
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
        fill: T.BUTTON_BG_FILL,
        fillOpacity: e
      }), jsx("path", {
        d: "M19 34V14L35 24L19 34Z",
        fill: T.BUTTON_SHAPE_FILL
      })]
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "47",
      height: "47",
      rx: "23.5",
      stroke: T.BUTTON_BG_FILL,
      strokeOpacity: T.BUTTON_STROKE_OPACITY
    }), jsx("defs", {
      children: jsx("clipPath", {
        id: "clip0_403_4259",
        children: jsx("rect", {
          width: "48",
          height: "48",
          rx: "24",
          fill: T.BUTTON_BG_FILL
        })
      })
    })]
  });
}
function D({
  fillOpacityForBackground: e,
  isMaximized: t
}) {
  return jsxs("svg", {
    className: m()(t && gJ),
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
        fill: T.BUTTON_BG_FILL,
        fillOpacity: e
      }), jsx("path", {
        d: "M15 15H21V33H15V15Z",
        fill: T.BUTTON_SHAPE_FILL
      }), jsx("path", {
        d: "M27 15H33V33H27V15Z",
        fill: T.BUTTON_SHAPE_FILL
      })]
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "47",
      height: "47",
      rx: "23.5",
      stroke: T.BUTTON_BG_FILL,
      strokeOpacity: T.BUTTON_STROKE_OPACITY
    }), jsx("defs", {
      children: jsx("clipPath", {
        id: "clip0_1_16",
        children: jsx("rect", {
          width: "48",
          height: "48",
          rx: "24",
          fill: T.BUTTON_BG_FILL
        })
      })
    })]
  });
}
export const Az = $$w0;
export const _L = $$j1;
export const sQ = $$S2;