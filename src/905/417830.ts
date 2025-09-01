import { DEFAULT_LOADING_STATE } from "../905/957591";
import { noop2 } from "../905/419236";
import { J } from "../905/251556";
export class $$s0 {
  constructor(e, t) {
    this.client = e;
    this.notifyUpdate = t;
  }
  view = null;
  stringifiedArgs = new WeakMap();
  subscriptions = new Map();
  update(e, t) {
    e !== this.view && (this.clear(), this.view = e);
    let i = new Set();
    for (let e of t) i.add(this.stringify(e));
    for (let [e, t] of this.subscriptions.entries()) i.has(e) || (t.unsubscribe(), this.subscriptions.$$delete(e));
    for (let i of t) {
      let t = this.stringify(i);
      if (this.subscriptions.has(t)) continue;
      let a = {
        unsubscribe: noop2,
        result: DEFAULT_LOADING_STATE
      };
      this.client && (a.unsubscribe = this.client.subscribe(e, i, e => {
        a.result !== e && (a.result = e, this.notifyUpdate());
      }));
      this.subscriptions.set(t, a);
    }
  }
  clear() {
    for (let e of this.subscriptions.values()) e.unsubscribe();
    this.subscriptions.clear();
  }
  currentResult(e) {
    return this.subscriptions.get(this.stringify(e))?.result || DEFAULT_LOADING_STATE;
  }
  stringify(e) {
    let t = this.stringifiedArgs.get(e);
    t || (t = J(e), this.stringifiedArgs.set(e, t));
    return t;
  }
}
export const A = $$s0;