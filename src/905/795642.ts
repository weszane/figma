import { DEFAULT_LOADING_STATE } from "../905/957591";
import { deepEqual, throwIf } from "../905/419236";
import { A } from "../905/763387";
import { A as _$$A } from "../905/870891";
import { aV } from "../905/187849";
import { A as _$$A2 } from "../905/113115";
export let $$d1 = Object.freeze({
  status: "disabled",
  data: null,
  errors: null
});
export class $$c0 {
  constructor(e, t, i, n, r) {
    let d;
    this.parent = e;
    this.observable = i;
    this.context = n;
    this.unsubscribe = () => {};
    e instanceof _$$A && r ? (d = this.parent.parent.instance, this.paginationArgs = r, this.query = new aV(t, n, d, {
      before: r.before,
      after: r.after,
      count: r.count
    })) : (e instanceof _$$A2 && e.computedObject ? d = e.computedObject : ($$c0.internalAssert(e instanceof A, "Query node has invalid parent. Must be an instance, computation object or pagination query node"), d = e.instance), this.query = new aV(t, n, d));
    let {
      objectFieldDef
    } = t;
    if (this.isEmbedded || objectFieldDef.name in d) {
      let e = d[objectFieldDef.name];
      let t = d.id;
      if (e) {
        if (Array.isArray(e)) {
          let i = {};
          e.forEach((e, n) => {
            let r = `${t}-${n.toString().padStart(10, "0")}`;
            e instanceof Object ? i[r] = {
              id: r,
              ...e
            } : "string" == typeof e ? i[r] = {
              id: e
            } : this.context.options?.logger?.warn("EMBEDDED_INSTANCE_INVALID_TYPE", this.query.queryId, e);
          });
          let n = [];
          let r = Object.keys(i);
          r.length > 0 && (n = this.query.queryDef.missingOptionalFieldsForEmbeddedInstance(i[r[0]]));
          this.onInitialResults(i, void 0, n);
        } else {
          let i = `${t}-0`;
          let n = {
            id: i,
            ...e
          };
          let r = this.query.queryDef.missingOptionalFieldsForEmbeddedInstance(n);
          this.onInitialResults({
            [i]: n
          }, void 0, r);
        }
      } else this.onInitialResults({}, void 0, []);
    } else this.unsubscribe = this.observable.subscribeQuery(this.query, this);
  }
  query;
  children = new Map();
  unsubscribe;
  detachedChildren = new Set();
  _result;
  _isLoaded = !1;
  _status = {
    type: "loading"
  };
  static DEFAULT_INITIAL_COUNT = 10;
  paginationArgs;
  missingProjectedFieldsForDebugging;
  get isEmbedded() {
    return this.query.queryDef.objectFieldDef.embedded;
  }
  get fieldName() {
    return this.query.queryDef.objectFieldDef.name;
  }
  get path() {
    return [...this.parent.path, this.fieldName];
  }
  get debugFields() {
    return {
      query: this.query.queryId,
      path: this.path,
      embedded: this.isEmbedded
    };
  }
  destroy() {
    for (let e of this.children.values()) e.destroy();
    this.unsubscribe();
  }
  onError(e) {
    this.resetResult();
    this._status = {
      type: "failed",
      error: e
    };
    this.parent instanceof _$$A && this.paginationArgs && this.parent.onError(e, this.paginationArgs.startTime, this.paginationArgs.pageNumber);
    this.parent.resultsUpdated();
  }
  onInitialResults(e, t, i) {
    for (let [n, r] of (t && this.paginationArgs && ($$c0.internalAssert(this.parent instanceof _$$A, "Query node: received pagination range but parent isn't a pagination query node"), this.parent.onPaginationResults(t, this.paginationArgs.startTime, this.paginationArgs.pageNumber)), $$c0.internalAssert("loaded" !== this._status.type, "Unexpected initial results on already loaded query node"), Object.entries(e))) {
      let e = new A(this, this.context, r, this.query.queryDef, i || []);
      this.children.set(n, e);
    }
    this.finishLoading();
  }
  finishLoading() {
    if (this._status = {
      type: "loaded"
    }, this.resetResult(), this.parent.resultsUpdated(), this.children.size >= 25) {
      let e = "";
      this.parent instanceof A ? e = this.parent.queryDef.objectFieldDef.name : this.parent instanceof _$$A ? e = this.parent.parent.queryDef.objectFieldDef.name : this.parent instanceof _$$A2 && (e = this.parent.name);
      this.context.options?.emitter?.emit({
        type: "VIEW.QUERY_STATS",
        nodeType: "QUERY_NODE",
        viewName: this.getLiveView().viewDef.name,
        objectName: this.query.objectName,
        parentName: e,
        fieldName: this.fieldName,
        instanceLength: this.children.size,
        hasCanReadPermissionCheck: !!this.query.queryDef.permissionComputation
      });
    }
  }
  onAddResult(e, t) {
    this.context.options?.logger?.debug("VIEW_QUERY_NODE.ADD_RESULT", this.query.queryId, e);
    $$c0.internalAssert("loaded" === this._status.type, "Unexpected incremental results on node that hasn't loaded yet");
    let i = new A(this, this.context, e, this.query.queryDef, t || []);
    this.children.set(e.id, i);
    this.resetResult();
    this.parent.resultsUpdated();
  }
  onUpdateResult(e, t) {
    if (this.context.options?.logger?.debug("VIEW_QUERY_NODE.UPDATE_RESULT", this.query.queryId, e), $$c0.internalAssert("loaded" === this._status.type, "Unexpected incremental results on node that hasn't loaded yet"), $$c0.internalAssert(this.children.has(e.id) || e.uuid && this.children.has(e.uuid), `onUpdateResult: this.children.has(instance.id) = ${this.children.has(e.id)}, instance.id = ${e.id}
       (instance.uuid && this.children.has(instance.uuid)) = ${e.uuid && this.children.has(e.uuid)}, instance.uuid = ${e.uuid}`), e.uuid && this.children.has(e.uuid) && e.id !== e.uuid) {
      let t = this.children.get(e.uuid);
      this.children.$$delete(e.uuid);
      this.children.set(e.id, t);
    }
    this.children.get(e.id).onUpdateResult(e, t || []) && this.parent.resultsUpdated();
  }
  onRemoveResult(e) {
    let {
      id
    } = e;
    if (this.context.options?.logger?.debug("VIEW_QUERY_NODE.REMOVE_RESULT", this.query.queryId, e), $$c0.internalAssert("loaded" === this._status.type, "Unexpected incremental results on node that hasn't loaded yet"), $$c0.internalAssert(this.children.has(e.id) || e.uuid && this.children.has(e.uuid), `onRemoveResult: this.children.has(instance.id) = ${this.children.has(e.id)}, instance.id = ${e.id}
       (instance.uuid && this.children.has(instance.uuid)) = ${e.uuid && this.children.has(e.uuid)}, instance.uuid = ${e.uuid}`), e.uuid && this.children.has(e.uuid) && e.id !== e.uuid) {
      let t = this.children.get(e.uuid);
      this.children.$$delete(e.uuid);
      this.children.set(e.id, t);
    }
    this.children.get(id).destroy();
    this.children.$$delete(id);
    this.detachedChildren.$$delete(id);
    this.resetResult();
    this.parent.resultsUpdated();
  }
  detachChild({
    id: e
  }) {
    this.detachedChildren.add(e);
    this.children.$$delete(e);
    this.resetResult();
    this.parent.resultsUpdated();
  }
  restoreChild(e) {
    this.detachedChildren.$$delete(e.id);
    this.onAddResult(e);
    this.resetResult();
  }
  resultsUpdated() {
    "loading" !== this._status.type && this.parent.resultsUpdated();
  }
  recreateIfStale(e, t) {
    if (this.isEmbedded) {
      if (deepEqual(e[this.query.queryDef.objectFieldDef.name], t[this.query.queryDef.objectFieldDef.name])) return;
    } else if (!this.query.isContextStale(t)) return;
    return new $$c0(this.parent, this.query.queryDef, this.observable, this.context);
  }
  getLoadingPathsForDebugging() {
    let e = [];
    "loading" === this._status.type && e.push(this.fieldName);
    let t = [...this.children.values()];
    let i = this.query.order();
    for (let n of (i && t.sort(({
      instance: e
    }, {
      instance: t
    }) => i(e, t)), t)) {
      let t = n.getLoadingPathsForDebugging();
      e.push(...t.map(e => `${this.fieldName}["${n.instance.id}"].${e}`));
    }
    for (let t of this.getMissingProjectedFieldsForDebugging()) e.push.apply(e, [t + "(missing projection)"]);
    return e;
  }
  getOptionalErrorPathsForDebugging() {
    let e = [];
    let t = [...this.children.values()];
    let i = this.query.order();
    for (let n of (i && t.sort(({
      instance: e
    }, {
      instance: t
    }) => i(e, t)), t)) {
      let t = n.getOptionalErrorPathsForDebugging();
      e.push(...t.map(e => `${this.fieldName}["${n.instance.id}"].${e}`));
    }
    return e;
  }
  result() {
    if ("loading" === this._status.type) return DEFAULT_LOADING_STATE;
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
    if (this._result && !this.context.options?.bustViewCache) return this._result;
    let e = [];
    for (let t of this.children.values()) {
      let i = t.instance;
      let n = t.result();
      e.push({
        instance: i,
        result: n
      });
    }
    let t = this.query.order();
    t && e.sort(({
      instance: e
    }, {
      instance: i
    }) => t(e, i));
    let {
      fieldName
    } = this;
    let r = [];
    let a = [];
    let s = !0;
    for (let {
      result
    } of e) switch (result.status) {
      case "loading":
        this._result = result;
        return this._result;
      case "errors":
        for (let e of (s = !1, result.errors)) r.push({
          ...e,
          path: [fieldName, ...e.path]
        });
        break;
      case "loaded":
        for (let e of result.errors) r.push({
          ...e,
          path: [fieldName, ...e.path]
        });
        a.push(result.data);
    }
    if (!s) {
      this.query.queryDef.isNullable() ? (Math.random() < (this.context?.options?.errorsLoggedForAnalyticsFraction || 0) && r.forEach(e => {
        this.context.options?.analyticsLogger?.logError({
          sessionId: this.context.sessionArgs.sessionId || "",
          layer: "client",
          targetId: this.query.queryId,
          targetType: "query",
          viewPath: this.path.join("."),
          err: e.error?.message || "",
          code: e.code,
          note: "NULLABLE_ERROR_SOAK"
        });
      }), r.some(e => "nonNullableResult" === e.code) && this.context.options?.shouldBubbleUpNonNullableResultErrors ? this._result = {
        status: "errors",
        data: null,
        errors: r
      } : this._result = {
        status: "loaded",
        errors: r,
        data: null
      }) : (Math.random() < (this.context?.options?.errorsLoggedForAnalyticsFraction || 0) && r.forEach(e => {
        this.context.options?.analyticsLogger?.logError({
          sessionId: this.context.sessionArgs.sessionId || "",
          layer: "client",
          targetId: this.query.queryId,
          targetType: "query",
          viewPath: this.path.join("."),
          err: e.error?.message || "",
          code: e.code,
          note: "ERROR_RAISE"
        });
      }), this._result = {
        status: "errors",
        data: null,
        errors: r
      });
      return this._result;
    }
    if (a.length > 0) {
      let e = this.query.queryDef.getMissingProjectedFields(a[0]);
      if (e.length > 0) {
        this._result = DEFAULT_LOADING_STATE;
        this.missingProjectedFieldsForDebugging = e;
        return this._result;
      }
      this.missingProjectedFieldsForDebugging = void 0;
    }
    this.query.queryDef.isList() ? this._result = {
      status: "loaded",
      errors: r,
      data: a
    } : a.length > 0 ? this._result = {
      status: "loaded",
      errors: r,
      data: a[0]
    } : this.query.queryDef.isNullable() ? this._result = {
      status: "loaded",
      errors: r,
      data: null
    } : this._result = {
      status: "errors",
      data: null,
      errors: [...r, {
        code: "nonNullableResult",
        path: [fieldName],
        retriable: !1
      }]
    };
    return this._result;
  }
  resetResult() {
    this._result = void 0;
    this._isLoaded = !1;
    this.parent.resetResult();
  }
  isLoaded() {
    if ("loading" === this._status.type) return !1;
    if (this._isLoaded) return !0;
    for (let e of this.children.values()) if (!e.isLoaded()) return !1;
    this._isLoaded = !0;
    return this._isLoaded;
  }
  getQueryIds() {
    let e = [this.query.queryId];
    for (let [t, i] of this.children) e.push(...i.getQueryIds());
    return e;
  }
  getLiveView() {
    return this.parent.getLiveView();
  }
  getMissingProjectedFieldsForDebugging() {
    return this.missingProjectedFieldsForDebugging || [];
  }
  debugState(e) {
    return {
      _: e(this),
      children: Array.from(this.children.values()).map(t => t.debugState(e))
    };
  }
  static internalAssert(e, t, i) {
    throwIf(e, t, i);
  }
}
export function $$u2(e) {
  return e instanceof $$c0;
}
export const Ay = $$c0;
export const F4 = $$d1;
export const Y2 = $$u2;