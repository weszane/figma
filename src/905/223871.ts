import { c2 } from "../905/382883";
import { zl } from "../figma_app/27355";
import { Av, L2 } from "../figma_app/542202";
import { u2, m7, VA, F9, XC } from "../figma_app/761118";
import { td } from "../figma_app/827216";
export class $$l0 {
  constructor() {
    this.abortController = new AbortController();
  }
  get linterAbortController() {
    return this.abortController;
  }
  get hasAborted() {
    return !!this.linterAbortController.signal.aborted;
  }
  resetLinterAbortController() {
    this.abortController.abort();
    this.abortController = new AbortController();
    return this.abortController;
  }
  getStatus() {
    return zl.get(u2);
  }
  setStatus(e) {
    let t = this.getStatus();
    zl.set(u2, e);
    (function (e) {
      let t = performance.now();
      let i = zl.get(Av);
      let n = [...zl.get(L2)];
      i && n.push({
        status: e,
        duration: t - i
      });
      zl.set(L2, n);
      zl.set(Av, t);
    })(t);
  }
  isLinterDetecting() {
    return this.getStatus() === td.DETECTING;
  }
  addNewViolations(e) {
    let t = new Map(zl.get(m7));
    let i = new Set(zl.get(VA));
    for (let n of e) {
      let e = t.get(n.guid)?.get(n.ruleId);
      if (e) e.push(n);else {
        let e = t.get(n.guid) ?? new Map();
        e.set(n.ruleId, [n]);
        t.set(n.guid, e);
      }
      i.add(n.violationId);
    }
    zl.set(m7, t);
    zl.set(VA, i);
  }
  isViolationIgnored(e) {
    return zl.get(F9).has(e.violationId);
  }
  isViolationActive(e) {
    return zl.get(VA).has(e.violationId);
  }
  isViolationFixed(e) {
    return zl.get(XC).has(e.violationId);
  }
  processFixedViolations(e) {
    let t = new Map(zl.get(m7));
    let i = new Set(zl.get(VA));
    let n = new Set(zl.get(XC));
    let a = [];
    for (let r of e) {
      let {
        ruleId,
        guid,
        violationId
      } = r;
      i.$$delete(violationId);
      n.add(violationId);
      let l = t.get(guid);
      if (l) {
        for (let [t, i] of l) {
          if (t !== ruleId) continue;
          let n = i.findIndex(e => e.violationId === violationId);
          -1 !== n && i.splice(n, 1);
        }
        l.get(ruleId)?.length === 0 && l.$$delete(ruleId);
        Array.from(l.values()).some(e => {
          for (let t of e) if (i.has(t.violationId)) return !0;
          return !1;
        }) ? t.set(guid, new Map(l)) : (t.$$delete(guid), a.push(guid));
      }
    }
    zl.set(XC, n);
    zl.set(VA, i);
    zl.set(m7, t);
    return a;
  }
  processObservedViolations(e, t, i) {
    let n = zl.get(m7);
    let a = zl.get(VA);
    let o = zl.get(XC);
    let l = zl.get(F9);
    let d = new Set(t);
    let c = this._createEmptyDiff();
    for (let [t, i] of this._groupViolationsByGuidAndRuleId(e).entries()) {
      d.$$delete(t);
      let e = this._getViolationsDiffForGuid(t, i, n);
      this._mergeDiffs(c, e);
    }
    let u = this._removeViolationsForCleanNodes(d, n);
    this._mergeDiffs(c, u);
    let p = this._removeViolationsForDeletedNodes(i, n);
    this._mergeDiffs(c, p);
    this._applyDiffToLinterState(c, n, a, o, l);
    return {
      cleanNodeIds: Array.from(d),
      newViolations: c.newViolations
    };
  }
  _createEmptyDiff() {
    return {
      deletedViolations: [],
      newViolations: []
    };
  }
  _mergeDiffs(e, t) {
    e.deletedViolations.push(...t.deletedViolations);
    e.newViolations.push(...t.newViolations);
  }
  _applyDiffToLinterState(e, t, i, n, a) {
    let o = new Map(t);
    let l = new Set(i);
    let d = new Set(n);
    let c = new Set(a);
    for (let t of e.deletedViolations) {
      let {
        violationId,
        guid,
        ruleId
      } = t;
      l.$$delete(violationId);
      d.$$delete(violationId);
      c.$$delete(violationId);
      let r = o.get(guid);
      if (r) {
        let t = r.get(ruleId);
        if (t) {
          let i = t.findIndex(t => t.violationId === violationId);
          -1 !== i && t.splice(i, 1);
          0 === t.length && r.$$delete(ruleId);
        }
        0 === r.size && o.$$delete(guid);
      }
    }
    for (let t of e.newViolations) {
      let {
        violationId,
        guid,
        ruleId
      } = t;
      l.add(violationId);
      o.has(guid) || o.set(guid, new Map());
      let r = o.get(guid);
      r.has(ruleId) || r.set(ruleId, []);
      r.get(ruleId).push(t);
    }
    zl.set(m7, o);
    zl.set(VA, l);
    zl.set(XC, d);
    zl.set(F9, c);
  }
  _groupViolationsByGuidAndRuleId(e) {
    return e.reduce((e, t) => {
      if (this.isViolationIgnored(t)) return e;
      e.has(t.guid) || e.set(t.guid, new Map());
      let i = e.get(t.guid);
      i.has(t.ruleId) || i.set(t.ruleId, []);
      i.get(t.ruleId)?.push(t);
      return e;
    }, new Map());
  }
  _getViolationsDiffForGuid(e, t, i) {
    let n = this._createEmptyDiff();
    let r = i.get(e);
    if (!r) {
      Array.from(t.values()).forEach(e => e.forEach(e => {
        n.newViolations.push(e);
      }));
      return n;
    }
    let a = new Set(t.keys());
    let s = this._getViolationsDiffForExistingRules(r, t, a);
    this._mergeDiffs(n, s);
    let o = this._getViolationsDiffForNewRules(a, t);
    this._mergeDiffs(n, o);
    return n;
  }
  _getViolationsDiffForExistingRules(e, t, i) {
    let r = this._createEmptyDiff();
    let a = new Map(e);
    for (let [s, o] of e.entries()) {
      if (!t.has(s)) {
        for (let e of (a.$$delete(s), o)) r.deletedViolations.push(e);
        i.$$delete(s);
        continue;
      }
      let e = t.get(s) ?? [];
      let l = new Set();
      let d = [];
      for (let t of o) {
        let i = !1;
        for (let r = 0; r < e.length; r++) {
          if (l.has(r)) continue;
          let a = e[r];
          if (c2(t.detectionContext, a.detectionContext)) {
            d.push(t);
            l.add(r);
            i = !0;
            break;
          }
        }
        i || r.deletedViolations.push(t);
      }
      for (let t = 0; t < e.length; t++) {
        if (l.has(t)) continue;
        let i = e[t];
        d.push(i);
        r.newViolations.push(i);
      }
      d.length > 0 ? a.set(s, d) : a.$$delete(s);
      i.$$delete(s);
    }
    return r;
  }
  _getViolationsDiffForNewRules(e, t) {
    let i = this._createEmptyDiff();
    if (0 === e.size) return i;
    for (let n of e) for (let e of t.get(n)) i.newViolations.push(e);
    return i;
  }
  _removeViolationsForCleanNodes(e, t) {
    let i = this._createEmptyDiff();
    for (let n of e) {
      let e = t.get(n);
      if (e) for (let t of e.values()) for (let e of t) i.deletedViolations.push(e);
    }
    return i;
  }
  _removeViolationsForDeletedNodes(e, t) {
    let i = this._createEmptyDiff();
    for (let n of e) {
      let e = t.get(n);
      if (e) for (let t of e.values()) for (let e of t) i.deletedViolations.push(e);
    }
    return i;
  }
  ignoreViolationsForGuidsWithGroupKey(e, t) {
    let i = zl.get(m7);
    let n = new Set(zl.get(F9));
    let a = new Set(zl.get(VA));
    let o = [];
    for (let r of e) {
      let e = i.get(r);
      if (!e) continue;
      let s = !0;
      for (let i of e.values()) for (let e of i) e.groupKey === t ? (a.$$delete(e.violationId), n.add(e.violationId)) : a.has(e.violationId) && (s = !1);
      s && o.push(r);
    }
    zl.set(F9, n);
    zl.set(VA, a);
    return o;
  }
  ignoreViolationIds(e) {
    let t = new Set(zl.get(F9));
    let i = new Set(zl.get(VA));
    let n = new Map(zl.get(m7));
    let a = [];
    for (let r of e) for (let [e, s] of (t.add(r), i.$$delete(r), n.entries())) {
      for (let [e, t] of s.entries()) {
        let i = t.findIndex(e => e.violationId === r);
        -1 !== i && (t.splice(i, 1), 0 === t.length && s.$$delete(e));
      }
      0 === s.size && (n.$$delete(e), a.push(e));
    }
    zl.set(F9, t);
    zl.set(VA, i);
    zl.set(m7, n);
    return a;
  }
  resetViolationsState() {
    zl.set(m7, new Map());
    zl.set(VA, new Set());
    zl.set(XC, new Set());
    zl.set(F9, new Set());
  }
}
export const p = $$l0;