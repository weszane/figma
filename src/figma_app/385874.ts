import type { RgbColor } from '../figma_app/273493'
import { clone } from 'lodash-es'
import { isInvalidValue } from '../905/216495'
import { kiwiParserCodec } from '../905/294864'
import { debugState } from '../905/407919'
import { AffineTransform } from '../905/583953'
import { transformColorStop } from '../905/706046'
import { isNotNullish } from '../figma_app/95419'
import { whiteColor } from '../figma_app/191804'
import { hsvToRgb, rgbToHsv } from '../figma_app/273493'
import { trackFileEvent } from '../figma_app/314264'
import { fullscreenValue } from '../figma_app/455680'
import { debug } from '../figma_app/465776'
import { AnchorPosition, Fullscreen } from '../figma_app/763686'

// Color constants
export const defaultGrayColor = {
  r: 196 / 255,
  g: 196 / 255,
  b: 196 / 255,
  a: 1,
}
export const blackColor = {
  r: 0,
  g: 0,
  b: 0,
  a: 1,
}

// Default gradient stops
export const defaultGradientStops = [{
  position: 0,
  color: {
    r: 1,
    g: 1,
    b: 1,
    a: 1,
  },
}, {
  position: 1,
  color: {
    r: 1,
    g: 1,
    b: 1,
    a: 0,
  },
}]
export const defaultTransformedStops = defaultGradientStops.map(transformColorStop)

/**
 * Calculates the transformation matrix for a gradient based on end caps and angle.
 * Original name: T
 * @param e - The gradient configuration object.
 * @returns The transformation matrix as a FigMatrix.
 */
export function getGradientTransform(e?: any): any {
  const transform = AffineTransform.identity()
  transform.translate(0.5, 0.5)
  if (e && (isArrowEndCap(e.leftEndCap) || isArrowEndCap(e.rightEndCap)) && (e.angle >= 90 || e.angle < -90)) {
    transform.rotate(Math.PI)
  }
  else if (!e || (e.height > 0 && e.width / e.height <= 3)) {
    transform.rotate(-Math.PI / 2)
    if (e) {
      if (e.angle < -45 && e.angle >= -135) {
        transform.rotate(Math.PI / 2)
      }
      else if (e.angle < -135 || e.angle > 135) {
        transform.rotate(Math.PI)
      }
      else if (e.angle > 45 && e.angle <= 135) {
        transform.rotate(-Math.PI / 2)
      }
    }
  }
  else if ((e.angle > 45 || e.angle < -135)) {
    transform.rotate(Math.PI)
  }
  if (e && e.hasReflection) {
    transform.rotate(Math.PI)
  }
  transform.translate(-0.5, -0.5)
  return transform.toFigMatrix()
}

/**
 * Checks if the end cap is an arrow type.
 * Original name: $$I18
 * @param e - The end cap type.
 * @returns True if it's an arrow end cap.
 */
export function isArrowEndCap(e?: string): boolean {
  if (!e)
    return false
  switch (e) {
    case 'ARROW_LINES':
    case 'ARROW_EQUILATERAL':
    case 'TRIANGLE_FILLED':
    case 'CIRCLE_FILLED':
    case 'DIAMOND_FILLED':
      return true
    case 'ROUND':
    case 'SQUARE':
    case 'NONE':
    case 'HIGHLIGHT':
    case 'WASHI_TAPE_1':
    case 'WASHI_TAPE_2':
    case 'WASHI_TAPE_3':
    case 'WASHI_TAPE_4':
    case 'WASHI_TAPE_5':
    case 'WASHI_TAPE_6':
      return false
  }
  return false // Default case for completeness
}

// Paint type checkers
/**
 * Checks if the paint type is a gradient.
 * Original name: $$x11
 * @param e - The paint type.
 * @returns True if it's a gradient type.
 */
export function isGradientType(e?: string) {
  return e != null && ['GRADIENT_LINEAR', 'GRADIENT_RADIAL', 'GRADIENT_ANGULAR', 'GRADIENT_DIAMOND'].includes(e)
}

