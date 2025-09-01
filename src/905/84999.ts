import { z, Ip } from "../905/239603";
import { Ay } from "../905/612521";
import { YV } from "../figma_app/181241";
import { WU } from "../figma_app/35887";
let o = z.object({
  script: z.string(),
  name: z.string(),
  file_key: z.string(),
  source_file_key: z.string().nullable(),
  needs_upgrade: z.boolean(),
  org_drafts_owners: z.array(WU),
  prefix: z.string(),
  shared_fonts: Ip.ignore(),
  feature_flags: Ip.ignore(),
  is_community_duplicate: z.boolean(),
  file_repo: Ip.ignore(),
  can_edit: z.boolean(),
  current_team_user: Ip.ignore(),
  redirect_to_password_auth: z.boolean().optional(),
  last_published_at: z.string().nullable(),
  team: Ip.ignore(),
  is_team_template: z.boolean(),
  jubilee_tentative_plan_eligibility: z.boolean(),
  jubilee_tentative_user_eligibility: z.boolean(),
  jubilee_b: z.boolean(),
  jubilee_eligibility_s: z.number().nullable()
});
let $$l0 = new class {
  constructor() {
    this.FileMetadataSchemaValidator = YV("FileMetadataSchemaValidator", o, null, !1);
  }
  getFileMetadata(e) {
    let t = new URLSearchParams(Ay.location.search);
    let i = new URLSearchParams();
    let n = t.get("force-incremental") || "";
    "" !== n && i.append("force-incremental", n);
    let a = t.get("preload") || "";
    "" !== a && i.append("preload", a);
    return this.FileMetadataSchemaValidator.validate(async ({
      xr: t
    }) => {
      let n = `/api/file_metadata/${e.fileKey}`;
      let r = i.toString();
      let a = "" === r ? n : `${n}?${r}`;
      return await t.get(a);
    });
  }
}();
export const m = $$l0; 
