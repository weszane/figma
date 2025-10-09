import { IMAGE_TYPE_VALUES, MAX_IMAGE_SIZE, MAX_TOTAL_SIZE, MAX_UPLOADS, MAX_VIDEO_SIZE, UPLOAD_ERRORS, VIDEO_TYPE_VALUES } from "../905/966582"
import { imageProcessor } from "../figma_app/291892"

interface FileUploadError {
  type: any
  params?: Record<string, any>
}



/**
 * Validates file uploads based on various criteria including count, duplicates, types, and sizes.
 * Original function name: $$a0
 *
 * @param files - Array of files to validate
 * @param currentCount - Current number of uploaded files
 * @param maxUploads - Maximum allowed uploads
 * @param allowedTypes - Array of allowed MIME types
 * @param onError - Callback function to handle errors
 * @param existingFiles - Array of already uploaded files to check for duplicates
 * @returns Array of valid files that pass all validation checks
 */
export function validateFileUploads(
  files: File[],
  currentCount: number,
  maxUploads: number,
  allowedTypes: string[],
  onError: (error: FileUploadError) => void,
  existingFiles: File[] = [],
): File[] {
  // Check if total files exceed maximum allowed
  if (files.length > maxUploads) {
    onError({
      type: UPLOAD_ERRORS.MAX_UPLOADS_EXCEEDED,
      params: {
        maxNum: maxUploads,
      },
    })
    return []
  }

  // Filter out duplicate files
  const duplicateFileNames: string[] = []
  const uniqueFiles = files.filter((file) => {
    const isDuplicate = existingFiles.some(
      existingFile =>
        existingFile
        && existingFile.name === file.name
        && existingFile.lastModified === file.lastModified,
    )

    if (isDuplicate) {
      duplicateFileNames.push(file.name)
      return false
    }
    return true
  })

  // Check if adding new files would exceed maximum
  if (currentCount + uniqueFiles.length > maxUploads) {
    onError({
      type: UPLOAD_ERRORS.MAX_UPLOADS_EXCEEDED,
      params: {
        maxNum: maxUploads,
      },
    })
    return []
  }

  // Track validation errors
  let hasInvalidType = false
  let hasExceededVideoSize = false
  let hasExceededImageSize = false

  // Filter files by type and size
  const validFiles = uniqueFiles.filter((file) => {
    // Check if file type is allowed
    if (!allowedTypes.includes(file.type)) {
      hasInvalidType = true
      return false
    }

    // Validate video files
    if (VIDEO_TYPE_VALUES.includes(file.type)) {
      if (file.size > MAX_VIDEO_SIZE) {
        hasExceededVideoSize = true
        return false
      }
      return true
    }

    // Validate image files
    if (IMAGE_TYPE_VALUES.includes(file.type)) {
      if (file.size > MAX_TOTAL_SIZE) {
        hasExceededImageSize = true
        return false
      }
      return true
    }

    // If we reach here, it's an unsupported type
    hasInvalidType = true
    return false
  })

  // Report duplicate files
  if (duplicateFileNames.length > 0) {
    onError({
      type: UPLOAD_ERRORS.DUPLICATE_FILE_UPLOAD,
      params: {
        numFiles: duplicateFileNames.length,
        fileNames: duplicateFileNames.join(", "),
      },
    })
  }

  // Report invalid file types
  if (hasInvalidType) {
    onError({
      type: UPLOAD_ERRORS.INVALID_FILE_TYPE,
    })
  }

  // Report video size exceeded
  if (hasExceededVideoSize) {
    onError({
      type: UPLOAD_ERRORS.MAX_VIDEO_SIZE_EXCEEDED,
      params: {
        maxFileSizeMB: MAX_IMAGE_SIZE,
      },
    })
  }

  // Report image size exceeded
  if (hasExceededImageSize) {
    onError({
      type: UPLOAD_ERRORS.MAX_IMAGE_SIZE_EXCEEDED,
      params: {
        maxFileSizeMB: MAX_UPLOADS,
      },
    })
  }

  return validFiles
}

/**
 * Generates a thumbnail from a video source.
 * Original function name: $$s1
 *
 * @param videoSource - URL or path to the video source
 * @returns Promise that resolves to encoded image data
 */
export async function generateVideoThumbnail(videoSource: string): Promise<Uint8Array> {
  // Create video element and load video
  const video = document.createElement("video")
  video.preload = "auto"

  try {
    const loadedVideo = await new Promise<HTMLVideoElement>((resolve, reject) => {
      // Handle video loading errors
      video.addEventListener("error", (event) => {
        reject(new Error((event as any).message || "Failed to load video"))
      })

      // Handle successful video load
      video.addEventListener("loadeddata", () => {
        setTimeout(() => resolve(video), 1000)
      })

      // Set video source and load
      video.src = videoSource
      video.currentTime = 0
      video.load()

      // Set timeout for video loading
      setTimeout(() => {
        reject(new Error("Video load timeout during thumbnail generation"))
      }, 10000)
    })

    // Create canvas for rendering video frame
    const canvasContext = document.createElement("canvas").getContext("2d")
    if (!canvasContext) {
      return new Uint8Array()
    }

    const canvas = canvasContext.canvas
    canvas.width = loadedVideo instanceof HTMLCanvasElement ? loadedVideo.width : loadedVideo.videoWidth
    canvas.height = loadedVideo instanceof HTMLCanvasElement ? loadedVideo.height : loadedVideo.videoHeight

    // Draw video frame to canvas
    canvasContext.drawImage(loadedVideo, 0, 0, canvas.width, canvas.height)

    // Extract image data and encode
    const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height)
    const pixelData = new Uint8Array(imageData.data.buffer)

    return imageProcessor.encodeInPlace(
      canvas.width,
      canvas.height,
      pixelData,
      false,
      100,
      false,
    )
  }
  catch {
    // Fallback: create a black canvas if video loading fails
    const fallbackCanvas = document.createElement("canvas")
    fallbackCanvas.width = 1600
    fallbackCanvas.height = 900

    const fallbackContext = fallbackCanvas.getContext("2d")
    if (fallbackContext) {
      fallbackContext.fillStyle = "black"
      fallbackContext.fillRect(0, 0, fallbackCanvas.width, fallbackCanvas.height)
    }

    // Create canvas for encoding
    const encodeContext = document.createElement("canvas").getContext("2d")
    if (!encodeContext) {
      return new Uint8Array()
    }

    const encodeCanvas = encodeContext.canvas
    encodeCanvas.width = fallbackCanvas.width
    encodeCanvas.height = fallbackCanvas.height
    encodeContext.drawImage(fallbackCanvas, 0, 0, encodeCanvas.width, encodeCanvas.height)

    const imageData = encodeContext.getImageData(0, 0, encodeCanvas.width, encodeCanvas.height)
    const pixelData = new Uint8Array(imageData.data.buffer)

    return imageProcessor.encodeInPlace(
      encodeCanvas.width,
      encodeCanvas.height,
      pixelData,
      false,
      100,
      false,
    )
  }
}

export const K = validateFileUploads
export const j = generateVideoThumbnail
