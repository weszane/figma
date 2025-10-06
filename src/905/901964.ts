import { reportError } from '../905/11'
import { sha1Hex } from '../905/125019'
import { ServiceCategories } from '../905/165054'
import { fileCommentAttachmentAPI } from '../905/348437'
import { feedCommentAttachmentAPI } from '../905/375499'
import { isFeedPostComposer } from '../905/380385'
import { UploadError, uploadToPresignedPost } from '../905/623179'
import { DEFAULT_UPLOAD_CONFIG } from '../905/966582'
import { imageProcessor } from '../figma_app/291892'

export const DEFAULT_THUMBNAIL_SIZE = 5

export interface ImageAttachment {
  id: string
  mediaType: string
  imageUrl: string
  thumbnailUrl: string
  uploadedAt: string
  metadata: {
    dimensions: {
      height: number
      width: number
    }
    thumbnail_dimensions: {
      height: number
      width: number
    }
    file_name: string
  }
  altText: string | null
  isUploading: boolean
}

export interface ProcessedImageData {
  thumbnailByteArray?: Uint8Array
  dimensionData: {
    dimensions: {
      height: number
      width: number
    }
    thumbnail_dimensions: {
      height: number
      width: number
    }
  }
}

/**
 * Uploads an image attachment with thumbnail generation
 * (Original function: $$m1)
 */
export async function uploadImageAttachment(
  composerContext: any,
  updateAttachment: (attachment: ImageAttachment) => void,
  updateUploadPromise: (updater: (prev: Record<string, Promise<any>>) => Record<string, Promise<any>>) => void,
  handleUploadError: (error: any, attachment?: ImageAttachment) => void,
  imageUrl: string,
  mediaType: string,
  fileKey: string,
  uploadedAt: string,
  fileName: string,
): Promise<void> {
  try {
    // Fetch image data
    const imageDataArray = await fetch(imageUrl)
      .then(response => response.arrayBuffer())
      .then(buffer => new Uint8Array(buffer))

    const imageSha1 = sha1Hex(imageDataArray)

    // Generate thumbnail and dimensions
    const { thumbnailByteArray, dimensionData }: ProcessedImageData = await new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onerror = () => reject('Failed to load image')
      img.onload = () => resolve(img)
      img.src = imageUrl

      setTimeout(() => {
        reject('Image load timeout during thumbnail generation')
      }, 5000)
    }).then((img:any): ProcessedImageData => {
      // If GIF or small image, use original dimensions
      if (mediaType === 'image/gif' || (img.height <= 900 && img.width <= 900)) {
        return {
          dimensionData: {
            dimensions: {
              height: img.height,
              width: img.width,
            },
            thumbnail_dimensions: {
              height: img.height,
              width: img.width,
            },
          },
        }
      }

      // Create thumbnail for larger images
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        return {
          dimensionData: {
            dimensions: {
              height: img.height,
              width: img.width,
            },
            thumbnail_dimensions: {
              height: img.height,
              width: img.width,
            },
          },
        }
      }

      const { width, height } = calculateThumbnailDimensions(img.width, img.height)
      const thumbnailDimensions = {
        dimensions: {
          height: img.height,
          width: img.width,
        },
        thumbnail_dimensions: {
          height,
          width,
        },
      }

      canvas.width = width
      canvas.height = height
      ctx.drawImage(img, 0, 0, width, height)
      const imageData = new Uint8Array(ctx.getImageData(0, 0, canvas.width, canvas.height).data)

      return {
        dimensionData: thumbnailDimensions,
        thumbnailByteArray: imageProcessor.encodeInPlace(
          canvas.width,
          canvas.height,
          imageData,
          mediaType === 'image/jpeg',
          60,
          false,
        ),
      }
    })

    // Prepare metadata
    const metadata = {
      ...dimensionData,
      file_name: fileName,
    }

    const thumbnailSha1 = sha1Hex(thumbnailByteArray ?? imageDataArray)

    // Determine API endpoint based on composer context
    const isFeedComposer = isFeedPostComposer(composerContext)
    const apiCall = isFeedComposer
      ? feedCommentAttachmentAPI.post(mediaType, imageSha1, thumbnailSha1, uploadedAt, metadata)
      : fileCommentAttachmentAPI.post(fileKey, mediaType, imageSha1, thumbnailSha1, uploadedAt, metadata)

    const serviceCategory = isFeedComposer
      ? ServiceCategories.WAYFINDING
      : ServiceCategories.FEEDBACK

    const response = await apiCall

    if (response.status !== 200) {
      handleUploadError(DEFAULT_UPLOAD_CONFIG)
      return
    }

    const attachmentId = response.data.meta.uuid
    const attachment: ImageAttachment = {
      id: attachmentId,
      mediaType,
      imageUrl,
      thumbnailUrl: imageUrl,
      uploadedAt,
      metadata,
      altText: null,
      isUploading: true,
    }

    updateAttachment(attachment)

    const uploadType = isFeedComposer
      ? 'uploadImageFeedCommentAttachment'
      : 'uploadImageFileCommentAttachment'

    // Upload image and thumbnail
    const uploadPromises = Promise.all([
      uploadToPresignedPost(
        serviceCategory,
        `${uploadType}.image`,
        response.data.meta.image_presigned_post.upload_url,
        response.data.meta.image_presigned_post.fields,
        imageDataArray,
        mediaType,
      ),
      uploadToPresignedPost(
        serviceCategory,
        `${uploadType}.thumbnail`,
        response.data.meta.thumbnail_presigned_post.upload_url,
        response.data.meta.thumbnail_presigned_post.fields,
        thumbnailByteArray ?? imageDataArray,
        mediaType,
      ),
    ])

    updateUploadPromise(prev => ({
      ...prev,
      [attachmentId]: uploadPromises,
    }))

    // Handle upload completion
    uploadPromises
      .then(() => {
        updateAttachment({
          ...attachment,
          isUploading: false,
        })
      })
      .catch((error) => {
        reportError(serviceCategory, error)
        handleUploadError(DEFAULT_UPLOAD_CONFIG, attachment)
      })
  }
  catch (error) {
    const serviceCategory = isFeedPostComposer(composerContext)
      ? ServiceCategories.WAYFINDING
      : ServiceCategories.FEEDBACK
    reportError(serviceCategory, error)
    handleUploadError(error instanceof UploadError ? error : DEFAULT_UPLOAD_CONFIG)
  }
}

