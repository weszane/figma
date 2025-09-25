// /Users/allen/sigma-main/src/905/712000.ts

// Define types for default props
interface Color {
  r: number
  g: number
  b: number
  a: number
}

interface Paint {
  type: string
  color: Color
  blendMode: string
}

interface BaseProps {
  name: string
  hidden: boolean
  positioning: string
  x: number
  y: number
  blendMode: string
  opacity: number
  effect: any[]
}

interface GeometryProps {
  fill: any[]
  stroke: any[]
  strokeWidth: number
  strokeAlign: string
}

interface PathProps {
  fillPath: any[]
  strokePath: any[]
}

interface CornerProps {
  cornerRadius: number
}

interface SizeProps {
  width: number
  height: number
}

interface AutoLayoutSizeProps {
  width: string
  height: string
}

interface TransformProps {
  rotation: number
  flipVertical: boolean
}

interface AutoLayoutProps {
  direction: string
  spacing: number
  padding: number
  horizontalAlignItems: string
  verticalAlignItems: string
}

interface TextStyleProps {
  fontFamily: string
  letterSpacing: number
  textDecoration: string
  fontSize: number
  italic: boolean
  textCase: string
  fontWeight: number
  fontPostScriptName: string
  fill: any[]
}

interface PaintProps {
  visible: boolean
  opacity: number
  blendMode: string
}

interface ImagePaintProps extends PaintProps {
  scaleMode: string
  imageTransform: number[][]
  scalingFactor: number
  rotation: number
}

interface ShadowEffectProps {
  blendMode: string
  spread: number
  visible: boolean
}

interface BlurEffectProps {
  visible: boolean
}

interface FrameProps extends BaseProps, GeometryProps, TransformProps, CornerProps {
  overflow: string
}

interface AutoLayoutFrameProps extends FrameProps, AutoLayoutSizeProps, AutoLayoutProps {}

interface EllipseProps extends BaseProps, GeometryProps, TransformProps {}

interface LineProps extends BaseProps, GeometryProps {
  flipVertical: boolean
  strokeWidth: number
  direction: string
}

interface RectangleProps extends BaseProps, GeometryProps, TransformProps, CornerProps {}

interface SvgProps extends BaseProps, GeometryProps, SizeProps, TransformProps, PathProps {}

interface TextProps extends BaseProps, AutoLayoutSizeProps, TransformProps, TextStyleProps {
  paragraphSpacing: number
  paragraphIndent: number
  horizontalAlignText: string
  verticalAlignText: string
  lineHeight: string
}

interface SpanProps extends BaseProps, AutoLayoutSizeProps, TransformProps, TextStyleProps {}

// Basic paint default (original i)
const defaultPaint: Paint = {
  type: 'solid',
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  },
  blendMode: 'normal',
}

/**
 * Returns base default properties for components.
 * @returns {BaseProps} Base default props.
 */
function baseDefaults(): BaseProps {
  return {
    name: '',
    hidden: false,
    positioning: 'auto',
    x: 0,
    y: 0,
    blendMode: 'normal',
    opacity: 1,
    effect: [],
  }
}

/**
 * Returns geometry default properties.
 * @returns {GeometryProps} Geometry default props.
 */
function geometryDefaults(): GeometryProps {
  return {
    fill: [],
    stroke: [],
    strokeWidth: 1,
    strokeAlign: 'inside',
  }
}

/**
 * Returns path default properties.
 * @returns {PathProps} Path default props.
 */
function pathDefaults(): PathProps {
  return {
    fillPath: [],
    strokePath: [],
  }
}

/**
 * Returns corner default properties.
 * @returns {CornerProps} Corner default props.
 */
function cornerDefaults(): CornerProps {
  return {
    cornerRadius: 0,
  }
}

/**
 * Returns size default properties.
 * @returns {SizeProps} Size default props.
 */
function sizeDefaults(): SizeProps {
  return {
    width: 0,
    height: 0,
  }
}

/**
 * Returns auto layout size default properties.
 * @returns {AutoLayoutSizeProps} Auto layout size default props.
 */
function autoLayoutSizeDefaults(): AutoLayoutSizeProps {
  return {
    width: 'hug-contents',
    height: 'hug-contents',
  }
}

/**
 * Returns transform default properties.
 * @returns {TransformProps} Transform default props.
 */
function transformDefaults(): TransformProps {
  return {
    rotation: 0,
    flipVertical: false,
  }
}

/**
 * Returns auto layout default properties.
 * @returns {AutoLayoutProps} Auto layout default props.
 */
function autoLayoutDefaults(): AutoLayoutProps {
  return {
    direction: 'horizontal',
    spacing: 0,
    padding: 0,
    horizontalAlignItems: 'start',
    verticalAlignItems: 'start',
  }
}

/**
 * Returns text style default properties.
 * @param {boolean} emptyFill - Whether to use empty fill.
 * @returns {TextStyleProps} Text style default props.
 */
