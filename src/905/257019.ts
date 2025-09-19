import { getFeatureFlags } from "../905/601108";
import { debugState } from "../905/407919";
import { findProfile } from "../figma_app/740025";
import { PluginType } from "../figma_app/155287";
import { pluginAPIService } from "../905/3209";
import { widgetAPIClient } from "../905/424668";
export function $$d0(e, t) {
  let i = e.roles.org?.id ?? "";
  return !!i && t === i;
}
class c {
  constructor(e) {
    this.extensionType = e;
  }
  hasAllowlist(e) {
    return this.extensionType === PluginType.Plugin ? !!e?.id && e.plugins_whitelist_enforced : !!e?.id && e.widgets_whitelist_enforced;
  }
  async getAllowlistFromDB(e) {
    let {
      user,
      authedProfilesById
    } = debugState.getState();
    let n = findProfile({
      authedProfilesById,
      userId: user?.id
    });
    return (this.extensionType === PluginType.Plugin ? await pluginAPIService.getOrgWhitelist({
      orgId: e.id,
      profileId: n?.id
    }) : await widgetAPIClient.getOrgWhitelist({
      orgId: e.id,
      profileId: n?.id
    })).data.meta;
  }
  async canRunExtensionInsideOrg(e, t) {
    return !!$$d0(e, t.id) || (!e.roles.org || !!getFeatureFlags().community_hub_admin) && (!this.hasAllowlist(t) || !!(await this.getAllowlistFromDB(t)).find(t => t.id === e.id));
  }
}
let $$u2 = new c(PluginType.Widget);
let $$p1 = new c(PluginType.Plugin);
export const $u = $$d0;
export const E2 = $$p1;
export const Hr = $$u2;