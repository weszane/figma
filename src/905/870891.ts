import { Ay } from "../905/795642";
import { aV } from "../905/187849";
export class $$a0 {
  constructor(e, t, i, a) {
    this.parent = e;
    this.queryDef = t;
    this.observable = i;
    this.context = a;
    this.query = new aV(t, a, e.instance);
    this.isPaginatedNodeFetching = !0;
    this.clientIsFetching = !0;
    let s = Ay.DEFAULT_INITIAL_COUNT;
    this.children.push(new Ay(this, this.queryDef, this.observable, this.context, {
      before: this.nextCursor.start,
      after: this.nextCursor.end,
      count: s,
      pageNumber: 1,
      startTime: performance.now()
    }));
    this.context.options?.paginationQueryNodeMap?.set(this.query.queryId, this);
  }
  children = [];
  _status = {
    type: "loading"
  };
  _result;
  query;
  _isLoaded = !1;
  nextCursor = {
    start: null,
    end: null
  };
  previousPageCountsForReconnection = null;
  isPaginatedNodeFetching = !1;
  clientIsFetching = !1;
  get fieldName() {
    return this.queryDef.objectFieldDef.name;
  }
  get path() {
    return [...this.parent.path, "pagination-" + this.fieldName];
  }
  result() {
    if ("loading" === this._status.type) return {
      status: "loading",
      data: null,
      errors: null
    };
    if ("failed" === this._status.type) {
      let e = this._status.error.code;
      this._result = {
        status: "errors",
        data: null,
        errors: [{
          code: e,
          path: [this.fieldName],
          error: Error(this._status.error.message),
          retriable: this._status.error.retriable
        }]
      };
      return this._result;
    }
    if (this._result) return this._result;
    let e = [];
    let t = [];
    let i = !0;
    for (let n of this.children) {
      let r = n.result();
      switch (r.status) {
        case "loading":
          this._result = r;
          return this._result;
        case "errors":
          for (let e of (i = !1, r.errors)) t.push({
            ...e,
            path: [this.fieldName, ...e.path]
          });
          break;
        case "loaded":
          for (let e of r.errors) t.push({
            ...e,
            path: [this.fieldName, ...e.path]
          });
          Array.isArray(r.data) ? e.push(...r.data) : r.data && e.push(r.data);
      }
    }
    if (!i) {
      this._result = {
        status: "errors",
        data: null,
        errors: t
      };
      this.clientIsFetching = !1;
      return this._result;
    }
    this.query.isPaginationViaLiveQuery() && (e = this.sortAndDedupResults(e));
    let n = Object.assign(e, {
      loadNext: e => {
        this._result?.data && (this._result = {
          ...this._result
        }, this._result.data?.isLoadingNextPage !== void 0 && (this._result.data.isLoadingNextPage = !0), this.parent.resetResult(), this.parent.resultsUpdated(), this.loadNextPage(e));
      },
      hasNextPage: () => this.hasNextPage(),
      isLoadingNextPage: !1
    });
    this._result = {
      status: "loaded",
      errors: t,
      data: n
    };
    this.clientIsFetching = !1;
    return this._result;
  }
  sortAndDedupResults(e) {
    let t = new Set();
    let i = [];
    for (let n of e) {
      let e = n[this.query.getPaginationIdColumn()];
      t.has(e) || (t.add(e), i.push(n));
    }
    let n = this.query.order();
    n && i.sort((e, t) => n(e, t));
    return i;
  }
  resultsUpdated() {
    this.children.every(e => e.isLoaded()) && (this._status.type = "loaded");
    "loading" !== this._status.type && this.parent.resultsUpdated();
  }
  resetResult() {
    this._result = void 0;
    this._isLoaded = !1;
    this.parent.resetResult();
  }
  onError(e, t, i) {
    let n = performance.now() - t;
    this.context.options?.emitter?.emit({
      type: "PAGINATION_LATENCY",
      resolver: this.query.paginationResolverType,
      viewName: this.getLiveView().viewDef.name,
      pageNumber: i,
      latency: n,
      status: "failed"
    });
    this.resetResult();
    this._status = {
      type: "failed",
      error: e
    };
    this.parent.resultsUpdated();
    this.isPaginatedNodeFetching = !1;
  }
  hasNextPage() {
    return !!this.nextCursor.end;
  }
  isLoadingNextPage() {
    return this.clientIsFetching;
  }
  loadNextPage(e) {
    if (this.isPaginatedNodeFetching) {
      this.context.options?.logger?.error(Error(`Trying to fetch next page for query ${this.query.queryId} when there is an ongoing fetch more request.`));
      return;
    }
    if (this.isPaginatedNodeFetching = !0, this.clientIsFetching = !0, !this.hasNextPage()) {
      this.context.options?.logger?.error(Error(`Trying to fetch next page for query ${this.query.queryId} when there are no more pages left`));
      return;
    }
    let t = {
      before: this.nextCursor.start,
      after: this.nextCursor.end,
      count: e,
      pageNumber: this.children.length + 1,
      startTime: performance.now()
    };
    this.children.push(new Ay(this, this.queryDef, this.observable, this.context, t));
    this.observable.requestPaginationChange(this.getLiveView().key, this.query, t);
  }
  destroy() {
    for (let e of this.children) e.destroy();
    this.context.options?.paginationQueryNodeMap?.delete(this.query.queryId);
  }
  recreateIfStale(e, t) {
    for (let i = 0; i < this.children.length; i++) {
      let n = this.children[i];
      let r = n.recreateIfStale(e, t);
      r && (n.destroy(), this.children[i] = r);
    }
  }
  onPaginationResults(e, t, i) {
    let n = performance.now() - t;
    if (this.context.options?.emitter?.emit({
      type: "PAGINATION_LATENCY",
      latency: n,
      resolver: this.query.paginationResolverType,
      pageNumber: i,
      viewName: this.getLiveView().viewDef.name,
      status: "success"
    }), this.isPaginatedNodeFetching = !1, this.nextCursor = e, this.previousPageCountsForReconnection) {
      if (this.previousPageCountsForReconnection.length && this.nextCursor.end) {
        let e = this.previousPageCountsForReconnection.shift();
        this.loadNextPage(e);
      } else this.previousPageCountsForReconnection = null;
    }
  }
  isLoaded() {
    if ("loading" === this._status.type) return !1;
    if (this._isLoaded) return !0;
    for (let e of this.children.values()) if (!e.isLoaded()) return !1;
    this._isLoaded = !0;
    return this._isLoaded;
  }
  startReconnectionState() {
    for (let e of (this.previousPageCountsForReconnection = this.children.map(e => e.paginationArgs.count), this.children)) e.destroy();
    this.children = [];
    this.nextCursor = {
      start: null,
      end: null
    };
    let e = this.previousPageCountsForReconnection.shift();
    this.children.push(new Ay(this, this.queryDef, this.observable, this.context, {
      before: this.nextCursor.start,
      after: this.nextCursor.end,
      count: e,
      pageNumber: this.children.length + 1,
      startTime: performance.now()
    }));
    this.isPaginatedNodeFetching = !0;
    this.clientIsFetching = !0;
  }
  getLoadingPathsForDebugging() {
    let e = [];
    for (let t of ("loading" === this._status.type && e.push(this.fieldName), this.children.values())) e.push(...t.getLoadingPathsForDebugging());
    return e;
  }
  getOptionalErrorPathsForDebugging() {
    let e = [];
    for (let t of this.children.values()) e.push(...t.getOptionalErrorPathsForDebugging());
    return e;
  }
  getQueryIds() {
    let e = [this.query.queryId];
    for (let t of this.children) e.push(...t.getQueryIds());
    return e;
  }
  getLiveView() {
    return this.parent.getLiveView();
  }
  debugState(e) {
    return {
      _: e(this),
      children: this.children.map(t => t.debugState(e))
    };
  }
}
export function $$s1(e) {
  return e instanceof $$a0;
}
export const A = $$a0;
export const c = $$s1;