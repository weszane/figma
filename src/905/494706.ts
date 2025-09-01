import { vh, td } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.TrashedFilesV2SchemaValidator = vh();
  }
  getTrashedFilesV2(e) {
    return this.TrashedFilesV2SchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/trashed_files_v2", td.toAPIParameters({
      orgId: e.orgId || "",
      teamId: e.teamId || "",
      creatorFilter: e.creatorFilter || ""
    })));
  }
}();
export const p = $$r0;