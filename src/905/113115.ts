import { ResourceStatus, DEFAULT_LOADING_STATE } from "../905/957591";
import { Ay } from "../905/795642";
import { hasFieldsProperty } from "../905/552287";
import { deepEqual } from "../905/419236";
export class $$o0 {
  constructor(e, t, i, n, r) {
    this.parent = e;
    this.computationDef = t;
    this.observable = i;
    this.context = n;
    this.computation = t.parameterizedComputation(n.sessionArgs, n.viewArgs, r, e.queryDef.objectDef.naturalKey);
    let a = this.context.options?.computationObjectNodes;
    a && !a[this.computationDef.objectName] && (a[this.computationDef.objectName] = new Set());
    a?.[this.computationDef.objectName]?.add(this);
    let s = t.computedFieldDef.name;
    s in r ? (this.unsubscribe = () => {}, this.onUpdateResult(r[s])) : this.unsubscribe = i.subscribeComputation(this.computation, this);
  }
  computation;
  unsubscribe;
  _result;
  computedObject;
  children = [];
  missingProjectedFieldsForDebugging;
  onUpdateResult(e) {
    if (deepEqual(this.computedObject, e)) return;
    this.computedObject = e;
    let t = [...this.children];
    if (this.children = [], this.computedObject) for (let [e, t] of this.computationDef.computedObjectQueries.entries()) this.children.push(new Ay(this, t, this.observable, this.context));
    for (let e of t) e.destroy();
    this.resetResult();
    this.parent.resultsUpdated();
  }
  onErrors(e) {
    this._result = {
      status: "errors",
      data: null,
      errors: e.map(e => ({
        ...e,
        path: [this.computation.fieldDef.name, ...e.path]
      }))
    };
    this.computedObject = null;
    this.parent.resetResult();
    this.parent.resultsUpdated();
  }
  projectInstance(e) {
    let t = {};
    for (let i in this.computationDef.requestedFields || []) {
      let r = i;
      let s = this.computationDef?.requestedFields?.[i];
      s && hasFieldsProperty(s) && s.aliasedField && (r = s.aliasedField);
      let o = e[r];
      void 0 !== o ? this.computationDef.optionalFields.has(r) ? t[i] = {
        status: ResourceStatus.Loaded,
        data: o
      } : t[i] = o : this.computationDef.optionalFields.has(r) && (t[i] = {
        status: ResourceStatus.Error,
        error: `${this.path}.${i}' is missing, marked optional. Check server logs for more details.`
      });
    }
    return t;
  }
  hasMissingProjectedFields(e) {
    let t = [];
    for (let i in this.computationDef.requestedFields || []) void 0 === e[i] && t.push(i);
    return t.length > 0 ? (this.missingProjectedFieldsForDebugging = t, !0) : (this.missingProjectedFieldsForDebugging = void 0, !1);
  }
  result() {
    if (this._result) return this._result;
    if (void 0 === this.computedObject) return DEFAULT_LOADING_STATE;
    if (null === this.computedObject) {
      this.computationDef.def.nullable ? this._result = {
        status: "loaded",
        errors: [],
        data: null
      } : this._result = {
        status: "errors",
        errors: [{
          path: [...this.parent.path, this.fieldName],
          code: "nonNullableResult",
          retriable: !1
        }],
        data: null
      };
      return this._result;
    }
    let e = this.projectInstance({
      ...this.computedObject
    });
    let t = [];
    let i = !0;
    for (let r of this.children) {
      let a = r.result();
      switch (a.status) {
        case "loading":
          if (this.computationDef.optionalFields.has(r.fieldName)) {
            e[this.computationDef.dealias(r.fieldName)] = {
              status: ResourceStatus.Error,
              error: `${this.path}.${r.fieldName}' is missing, marked optional. Check server logs for more details.`
            };
            continue;
          }
          return DEFAULT_LOADING_STATE;
        case "disabled":
          return DEFAULT_LOADING_STATE;
        case "loaded":
          this.computationDef.optionalFields.has(r.fieldName) ? e[this.computationDef.dealias(r.fieldName)] = {
            status: ResourceStatus.Loaded,
            data: a.data
          } : e[this.computationDef.dealias(r.fieldName)] = a.data;
          continue;
        case "errors":
          i = !1;
          t.push.apply(t, a.errors);
      }
    }
    return i ? this.hasMissingProjectedFields(e) ? DEFAULT_LOADING_STATE : (this._result = {
      status: "loaded",
      errors: t,
      data: e
    }, this._result) : (this._result = {
      status: "errors",
      data: null,
      errors: t
    }, this._result);
  }
  destroy() {
    for (let e of this.children) e.destroy();
    this.children = [];
    this.context.options?.computationObjectNodes?.[this.computationDef.objectName]?.delete(this);
    this.unsubscribe();
  }
  resetResult() {
    this._result = void 0;
    this.parent.resetResult();
  }
  resultsUpdated() {
    this.parent.resultsUpdated();
  }
  get path() {
    return [...this.parent.path, this.computation.fieldDef.name];
  }
  get name() {
    return this.computationDef.name;
  }
  recreateIfStale(e, t) {}
  getOptionalErrorPathsForDebugging() {
    let e = [];
    for (let t of (this._result?.status === "loaded" && Object.entries(this._result.data || {}).forEach(([t, i]) => {
      this.computationDef.optionalFields.has(t) && i instanceof Object && "status" in i && i.status === ResourceStatus.Error && e.push(t);
    }), this.children)) {
      let i = t.getOptionalErrorPathsForDebugging();
      e.push.apply(e, i);
    }
    return e;
  }
  getLoadingPathsForDebugging() {
    let e = [];
    for (let t of this.children) {
      let i = t.getLoadingPathsForDebugging();
      e.push.apply(e, i);
    }
    for (let t of this.getMissingProjectedFieldsForDebugging()) e.push.apply(e, [t + "(missing projection)"]);
    return e;
  }
  get fieldName() {
    return this.computation.fieldName;
  }
  isLoaded() {
    return void 0 !== this.computedObject && this.children.every(e => e.isLoaded());
  }
  getLiveView() {
    return this.parent.getLiveView();
  }
  getQueryIds() {
    let e = [];
    for (let t of this.children) e.push(...t.getQueryIds());
    return e;
  }
  getMissingProjectedFieldsForDebugging() {
    return this.missingProjectedFieldsForDebugging || [];
  }
  debugState(e) {
    return {
      _: e(this),
      children: this.children.map(t => t.debugState(e))
    };
  }
}
export function $$l1(e) {
  return e instanceof $$o0;
}
export const A = $$o0;
export const Y = $$l1;