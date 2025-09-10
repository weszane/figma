import { z } from "src/905/239603";
import { createNoOpValidator } from "src/figma_app/181241";
let a = z.object({
  video: z.object({
    url: z.string(),
    fields: z.record(z.string()),
    blob_upload_commit_key: z.string().optional(),
    signed_cloudfront_url: z.string().optional().nullable()
  }).optional(),
  video_thumbnail: z.object({
    url: z.string(),
    fields: z.record(z.string()),
    signed_cloudfront_url: z.string().optional().nullable()
  })
}).transform(e => {
  let {
    video,
    video_thumbnail
  } = e;
  return {
    video: video ? {
      url: video.url,
      fields: video.fields,
      blobUploadCommitKey: video.blob_upload_commit_key,
      signedCloudfrontUrl: video.signed_cloudfront_url
    } : void 0,
    videoThumbnail: {
      url: video_thumbnail.url,
      fields: video_thumbnail.fields,
      signedCloudfrontUrl: video_thumbnail.signed_cloudfront_url
    }
  };
});
let $$s0 = new class {
  constructor() {
    this.AdminVideosUploadSchemaValidator = createNoOpValidator();
    this.getAdminVideosUpload = e => this.AdminVideosUploadSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/admin/${e.resourceType}/${e.id}/videos/${e.sha1}/upload`));
    this.VideosUploadSchemaValidator = createNoOpValidator();
    this.getVideoUploadUrl = async e => {
      let t = await this.VideosUploadSchemaValidator.validate(async ({
        xr: t
      }) => await t.post(`/api/${e.resourceType}/${e.id}/videos/upload`, {
        sha1: e.sha1,
        thumbnail_sha1: e.thumbnail_sha1
      }));
      return a.parse(t.data.meta);
    };
  }
}();
export const v = $$s0;
