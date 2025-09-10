import { p as normalizeUrl } from '../905/167135'
import { deepEqual } from '../905/382883'
import { isUrlAllowed } from '../905/544659'
import { logError } from '../905/714362'
import { processChildren } from '../905/757052'

interface ResourceState {
  fonts: Record<string, FontResource>
  images: Record<string, ImageResource>
}

interface FontResource {
  fontName: { family: string, style: string }
  hasLoaded: boolean
}

interface ImageResource {
  hasLoaded: boolean
}

interface ImageInfo {
  hash: string
  width: number
  height: number
}

interface VirtualRoot {
  rootNode: any
  syncedState: any
}

/**
 * Main function for loading and reconciling resources
 * @param getVirtualRoot - Function to get the virtual root
 * @param canvasContext - Canvas context for loading resources
 * @param manifest - Manifest configuration
 * @returns Object containing image info map and virtual root
 */
export async function loadAndReconcileResources(
  getVirtualRoot: () => VirtualRoot,
  canvasContext: any,
  manifest: any,
): Promise<{ imgInfoMap: Map<string, ImageInfo>, vRoot: VirtualRoot }> {
  const resourceState: ResourceState = {
    fonts: {},
    images: {},
  }

  const imageInfoMap = new Map<string, ImageInfo>()
  let previousRoot: VirtualRoot | null = null
  let currentRoot = getVirtualRoot()

  // Maximum iterations to prevent infinite loops
  const MAX_ITERATIONS = 20

  for (let iteration = 0; iteration < MAX_ITERATIONS; iteration++) {
    // Extract resources from the virtual root
    extractResourcesFromRoot(currentRoot.rootNode, resourceState)

    // Load pending resources if any exist
    const hasPendingResources
      = Object.values(resourceState.fonts).some(font => !font.hasLoaded)
        || Object.values(resourceState.images).some(image => !image.hasLoaded)

    if (hasPendingResources) {
      await loadPendingResources(resourceState, imageInfoMap, canvasContext, manifest)
    }

    // Check for changes and continue if needed
    previousRoot = currentRoot
    currentRoot = getVirtualRoot()

    const statesAreEqual = deepEqual(previousRoot?.syncedState, currentRoot.syncedState)
    if (statesAreEqual) {
      break
    }

    // Log error if maximum iterations reached
    if (iteration === MAX_ITERATIONS - 1) {
      logError('resources', 'Loading reconciliation resources reached max iterations')
    }
  }

  return {
    imgInfoMap: imageInfoMap,
    vRoot: currentRoot,
  }
}

/**
 * Extracts font and image resources from a virtual root node
 * @param node - The node to extract resources from
 * @param resourceState - The resource state to populate
 */
function extractResourcesFromRoot(node: any, resourceState: ResourceState): void {
  const traverseNode = (currentNode: any): void => {
    if (!currentNode)
      return

    const { children, fillSrc, textStyle } = currentNode.renderMetaData

    // Process text styles for fonts
    if (textStyle) {
      collectFontResource(resourceState, textStyle.style)
      textStyle.ranges.forEach(range => collectFontResource(resourceState, range.style))
    }

    // Process image sources
    if (fillSrc && !Object.prototype.hasOwnProperty.call(resourceState.images, fillSrc)) {
      resourceState.images[fillSrc] = {
        hasLoaded: false,
      }
    }

    // Process children recursively
    if (children) {
      for (const child of processChildren(children)) {
        traverseNode(child)
      }
    }
  }

  traverseNode(node)
}

/**
 * Collects font resource information
 * @param resourceState - The resource state to update
 * @param style - The style object containing font information
 */
function collectFontResource(resourceState: ResourceState, style: any): void {
  const { fontName } = style
  if (!fontName)
    return

  const fontKey = `${fontName.family} ${fontName.style}`
  if (!Object.prototype.hasOwnProperty.call(resourceState.fonts, fontKey)) {
    resourceState.fonts[fontKey] = {
      fontName,
      hasLoaded: false,
    }
  }
}

/**
 * Loads an image and returns its information
 * @param imageUrl - URL of the image to load
 * @param canvasContext - Canvas context for creating images
 * @param manifest - Manifest configuration
 * @returns Image information or null if loading failed
 */