/**
 * Checks if the paint type is image or video.
 * Original name: $$N0
 * @param e - The paint type.
 * @returns True if it's image or video.
 */
export function isImageOrVideoType(e?: string): boolean {
  return e != null && ['IMAGE', 'VIDEO'].includes(e)
}

/**
 * Checks if the paint type is solid.
 * Original name: $$C17
 * @param e - The paint type.
 * @returns True if it's solid.
 */
export function isSolidType(e?: string): boolean {
  return e != null && e === 'SOLID'
}

/**
 * Validates and fixes a gradient paint.
 * Original name: $$v19
 * @param e - The gradient paint.
 * @returns The validated gradient paint or null.
 */
export function validateGradientPaint(e: any): any {
  if (!isGradientType(e.type))
    return null
  if (e.stops.length === 0) {
    const state = debugState.getState()
    trackFileEvent('zero_stop_gradient_detected', state.openFile?.key, state)
    e.stops.push({
      color: whiteColor,
      position: 0,
    })
  }
  return e
}

/**
 * Gets the solid paint if valid.
 * Original name: $$A6
 * @param e - The paint.
 * @returns The solid paint or null.
 */
export function getSolidPaint(e: any): any {
  return isSolidType(e.type) ? e : null
}

/**
 * Gets the image or video paint if valid.
 * Original name: $$w20
 * @param e - The paint.
 * @returns The image/video paint or null.
 */
export function getImageOrVideoPaint(e: any): any {
  return e.type !== 'IMAGE' && e.type !== 'VIDEO' ? null : e
}

/**
 * Filters valid image paints.
 * Original name: $$O4
 * @param e - The array of paints.
 * @returns Filtered array of valid image paints.
 */
export function filterValidImagePaints(e: any[]): any[] {
  return !e || isInvalidValue(e) ? [] : e.map(getImageOrVideoPaint).filter(isNotNullish)
}

/**
 * Converts a hash array to a hex string.
 * Original name: $$R15
 * @param e - The hash array.
 * @returns The hex string.
 */
export function hashToHexString(e: Uint8Array): string {
  return Array.from(e).map(e => (e < 16 ? '0' : '') + e.toString(16)).join('')
}

/**
 * Gets the pattern paint if valid.
 * Original name: $$L8
 * @param e - The paint.
 * @returns The pattern paint or null.
 */
export function getPatternPaint(e: any): any {
  return e.type !== 'PATTERN' ? null : e
}

/**
 * Gets the noise paint if valid.
 * Original name: $$P9
 * @param e - The paint.
 * @returns The noise paint or null.
 */
export function getNoisePaint(e: any): any {
  return e.type !== 'NOISE' ? null : e
}

// Anchor position utilities
/**
 * Converts alignment to anchor position.
 * Original name: $$D2
 * @param e - The alignment object.
 * @returns The anchor position.
 */
export function anchorPositionFromAlignment(e: any): AnchorPosition {
  if (e.horizontalAlignment === 'CENTER' && e.verticalAlignment === 'CENTER')
    return AnchorPosition.MIDDLE_CENTER
  if (e.horizontalAlignment === 'START' && e.verticalAlignment === 'CENTER')
    return AnchorPosition.MIDDLE_LEFT
  if (e.horizontalAlignment === 'END' && e.verticalAlignment === 'CENTER')
    return AnchorPosition.MIDDLE_RIGHT
  if (e.horizontalAlignment === 'CENTER' && e.verticalAlignment === 'START')
    return AnchorPosition.TOP_CENTER
  if (e.horizontalAlignment === 'START' && e.verticalAlignment === 'START')
    return AnchorPosition.TOP_LEFT
  if (e.horizontalAlignment === 'END' && e.verticalAlignment === 'START')
    return AnchorPosition.TOP_RIGHT
  if (e.horizontalAlignment === 'CENTER' && e.verticalAlignment === 'END')
    return AnchorPosition.BOTTOM_CENTER
  if (e.horizontalAlignment === 'START' && e.verticalAlignment === 'END')
    return AnchorPosition.BOTTOM_LEFT
  if (e.horizontalAlignment === 'END' && e.verticalAlignment === 'END')
    return AnchorPosition.BOTTOM_RIGHT
  return AnchorPosition.TOP_LEFT
}

