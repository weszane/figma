import { vh, td } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.TeamRoleRequestsOrgIdSchemaValidator = vh();
  }
  getTeamRoleRequestsOrgId(e) {
    return this.TeamRoleRequestsOrgIdSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/team_role_requests", td.toAPIParameters(e)));
  }
}();
export const c = $$r0;