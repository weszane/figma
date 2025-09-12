import { useSyncExternalStore } from "../vendor/694049";
import { useSyncExternalStoreWithSelector } from "../vendor/303599";
import { unstable_batchedUpdates } from "react-dom";
import { createContext, useContext, useDebugValue, useLayoutEffect, useEffect, useMemo, createElement, useRef, memo, forwardRef } from "react";
import { A as _$$A } from "../vendor/710480";
import { A as _$$A2 } from "../vendor/20707";
import _ from "../vendor/833871";
import { isContextConsumer } from "../vendor/974448";
let a = function (e) {
  e();
};
let o = () => a;
let l = createContext(null);
function d() {
  return useContext(l);
}
let s = () => {
  throw Error("uSES not initialized!");
};
let c = s;
let h = (e, n) => e === n;
let useSelector = function (e = l) {
  let n = e === l ? d : () => useContext(e);
  return function (e, i = h) {
    let {
      store,
      subscription,
      getServerState
    } = n();
    let a = c(subscription.addNestedSub, store.getState, getServerState || store.getState, e, i);
    useDebugValue(a);
    return a;
  };
}();
var b = _;
let v = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function w(e) {
  return function (n) {
    let i = e(n);
    function t() {
      return i;
    }
    t.dependsOnOwnProps = !1;
    return t;
  };
}
function k(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : 1 !== e.length;
}
function S(e, n) {
  return function (n, {
    displayName: i
  }) {
    let t = function (e, n) {
      return t.dependsOnOwnProps ? t.mapToProps(e, n) : t.mapToProps(e, void 0);
    };
    t.dependsOnOwnProps = !0;
    t.mapToProps = function (n, i) {
      t.mapToProps = e;
      t.dependsOnOwnProps = k(e);
      let f = t(n, i);
      "function" == typeof f && (t.mapToProps = f, t.dependsOnOwnProps = k(f), f = t(n, i));
      return f;
    };
    return t;
  };
}
function E(e, n) {
  return (i, t) => {
    throw Error(`Invalid value of type ${typeof e} for ${n} argument when connecting component ${t.wrappedComponentName}.`);
  };
}
function x(e, n, i) {
  return _$$A({}, i, e, n);
}
let C = {
  notify() {},
  get: () => []
};
function T(e, n) {
  let i;
  let t = C;
  function f() {
    a.onStateChange && a.onStateChange();
  }
  function r() {
    i || (i = n ? n.addNestedSub(f) : e.subscribe(f), t = function () {
      let e = o();
      let n = null;
      let i = null;
      return {
        clear() {
          n = null;
          i = null;
        },
        notify() {
          e(() => {
            let e = n;
            for (; e;) {
              e.callback();
              e = e.next;
            }
          });
        },
        get() {
          let e = [];
          let i = n;
          for (; i;) {
            e.push(i);
            i = i.next;
          }
          return e;
        },
        subscribe(e) {
          let t = !0;
          let f = i = {
            callback: e,
            next: null,
            prev: i
          };
          f.prev ? f.prev.next = f : n = f;
          return function () {
            t && null !== n && (t = !1, f.next ? f.next.prev = f.prev : i = f.prev, f.prev ? f.prev.next = f.next : n = f.next);
          };
        }
      };
    }());
  }
  let a = {
    addNestedSub: function (e) {
      r();
      return t.subscribe(e);
    },
    notifyNestedSubs: function () {
      t.notify();
    },
    handleChangeWrapper: f,
    isSubscribed: function () {
      return !!i;
    },
    trySubscribe: r,
    tryUnsubscribe: function () {
      i && (i(), i = void 0, t.clear(), t = C);
    },
    getListeners: () => t
  };
  return a;
}
let P = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? useLayoutEffect : useEffect;
function L(e, n) {
  return e === n ? 0 !== e || 0 !== n || 1 / e == 1 / n : e != e && n != n;
}
export function shallowEqual(e, n) {
  if (L(e, n)) return !0;
  if ("object" != typeof e || null === e || "object" != typeof n || null === n) return !1;
  let i = Object.keys(e);
  let t = Object.keys(n);
  if (i.length !== t.length) return !1;
  for (let t = 0; t < i.length; t++) if (!Object.prototype.hasOwnProperty.call(n, i[t]) || !L(e[i[t]], n[i[t]])) return !1;
  return !0;
}
let O = ["reactReduxForwardedRef"];
let A = s;
let M = [null, null];
function R(e, n) {
  return e === n;
}
let connect = function (e, n, i, {
  pure: t,
  areStatesEqual: f = R,
  areOwnPropsEqual: r = shallowEqual,
  areStatePropsEqual: a = shallowEqual,
  areMergedPropsEqual: o = shallowEqual,
  forwardRef: d = !1,
  context: s = l
} = {}) {
  let c = e ? "function" == typeof e ? S(e, "mapStateToProps") : E(e, "mapStateToProps") : w(() => ({}));
  let h = n && "object" == typeof n ? w(e => function (e, n) {
    let i = {};
    for (let t in e) {
      let f = e[t];
      "function" == typeof f && (i[t] = (...e) => n(f(...e)));
    }
    return i;
  }(n, e)) : n ? "function" == typeof n ? S(n, "mapDispatchToProps") : E(n, "mapDispatchToProps") : w(e => ({
    dispatch: e
  }));
  let p = i ? "function" == typeof i ? function (e, {
    displayName: n,
    areMergedPropsEqual: t
  }) {
    let f;
    let r = !1;
    return function (e, n, a) {
      let o = i(e, n, a);
      r ? t(o, f) || (f = o) : (r = !0, f = o);
      return f;
    };
  } : E(i, "mergeProps") : () => x;
  let _ = !!e;
  return e => {
    let n = e.displayName || e.name || "Component";
    let i = `Connect(${n})`;
    let t = {
      shouldHandleStateChanges: _,
      displayName: i,
      wrappedComponentName: n,
      WrappedComponent: e,
      initMapStateToProps: c,
      initMapDispatchToProps: h,
      initMergeProps: p,
      areStatesEqual: f,
      areStatePropsEqual: a,
      areOwnPropsEqual: r,
      areMergedPropsEqual: o
    };
    function l(n) {
      var i;
      let f;
      let [r, a, o] = useMemo(() => {
        let {
          reactReduxForwardedRef
        } = n;
        let i = _$$A2(n, O);
        return [n.context, reactReduxForwardedRef, i];
      }, [n]);
      let l = useMemo(() => r && r.Consumer && isContextConsumer(createElement(r.Consumer, null)) ? r : s, [r, s]);
      let d = useContext(l);
      let c = !!n.store && !!n.store.getState && !!n.store.dispatch;
      let h = !!d && !!d.store;
      let p = c ? n.store : d.store;
      let b = h ? d.getServerState : p.getState;
      let w = useMemo(() => function (e, n) {
        let {
          initMapStateToProps,
          initMapDispatchToProps,
          initMergeProps
        } = n;
        let r = _$$A2(n, v);
        let a = initMapStateToProps(e, r);
        return function (e, n, i, t, {
          areStatesEqual: f,
          areOwnPropsEqual: r,
          areStatePropsEqual: a
        }) {
          let o;
          let u;
          let l;
          let d;
          let s;
          let c = !1;
          return function (h, p) {
            return c ? function (c, h) {
              let p = !r(h, u);
              let g = !f(c, o, h, u);
              return (o = c, u = h, p && g) ? (l = e(o, u), n.dependsOnOwnProps && (d = n(t, u)), s = i(l, d, u)) : p ? (e.dependsOnOwnProps && (l = e(o, u)), n.dependsOnOwnProps && (d = n(t, u)), s = i(l, d, u)) : g ? function () {
                let n = e(o, u);
                let t = !a(n, l);
                l = n;
                t && (s = i(l, d, u));
                return s;
              }() : s;
            }(h, p) : (l = e(o = h, u = p), d = n(t, u), s = i(l, d, u), c = !0, s);
          };
        }(a, initMapDispatchToProps(e, r), initMergeProps(e, r), e, r);
      }(p.dispatch, t), [p]);
      let [k, S] = useMemo(() => {
        if (!_) return M;
        let e = T(p, c ? void 0 : d.subscription);
        let n = e.notifyNestedSubs.bind(e);
        return [e, n];
      }, [p, c, d]);
      let E = useMemo(() => c ? d : _$$A({}, d, {
        subscription: k
      }), [c, d, k]);
      let x = useRef();
      let C = useRef(o);
      let L = useRef();
      let N = useRef(!1);
      useRef(!1);
      let R = useRef(!1);
      let j = useRef();
      P(() => (R.current = !0, () => {
        R.current = !1;
      }), []);
      let I = useMemo(() => () => L.current && o === C.current ? L.current : w(p.getState(), o), [p, o]);
      let z = useMemo(() => e => k ? function (e, n, i, t, f, r, a, o, u, l, d) {
        if (!e) return () => {};
        let s = !1;
        let c = null;
        let h = () => {
          let e;
          let i;
          if (s || !o.current) return;
          let h = n.getState();
          try {
            e = t(h, f.current);
          } catch (e) {
            i = e;
            c = e;
          }
          i || (c = null);
          e === r.current ? a.current || l() : (r.current = e, u.current = e, a.current = !0, d());
        };
        i.onStateChange = h;
        i.trySubscribe();
        h();
        return () => {
          if (s = !0, i.tryUnsubscribe(), i.onStateChange = null, c) throw c;
        };
      }(_, p, k, w, C, x, N, R, L, S, e) : () => {}, [k]);
      i = [C, x, N, o, L, S];
      P(() => function (e, n, i, t, f, r) {
        e.current = t;
        i.current = !1;
        f.current && (f.current = null, r());
      }(...i), void 0);
      try {
        f = A(z, I, b ? () => w(b(), o) : I);
      } catch (e) {
        j.current && (e.message += `
The error may be correlated with this previous error:
${j.current.stack}

`);
        return e;
      }
      P(() => {
        j.current = void 0;
        L.current = void 0;
        x.current = f;
      });
      let B = useMemo(() => createElement(e, _$$A({}, f, {
        ref: a
      })), [a, e, f]);
      return useMemo(() => _ ? createElement(l.Provider, {
        value: E
      }, B) : B, [l, B, E]);
    }
    let w = memo(l);
    if (w.WrappedComponent = e, w.displayName = l.displayName = i, d) {
      let n = forwardRef(function (e, n) {
        return createElement(w, _$$A({}, e, {
          reactReduxForwardedRef: n
        }));
      });
      n.displayName = i;
      n.WrappedComponent = e;
      return b()(n, e);
    }
    return b()(w, e);
  };
};
let Provider = function ({
  store: e,
  context: n,
  children: i,
  serverState: t
}) {
  let f = useMemo(() => {
    let n = T(e);
    return {
      store: e,
      subscription: n,
      getServerState: t ? () => t : void 0
    };
  }, [e, t]);
  let r = useMemo(() => e.getState(), [e]);
  P(() => {
    let {
      subscription
    } = f;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    r !== e.getState() && subscription.notifyNestedSubs();
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [f, r]);
  let a = n || l;
  return createElement(a.Provider, {
    value: f
  }, i);
};
function z(e = l) {
  let n = e === l ? d : () => useContext(e);
  return function () {
    let {
      store
    } = n();
    return store;
  };
}
let useStore = z();
let useDispatch = function (e = l) {
  let n = e === l ? useStore : z(e);
  return function () {
    return n().dispatch;
  };
}();
c = useSyncExternalStoreWithSelector;
A = useSyncExternalStore;
a = unstable_batchedUpdates;
export const Kq = Provider;
export const vA = unstable_batchedUpdates;
export const Ng = connect;
export const bN = shallowEqual;
export const wA = useDispatch;
export const d4 = useSelector;
export const Pj = useStore;
