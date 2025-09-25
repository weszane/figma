import { isBrowser } from "../905/268204";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, forwardRef, useState, useEffect, createContext, useContext, useRef, useCallback, useLayoutEffect } from "react";
import { A as _$$A2 } from "../vendor/723372";
import { getNudgeAmount, incrementValue, clampValue, handleParseWithError, areValuesEqual, hasIncrementBy } from "../905/687992";
import { setupRefUpdater } from "../905/823680";
import { InputComponent } from "../905/185998";
import { addEventlistenerWithCleanup, preventAndStopEvent, createCleanupExecutor } from "../905/955878";
import { mergeProps } from "../905/475481";
import { multiplyPoint, originPoint, addPoints, pointFromMovement, roundToDevicePixel, pointFromMouseEvent } from "../905/268491";
import { createPortal } from "react-dom";
import { positiveModulo, clamp } from "../905/875826";
import { isSafari } from "../905/881471";
import { setupDragHandler } from "../905/97346";
import { containsActiveElement, focusAndSelect } from "../905/117474";
import { N as _$$N } from "../905/427996";
import { l as _$$l } from "../905/490996";
import { C as _$$C } from "../905/294086";
import { KindEnum } from "../905/129884";
import { useDispatch } from "react-redux";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
let p = "data-alt-scrub-target";
let m = null;
let h = 0;
let g = {
  current: null
};
let f = null;
let _ = () => {};
function A() {
  m && (m.setAttribute(p, ""), g.current && (_ = function (e, t) {
    let i = function (e) {
      switch (e.singleAxis || !1) {
        case "x":
          return e => {
            let t = e.x;
            Math.abs(e.y) > Math.abs(e.x) && (t = e.y);
            return {
              x: t *= .2,
              y: 0
            };
          };
        case "y":
          return e => {
            let t = e.y;
            Math.abs(e.x) > Math.abs(e.y) && (t = e.x);
            return {
              x: 0,
              y: t *= .2
            };
          };
        case !1:
          return e => multiplyPoint(e, .2);
      }
    }(t.current);
    let n = null;
    let r = originPoint;
    return addEventlistenerWithCleanup(e, "wheel", a => {
      let s = i(function (e) {
        let t = -e.deltaX;
        let i = e.deltaY;
        switch (e.deltaMode) {
          case 0:
            break;
          case 1:
            t *= 10;
            i *= 10;
            break;
          case 2:
            t *= 100;
            i *= 100;
        }
        return {
          x: t,
          y: i
        };
      }(a));
      if (null == n) {
        if (!1 === t.current.onBeforeScrub?.({
          source: "wheel",
          target: a.target
        })) return;
        t.current.onScrubStart?.({
          target: e,
          delta: originPoint,
          movement: originPoint,
          shiftKey: a.shiftKey,
          source: "wheel"
        });
        r = s;
      } else {
        clearTimeout(n);
        r = addPoints(r, s);
      }
      preventAndStopEvent(a);
      let o = {
        target: e,
        delta: r,
        movement: s,
        shiftKey: a.shiftKey,
        source: "wheel",
        cancelled: !1
      };
      n = window.setTimeout(() => {
        n = null;
        t.current.onScrubEnd?.(o);
      }, 200);
      t.current.onScrub?.(o);
    }, {
      capture: !0,
      passive: !1
    });
  }(m, g)));
}
function y() {
  m && (m.removeAttribute(p), _(), _ = () => {});
}
let b = () => {};
let x = isBrowser && !!document.documentElement.requestPointerLock && !isSafari;
async function S(e) {
  let t = e.requestPointerLock();
  t && (await t);
}
var C = "use-scrub__scrubbing__3D3dS";
function T(e, t, i) {
  if (!e) return;
  let n = positiveModulo(t.x + i.x, window.innerWidth);
  let r = positiveModulo(t.y + i.y, window.innerHeight);
  let a = n > window.innerWidth / 2 ? -100 : 0;
  let s = r > window.innerHeight / 2 ? -100 : 0;
  e.style.transform = `translate(calc(${a}% + ${n}px), calc(${s}% + ${r}px))`;
}
var R = "scrubbable__trigger__mjHCD";
function $$N({
  width: e
}) {
  let t = useMemo(() => "M5 3.5v-3.5l-5 5l5 5v-3.5h" + (Math.max(e, 13) - 10) + "v3.5l5 -5l-5 -5v3.5z", [e]);
  return jsx("svg", {
    width: e,
    height: 10,
    className: "scrubbable__cursor__xabHz",
    children: jsx("path", {
      className: "scrubbable__shadow__d13e1",
      fill: "#000",
      stroke: "#fff",
      d: t
    })
  });
}
function P(e, t, i, n, r) {
  let a = getNudgeAmount(e, !1, t);
  let o = (n.current = n.current + i) * a;
  let l = incrementValue(e, t, o, {
    snap: !0,
    big: r
  });
  if ("number" == typeof t) {
    let i = t + o;
    let r = clampValue(e, i);
    let l = i - r;
    l && (n.current -= l / a);
  }
  return l;
}
$$N.displayName = "Scrubbable.Cursor";
let O = forwardRef(({
  manager: e,
  ...t
}, i) => {
  let [a, s] = useState(1);
  let o = e?.private;
  let l = o?.getScrubProps;
  let d = o?.Cursor;
  let c = o?.setScrubScaleChangeCallback;
  useEffect(() => c?.((e, t) => s(t)), [c]);
  let u = Math.round(30 * ((8 + a) / 16) ** 2 + 13);
  return jsxs(Fragment, {
    children: [jsx("div", {
      ref: i,
      ...(l?.(t) ?? t)
    }), d && jsx(d, {
      children: jsx($$N, {
        width: u
      })
    })]
  });
});
O.displayName = "Scrubbable.Root";
let D = forwardRef(({
  className: e,
  htmlAttributes: t,
  ...i
}, r) => jsx("div", {
  ...i,
  ...t,
  ref: r,
  className: _$$A2(R, e)
}));
D.displayName = "Scrubbable.Trigger";
let M = createContext(null);
let j = createContext(_$$l);
function U() {
  return useContext(M);
}
function B({
  children: e
}) {
  let [t, i] = useState(null);
  return jsx(M.Provider, {
    value: t,
    children: jsx(j.Provider, {
      value: i,
      children: e
    })
  });
}
B.displayName = "ScrubbableInputContext";
let G = forwardRef((e, t) => jsx(B, {
  children: jsx(z, {
    ...e,
    forwardedRef: t
  })
}));
function z({
  forwardedRef: e,
  ...t
}) {
  let i = U();
  return jsx(O, {
    manager: i?.manager ?? null,
    children: jsx(InputComponent.Root, {
      ref: e,
      ...t
    })
  });
}
G.displayName = "ScrubbableInput.Root";
let H = forwardRef(({
  onScrubScaleChange: e,
  ...t
}, i) => {
  let a = useContext(j);
  let p = _$$N(t);
  let _ = function ({
    value: e,
    getStringValue: t,
    formatter: i,
    multiplier: a = .5,
    disabled: o,
    onChange: l,
    onChangeRestricted: p,
    onCancel: _,
    onScrubScaleChange: E
  }) {
    let N = useRef(null);
    let O = useRef(0);
    let D = useRef(null);
    let L = useRef(null);
    let F = useRef(!1);
    let M = useRef(null);
    let j = useRef(null);
    let U = useCallback(e => {
      M.current = e;
    }, []);
    let {
      scrubbing,
      getScrubProps,
      Cursor
    } = function (e) {
      let [t, i, a] = function (e) {
        let t = useRef();
        let i = useRef(originPoint);
        let a = useRef(originPoint);
        let s = useRef();
        let [o, l] = useState(1);
        let [c, p] = function ({
          onPointerLockPermissionChange: e,
          ...t
        }) {
          let i = useRef(originPoint);
          let n = useRef();
          let a = useRef();
          return setupDragHandler({
            ...t,
            onDragStart(r, {
              registerAbortSignal: s
            }) {
              let o = new AbortController();
              function l() {
                a.current?.();
                a.current = addEventlistenerWithCleanup(document, "keydown", e => {
                  "Escape" === e.key && (o.abort(), preventAndStopEvent(e));
                }, !0);
              }
              if (s(o.signal), x) {
                let t = r.currentTarget;
                S(t).then(() => {
                  e?.(2);
                  n.current?.();
                  n.current = addEventlistenerWithCleanup(document, "pointerlockchange", () => {
                    document.pointerLockElement !== t && o.abort();
                  });
                }).catch(() => {
                  e?.(0);
                  l();
                });
              } else l();
              i.current = originPoint;
              t.onDragStart?.(r);
            },
            onDrag(e) {
              let n = pointFromMovement(e);
              i.current = addPoints(i.current, n);
              t.onDrag(Object.assign(e, {
                delta: i.current,
                movement: n
              }));
            },
            onDragEnd(e) {
              if (n.current?.(), n.current = void 0, a.current?.(), a.current = void 0, document.pointerLockElement && document.exitPointerLock(), e.cancelled) {
                t.onDragEnd?.({
                  cancelled: !0
                });
                return;
              }
              t.onDragEnd?.(Object.assign(e, {
                delta: i.current,
                movement: originPoint
              }));
            }
          });
        }({
          customButtonCheck: !0,
          disabled: e.disabled,
          onBeforeDrag(t) {
            let i = t.button;
            if (0 !== i && 1 !== i) return !1;
            let n = {
              source: t.altKey ? "alt-pointer" : 1 === i ? "middle" : "pointer",
              target: t.target
            };
            return e.onBeforeScrub?.(n) ?? !0;
          },
          onDragStart(n) {
            let r = n.currentTarget;
            document.documentElement.classList.add(C);
            t.current = r;
            i.current = roundToDevicePixel(pointFromMouseEvent(n));
            e.onScrubStart?.({
              target: r,
              delta: originPoint,
              movement: originPoint,
              shiftKey: n.shiftKey,
              source: "pointer"
            });
          },
          onDrag(t) {
            e.onScrub?.({
              target: t.currentTarget,
              delta: t.delta,
              movement: t.movement,
              shiftKey: t.shiftKey,
              source: "pointer"
            });
            a.current = t.delta;
            T(s.current, i.current, a.current);
          },
          onDragEnd(n) {
            document.documentElement.classList.remove(C);
            i.current = originPoint;
            a.current = originPoint;
            let r = t.current;
            t.current = void 0;
            e.onScrubEnd?.(n.cancelled ? {
              target: r,
              delta: originPoint,
              movement: originPoint,
              shiftKey: !1,
              source: "pointer",
              cancelled: !0
            } : {
              target: n.currentTarget,
              delta: n.delta,
              movement: n.movement,
              shiftKey: n.shiftKey,
              source: "pointer",
              cancelled: !1
            });
          },
          onPointerLockPermissionChange: l
        });
        let m = useCallback(e => {
          s.current = e;
          T(e, i.current, a.current);
        }, []);
        let h = useCallback(e => x && c && 0 !== o ? createPortal(jsxs("div", {
          ref: m,
          className: "use-scrub__cursor__MpGYj",
          children: [jsx("div", {
            children: e.children
          }), jsx("div", {
            children: e.children
          }), jsx("div", {
            children: e.children
          }), jsx("div", {
            children: e.children
          })]
        }), document.body) : null, [c, o]);
        return [c, (...e) => p({
          className: c ? C : void 0
        }, ...e), h];
      }(e);
      let [s, o] = function (e) {
        let [t, i] = useState(!1);
        let n = mergeProps(e, {
          onScrubStart() {
            i(!0);
          },
          onScrubEnd() {
            i(!1);
          }
        });
        let a = function (e) {
          let t = useRef();
          useEffect(() => {
            t.current = e;
          }, [e]);
          return t.current;
        }(e);
        useEffect(() => {
          f === a && (g.current = n, f = e);
        }, [e]);
        useEffect(() => (0 === h && function () {
          let e = createCleanupExecutor(addEventlistenerWithCleanup(document, "keydown", e => {
            "Alt" === e.key && A();
          }), addEventlistenerWithCleanup(document, "keyup", e => {
            "Alt" === e.key && y();
          }), addEventlistenerWithCleanup(window, "blur", y));
          b = () => {
            e();
            b = () => {};
          };
        }(), ++h, () => {
          0 == --h && b();
        }), []);
        return [t, {
          onPointerEnter(t) {
            m = t.currentTarget;
            g.current = n;
            f = e;
            t.altKey && A();
          },
          onPointerLeave() {
            y();
            m = null;
            g.current = null;
            f = null;
          }
        }];
      }(e);
      return {
        scrubbing: t || s,
        getScrubProps: (...t) => i(o, {
          "data-fpl-scrub-disabled": e.disabled || void 0
        }, ...t),
        Cursor: a
      };
    }({
      disabled: o,
      singleAxis: "x",
      onBeforeScrub: e => !!e.target.classList.contains(R) || "pointer" !== e.source,
      onScrubStart(n) {
        if (containsActiveElement(n.target) && (L.current = document.activeElement, L.current.blur()), t) {
          let n = t();
          let r = handleParseWithError(i, n, e, "scrub", null);
          r?.callback ? j.current = r.callback : N.current = r?.value ?? e;
        } else N.current = e;
        O.current = 0;
        D.current = null;
        F.current = !1;
      },
      onScrub(t) {
        let [n, r] = function (e) {
          var t;
          if ("wheel" === e.source) return [1, 1];
          let i = (t = function (e) {
            let t = window.innerHeight;
            return clamp(e / t, -1, 1);
          }(e.delta.y)) < -.5 ? 8 : t < -.25 ? 4 : t < -.125 ? 2 : t > .5 ? -8 : t > .25 ? -4 : t > .125 ? -2 : 1;
          return [i > 0 ? i : -(1 / i), i];
        }(t);
        n !== D.current && (null != D.current && (E?.(n, r), M.current?.(n, r)), D.current = n);
        let o = t.movement.x * n * a;
        let d = e => P(i, e, o, O, t.shiftKey);
        if (j.current) j.current(e => d(e).value, {
          commit: !1
        });else {
          let n = d(N.current);
          areValuesEqual(i, n.value, e) || (l(n.value, Object.assign(t, {
            commit: !1
          })), F.current = !0);
          n.value !== n.preClamped && p?.(n.preClamped, {
            value: n.value
          });
        }
      },
      onScrubEnd(t) {
        let n = j.current;
        if (j.current = null, t.cancelled) n ? n(e => e, {
          commit: !0,
          cancelled: !0
        }) : _(N.current, t);else {
          let r = e => P(i, e, 0, O, t.shiftKey).value;
          if (n) n(r, {
            commit: !0
          });else {
            let n = r(N.current);
            (F.current || !areValuesEqual(i, n, e)) && l(n, Object.assign(t, {
              commit: !0
            }));
          }
        }
        if (L.current) {
          let e = L.current;
          L.current = null;
          setTimeout(() => focusAndSelect(e));
        }
      }
    });
    return {
      scrubbing,
      private: {
        getScrubProps,
        Cursor,
        setScrubScaleChangeCallback: U
      }
    };
  }({
    value: p.value,
    getStringValue: p.getStringValue,
    formatter: p.formatter,
    disabled: t.disabled,
    onChange: (e, {
      commit: t
    }) => p.onChange(e, {
      commit: t,
      source: "scrub"
    }),
    onChangeRestricted: t.onChangeRestricted,
    onCancel: e => p.onChange(e, {
      commit: !0,
      source: "scrub"
    }),
    onScrubScaleChange: e
  });
  let E = useMemo(() => ({
    ctx: p,
    manager: _
  }), [p, _]);
  useLayoutEffect(() => a(E), [E]);
  let {
    inputProps
  } = p;
  let O = setupRefUpdater(i, inputProps.ref);
  return jsx(InputComponent, {
    ...inputProps,
    ref: O,
    "data-faux-focus": _.scrubbing || void 0
  });
});
H.displayName = "ScrubbableInput.Field";
let W = forwardRef(({
  htmlAttributes: e,
  children: t,
  className: i,
  style: r,
  ...s
}, o) => jsx(D, {
  ...s,
  ref: o,
  className: _$$A2("scrubbable-input__trigger__WUr88", i),
  htmlAttributes: {
    ...e,
    onPointerDown(t) {
      t.preventDefault();
      e?.onPointerDown?.(t);
    }
  },
  children: t
}));
W.displayName = "ScrubbableInput.Trigger";
let K = forwardRef(({
  className: e,
  ...t
}, i) => jsx(W, {
  ...t,
  ref: i,
  className: _$$A2("scrubbable-input__icon__Lg8pt", e)
}));
K.displayName = "ScrubbableInput.Icon";
forwardRef((e, t) => {
  let i = U();
  return i && !i.ctx.inputProps.disabled && hasIncrementBy(i.ctx.formatter) ? jsx(_$$C, {
    ref: t,
    value: i.ctx.value,
    formatter: i.ctx.formatter,
    getStringValue: i.ctx.getStringValue,
    onChange: e => i.ctx.onChange(e, {
      commit: !0,
      source: "stepper"
    }),
    onChangeRestricted: i.ctx.onChangeRestricted
  }) : null;
}).displayName = "ScrubbableInput.Stepper";
export function $$X0({
  icon: e,
  formatter: t,
  ...i
}) {
  let a = function () {
    let e = useDispatch();
    return useCallback((t, i) => {
      let n = i <= -8 ? "1/8" : i <= -4 ? "1/4" : i <= -2 ? "1/2" : i >= 8 ? "8x" : i >= 4 ? "4x" : i >= 2 ? "2x" : "1x";
      e(VisualBellActions.enqueue({
        message: getI18nString("common.scrubScale", {
          value: n
        }),
        type: "scrub-scale"
      }));
    }, [e]);
  }();
  return jsxs(G, {
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": i["aria-label"],
    children: [jsx(K, {
      children: e
    }), jsx(H, {
      ...i,
      formatter: t,
      onScrubScaleChange: a
    })]
  });
}
export const N = $$X0;