async function loadImageResource(
  imageUrl: string,
  canvasContext: any,
  manifest: any,
): Promise<ImageInfo | null> {
  try {
    const imageData = await fetchImageAsByteArray(imageUrl, manifest)
    const imageHash = canvasContext.createImage(imageData).hash

    const [imageDimensions] = await Promise.all([getImageDimensions(imageData)])

    return {
      hash: imageHash,
      width: imageDimensions.width,
      height: imageDimensions.height,
    }
  }
  catch (error) {
    canvasContext.logWarning('Unable to load image. See the warning below for more info.')
    canvasContext.logWarning(error)
    return null
  }
}

/**
 * Fetches an image as a byte array
 * @param url - URL of the image
 * @param manifest - Manifest configuration
 * @returns Image data as Uint8Array
 */
export async function fetchImageAsByteArray(url: string, manifest: any): Promise<Uint8Array> {
  // Check if URL is HTTP/HTTPS
  const isHttpUrl = (() => {
    try {
      const urlObj = new URL(url)
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'
    }
    catch {
      return false
    }
  })()

  let normalizedUrl = url
  if (isHttpUrl) {
    if (!isUrlAllowed(url, manifest)) {
      throw new Error(`Image URL ${url} does not satisfy the allowedDomains specified in the manifest.json`)
    }
    normalizedUrl = normalizeUrl(url)
  }

  const response = await fetch(normalizedUrl)
  if (!response.ok) {
    throw new Error(`Unable to fetch image. Response status: ${response.status}`)
  }

  return new Uint8Array(await response.arrayBuffer())
}

/**
 * Loads all pending resources (fonts and images)
 * @param resourceState - Current resource state
 * @param imageInfoMap - Map to store loaded image information
 * @param canvasContext - Canvas context for loading resources
 * @param manifest - Manifest configuration
 */
async function loadPendingResources(
  resourceState: ResourceState,
  imageInfoMap: Map<string, ImageInfo>,
  canvasContext: any,
  manifest: any,
): Promise<void> {
  // Load pending fonts
  const pendingFontPromises = Object.values(resourceState.fonts)
    .filter(font => !font.hasLoaded)
    .map(async (fontResource) => {
      await canvasContext.loadFontAsync(fontResource.fontName)
      fontResource.hasLoaded = true
    })

  // Load pending images
  const loadSingleImage = async (imageUrl: string, imageResource: ImageResource): Promise<void> => {
    const imageInfo = await loadImageResource(imageUrl, canvasContext, manifest)
    if (imageInfo) {
      imageInfoMap.set(imageUrl, imageInfo)
    }
    imageResource.hasLoaded = true
  }

  const pendingImagePromises = Object.entries(resourceState.images)
    .filter(([, imageResource]) => !imageResource.hasLoaded)
    .map(async ([imageUrl, imageResource]) => {
      await loadSingleImage(imageUrl, imageResource)
    })

  await Promise.all([...pendingFontPromises, ...pendingImagePromises])
}

/**
 * Converts byte array to base64 string
 * @param byteArray - Byte array to convert
 * @returns Base64 encoded string
 */
function byteArrayToBase64(byteArray: Uint8Array): string {
  let binaryString = ''
  const uint8Array = new Uint8Array(byteArray)

  for (const byte of uint8Array) {
    binaryString += String.fromCharCode(byte)
  }

  return window.btoa(binaryString)
}

/**
 * Gets image dimensions from image data
 * @param imageData - Image data as byte array
 * @returns Promise resolving to image dimensions
 */
export function getImageDimensions(imageData: Uint8Array): Promise<{ width: number, height: number }> {
  return new Promise((resolve) => {
    const imageElement = new Image()

    imageElement.onload = () => {
      resolve({
        width: imageElement.width,
        height: imageElement.height,
      })
    }

    const base64Data = byteArrayToBase64(imageData)
    imageElement.src = `data:image;base64,${base64Data}`
  })
}

// Export aliases for backward compatibility
export const qg = loadAndReconcileResources
export const vX = getImageDimensions
export const xF = fetchImageAsByteArray
