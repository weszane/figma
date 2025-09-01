let t;
let f = 0;
export function atom(e, n) {
  let i = `atom${++f}`;
  let t = {
    toString: () => i
  };
  "function" == typeof e ? t.read = e : (t.init = e, t.read = a, t.write = o);
  n && (t.write = n);
  return t;
}
function a(e) {
  return e(this);
}
function o(e, n, i) {
  return n(this, "function" == typeof i ? i(e(this)) : i);
}
let u = (e, n) => e.unstable_is ? e.unstable_is(n) : n === e;
let l = e => "init" in e;
let d = e => !!e.write;
let s = new WeakMap();
let c = (e, n) => {
  s.set(e, n);
  e.catch(() => { }).$$finally(() => s.$$delete(e));
};
let h = (e, n) => {
  let i = s.get(e);
  i && (s.$$delete(e), i(n));
};
let p = (e, n) => {
  e.status = "fulfilled";
  e.value = n;
};
let g = (e, n) => {
  e.status = "rejected";
  e.reason = n;
};
let m = e => "function" == typeof e?.then;
let _ = (e, n) => !!e && "v" in e && "v" in n && Object.is(e.v, n.v);
let b = (e, n) => !!e && "e" in e && "e" in n && Object.is(e.e, n.e);
let y = e => !!e && "v" in e && e.v instanceof Promise;
let v = (e, n) => "v" in e && "v" in n && e.v.orig && e.v.orig === n.v.orig;
let w = e => {
  if ("e" in e) throw e.e;
  return e.v;
};
let createStore = () => {
  let e;
  let n;
  let i = new WeakMap();
  let t = new WeakMap();
  let f = [];
  let r = new WeakMap();
  e = new Set();
  n = new Set();
  let a = e => i.get(e);
  let o = (e, n) => {
    n.d.forEach((n, i) => {
      var t;
      if (!r.has(i)) {
        let e = a(i);
        f[f.length - 1] || t.add(i);
        r.set(i, [e, new Set()]);
        e && o(i, e);
      }
      r.get(i)[1].add(e);
    });
  };
  let s = (e, n) => {
    var t;
    Object.freeze(n);
    let u = a(e);
    if (i.set(e, n), r.has(e) || (f[f.length - 1] || t.add(e), r.set(e, [u, new Set()]), o(e, n)), y(u)) {
      let e = "v" in n ? n.v instanceof Promise ? n.v : Promise.resolve(n.v) : Promise.reject(n.e);
      u.v !== e && h(u.v, e);
    }
  };
  let k = (e, n, i, t) => {
    let f = new Map(t ? n.d : null);
    let r = !1;
    i.forEach((i, t) => {
      !i && u(e, t) && (i = n);
      i ? (f.set(t, i), n.d.get(t) !== i && (r = !0)) : console.warn("[Bug] atom state not found");
    });
    (r || n.d.size !== f.size) && (n.d = f);
  };
  let S = (e, n, i, t) => {
    let f = a(e);
    let r = {
      d: f?.d || new Map(),
      v: n
    };
    if (i && k(e, r, i, t), _(f, r) && f.d === r.d) return f;
    if (y(f) && y(r) && v(f, r)) {
      if (f.d === r.d) return f;
      r.v = f.v;
    }
    s(e, r);
    return r;
  };
  let E = (e, n, i, f) => {
    if (m(n)) {
      let r;
      let o = () => {
        let n = a(e);
        if (!y(n) || n.v !== u) return;
        let f = S(e, u, i);
        t.has(e) && n.d !== f.d && M(e, f, n.d);
      };
      let u = new Promise((e, i) => {
        let t = !1;
        n.then(n => {
          t || (t = !0, p(u, n), e(n), o());
        }, e => {
          t || (t = !0, g(u, e), i(e), o());
        });
        r = n => {
          t || (t = !0, n.then(e => p(u, e), e => g(u, e)), e(n));
        };
      });
      u.orig = n;
      u.status = "pending";
      c(u, e => {
        e && r(e);
        f?.();
      });
      return S(e, u, i, !0);
    }
    return S(e, n, i);
  };
  let x = (e, n, i) => {
    let t = a(e);
    let f = {
      d: t?.d || new Map(),
      e: n
    };
    return (i && k(e, f, i), b(t, f) && t.d === f.d) ? t : (s(e, f), f);
  };
  let C = (e, n) => {
    let i;
    let f;
    let r = a(e);
    if (!n && r && (t.has(e) || Array.from(r.d).every(([n, i]) => {
      if (n === e) return !0;
      let t = C(n);
      return t === i || _(t, i);
    }))) return r;
    let o = new Map();
    let s = !0;
    try {
      let n = e.read(n => {
        if (u(e, n)) {
          let e = a(n);
          if (e) {
            o.set(n, e);
            return w(e);
          }
          if (l(n)) {
            o.set(n, void 0);
            return n.init;
          }
          throw Error("no atom init");
        }
        let i = C(n);
        o.set(n, i);
        return w(i);
      }, {
        get signal() {
          i || (i = new AbortController());
          return i.signal;
        },
        get setSelf() {
          d(e) || console.warn("setSelf function cannot be used with read-only atom");
          !f && d(e) && (f = (...n) => {
            if (s && console.warn("setSelf function cannot be called in sync"), !s) return L(e, ...n);
          });
          return f;
        }
      });
      return E(e, n, o, () => i?.abort());
    } catch (n) {
      return x(e, n, o);
    } finally {
      s = !1;
    }
  };
  let T = e => {
    let n = e => {
      var n;
      var i;
      let f = new Set(null == (n = t.get(e)) ? void 0 : n.t);
      r.get(e) || i[1].forEach(e => {
        f.add(e);
      });
      return f;
    };
    let i = [];
    let f = new Set();
    let o = e => {
      if (!f.has(e)) {
        for (let i of (f.add(e), n(e))) e !== i && o(i);
        i.push(e);
      }
    };
    o(e);
    let u = new Set([e]);
    for (let e = i.length - 1; e >= 0; --e) {
      let n = i[e];
      let t = a(n);
      if (!t) continue;
      let f = !1;
      for (let e of t.d.keys()) if (e !== n && u.has(e)) {
        f = !0;
        break;
      }
      f && !_(t, C(n, !0)) && u.add(n);
    }
  };
  let P = (n, ...i) => n.write(e => w(C(e)), (i, ...t) => {
    let r;
    let o = f.length > 0;
    if (o || f.push(new Set([i])), u(n, i)) {
      if (!l(i)) throw Error("atom not writable");
      _(a(i), E(i, t[0])) || T(i);
    } else r = P(i, ...t);
    if (!o) {
      let n = R(f.pop());
      e.forEach(e => e({
        type: "async-write",
        flushed: n
      }));
    }
    return r;
  }, ...i);
  let L = (n, ...i) => {
    f.push(new Set([n]));
    let t = P(n, ...i);
    let r = R(f.pop());
    e.forEach(e => e({
      type: "write",
      flushed: r
    }));
    return t;
  };
  let N = (e, i, f) => {
    var r;
    let o = t.get(e);
    if (o) {
      i && o.t.add(i);
      return o;
    }
    let u = f || [];
    a(e) || r.d.forEach((n, i) => {
      i !== e && N(i, e, u);
    });
    C(e);
    let l = {
      t: new Set(i && [i]),
      l: new Set()
    };
    if (t.set(e, l), n.add(e), d(e) && e.onMount) {
      let {
        onMount
      } = e;
      u.push(() => {
        let i = onMount((...n) => L(e, ...n));
        i && (l.u = i);
      });
    }
    f || u.forEach(e => e());
    return l;
  };
  let O = (e, n) => !n.l.size && (!n.t.size || 1 === n.t.size && n.t.has(e));
  let A = (e, i) => {
    if (!O(e, i)) return;
    let f = i.u;
    f && f();
    t.$$delete(e);
    n.$$delete(e);
    let r = a(e);
    r ? (y(r) && h(r.v), r.d.forEach((n, i) => {
      if (i !== e) {
        let n = t.get(i);
        n && (n.t.$$delete(e), A(i, n));
      }
    })) : console.warn("[Bug] could not find atom state to unmount", e);
  };
  let M = (e, n, i) => {
    let f = new Set(n.d.keys());
    let r = new Set();
    i?.forEach((n, i) => {
      if (f.has(i)) {
        f.$$delete(i);
        return;
      }
      r.add(i);
      let a = t.get(i);
      a && a.t.$$delete(e);
    });
    f.forEach(n => {
      N(n, e);
    });
    r.forEach(e => {
      let n = t.get(e);
      n && A(e, n);
    });
  };
  let R = e => {
    let n;
    n = new Set();
    let i = [];
    let f = e => {
      var n;
      if (!r.has(e)) return;
      let [t, o] = r.get(e);
      r.$$delete(e);
      i.push([e, t]);
      o.forEach(f);
      a(e) || n.d.forEach((e, n) => f(n));
    };
    e.forEach(f);
    i.forEach(([e, i]) => {
      let f = a(e);
      if (!f) {
        console.warn("[Bug] no atom state to flush");
        return;
      }
      if (f !== i) {
        let r = t.get(e);
        r && f.d !== i?.d && M(e, f, i?.d);
        r && !(!y(i) && (_(i, f) || b(i, f))) && (r.l.forEach(e => e()), n.add(e));
      }
    });
    return n;
  };
  return {
    get: e => w(C(e)),
    set: L,
    sub: (n, i) => {
      let t = N(n);
      let f = R([n]);
      let r = t.l;
      r.add(i);
      e.forEach(e => e({
        type: "sub",
        flushed: f
      }));
      return () => {
        r.$$delete(i);
        A(n, t);
        e.forEach(e => e({
          type: "unsub"
        }));
      };
    },
    dev_subscribe_store: (n, i) => {
      if (2 !== i) throw Error("The current StoreListener revision is 2.");
      e.add(n);
      return () => {
        e.$$delete(n);
      };
    },
    dev_get_mounted_atoms: () => n.values(),
    dev_get_atom_state: e => i.get(e),
    dev_get_mounted: e => t.get(e),
    dev_restore_atoms: n => {
      for (let [e, i] of (f.push(new Set()), n)) l(e) && (E(e, i), T(e));
      let i = R(f.pop());
      e.forEach(e => e({
        type: "restore",
        flushed: i
      }));
    }
  };
};
let getDefaultStore = () => (t || (t = createStore(), globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = t), globalThis.__JOTAI_DEFAULT_STORE__ !== t && console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044")), t);
export const eU = atom;
export const y$ = createStore;
export const zp = getDefaultStore;
