import { kiwiParserCodec } from '../905/294864'
import { Point } from '../905/736624'
import { isValidSessionLocalID, sessionLocalIDToString } from '../905/871411'
import { whiteColor } from '../figma_app/191804'
import { getPatternPaint } from '../figma_app/385874'
import { getColorSpaceString } from '../figma_app/622881'
import { BackgroundPattern, NodePropertyCategory, SceneNodeCpp, Thumbnail } from '../figma_app/763686'

// Helper function to convert thumbnail data to a standardized format
function convertThumbnailData(thumbnailData: any) {
  return thumbnailData
    ? {
        pixels: thumbnailData.pixels,
        pixelSize: new Point(thumbnailData.pixelSize.x, thumbnailData.pixelSize.y),
        displaySize: new Point(thumbnailData.displaySize.x, thumbnailData.displaySize.y),
      }
    : null
}

/**
 * Creates a node change message for paint updates
 * @param paint - The paint object to encode
 * @param category - The property category (fill or stroke)
 * @returns Encoded message for node changes
 */
export function createNodeChangeMessage(paint: any, category: NodePropertyCategory) {
  const nodeChange = {
    guid: {
      sessionID: 0,
      localID: 0,
    },
  } as any

  switch (category) {
    case NodePropertyCategory.STROKE:
    case NodePropertyCategory.STROKE_PRESET:
      nodeChange.strokePaints = [paint]
      break
    case NodePropertyCategory.FILL:
    default:
      nodeChange.fillPaints = [paint]
  }

  return kiwiParserCodec.encodeMessage({
    type: 'NODE_CHANGES',
    sessionID: 0,
    ackID: 0,
    nodeChanges: [nodeChange],
  })
}

/**
 * Generates a paint icon thumbnail
 * @param paint - The paint object
 * @param size - The dimensions for the icon
 * @param backgroundColor - Background color (defaults to white)
 * @returns Converted thumbnail data
 */
export function generatePaintIcon(paint: any, size: Point, backgroundColor = whiteColor) {
  return convertThumbnailData(Thumbnail.generatePaintIcon({
    width: Math.round(size.x),
    height: Math.round(size.y),
    paint: createNodeChangeMessage(paint, NodePropertyCategory.FILL),
    backgroundColor: {
      red: backgroundColor.r,
      green: backgroundColor.g,
      blue: backgroundColor.b,
      alpha: backgroundColor.a,
    },
  }))
}

/**
 * Generates a thumbnail for a pattern node
 * @param pattern - The pattern data
 * @param size - The dimensions for the thumbnail
 * @returns URL of the generated thumbnail or null
 */
export function generatePatternThumbnail(pattern: any, size: Point) {
  if (!Thumbnail) {
    return null
  }

  const patternPaint = getPatternPaint(pattern)
  if (!patternPaint) {
    return null
  }

  const nodeId = sessionLocalIDToString(patternPaint.sourceNodeId)
  if (!nodeId || !isValidSessionLocalID(patternPaint.sourceNodeId)) {
    return null
  }

  const [_, thumbnailData] = Thumbnail.generateThumbnailForNode(
    nodeId,
    2 * Math.round(size.x),
    2 * Math.round(size.y),
    4,
    {
      useRenderTreeWithoutEffects: true,
    },
  )

  if (thumbnailData) {
    const blob = new Blob([thumbnailData], {
      type: 'image/png',
    })
    return URL.createObjectURL(blob)
  }

  return null
}

/**
 * Updates still image and selection properties for a GIF
 * @param paint - The paint object
 * @param buffer - The image buffer
 * @param category - The property category
 * @returns Result of the update operation
 */
export function updateGIFImageProperties(paint: any, buffer: ArrayBuffer, category: NodePropertyCategory) {
  const nodeChange = createNodeChangeMessage(paint, category)
  const uint8Array = new Uint8Array(buffer)
  return SceneNodeCpp.updateStillImageAndSelectionPropertiesForGIF(nodeChange, uint8Array)
}

/**
 * Generates an export thumbnail
 * @param size - The dimensions for the thumbnail
 * @param nodeId - The node ID
 * @param contentsOnly - Whether to export contents only
 * @param background - Background pattern (defaults to checkerboard)
 * @param isDevModeBlendedSection - Dev mode flag
 * @param ignorePixelRatio - Pixel ratio flag
 * @param useAbsoluteBounds - Absolute bounds flag
 * @param renderPrintMarks - Print marks flag
 * @returns Converted thumbnail data
 */
export function generateExportThumbnail(
  size: Point,
  nodeId: string,
  contentsOnly: boolean,
  background: BackgroundPattern = BackgroundPattern.CHECKERBOARD,
  isDevModeBlendedSection = false,
  ignorePixelRatio = false,
  useAbsoluteBounds = false,
  renderPrintMarks = false,
) {
  return convertThumbnailData(Thumbnail.generateExportThumbnail({
    width: Math.round(size.x),
    height: Math.round(size.y),
    nodeId,
    contentsOnly,
    background,
    isDevModeBlendedSection,
    ignorePixelRatio,
    useBicubicSampler: false,
    useAbsoluteBounds,
    renderPrintMarks,
  }))
}

/**
 * Generates an export preview
 * @param size - The dimensions for the preview
 * @param useAbsoluteBounds - Absolute bounds flag
 * @param useBicubicSampler - Bicubic sampling flag
 * @param useTopLevelFrame - Top level frame flag
 * @returns Converted thumbnail data
 */
export function generateExportPreview(
  size: Point,
  useAbsoluteBounds: boolean,
  useBicubicSampler: boolean,
  useTopLevelFrame = false,
) {
  return convertThumbnailData(Thumbnail.generateExportPreview({
    width: Math.round(size.x),
    height: Math.round(size.y),
    useAbsoluteBounds,
    useBicubicSampler,
    useTopLevelFrame,
  }))
}

/**
 * Generates an objects panel icon
 * @param objectId - The object ID
 * @returns The icon data or empty string
 */
export function generateObjectsPanelIcon(objectId: string) {
  return Thumbnail.generateObjectsPanelIcon(objectId) ?? ''
}

/**
 * Creates a canvas with image data
 * @param imageData - The image data
 * @param size - The canvas dimensions
 * @param colorSpace - The color space
 * @returns The canvas element
 */
export function createCanvasWithImageData(imageData: Uint8ClampedArray, size: Point, colorSpace?: any) {
  const canvas = document.createElement('canvas')
  const context = colorSpace
    ? canvas.getContext('2d', {
        colorSpace: getColorSpaceString(colorSpace),
      })
    : canvas.getContext('2d')

  canvas.width = size.x
  canvas.height = size.y

  const imageBitmap = context.createImageData(size.x, size.y)
  imageBitmap.data.set(imageData)
  context.putImageData(imageBitmap, 0, 0)

  return canvas
}

/**
 * Converts image data to a data URL
 * @param imageData - The image data
 * @param size - The image dimensions
 * @param colorSpace - The color space
 * @returns The data URL
 */
export function convertImageDataToURL(imageData: Uint8ClampedArray, size: Point, colorSpace?: any) {
  return createCanvasWithImageData(imageData, size, colorSpace).toDataURL()
}

// Export aliases for backward compatibility
export const HT = generatePatternThumbnail
export const NO = generateObjectsPanelIcon
export const Pv = convertImageDataToURL
export const Q1 = createCanvasWithImageData
export const SK = updateGIFImageProperties
export const Sl = createNodeChangeMessage
export const WQ = generateExportPreview
export const _G = generateExportThumbnail
export const jS = generatePaintIcon
