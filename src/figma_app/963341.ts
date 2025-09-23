import { useMemo, useCallback } from "react";
import { ServiceCategories } from "../905/165054";
import { createLocalStorageAtom, atom, useAtomValueAndSetter, useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { getResourceDataOrFallback } from "../905/723791";
import { reportError } from "../905/11";
import { logError } from "../905/714362";
import { getFalseValue } from "../figma_app/897289";
import { getEditorTypeOrNull, editorTypeAtom } from "../figma_app/976749";
import { N } from "../905/482239";
import { getUserId } from "../905/372672";
import { FrecencyHistoryView } from "../figma_app/43951";
import { I as _$$I } from "../905/454965";
import { isQaSearchFrecencyEnabled } from "../figma_app/144974";
import { l as _$$l } from "../905/131889";
import { B } from "../905/108119";
import { n as _$$n } from "../905/548236";
import { SR, B3 } from "../905/954092";
let b = createLocalStorageAtom("frecencyHistory", {
  numItems: 0,
  userIds: {}
}, {
  subscribeToChanges: !1
}, {
  debounceTime: 1e3
});
let T = atom(e => e(FrecencyHistoryView.Query({})));
class I {
  constructor({
    json: e,
    setJson: t,
    userId: r,
    fullscreenEditorType: n
  }) {
    this.MAX_ENTRIES = 5e3;
    this.numItems = e.numItems;
    this.userIds = e.userIds;
    this.setJson = t;
    this.fullscreenEditorType = n ?? "none";
    this.userId = r ?? "anonymous";
    this.cachedActions = this.initActions();
    this.cachedQueries = this.initQueries();
  }
  addUsage(e, t) {
    let r = this.getActions();
    r.addUsage(e) && this.incrementTotalItems();
    let n = this.getQueries();
    n.addUsage(t, e) && this.incrementTotalItems();
    this.userIds[this.userId] = {
      ...this.userIds[this.userId],
      [this.fullscreenEditorType]: {
        actions: r.serialize(),
        queries: n.serialize()
      }
    };
    this.numItems > this.MAX_ENTRIES && this.prune();
    this.save();
    _$$I.updateFrecencyHistory({
      actionKey: e,
      timestamp: Date.now(),
      editorType: this.fullscreenEditorType
    });
  }
  prune() {
    let e = Object.entries(this.userIds).flatMap(([e, t]) => Reflect.ownKeys(t).flatMap(r => {
      let n = t[r];
      if (!n) return [];
      let {
        actions,
        queries
      } = n;
      let s = Object.entries(actions).flatMap(([t, {
        timestamps: n
      }]) => ({
        userId: e,
        editorType: r,
        action: t,
        timestamp: n[0]
      }));
      let o = Object.entries(queries).flatMap(([t, n]) => Object.entries(n).flatMap(([n, {
        timestamps: i
      }]) => ({
        userId: e,
        editorType: r,
        action: n,
        query: t,
        timestamp: i[0]
      })));
      return s.concat(o);
    }));
    e.sort((e, t) => e.timestamp - t.timestamp);
    let t = this.MAX_ENTRIES / 2;
    for (let r = 0; r < t; r++) {
      let {
        userId,
        editorType,
        action,
        query
      } = e[r];
      let s = this.userIds[userId][editorType];
      s && (void 0 !== query ? delete s.queries[query][action] : delete s.actions[action], this.userIds[userId][editorType] = s, this.numItems -= 1);
    }
  }
  incrementTotalItems() {
    this.numItems += 1;
  }
  initActions() {
    let e = this.userIds[this.userId]?.[this.fullscreenEditorType]?.actions ?? {};
    return new _$$l(e);
  }
  initQueries() {
    let e = this.userIds[this.userId]?.[this.fullscreenEditorType]?.queries ?? {};
    return new B(e);
  }
  getActions() {
    return this.cachedActions;
  }
  getQueries() {
    return this.cachedQueries;
  }
  save() {
    try {
      this.setJson({
        numItems: this.numItems,
        userIds: this.userIds
      });
      A = this;
    } catch (e) {
      logError("error", "Failed to save frecency data", e, {
        reportAsSentryError: !0
      });
    }
  }
  setMaxEntriesForTesting(e) {
    getFalseValue() && (this.MAX_ENTRIES = e);
  }
}
function S(e, t) {
  if (!e.data) return null;
  let r = getResourceDataOrFallback(e.data.actionsHistory);
  return r && r.frecencyHistory ? function (e, t) {
    let r = function (e) {
      let t;
      try {
        t = JSON.parse(e);
      } catch (t) {
        reportError(ServiceCategories.AI_FOR_PRODUCTION, Error(`Invalid JSON value for frecency history from DB: ${e}`), {});
        return null;
      }
      let r = SR.safeParse(t);
      if (!r.success) {
        reportError(ServiceCategories.AI_FOR_PRODUCTION, Error(`Invalid format for frecency history object from DB: ${e}`), {});
        return null;
      }
      let n = {};
      for (let [e, t] of Object.entries(r.data)) {
        let r = Number(e);
        if (!B3.safeParse(r).success) {
          reportError(ServiceCategories.AI_FOR_PRODUCTION, Error(`Invalid key in frecency history object from DB: ${e}`), {});
          return null;
        }
        n[r] = t;
      }
      return n;
    }(e);
    if (r && t) {
      let e = r[t]?.actions;
      if (e) return new _$$l(e);
    }
    return null;
  }(r.frecencyHistory, t) : null;
}
export function $$v1() {
  let [e, t] = useAtomValueAndSetter(b);
  let r = getUserId();
  let i = getEditorTypeOrNull();
  let s = useMemo(() => new I({
    json: e,
    setJson: t,
    userId: r,
    fullscreenEditorType: i
  }), [e, t, r, i]);
  return {
    addFrecencyUsage: useCallback((e, t) => {
      if (!isQaSearchFrecencyEnabled()) return;
      let r = _$$n(e);
      s.addUsage(r, t);
    }, [s]),
    frecencyByAction: S(useAtomWithSubscription(T), getEditorTypeOrNull()) || s.getActions(),
    frecencyByQuery: s.getQueries()
  };
}
let A = null;
export function $$x2() {
  let e = atomStoreManager.get(N).data;
  let t = atomStoreManager.get(editorTypeAtom);
  A && A.userId === e && A.fullscreenEditorType === t || (A = new I({
    json: atomStoreManager.get(b),
    setJson: e => atomStoreManager.set(b, e),
    userId: e,
    fullscreenEditorType: t
  }));
  return {
    actions: S(atomStoreManager.get(T), atomStoreManager.get(editorTypeAtom)) || A.getActions(),
    queries: A.getQueries()
  };
}
export function $$N0() {
  atomStoreManager.set(b, {
    numItems: 0,
    userIds: {}
  });
  A = null;
}
export const Zk = $$N0;
export const fJ = $$v1;
export const x0 = $$x2;
