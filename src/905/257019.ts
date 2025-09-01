import { getFeatureFlags } from "../905/601108";
import { debugState } from "../905/407919";
import { T9 } from "../figma_app/740025";
import { Ag } from "../figma_app/155287";
import { pluginAPIService } from "../905/3209";
import { U } from "../905/424668";
export function $$d0(e, t) {
  let i = e.roles.org?.id ?? "";
  return !!i && t === i;
}
class c {
  constructor(e) {
    this.extensionType = e;
  }
  hasAllowlist(e) {
    return this.extensionType === Ag.Plugin ? !!e?.id && e.plugins_whitelist_enforced : !!e?.id && e.widgets_whitelist_enforced;
  }
  async getAllowlistFromDB(e) {
    let {
      user,
      authedProfilesById
    } = debugState.getState();
    let n = T9({
      authedProfilesById,
      userId: user?.id
    });
    return (this.extensionType === Ag.Plugin ? await pluginAPIService.getOrgWhitelist({
      orgId: e.id,
      profileId: n?.id
    }) : await U.getOrgWhitelist({
      orgId: e.id,
      profileId: n?.id
    })).data.meta;
  }
  async canRunExtensionInsideOrg(e, t) {
    return !!$$d0(e, t.id) || (!e.roles.org || !!getFeatureFlags().community_hub_admin) && (!this.hasAllowlist(t) || !!(await this.getAllowlistFromDB(t)).find(t => t.id === e.id));
  }
}
let $$u2 = new c(Ag.Widget);
let $$p1 = new c(Ag.Plugin);
export const $u = $$d0;
export const E2 = $$p1;
export const Hr = $$u2;