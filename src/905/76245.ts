import { z } from "../905/239603";
import { YV } from "../figma_app/181241";
export let $$a0 = new class {
  constructor() {
    this.UploadThumbnailsSchemaValidator = YV("UploadThumbnailsSchemaValidator", z.object({
      presigned_posts: z.array(z.object({
        url: z.string(),
        fields: z.record(z.string())
      }))
    }), null, !0);
  }
  getThumbnailsBufferPresignedPostUrl(e) {
    return this.UploadThumbnailsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/asset_thumbnail/upload_buffer", {
      num_chunks: e
    }));
  }
  getUploadThumbnailsPresignedPostUrls(e) {
    return this.UploadThumbnailsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/asset_thumbnail/upload_thumbnails", {
      num_thumbnails: e
    }));
  }
}();
export const b = $$a0;