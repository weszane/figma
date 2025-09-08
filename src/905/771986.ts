import { z } from "../905/239603";
import { createNoOpValidator } from "../figma_app/181241";
let a = z.object({
  sha1: z.string(),
  url: z.string(),
  carousel_position: z.number(),
  signed_cloudfront_url: z.string().optional().nullable(),
  fields: z.record(z.string())
}).transform(e => ({
  sha1: e.sha1,
  url: e.url,
  carouselPosition: e.carousel_position,
  signedCloudfrontUrl: e.signed_cloudfront_url,
  fields: e.fields
}));
let s = z.object({
  image_path: z.string(),
  fields: z.record(z.string()),
  signed_cloudfront_url: z.string().optional().nullable()
}).transform(e => ({
  imagePath: e.image_path,
  fields: e.fields,
  signedCloudfrontUrl: e.signed_cloudfront_url
}));
let o = z.object({
  version_id: z.string(),
  code_upload_url: z.object({
    code_path: z.string(),
    fields: z.record(z.string()),
    signed_cloudfront_url: z.string().optional().nullable()
  }),
  icon_upload_url: s,
  cover_image_upload_url: s,
  snapshot_upload_url: s.optional(),
  signature: z.string(),
  image_upload_nonce: z.string().optional(),
  carousel_images: z.array(a)
}).transform(e => ({
  versionId: e.version_id,
  codeUploadUrl: {
    codePath: e.code_upload_url.code_path,
    fields: e.code_upload_url.fields,
    signedCloudfrontUrl: e.code_upload_url.signed_cloudfront_url
  },
  iconUploadUrl: e.icon_upload_url,
  coverImageUploadUrl: e.cover_image_upload_url,
  snapshotUploadUrl: e.snapshot_upload_url,
  signature: e.signature,
  imageUploadNonce: e.image_upload_nonce,
  carouselImages: e.carousel_images
}));
let l = z.object({
  icon_upload_url: s,
  cover_image_upload_url: s,
  snapshot_upload_url: s.optional().nullable(),
  image_upload_nonce: z.number().finite(),
  carousel_images: z.array(a)
}).transform(e => ({
  imageUploadNonce: e.image_upload_nonce,
  carouselImages: e.carousel_images,
  iconUploadUrl: e.icon_upload_url,
  coverImageUploadUrl: e.cover_image_upload_url,
  snapshotUploadUrl: e.snapshot_upload_url
}));
let $$d0 = new class {
  constructor() {
    this.postPluginUploadValidator = createNoOpValidator();
    this.postPluginUpload = async (e, t, i) => {
      let n = await this.postPluginUploadValidator.validate(async ({
        xr: n
      }) => await n.post(`/api/${i ? "widgets" : "plugins"}/${t}/upload`, e));
      return o.parse(n.data.meta);
    };
    this.postPluginImagesUploadValidator = createNoOpValidator();
    this.postPluginImagesUpload = async (e, t, i) => {
      let n = await this.postPluginImagesUploadValidator.validate(async ({
        xr: n
      }) => await n.post(`/api/${t ? "widgets" : "plugins"}/${e}/images/upload`, {
        images_sha1: i
      }));
      return l.parse(n.data.meta);
    };
    this.updateExtensionValidator = createNoOpValidator();
    this.updateExtension = (e, t, i) => this.updateExtensionValidator.validate(async ({
      xr: n
    }) => await n.put(`/api/${i ? "widgets" : "plugins"}/${t}`, e));
    this.updateExtensionRolesValidator = createNoOpValidator();
    this.updateExtensionRoles = (e, t, i) => this.updateExtensionRolesValidator.validate(async ({
      xr: n
    }) => await n.put(`/api/${i ? "widgets" : "plugins"}/${t}/roles`, e));
    this.updateExtensionVersionValidator = createNoOpValidator();
    this.updateExtensionVersion = (e, t, i, n) => this.updateExtensionVersionValidator.validate(async ({
      xr: r
    }) => await r.put(`/api/${n ? "widgets" : "plugins"}/${t}/versions/${i}`, e));
  }
}();
export const w = $$d0;