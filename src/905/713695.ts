import { eU, yu, Iz, zl, LJ, md } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { observableState } from "../905/441145";
import { E as _$$E } from "../vendor/386379";
import { atom } from "jotai";
import { j as _$$j } from "../905/745286";
import { x1 } from "../905/714362";
import { ET, F5, j5, ub } from "../905/284406";
import { AT, q6 } from "../905/155604";
import { _ as _$$_ } from "../vendor/413384";
import { wm } from "../vendor/284502";
import { atomWithObservable } from "../vendor/812047";
import { throwTypeError } from "../figma_app/465776";
import { resourceUtils } from "../905/989992";
import { jM, ht, Ay } from "../vendor/159563";
import { g as _$$g } from "../905/880308";
import { p as _$$p } from "../905/621429";
import { W as _$$W } from "../905/491061";
import { $ as _$$$ } from "../vendor/148711";
import { S8, NU, wQ } from "../905/893701";
import { Lg } from "../figma_app/257275";
import { N7 } from "../905/80725";
import { H as _$$H, aX } from "../905/16369";
import { z as _$$z } from "../vendor/825643";
import V from "../vendor/181640";
import { V$ } from "../figma_app/804490";
import { shouldSampleRequest, XHR } from "../905/910117";
import { g as _$$g2 } from "../905/346780";
import { sx } from "../905/449184";
import { BO, rI } from "../905/485103";
import { T as _$$T } from "../905/912096";
import { bt } from "../905/270322";
import { M as _$$M } from "../905/155850";
import { Y as _$$Y } from "../905/493958";
import { T as _$$T2 } from "../905/239398";
import { p as _$$p2 } from "../905/844455";
import { useEffect, useMemo } from "react";
import { IT } from "../figma_app/566371";
let l = atom(new _$$E());
class m extends Error {
  constructor(e) {
    super();
    this.message = e;
    this.name = "ObjectNotFoundError";
  }
}
async function h(e, t, i, n, r) {
  let a = n.policy || "cacheFirst";
  let s = !!r?.enabled;
  if ("cacheFirst" === a && !s) {
    let n = e.get(t.atom(i));
    if (n === ET) {
      let e = AT(t.objectDef)?.uniqueName;
      throw new m(`Object ${e}:${i} not found`);
    }
    if (n !== F5) return n;
  }
  let o = await t.fetchObject(i);
  if (null == o) {
    let e = AT(t.objectDef)?.uniqueName;
    throw new m(`Object ${e}:${i} not found`);
  }
  t.remoteUpdate({
    [i]: o
  });
  return o;
}
async function g() {
  await 0;
}
async function f(e, t, i, n = {}, r) {
  let a;
  if ("write" in i) {
    let s = e.sub(i, () => {});
    let o = n.policy || "cacheFirst";
    let l = !!r?.enabled;
    "networkOnly" === o || l ? await t.fetchQuery({
      queryKey: i.queryKey,
      queryFn: i.queryFn,
      staleTime: 0
    }) : await t.fetchQuery({
      queryKey: i.queryKey,
      queryFn: i.queryFn,
      staleTime: 1 / 0
    });
    await g();
    a = Promise.resolve(e.get(i));
    s();
  } else {
    if (n.policy) throw Error("Not implemented! Please reach out to #a-frontend-platform");
    a = new Promise((t, n) => {
      let r = e.get(i);
      if ("loading" !== r.status) {
        t(r);
        return;
      }
      let a = setTimeout(() => {
        s();
        n(Error("fetchQuery timed out"));
      }, 5e3);
      let s = e.sub(i, () => {
        let n = e.get(i);
        "loading" !== n.status && (clearTimeout(a), s(), t(n));
      });
    });
  }
  let s = await a;
  if ("loading" === s.status || "disabled" === s.status) {
    x1("LiveStore", `fetchQuery encountered "${s.status}" status`, {}, {
      reportAsSentryError: !0
    });
    return Error(`fetchQuery encountered "${s.status}" status`);
  }
  if ("errors" !== s.status) return s.data;
  throw s.errors;
}
function b(e, t, i, n) {
  let r = atom(() => new WeakMap());
  let a = atom(0);
  let s = Symbol();
  let l = atom(n => {
    n(a);
    let o = t(n);
    let l = e(n);
    let d = n(r);
    let c = d.get(o);
    c ? (c[s] = !0, c.setOptions(l, {
      listeners: !1
    }), delete c[s]) : (c = i(o, l), d.set(o, c));
    return c;
  });
  let d = atom(e => {
    let t = e(l);
    let i = {
      subscribe: e => {
        let i = i => {
          let n = () => e.next(i);
          t[s] ? Promise.resolve().then(n) : n();
        };
        let n = t.subscribe(i);
        i(t.getCurrentResult());
        return {
          unsubscribe: n
        };
      }
    };
    return atomWithObservable(() => i, {
      initialValue: t.getCurrentResult()
    });
  });
  let c = atom(e => {
    let t = e(d);
    return e(t);
  }, (e, i, s) => {
    let o = e(l);
    let d = t(e);
    return n(s, o, () => {
      e(r).$$delete(d);
      i(a, e => e + 1);
    }, d);
  });
  let u = atom(t => {
    e(t);
    let i = t(l);
    let n = {
      subscribe: e => {
        let t = t => {
          if (t.isSuccess && void 0 !== t.data || t.isError && !wm(t.error)) {
            let n = () => e.next(t);
            i[s] ? Promise.resolve().then(n) : n();
          }
        };
        let n = i.subscribe(t);
        t(i.getCurrentResult());
        return {
          unsubscribe: n
        };
      }
    };
    return atomWithObservable(() => n);
  });
  let p = e => {
    if (e.error) throw e.error;
    return e.data;
  };
  return [atom(e => {
    let t = e(u);
    let i = e(t);
    return i instanceof Promise ? i.then(p) : p(i);
  }, (e, t, i) => t(c, i)), c];
}
let E = 0;
class S {
  constructor(e) {
    this.processBatch = e;
    this.batchedOperations = [];
  }
  enqueue(e) {
    this.batchedOperations.push(e);
    Promise.resolve().then(() => {
      this.processBatch(this.batchedOperations);
      this.batchedOperations = [];
    });
  }
}
class w {
  constructor(e) {
    this.stores = e;
    this.resolutions = [];
    let t = new S(e => this.processBatch(e));
    for (let i of (_$$j(this), Object.keys(e))) {
      let n = new C(e[i], t);
      this[i] = n;
    }
  }
  processBatch(e) {
    let t = {};
    for (let i of e) {
      let e = AT(i.store.objectDef).uniqueName;
      t[e] = t[e] || [];
      t[e].push(i);
    }
    for (let [e, i] of Object.entries(t)) {
      let t = this.stores[e];
      let n = {};
      for (let e of i) {
        n[e.id] = n[e.id] || [];
        n[e.id].push(e);
      }
      this.resolutions.push(t.optimisticUpdate(n));
    }
  }
  registerPromise(e) {
    e.then(() => {
      for (let e of this.resolutions) e("COMMIT");
      this.resolutions = [];
    }).catch(e => {
      for (let e of this.resolutions) e("REJECT");
      this.resolutions = [];
    });
  }
}
class C {
  constructor(e, t) {
    this.store = e;
    this.batch = t;
    this.update = (e, t) => {
      this.batch.enqueue({
        type: "UPDATE",
        id: e,
        update: e => "function" == typeof t ? jM(e, e => {
          t(e);
        }) : e,
        store: this.store
      });
    };
    this.create = () => {
      throw Error("Not implemented");
    };
    this.$$delete = e => {
      throw Error("Not implemented");
    };
  }
}
class k {
  constructor(e) {
    this.client = e;
    this.invalidations = new Set();
    this.changes = new Set();
    this.registerPromise = e => {
      e.then(() => {
        this.invalidate();
      }).catch(e => {
        this.revert();
      }).$$finally(() => {
        this.changes.clear();
      });
    };
  }
  mutate(e, t) {
    let i;
    let n = this.client.getQueryData(e.queryKey);
    let r = this.client.getQueryState(e.queryKey);
    if (!n) {
      r?.fetchStatus === "fetching" && this.invalidations.add({
        query: e,
        queryState: r
      });
      return;
    }
    let a = _$$g();
    "function" == typeof t ? (ht(!1), i = jM(n, e => t(e)), ht(!0)) : i = t;
    Object.assign(i, {
      _version: a
    });
    Object.defineProperty(i, "_version", {
      enumerable: !1
    });
    this.client.setQueryData(e.queryKey, i);
    this.changes.add({
      query: e,
      version: a,
      queryState: r,
      rollback: {
        ...n
      }
    });
  }
  revert() {
    [...this.changes].reverse().forEach(e => {
      this.client.setQueryData(e.query.queryKey, t => "_version" in t && t._version === e.version ? e.rollback : t);
    });
  }
  refetch(e) {
    return this.client.invalidateQueries(e.queryKey);
  }
  invalidate() {
    [...this.changes.values(), ...this.invalidations.values()].filter(e => e.queryState?.fetchStatus === "fetching").forEach(e => {
      let t = this.client.getQueryState(e.query.queryKey);
      t?.fetchStatus === "fetching" && this.client.cancelQueries(e.query.queryKey);
      this.client.invalidateQueries(e.query.queryKey);
    });
  }
}
function D(e, t, i, n) {
  e[t] || (e[t] = {});
  e[t][i] || (e[t][i] = n);
}
function L(e, t, i, r, a) {
  var s;
  let o;
  let l;
  let d = eU(null);
  let c = eU(0);
  s = () => {
    r.set(c, e => e + 1);
  };
  o = 0;
  l = !1;
  let u = () => {
    1 == ++o && Promise.resolve().then(() => {
      l && s();
      o = 0;
      l = !1;
    });
    o <= 3 ? s() : l = !0;
  };
  let p = new Map();
  let m = new Map();
  let h = e => {
    let [n, s] = function (e, t) {
      t.zodSchema.safeParse(e).success;
      let {
        entities,
        result
      } = S8(e, t.normalizrSchema);
      return [entities, result];
    }(e, t);
    r.set(d, s);
    (function (e, t, i, n, r) {
      for (let a in e) {
        let s = e[a];
        if (!s) continue;
        let o = i[a];
        for (let e of Object.keys(s)) if (!t.get(`${a}-${e}`)) {
          let i = n.sub(o.atom(e), r);
          i && t.set(`${a}-${e}`, i);
        }
      }
    })(F(s, t.normalizrSchema, i, r, {
      hydrate: !1
    }), m, i, r, u);
    (function (e, t) {
      for (let i in e) t[i].remoteUpdate(e[i]);
    })(n, i);
    a && function (e, t, i) {
      for (let n in e) {
        if (!e[n]) continue;
        let r = i[n];
        for (let [i, a] of Object.entries(e[n])) if (!t.get(`${n}-${i}`)) {
          let e = r.syncObject?.(a, i, r);
          e && t.set(`${n}-${i}`, e);
        }
      }
    }(n, p, i);
  };
  return yu(eU(e => {
    let n = e(d);
    if (e(c), !n) return;
    let a = F(n, t.normalizrSchema, i, r);
    return NU(n, t.normalizrSchema, a);
  }, (t, i, n) => {
    if ("REMOTE_UPDATE" !== n.type) return i(e, n);
    h(n.data);
  }), () => {
    let t = () => {
      let t = r.get(e);
      t && h(t);
    };
    let i = r.sub(e, t);
    t();
    return () => {
      for (let e of (i(), p.values())) e();
      for (let e of m.values()) e();
      p.clear();
      m.clear();
    };
  });
}
function F(e, t, i, n, {
  hydrate: r = !0
} = {}, a = {}) {
  if (null == e) return a;
  if (t instanceof wQ.Entity) {
    let s = i[t.key];
    if (e) {
      let i = s.atom(e);
      let o = r ? n.get(i) : null;
      o === F5 ? D(a, t.key, e, null) : o === ET ? D(a, t.key, e, null) : D(a, t.key, e, o);
    }
  } else if (t instanceof wQ.Array) for (let s of e) F(s, t.schema, i, n, {
    hydrate: r
  }, a);else if (t instanceof wQ.Object) for (let s in t.schema) F(e[s], t.schema[s], i, n, {
    hydrate: r
  }, a);
  return a;
}
class G {
  constructor(e, t = {}, i = new Set()) {
    this._reporter = null;
    this.uniqueQueryKeys = new Set();
    this.registerQueryAtomFamily = e => {
      this._queryAtomFamilies.add(e);
    };
    this._atomStore = e;
    this._queryClient = this.createQueryClient();
    this._objectStores = this.buildStores(t);
    this._queryAtomFamilies = i;
  }
  set gremlinConfig(e) {
    this._gremlinConfig = e;
  }
  createQueryClient() {
    return new _$$E({
      defaultOptions: {
        queries: {
          retry: !1,
          networkMode: "always",
          structuralSharing: !1,
          refetchOnWindowFocus: !1
        }
      }
    });
  }
  get gremlinConfig() {
    return this._gremlinConfig;
  }
  buildStores(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let n = e[i];
      let {
        uniqueName
      } = AT(n.objectDef);
      if (i !== uniqueName) throw Error(`Mismatched type name for object def ${i} vs. ${uniqueName}}`);
      t[i] = n;
    }
    return t;
  }
  get queryAtomFamilies() {
    return this._queryAtomFamilies;
  }
  set queryAtomFamilies(e) {
    this._queryAtomFamilies = e;
  }
  get atomStore() {
    return this._atomStore;
  }
  set atomStore(e) {
    this._atomStore = e;
  }
  get objectStores() {
    return this._objectStores;
  }
  get reporter() {
    return this._reporter;
  }
  set reporter(e) {
    this._reporter = e;
  }
  get queryClient() {
    return this._queryClient;
  }
  set queryClient(e) {
    this._queryClient = e;
  }
}
class z {
  constructor(e, t = () => ({}), i) {
    var r;
    var a;
    var s;
    var o;
    var d;
    this.extrasProvider = t;
    this.getQueryContext = () => this.queryProviderContext;
    this.Query = (r = this.extrasProvider, a = this.getQueryContext, e => function (e, t, i) {
      if (e.key && i().uniqueQueryKeys.add(e.key), void 0 !== e.refetchIntervalMs && e.refetchIntervalMs < 1e3) throw Error(`\u26D4\uFE0F Whoa there! You're trying to poll a query every ${e.refetchIntervalMs}ms -- that's probably much faster than you actually want. Please use a value of at least 1000ms, or reach out to #a-frontend-platform if you have a different use case.`);
      let r = Iz(a => {
        let s = t();
        let o = [++E];
        let d = !e.enabled || e.enabled(a);
        let c = new _$$W(() => zl.sub(w, () => {}));
        let m = async () => {
          Lg() || (await _$$p());
          let t = e.fetch(a, s);
          let n = e.key ? i().reporter?.reportQueryRequested(e.key) : null;
          t.then(() => {
            n?.("success");
            c.resolve();
          }).catch(e => {
            n?.("error");
            c.reject(e);
          });
          return t;
        };
        let [, h] = function (e, t = e => e(l)) {
          return b(e, t, (e, t) => new _$$$(e, t), async (e, t, i) => {
            if ("refetch" === e.type) {
              await _$$p();
              return t.refetch({
                cancelRefetch: !1
              });
            }
            throwTypeError(e.type);
          });
        }(t => ({
          queryKey: o,
          queryFn: m,
          refetchInterval: e.refetchIntervalMs,
          refetchIntervalInBackground: !1,
          enabled: d,
          staleTime: 1 / 0,
          cacheTime: 1 / 0
        }));
        let g = e.stalenessPolicy || "onUnmount";
        let f = e.gcPolicy || "default";
        h = yu(h, ({
          setSelf: e
        }) => ("onUnmount" === g && d && e({
          type: "refetch"
        }), () => {
          "onUnmount" === g && i().queryClient.invalidateQueries({
            queryKey: o,
            exact: !0,
            refetchType: "none"
          });
          "onUnmount" === f && (i().queryClient.removeQueries({
            queryKey: o,
            exact: !0
          }), r.setShouldRemove((e, t) => t === a), r.setShouldRemove(null));
        }));
        let _ = eU(e => e(h).data, (e, t, n) => {
          if ("REMOTE_UPDATE" !== n.type) return t(h, n);
          i().queryClient.setQueryData(o, n.data);
        });
        let A = i().objectStores;
        let y = e.schema && q6(e.schema, j5(A));
        if (y?.requiresNormalization && (_ = L(_, y, A, zl, !!e.syncObjects)), e.sync) {
          let t = _;
          _ = yu(t, () => e.sync(a, {
            ...s,
            mutate: e => {
              let i = Ay(zl.get(t), t => {
                void 0 !== t && e(t);
              });
              void 0 !== i && zl.set(t, {
                type: "REMOTE_UPDATE",
                data: i
              });
            }
          }));
        }
        let S = LJ(_, t => {
          let {
            output
          } = e;
          let n = t(_);
          return output ? void 0 === n ? void 0 : output({
            data: n,
            get: t,
            args: a
          }, s) : n;
        });
        let w = LJ(S, e => function (e, t, i, n) {
          let r = e(i);
          if (!n.enabled) return resourceUtils.disabledSuspendable(n.suspenseContext);
          let a = e(t);
          switch (r.status) {
            case "loading":
              return resourceUtils.loadingSuspendable(n.suspenseContext);
            case "error":
              return resourceUtils.errorSuspendable(r.error, n.suspenseContext);
            case "success":
              if (void 0 === a) return resourceUtils.loadingSuspendable(n.suspenseContext);
              return resourceUtils.loadedSuspendable(a, r.error || [], n.suspenseContext);
            default:
              throwTypeError(r);
          }
        }(e, S, h, {
          enabled: d,
          suspenseContext: c
        }));
        return Object.assign(w, {
          queryKey: o,
          queryFn: m,
          __OPAQUE_RQ_QUERY__: _$$H
        });
      }, N7);
      return e => (i().registerQueryAtomFamily(r), r(e));
    }(e, r, a));
    this.PaginatedQuery = (s = this.extrasProvider, o = this.getQueryContext, e => function (e, t, i) {
      let r = Iz(r => {
        let a = t();
        let s = [++E];
        let o = !e.enabled || e.enabled(r);
        let [, d] = function (e, t = e => e(l)) {
          return b(e, t, (e, t) => new _$$z(e, t), (e, t, i, n) => {
            if ("refetch" === e.type) return t.refetch({
              refetchPage: (e, t) => 0 === t
            }).then(e => (n.setQueryData(t.options.queryKey, e => e ? {
              pages: e.pages.slice(0, 1),
              pageParams: e.pageParams.slice(0, 1)
            } : e), e));
            if ("refetch__UNUSED" === e.type) return t.refetch(e.options);
            if ("fetchNextPage" === e.type) {
              let i = V(e.options || {}, {
                cancelRefetch: !1
              });
              return t.fetchNextPage(i);
            }
            if ("fetchPreviousPage" === e.type) {
              let i = V(e.options || {}, {
                cancelRefetch: !1
              });
              return t.fetchPreviousPage(i);
            }
            throwTypeError(e);
          });
        }(t => ({
          queryKey: s,
          queryFn: async t => {
            Lg() || (await _$$p());
            let i = {
              pageParam: t.pageParam,
              ...a
            };
            return await e.fetch(r, i);
          },
          getNextPageParam: e => e.nextPage,
          getPreviousPageParam: e => e.prevPage,
          enabled: o,
          staleTime: 1 / 0
        }));
        d = yu(d, ({
          setSelf: e
        }) => {
          o && e({
            type: "refetch"
          });
        });
        let c = [];
        let m = eU(e => {
          let t = e(d).data?.pages || [];
          let i = t?.map((e, t) => (c[t] || (c[t] = eU(e => e(d).data?.pages[t]?.data, () => {})), c[t]));
          c.length > t.length && c.splice(t.length, c.length - t.length);
          return i;
        }, (e, t, n) => {
          if ("REMOTE_UPDATE" !== n.type) return t(d, n);
          i().queryClient.setQueryData(s, e => ({
            pages: n.data,
            pageParams: e?.pageParams || []
          }));
        });
        let h = i().objectStores;
        let g = e.schema && q6(e.schema, j5(h));
        if (g?.requiresNormalization) {
          let t = new WeakMap();
          let i = m;
          m = eU(r => r(i).map(i => (t.get(i) || t.set(i, L(i, g, h, zl, !!e.syncObjects)), t.get(i))), (e, t, r) => {
            if ("REMOTE_UPDATE" !== r.type) return t(i, r);
            r.data.map((e, t) => {
              let i = zl.get(m)[t];
              if (i) zl.set(i, {
                type: "REMOTE_UPDATE",
                data: e
              });else throw Error(`No pageDataAtom found for index ${t}`);
            });
          });
        }
        let f = e.sync;
        if (f) {
          let e = m;
          m = yu(e, () => f(r, {
            ...a,
            mutate: t => {
              let i = zl.get(e).map(e => zl.get(e));
              if (i.some(e => void 0 === e)) {
                console.warn("Skipping sync mutation because some page data is undefined");
                return;
              }
              let r = Ay(i, e => {
                t(e);
              });
              if (r.length !== i.length) throw Error("Cannot add/delete pages in paginated query mutation");
              zl.set(e, {
                type: "REMOTE_UPDATE",
                data: r
              });
            }
          }));
        }
        let _ = LJ(m, t => {
          let i = t(m).map(e => t(e)).filter(e => void 0 !== e);
          let n = t(d).data?.pages;
          let r = i.map((e, t) => ({
            data: e,
            nextPage: n?.[t]?.nextPage,
            prevPage: n?.[t]?.prevPage
          }));
          return e.joinPages ? e.joinPages(r) : function (e) {
            let t = [];
            e.forEach(e => {
              if (!Array.isArray(e.data)) throw Error("Expected array data in page");
              t.push(...e.data);
            });
            return t;
          }(r);
        });
        let A = LJ(m, t => {
          let {
            output
          } = e;
          let n = t(_);
          return output ? void 0 === n ? void 0 : output({
            data: n,
            get: t,
            args: r
          }, a) : n;
        });
        return Object.assign(LJ(A, e => function (e, t, i, n) {
          let r = e(i);
          if (!n.enabled) return resourceUtils.Paginated.disabled();
          let a = e(t);
          switch (r.status) {
            case "loading":
            default:
              return resourceUtils.Paginated.loading();
            case "error":
              return resourceUtils.Paginated.error(r.error);
            case "success":
              if (void 0 === a) return resourceUtils.Paginated.loading();
              return resourceUtils.Paginated.loaded(a, {
                hasNextPage: r.hasNextPage,
                hasPreviousPage: r.hasPreviousPage,
                isFetchingNextPage: r.isFetchingNextPage,
                isFetchingPreviousPage: r.isFetchingPreviousPage
              }, r.error || []);
          }
        }(e, A, d, {
          enabled: o
        })), {
          queryKey: s,
          __OPAQUE_RQ_PAGINATED_QUERY__: aX
        });
      }, N7);
      return e => r(e);
    }(e, s, o));
    this.Mutation = function (e, t) {
      return i => {
        let n = [++E];
        let [r, a] = function (e, t = e => e(l)) {
          return b(e, t, (e, t) => new _$$_(e, t), (e, t) => t.mutate(...e));
        }(r => ({
          mutationKey: n,
          mutationFn: async n => {
            let r = e();
            let a = new k(t().queryClient);
            let s = new w(t().objectStores);
            try {
              let e = i(n, {
                query: a,
                objects: s,
                ...r
              });
              let t = e instanceof Promise ? e : Promise.resolve(e);
              a.registerPromise(t);
              s.registerPromise(t);
              return await t;
            } catch (e) {
              throw Error(e);
            }
          }
        }));
        return a;
      };
    }(this.extrasProvider, this.getQueryContext);
    this.ObjectQuery = (d = this.getQueryContext, e => Iz(t => {
      if (!t) return eU(resourceUtils.disabled(), () => {});
      let i = yu(e.atom(t), () => {
        let i = d();
        i.atomStore.get(e.atom(t)) === F5 && h(i.atomStore, e, t, {
          policy: "networkOnly"
        }, i.gremlinConfig);
      });
      return eU(n => function (e, t, i) {
        switch (t) {
          case F5:
            return resourceUtils.loading();
          case ET:
            return resourceUtils.error(Error(`Encountered a tombstoned object: ${e} ${i.objectDef.description}}`));
          case null:
            return resourceUtils.loading();
          default:
            return resourceUtils.loaded(t);
        }
      }(t, n(i), e), (i, n, r) => {
        let a = d();
        if ("refetch" === r.type) return h(a.atomStore, e, t, {
          policy: "networkOnly"
        }, a.gremlinConfig);
      });
    }));
    this.gremlinConfig = void 0;
    this.getMutation = e => t => this.queryProviderContext.atomStore.get(e).mutate(t);
    this.fetch = (e, t = {}) => f(this.getQueryContext().atomStore, this.queryProviderContext.queryClient, e, t);
    this.getCachedData = e => function (e, t) {
      let i = e.get(t);
      return "loaded" !== i.status ? null : i.data;
    }(this.getQueryContext().atomStore, e);
    this.queryProviderContext = new G(e, i);
    e.set(l, this.queryProviderContext.queryClient);
    this._attachAPIs(this.queryProviderContext.objectStores);
  }
  setMetricsReporter(e) {
    this.queryProviderContext.reporter = e;
  }
  _attachAPIs(e) {
    for (let t in _$$j(this), e) {
      let i = e[t];
      this[`fetch${t}`] = async (e, t = {}) => {
        let n = this.getQueryContext().atomStore;
        return await h(n, i, e, t, this.gremlinConfig);
      };
      this[`readCached${t}`] = e => function (e, t, i) {
        let n = e.get(t.atom(i));
        return n === F5 || n === ET ? null : n;
      }(this.getQueryContext().atomStore, i, e);
      this[`useCached${t}`] = function (e) {
        return md(i.atom(e));
      };
    }
  }
  extend(e) {
    return Object.assign(this, e(this));
  }
  setGremlinConfig(e) {
    this.gremlinConfig = e;
  }
}
let X = {
  QUERY_FINISHED: "web.livestore.query.finished"
};
let Q = {
  QUERY_REQUESTED: "web.livestore.query.requested",
  QUERY_STUCK: "web.livestore.query.stuck"
};
class J {
  finish = () => (this.finished && x1("LiveStore metrics", "Timer already finished"), this._timerId && clearTimeout(this._timerId), this.finished = !0, document.removeEventListener("visibilitychange", this.onVisibilityChange), Math.round(performance.now() - this._startTime));
  onVisibilityChange = () => {
    "hidden" === document.visibilityState && (this.backgrounded = !0);
  };
  constructor(e = {}, t) {
    this._startTime = performance.now();
    this._timerId = null;
    this.metadata = null;
    this.finished = !1;
    this.backgrounded = !1;
    this.backgrounded = "hidden" === document.visibilityState;
    if (document.addEventListener("visibilitychange", this.onVisibilityChange), t && (this.metadata = t), e.onTimeout) {
      if (!e.timeoutMs) throw Error("onTimeout specified without timeoutMs");
      this._timerId = setTimeout(() => {
        e.onTimeout(this.backgrounded);
      }, e.timeoutMs);
    }
  }
}
let ee = bt(e => e.currentUserOrgId);
let et = new class {
  constructor() {
    this.batchedCustomEvents = [];
    this.batchedNumericEvents = [];
    this.onVisibilityChange = async () => {
      "hidden" === document.visibilityState && (await this.sendBatchedEvents());
    };
    this._currentlySendingBatchedEvents = !1;
    this.sendBatchedEvents = async () => {
      if (this._currentlySendingBatchedEvents) return;
      this._currentlySendingBatchedEvents = !0;
      let e = this.batchedCustomEvents;
      let t = this.batchedNumericEvents;
      this.batchedCustomEvents = [];
      this.batchedNumericEvents = [];
      try {
        await Promise.all([BO(e), rI(t)]);
      } catch (e) {
        console.error(e);
      }
      this._currentlySendingBatchedEvents = !1;
    };
    this.reportCustomEvent = (e, t = {}) => {
      this.batchedCustomEvents.push({
        metric: e,
        tags: {
          ...t,
          ...this.getDefaultTags()
        }
      });
    };
    this.reportNumericEvent = (e, t, i = {}) => {
      this.batchedNumericEvents.push({
        metric: e,
        value: t,
        tags: {
          ...i,
          ...this.getDefaultTags()
        }
      });
    };
    document.addEventListener("visibilitychange", this.onVisibilityChange);
    window.addEventListener("pagehide", this.sendBatchedEvents);
    this.sendBatchedEventsInterval = setInterval(this.sendBatchedEvents, 5e3);
  }
  flushBatchForTests() {
    this.sendBatchedEvents();
  }
  async cleanup() {
    document.removeEventListener("visibilitychange", this.onVisibilityChange);
    window.removeEventListener("pagehide", this.sendBatchedEvents);
    clearInterval(this.sendBatchedEventsInterval);
    await _$$g2();
  }
  getDefaultTags() {
    return {
      client_visibility: document.visibilityState,
      user_plan_max: _$$T() || ""
    };
  }
  getFigmentTags() {
    return {
      currentOrgId: zl.get(ee) || "",
      source: "livestore",
      ...this.getDefaultTags()
    };
  }
  reportQueryRequested(e) {
    this.reportCustomEvent(Q.QUERY_REQUESTED, {
      query_key: e
    });
    let t = new J({
      onTimeout: t => {
        navigator.onLine && (this.reportCustomEvent(Q.QUERY_STUCK, {
          query_key: e,
          backgrounded: String(t)
        }), shouldSampleRequest(1e4) && sx("web_async_request_stuck", {
          queryKey: e,
          backgrounded: String(t),
          ...this.getFigmentTags()
        }, {
          batchRequest: !0
        }));
      },
      timeoutMs: 1e4
    });
    return i => {
      let n = t.finish();
      this.reportNumericEvent(X.QUERY_FINISHED, n, {
        query_key: e,
        backgrounded: String(t.backgrounded),
        success: String("success" === i)
      });
      shouldSampleRequest(n) && sx("web_async_request", {
        queryKey: e,
        latencyms: n,
        backgrounded: String(t.backgrounded),
        success: "success" === i,
        ...this.getFigmentTags()
      }, {
        batchRequest: !0
      });
    };
  }
}();
let el = {
  File: _$$M(() => debugState, () => V$),
  Repo: _$$T2(() => debugState, () => V$),
  Folder: _$$Y(() => debugState, () => V$),
  Team: _$$p2(() => debugState, () => V$)
};
let ed = function (e, t = () => ({}), i) {
  return new z(e, t, i);
}(zl, function () {
  return {
    atomStore: zl,
    xr: XHR,
    realtimeClient: V$,
    livegraphClient: observableState.get(),
    reduxStore: debugState
  };
}, el).extend((e => t => {
  function i(e) {
    let i = t.ObjectQuery(e);
    return {
      useValue: e => {
        let t = i(e);
        let [n] = IT(t);
        return n;
      }
    };
  }
  return {
    File: i(e.File),
    Folder: i(e.Folder),
    Team: i(e.Team)
  };
})(el));
ed.setMetricsReporter(et);
export let $$ec0 = Object.assign(ed, {
  useFile: e => function (e, t) {
    let i = t.useCachedFile(e || "");
    useEffect(() => {
      e && F5;
    }, [i, e, t]);
    return useMemo(() => {
      let e = ub(i);
      return e ? resourceUtils.loaded(e) : resourceUtils.loading();
    }, [i]);
  }(e, ed)
});
export { gY, IT } from "../figma_app/566371";
export const M4 = $$ec0;