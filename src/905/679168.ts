import { J as _$$J } from "../905/251556";
import { A as _$$A } from "../905/763387";
export function $$a1(e, t) {
  return _$$J([e, t]);
}
export class $$s0 {
  constructor(e, t, i, n) {
    this.key = e;
    this.viewDef = t;
    this.context = i;
    this.observable = n;
    this.root = new _$$A(this, i, {}, t.root, []);
  }
  root;
  viewResultForDebugging = void 0;
  get path() {
    return [this.key];
  }
  get viewArgs() {
    return this.context.viewArgs;
  }
  resultsUpdated() {}
  destroy() {
    this.root.destroy();
  }
  result() {
    if (this.viewResultForDebugging) return this.viewResultForDebugging;
    let e = this.root.result();
    "loaded" === e.status && Object.entries(e.data).every(([e, t]) => "object" == typeof t && null !== t && "status" in t && "error" === t.status) && (e = {
      status: "loading",
      data: null,
      errors: null
    });
    return e;
  }
  resetResult() {}
  isLoaded() {
    return this.root.isLoaded();
  }
  getQueryIds() {
    return this.root.getQueryIds();
  }
  setViewResultForDebugging(e) {
    this.viewResultForDebugging = e;
  }
  debugState(e) {
    return this.root.debugState(e);
  }
  static debugStateAsString(e, t = 0) {
    let i = " ".repeat(2 * t) + e._.toString();
    if (e.children) for (let n of e.children) i += "\n" + this.debugStateAsString(n, t + 1);
    return i;
  }
}
export const A = $$s0;
export const J = $$a1;