import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useState, useRef, useEffect, useCallback } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { eU, Xr } from "../figma_app/27355";
import o from "classnames";
import { x1 } from "../905/714362";
import { V } from "../figma_app/385855";
import { s as _$$s } from "../cssbuilder/589278";
import { E as _$$E, N as _$$N } from "../905/139531";
import { xn, rR } from "../905/708693";
var l = o;
let $$h1 = eU(new Set());
let $$g0 = forwardRef(({
  thumbnailUrl: e,
  additionalThumbnailUrls: t,
  thumbnailType: i,
  clientMeta: o,
  lastTouchedAt: g,
  showEmptyState: f,
  ..._
}, A) => {
  let [y, b] = useState(0);
  let [v, I] = useState(y);
  let [E, x] = useState(500);
  let S = useRef(void 0);
  let w = useRef(y);
  let C = useRef(null);
  useEffect(() => {
    w.current = y;
    S.current || (S.current = window.setTimeout(() => {
      I(w.current);
      S.current = void 0;
      x(100);
    }, E));
  }, [y]);
  let [T, k] = useState(!1);
  let R = _$$E(e, t, i);
  let N = R.length;
  let P = R[v];
  useEffect(() => {
    T || Promise.all(t.map((e) => _$$N(e))).then(() => {
      k(!0);
    }).catch((e) => {
      x1(_$$e.SEARCH, "[fb-scrubber] Error: Could not pre-load fragment thumbnails", e);
    });
  }, [T, t]);
  let O = useCallback((e) => {
    let t = C.current;
    if (!t) return;
    let i = t.getBoundingClientRect();
    let n = i.width / N;
    b(Math.max(0, Math.min(Math.floor((e.clientX - i.left) / n), N - 1)));
  }, [N]);
  let D = () => {
    clearTimeout(S.current);
    S.current = void 0;
    b(0);
    I(0);
    x(500);
  };
  let L = Xr($$h1);
  let F = "IntersectionObserver" in window;
  let [M, j] = useState(!1);
  return (useEffect(() => {
    if (!F || !T || "function" == typeof A || !A?.current) return;
    let e = A.current;
    let t = new IntersectionObserver(([e]) => {
      j(e.isIntersecting);
    }, {
      threshold: 1
    });
    t.observe(e);
    return () => {
      t.unobserve(e);
    };
  }, [A, t, T, F]), useEffect(() => (M ? L((t) => new Set(t).add(e)) : L((t) => {
    let i = new Set(t);
    i.$$delete(e);
    return i;
  }), () => {
    L((t) => {
      let i = new Set(t);
      i.$$delete(e);
      return i;
    });
  }), [M, e, L]), T) ? jsx("div", {
    className: l()(_$$s.hFull.wFull.$, xn),
    ref: A,
    onMouseMove: O,
    onMouseEnter: () => {
      x(500);
    },
    onMouseLeave: D,
    onDragStart: D,
    children: jsxs("div", {
      ref: C,
      className: _$$s.hFull.wFull.$,
      children: [jsx("div", {
        "data-onboarding-key": M ? "scrubbable-thumbnail" : void 0,
        className: rR
      }), jsx(V, {
        thumbnailUrl: P,
        thumbnailType: i,
        lastTouchedAt: g,
        clientMeta: o,
        draggable: !0,
        ..._
      })]
    })
  }) : jsx("div", {
    onMouseEnter: f ? (e) => {
      e.target.style.transition = "opacity 0.2s ease-in-out";
      e.target.style.opacity = "0.5";
      setTimeout(() => {
        e.target.style.opacity = "1";
      }, 200);
    } : void 0,
    className: _$$s.hFull.wFull.$,
    children: jsx(V, {
      thumbnailUrl: e,
      thumbnailType: i,
      lastTouchedAt: g,
      clientMeta: o,
      ..._
    })
  });
});
export const _ = $$g0;
export const i = $$h1; 
