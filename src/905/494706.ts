import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.TrashedFilesV2SchemaValidator = createNoOpValidator();
  }
  getTrashedFilesV2(e) {
    return this.TrashedFilesV2SchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/trashed_files_v2", APIParameterUtils.toAPIParameters({
      orgId: e.orgId || "",
      teamId: e.teamId || "",
      creatorFilter: e.creatorFilter || ""
    })));
  }
}();
export const p = $$r0;