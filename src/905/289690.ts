import { z, Ip } from "../905/239603";
import { getInitialOptions } from "../figma_app/169182";
import { createMetaValidator, APIParameterUtils } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { fileEntityModel } from "../905/806985";
import { OrganizationUserSchemaAlias } from "../figma_app/35887";
import { z as _$$z } from "../905/954314";
let c = z.object({
  recent_files: fileEntityModel.array(),
  recent_repos: z.object({
    repo: _$$z,
    files: Ip.ignore(fileEntityModel.array()),
    timestamp: z.string()
  }).array(),
  org_drafts_owners: OrganizationUserSchemaAlias.array()
});
let $$u0 = new class {
  constructor() {
    this.RecentFilesOrgIdSchemaValidator = createMetaValidator("RecentFilesOrgIdSchemaValidator", c, null, !1);
  }
  getRecentFiles(e) {
    return this.RecentFilesOrgIdSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/recent_files", APIParameterUtils.toAPIParameters({
      ...e,
      fuid: getInitialOptions().user_data?.id
    })));
  }
  removeRecentFiles(e) {
    return XHR.del("/api/files_batch/view", {
      file_keys: e.fileKeys
    });
  }
}();
export const f = $$u0;