/**
 * Converts an image attachment to a file comment format
 * (Original function: $$h4)
 */
export function convertToFileComment(
  attachment: ImageAttachment,
  fileKey: string,
  fileCommentId: string,
): any {
  return {
    ...attachment,
    fileCommentId,
    fileKey,
    createdAt: attachment.uploadedAt,
    deletedAt: null,
    type: attachment.mediaType.split('/')[0],
    imageSha1: '',
    thumbnailSha1: '',
    locality: '',
  }
}

/**
 * Converts an array of attachments to a lookup object
 * (Original function: $$g3)
 */
export function createAttachmentsLookup(
  attachments: ImageAttachment[],
  fileKey: string,
  fileCommentId: string,
): Record<string, any> | null {
  if (!attachments.length)
    return null

  return attachments.reduce((acc, attachment) => {
    acc[attachment.id] = convertToFileComment(attachment, fileKey, fileCommentId)
    return acc
  }, {} as Record<string, any>)
}

/**
 * Creates an empty lookup object from an array of IDs
 * (Original function: $$f2)
 */
export function createEmptyLookup(ids: string[]): Record<string, null> | null {
  if (!ids.length)
    return null

  return ids.reduce((acc, id) => {
    acc[id] = null
    return acc
  }, {} as Record<string, null>)
}

/**
 * Calculates thumbnail dimensions maintaining aspect ratio
 * (Original function: $$_0)
 */
export function calculateThumbnailDimensions(
  originalWidth: number,
  originalHeight: number,
  maxSize: number = 900,
): { width: number, height: number } {
  let width = maxSize
  let height = maxSize

  if (originalWidth > originalHeight) {
    height = originalHeight / originalWidth * maxSize
  }
  else {
    width = originalWidth / originalHeight * maxSize
  }

  return {
    width: Math.round(width),
    height: Math.round(height),
  }
}

// Export aliases for backward compatibility
export const $K = calculateThumbnailDimensions
export const JZ = uploadImageAttachment
export const LO = createEmptyLookup
export const Mu = createAttachmentsLookup
export const QG = convertToFileComment
export const xS = DEFAULT_THUMBNAIL_SIZE
