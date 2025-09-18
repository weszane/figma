// Original file: /Users/allen/github/fig/src/905/966582.ts

// Image-related constants
// Original: $$o10
export const IMAGE_TYPES = {
  PNG: 'image/png',
  JPEG: 'image/jpeg',
  GIF: 'image/gif',
}

// Original: $$l8
export const IMAGE_TYPE_VALUES = Object.values(IMAGE_TYPES)

// Video-related constants
// Original: $$d1
export const VIDEO_TYPES = {
  MP4: 'video/mp4',
  WEBM: 'video/webm',
  QUICKTIME: 'video/quicktime',
}

// Original: $$c3
export const VIDEO_TYPE_VALUES = Object.values(VIDEO_TYPES)

// Original: $$u6
export const QUICKTIME_TYPES = ['video/quicktime']

// Size limits
// Original: $$n4
export const MAX_IMAGE_SIZE = 100

// Original: $$r9
export const MAX_VIDEO_SIZE = 1e8

// Original: $$a2
export const MAX_UPLOADS = 30

// Original: $$s7
export const MAX_TOTAL_SIZE = 3e7

// Error codes
// Original: $$p5
export const UPLOAD_ERRORS = {
  INVALID_FILE_TYPE: 0,
  DUPLICATE_FILE_UPLOAD: 1,
  MAX_VIDEO_SIZE_EXCEEDED: 2,
  MAX_IMAGE_SIZE_EXCEEDED: 3,
  MAX_UPLOADS_EXCEEDED: 4,
  FAILED_TO_UPLOAD: 5,
}

// Original: $$m0
export const DEFAULT_UPLOAD_CONFIG = {
  type: 5,
  params: {
    numFiles: 1,
  },
}

/**
 * Default upload configuration.
 * Original: $$m0
 */
export const CN = DEFAULT_UPLOAD_CONFIG

/**
 * Video types object.
 * Original: $$d1
 */
export const Mr = VIDEO_TYPES

/**
 * Maximum uploads limit.
 * Original: $$a2
 */
export const PD = MAX_UPLOADS

/**
 * Video type values array.
 * Original: $$c3
 */
export const VY = VIDEO_TYPE_VALUES

/**
 * Maximum image size.
 * Original: $$n4
 */
export const Vx = MAX_IMAGE_SIZE

/**
 * Upload errors enum.
 * Original: $$p5
 */
export const Wn = UPLOAD_ERRORS

/**
 * Quicktime types array.
 * Original: $$u6
 */
export const cU = QUICKTIME_TYPES

/**
 * Maximum total size.
 * Original: $$s7
 */
export const id = MAX_TOTAL_SIZE

/**
 * Image type values array.
 * Original: $$l8
 */
export const xp = IMAGE_TYPE_VALUES

/**
 * Maximum video size.
 * Original: $$r9
 */
export const yi = MAX_VIDEO_SIZE

/**
 * Image types object.
 * Original: $$o10
 */
export const yj = IMAGE_TYPES
