import { createRemovableAtomFamily, atom } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { OrgUserFlag } from "../figma_app/43951";
import { transformAtom } from "../905/401885";
import { currentUserOrgIdAtom } from "../figma_app/33126";
let l = createRemovableAtomFamily(({
  orgId: e,
  eventType: t
}) => transformAtom(OrgUserFlag.Query({
  orgId: e,
  eventType: t
}), e => !!e.currentUser.baseOrgUser?.orgUserFlag?.id));
let $$d0 = createRemovableAtomFamily(e => atom(t => {
  let n = t(currentUserOrgIdAtom);
  return n ? t(l({
    orgId: n,
    eventType: e
  })) : resourceUtils.disabled();
}));
export const g = $$d0;