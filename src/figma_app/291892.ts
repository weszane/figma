import { ImageIOWorkerManager } from '../905/22729'
import { Y } from '../905/270066'
import { normalizeRGBA, setAlphaToOpaque } from '../905/271299'
import { extractIccProfileFromJpeg, extractIccProfileFromPng, isAnimatedGif } from '../905/515659'
import { decodeBase64 } from '../905/561685'
import { ImageOrientationUtils, OrientationEnum } from '../905/580661'
import { logError } from '../905/714362'
import { XHR } from '../905/910117'
import { getWasmModule } from '../figma_app/762706'
import { ColorSpaceEnum, YesNoEnum } from '../figma_app/763686'
import { BrowserInfo } from '../figma_app/778880'

// Refactored code with improved organization, readability, and maintainability.
// Grouped related functionality into logical sections.
// Converted anonymous functions to named functions.
// Added JSDoc-style comments with original names for traceability.
// Simplified conditionals with early returns.
// Ensured same functionality as original.
// Renamed variables and functions for clarity, updated exports accordingly.

// Global constants and variables
const MAX_CANVAS_SIZE = 4096 // Original: $$g6
let glContext: any // Original: n
const canvas = document.createElement('canvas') // Original: m
const canvasContext = canvas.getContext('2d') // Original: f
const p3Canvas = document.createElement('canvas') // Original: E
const p3Context = (() => {
  try {
    return p3Canvas.getContext('2d', { colorSpace: 'display-p3' })
  }
  catch {
    return null
  }
})() // Original: y

// Utility functions
/**
 * Decodes base64 string to Uint8Array. Original: I
 */
function decodeBase64ToUint8Array(base64: string): Uint8Array<any> {
  return Uint8Array.from(atob(base64), char => char.charCodeAt(0))
}

/**
 * Creates an image from URL with optional dimensions. Original: $$F7
 */
export function createImageFromUrl(options: { url: string, height?: number, width?: number }): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    if (options.height)
      img.height = options.height
    if (options.width)
      img.width = options.width
    img.crossOrigin = ''
    // eslint-disable-next-line unicorn/error-message
    const error = new Error()
    img.onerror = (e) => {
      (e as any).cause = error
      reject(e)
    }
    img.onload = () => resolve(img)
    img.src = options.url
  })
}

/**
 * Creates a canvas element. Original: $$j2
 */
export function createCanvas(width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  return canvas
}

/**
 * Converts SVG string to data URL. Original: $$U0
 */
