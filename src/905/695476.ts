import { z } from "../905/239603";
import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
z.object({
  id: z.string(),
  node_id: z.string(),
  file_key: z.string(),
  link_name: z.string(),
  link_url: z.string()
});
export let $$a0 = new class {
  constructor() {
    this.LinkMetadataSchemaValidator = createNoOpValidator();
  }
  getLinkMetadata(e) {
    return this.LinkMetadataSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/upnode/link_metadata", APIParameterUtils.toAPIParameters({
      text: e.text,
      useEmbedsAllowList: e.useEmbedsAllowList,
      useLinkPreviewsV2: e.useLinkPreviewsV2
    }, ["useEmbedsAllowList", "useLinkPreviewsV2"])));
  }
}();
export const E = $$a0;