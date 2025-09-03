import { assert, throwTypeError } from "../figma_app/465776";
import { Iz, eU } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { oE } from "../905/953718";
import { A } from "../905/920142";
import { C5 } from "../905/147383";
import { FC } from "../figma_app/502422";
import { Z1 } from "../905/401885";
import { sMZ } from "../figma_app/43951";
class p {
  constructor(e) {
    assert(!!e.userFlagName);
    this.lifecycle = e;
    this.userFlagName = e.userFlagName;
  }
  getLifecycleAtom() {
    return Z1(sMZ.Query({
      name: this.userFlagName
    }), e => ({
      lifecycleState: function (e = null, t) {
        return t ? {
          count: e,
          updatedAt: t
        } : null;
      }(e.currentUser.userFlagByName?.count, e.currentUser.userFlagByName?.updatedAt),
      lifecycleConfig: this.lifecycle
    }));
  }
  incrementLifecycleCounter() {
    FC(this.userFlagName);
  }
}
let m = resourceUtils.loaded({
  lifecycleState: null
});
function h(e) {
  if (e.userFlagName) return new p(e);
  if (e.localStorageName) return new C5(e);
  throw Error("[Curator]: Lifecycle must have either a user flag name or a local storage name");
}
export let $$g2 = Iz(e => e ? h(e).getLifecycleAtom() : eU(m));
export function $$f3(e) {
  h(e).incrementLifecycleCounter();
}
export function $$_0({
  lifecycleState: e,
  lifecycleConfig: t
}) {
  return t && e ? t.maxTimes && (e.count ?? 1) >= t.maxTimes ? {
    reasonType: oE.LifecycleCheckFail,
    cause: "MAX_TIMES"
  } : "cooldown" in t && function (e, t) {
    let i = function (e) {
      switch (e) {
        case "DAILY":
          return 1;
        case "WEEKLY":
          return 7;
        case "FORTNIGHTLY":
          return 14;
        case "MONTHLY":
          return 30;
        case "MONTH_AND_A_HALF":
          return 45;
        default:
          throwTypeError(e);
      }
    }(e);
    return A(t).isAfter(A().subtract(i, "day"));
  }(t.cooldown, e.updatedAt) ? {
    reasonType: oE.LifecycleCheckFail,
    cause: "COOLDOWN"
  } : void 0 : void 0;
}
export function $$A1(e) {
  switch (e) {
    case "COOLDOWN":
      return "The overlay is in a cooldown period";
    case "MAX_TIMES":
      return "The overlay has been shown the maximum number of times";
    default:
      throwTypeError(e);
  }
}
export const $1 = $$_0;
export const Gx = $$A1;
export const eC = $$g2;
export const _Z = $$f3;