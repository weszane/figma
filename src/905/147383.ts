import { vA } from "../figma_app/465776";
import { Iz, E2, eU, zl } from "../figma_app/27355";
import { Qw } from "../905/989992";
import { TQ, x4 } from "../905/657224";
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
let g = Iz(e => E2(h(e), m() && TQ() ? null : u, p, {
  subscribeToChanges: !0
}, {
  parse: e => {
    let t = JSON.parse(e);
    return null === e ? null : (t.updatedAt && (t.updatedAt = new Date(t.updatedAt)), t);
  }
}));
export class $$f0 {
  constructor(e) {
    vA(!!e.localStorageName);
    this.lifecycle = e;
    this.baseAtom = g(this.lifecycle.localStorageName);
  }
  getLifecycleAtom() {
    return eU(e => {
      let t = e(this.baseAtom);
      return Qw.loaded({
        lifecycleState: t,
        lifecycleConfig: this.lifecycle
      });
    });
  }
  setLifecycleLocalStorageItem(e) {
    zl.set(this.baseAtom, e);
  }
  incrementLifecycleCounter() {
    if (!m()) return;
    let e = zl.get(this.baseAtom);
    let t = {
      count: e?.count ? e.count + 1 : 1,
      updatedAt: new Date()
    };
    this.setLifecycleLocalStorageItem(t);
  }
  setUpdatedAt(e) {
    let t = zl.get(this.baseAtom);
    if (!t) return;
    let i = {
      ...t,
      updatedAt: e
    };
    this.setLifecycleLocalStorageItem(i);
  }
  static removeStaleLocalStorageLifecycleNames() {
    x4 && Object.keys(x4).filter(e => e.startsWith(c)).filter(e => {
      let t = e.slice(c.length);
      return !d.includes(t);
    }).forEach(e => x4.removeItem(e));
  }
}
export const C5 = $$f0;