/**
 * Converts anchor position to alignment.
 * Original name: $$k5
 * @param e - The anchor position.
 * @returns The alignment object.
 */
export function alignmentFromAnchorPosition(e: AnchorPosition): any {
  switch (e) {
    case AnchorPosition.TOP_LEFT:
      return { horizontalAlignment: 'START', verticalAlignment: 'START' }
    case AnchorPosition.TOP_CENTER:
      return { horizontalAlignment: 'CENTER', verticalAlignment: 'START' }
    case AnchorPosition.TOP_RIGHT:
      return { horizontalAlignment: 'END', verticalAlignment: 'START' }
    case AnchorPosition.MIDDLE_LEFT:
      return { horizontalAlignment: 'START', verticalAlignment: 'CENTER' }
    case AnchorPosition.MIDDLE_CENTER:
      return { horizontalAlignment: 'CENTER', verticalAlignment: 'CENTER' }
    case AnchorPosition.MIDDLE_RIGHT:
      return { horizontalAlignment: 'END', verticalAlignment: 'CENTER' }
    case AnchorPosition.BOTTOM_LEFT:
      return { horizontalAlignment: 'START', verticalAlignment: 'END' }
    case AnchorPosition.BOTTOM_CENTER:
      return { horizontalAlignment: 'CENTER', verticalAlignment: 'END' }
    case AnchorPosition.BOTTOM_RIGHT:
      return { horizontalAlignment: 'END', verticalAlignment: 'END' }
  }
}

// Paint Manager Class
/**
 * Manages paint initialization and caching.
 * Original name: $$M7
 */
class PaintManager {
  private cache: { [key: string]: any } = {}

  /**
   * Clears the cache.
   * @param e - Optional key to clear specific entry.
   */
  clearCache(e?: string): void {
    if (e != null) {
      delete this.cache[e]
    }
    else {
      this.cache = {}
    }
  }

  /**
   * Generates an ID for caching.
   * @param e - Parameter 1.
   * @param t - Parameter 2.
   * @param r - Parameter 3.
   * @returns The generated ID.
   */
  private getId(e: any, t: any, r: any): string {
    return `${r}-${t}-${e}`
  }

  /**
   * Initializes paint with default image paint.
   * @param e - Type.
   * @param t - Color.
   * @param r - Condition.
   * @param n - Key.
   * @param i - Default image.
   * @param a - Flag.
   * @param s - Config.
   * @returns The initialized paint.
   */
  private initPaintWithDefaultImagePaint(e: Paint['type'], t: any, r: boolean, n: string, i: any, a: boolean, s: any) {
    const paint = {
      type: e,
      opacity: 1,
      visible: true,
      blendMode: 'NORMAL',
    } as any
    if (e === 'SOLID') {
      paint.color = t
    }
    else if (isGradientType(e)) {
      paint.stops = defaultGradientStops
      paint.stopsVar = defaultTransformedStops
      paint.transform = getGradientTransform(s)
    }
    else if (isImageOrVideoType(e) && i) {
      if (e === 'VIDEO') {
        this.transferVideoAttributes(i, paint)
      }
      else {
        this.transferImageAttributes(i, paint)
      }
    }
    if (!r)
      return paint
    const cached = this.cachePaint(r, n)
    this.transferGeneralAttributes(cached, paint)
    if (e === 'SOLID') {
      if (cached.color) {
        this.transferColorAttributes(cached, paint)
      }
      else if (cached.stops && cached.stops.length) {
        this.transferColorAttributes(cached.stops[0], paint)
      }
    }
    else if (isGradientType(e)) {
      if (cached.stops) {
        this.transferGradientAttributes(cached, paint)
      }
      else if (cached.color) {
        const contrastingColor = getContrastingColor(cached.color, a)
        const isReversed = (s && isArrowEndCap(s.rightEndCap)) ?? false
        const { stops, stopsVar } = this.getPaintStopsAndStopsVar(
          { ...cached.color, a: 1 },
          cached.colorVar,
          contrastingColor,
          a ? !isReversed : isReversed,
        )
        paint.stops = stops
        paint.stopsVar = stopsVar
      }
    }
    else {
      if (e === 'IMAGE') {
        if (cached.image && cached.imageThumbnail) {
          this.transferImageAttributes(cached, paint)
          paint.transform = cached.imageTransform
        }
      }
      else if (e === 'VIDEO' && cached.video) {
        this.transferVideoAttributes(cached, paint)
      }
    }
    return paint as Paint
  }

