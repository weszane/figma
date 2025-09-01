import { vh } from "../figma_app/181241";
export let $$i0 = new class {
  constructor() {
    this.FileUsersSchemaValidator = vh();
    this.TeamSchemaValidator = vh();
    this.RolesSchemaValidator = vh();
  }
  getFileUsers(e) {
    return this.FileUsersSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/roles/file_users/${e.fileKey}`));
  }
  getTeam(e) {
    return this.TeamSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/roles/team/${e.teamId}`));
  }
  getRoles(e) {
    return this.RolesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/roles/${e.resourceType}/${e.resourceId}`));
  }
}();
export const G = $$i0;