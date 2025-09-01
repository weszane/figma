import { ExponentialBackoff, createDeferredPromise } from "../905/419236";
import { nn } from "../figma_app/28817";
import { M } from "../905/609813";
export class $$s0 {
  constructor(e, t, i, s, o, l) {
    this.transactionId = e;
    this.objectNameToQueryIds = t;
    this.computedFields = i;
    this.affectedViewKeys = s;
    this.exponentialBackoff = new ExponentialBackoff({
      maxAttempt: 2,
      backoffInitialMs: 3e3,
      backoffMaxMs: 1e4,
      backoffMultiplier: 1.5
    });
    let [d, c, u] = createDeferredPromise();
    let p = o ? new M({
      onTimeout: (e, t) => {
        l(e, t);
        u(new nn());
      },
      timeoutMs: o
    }) : null;
    this.syncPromise = d;
    this.successCallback = () => {
      c();
      p?.finish();
    };
  }
  exponentialBackoff;
  retryNumber = 0;
  retryTimeout = null;
  syncPromise;
  successCallback;
  async waitForSync() {
    await this.syncPromise;
  }
  getRetryAfterMs() {
    return this.exponentialBackoff.shouldAttempt() ? this.exponentialBackoff.nextBackoffMs() : void 0;
  }
  toPayload() {
    let e = [];
    let t = {};
    for (let [i, n] of this.objectNameToQueryIds ?? []) for (let r of n) {
      e.push(r);
      t[i] || (t[i] = []);
      t[i].push(r);
    }
    return {
      messageType: "sync",
      transactionId: this.transactionId,
      queryIds: e,
      computedFields: this.computedFields,
      objectNameToQueryIds: t,
      retryNumber: this.retryNumber,
      affectedViewKeys: Array.from(this.affectedViewKeys ?? [])
    };
  }
}
export const Q = $$s0;