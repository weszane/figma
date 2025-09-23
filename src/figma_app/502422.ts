import { ServiceCategories } from "../905/165054";
import { createRemovableAtomFamily, atom, atomStoreManager } from "../figma_app/27355";
import { getInitialOptions } from "../figma_app/169182";
import { WB } from "../905/761735";
import { subscribeAndAwaitData } from "../905/553831";
import { useSubscription } from "../figma_app/288654";
import { reportError } from "../905/11";
import { UserFlagByName } from "../figma_app/43951";
import { H } from "../905/17478";
class p {
  constructor(e) {
    this.pendingIncrementCount = 0;
    this.makeDebouncedUpsertRequest = _(e => H.upsertUserFlagWithCount(this.userFlagName, e), 1e3);
    this.makeDebouncedResetRequest = _(() => H.resetUserFlag(this.userFlagName), 1e3);
    this.increment = async () => {
      let e;
      let t = getInitialOptions().user_data?.id;
      if (!t) {
        reportError(ServiceCategories.GROWTH_PLATFORM, Error(`Attempted to increment user flag counter ${this.userFlagName} for anonymous user; this is a no-op.`));
        return;
      }
      this.pendingIncrementCount += 1;
      try {
        e = await subscribeAndAwaitData(UserFlagByName, {
          name: this.userFlagName
        });
      } catch (e) {
        this.pendingIncrementCount -= 1;
        return e;
      }
      let r = e.currentUser.userFlagByName;
      if (0 === this.pendingIncrementCount) return;
      let i = (r ? r.count ?? 1 : 0) + this.pendingIncrementCount;
      this.pendingIncrementCount = 0;
      let l = this.makeDebouncedUpsertRequest(i);
      let u = new Date();
      return r ? WB().optimisticallyUpdate({
        UserFlag: {
          [r.id]: {
            count: i,
            updatedAt: u
          }
        }
      }, l) : WB().optimisticallyCreate({
        UserFlag: {
          [`optimistic-id-${this.userFlagName}`]: {
            userId: t,
            name: this.userFlagName,
            count: i,
            createdAt: u,
            updatedAt: u
          }
        }
      }, l);
    };
    this.reset = async () => {
      if (!getInitialOptions().user_data?.id) {
        reportError(ServiceCategories.GROWTH_PLATFORM, Error(`Attempted to reset user flag counter ${this.userFlagName} for anonymous user; this is a no-op.`));
        return;
      }
      let e = await subscribeAndAwaitData(UserFlagByName, {
        name: this.userFlagName
      });
      let t = e.currentUser?.userFlagByName;
      if (!t) return;
      let r = this.makeDebouncedResetRequest();
      return WB().optimisticallyDelete({
        UserFlag: {
          [t.id]: null
        }
      }, r);
    };
    this.userFlagName = e;
  }
}
function _(e, t = 200) {
  let r;
  let n = [];
  return function (...i) {
    clearTimeout(r);
    r = setTimeout(() => {
      let t = e(...i);
      n.forEach(e => e(t));
      n = [];
    }, t);
    return new Promise(e => n.push(e));
  };
}
let h = createRemovableAtomFamily(e => atom(() => new p(e)));
export function $$m1(e) {
  return atomStoreManager.get(h(e)).increment();
}
export function $$g0(e) {
  return useSubscription(UserFlagByName, {
    name: e
  }, {
    enabled: !!getInitialOptions().user_data?.id
  }).transform(e => e.currentUser.userFlagByName ? e.currentUser.userFlagByName.count ?? 1 : 0);
}
export const BN = $$g0;
export const FC = $$m1;
