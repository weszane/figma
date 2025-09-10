import { S } from "../905/872825";
import { nS, Ac, aV } from "../figma_app/321395";
import { UserProfileTab } from "../figma_app/707808";
import { VR, FZ, CS, p7 } from "../figma_app/979714";
let o = class extends nS { };
Ac(o);
o.displayName = "ProfileRoute";
o.path = "/@:profileHandle/:tabView?";
o.deserializeParams = e => ({
  profileHandle: e.profileHandle,
  tabView: S(e.tabView, UserProfileTab)
});
o.serializeParams = e => e;
export let $$l2 = o;
export function $$d0(e, t, i) {
  return t === UserProfileTab.RESOURCES || t === UserProfileTab.METRICS && i?.community_profile_handle !== e ? new $$l2({
    profileHandle: e
  }).href : new $$l2({
    profileHandle: e,
    tabView: t
  }).href;
}
let c = class extends nS { };
Ac(c);
c.displayName = "ResourceHubProfileRoute";
c.path = aV(VR, "/community/@:profileHandle");
c.serializeParams = e => ({
  ...FZ(e),
  profileHandle: e.profileHandle
});
c.deserializeParams = e => ({
  ...CS(e),
  profileHandle: e.profileHandle
});
c.parseQueryString = e => ({
  ...p7(e)
});
export let $$u1 = c;
export const bL = $$d0;
export const qL = $$u1;
export const xn = $$l2;
