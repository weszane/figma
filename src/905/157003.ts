import { c2 } from "../905/382883";
import { getFeatureFlags } from "../905/601108";
import { createRemovableAtomFamily, atom, atomStoreManager, setupAtomWithMount, t_ } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { W } from "../905/491061";
import { serializeJSON } from "../905/251556";
import { observableState } from "../905/441145";
import { Xm } from "../905/723791";
import { lQ } from "../905/934246";
class u {
  constructor(e, t = 5e3) {
    this.cacheScheduler = e;
    this.cacheTTL = t;
    this.values = new Map();
    this.nextCheckAt = null;
    this.pendingCleanUp = null;
    this.get = e => this.values.get(e)?.value;
    this.cleanUp = () => {
      this.pendingCleanUp = null;
      let e = null;
      for (let [t, i] of this.values) {
        let n = this.cacheScheduler.now();
        if (i.expiresAt > n) {
          e = !e || e > i.expiresAt ? i.expiresAt : e;
          continue;
        }
        this.values.$$delete(t);
      }
      e && (this.pendingCleanUp = this.cacheScheduler.expireIn(this.cleanUp, Math.max(e - this.cacheScheduler.now(), 0)));
    };
    this.set = (e, t, i = this.cacheTTL) => {
      let n = this.cacheScheduler.now() + i;
      this.values.set(e, {
        value: t,
        expiresAt: n
      });
      (null === this.nextCheckAt || this.nextCheckAt > n) && (this.pendingCleanUp && this.cacheScheduler.clearExpireIn(this.pendingCleanUp), this.nextCheckAt = n, this.pendingCleanUp = this.cacheScheduler.expireIn(this.cleanUp, i));
    };
    this.clear = () => {
      this.values = new Map();
      this.pendingCleanUp && this.cacheScheduler.clearExpireIn(this.pendingCleanUp);
      this.nextCheckAt = null;
      this.pendingCleanUp = null;
    };
  }
}
let m = {
  expireIn: (e, t) => setTimeout(e, t),
  now: Date.now,
  clearExpireIn: e => clearTimeout(e)
};
let h = createRemovableAtomFamily(e => atom(() => $$f0(e)));
export function $$g1(e) {
  let t = h(e);
  return atomStoreManager.get(t);
}
export let $$f0 = function (e, t, i = new u(m, t)) {
  return t => function (e, t, i) {
    let d = createRemovableAtomFamily(n => {
      let u = new W(() => atomStoreManager.sub(_, () => {}));
      if (null === n) return atom(resourceUtils.disabledSuspendable(u));
      let m = serializeJSON(n);
      let h = `${e._name}:${m}`;
      let g = null;
      let f = setupAtomWithMount(t_(() => i.get(h) || Xm()), ({
        setSelf: a
      }) => {
        let s = t().subscribe(e, n, e => {
          a(t => "loading" !== t.status && "loading" === e.status ? t : (g = e, e));
        });
        return () => {
          d.setShouldRemove((e, t) => t === n);
          d.setShouldRemove(null);
          g && (getFeatureFlags().livestore_sanitize_cache ? i.set(h, {
            ...g,
            data: function e(t) {
              if ("object" != typeof t || null === t || t instanceof Date) return t;
              if (Array.isArray(t) && "hasNextPage" in t) {
                let e = [];
                for (let i in t) {
                  let n = "function" == typeof t[i] ? lQ : t[i];
                  Object.assign(e, {
                    [i]: n
                  });
                }
                return e;
              }
              let i = Array.isArray(t) ? [] : {};
              let n = !0;
              for (let r in t) {
                let a = t[r];
                let s = e(a);
                i[r] = s;
                a !== s && (n = !1);
              }
              return n ? t : i;
            }(g.data)
          }) : i.set(h, g));
          s();
        };
      });
      let _ = atom(i => resourceUtils.suspendableFrom(i(f), () => {
        var i;
        i = t();
        return new Promise((t, r) => {
          let a = i.subscribe(e, n, e => {
            "loaded" === e.status ? (t(), setTimeout(() => a?.())) : e.errors && (r(e.errors), setTimeout(() => a?.()));
          });
        });
      }, u));
      _.debugLabel = performance.now().toString();
      return _;
    }, c2);
    return Object.assign(e => d(e), {
      _atomFamily: d
    });
  }(t, e, i);
}(() => observableState.get(), 3e5);
export const he = $$f0;
export const gc = $$g1;