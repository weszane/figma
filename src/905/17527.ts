import { vh, td } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.HubFileMetadataSchemaValidator = vh();
  }
  getHubFileMetadata(e) {
    return this.HubFileMetadataSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/hub_file_metadata", td.toAPIParameters({
      file_key: e.fileKey
    })));
  }
}();
export const D = $$r0;