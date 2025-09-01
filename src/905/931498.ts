function n(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
export let $$r1 = {
  getTimeBudgetMs: () => 1 / 0,
  getCurrentTimeMs: () => Date.now(),
  deferFn: e => (e(), () => {})
};
export class $$a0 {
  add(e, t) {
    let i = t.allowDeferral ? this.deferrableListeners : this.synchronousListeners;
    i.push(e);
    return () => {
      let t = i.indexOf(e);
      -1 !== t && i.splice(t, 1);
      let n = this.deferredListeners.indexOf(e);
      -1 !== n && this.deferredListeners.splice(n, 1);
    };
  }
  trigger() {
    let e = this.config.getCurrentTimeMs();
    for (let e of this.synchronousListeners) e();
    let t = new Set(this.deferredListeners);
    for (let e of this.deferrableListeners) t.has(e) || this.deferredListeners.push(e);
    this.deferredCancel?.();
    this.runDeferredListeners(e);
  }
  isPending(e) {
    return this.deferredListeners.includes(e);
  }
  runDeferredListeners(e = Date.now()) {
    let t = 0;
    let i = this.timeElapsedMs(e);
    let n = !1;
    for (; i < this.config.getTimeBudgetMs();) {
      let r = this.deferredListeners[t];
      if (!r) {
        n = !0;
        break;
      }
      r();
      t++;
      i = this.timeElapsedMs(e);
    }
    this.deferredListeners = this.deferredListeners.slice(t);
    n ? this.deferredCancel = void 0 : this.deferredCancel = this.config.deferFn(() => this.runDeferredListeners());
  }
  timeElapsedMs(e) {
    return this.config.getCurrentTimeMs() - e;
  }
  constructor(e) {
    n(this, "config", void 0);
    n(this, "synchronousListeners", void 0);
    n(this, "deferrableListeners", void 0);
    n(this, "deferredListeners", void 0);
    n(this, "deferredCancel", void 0);
    this.config = e;
    this.synchronousListeners = [];
    this.deferrableListeners = [];
    this.deferredListeners = [];
  }
}
export const P = $$a0;
export const Q = $$r1;