import { UN } from "../905/700578";
import { zl } from "../figma_app/27355";
import { g } from "../905/880308";
import { hf } from "../figma_app/210234";
import { eU } from "../figma_app/908460";
import { VG, VA } from "../figma_app/761118";
class l {
  constructor(e) {
    this.next = null;
    this.prev = null;
    this.data = e;
  }
}
class d {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
    this.groupToFetchEntryMap = new Map();
  }
  get length() {
    return this._size;
  }
  push(e) {
    let t = e.violation.groupKey;
    let i = new l(e);
    if (this.groupToFetchEntryMap.has(t) && this.removeByGroupKey(t), this.head) {
      let e = this.groupToFetchEntryMap.get(this.head);
      e && (e.prev = t);
      i.next = this.head;
      this.head = t;
    } else this.head = this.tail = t;
    this._size++;
    this.groupToFetchEntryMap.set(t, i);
    return i;
  }
  pop() {
    if (!this.head) return null;
    let e = this.groupToFetchEntryMap.get(this.head);
    if (!e) return null;
    let t = e.data;
    this.removeByGroupKey(this.head);
    return t;
  }
  hasGroupKey(e) {
    return this.groupToFetchEntryMap.has(e);
  }
  moveToTop(e) {
    let t = this.groupToFetchEntryMap.get(e);
    if (!t || e === this.head) return void 0 !== t;
    this.removeFromLinkedList(e);
    let i = this.groupToFetchEntryMap.get(this.head);
    i && (i.prev = e);
    t.next = this.head;
    t.prev = null;
    this.head = e;
    this._size++;
    return !0;
  }
  removeFromLinkedList(e) {
    let t = this.groupToFetchEntryMap.get(e);
    if (t) {
      if (t.prev) {
        let e = this.groupToFetchEntryMap.get(t.prev);
        e && (e.next = t.next);
      } else this.head = t.next;
      if (t.next) {
        let e = this.groupToFetchEntryMap.get(t.next);
        e && (e.prev = t.prev);
      } else this.tail = t.prev;
      this._size--;
    }
  }
  removeByGroupKey(e) {
    this.removeFromLinkedList(e);
    this.groupToFetchEntryMap.$$delete(e);
  }
  removeAllWithGroupKey(e) {
    let t = [];
    let i = this.groupToFetchEntryMap.get(e);
    i && (t.push(i.data), this.removeByGroupKey(e));
    return t;
  }
  clear() {
    let e = [];
    let t = this.head;
    for (; t;) {
      let i = this.groupToFetchEntryMap.get(t);
      if (i) {
        e.push(i.data);
        t = i.next;
      } else break;
    }
    this.head = this.tail = null;
    this._size = 0;
    this.groupToFetchEntryMap.clear();
    return e;
  }
}
export class $$u0 {
  constructor(e) {
    this._fixRequestStack = new d();
    this._currentlyProcessingItemIds = new Set();
    this._BATCH_SIZE = 5;
    this._intervalId = null;
    this._abortSignal = null;
    this._groupKeyToFixPromiseMap = new Map();
    this._ruleManager = e;
  }
  get groupKeyToFixPromiseMap() {
    return this._groupKeyToFixPromiseMap;
  }
  setAbortSignal(e) {
    this._abortSignal = e;
  }
  startProcessingInterval() {
    this._intervalId || (this._intervalId = setInterval(() => this.processFixBatch(), 100));
  }
  maybeStopProcessingInterval() {
    this._intervalId && 0 === this._fixRequestStack.length && 0 === this._currentlyProcessingItemIds.size && (clearInterval(this._intervalId), this._intervalId = null);
  }
  enqueueFetchRequest(e) {
    if (this.hasLinterAborted()) return Promise.reject(new eU());
    let t = this._groupKeyToFixPromiseMap.get(e.groupKey);
    if (t) {
      this.moveGroupKeyToTopOfStack(e.groupKey);
      return t;
    }
    let i = zl.get(VG).get(e.groupKey);
    if (i?.status === "loaded" && i?.fix) {
      let t = Promise.resolve(i.fix);
      this._groupKeyToFixPromiseMap.set(e.groupKey, t);
      return t;
    }
    let n = new Promise((t, i) => {
      this.updateFixesCache(e.groupKey, null, "loading");
      let n = {
        violation: e,
        resolve: t,
        reject: i,
        id: g()
      };
      this._fixRequestStack.push(n);
      this.startProcessingInterval();
    });
    this._groupKeyToFixPromiseMap.set(e.groupKey, n);
    return n;
  }
  processFixBatch() {
    if (this.hasLinterAborted()) {
      this.teardownFixWorker();
      return;
    }
    let e = this._currentlyProcessingItemIds.size;
    let t = this._BATCH_SIZE - e;
    if (t <= 0) return;
    let i = 0;
    for (; i < t && this._fixRequestStack.length > 0;) {
      if (this.hasLinterAborted()) {
        this.teardownFixWorker();
        return;
      }
      let e = this._fixRequestStack.pop();
      e && (zl.get(VA).has(e.violation.violationId) ? (i++, this.processFixRequest(e)) : e.reject(Error("Violation is no longer active")));
    }
    this.maybeStopProcessingInterval();
  }
  hasLinterAborted() {
    return this._abortSignal?.aborted ?? !0;
  }
  async processFixRequest(e) {
    try {
      this._currentlyProcessingItemIds.add(e.id);
      let t = await this.getFixForViolation(e.violation);
      if (this.hasLinterAborted()) return;
      this.updateFixesCache(e.violation.groupKey, t, "loaded");
      e.resolve(t);
    } catch (t) {
      this.updateFixesCache(e.violation.groupKey, null, "error");
      e.reject(t);
    } finally {
      this._currentlyProcessingItemIds.$$delete(e.id);
    }
  }
  updateFixesCache(e, t, i) {
    let n = new Map(zl.get(VG));
    n.set(e, {
      fix: t,
      status: i
    });
    zl.set(VG, n);
  }
  async getFixForViolation(e) {
    let {
      guid,
      ruleId,
      groupKey
    } = e;
    let o = this._ruleManager.getRuleById(ruleId);
    if (!o) throw Error("Rule not found for violation");
    let l = UN().get(guid);
    if (!l) throw Error("Node not found for violation");
    let d = zl.get(VG).get(groupKey);
    if (d?.status === "loaded" && d?.fix) return d.fix;
    let u = await o.getFix(l, e.detectionContext, hf());
    if (!u || !u.valid) throw Error("Fix should not be undefined or invalid");
    return u;
  }
  removePromisesForViolations(e) {
    e.forEach(e => {
      this._groupKeyToFixPromiseMap.$$delete(e.groupKey);
    });
  }
  teardownFixWorker() {
    this._fixRequestStack.clear().forEach(e => {
      e.reject(Error("Fix request stack cleared"));
    });
    this._currentlyProcessingItemIds.clear();
    this._groupKeyToFixPromiseMap.clear();
    this.maybeStopProcessingInterval();
  }
  moveGroupKeyToTopOfStack(e) {
    this._fixRequestStack.moveToTop(e);
  }
}
export const O = $$u0;