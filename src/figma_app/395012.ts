import { YV } from "../figma_app/181241";
import { wF } from "../905/814802";
var $$a0 = (e => (e.DEV_MODE_BETA_SUGGESTED_UPGRADES = "dev_mode_beta_suggested_upgrades", e.MEMBERS_TAB = "members_tab", e.FILE_PERMISSIONS_MODAL = "file_permissions_modal", e))($$a0 || {});
export let $$s1 = new class {
  constructor() {
    this.UpdateTeamUsersSchemaValidator = YV("UpdateTeamUsersSchemaValidator", wF.array(), null);
  }
  updateTeamUsers(e) {
    return this.UpdateTeamUsersSchemaValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/teams/${e.team_id}/team_user_batch`, e));
  }
}();
export const B = $$a0;
export const H = $$s1;