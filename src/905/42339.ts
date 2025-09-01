import { DEFAULT_LOADING_STATE } from "../905/957591";
export class $$r0 {
  constructor(e, t, i, n, r) {
    this.parent = e;
    this.computation = t.parameterizedComputation(n.sessionArgs, n.viewArgs, r, e.queryDef.objectDef.naturalKey);
    let a = t.computedFieldDef.name;
    a in r ? (this.unsubscribe = () => {}, this.onUpdateResult(r[a])) : this.unsubscribe = i.subscribeComputation(this.computation, this);
  }
  computation;
  unsubscribe;
  _result;
  get path() {
    return [...this.parent.path, this.computation.computationId];
  }
  get fieldName() {
    return this.computation.fieldName;
  }
  destroy() {
    this.unsubscribe();
  }
  onUpdateResult(e) {
    this._result = {
      status: "loaded",
      errors: [],
      data: e
    };
    this.parent.resetResult();
    this.parent.resultsUpdated();
  }
  onErrors(e) {
    let {
      name
    } = this.computation.fieldDef;
    this._result = {
      status: "errors",
      data: null,
      errors: e.map(e => ({
        ...e,
        path: [name, ...e.path]
      }))
    };
    this.parent.resetResult();
    this.parent.resultsUpdated();
  }
  recreateIfStale(e, t) {}
  getLoadingPathsForDebugging() {
    return this._result ? [] : [this.computation.fieldDef.name];
  }
  getOptionalErrorPathsForDebugging() {
    return [];
  }
  result() {
    return this._result ? this._result : DEFAULT_LOADING_STATE;
  }
  isLoaded() {
    return !!this._result;
  }
  debugState(e) {
    return {
      _: e(this)
    };
  }
}
export function $$a1(e) {
  return e instanceof $$r0;
}
export const A = $$r0;
export const N = $$a1;