  /**
   * Gets paint stops and stopsVar.
   * @param e - Color 1.
   * @param t - Color var.
   * @param r - Color 2.
   * @param n - Reverse flag.
   * @returns Stops and stopsVar.
   */
  private getPaintStopsAndStopsVar(e: any, t: any, r: any, n: boolean): { stops: any[], stopsVar: any[] } {
    const stops = n
      ? [
          { position: 0, color: r },
          { position: 1, color: e },
        ]
      : [
          { position: 0, color: e },
          { position: 1, color: r },
        ]
    const stopsVar = stops.map(transformColorStop)
    if (t) {
      stopsVar[n ? 1 : 0].colorVar = t
    }
    return { stops, stopsVar }
  }

  /**
   * Caches a paint.
   * @param e - Paint to cache.
   * @param t - Key.
   * @returns The cached paint.
   */
  private cachePaint(e: any, t: string): any {
    this.cache[t] = this.cache[t] || clone(e)
    if (isGradientType(e.type)) {
      this.transferGradientAttributes(e, this.cache[t])
    }
    else if (e.type === 'SOLID') {
      this.transferColorAttributes(e, this.cache[t])
    }
    else if (e.type === 'IMAGE') {
      this.transferImageAttributes(e, this.cache[t])
      this.cache[t].imageTransform = e.transform
    }
    else if (e.type === 'VIDEO') {
      this.transferVideoAttributes(e, this.cache[t])
    }
    return this.cache[t]
  }

  /**
   * Transfers general attributes.
   * @param e - Source.
   * @param t - Target.
   */
  private transferGeneralAttributes(e: any, t: any): void {
    t.opacity = e.opacity
    t.blendMode = e.blendMode
    t.visible = e.visible
  }

  /**
   * Transfers color attributes.
   * @param e - Source.
   * @param t - Target.
   */
  private transferColorAttributes(e: any, t: any): void {
    t.color = e.color
  }

  /**
   * Transfers gradient attributes.
   * @param e - Source.
   * @param t - Target.
   */
  private transferGradientAttributes(e: any, t: any): void {
    t.stops = e.stops
    t.stopsVar = e.stopsVar
    t.transform = e.transform
  }

  /**
   * Transfers image attributes.
   * @param e - Source.
   * @param t - Target.
   */
  private transferImageAttributes(e: any, t: any): void {
    t.image = e.image
    t.imageThumbnail = e.imageThumbnail
    t.animatedImage = e.animatedImage
    t.animationFrame = e.animationFrame
    t.imageScaleMode = e.imageScaleMode
    t.rotation = e.rotation
    t.scale = e.scale
    t.paintFilter = e.paintFilter
    t.imageShouldColorManage = e.imageShouldColorManage
    t.video = undefined
  }

  /**
   * Transfers video attributes.
   * @param e - Source.
   * @param t - Target.
   */
  private transferVideoAttributes(e: any, t: any): void {
    t.imageThumbnail = e.imageThumbnail
    t.animationFrame = e.animationFrame
    t.imageScaleMode = e.imageScaleMode
    t.rotation = e.rotation
    t.scale = e.scale
    t.paintFilter = e.paintFilter
    t.video = e.video
    t.image = undefined
  }

  /**
   * Initializes paint.
   * @param e - Type.
   * @param t - Color.
   * @param r - Condition.
   * @param n - Key.
   * @param i - Config.
   * @param a - Flag.
   * @returns The paint.
   */
  initPaint(e: Paint['type'], t: any, r: boolean, n: string, i: any, a?: boolean): any {
    return this.initPaintWithDefaultImagePaint(e, t, r, n, defaultImagePaint, a ?? false, i)
  }
}

