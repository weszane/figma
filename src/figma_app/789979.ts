import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useCallback, useEffect } from "react";
import { parsePxNumber } from "../figma_app/783094";
import { rf, aH, v_, Pt, o6, cZ } from "../figma_app/806412";
import { OP, uF } from "../figma_app/792958";
import { LdP } from "../figma_app/27776";
import { In, Mo, Wg, N2, Mq, pg, my, Do } from "../905/178043";
let c = parsePxNumber(LdP);
export function $$u1({
  resizeTo: e,
  getCurrentContainerBounds: t,
  isResizing: r,
  setIsResizing: n,
  setResizeDirections: a,
  onResizeEnd: l,
  lockAspectRatio: d,
  recordingKey: u,
  hidden: p,
  mirrorResizeHorizontally: _ = !1
}) {
  let m = useRef();
  let g = useRef();
  let f = useRef([]);
  let E = useRef({
    x: 0,
    y: 0
  });
  let [y, b] = useState(!1);
  let T = useCallback(() => {
    b(!1);
    n(void 0);
    a([]);
    f.current = [];
    l?.();
  }, [b, n, l, a]);
  let I = useCallback(({
    x: t,
    y: n
  }, i, a) => {
    if (!r || !g.current || !e) {
      b(!1);
      return;
    }
    if (r && 0 === a) {
      T();
      return;
    }
    let s = d || i;
    let l = {
      x: t - E.current.x,
      y: n - E.current.y
    };
    l.y = Math.max(l.y, c);
    let {
      left,
      top,
      right,
      bottom
    } = h(l, g.current, r, s, _);
    e({
      [OP.TOP]: top !== g.current.top,
      [OP.BOTTOM]: bottom !== g.current.bottom,
      [OP.LEFT]: left !== g.current.left,
      [OP.RIGHT]: right !== g.current.right
    }, {
      left,
      top,
      right,
      bottom,
      lockAspectRatio: s
    });
  }, [r, d, _, e, T]);
  let S = useRef(T);
  S.current = T;
  useEffect(() => () => {
    r && S.current();
  }, [r]);
  let v = rf(u, "mouseup", T);
  let A = rf(u, "mousemove", useCallback((e) => {
    if (p) return aH;
    e.stopPropagation();
    e.preventDefault();
    let t = {
      x: e.clientX,
      y: e.clientY
    };
    if (m.current = t, r) I(t, e.shiftKey, e.buttons);else {
      let e = Object.create(null);
      f.current.forEach((t) => {
        e[t] = !0;
      });
      a(f.current);
      n(e);
    }
  }, [p, r, I, n, a]), {
    recordMetadata: (e) => ({
      clientX: e.clientX,
      clientY: e.clientY
    }),
    playbackMetadata: (e) => ({
      clientX: e.clientX,
      clientY: e.clientY
    })
  });
  let x = v_(u, "keydown", useCallback((e) => {
    e.shiftKey && m.current && I(m.current, !0);
  }, [I]));
  let N = v_(u, "keyup", useCallback((e) => {
    m.current && I(m.current, e.shiftKey);
  }, [I]));
  useEffect(() => {
    if (y) {
      document.addEventListener("mousemove", A);
      document.addEventListener("mouseup", v);
      document.addEventListener("keydown", x);
      document.addEventListener("keyup", N);
      return () => {
        document.removeEventListener("mousemove", A);
        document.removeEventListener("mouseup", v);
        document.removeEventListener("keydown", x);
        document.removeEventListener("keyup", N);
      };
    }
  }, [y, A, v, x, N]);
  return {
    startResizing: useCallback((e, r) => {
      f.current = e;
      let n = t();
      g.current = n;
      let i = {
        x: e.includes(OP.LEFT) ? n.left : e.includes(OP.RIGHT) ? n.right : r.x,
        y: e.includes(OP.TOP) ? n.top : e.includes(OP.BOTTOM) ? n.bottom : r.y
      };
      E.current = {
        x: r.x - i.x,
        y: r.y - i.y
      };
      b(!0);
    }, [t, b]),
    stopResizing: T
  };
}
export function $$p0({
  allowedResizeDirections: e,
  onEdgeDoubleClick: t,
  resizeTo: r,
  onResizeEnd: i,
  getCurrentContainerBounds: a,
  lockAspectRatio: l,
  isResizing: d,
  setIsResizing: c,
  setResizeDirections: p,
  hidden: h,
  recordingKey: m,
  mirrorResizeHorizontally: g = !1
}) {
  let {
    startResizing
  } = $$u1({
    resizeTo: r,
    getCurrentContainerBounds: a,
    onResizeEnd: i,
    isResizing: d,
    setIsResizing: c,
    setResizeDirections: p,
    lockAspectRatio: l,
    hidden: h,
    recordingKey: m,
    mirrorResizeHorizontally: g
  });
  return h ? null : jsxs("div", {
    children: [Object.values(OP).map((r, i) => e.includes(r) ? jsx(_, {
      directions: [r],
      startResizing,
      onDoubleClick: t,
      recordingKey: Pt(m, r)
    }, i) : null), [OP.TOP, OP.BOTTOM].map((r) => [OP.LEFT, OP.RIGHT].map((i, a) => e.includes(r) && e.includes(i) ? jsx(_, {
      directions: [r, i],
      startResizing,
      onDoubleClick: t,
      recordingKey: Pt(m, r, i)
    }, a) : null))]
  });
}
class _ extends o6 {
  constructor() {
    super(...arguments);
    this.onMouseDown = (e) => cZ(this, "mousedown", (t) => {
      t.stopPropagation();
      t.preventDefault();
      this.props.startResizing(e, {
        x: t.clientX,
        y: t.clientY
      });
    });
    this.onDoubleClick = cZ(this, "dblclick", () => {
      if (!this.props.onDoubleClick) return aH;
      this.props.onDoubleClick?.();
    });
    this.directionsToStyle = (e) => {
      if (1 === e.length) switch (e[0]) {
        case OP.TOP:
          return In;
        case OP.BOTTOM:
          return Mo;
        case OP.LEFT:
          return Wg;
        case OP.RIGHT:
          return N2;
      } else if (2 === e.length) {
        if (e[0] === OP.TOP && e[1] === OP.RIGHT) return Mq;
        if (e[0] === OP.TOP && e[1] === OP.LEFT) return pg;
        if (e[0] === OP.BOTTOM && e[1] === OP.RIGHT) return my;
        if (e[0] === OP.BOTTOM && e[1] === OP.LEFT) return Do;
      }
    };
  }
  render() {
    return jsx("div", {
      className: this.directionsToStyle(this.props.directions),
      onMouseDown: this.onMouseDown(this.props.directions),
      onDoubleClick: this.onDoubleClick
    });
  }
}
let h = (e, t, r, n, i) => {
  let {
    x,
    y
  } = e;
  let l = r[OP.LEFT] ? x : t.left;
  let d = r[OP.RIGHT] ? x : t.right;
  let c = r[OP.TOP] ? y : t.top;
  let u = r[OP.BOTTOM] ? y : t.bottom;
  if (i) {
    let e = (t.left + t.right) / 2;
    r[OP.LEFT] ? d = e + (e - x) : r[OP.RIGHT] && (l = e - (x - e));
  }
  if (n) {
    let e = (t.right - t.left) / (t.bottom - t.top - uF);
    let n = r[OP.LEFT] ? t.left - x : x - t.right;
    let i = r[OP.TOP] ? t.top - y : y - t.bottom;
    let p = r[OP.LEFT] || r[OP.RIGHT];
    let _ = r[OP.TOP] || r[OP.BOTTOM];
    if (p && _) {
      let a;
      let s;
      let p = n / e;
      p < i ? (a = n, s = p, r[OP.TOP] ? c = t.top - s : u = t.bottom + s) : (a = i * e, s = i, r[OP.LEFT] ? l = t.left - a : d = t.right + a);
    } else if (p) {
      let n = r[OP.LEFT] ? t.left - x : x - t.right;
      u = t.bottom + n / e;
    } else if (_) {
      let n = r[OP.TOP] ? t.top - y : y - t.bottom;
      d = t.right + n * e;
    }
  }
  return {
    left: l,
    top: c,
    right: d,
    bottom: u
  };
};
export const K = $$p0;
export const Q = $$u1;