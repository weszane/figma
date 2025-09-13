import { getFeatureFlags } from "../905/601108";
import { atom } from "../figma_app/27355";
import { currentUserOrgIdAtom } from "../905/845253";
import { OrgUserIsMfaRestrictedView } from "../figma_app/43951";
export let $$o0 = atom(e => {
  let t = getFeatureFlags().mfa_for_guests;
  let i = e(currentUserOrgIdAtom);
  if (!t || !i) return !1;
  let r = e(OrgUserIsMfaRestrictedView.Query({
    orgId: i
  }));
  if ("loaded" !== r.status) return !1;
  let o = r.data.currentUser.baseOrgUser?.isMfaRestricted;
  return o?.status === "loaded" && !0 === o.data;
});
export const _ = $$o0;