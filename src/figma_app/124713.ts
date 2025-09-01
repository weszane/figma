import { z } from "../905/239603";
import { vh, YV, td, _5 } from "../figma_app/181241";
import { WU } from "../figma_app/35887";
var $$s1 = (e => (e.DEV_MODE_BETA_SUGGESTED_UPGRADES = "dev_mode_beta_suggested_upgrades", e.MEMBERS_TAB = "members_tab", e.FILE_PERMISSIONS_MODAL = "file_permissions_modal", e))($$s1 || {});
export let $$o0 = new class {
  constructor() {
    this.GuestResourcesSchemaValidator = vh();
    this.OrgUserSchemaValidator = YV("OrgUserSchemaValidator", WU, null, !1);
    this.UpdateOrgUsersSchemaValidator = YV("UpdateOrgUsersSchemaValidator", z.array(WU), null, !1);
    this.CreateStarterTeamSchemaValidator = vh();
    this.requestUpgradeSchemaValidator = vh();
  }
  getGuestResources(e) {
    return this.GuestResourcesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/org_user/${e.orgUserId}/guest_resources`));
  }
  updateOrgUser(e) {
    let {
      id,
      changes
    } = e;
    return this.OrgUserSchemaValidator.validate(({
      xr: e
    }) => e.put(`/api/org_users/${id}`, td.toAPIParameters(changes)));
  }
  updateOrgUsers(e) {
    let {
      orgId,
      ...r
    } = e;
    return this.UpdateOrgUsersSchemaValidator.validate(({
      xr: t
    }) => t.put(`/api/orgs/${e.orgId}/org_users`, td.toAPIParameters(r)));
  }
  createStarterTeam() {
    return this.CreateStarterTeamSchemaValidator.validate(({
      xr: e
    }) => e.post("/api/org_user/create_starter_team"));
  }
  postOrgUserFlags(e) {
    let {
      orgUserId,
      flags
    } = e;
    return _5.validate(({
      xr: e
    }) => e.post(`/api/org_users/${orgUserId}/flags`, {
      flags
    }));
  }
  requestOrgAccountTypeRequest(e) {
    return this.requestUpgradeSchemaValidator.validate(async ({
      xr: t
    }) => await t.post(`/api/orgs/${e.org_id}/org_users/request_upgrade`, e));
  }
  getMemberCSVExport(e) {
    return _5.validate(({
      xr: t
    }) => t.post(`/api/orgs/${e.orgId}/export_members`));
  }
}();
export const G = $$o0;
export const h = $$s1;