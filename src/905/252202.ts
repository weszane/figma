import { WB } from "../905/761735";
import { Qh } from "../figma_app/155728";
export function $$a0(e, t, i, a, s, o, l, d) {
  let c = function (e) {
    switch (e) {
      case Qh.USER:
        return "LibraryUserSubscription";
      case Qh.TEAM:
        return "LibraryTeamSubscription";
    }
  }(t);
  e?.subscriptionType === t && e.subscriptionId ? WB()?.optimisticallyUpdate({
    [c]: {
      [e.subscriptionId]: {
        isSubscribed: i,
        figJamSubscribed: a,
        slidesSubscribed: s,
        buzzSubscribed: o
      }
    }
  }, d) : WB().optimisticallyCreate({
    [c]: {
      [`${c}-${performance.now()}`]: {
        ...l,
        isSubscribed: i,
        figJamSubscribed: a,
        slidesSubscribed: s,
        buzzSubscribed: o,
        canRead: !0
      }
    }
  }, d);
}
export const J = $$a0;