function textStyleDefaults(emptyFill: boolean = false): TextStyleProps {
  return {
    fontFamily: 'Roboto',
    letterSpacing: 0,
    textDecoration: 'none',
    fontSize: 16,
    italic: false,
    textCase: 'original',
    fontWeight: 400,
    fontPostScriptName: '',
    fill: emptyFill ? [] : [defaultPaint],
  }
}

/**
 * Returns paint default properties.
 * @returns {PaintProps} Paint default props.
 */
function paintDefaults(): PaintProps {
  return {
    visible: true,
    opacity: 1,
    blendMode: 'normal',
  }
}

/**
 * Returns image paint default properties.
 * @returns {ImagePaintProps} Image paint default props.
 */
function imagePaintDefaults(): ImagePaintProps {
  return {
    ...paintDefaults(),
    scaleMode: 'fill',
    imageTransform: [[1, 0, 0], [0, 1, 0]],
    scalingFactor: 1,
    rotation: 0,
  }
}

/**
 * Returns shadow effect default properties.
 * @returns {ShadowEffectProps} Shadow effect default props.
 */
function shadowEffectDefaults(): ShadowEffectProps {
  return {
    blendMode: 'normal',
    spread: 0,
    visible: true,
  }
}

/**
 * Returns blur effect default properties.
 * @returns {BlurEffectProps} Blur effect default props.
 */
function blurEffectDefaults(): BlurEffectProps {
  return {
    visible: true,
  }
}

/**
 * Returns default frame properties.
 * @returns {FrameProps} Default frame props.
 */
function getDefaultFrameProps(): FrameProps {
  return {
    ...baseDefaults(),
    ...geometryDefaults(),
    ...transformDefaults(),
    ...cornerDefaults(),
    overflow: 'hidden',
  }
}

/**
 * Returns default auto layout properties.
 * @returns {AutoLayoutFrameProps} Default auto layout props.
 */
function getDefaultAutoLayoutProps(): AutoLayoutFrameProps {
  return {
    ...getDefaultFrameProps(),
    ...autoLayoutSizeDefaults(),
    ...autoLayoutDefaults(),
  }
}

/**
 * Returns default ellipse properties.
 * @returns {EllipseProps} Default ellipse props.
 */
function getDefaultEllipseProps(): EllipseProps {
  return {
    ...baseDefaults(),
    ...geometryDefaults(),
    ...transformDefaults(),
  }
}

/**
 * Returns default line properties.
 * @returns {LineProps} Default line props.
 */
function getDefaultLineProps(): LineProps {
  return {
    ...baseDefaults(),
    ...geometryDefaults(),
    flipVertical: false,
    strokeWidth: 1,
    direction: 'horizontal',
  }
}

/**
 * Returns default rectangle properties.
 * @returns {RectangleProps} Default rectangle props.
 */
function getDefaultRectangleProps(): RectangleProps {
  return {
    ...baseDefaults(),
    ...geometryDefaults(),
    ...transformDefaults(),
    ...cornerDefaults(),
  }
}

/**
 * Returns default SVG properties.
 * @returns {SvgProps} Default SVG props.
 */
function getDefaultSvgProps(): SvgProps {
  return {
    ...baseDefaults(),
    ...geometryDefaults(),
    ...sizeDefaults(),
    ...transformDefaults(),
    ...pathDefaults(),
  }
}

/**
 * Returns default text properties.
 * @returns {TextProps} Default text props.
 */
function getDefaultTextProps(): TextProps {
  return {
    ...baseDefaults(),
    ...autoLayoutSizeDefaults(),
    ...transformDefaults(),
    ...textStyleDefaults(false),
    paragraphSpacing: 0,
    paragraphIndent: 0,
    horizontalAlignText: 'left',
    verticalAlignText: 'top',
    lineHeight: 'auto',
  }
}

/**
 * Returns default span properties.
 * @returns {SpanProps} Default span props.
 */
function getDefaultSpanProps(): SpanProps {
  return {
    ...baseDefaults(),
    ...autoLayoutSizeDefaults(),
    ...transformDefaults(),
    ...textStyleDefaults(true),
  }
}

// Exports
export {
  autoLayoutDefaults,
  autoLayoutSizeDefaults,
  baseDefaults,
  blurEffectDefaults,
  cornerDefaults,
  geometryDefaults,
  getDefaultAutoLayoutProps,
  getDefaultEllipseProps,
  getDefaultFrameProps,
  getDefaultLineProps,
  getDefaultRectangleProps,
  getDefaultSpanProps,
  getDefaultSvgProps,
  getDefaultTextProps,
  imagePaintDefaults,
  paintDefaults,
  pathDefaults,
  shadowEffectDefaults,
  sizeDefaults,
  textStyleDefaults,
  transformDefaults,
}
