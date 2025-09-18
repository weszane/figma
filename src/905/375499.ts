import { createNoOpValidator, defaultValidator } from '../figma_app/181241'
/**
 * FeedCommentAttachmentService handles API calls for feed comment attachments.
 * Original class: $$r0
 */
export class FeedCommentAttachmentService {
  private feedCommentAttachmentSchemaValidator = createNoOpValidator()

  /**
   * Posts a new feed comment attachment.
   * @param mediaType - Type of media
   * @param imageSha1 - SHA1 of the image
   * @param thumbnailSha1 - SHA1 of the thumbnail
   * @param uploadedAt - Upload timestamp
   * @param metadata - Additional metadata
   * @param locality - Locality info
   * @returns Validation result of the post request
   */
  post(
    mediaType: string,
    imageSha1: string,
    thumbnailSha1: string,
    uploadedAt: string,
    metadata: any,
    locality?: any,
  ) {
    return this.feedCommentAttachmentSchemaValidator.validate(async ({ xr }) =>
      await xr.post('/api/feed_comment_attachment', {
        media_type: mediaType,
        image_sha1: imageSha1,
        thumbnail_sha1: thumbnailSha1,
        uploaded_at: uploadedAt,
        metadata,
        locality,
      }),
    )
  }

  /**
   * Deletes a feed comment attachment by ID.
   * @param id - Attachment ID
   * @returns Validation result of the delete request
   */
  delete(id: string) {
    return defaultValidator.validate(async ({ xr }) =>
      await xr.del(`/api/feed_comment_attachment/${id}`),
    )
  }

  /**
   * Updates the alt text of a feed comment attachment.
   * @param id - Attachment ID
   * @param altText - New alt text
   * @returns Validation result of the put request
   */
  put(id: string, altText: string) {
    return defaultValidator.validate(async ({ xr }) =>
      await xr.put(`/api/feed_comment_attachment/${id}`, {
        alt_text: altText,
      }),
    )
  }
}

// Export with original variable name for compatibility
export const feedCommentAttachmentAPI = new FeedCommentAttachmentService()
export const J = feedCommentAttachmentAPI
