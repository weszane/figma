import { Q } from '../vendor/166452';
import { canFetch, isCancelledError } from '@tanstack/query-core';
import { m as _$$m } from '../vendor/338690';
import { f8, gn, j3, lQ, pl, S$ } from '../vendor/348210';
import { j } from '../vendor/637177';
export class QueryObserver extends Q {
  constructor(e, r) {
    super();
    this.client = e;
    this.options = r;
    this.trackedProps = new Set();
    this.selectError = null;
    this.bindMethods();
    this.setOptions(r);
  }
  bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.length === 1 && (this.currentQuery.addObserver(this), g(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.listeners.length || this.destroy();
  }
  shouldFetchOnReconnect() {
    return m(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return m(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = [];
    this.clearStaleTimeout();
    this.clearRefetchInterval();
    this.currentQuery.removeObserver(this);
  }
  setOptions(e, r) {
    let n = this.options;
    let s = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(e), f8(n, this.options) || this.client.getQueryCache().notify({
      type: 'observerOptionsUpdated',
      query: this.currentQuery,
      observer: this
    }), void 0 !== this.options.enabled && typeof this.options.enabled != 'boolean') {
      throw new Error('Expected enabled to be a boolean');
    }
    this.options.queryKey || (this.options.queryKey = n.queryKey);
    this.updateQuery();
    let o = this.hasListeners();
    o && v(this.currentQuery, s, this.options, n) && this.executeFetch();
    this.updateResult(r);
    o && (this.currentQuery !== s || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && this.updateStaleTimeout();
    let a = this.computeRefetchInterval();
    o && (this.currentQuery !== s || this.options.enabled !== n.enabled || a !== this.currentRefetchInterval) && this.updateRefetchInterval(a);
  }
  getOptimisticResult(e) {
    let r = this.client.getQueryCache().build(this.client, e);
    return this.createResult(r, e);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(e) {
    let r = {};
    Object.keys(e).forEach(n => {
      Object.defineProperty(r, n, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackedProps.add(n), e[n])
      });
    });
    return r;
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({
    refetchPage: e,
    ...r
  } = {}) {
    return this.fetch({
      ...r,
      meta: {
        refetchPage: e
      }
    });
  }
  fetchOptimistic(e) {
    let r = this.client.defaultQueryOptions(e);
    let n = this.client.getQueryCache().build(this.client, r);
    n.isFetchingOptimistic = !0;
    return n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    let r;
    return this.executeFetch({
      ...e,
      cancelRefetch: e.cancelRefetch || r
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(e) {
    this.updateQuery();
    let r = this.currentQuery.fetch(this.options, e);
    e != null && e.throwOnError || (r = r.catch(lQ));
    return r;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), S$ || this.currentResult.isStale || !gn(this.options.staleTime)) return;
    let e = j3(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, e);
  }
  computeRefetchInterval() {
    let e;
    return typeof this.options.refetchInterval == 'function' ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (e = this.options.refetchInterval) != null && e;
  }
  updateRefetchInterval(e) {
    this.clearRefetchInterval();
    this.currentRefetchInterval = e;
    !S$ && !1 !== this.options.enabled && gn(this.currentRefetchInterval) && this.currentRefetchInterval !== 0 && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || _$$m.isFocused()) && this.executeFetch();
    }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
  }
  clearRefetchInterval() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
  }
  createResult(e, r) {
    let n;
    let s = this.currentQuery;
    let o = this.options;
    let a = this.currentResult;
    let d = this.currentResultState;
    let p = this.currentResultOptions;
    let m = e !== s;
    let b = m ? e.state : this.currentQueryInitialState;
    let O = m ? this.currentResult : this.previousQueryResult;
    let {
      state
    } = e;
    let {
      dataUpdatedAt,
      error,
      errorUpdatedAt,
      fetchStatus,
      status
    } = x;
    let A = !1;
    let C = !1;
    if (r._optimisticResults) {
      let n = this.hasListeners();
      let i = !n && g(e, r);
      let a = n && v(e, s, r, o);
      (i || a) && (S = canFetch(e.options.networkMode) ? 'fetching' : 'paused', dataUpdatedAt || (E = 'loading'));
      r._optimisticResults === 'isRestoring' && (S = 'idle');
    }
    if (r.keepPreviousData && !state.dataUpdatedAt && O != null && O.isSuccess && status !== 'error') {
      n = O.data;
      w = O.dataUpdatedAt;
      E = O.status;
      A = !0;
    } else if (r.select && void 0 !== state.data) {
      if (a && state.data === d?.data && r.select === this.selectFn) {
        n = this.selectResult;
      } else {
        try {
          this.selectFn = r.select;
          n = r.select(state.data);
          n = pl(a?.data, n, r);
          this.selectResult = n;
          this.selectError = null;
        } catch (e) {
          this.selectError = e;
        }
      }
    } else {
      n = state.data;
    }
    if (void 0 !== r.placeholderData && void 0 === n && status === 'loading') {
      let e;
      if (a != null && a.isPlaceholderData && r.placeholderData === p?.placeholderData) {
        e = a.data;
      } else if (e = typeof r.placeholderData == 'function' ? r.placeholderData() : r.placeholderData, r.select && void 0 !== e) {
        try {
          e = r.select(e);
          this.selectError = null;
        } catch (e) {
          this.selectError = e;
        }
      }
      void 0 !== e && (E = 'success', n = pl(a?.data, e, r), C = !0);
    }
    this.selectError && (k = this.selectError, n = this.selectResult, _ = Date.now(), E = 'error');
    let T = fetchStatus === 'fetching';
    let I = status === 'loading';
    let P = status === 'error';
    return {
      status,
      fetchStatus,
      isLoading: I,
      isSuccess: status === 'success',
      isError: P,
      isInitialLoading: I && T,
      data: n,
      dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      failureReason: state.fetchFailureReason,
      errorUpdateCount: state.errorUpdateCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > b.dataUpdateCount || state.errorUpdateCount > b.errorUpdateCount,
      isFetching: T,
      isRefetching: T && !I,
      isLoadingError: P && state.dataUpdatedAt === 0,
      isPaused: fetchStatus === 'paused',
      isPlaceholderData: C,
      isPreviousData: A,
      isRefetchError: P && state.dataUpdatedAt !== 0,
      isStale: y(e, r),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(e) {
    let r = this.currentResult;
    let n = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, f8(n, r)) return;
    this.currentResult = n;
    let s = {
      cache: !0
    };
    let o = () => {
      if (!r) return !0;
      let {
        notifyOnChangeProps
      } = this.options;
      if (notifyOnChangeProps === 'all' || !notifyOnChangeProps && !this.trackedProps.size) return !0;
      let n = new Set(notifyOnChangeProps != null ? notifyOnChangeProps : this.trackedProps);
      this.options.useErrorBoundary && n.add('error');
      return Object.keys(this.currentResult).some(e => {
        let i = e;
        return this.currentResult[i] !== r[i] && n.has(i);
      });
    };
    e?.listeners !== !1 && o() && (s.listeners = !0);
    this.notify({
      ...s,
      ...e
    });
  }
  updateQuery() {
    let e = this.client.getQueryCache().build(this.client, this.options);
    if (e === this.currentQuery) return;
    let r = this.currentQuery;
    this.currentQuery = e;
    this.currentQueryInitialState = e.state;
    this.previousQueryResult = this.currentResult;
    this.hasListeners() && (r?.removeObserver(this), e.addObserver(this));
  }
  onQueryUpdate(e) {
    let r = {};
    e.type === 'success' ? r.onSuccess = !e.manual : e.type !== 'error' || isCancelledError(e.error) || (r.onError = !0);
    this.updateResult(r);
    this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    j.batch(() => {
      let r;
      let n;
      let i;
      let s;
      let o;
      let a;
      let h;
      let d;
      e.onSuccess ? ((r = (n = this.options).onSuccess) == null || r.call(n, this.currentResult.data), (i = (s = this.options).onSettled) == null || i.call(s, this.currentResult.data, null)) : e.onError && ((o = (a = this.options).onError) == null || o.call(a, this.currentResult.error), (h = (d = this.options).onSettled) == null || h.call(d, void 0, this.currentResult.error));
      e.listeners && this.listeners.forEach(e => {
        e(this.currentResult);
      });
      e.cache && this.client.getQueryCache().notify({
        query: this.currentQuery,
        type: 'observerResultsUpdated'
      });
    });
  }
}
function p(e, r) {
  return !1 !== r.enabled && !e.state.dataUpdatedAt && !(e.state.status === 'error' && !1 === r.retryOnMount);
}
function g(e, r) {
  return p(e, r) || e.state.dataUpdatedAt > 0 && m(e, r, r.refetchOnMount);
}
function m(e, r, n) {
  if (!1 !== r.enabled) {
    let i = typeof n == 'function' ? n(e) : n;
    return i === 'always' || !1 !== i && y(e, r);
  }
  return !1;
}
function v(e, r, n, i) {
  return !1 !== n.enabled && (e !== r || !1 === i.enabled) && (!n.suspense || e.state.status !== 'error') && y(e, n);
}
function y(e, r) {
  return e.isStaleByTime(r.staleTime);
}
export const $ = QueryObserver;
