import { atom } from "jotai";
export let RESET = Symbol("RESET");
export function atomWithReset(e) {
  let n = atom(e, (i, t, r) => {
    let a = "function" == typeof r ? r(i(n)) : r;
    t(n, a === RESET ? e : a);
  });
  return n;
}
export function atomWithReducer(e, n) {
  return atom(e, function (e, i, t) {
    i(this, n(e(this), t));
  });
}
export function atomFamily(e, n) {
  let i = null;
  let t = new Map();
  let f = r => {
    let a;
    if (void 0 === n) a = t.get(r); else for (let [e, i] of t) if (n(e, r)) {
      a = i;
      break;
    }
    if (void 0 !== a) {
      if (null == i || !i(a[1], r)) return a[0];
      f.remove(r);
    }
    let o = e(r);
    t.set(r, [o, Date.now()]);
    return o;
  };
  f.remove = e => {
    if (void 0 === n) t.$$delete(e); else for (let [i] of t) if (n(i, e)) {
      t.$$delete(i);
      break;
    }
  };
  f.setShouldRemove = e => {
    if (i = e) for (let [e, n] of t) i(n[1], e) && t.$$delete(e);
  };
  return f;
}
let u = (e, n, i) => (n.has(i) ? n : n.set(i, e())).get(i);
let l = new WeakMap();
let d = (e, n, i, t) => {
  let f = u(() => new WeakMap(), l, n);
  let r = u(() => new WeakMap(), f, i);
  return u(e, r, t);
};
export function selectAtom(e, n, i = Object.is) {
  return d(() => {
    let f = Symbol();
    let r = ([e, t]) => {
      if (t === f) return n(e);
      let r = n(e, t);
      return i(t, r) ? t : r;
    };
    let a = atom(n => {
      let i = n(a);
      let t = n(e);
      return t instanceof Promise || i instanceof Promise ? Promise.all([t, i]).then(r) : r([t, i]);
    });
    a.init = f;
    return a;
  }, e, n, i);
}
export function atomWithDefault(e) {
  let n = Symbol();
  let i = atom(n);
  i.debugPrivate = !0;
  let r = atom((t, f) => {
    let r = t(i);
    return r !== n ? r : e(t, f);
  }, (e, t, a) => {
    t(i, a === RESET ? n : "function" == typeof a ? a(e(r)) : a);
  });
  return r;
}
let h = e => "function" == typeof e?.then;
export function atomWithObservable(e, n) {
  let i = e => {
    if ("e" in e) throw e.e;
    return e.d;
  };
  let f = atom(i => {
    var f;
    let r;
    let a;
    let o;
    let u;
    let l;
    let d = e(i);
    let s = null == (f = d[Symbol.observable]) ? void 0 : f.call(d);
    s && (d = s);
    let c = () => new Promise(e => {
      r = e;
    });
    let h = n && "initialValue" in n ? {
      d: "function" == typeof n.initialValue ? n.initialValue() : n.initialValue
    } : c();
    let p = e => {
      o = e;
      r?.(e);
      a?.(e);
    };
    let g = () => !a;
    let m = () => {
      u && (clearTimeout(l), u.unsubscribe());
      u = d.subscribe({
        next: e => p({
          d: e
        }),
        error: e => p({
          e
        }),
        complete: () => { }
      });
      g() && n?.unstable_timeout && (l = setTimeout(() => {
        u && (u.unsubscribe(), u = void 0);
      }, n.unstable_timeout));
    };
    m();
    let _ = atom(o || h);
    _.debugPrivate = !0;
    _.onMount = e => (a = e, o && e(o), u ? clearTimeout(l) : m(), () => {
      a = void 0;
      u && (u.unsubscribe(), u = void 0);
    });
    return [_, d, c, m, g];
  });
  f.debugPrivate = !0;
  return atom(e => {
    let [n] = e(f);
    let t = e(n);
    return t instanceof Promise ? t.then(i) : i(t);
  }, (e, n, i) => {
    let [t, r, a, o, u] = e(f);
    if ("next" in r) {
      u() && (n(t, a()), o());
      r.next(i);
    } else throw Error("observable is not subject");
  });
}
!function (e = () => {
  try {
    return window.localStorage;
  } catch (e) {
    "undefined" != typeof window && console.warn(e);
    return;
  }
}, n) {
  let i;
  let t;
  "undefined" != typeof window && "function" == typeof window.addEventListener && window.Storage && ((n, i, t) => {
    if (!(e() instanceof window.Storage)) return () => { };
    let f = f => {
      if (f.storageArea === e() && f.key === n) {
        let e;
        try {
          e = JSON.parse(f.newValue || "");
        } catch (n) {
          e = t;
        }
        i(e);
      }
    };
    window.addEventListener("storage", f);
    return () => {
      window.removeEventListener("storage", f);
    };
  });
}();
let g = new WeakMap();
let m = (e, n) => (g.has(n) ? g : g.set(n, e())).get(n);
let _ = e => e instanceof Promise;
let b = {
  state: "loading"
};
export function loadable(e) {
  return m(() => {
    let n = new WeakMap();
    let i = atom(0);
    i.debugPrivate = !0;
    let f = atom((t, {
      setSelf: f
    }) => {
      let r;
      t(i);
      try {
        r = t(e);
      } catch (e) {
        return {
          state: "hasError",
          error: e
        };
      }
      if (!_(r)) return {
        state: "hasData",
        data: r
      };
      let a = r;
      let o = n.get(a);
      return o ? o : ("fulfilled" === a.status ? n.set(a, {
        state: "hasData",
        data: a.value
      }) : "rejected" === a.status ? n.set(a, {
        state: "hasError",
        error: a.reason
      }) : a.then(e => {
        n.set(a, {
          state: "hasData",
          data: e
        });
      }, e => {
        n.set(a, {
          state: "hasError",
          error: e
        });
      }).$$finally(f), n.get(a) || (n.set(a, b), b));
    }, (e, n) => {
      n(i, e => e + 1);
    });
    f.debugPrivate = !0;
    return atom(e => e(f));
  }, e);
}
let v = (e, n, i) => (n.has(i) ? n : n.set(i, e())).get(i);
let w = new WeakMap();
let k = (e, n, i) => {
  let t = v(() => new WeakMap(), w, n);
  return v(e, t, i);
};
let S = e => e instanceof Promise;
let E = () => void 0;
export function unwrap(e, n = E) {
  return k(() => {
    let i = new WeakMap();
    let f = new WeakMap();
    let r = atom(0);
    r.debugPrivate = !0;
    let a = atom((t, {
      setSelf: o
    }) => {
      t(r);
      let u = t(a);
      let l = t(e);
      if (!S(l)) return {
        v: l
      };
      if (l !== u?.p && ("fulfilled" === l.status ? f.set(l, l.value) : "rejected" === l.status ? i.set(l, l.reason) : l.then(e => f.set(l, e), e => i.set(l, e)).$$finally(o)), i.has(l)) throw i.get(l);
      return f.has(l) ? {
        p: l,
        v: f.get(l)
      } : u && "v" in u ? {
        p: l,
        f: n(u.v),
        v: u.v
      } : {
        p: l,
        f: n()
      };
    }, (e, n) => {
      n(r, e => e + 1);
    });
    a.init = void 0;
    a.debugPrivate = !0;
    return atom(e => {
      let n = e(a);
      return "f" in n ? n.f : n.v;
    }, (n, i, ...t) => i(e, ...t));
  }, e, n);
}
export const Iz = atomFamily;
export const Rq = loadable;
export const Ut = RESET;
export const mg = selectAtom;
export const oA = unwrap;
export const t_ = atomWithDefault;
export const tx = atomWithReset;
export const um = atomWithReducer;
export const zx = atomWithObservable;
