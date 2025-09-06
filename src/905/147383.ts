import { assert } from "../figma_app/465776";
import { createRemovableAtomFamily, createValidatedLocalStorageAtom, atom, atomStoreManager } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { getLocalStorage, localStorageRef } from "../905/657224";
import { z } from "../905/239603";
import { getInitialOptions } from "../figma_app/169182";
let d = ["test_local_storage", "seen_browser_notifications_onboarding_overlay"];
let c = "CURATOR_";
let u = {
  count: 1e6,
  updatedAt: new Date("9999-01-01")
};
let p = z.object({
  count: z.number(),
  updatedAt: z.$$instanceof(Date)
});
let m = () => !!getInitialOptions().user_data?.id;
let h = e => `${c}${e}`;
let g = createRemovableAtomFamily(e => createValidatedLocalStorageAtom(h(e), m() && getLocalStorage() ? null : u, p, {
  subscribeToChanges: !0
}, {
  parse: e => {
    let t = JSON.parse(e);
    return null === e ? null : (t.updatedAt && (t.updatedAt = new Date(t.updatedAt)), t);
  }
}));
export class $$f0 {
  constructor(e) {
    assert(!!e.localStorageName);
    this.lifecycle = e;
    this.baseAtom = g(this.lifecycle.localStorageName);
  }
  getLifecycleAtom() {
    return atom(e => {
      let t = e(this.baseAtom);
      return resourceUtils.loaded({
        lifecycleState: t,
        lifecycleConfig: this.lifecycle
      });
    });
  }
  setLifecycleLocalStorageItem(e) {
    atomStoreManager.set(this.baseAtom, e);
  }
  incrementLifecycleCounter() {
    if (!m()) return;
    let e = atomStoreManager.get(this.baseAtom);
    let t = {
      count: e?.count ? e.count + 1 : 1,
      updatedAt: new Date()
    };
    this.setLifecycleLocalStorageItem(t);
  }
  setUpdatedAt(e) {
    let t = atomStoreManager.get(this.baseAtom);
    if (!t) return;
    let i = {
      ...t,
      updatedAt: e
    };
    this.setLifecycleLocalStorageItem(i);
  }
  static removeStaleLocalStorageLifecycleNames() {
    localStorageRef && Object.keys(localStorageRef).filter(e => e.startsWith(c)).filter(e => {
      let t = e.slice(c.length);
      return !d.includes(t);
    }).forEach(e => localStorageRef.removeItem(e));
  }
}
export const C5 = $$f0;