const paintManager = new PaintManager()

// Default image paint
let defaultImagePaint: any = null

/**
 * Initializes the default image paint.
 * Original name: $$j14
 */
export function initializeDefaultImagePaint(): void {
  if (!initialized) {
    initialized = true
    fullscreenValue.onReady().then(() => {
      const defaultStyle = Fullscreen?.requestDefaultImageStyle()
      const parsed = defaultStyle ? kiwiParserCodec.decodeMessage(defaultStyle) : null
      if (parsed && parsed.nodeChanges && parsed.nodeChanges.length > 0 && parsed.nodeChanges[0].fillPaints) {
        defaultImagePaint = parsed.nodeChanges[0].fillPaints[0]
      }
    })
  }
}

let initialized = false

/**
 * Rotates a paint.
 * Original name: $$U3
 * @param e - The paint.
 * @param t - Rotation angle in degrees.
 * @returns The rotated paint.
 */
export function rotatePaint(e: any, t: number): any {
  const paint = getImageOrVideoPaint(e)
  if (!paint)
    return e
  if (paint.imageScaleMode === 'STRETCH') {
    const transform = AffineTransform.identity()
    transform.translate(0.5, 0.5)
    transform.rotate(-(Math.PI / 180 * t))
    transform.translate(-0.5, -0.5)
    transform.multiply(AffineTransform.fromFigMatrix(paint.transform))
    return {
      ...paint,
      transform: transform.toFigMatrix(),
    }
  }
  return {
    ...paint,
    rotation: paint.rotation + t,
  }
}

/**
 * Gets the color at a specific stop.
 * Original name: $$B13
 * @param e - The paint.
 * @param t - The stop index.
 * @returns The color.
 */
export function getColorAtStop(e: any, t: { index: number }): any {
  const gradient = validateGradientPaint(e)
  if (gradient) {
    const stops = gradient.stops
    return t.index < stops.length ? stops[t.index].color : stops[0].color
  }
  const solid = getSolidPaint(e)
  debug(!!solid, 'paint is neither a gradient nor a solid')
  return {
    ...solid.color,
    a: solid.opacity ?? 1,
  }
}

/**
 * Gets a contrasting color.
 * Original name: $$G12
 * @param e - The original color.
 * @param t - Invert flag.
 * @returns The contrasting color.
 */
export function getContrastingColor(e: any, t: boolean = false): any {
  let result = { ...e, a: 0 } as RgbColor
  if (!t) {
    const hsv = rgbToHsv(e)
    const adjustedV = hsv.v >= 0.5 ? hsv.v - 0.4 : hsv.v + 0.4
    result = hsvToRgb({ ...hsv, v: adjustedV })
  }
  return result
}

/**
 * Checks if any effect is visible in the node or its children.
 * @param t - The node.
 * @returns True if any effect is visible.
 */
export function checkIfAnyEffectVisible(t: any): boolean {
  if (t.effects && t.effects.filter((e: any) => e.visible).length > 0)
    return true
  for (const child of t.childrenNodes ?? []) {
    if (checkIfAnyEffectVisible(child))
      return true
  }
  return false
}

// Exports with original names
export const E3 = isImageOrVideoType
export const Em = blackColor
export const JX = anchorPositionFromAlignment
export const Lt = rotatePaint
export const N9 = filterValidImagePaints
export const OO = alignmentFromAnchorPosition
export const Ou = getSolidPaint
export const Tm = paintManager
export const XE = getPatternPaint
export const Z3 = getNoisePaint
export const bn = isGradientType
export const c4 = getContrastingColor
export const iC = getColorAtStop
export const n_ = initializeDefaultImagePaint
export const qg = hashToHexString
export const rC = defaultGrayColor
export const sb = isSolidType
export const wQ = isArrowEndCap
export const x$ = validateGradientPaint
export const y7 = getImageOrVideoPaint
export const aT = checkIfAnyEffectVisible
