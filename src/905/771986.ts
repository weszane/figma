import { z } from 'zod'
import { createNoOpValidator } from '../figma_app/181241'

/**
 * @typedef CarouselImage
 * Represents a carousel image with metadata.
 */
export const CarouselImageSchema = z.object({
  sha1: z.string(),
  url: z.string(),
  carousel_position: z.number(),
  signed_cloudfront_url: z.string().optional().nullable(),
  fields: z.record(z.string()),
}).transform(e => ({
  sha1: e.sha1,
  url: e.url,
  carouselPosition: e.carousel_position,
  signedCloudfrontUrl: e.signed_cloudfront_url,
  fields: e.fields,
}))
// a (original variable name)

/**
 * @typedef ImageUploadUrl
 * Represents an image upload URL with metadata.
 */
export const ImageUploadUrlSchema = z.object({
  image_path: z.string(),
  fields: z.record(z.string()),
  signed_cloudfront_url: z.string().optional().nullable(),
}).transform(e => ({
  imagePath: e.image_path,
  fields: e.fields,
  signedCloudfrontUrl: e.signed_cloudfront_url,
}))
// s (original variable name)

/**
 * @typedef PluginUploadMeta
 * Represents metadata for plugin upload.
 */
export const PluginUploadMetaSchema = z.object({
  version_id: z.string(),
  code_upload_url: z.object({
    code_path: z.string(),
    fields: z.record(z.string()),
    signed_cloudfront_url: z.string().optional().nullable(),
  }),
  icon_upload_url: ImageUploadUrlSchema,
  cover_image_upload_url: ImageUploadUrlSchema,
  snapshot_upload_url: ImageUploadUrlSchema.optional(),
  signature: z.string(),
  image_upload_nonce: z.string().optional(),
  carousel_images: z.array(CarouselImageSchema),
}).transform(e => ({
  versionId: e.version_id,
  codeUploadUrl: {
    codePath: e.code_upload_url.code_path,
    fields: e.code_upload_url.fields,
    signedCloudfrontUrl: e.code_upload_url.signed_cloudfront_url,
  },
  iconUploadUrl: e.icon_upload_url,
  coverImageUploadUrl: e.cover_image_upload_url,
  snapshotUploadUrl: e.snapshot_upload_url,
  signature: e.signature,
  imageUploadNonce: e.image_upload_nonce,
  carouselImages: e.carousel_images,
}))
// o (original variable name)

/**
 * @typedef PluginImagesUploadMeta
 * Represents metadata for plugin images upload.
 */
export const PluginImagesUploadMetaSchema = z.object({
  icon_upload_url: ImageUploadUrlSchema,
  cover_image_upload_url: ImageUploadUrlSchema,
  snapshot_upload_url: ImageUploadUrlSchema.optional().nullable(),
  image_upload_nonce: z.number().finite(),
  carousel_images: z.array(CarouselImageSchema),
}).transform(e => ({
  imageUploadNonce: e.image_upload_nonce,
  carouselImages: e.carousel_images,
  iconUploadUrl: e.icon_upload_url,
  coverImageUploadUrl: e.cover_image_upload_url,
  snapshotUploadUrl: e.snapshot_upload_url,
}))
// l (original variable name)

/**
 * Handles plugin upload and update operations.
 */
export class PluginUploadHandler {
  postPluginUploadValidator = createNoOpValidator()
  postPluginImagesUploadValidator = createNoOpValidator()
  updateExtensionValidator = createNoOpValidator()
  updateExtensionRolesValidator = createNoOpValidator()
  updateExtensionVersionValidator = createNoOpValidator()

  /**
   * Uploads a plugin and returns parsed metadata.
   */
  async postPluginUpload(e: any, t: string, i: boolean) {
    // postPluginUpload (original method name)
    const response = await this.postPluginUploadValidator.validate(async ({ xr: n }) =>
      await n.post(`/api/${i ? 'widgets' : 'plugins'}/${t}/upload`, e),
    )
    return PluginUploadMetaSchema.parse(response.data.meta)
  }

  /**
   * Uploads plugin images and returns parsed metadata.
   */
  async postPluginImagesUpload(e: string, t: boolean, i: string[]) {
    // postPluginImagesUpload (original method name)
    const response = await this.postPluginImagesUploadValidator.validate(async ({ xr: n }) =>
      await n.post(`/api/${t ? 'widgets' : 'plugins'}/${e}/images/upload`, {
        images_sha1: i,
      }),
    )
    return PluginImagesUploadMetaSchema.parse(response.data.meta)
  }

  /**
   * Updates an extension.
   */
  updateExtension(e: any, t: string, i: boolean) {
    // updateExtension (original method name)
    return this.updateExtensionValidator.validate(async ({ xr: n }) =>
      await n.put(`/api/${i ? 'widgets' : 'plugins'}/${t}`, e),
    )
  }

  /**
   * Updates extension roles.
   */
  updateExtensionRoles(e: any, t: string, i: boolean) {
    // updateExtensionRoles (original method name)
    return this.updateExtensionRolesValidator.validate(async ({ xr: n }) =>
      await n.put(`/api/${i ? 'widgets' : 'plugins'}/${t}/roles`, e),
    )
  }

  /**
   * Updates extension version.
   */
  updateExtensionVersion(e: any, t: string, i: string, n: boolean) {
    // updateExtensionVersion (original method name)
    return this.updateExtensionVersionValidator.validate(async ({ xr: r }) =>
      await r.put(`/api/${n ? 'widgets' : 'plugins'}/${t}/versions/${i}`, e),
    )
  }
}

// Export with refactored name
export const PluginUploadApi = new PluginUploadHandler()
export const w = PluginUploadApi // w (original variable name)
