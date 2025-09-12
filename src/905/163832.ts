import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, useContext, forwardRef, useState, useRef, useLayoutEffect, useEffect, useImperativeHandle, useCallback, useMemo } from "react";
import { DialogContext } from "../905/749786";
import { b as _$$b } from "../905/799737";
import { m as _$$m } from "../905/494625";
import { i as _$$i } from "../905/97346";
import { useRecording, useIsRecording } from "../905/959312";
import { bq } from "../905/117474";
import { F as _$$F } from "../905/768014";
import { i as _$$i2 } from "../905/718764";
import { Vg } from "../905/893109";
import { addEventlistenerWithCleanup, preventAndStopEvent } from "../905/955878";
import { qE, KY } from "../905/875826";
import { LI, t6, LC, f2, TX, Io, WQ, gU, VN, Vu, Re, BB, qE as _$$qE } from "../905/268491";
import { Kg, DX, PU, U1 } from "../figma_app/343967";
import { w as _$$w } from "../905/937416";
import { useExposedRef } from "../905/581092";
import { R as _$$R } from "../905/987614";
import { mergeObjects } from "../905/36803";
var n = {};
require.d(n, {
  bottom: () => M,
  bottomLeft: () => z,
  bottomRight: () => G,
  left: () => j,
  resizable: () => L,
  right: () => U,
  top: () => F,
  topLeft: () => B,
  topRight: () => V
});
let y = ["top", "right", "bottom", "left", "topLeft", "topRight", "bottomRight", "bottomLeft"];
let b = ["bottom", "right", "bottomRight"];
let v = {
  minWidth: 240,
  minHeight: 128,
  maxWidth: "100vw",
  maxHeight: "80vh"
};
let w = 'dialog,[role="dialog"]';
function C(e, t) {
  let i = e.getBoundingClientRect();
  let n = P(window);
  let r = i.width > n.x ? 0 : qE(t.x, 0, n.x - i.width);
  let a = t.y;
  a = i.height > n.y - 16 ? 0 : i.height === n.y - 16 ? qE(t.y, 0, 8) : qE(t.y, 0, n.y - i.height - 16);
  let s = LI(t6(r, a));
  return LC(t, s) ? t : s;
}
function T(e, t, i) {
  let n = e.getBoundingClientRect();
  let r = P(window);
  let a = LI(t6(qE(t.x, 40 - n.width, r.x - 40), qE(t.y, i ? 0 : 40 - n.height, r.y - 40)));
  return LC(t, a) ? t : a;
}
function k(e) {
  let {
    innerWidth,
    innerHeight
  } = window;
  let {
    minWidth,
    maxWidth,
    minHeight,
    maxHeight
  } = mergeObjects(v, e);
  return {
    minWidth: R(minWidth, innerWidth),
    maxWidth: R(maxWidth, innerWidth),
    minHeight: R(minHeight, innerHeight),
    maxHeight: R(maxHeight, innerHeight)
  };
}
function R(e, t) {
  return "string" == typeof e ? Math.floor(parseFloat(e) / 100 * t) : e;
}
function N(e) {
  return !!_$$R(e.target, e => e.hasAttribute("data-fpl-header") || e.hasAttribute("data-fpl-close"), e.currentTarget);
}
function P(e) {
  return e === window ? t6(e.innerWidth, e.innerHeight) : t6(e.clientWidth, e.clientHeight);
}
function O(e, t, i, n) {
  return {
    x: e,
    y: t,
    top: t,
    left: e,
    right: e + i,
    bottom: t + n,
    width: i,
    height: n
  };
}
let D = 0;
var L = "window-primitive__resizable__VdDxG";
var F = "window-primitive__top__Y8xPK";
var M = "window-primitive__bottom__e1lS-";
var j = "window-primitive__left__J0ctB";
var U = "window-primitive__right__0DfwX";
var B = "window-primitive__topLeft__S7zYw";
var V = "window-primitive__topRight__pTYva";
var G = "window-primitive__bottomRight__WtCYr";
var z = "window-primitive__bottomLeft__xyrRa";
let H = createContext(null);
export function $$W2() {
  return null !== useContext(H);
}
export let $$K1 = forwardRef((e, t) => jsx(Kg, {
  children: jsx(Y, {
    ...e,
    ref: t
  })
}));
$$K1.displayName = "WindowPrimitive.Root";
let Y = forwardRef(({
  className: e,
  style: t,
  defaultPosition: i = f2,
  onClose: n,
  draggable: h,
  onTransform: f,
  manager: y,
  recordingKey: b,
  htmlAttributes: {
    onFocus: v,
    ...x
  } = {},
  ...S
}, k) => {
  let {
    pos,
    setPos,
    ref,
    positionStyle,
    getDragProps,
    hasMoved,
    setHasMoved
  } = function ({
    defaultPosition: e,
    onDrag: t,
    hidden: i,
    headerOnly: n,
    refIn: r
  }) {
    let s = useExposedRef(r);
    let [o, l] = useState(null);
    let [c, u] = useState(!1);
    let p = function () {
      let e = useRef([]);
      let t = function () {
        let e = useRef(null);
        return {
          compute(t) {
            let i = e.current;
            let n = TX(t);
            let r = performance.now() / 1e3;
            return (e.current = {
              pos: n,
              ts: r
            }, i) ? Io(i.pos, n) / (r - i.ts) : 0;
          },
          reset() {
            e.current = null;
          }
        };
      }();
      let i = DX();
      return {
        start(t) {
          for (let n of (e.current = function (e) {
            let {
              x,
              y,
              width,
              height
            } = e;
            let a = O(x, y, width, 0);
            return [a, O(x + width, y, 0, height), O(x, y + height, width, 0), O(x, y, 0, height)];
          }(i.getBoundingClientRect()), PU())) n !== t.currentTarget && e.current.push(n.getBoundingClientRect());
        },
        check(i, n, r) {
          let a = t.compute(i);
          if (!a || a > 150) return n;
          let [s, o] = function (e, t, i) {
            let n = e.x - t.left;
            let r = e.y - t.top;
            let a = {
              top: e.y,
              left: e.x,
              right: e.x + t.width,
              bottom: e.y + t.height
            };
            let s = null;
            let o = null;
            let l = null;
            for (let e of i) if (!(a.top > e.bottom) && !(a.bottom < e.top) && (n > 0 ? t.right <= e.left && a.right >= e.left ? s = e.left - t.width : t.left <= e.right && a.left >= e.right && (s = e.right) : t.left >= e.right && a.left <= e.right ? s = e.right : t.right >= e.left && a.right <= e.left && (s = e.left - t.width), null != s)) {
              l = e;
              break;
            }
            for (let e of i) if (!(a.left > e.right) && !(a.right < e.left) && (r > 0 ? t.bottom <= e.top && a.bottom >= e.top ? o = e.top - t.height : t.top <= e.bottom && a.top >= e.bottom && (o = e.bottom) : t.top >= e.bottom && a.top <= e.bottom ? o = e.bottom : t.bottom >= e.top && a.bottom <= e.top && (o = e.top - t.height), null != o)) {
              l = e;
              break;
            }
            l && null != s && null == o && 0 !== r && (r > 0 ? t.bottom <= l.bottom && a.bottom > l.bottom ? o = l.bottom - t.height : t.top <= l.top && a.top > l.top && (o = l.top) : t.bottom >= l.bottom && a.bottom < l.bottom ? o = l.bottom - t.height : t.top >= l.top && a.top < l.top && (o = l.top));
            l && null != o && null == s && 0 !== n && (n > 0 ? t.right <= l.right && a.right > l.right ? s = l.right - t.width : t.left <= l.left && a.left > l.left && (s = l.left) : t.right >= l.right && a.right < l.right ? s = l.right - t.width : t.left >= l.left && a.left < l.left && (s = l.left));
            let d = f2;
            (null != s || null != o) && (e = {
              x: s ?? e.x,
              y: o ?? e.y
            }, d = {
              x: null != s ? n - (s - t.left) : 0,
              y: null != o ? r - (o - t.top) : 0
            });
            return [e, d];
          }(n, i.currentTarget.getBoundingClientRect(), e.current);
          r(e => WQ(e, o));
          return s;
        },
        end() {
          e.current = [];
          t.reset();
        }
      };
    }();
    let m = useRef(f2);
    let h = o ?? f2;
    let f = o ? gU(h) : function (e) {
      let t = {};
      "x" in e ? "center" === e.x ? (t.left = "50%", t.transform = "translateX(-50%)") : t.left = e.x : "left" in e ? t.left = e.left : "right" in e && (t.right = e.right);
      "y" in e ? "center" === e.y ? (t.top = "50%", t.transform = [t.transform, "translateY(-50%)"].filter(Boolean).join(" ")) : t.top = e.y : "top" in e ? t.top = e.top : "bottom" in e && (t.bottom = e.bottom);
      return t;
    }(e);
    useLayoutEffect(() => {
      if (i) return;
      let e = s.current;
      let t = VN(e);
      l(C(e, t));
    }, [i]);
    _$$w(s, () => {
      let e = s.current;
      if (!e) return;
      let t = VN(e);
      let i = C(e, t);
      LC(t, i) || (Object.assign(e.style, gU(i)), l(i));
    }, !i && !c);
    useEffect(() => {
      let e;
      let t;
      let i;
      t = Vu();
      i = null;
      let [n, r] = [function () {
        let e = Vu();
        let n = Re(e, t);
        t = e;
        i || (i = function (e) {
          let t = e.getBoundingClientRect();
          return [Math.min(Math.floor((t.x + t.width / 2) / window.innerWidth * 3), 2), Math.min(Math.floor((t.y + t.height / 2) / window.innerHeight * 3), 2)];
        }(s.current));
        let {
          x,
          y,
          width,
          height
        } = s.current.getBoundingClientRect();
        if (0 === width || 0 === height) return null;
        switch (i[0]) {
          case 0:
            break;
          case 1:
            r += n.x / 2;
            break;
          case 2:
            r += n.x;
        }
        switch (i[1]) {
          case 0:
            break;
          case 1:
            a += n.y / 2;
            break;
          case 2:
            a += n.y;
        }
        return C(s.current, {
          x,
          y
        });
      }, function () {
        i = null;
      }];
      return addEventlistenerWithCleanup(window, "resize", () => {
        let t = n();
        t && (Object.assign(s.current.style, {
          top: 0,
          left: 0,
          transform: BB(t)
        }), clearTimeout(e), e = window.setTimeout(() => {
          r();
          s.current && (s.current.style.removeProperty("transform"), Object.assign(s.current.style, gU(t)), l(t));
        }, 100));
      });
    }, []);
    let [, y] = _$$i({
      deadZone: !0,
      onBeforeDrag: n ? N : void 0,
      onDragStart(e) {
        p.start(e);
        Object.assign(s.current.style, {
          top: 0,
          left: 0,
          willChange: "transform",
          transform: BB(h)
        });
      },
      onDrag(e, {
        updateStart: i
      }) {
        let n = WQ(h, e.delta);
        n = p.check(e, n, i);
        m.current = n;
        s.current.style.transform = BB(n);
        t?.({
          position: n,
          event: e,
          commit: !1
        });
      },
      onDragEnd(e) {
        p.end();
        let i = s.current.style;
        if (i.removeProperty("will-change"), i.removeProperty("transform"), e.cancelled) {
          Object.assign(i, gU(h));
          return;
        }
        u(!0);
        let r = T(e.currentTarget, m.current, n);
        Object.assign(i, gU(r));
        l(r);
        t?.({
          position: r,
          event: e,
          commit: !0
        });
      }
    });
    return {
      pos: h,
      setPos: l,
      ref: s,
      positionStyle: f,
      getDragProps: y,
      hasMoved: c,
      setHasMoved: u
    };
  }({
    defaultPosition: i,
    onDrag: f,
    hidden: x.hidden ?? !1,
    headerOnly: "header" === h,
    refIn: k
  });
  let B = U1(ref);
  let [V, G] = function () {
    let [e, t] = useState(() => D++);
    return [e, () => {
      t(e => e === D - 1 ? e : D++);
    }];
  }();
  useImperativeHandle(y?.private.posRef, () => ({
    pos,
    setPos
  }), [pos, setPos]);
  let {
    previouslyInteracted,
    previouslyInteractedMapped
  } = function (e) {
    let t = useRef(void 0);
    let i = useRef(void 0);
    useEffect(() => {
      if (void 0 === t.current) {
        let n = bq(_$$F.element);
        t.current = n;
        i.current = e && n ? e(n) : null;
      }
    }, []);
    return {
      previouslyInteracted: t,
      previouslyInteractedMapped: i
    };
  }(e => e.closest(w));
  let K = useRecording(n, {
    eventName: "close",
    recordingKey: b
  }, [n]);
  let Y = function (e) {
    let t = useRef(e.onDismiss);
    t.current = e.onDismiss;
    let i = useCallback(i => {
      if (!t.current || e.triggerRef.current?.contains(i)) return;
      let n = !!i.closest(w);
      let r = e.parentRef.current?.contains(i);
      (!n || r) && (i.closest('[role="menu"]') || t.current({
        source: "outside",
        target: i
      }));
    }, []);
    return function (e, t) {
      let i = useRef(null);
      return (useEffect(() => {
        if (!t) return;
        let n = addEventlistenerWithCleanup(document, "pointerdown", n => {
          if (e.current && e.current.contains(n.target)) return;
          let r = n.target;
          i.current = window.setTimeout(() => {
            t(r);
          }, 0);
        }, !0);
        return () => {
          n();
          clearTimeout(i.current);
        };
      }, [t, e]), t) ? {
        onPointerDownCapture() {
          clearTimeout(i.current);
        }
      } : {};
    }(e.ref, i);
  }({
    ref,
    parentRef: previouslyInteractedMapped,
    triggerRef: previouslyInteracted,
    onDismiss: hasMoved || x.hidden ? void 0 : K
  });
  let q = useMemo(() => ({
    close: K
  }), [K]);
  let $ = useMemo(() => ({
    pos,
    setPos,
    manager: y,
    hasMoved,
    setHasMoved
  }), [pos, setPos, y, hasMoved, setHasMoved]);
  return jsx(DialogContext.Provider, {
    value: q,
    children: jsx(H.Provider, {
      value: $,
      children: jsx(_$$m.Provider, {
        value: !0,
        children: jsx(_$$i2, {
          children: jsx(_$$b, {
            ref: B,
            ...x,
            ...S,
            ...getDragProps({
              ...x,
              className: e,
              style: {
                ...t,
                zIndex: V,
                ...positionStyle
              },
              onPointerDownCapture: function (e) {
                e.target.closest(w) === ref.current && G();
                Y.onPointerDownCapture?.();
                x?.onPointerDownCapture?.(e);
              },
              onFocusCapture: function (e) {
                e.target.closest(w) === ref.current && G();
              },
              onKeyDown: function (e) {
                "Escape" === e.key && (preventAndStopEvent(e), K({
                  source: "escape"
                }));
                x?.onKeyDown?.(e);
              }
            })
          })
        })
      })
    })
  });
});
export function $$q0({
  children: e,
  defaultWidth: t,
  defaultHeight: i,
  constraints: n,
  onTransform: s,
  onDoubleClick: o,
  ensureHeaderVisible: l,
  recordingKey: u
}) {
  let p = useRef(null);
  let {
    pos,
    setPos,
    manager,
    setHasMoved
  } = useContext(H);
  let [E, x, S] = function (e, t = "fit-content", i = "fit-content", n) {
    let [r, s] = useState(1);
    let [o, l] = useState(() => ({
      x: "number" == typeof t ? t : 0,
      y: "number" == typeof i ? i : 0
    }));
    useLayoutEffect(() => {
      if (0 === r) return;
      Object.assign(e.current.style, {
        width: t,
        height: i
      });
      let a = k(n);
      let {
        clientWidth,
        clientHeight
      } = e.current;
      l({
        x: KY(clientWidth, a.minWidth, a.maxWidth),
        y: KY(clientHeight, a.minHeight, a.maxHeight)
      });
      0 === clientWidth || 0 === clientHeight ? s(e => e > 5 ? 0 : e + 1) : s(0);
    }, [e, r]);
    return [o, l, !!r];
  }(p, t, i, n);
  let w = useRef(null);
  let C = useRef();
  let R = useIsRecording();
  let N = manager?.private.preventUserResize ?? !1;
  useImperativeHandle(manager?.private.sizeRef, () => ({
    size: E,
    setSize: x
  }), [E, x]);
  let O = useRecording(({
    pos: e,
    size: t
  }) => {
    X || (e && setPos(e), x(t), setHasMoved(!0), s?.({
      position: e ?? pos,
      size: t,
      event: {},
      commit: !0
    }));
  }, {
    eventName: "resize",
    recordingKey: u
  }, [s, pos]);
  let [D, F] = _$$i({
    disabled: N,
    onBeforeDrag(e) {
      let t = e.target;
      return !!t.hasAttribute("data-direction") && t;
    },
    onDragStart() {
      w.current = {
        pos,
        size: E
      };
      C.current = k(n);
    },
    onDrag(e) {
      let t = e.target.getAttribute("data-direction");
      let {
        pos: _pos,
        size
      } = w.current;
      let [r, a] = function (e, t, i, n, r = {}) {
        switch (e) {
          case "top":
            return a({
              y: -n.y
            }, !1, !0);
          case "right":
            return a({
              x: n.x
            });
          case "bottom":
            return a({
              y: n.y
            });
          case "left":
            return a({
              x: -n.x
            }, !0);
          case "topLeft":
            return a({
              x: -n.x,
              y: -n.y
            }, !0, !0);
          case "topRight":
            return a({
              x: n.x,
              y: -n.y
            }, !1, !0);
          case "bottomRight":
            return a({
              x: n.x,
              y: n.y
            });
          case "bottomLeft":
            return a({
              x: -n.x,
              y: n.y
            }, !0);
        }
        function a(e, n = !1, s = !1) {
          let o = 0;
          let l = 0;
          let d = {
            ...i
          };
          e.x && (d.x = KY(Math.round(i.x + e.x), r.minWidth, r.maxWidth), o = d.x - i.x);
          e.y && (d.y = KY(Math.round(i.y + e.y), r.minHeight, r.maxHeight), l = d.y - i.y);
          let c = {
            ...t
          };
          n && (c.x = t.x - o);
          s && (c.y = t.y - l);
          return [c, _$$qE(d, t6(240, 128), P(window))];
        }
      }(t, _pos, size, e.delta, C.current);
      setPos(e => LC(e, r) ? e : r);
      x(e => LC(e, a) ? e : a);
      setHasMoved(!0);
      s?.({
        size: a,
        position: r,
        event: e,
        commit: !1
      });
    },
    onDragEnd(e) {
      if (w.current = null, C.current = void 0, s?.({
        size: E,
        position: pos,
        event: e,
        commit: !0
      }), setPos(e => T(p.current, e, l)), R) {
        X = !0;
        let t = e.target.getAttribute("data-direction");
        O(b.includes(t) ? {
          size: E
        } : {
          pos,
          size: E
        });
        X = !1;
      }
    }
  });
  useEffect(() => addEventlistenerWithCleanup(window, "resize", () => {
    let e = k(n);
    x(t => {
      let i = t6(KY(t.x, e.minWidth, e.maxWidth), KY(t.y, e.minHeight, e.maxHeight));
      return LC(t, i) ? t : i;
    });
  }), [n, x]);
  return jsxs("div", {
    ref: p,
    "data-resizing": D || void 0,
    ...F({
      className: L,
      style: {
        width: E.x,
        height: E.y,
        [Vg("--fpl-contents-height")]: S ? void 0 : "100%",
        [Vg("--fpl-contents-max-height")]: S ? void 0 : "100%"
      },
      onDoubleClick: o ? e => {
        let t = e.target.getAttribute("data-direction");
        t && o(t, e);
      } : void 0
    }),
    children: [e, !N && y.map(e => jsx($, {
      direction: e
    }, e))]
  });
}
function $({
  direction: e
}) {
  return jsx("div", {
    className: n[e],
    "aria-hidden": "true",
    "data-direction": e
  });
}
export function $$Z3({
  preventUserResize: e = !1
} = {}) {
  let t = useRef(null);
  let i = useRef(null);
  return useMemo(() => ({
    get position() {
      return t.current?.pos ?? f2;
    },
    setPosition(e) {
      t.current?.setPos(e);
    },
    get size() {
      return i.current?.size ?? f2;
    },
    setSize(e) {
      i.current?.setSize(e);
    },
    private: {
      posRef: t,
      sizeRef: i,
      preventUserResize: e
    }
  }), [e]);
}
$$q0.displayName = "WindowPrimitive.Resizable";
let X = !1;
export const cM = $$q0;
export const bL = $$K1;
export const iw = $$W2;
export const ox = $$Z3;