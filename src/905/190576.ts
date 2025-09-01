import { vh, td } from "../figma_app/181241";
import { mo } from "../figma_app/756995";
export let $$a0 = new class {
  constructor() {
    this.TrashedFoldersSchemaValidator = vh();
  }
  getTrashedFolders(e) {
    return this.TrashedFoldersSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/trashed_folders", td.toAPIParameters({
      orgId: e.orgId || "",
      teamId: e.teamId || "",
      roleFilter: mo(e.roleFilter)
    })));
  }
}();
export const V = $$a0;