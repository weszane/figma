import { createNoOpValidator, defaultValidator } from '../figma_app/181241'
/**
 * Validator for FileCommentAttachmentSchema operations.
 */
export class FileCommentAttachmentHandler {
  private fileCommentAttachmentSchemaValidator = createNoOpValidator()

  /**
   * Posts a new file comment attachment.
   * @param fileId - The file identifier.
   * @param mediaType - The media type.
   * @param imageSha1 - SHA1 of the image.
   * @param thumbnailSha1 - SHA1 of the thumbnail.
   * @param uploadedAt - Upload timestamp.
   * @param metadata - Additional metadata.
   * @returns Validation result of the post operation.
   */
  post(
    fileId: string,
    mediaType: string,
    imageSha1: string,
    thumbnailSha1: string,
    uploadedAt: string,
    metadata: unknown,
  ) {
    // Original: post
    return this.fileCommentAttachmentSchemaValidator.validate(async ({ xr }) =>
      await xr.post(`/api/file/${fileId}/file_comment_attachments`, {
        media_type: mediaType,
        image_sha1: imageSha1,
        thumbnail_sha1: thumbnailSha1,
        uploaded_at: uploadedAt,
        metadata,
      }),
    )
  }

  /**
   * Deletes a file comment attachment.
   * @param fileId - The file identifier.
   * @param attachmentId - The attachment identifier.
   * @returns Validation result of the delete operation.
   */
  delete(fileId: string, attachmentId: string) {
    // Original: delete
    return defaultValidator.validate(async ({ xr }) =>
      await xr.del(`/api/file/${fileId}/file_comment_attachments/${attachmentId}`),
    )
  }

  /**
   * Updates a file comment attachment's alt text.
   * @param fileId - The file identifier.
   * @param attachmentId - The attachment identifier.
   * @param altText - The new alt text.
   * @returns Validation result of the put operation.
   */
  put(fileId: string, attachmentId: string, altText: string) {
    // Original: put
    return defaultValidator.validate(({ xr }) =>
      xr.put(`/api/file/${fileId}/file_comment_attachments/${attachmentId}`, {
        alt_text: altText,
      }),
    )
  }
}

// Export with original variable names for compatibility
export const fileCommentAttachmentAPI = new FileCommentAttachmentHandler()
export const l = fileCommentAttachmentAPI
