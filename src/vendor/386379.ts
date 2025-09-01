import { pl, lQ, j3, jY, F$, b_, MK, nJ, vh, Zw, Od, Cp } from "../vendor/348210";
import { U } from "../vendor/150351";
import { j } from "../vendor/637177";
import { wm, II, v_ } from "../vendor/284502";
import { k } from "../vendor/38262";
import { Q } from "../vendor/166452";
import { s as _$$s } from "../vendor/405198";
import { m as _$$m } from "../vendor/338690";
import { t } from "../vendor/882463";
import { PL } from "../vendor/546363";
class d extends k {
  constructor(e) {
    super();
    this.abortSignalConsumed = !1;
    this.defaultOptions = e.defaultOptions;
    this.setOptions(e.options);
    this.observers = [];
    this.cache = e.cache;
    this.logger = e.logger || U;
    this.queryKey = e.queryKey;
    this.queryHash = e.queryHash;
    this.initialState = e.state || p(this.options);
    this.state = this.initialState;
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(e) {
    this.options = {
      ...this.defaultOptions,
      ...e
    };
    this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this);
  }
  setData(e, r) {
    let n = pl(this.state.data, e, this.options);
    this.dispatch({
      data: n,
      type: "success",
      dataUpdatedAt: r?.updatedAt,
      manual: r?.manual
    });
    return n;
  }
  setState(e, r) {
    this.dispatch({
      type: "setState",
      state: e,
      setStateOptions: r
    });
  }
  cancel(e) {
    var r;
    let n = this.promise;
    null == (r = this.retryer) || r.cancel(e);
    return n ? n.then(lQ).catch(lQ) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({
      silent: !0
    });
  }
  reset() {
    this.destroy();
    this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some(e => !1 !== e.options.enabled);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(e => e.getCurrentResult().isStale);
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !j3(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var e;
    let r = this.observers.find(e => e.shouldFetchOnWindowFocus());
    r && r.refetch({
      cancelRefetch: !1
    });
    null == (e = this.retryer) || e.$$continue();
  }
  onOnline() {
    var e;
    let r = this.observers.find(e => e.shouldFetchOnReconnect());
    r && r.refetch({
      cancelRefetch: !1
    });
    null == (e = this.retryer) || e.$$continue();
  }
  addObserver(e) {
    -1 === this.observers.indexOf(e) && (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: e
    }));
  }
  removeObserver(e) {
    -1 !== this.observers.indexOf(e) && (this.observers = this.observers.filter(r => r !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
      revert: !0
    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
      type: "observerRemoved",
      query: this,
      observer: e
    }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({
      type: "invalidate"
    });
  }
  fetch(e, r) {
    var n;
    var s;
    var o;
    var h;
    if ("idle" !== this.state.fetchStatus) {
      if (this.state.dataUpdatedAt && null != r && r.cancelRefetch) this.cancel({
        silent: !0
      }); else if (this.promise) {
        null == (o = this.retryer) || o.continueRetry();
        return this.promise;
      }
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      let e = this.observers.find(e => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    Array.isArray(this.options.queryKey);
    let d = jY();
    let p = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    };
    let g = e => {
      Object.defineProperty(e, "signal", {
        enumerable: !0,
        get: () => {
          if (d) {
            this.abortSignalConsumed = !0;
            return d.signal;
          }
        }
      });
    };
    g(p);
    let m = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(p)) : Promise.reject("Missing queryFn");
    let v = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: m
    };
    g(v);
    null == (n = this.options.behavior) || n.onFetch(v);
    this.revertState = this.state;
    ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (s = v.fetchOptions) ? void 0 : s.meta)) && this.dispatch({
      type: "fetch",
      meta: null == (h = v.fetchOptions) ? void 0 : h.meta
    });
    let y = e => {
      if (wm(e) && e.silent || this.dispatch({
        type: "error",
        error: e
      }), !wm(e)) {
        var r;
        var n;
        null == (r = (n = this.cache.config).onError) || r.call(n, e, this);
      }
      this.isFetchingOptimistic || this.scheduleGc();
      this.isFetchingOptimistic = !1;
    };
    this.retryer = II({
      fn: v.fetchFn,
      abort: d?.abort.bind(d),
      onSuccess: e => {
        var r;
        var n;
        if (void 0 === e) {
          y(Error("undefined"));
          return;
        }
        this.setData(e);
        null == (r = (n = this.cache.config).onSuccess) || r.call(n, e, this);
        this.isFetchingOptimistic || this.scheduleGc();
        this.isFetchingOptimistic = !1;
      },
      onError: y,
      onFail: (e, r) => {
        this.dispatch({
          type: "failed",
          failureCount: e,
          error: r
        });
      },
      onPause: () => {
        this.dispatch({
          type: "pause"
        });
      },
      onContinue: () => {
        this.dispatch({
          type: "continue"
        });
      },
      retry: v.options.retry,
      retryDelay: v.options.retryDelay,
      networkMode: v.options.networkMode
    });
    this.promise = this.retryer.promise;
    return this.promise;
  }
  dispatch(e) {
    let r = r => {
      var n;
      var i;
      switch (e.type) {
        case "failed":
          return {
            ...r,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error
          };
        case "pause":
          return {
            ...r,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...r,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...r,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: null != (n = e.meta) ? n : null,
            fetchStatus: v_(this.options.networkMode) ? "fetching" : "paused",
            ...(!r.dataUpdatedAt && {
              error: null,
              status: "loading"
            })
          };
        case "success":
          return {
            ...r,
            data: e.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: null != (i = e.dataUpdatedAt) ? i : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...(!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            })
          };
        case "error":
          let s = e.error;
          if (wm(s) && s.revert && this.revertState) return {
            ...this.revertState
          };
          return {
            ...r,
            error: s,
            errorUpdateCount: r.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: r.fetchFailureCount + 1,
            fetchFailureReason: s,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...r,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...r,
            ...e.state
          };
      }
    };
    this.state = r(this.state);
    j.batch(() => {
      this.observers.forEach(r => {
        r.onQueryUpdate(e);
      });
      this.cache.notify({
        query: this,
        type: "updated",
        action: e
      });
    });
  }
}
function p(e) {
  let r = "function" == typeof e.initialData ? e.initialData() : e.initialData;
  let n = void 0 !== r;
  let i = n ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: r,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? null != i ? i : Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "loading",
    fetchStatus: "idle"
  };
}
class m extends Q {
  constructor(e) {
    super();
    this.config = e || {};
    this.queries = [];
    this.queriesMap = {};
  }
  build(e, r, n) {
    var s;
    let o = r.queryKey;
    let a = null != (s = r.queryHash) ? s : F$(o, r);
    let h = this.get(a);
    h || (h = new d({
      cache: this,
      logger: e.getLogger(),
      queryKey: o,
      queryHash: a,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(o)
    }), this.add(h));
    return h;
  }
  add(e) {
    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    let r = this.queriesMap[e.queryHash];
    r && (e.destroy(), this.queries = this.queries.filter(r => r !== e), r === e && delete this.queriesMap[e.queryHash], this.notify({
      type: "removed",
      query: e
    }));
  }
  clear() {
    j.batch(() => {
      this.queries.forEach(e => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return this.queriesMap[e];
  }
  getAll() {
    return this.queries;
  }
  find(e, r) {
    let [n] = b_(e, r);
    void 0 === n.exact && (n.exact = !0);
    return this.queries.find(e => MK(n, e));
  }
  findAll(e, r) {
    let [n] = b_(e, r);
    return Object.keys(n).length > 0 ? this.queries.filter(e => MK(n, e)) : this.queries;
  }
  notify(e) {
    j.batch(() => {
      this.listeners.forEach(r => {
        r(e);
      });
    });
  }
  onFocus() {
    j.batch(() => {
      this.queries.forEach(e => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    j.batch(() => {
      this.queries.forEach(e => {
        e.onOnline();
      });
    });
  }
}
class y extends Q {
  constructor(e) {
    super();
    this.config = e || {};
    this.mutations = [];
    this.mutationId = 0;
  }
  build(e, r, n) {
    let i = new _$$s({
      mutationCache: this,
      logger: e.getLogger(),
      mutationId: ++this.mutationId,
      options: e.defaultMutationOptions(r),
      state: n,
      defaultOptions: r.mutationKey ? e.getMutationDefaults(r.mutationKey) : void 0
    });
    this.add(i);
    return i;
  }
  add(e) {
    this.mutations.push(e);
    this.notify({
      type: "added",
      mutation: e
    });
  }
  remove(e) {
    this.mutations = this.mutations.filter(r => r !== e);
    this.notify({
      type: "removed",
      mutation: e
    });
  }
  clear() {
    j.batch(() => {
      this.mutations.forEach(e => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    void 0 === e.exact && (e.exact = !0);
    return this.mutations.find(r => nJ(e, r));
  }
  findAll(e) {
    return this.mutations.filter(r => nJ(e, r));
  }
  notify(e) {
    j.batch(() => {
      this.listeners.forEach(r => {
        r(e);
      });
    });
  }
  resumePausedMutations() {
    var e;
    this.resuming = (null != (e = this.resuming) ? e : Promise.resolve()).then(() => {
      let e = this.mutations.filter(e => e.state.isPaused);
      return j.batch(() => e.reduce((e, r) => e.then(() => r.$$continue().catch(lQ)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    });
    return this.resuming;
  }
}
export class $$w0 {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new m();
    this.mutationCache = e.mutationCache || new y();
    this.logger = e.logger || U;
    this.defaultOptions = e.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
    this.mountCount = 0;
  }
  mount() {
    this.mountCount++;
    1 === this.mountCount && (this.unsubscribeFocus = _$$m.subscribe(() => {
      _$$m.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = t.subscribe(() => {
      t.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var e;
    var r;
    this.mountCount--;
    0 === this.mountCount && (null == (e = this.unsubscribeFocus) || e.call(this), this.unsubscribeFocus = void 0, null == (r = this.unsubscribeOnline) || r.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(e, r) {
    let [n] = b_(e, r);
    n.fetchStatus = "fetching";
    return this.queryCache.findAll(n).length;
  }
  isMutating(e) {
    return this.mutationCache.findAll({
      ...e,
      fetching: !0
    }).length;
  }
  getQueryData(e, r) {
    var n;
    return null == (n = this.queryCache.find(e, r)) ? void 0 : n.state.data;
  }
  ensureQueryData(e, r, n) {
    let s = vh(e, r, n);
    let o = this.getQueryData(s.queryKey);
    return o ? Promise.resolve(o) : this.fetchQuery(s);
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({
      queryKey: e,
      state: r
    }) => [e, r.data]);
  }
  setQueryData(e, r, n) {
    let s = this.queryCache.find(e);
    let o = s?.state.data;
    let a = Zw(r, o);
    if (void 0 === a) return;
    let h = vh(e);
    let d = this.defaultQueryOptions(h);
    return this.queryCache.build(this, d).setData(a, {
      ...n,
      manual: !0
    });
  }
  setQueriesData(e, r, n) {
    return j.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: e
    }) => [e, this.setQueryData(e, r, n)]));
  }
  getQueryState(e, r) {
    var n;
    return null == (n = this.queryCache.find(e, r)) ? void 0 : n.state;
  }
  removeQueries(e, r) {
    let [n] = b_(e, r);
    let s = this.queryCache;
    j.batch(() => {
      s.findAll(n).forEach(e => {
        s.remove(e);
      });
    });
  }
  resetQueries(e, r, n) {
    let [s, a] = b_(e, r, n);
    let h = this.queryCache;
    let d = {
      type: "active",
      ...s
    };
    return j.batch(() => (h.findAll(s).forEach(e => {
      e.reset();
    }), this.refetchQueries(d, a)));
  }
  cancelQueries(e, r, n) {
    let [s, a = {}] = b_(e, r, n);
    void 0 === a.revert && (a.revert = !0);
    return Promise.all(j.batch(() => this.queryCache.findAll(s).map(e => e.cancel(a)))).then(lQ).catch(lQ);
  }
  invalidateQueries(e, r, n) {
    let [s, a] = b_(e, r, n);
    return j.batch(() => {
      var e;
      var r;
      if (this.queryCache.findAll(s).forEach(e => {
        e.invalidate();
      }), "none" === s.refetchType) return Promise.resolve();
      let n = {
        ...s,
        type: null != (e = null != (r = s.refetchType) ? r : s.type) ? e : "active"
      };
      return this.refetchQueries(n, a);
    });
  }
  refetchQueries(e, r, n) {
    let [s, a] = b_(e, r, n);
    let h = Promise.all(j.batch(() => this.queryCache.findAll(s).filter(e => !e.isDisabled()).map(e => {
      var r;
      return e.fetch(void 0, {
        ...a,
        cancelRefetch: null == (r = a?.cancelRefetch) || r,
        meta: {
          refetchPage: s.refetchPage
        }
      });
    }))).then(lQ);
    null != a && a.throwOnError || (h = h.catch(lQ));
    return h;
  }
  fetchQuery(e, r, n) {
    let s = vh(e, r, n);
    let o = this.defaultQueryOptions(s);
    void 0 === o.retry && (o.retry = !1);
    let a = this.queryCache.build(this, o);
    return a.isStaleByTime(o.staleTime) ? a.fetch(o) : Promise.resolve(a.state.data);
  }
  prefetchQuery(e, r, n) {
    return this.fetchQuery(e, r, n).then(lQ).catch(lQ);
  }
  fetchInfiniteQuery(e, r, n) {
    let s = vh(e, r, n);
    s.behavior = PL();
    return this.fetchQuery(s);
  }
  prefetchInfiniteQuery(e, r, n) {
    return this.fetchInfiniteQuery(e, r, n).then(lQ).catch(lQ);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(e) {
    this.defaultOptions = e;
  }
  setQueryDefaults(e, r) {
    let n = this.queryDefaults.find(r => Od(e) === Od(r.queryKey));
    n ? n.defaultOptions = r : this.queryDefaults.push({
      queryKey: e,
      defaultOptions: r
    });
  }
  getQueryDefaults(e) {
    if (!e) return;
    let r = this.queryDefaults.find(r => Cp(e, r.queryKey));
    return r?.defaultOptions;
  }
  setMutationDefaults(e, r) {
    let n = this.mutationDefaults.find(r => Od(e) === Od(r.mutationKey));
    n ? n.defaultOptions = r : this.mutationDefaults.push({
      mutationKey: e,
      defaultOptions: r
    });
  }
  getMutationDefaults(e) {
    if (!e) return;
    let r = this.mutationDefaults.find(r => Cp(e, r.mutationKey));
    return r?.defaultOptions;
  }
  defaultQueryOptions(e) {
    if (null != e && e._defaulted) return e;
    let r = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(e?.queryKey),
      ...e,
      _defaulted: !0
    };
    !r.queryHash && r.queryKey && (r.queryHash = F$(r.queryKey, r));
    void 0 === r.refetchOnReconnect && (r.refetchOnReconnect = "always" !== r.networkMode);
    void 0 === r.useErrorBoundary && (r.useErrorBoundary = !!r.suspense);
    return r;
  }
  defaultMutationOptions(e) {
    return null != e && e._defaulted ? e : {
      ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(e?.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  }
}
export const E = $$w0; 
