import { Iz, eU } from "../figma_app/27355";
import { Qw } from "../905/989992";
import { _ob } from "../figma_app/43951";
import { Z1 } from "../905/401885";
import { _s } from "../figma_app/33126";
let l = Iz(({
  orgId: e,
  eventType: t
}) => Z1(_ob.Query({
  orgId: e,
  eventType: t
}), e => !!e.currentUser.baseOrgUser?.orgUserFlag?.id));
let $$d0 = Iz(e => eU(t => {
  let n = t(_s);
  return n ? t(l({
    orgId: n,
    eventType: e
  })) : Qw.disabled();
}));
export const g = $$d0;