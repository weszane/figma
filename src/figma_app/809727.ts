import { z } from 'zod'
import { communityHubFileThumbnailSizes } from '../905/458036'

// Enum for media types
export enum MediaType {
  CURATED_IMAGE = 0,
  EMBED = 1,
}

// Schema for resized thumbnail URLs, validated against community hub file thumbnail sizes
export const resizedThumbnailUrlsSchema = z.record(
  z.string().refine(e => Object.keys(communityHubFileThumbnailSizes.COMMUNITY_HUB_FILE_THUMBNAIL).includes(e)),
  z.string().url(),
)

// Base schema for objects with a URL
export const baseUrlSchema = z.object({
  url: z.string().url(),
})

// Schema for community file objects
export const communityFileSchema = baseUrlSchema.extend({
  id: z.string(),
  sha1: z.string(),
  resized_thumbnail_urls: z.optional(resizedThumbnailUrlsSchema),
  created_at: z.coerce.date(),
})

// Record schema for community files
export const communityFilesRecordSchema = z.record(z.string(), communityFileSchema)

// Extended base URL schema with sha1 and buffer (for buffer-based files)
baseUrlSchema.extend({
  sha1: z.string(),
  buffer: z.instanceof(Uint8Array),
})

// Base schema for thumbnail objects
export const baseThumbnailSchema = z.object({
  url: z.string().url(),
  thumbnail_url: z.string().url(),
})

// Schema for video file objects
export const videoFileSchema = baseThumbnailSchema.extend({
  id: z.string(),
  sha1: z.string(),
  thumbnail_sha1: z.string(),
  video_file_uuid: z.string().uuid(),
})

// Record schema for video files
export const videoFilesRecordSchema = z.record(z.string(), videoFileSchema)

/**
 * Checks if the given object has a 'buffer' property (indicating a buffer-based file).
 * @param e - The object to check.
 * @returns True if 'buffer' is in the object, false otherwise.
 */
export function hasBuffer(e: any): e is { buffer: Uint8Array } {
  return 'buffer' in e
}

/**
 * Checks if the given object has an 'id' property.
 * @param e - The object to check.
 * @returns True if 'id' is in the object, false otherwise.
 */
export function hasId(e: any): e is { id: string } {
  return 'id' in e
}

// Extended base thumbnail schema with sha1, buffer, thumbnail_sha1, and thumbnail_buffer (for full video buffer files)
baseThumbnailSchema.extend({
  sha1: z.string(),
  buffer: z.instanceof(Uint8Array),
  thumbnail_sha1: z.string(),
  thumbnail_buffer: z.instanceof(Uint8Array),
})

// Exports with original names mapped to refactored internal names
export const Fy = videoFilesRecordSchema
export const P1 = resizedThumbnailUrlsSchema
export const Sq = hasId
export const Z4 = MediaType
export const dE = hasBuffer
export const fE = communityFilesRecordSchema
