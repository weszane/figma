import { z } from "zod"
import { createNoOpValidator } from "../figma_app/181241"

// Schema for video upload response data
const VideoUploadResponseSchema = z.object({
  video: z.object({
    url: z.string(),
    fields: z.record(z.string()),
    blob_upload_commit_key: z.string().optional(),
    signed_cloudfront_url: z.string().optional().nullable(),
  }).optional(),
  video_thumbnail: z.object({
    url: z.string(),
    fields: z.record(z.string()),
    signed_cloudfront_url: z.string().optional().nullable(),
  }),
}).transform((data) => {
  const {
    video,
    video_thumbnail,
  } = data

  return {
    video: video
      ? {
          url: video.url,
          fields: video.fields,
          blobUploadCommitKey: video.blob_upload_commit_key,
          signedCloudfrontUrl: video.signed_cloudfront_url,
        }
      : undefined,
    videoThumbnail: {
      url: video_thumbnail.url,
      fields: video_thumbnail.fields,
      signedCloudfrontUrl: video_thumbnail.signed_cloudfront_url,
    },
  }
})

// Type definitions for better type safety
interface ResourceTypeInfo {
  resourceType: string
  id: string
  sha1: string
}

type VideoUploadParams = ResourceTypeInfo & {
  thumbnail_sha1?: string
}

/**
 * Video upload service class
 * Handles video upload operations and validation
 */
export const VideoUploadService = new class {
  AdminVideosUploadSchemaValidator = createNoOpValidator()
  getAdminVideosUpload = (params: ResourceTypeInfo) =>
    this.AdminVideosUploadSchemaValidator.validate(async ({
      xr: client,
    }) => await client.get(`/api/admin/${params.resourceType}/${params.id}/videos/${params.sha1}/upload`))

  // Validator for regular video uploads
  VideosUploadSchemaValidator = createNoOpValidator()
  getVideoUploadUrl = async (params: VideoUploadParams) => {
    const response = await this.VideosUploadSchemaValidator.validate(async ({
      xr: client,
    }) => await client.post(`/api/${params.resourceType}/${params.id}/videos/upload`, {
      sha1: params.sha1,
      thumbnail_sha1: params.thumbnail_sha1,
    }))

    return VideoUploadResponseSchema.parse(response.data.meta)
  }
}()

export const v = VideoUploadService
