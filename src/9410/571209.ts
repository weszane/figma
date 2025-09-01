import { useMemo, useState, useCallback, useLayoutEffect } from "react";
import { d4 } from "../vendor/514228";
import { PU } from "../figma_app/343967";
import { r as _$$r } from "../905/249071";
import { md } from "../figma_app/27355";
import { wm } from "../905/19536";
import { parsePxNumber } from "../figma_app/783094";
import { uc } from "../905/763714";
import { qE } from "../figma_app/492908";
import { M } from "../905/512402";
import { lK } from "../figma_app/740163";
import { ui3RulerMargin } from "../figma_app/786175";
var r;
function h(e, t, i, r) {
  let n = [m(e, t, i), m(e, t, r), m(i, r, e), m(i, r, t)];
  return n[0] !== n[1] && n[2] !== n[3] || n.every((e) => "COLLINEAR" === e) && f(e.x, t.x, i.x, r.x) && f(e.y, t.y, i.y, r.y);
}
function m(e, t, i) {
  let r = (t.y - e.y) * (i.x - t.x) - (i.y - t.y) * (t.x - e.x);
  return 0 === r ? "COLLINEAR" : r > 0 ? "CLOCKWISE" : "COUNTERCLOCKWISE";
}
function f(e, t, i, r) {
  let n = Math.min(e, t);
  let a = Math.max(e, t);
  let s = Math.min(i, r);
  return n <= Math.max(i, r) && a >= s;
}
!function (e) {
  e.CLOCKWISE = "CLOCKWISE";
  e.COUNTERCLOCKWISE = "COUNTERCLOCKWISE";
  e.COLLINEAR = "COLLINEAR";
}(r || (r = {}));
var _ = ((e) => (e.TOP = "TOP", e.RIGHT = "RIGHT", e.BOTTOM = "BOTTOM", e.LEFT = "LEFT", e.UNKNOWN = "UNKNONWN", e))(_ || {});
var x = ((e) => (e.TOP_LEFT = "TOP_LEFT", e.TOP = "TOP", e.TOP_RIGHT = "TOP_RIGHT", e.RIGHT = "RIGHT", e.BOTTOM_RIGHT = "BOTTOM_RIGHT", e.BOTTOM = "BOTTOM", e.BOTTOM_LEFT = "BOTTOM_LEFT", e.LEFT = "LEFT", e.OVERLAP = "OVERLAP", e))(x || {});
export function $$C2() {
  return md(uc);
}
export function $$v1() {
  let e = d4(({
    mirror: {
      appModel: e
    }
  }) => e.showUi);
  let t = 0;
  lK() && e && (t += parsePxNumber(ui3RulerMargin));
  return useMemo(() => ({
    left: t,
    right: 0
  }), [t, 0]);
}
export function $$E0(e, t = 20) {
  let i = function (e, t) {
    let [i, r] = useState([]);
    let a = PU();
    let l = wm(() => t ? a.filter((e) => e !== t && !e.contains(t) && !t.contains(e)) : a, [a, t]);
    let c = useCallback((t) => {
      r(t.map((t) => {
        let {
          x,
          y,
          width,
          height
        } = t.getBoundingClientRect();
        return 0 === width || 0 === height ? _$$r.fromOriginAndSize(x, y, width, height) : T(x, y, width, height, e);
      }));
    }, [r, e]);
    useLayoutEffect(() => {
      c(l);
    }, [c, l]);
    useLayoutEffect(() => {
      let e = () => {
        c(l);
      };
      window.addEventListener("resize", e);
      return () => window.removeEventListener("resize", e);
    }, [c, l]);
    let u = useCallback((t) => {
      let i = t.map((t) => {
        let i = l.findIndex((e) => e === t.target);
        if (-1 !== i) {
          let {
            x,
            y,
            width,
            height
          } = t.target.getBoundingClientRect();
          return [i, 0 === width || 0 === height ? _$$r.fromOriginAndSize(x, y, width, height) : T(x, y, width, height, e)];
        }
      }).filter((e) => !!e);
      r((e) => {
        let t = [...e];
        i.forEach(([e, i]) => {
          t[e] = i;
        });
        return t;
      });
    }, [l, e]);
    useLayoutEffect(() => {
      let e = new ResizeObserver(u);
      l.forEach((t) => {
        e.observe(t);
      });
      return () => e.disconnect();
    }, [l, u]);
    useLayoutEffect(() => {
      if (!("IntersectionObserver" in window)) return () => {};
      let e = new IntersectionObserver((e) => {
        u(e);
      }, {
        root: null,
        rootMargin: "0px",
        threshold: 1
      });
      l.forEach((t) => {
        e.observe(t);
      });
      return () => e.disconnect();
    }, [l, u]);
    return useMemo(() => i.filter((e) => !e.isEmpty()), [i]);
  }(t, e.current ?? void 0);
  return useCallback((e, r, n) => function (e, t, i, r) {
    let n = function (e, t) {
      if (t.containsIncludingBoundary(e)) return e;
      let i = e.width() <= t.width() ? qE(e.left(), t.left(), t.right() - e.width()) : e.left();
      let r = e.height() <= t.height() ? qE(e.top(), t.top(), t.bottom() - e.height()) : e.top();
      return new _$$r(new M(i, r), e.size);
    }(e, t);
    let a = (() => {
      if (r) return r;
      let i = _$$r.fromCenterSize(t.center(), e.size);
      return [i.left(), i.top()];
    })();
    return [...i, ...i].reduce((e, t) => e.hasIntersectionWith(t) ? function ({
      target: e,
      obstacle: t,
      targetPreviousXY: i
    }) {
      let [r, n] = i;
      let a = new _$$r(new M(r, n), e.size);
      switch (function (e, t, i) {
        switch (function (e, t) {
          let i = e.right() <= t.left();
          let r = e.left() >= t.right();
          let n = e.bottom() <= t.top();
          let a = e.top() >= t.bottom();
          if (i && n) return "TOP_LEFT";
          if (r && n) return "TOP_RIGHT";
          if (r && a) return "BOTTOM_RIGHT";
          if (i && a) return "BOTTOM_LEFT";
          if (n) return "TOP";
          if (r) return "RIGHT";
          if (a) return "BOTTOM";else if (i) return "LEFT";else return "OVERLAP";
        }(t, i)) {
          case "TOP":
            return "TOP";
          case "RIGHT":
            return "RIGHT";
          case "BOTTOM":
            return "BOTTOM";
          case "LEFT":
            return "LEFT";
          case "TOP_LEFT":
            return h(t.bottomRight(), e.bottomRight(), i.topLeft(), i.topRight()) ? "TOP" : "LEFT";
          case "TOP_RIGHT":
            return h(t.bottomLeft(), e.bottomLeft(), i.topLeft(), i.topRight()) ? "TOP" : "RIGHT";
          case "BOTTOM_RIGHT":
            return h(t.topLeft(), e.topLeft(), i.bottomLeft(), i.bottomRight()) ? "BOTTOM" : "RIGHT";
          case "BOTTOM_LEFT":
            return h(t.topRight(), e.topRight(), i.bottomLeft(), i.bottomRight()) ? "BOTTOM" : "LEFT";
          default:
            return "UNKNONWN";
        }
      }(e, a, t)) {
        case "TOP":
          return new _$$r(new M(e.left(), t.top() - e.height()), e.size);
        case "BOTTOM":
          return new _$$r(new M(e.left(), t.bottom()), e.size);
        case "LEFT":
          return new _$$r(new M(t.left() - e.width(), e.top()), e.size);
        case "RIGHT":
          return new _$$r(new M(t.right(), e.top()), e.size);
        default:
          return e;
      }
    }({
      target: e,
      obstacle: t,
      targetPreviousXY: a
    }) : e, n);
  }(e, r.expand(-t), i, n), [i, t]);
}
function T(e, t, i, r, n) {
  return _$$r.fromOriginAndSize(e - n, t - n, i + 2 * n, r + 2 * n);
}
export const FQ = $$E0;
export const LO = $$v1;
export const Oo = $$C2;