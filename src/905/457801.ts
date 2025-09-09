import { useCallback, useEffect } from "react";
import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { getLocalStorage, useStorageEventSync } from "../905/657224";
import { reportError } from "../905/11";
import { D } from "../905/417423";
import { h as _$$h } from "../905/706725";
import { tS } from "../figma_app/516028";
import { getUserId } from "../905/372672";
import { kK } from "../figma_app/144974";
let h = "recent_fragments";
let $$g0 = new class {
  constructor(e = 25, t = 6048e5) {
    this.maxRecents = e;
    this.expiry = t;
  }
  getRecentsLocalStorage() {
    let e = getLocalStorage();
    if (!e) return null;
    let t = e.getItem(h);
    return t ? JSON.parse(t) : null;
  }
  setRecentsLocalStorage(e) {
    let t = getLocalStorage();
    if (t) {
      if (!e) {
        t.removeItem(h);
        return;
      }
      t.setItem(h, JSON.stringify(e));
    }
  }
  addRecentFragment(e, t) {
    switch (t.type) {
      case "fig-file-fragment":
        let i = Date.now();
        let n = {
          fileKey: t.file_key,
          nodeId: t.node_id,
          userId: e,
          timestamp: i
        };
        let a = this.getRecentsLocalStorage();
        if (!a) {
          this.setRecentsLocalStorage([n]);
          return;
        }
        let s = [n, ...a.filter(n => i - n.timestamp < this.expiry && !(n.nodeId === t.node_id && n.fileKey === t.file_key && n.userId === e))].slice(0, this.maxRecents);
        this.setRecentsLocalStorage(s);
        break;
      case "hub-file-fragment":
        throw Error(`Unimplemented ${t.type}`);
      default:
        throwTypeError(t);
    }
  }
  clear() {
    this.setRecentsLocalStorage(null);
  }
}();
async function f(e, t, i) {
  try {
    let n = $$g0.getRecentsLocalStorage();
    if (!n || kK()) {
      i([]);
      return;
    }
    let r = Date.now();
    let a = n.filter(t => r - t.timestamp < 6048e5 && t.userId === e);
    if (0 === a.length) {
      i([]);
      return;
    }
    let s = (await D.lookupFragments({
      file_key: t,
      fragments: a.map(e => ({
        file_key: e.fileKey,
        node_id: e.nodeId
      }))
    })).data.meta.results.map(e => ({
      ...e,
      type: "fig-file-fragment"
    }));
    i(s);
  } catch (e) {
    i([]);
    reportError(_$$e.ML_PLATFORM, Error("Recent fragments error: " + e.message));
  }
}
export function $$_1(e = !1) {
  let [t, i] = useAtomValueAndSetter(_$$h.recentFragmentsAtom);
  let r = getUserId();
  let a = tS();
  let l = useCallback(() => {
    r && a && !e && f(r, a, i);
  }, [r, a, i, e]);
  useEffect(() => {
    r && a && l();
  }, [r, a, l]);
  let d = useCallback(e => {
    l();
  }, [l]);
  let m = useCallback(e => e.key === h, []);
  useStorageEventSync({
    onSync: d,
    shouldSyncValue: m
  });
  return {
    recentFragments: t
  };
}
export const U2 = $$g0;
export const cN = $$_1;