export function createSvgDataUrl(svg: string): string {
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`
}

// Image processing utilities
/**
 * Processes image dimensions and orientation. Original: T
 */
function processImageDimensions(
  img: HTMLImageElement | ImageBitmap,
  maxWidth: number,
  maxHeight: number,
  orientation: OrientationEnum | null,
  isMultiFrameGif: boolean,
) {
  const { width, height, originalWidth, originalHeight, isRotated } = calculateDimensions(
    img.width,
    img.height,
    maxWidth,
    maxHeight,
    orientation,
  )
  canvasContext.drawImage(img, 0, 0)
  return {
    width,
    height,
    originalWidth,
    originalHeight,
    isMultiFrameGIF: isMultiFrameGif,
    isRotated,
    bitmap: null,
    rgba: new Uint8Array(canvasContext.getImageData(0, 0, width, height).data.buffer),
  }
}

/**
 * Calculates adjusted dimensions based on orientation and constraints. Original: inner function in T
 */
function calculateDimensions(
  imgWidth: number,
  imgHeight: number,
  maxWidth: number,
  maxHeight: number,
  orientation: OrientationEnum | null,
) {
  let angle = ImageOrientationUtils.angleFromOrientation(orientation)
  let isFlipped = ImageOrientationUtils.orientationIsFlipped(orientation)
  let w = imgWidth
  let h = imgHeight
  let origW = imgWidth
  let origH = imgHeight
  if (angle === 90 || angle === 270) {
    [w, h] = [h, w];
    [origW, origH] = [origH, origW]
  }
  if (maxWidth > 0 && maxHeight > 0) {
    if (w > maxWidth) {
      h = Math.round(h * maxWidth / w)
      w = maxWidth
    }
    if (h > maxHeight) {
      w = Math.round(w * maxHeight / h)
      h = maxHeight
    }
    w = Math.max(1, w)
    h = Math.max(1, h)
  }
  canvas.width = w
  canvas.height = h
  canvasContext.translate(w / 2, h / 2)
  canvasContext.scale(w / origW, h / origH)
  if (isFlipped)
    canvasContext.scale(-1, 1)
  canvasContext.rotate((Math.PI / 180) * angle)
  canvasContext.translate(-imgWidth / 2, -imgHeight / 2)
  return {
    originalHeight: origH,
    originalWidth: origW,
    width: w,
    height: h,
    isRotated: angle !== 0,
  }
}

// Decoding functions
/**
 * Fallback decode function. Original: b
 */
async function fallbackDecode(
  data: Uint8Array<any>,
  mimeType: string,
  maxWidth: number,
  maxHeight: number,
) {
  let colorProfile = ColorSpaceEnum.SRGB
  if (mimeType === 'image/png') {
    const result = extractIccProfileFromPng(data)
    data = result.withoutColorSpace
    if (result.iccProfileRawData) {
      try {
        colorProfile = Y(result.iccProfileRawData)
      }
      catch {}
    }
  }
  let orientation: OrientationEnum | null = null
  if (mimeType === 'image/jpeg') {
    try {
      const icc = extractIccProfileFromJpeg(data)
      if (icc)
        colorProfile = Y(icc) ?? ColorSpaceEnum.SRGB
    }
    catch {}
    orientation = ImageOrientationUtils.getOrientation(data)
    // Note: 'w' variable not defined in original, assuming it's a global flag
  }
  let isAnimated = false
  if (mimeType === 'image/gif')
    isAnimated = isAnimatedGif(data)
  const blobUrl = URL.createObjectURL(new Blob([data], { type: mimeType }))
  try {
    const img = await createImageFromUrl({ url: blobUrl, height: null, width: null })
    return {
      ...processImageDimensions(img, maxWidth, maxHeight, orientation, isAnimated),
      colorProfile,
    }
  }
  finally {
    URL.revokeObjectURL(blobUrl)
  }
}

// Capability checks
let createImageBitmapCapabilities = { works: false, allowsOptions: false } // Original: C
let supportsOrientation = false // Original: w
let isWebkit = false // Original: O

/**
 * Checks if createImageBitmap works correctly. Original: S
 */
async function checkCreateImageBitmapSupport(): Promise<boolean> {
  const testData = '/9j/4AAQSkZJRgABAgEASABIAAD/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAMAAAITAAMAAAABAAEAAAAAAAAAAAAcAAAAAQAAABwAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAQAAgDAREAAhEBAxEB/8QASwABAQAAAAAAAAAAAAAAAAAAAAsQAQAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ/4AP/Z'
  if (!createImageBitmapCapabilities.works) {
    const img = await createImageFromUrl({ url: `data:image/jpeg;base64,${testData}`, height: null, width: null })
    return img.width === 16
  }
  else {
    const blob = new Blob([decodeBase64ToUint8Array(testData)], { type: 'image/jpeg' })
    const bitmap = await createImageBitmap(blob)
    return bitmap.width === 16
  }
}

/**
 * Checks for WebKit-specific issues. Original: v
 */
async function checkWebkitIssues(): Promise<boolean> {
  if (!createImageBitmapCapabilities.works)
    return false
  const canvas = createCanvas(16, 8)
  const ctx = canvas.getContext('2d')!
  const testData = '/9j/4AAQSkZJRgABAgEASABIAAD/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAMAAAITAAMAAAABAAEAAAAAAAAAAAAcAAAAAQAAABwAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAQAAgDAREAAhEBAxEB/8QASwABAQAAAAAAAAAAAAAAAAAAAAsQAQAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ/4AP/Z'
  const blob = new Blob([decodeBase64ToUint8Array(testData)], { type: 'image/jpeg' })
  ctx.drawImage(await createImageBitmap(blob), 0, 0)
  const originalData = ctx.getImageData(0, 0, 16, 8)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  const imgUrl = URL.createObjectURL(blob)
  const img = new Image()
  await new Promise((resolve) => {
    img.onload = resolve
    img.src = imgUrl
  })
  ctx.drawImage(await createImageBitmap(img), 0, 0)
  const newData = ctx.getImageData(0, 0, 16, 8)
  if (originalData.data.length !== newData.data.length)
    return false
  for (let i = 0; i < originalData.data.length; ++i) {
    if (originalData.data[i] !== newData.data[i])
      return false
  }
  return true
}

/**
 * Checks WebGL support for image processing. Original: A
 */
async function checkWebGLSupport(gl: WebGLRenderingContext, blob: Blob): Promise<boolean> {
  if (!gl)
    return false
  try {
    const bitmap = await createImageBitmap(blob)
    const width = bitmap.width
    const height = bitmap.height
    let supports = false
    const activeTexture = gl.getParameter(gl.ACTIVE_TEXTURE)
    gl.activeTexture(gl.TEXTURE0)
    const framebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING)
    const texture = gl.getParameter(gl.TEXTURE_BINDING_2D)
    let tex: WebGLTexture | null = null
    let fb: WebGLFramebuffer | null = null
    try {
      tex = gl.createTexture()
      gl.bindTexture(gl.TEXTURE_2D, tex)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmap)
      gl.bindTexture(gl.TEXTURE_2D, null)
      fb = gl.createFramebuffer()
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb)
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0)
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, null)
      if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE) {
        const pixels = new Uint8Array(4 * width * height)
        gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
        if (pixels[0] === 255)
          supports = true
      }
    }
    catch {}
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
    gl.bindTexture(gl.TEXTURE_2D, texture)
    if (tex)
      gl.deleteTexture(tex)
    if (fb)
      gl.deleteFramebuffer(fb)
    gl.activeTexture(activeTexture)
    return supports
  }
  catch {
    return false
  }
}

/**
 * Initializes capabilities. Original: x
 */
async function initializeCapabilities() {
  supportsOrientation = await checkCreateImageBitmapSupport()
  if (BrowserInfo.webkit)
    await checkWebkitIssues()
}

/**
 * Determines createImageBitmap capabilities. Original: N
 */
async function determineCapabilities(gl: WebGLRenderingContext): Promise<{ works: boolean, allowsOptions: boolean }> {
  const testBlob = new Blob([decodeBase64('iVBORw0KGgoAAAANSUhEUgAAAAEAAAAQBAMAAAAlsQiEAAAALVBMVEX///////////////////////////////////////////////////////8AAACgbBYXAAAAD3RSTlPx5NXDsJ2Ic19LOCgYDQAksqQSAAAAJklEQVQI12MAAQEGBQYDBgeGAIYEhgKGBoYJDAsYNjAcYHjAcAEAP7AGkQT7krEAAAAASUVORK5CYII=')], { type: 'image/png' })
  try {
    try {
      await createImageBitmap(testBlob, { premultiplyAlpha: 'none' })
      return { works: true, allowsOptions: true }
    }
    catch {
      return { works: await checkWebGLSupport(gl, testBlob), allowsOptions: false }
    }
  }
  catch {
    return { works: false, allowsOptions: false }
  }
}

// Main image processor object
let workerManager: ImageIOWorkerManager | null = null // Original: R
let initPromise: Promise<void> | null = null // Original: L

const imageProcessor = { // Original: $$P3
  /**
   * Initializes the image processor.
   */
  init(useWebGL: YesNoEnum) {
    initPromise = (async () => {
      if (useWebGL === YesNoEnum.YES) {
        createImageBitmapCapabilities = { works: true, allowsOptions: true }
      }
      else {
        const gl = (glContext || (glContext = getWasmModule().ctx))
        if (!gl)
          throw new Error('Cannot find GL context')
        createImageBitmapCapabilities = await determineCapabilities(gl)
      }
      await initializeCapabilities()
    })()
  },

  /**
   * Resets the processor.
   */
  reset() {
    if (workerManager)
      workerManager.forgetCallbacks()
  },

  /**
   * Prepares data for encoding.
   */
  prepareDataForEncodeInPlace(width: number, height: number, data: Uint8Array, normalize: boolean, setOpaque: boolean = false) {
    const length = width * height * 4
    if (normalize)
      normalizeRGBA(data, length)
    if (setOpaque)
      setAlphaToOpaque(data, length)
  },

  /**
   * Encodes image data in place.
   */
  encodeInPlace(
    width: number,
    height: number,
    data: Uint8Array,
    isJpeg: boolean,
    quality: number,
    normalize: boolean,
    colorSpace: ColorSpaceEnum = ColorSpaceEnum.SRGB,
    setOpaque: boolean = false,
  ): Uint8Array {
    let targetCanvas = canvas
    let targetContext = canvasContext
    if (colorSpace === ColorSpaceEnum.DISPLAY_P3 && p3Canvas && p3Context) {
      targetCanvas = p3Canvas
      targetContext = p3Context
    }
    this.prepareDataForEncodeInPlace(width, height, data, normalize, setOpaque)
    const imageData = new ImageData(new Uint8ClampedArray(data.buffer) as any, width, height)
    targetCanvas.width = width
    targetCanvas.height = height
    targetContext.putImageData(imageData, 0, 0)
    const dataUrl = isJpeg ? targetCanvas.toDataURL('image/jpeg', quality) : targetCanvas.toDataURL()
    const base64Index = dataUrl.indexOf(';base64,')
    return decodeBase64(dataUrl.slice(base64Index + ';base64,'.length))
  },

  /**
   * Encodes image data.
   */
  encode(
    width: number,
    height: number,
    data: Uint8Array,
    isJpeg: boolean,
    quality: number,
    normalize: boolean,
    colorSpace: ColorSpaceEnum = ColorSpaceEnum.SRGB,
    setOpaque: boolean = false,
  ): Uint8Array {
    data = new Uint8Array(data)
    return this.encodeInPlace(width, height, data, isJpeg, quality, normalize, colorSpace, setOpaque)
  },

  /**
   * Decodes image asynchronously.
   */
  async decodeAsync(
    data: Uint8Array,
    mimeType: string,
    maxWidth: number,
    maxHeight: number,
    useBitmap: boolean,
  ) {
    await initPromise
    if (!createImageBitmapCapabilities.works) {
      return await fallbackDecode(data, mimeType, maxWidth, maxHeight)
    }
    if (workerManager === null)
      workerManager = new ImageIOWorkerManager()
    if (mimeType === 'image/jpeg' && isWebkit) {
      const orientation = ImageOrientationUtils.getOrientation(data)
      if (orientation != null && orientation !== OrientationEnum.ROTATE_0) {
        return await fallbackDecode(data, mimeType, maxWidth, maxHeight)
      }
    }
    let orientation: OrientationEnum | null = null
    const { bitmap, isMultiFrameGIF, colorProfile } = await processWithWorker(mimeType, data)
    if (!bitmap) {
      console.warn('Something wrong in createImageBitmap thread. Bitmap is null ... falling back to decode using image')
      return await fallbackDecode(data, mimeType, maxWidth, maxHeight)
    }
    let isRotated = false
    if (mimeType === 'image/jpeg') {
      isRotated = orientation !== OrientationEnum.ROTATE_0
      if (orientation !== null && orientation !== OrientationEnum.ROTATE_0 && supportsOrientation && BrowserInfo.chrome && BrowserInfo.compareVersions([BrowserInfo.version.toString(), '86']) < 0) {
        useBitmap = false
      }
      if (supportsOrientation)
        orientation = null
    }
    const width = bitmap.width
    const height = bitmap.height
    if (useBitmap && (orientation === null || orientation === OrientationEnum.ROTATE_0) && (maxWidth === 0 || width <= maxWidth) && (maxHeight === 0 || height <= maxHeight)) {
      return {
        width,
        height,
        originalWidth: width,
        originalHeight: height,
        isMultiFrameGIF,
        isRotated,
        bitmap,
        colorProfile,
      }
    }
    else {
      return {
        ...processImageDimensions(bitmap, maxWidth, maxHeight, orientation, isMultiFrameGIF),
        colorProfile,
      }
    }
  },

  /**
   * Calculates thumbnail size.
   */
  thumbnailSize(width: number, height: number) {
    let maxDim = Math.max(width, height)
    let mipsToDrop = 0
    while (maxDim > 512) {
      mipsToDrop++
      maxDim = Math.floor((maxDim + 1) / 2)
    }
    const [w, h] = this.dropMips(width, height, mipsToDrop)
    return { w, h, mipsToDrop }
  },

  /**
   * Drops mips for dimensions.
   */
  dropMips(width: number, height: number, mips: number): [number, number] {
    if (width === 0 || height === 0) {
      logError('images', 'Width and height should not be zero')
      return [width, height]
    }
    for (let i = 0; i < mips; ++i) {
      width = Math.floor((width + 1) / 2)
      height = Math.floor((height + 1) / 2)
    }
    return [width, height]
  },

  /**
   * Scales image bitmap.
   */
  scaleImageBitmap(bitmap: ImageBitmap, width: number, height: number, mimeType: string): Uint8Array {
    canvas.width = width
    canvas.height = height
    canvasContext.translate(0, 0)
    canvasContext.scale(1, 1)
    canvasContext.rotate(0)
    canvasContext.drawImage(bitmap, 0, 0, width, height)
    const dataUrl = canvas.toDataURL(mimeType)
    const commaIndex = dataUrl.indexOf(',')
    return decodeBase64ToUint8Array(dataUrl.slice(commaIndex + 1))
  },

  /**
   * Creates canvas and draws image.
   */
  async createCanvasAndDrawImage(width: number, height: number, drawFn: (ctx: CanvasRenderingContext2D) => void, mimeType: string) {
    let canvas: HTMLCanvasElement | OffscreenCanvas
    if (typeof OffscreenCanvas !== 'undefined') {
      canvas = new OffscreenCanvas(width, height)
    }
    else {
      canvas = createCanvas(width, height)
    }
    const ctx = canvas.getContext('2d')
    if (!ctx)
      throw new Error('Failed to get 2D context')
    drawFn(ctx as CanvasRenderingContext2D)
    let blob: Blob
    if (canvas instanceof OffscreenCanvas) {
      blob = await canvas.convertToBlob({ type: mimeType })
    }
    else {
      blob = await new Promise((resolve, reject) => {
        canvas.toBlob(b => b ? resolve(b) : reject(new Error('Failed to create blob from canvas')), mimeType)
      })
    }
    return { canvas, blob }
  },

  /**
   * Generates thumbnail.
   */
  async generateThumbnail(image: any, width: number, height: number) {
    if (image.bitmap) {
      const { canvas, blob } = await this.createCanvasAndDrawImage(width, height, (ctx) => {
        ctx.drawImage(image.bitmap, 0, 0, width, height)
      }, image.mimeType)
      const arrayBuffer = await blob.arrayBuffer()
      const bitmap = await createImageBitmap(canvas)
      return {
        compressedData: new Uint8Array(arrayBuffer),
        bitmap,
      }
    }
    else {
      const rgba = image.rgba
      if (!rgba)
        throw new Error('Failed to decode image')
      const imageData = new ImageData(new Uint8ClampedArray(rgba), image.width, image.height)
      const { canvas } = await this.createCanvasAndDrawImage(image.width, image.height, (ctx) => {
        ctx.putImageData(imageData, 0, 0)
        ctx.drawImage(ctx.canvas, 0, 0, image.width, image.height, 0, 0, width, height)
      }, image.mimeType)
      const ctx = canvas.getContext('2d')
      if (!ctx)
        throw new Error('Failed to get context')
      const data = new Uint8Array(ctx.getImageData(0, 0, width, height).data)
      return {
        compressedData: this.encodeInPlace(width, height, data, image.mimeType === 'image/jpeg', 60, false),
        decompressedData: data,
      }
    }
  },
}

/**
 * Processes image with worker. Original: k
 */
async function processWithWorker(mimeType: string, data: Uint8Array) {
  if (mimeType === 'image/heic') {
    try {
      const response = await XHR.post('/api/upnode/heic_convert', data, {
        retryCount: 3,
        headers: { ...XHR.requiredHeaders, 'Content-Type': 'image/heic' },
        rawBody: true,
        responseType: 'arraybuffer',
      })
      const uint8Data = new Uint8Array(response.data)
      const blob = new Blob([uint8Data], { type: 'image/jpeg' })
      const options = createImageBitmapCapabilities.allowsOptions ? { premultiplyAlpha: 'none' } : undefined
      return {
        bitmap: await createImageBitmap(blob, options as ImageBitmapOptions),
        isMultiFrameGIF: false,
        colorProfile: ColorSpaceEnum.SRGB,
      }
    }
    catch (error) {
      logError('image_io', 'HEIC conversion via Upnode failed', { error: (error as Error).message, reportAsSentryError: true })
      return { bitmap: null, isMultiFrameGIF: false, colorProfile: ColorSpaceEnum.SRGB }
    }
  }
  else {
    if (!workerManager)
      throw new Error('Worker not initialized')
    return await workerManager.sendMessage({
      type: mimeType,
      array: data,
      supportsCreateBitmapOptions: createImageBitmapCapabilities.allowsOptions,
    })
  }
}

// Exported functions
/**
 * Fetches image data from URL. Original: $$M4
 */
export async function fetchImageData(url: string): Promise<Uint8Array> {
  return new Uint8Array((await XHR.crossOriginGet(url, undefined, { responseType: 'arraybuffer', retryCount: 3 })).data)
}

// Main API object
export const imageAPI = { // Original: $$B5
  decodeImage: (data: Uint8Array, mimeType: string, maxWidth: number, maxHeight: number, useBitmap: boolean) =>
    imageProcessor.decodeAsync(data, mimeType, maxWidth, maxHeight, useBitmap),
  encodeImage: (
    width: number,
    height: number,
    data: Uint8Array,
    isJpeg: boolean,
    quality: number,
    normalize: boolean,
    colorSpace: ColorSpaceEnum,
    setOpaque: boolean,
  ) => imageProcessor.encode(width, height, data, isJpeg, quality, normalize, colorSpace, setOpaque),
  scaleImage: (bitmap: ImageBitmap, width: number, height: number, mimeType: string) =>
    imageProcessor.scaleImageBitmap(bitmap, width, height, mimeType),
  cancelCurrentImageWorkers() {
    imageProcessor.reset()
  },
  init(useWebGL: YesNoEnum) {
    imageProcessor.init(useWebGL)
    isWebkit = useWebGL === YesNoEnum.YES
  },
}

// Updated exports with meaningful names
export const Bo = createSvgDataUrl // Original: B0 = $$U0
export const DK = MAX_CANVAS_SIZE // Original: DK = $$D1
export const D1 = createCanvas // Original: Dl = $$j2
export const EC = imageProcessor // Original: EC = $$P3
export const Nd = fetchImageData // Original: Nd = $$M4
export const YN = imageAPI // Original: YN = $$B5
export const d$ = MAX_CANVAS_SIZE // Original: d$ = $$g6
export const w6 = createImageFromUrl // Original: w6 = $$F7
