import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useState, useLayoutEffect, useCallback, useEffect } from "react";
import { flushSync } from "react-dom";
import { A as _$$A } from "../vendor/723372";
import { i as _$$i } from "../905/97346";
import { useExposedRef } from "../905/581092";
import { identity, toPixels, toPercent } from "../905/893109";
import { defaultComponentAttribute } from "../905/577641";
var n = {};
require.d(n, {
  both: () => y,
  content: () => I,
  dragging: () => S,
  fill: () => v,
  noScroll: () => b,
  pinBottom: () => T,
  pinBottomAnchor: () => k,
  root: () => g,
  scroll: () => f,
  scrollBar: () => x,
  scrollBars: () => E,
  scrolling: () => C,
  specificityHack: () => w,
  x: () => _,
  y: () => A
});
function p(e, t, i) {
  return t <= i ? "none" : e <= 0 ? "start" : e >= t - i ? "end" : "middle";
}
function m(e, t, i) {
  return e <= t ? 0 : Math.max(24, t / e * (t - i));
}
function h(e, t, i, n, r, a, s, o) {
  let l = n / s;
  let d = s - o - (e ? 11 : 0);
  let c = r - s;
  let u = t - i;
  let p = d * l * (a / c);
  let m = null;
  u >= p && u <= p + o * l || (m = (u - o * l / 2) / l / d * c);
  return [(m ?? a) / c, m];
}
var g = "scroll-container__root__2RmsE";
var f = "scroll-container__scroll__8Q3Cb";
var _ = "scroll-container__x__3bIVO";
var A = "scroll-container__y__WrBOK";
var y = "scroll-container__both__D9TzF";
var b = "scroll-container__noScroll__6yNJu";
var v = "scroll-container__fill__qOryJ";
var I = "scroll-container__content__OKxPs";
var E = "scroll-container__scrollBars__qxWAs";
var x = "scroll-container__scrollBar__5Nut9";
var S = "scroll-container__dragging__NUd6f";
var w = "scroll-container__specificity-hack__vgVtm";
var C = "scroll-container__scrolling__XpT9A";
var T = "scroll-container__pinBottom__RQoSX";
var k = "scroll-container__pinBottomAnchor__kxzWs";
export let $$R0 = forwardRef(({
  children: e,
  theme: t = {},
  scroll: i = "y",
  fill: c = !1,
  defaultScrollTop: _,
  defaultScrollLeft: A,
  overscroll: y,
  pinBottom: x,
  onScroll: w,
  ...R
}, P) => {
  let O = useExposedRef(P);
  let D = useRef(null);
  let L = "x" === i || "both" === i;
  let F = "y" === i || "both" === i;
  let M = useRef(0);
  let j = useRef(0);
  let U = useRef(null);
  let B = useRef(0);
  let [V, G] = useState(0);
  let [z, H] = useState(!1);
  let [W, K] = useState(L ? 1 : 0);
  let [Y, q] = useState(F ? 1 : 0);
  let [$, Z] = useState(0);
  let [X, Q] = useState(0);
  let [J, ee] = useState("none");
  let [et, ei] = useState("none");
  let en = "both" === i && !!Y && !!W;
  let er = (!L || !W) && (!F || !Y);
  useLayoutEffect(() => {
    let e = O.current;
    null != _ && (e.scrollTop = _);
    null != A && (e.scrollLeft = A);
    M.current = e.scrollTop;
  }, []);
  let ea = useCallback(() => {
    let e = O.current;
    let t = F ? p(e.scrollTop, e.scrollHeight, e.clientHeight) : "none";
    let i = L ? p(e.scrollLeft, e.scrollWidth, e.clientWidth) : "none";
    let n = "none" !== t && "none" !== i ? 11 : 0;
    F && (q(m(e.scrollHeight, e.clientHeight, n)), ei(t));
    L && (K(m(e.scrollWidth, e.clientWidth, n)), ee(i));
  }, [L, F]);
  useLayoutEffect(ea, []);
  let [es, eo] = _$$i({
    onBeforeDrag(e) {
      let t = e.target;
      return !!t.hasAttribute("data-fpl-orientation") && t;
    },
    onDragStart(e) {
      let t = e.target;
      let i = O.current;
      let n = i.getBoundingClientRect();
      if ("vertical" === t.getAttribute("data-fpl-orientation")) {
        let [t, r] = h(en, e.clientY, n.top, n.height, i.scrollHeight, i.scrollTop, i.clientHeight, Y);
        B.current = t;
        null != r && (i.scrollTop = r);
      } else {
        let [t, r] = h(en, e.clientX, n.left, n.width, i.scrollWidth, i.scrollLeft, i.clientWidth, W);
        B.current = t;
        null != r && (i.scrollLeft = r);
      }
    },
    onDrag(e) {
      var t;
      var i;
      var n;
      var r;
      var a;
      var s;
      var o;
      var l;
      let d = e.target;
      let c = O.current;
      let u = c.getBoundingClientRect();
      "vertical" === d.getAttribute("data-fpl-orientation") ? c.scrollTop = (t = u.height, i = c.scrollHeight, n = c.clientHeight, r = e.delta.y, (B.current + r / (t / n * (n - Y - (en ? 11 : 0)))) * (i - n)) : c.scrollLeft = (a = u.width, s = c.scrollWidth, o = c.clientWidth, l = e.delta.x, (B.current + l / (a / o * (o - W - (en ? 11 : 0)))) * (s - o));
    }
  });
  let el = useRef(null);
  let ed = useCallback(() => {
    clearTimeout(el.current);
    H(!0);
    el.current = window.setTimeout(() => {
      H(!1);
    }, 200);
  }, []);
  let ec = useCallback(e => {
    j.current |= e;
    U.current || (U.current = requestAnimationFrame(() => {
      let e = O.current;
      let t = D.current;
      if (e && t) {
        let {
          clientWidth,
          clientHeight,
          scrollWidth,
          scrollHeight
        } = e;
        let s = () => {
          if (!y) return;
          let i = e.matches(":hover");
          let r = M.current >= t.clientHeight;
          G(Math.max(!i || r || 0 === M.current ? 0 : Math.ceil(M.current) + clientHeight, t.clientHeight));
        };
        let o = en ? 11 : 0;
        let l = F ? m(scrollHeight, clientHeight, o) : 0;
        let d = L ? m(scrollWidth, clientWidth, o) : 0;
        if (1 & j.current && (s(), F && q(l), L && K(d)), 2 & j.current) {
          let {
            scrollTop,
            scrollLeft
          } = e;
          let m = scrollTop < M.current;
          M.current = scrollTop;
          F && (Q(scrollTop / (scrollHeight - clientHeight) * ((clientHeight - o - l) / clientHeight)), ei(p(scrollTop, scrollHeight, clientHeight)));
          L && (Z(scrollLeft / (scrollWidth - clientWidth) * ((clientWidth - o - d) / clientWidth)), ee(p(scrollLeft, scrollWidth, clientWidth)));
          y && m && V > t.clientHeight && s();
        }
      }
      U.current = null;
      j.current = 0;
    }));
  }, [en, F, L, y, V]);
  useEffect(() => {
    let e = new ResizeObserver(() => ec(3));
    e.observe(O.current);
    e.observe(D.current);
    return () => {
      clearTimeout(el.current);
      cancelAnimationFrame(U.current);
      U.current = null;
      e.disconnect();
    };
  }, [ec]);
  useEffect(() => {
    let e = new MutationObserver(() => flushSync(ea));
    e.observe(O.current, {
      subtree: !0,
      childList: !0
    });
    return () => e.disconnect();
  }, [ea]);
  let eu = jsx("div", {
    ref: D,
    role: "none",
    className: _$$A(I, t.content),
    style: t.contentStyle,
    children: e
  });
  let ep = y ? jsx("div", {
    role: "none",
    style: {
      minHeight: V
    },
    children: eu
  }) : eu;
  return jsxs("div", {
    role: "none",
    className: _$$A(g, t.root, {
      [v]: c,
      [C]: z
    }),
    style: t.rootStyle,
    onWheel: ed,
    "data-fpl-scroll-x": J,
    "data-fpl-scroll-y": et,
    children: [jsxs("div", {
      ref: O,
      role: "none",
      ...R,
      ...defaultComponentAttribute,
      className: _$$A(f, t.scroll, n[i], {
        [b]: er,
        [T]: x
      }),
      style: t.scrollStyle,
      onScroll: e => {
        ec(2);
        w?.(e);
      },
      children: [ep, x && jsx("div", {
        "aria-hidden": !0,
        className: k
      })]
    }), jsxs("div", {
      "aria-hidden": !0,
      hidden: er,
      onWheel: ed,
      ...eo({
        className: _$$A(E, {
          [S]: es
        })
      }),
      children: [L && jsx(N, {
        orientation: "horizontal",
        scrollSize: W,
        scrollPercent: $
      }), F && jsx(N, {
        orientation: "vertical",
        scrollSize: Y,
        scrollPercent: X
      })]
    })]
  });
});
function N({
  orientation: e,
  scrollSize: t,
  scrollPercent: i
}) {
  return jsx("div", {
    "data-fpl-orientation": e,
    className: x,
    style: {
      [identity("--scroll-size")]: toPixels(t),
      [identity("--scroll-percent")]: toPercent(i)
    }
  });
}
$$R0.displayName = "ScrollContainer";
export const P = $$R0;