import { z } from "../905/239603";
import { createMetaValidator } from "../figma_app/181241";
let a = z.object({
  save_location: z.string(),
  folder_name: z.string().optional(),
  org_id: z.string().optional()
});
let $$s0 = createMetaValidator("ClaimTryFileSchemaValidator", a, null, !0);
let $$o1 = new class {
  claimTryFile(e) {
    return $$s0.validate(async ({
      xr: t
    }) => e.folderId ? await t.put(`/api/file/claim/${e.fileKey}`, {
      folder_id: e.folderId
    }) : await t.put(`/api/file/claim/${e.fileKey}`));
  }
}();
export const If = $$s0;
export const Uy = $$o1;