import { ResourceStatus } from "../905/957591";
import { compareFields, compareFieldInfoArrays, deepEqual } from "../905/419236";
import { A as _$$A } from "../905/679168";
import { A as _$$A2, N } from "../905/42339";
import { A as _$$A3, Y } from "../905/113115";
import { A as _$$A4, c } from "../905/870891";
import { Ay, Y2 } from "../905/795642";
export class $$c0 {
  constructor(e, t, i, n, r) {
    for (let [a, s] of (this.parent = e, this.context = t, this.instance = i, this.queryDef = n, this.missingOptionalFields = r, n.queries.entries())) this.missingOptionalFields.some(e => a === e.fieldName) || (s.objectFieldDef.pagination ? this.children.push(new _$$A4(this, s, e.observable, t)) : this.children.push(new Ay(this, s, e.observable, t)));
    for (let [r, a] of n.computations.entries()) this.missingOptionalFields.some(e => r === e.fieldName) || (a.computedFieldDef.isComputedObject() ? this.children.push(new _$$A3(this, a, e.observable, t, i)) : this.children.push(new _$$A2(this, a, e.observable, t, i)));
  }
  children = [];
  _result;
  _isLoaded = !1;
  get debugFields() {
    return {
      object: this.queryDef.name,
      parent: this.parent.path,
      instanceFields: JSON.stringify(Array.from(Object.getOwnPropertyNames(this.instance))),
      queryFields: JSON.stringify(Array.from(this.queryDef.queries.keys())),
      projectedBaseFields: JSON.stringify(Array.from(this.queryDef.projectedFields.keys()))
    };
  }
  get path() {
    return [...this.parent.path, this.instance.id || "root"];
  }
  get queriedChildren() {
    return this.children.filter(Y2);
  }
  get paginatedChildren() {
    return this.children.filter(c);
  }
  get computedChildren() {
    return this.children.filter(N);
  }
  get computedObjectChildren() {
    return this.children.filter(Y);
  }
  destroy() {
    for (let e of this.children) e.destroy();
  }
  resultsUpdated() {
    this.parent.resultsUpdated();
  }
  onUpdateResult(e, t) {
    let i = compareFields(e, this.instance, this.queryDef.projectedFields) && compareFieldInfoArrays(this.missingOptionalFields, t);
    let n = this.instance;
    this.instance = e;
    for (let t = 0; t < this.children.length; t++) {
      let a = this.children[t];
      a instanceof _$$A2 && a.fieldName in this.instance && n[a.fieldName] !== e[a.fieldName] && (i = !1);
      a instanceof _$$A3 && a.fieldName in this.instance && !deepEqual(n[a.fieldName], e[a.fieldName]) && (i = !1);
      let l = a.recreateIfStale(n, e);
      l && (a.destroy(), this.children[t] = l);
    }
    return !i && (this.missingOptionalFields = t, this.resetResult(), !0);
  }
  getLoadingPathsForDebugging() {
    let e = [];
    for (let t of this.children) {
      let i = t.getLoadingPathsForDebugging();
      e.push.apply(e, i);
    }
    return e;
  }
  getOptionalErrorPathsForDebugging() {
    let e = [];
    for (let t of (this._result?.status === "loaded" && Object.entries(this._result.data).forEach(([t, i]) => {
      this.queryDef.optionalFields.has(t) && i instanceof Object && "status" in i && i.status === ResourceStatus.Error && e.push(t);
    }), this.children)) {
      let i = t.getOptionalErrorPathsForDebugging();
      e.push.apply(e, i);
    }
    return e;
  }
  result() {
    if (this._result && !this.context.options?.bustViewCache) return this._result;
    let e = [];
    let t = this.queryDef.projectInstance(this.instance);
    let i = !0;
    for (let r of this.children) {
      let a = r.result();
      switch (a.status) {
        case "loading":
          if (this.queryDef.optionalFields.has(r.fieldName)) {
            t[this.queryDef.dealias(r.fieldName)] = {
              status: ResourceStatus.Error,
              error: `'root.${r.fieldName}' is missing, marked optional. Check server logs for more details.`
            };
            continue;
          }
          this._result = a;
          return this._result;
        case "errors":
          i = !1;
          e.push.apply(e, a.errors);
          break;
        case "loaded":
          r.fieldName in this.instance && r instanceof _$$A2 ? t[this.queryDef.dealias(r.fieldName)] = this.instance[r.fieldName] : r.fieldName in this.instance && r instanceof _$$A3 ? t[this.queryDef.dealias(r.fieldName)] = this.instance[r.fieldName] : (e.push.apply(e, a.errors), t[this.queryDef.dealias(r.fieldName)] = a.data);
          this.queryDef.optionalFields.has(r.fieldName) && (t[this.queryDef.dealias(r.fieldName)] = {
            status: ResourceStatus.Loaded,
            data: a.data
          });
      }
    }
    for (let e of this.missingOptionalFields) t[this.queryDef.dealias(e.fieldName)] = {
      status: ResourceStatus.Error,
      error: e.info || ""
    };
    if (this.context.options?.forceMissingOptionals?.length) {
      let e = this.queryDef.path.slice(1).join(".");
      for (let i of this.context.options?.forceMissingOptionals) if (i.slice(0, i.length - 1).join(".") === e) {
        let e = i[i.length - 1];
        this.queryDef.optionalFields.has(e) && (t[this.queryDef.dealias(e)] = {
          status: ResourceStatus.Error,
          error: `Client configuration forced this field to go missing, path was ${JSON.stringify(i)}`
        });
      }
    }
    i ? this._result = {
      status: "loaded",
      errors: e,
      data: t
    } : this._result = {
      status: "errors",
      data: null,
      errors: e
    };
    return this._result;
  }
  resetResult() {
    this._result = void 0;
    this._isLoaded = !1;
    this.parent.resetResult();
  }
  isLoaded() {
    if (this._isLoaded) return !0;
    for (let e of this.children) if (!e.isLoaded()) return !1;
    this._isLoaded = !0;
    return this._isLoaded;
  }
  getQueryIds() {
    let e = [];
    for (let t of this.queriedChildren) e.push(...t.getQueryIds());
    for (let t of this.paginatedChildren) e.push(...t.getQueryIds());
    for (let t of this.computedObjectChildren) e.push(...t.getQueryIds());
    return e;
  }
  getLiveView() {
    return this.parent instanceof _$$A ? this.parent : this.parent.getLiveView();
  }
  debugState(e) {
    return {
      _: e(this),
      children: this.children.map(t => t.debugState(e))
    };
  }
}
export const A = $$c0;