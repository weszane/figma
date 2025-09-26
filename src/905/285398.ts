import { DEFAULT_OPTICAL_SIZE } from '../905/165290'
import { hasFontFamily } from '../905/240327'
import { debugState } from '../905/407919'
import { FontSourceType } from '../figma_app/763686'
import { getFalseValue } from '../figma_app/897289'

/**
 * Set of supported text style properties.
 * (Original: $$l0)
 */
export const TEXT_STYLE_KEYS = new Set([
  'fontName',
  'fontSize',
  'textCase',
  'textDecoration',
  'letterSpacing',
  'lineHeight',
  'hyperlink',
  'fills',
  'listOptions',
  'indentation',
])

/**
 * Extracts text style ranges and characters from a vNode.
 * (Original: $$d1)
 * @param params - vNode, options, Span, fontProps
 */
export function extractTextRanges({
  vNode,
  options,
  Span,
  fontProps,
}: {
  vNode: any
  options: any
  Span: any
  fontProps: any
}) {
  if (vNode?.type !== 'text' && vNode?.type !== 'input')
    return null

  let characters = ''
  let ranges: Array<{ start: number, end: number, style: any }> = []

  /**
   * Recursively processes children to build character string and style ranges.
   * (Original: s)
   */
  function processNode(node: any, inheritedProps: any) {
    if (node != null && node !== false) {
      if (typeof node === 'string' || typeof node === 'number') {
        characters += String(node)
        return
      }
      if (Array.isArray(node)) {
        node.forEach(child => processNode(child, inheritedProps))
        return
      }
      if (node.type === 'Span') {
        const start = characters.length
        const mergedProps = {
          ...inheritedProps,
          ...extractFontProps(node.props),
        }
        const { textStyle } = splitTextStyle(
          Span({
            ...node.props,
            font: resolveFont(mergedProps),
          }, options).props,
        )
        if (Array.isArray(node.props?.children)) {
          node.props.children.forEach(child => processNode(child, mergedProps))
        }
        else {
          processNode(node.children, mergedProps)
        }
        const end = characters.length
        ranges.push({
          start,
          end,
          style: textStyle,
        })
      }
    }
  }

  processNode(vNode.renderMetaData.children, fontProps)
  ranges.reverse()
  const { textStyle } = splitTextStyle(vNode.props)
  return {
    style: textStyle,
    ranges,
    characters,
  }
}

/**
 * Maps font weight names and numbers to numeric values.
 * (Original: m)
 */
export const FONT_WEIGHT_MAP = new Map<
  number | string,
  number
>([
  [100, 100],
  [200, 200],
  [300, 300],
  [400, 400],
  [500, 500],
  [600, 600],
  [700, 700],
  [800, 800],
  [900, 900],
  ['thin', 100],
  ['extra-light', 200],
  ['light', 300],
  ['normal', 400],
  ['medium', 500],
  ['semi-bold', 600],
  ['bold', 700],
  ['extra-bold', 800],
  ['black', 900],
])

/**
 * Splits props into textStyle and otherProps based on TEXT_STYLE_KEYS.
 * (Original: $$c4)
 * @param props - The props object to split.
 */
export function splitTextStyle(props: Record<string, any>) {
  const textStyle: Record<string, any> = {}
  const otherProps: Record<string, any> = {}
  for (const key in props) {
    if (TEXT_STYLE_KEYS.has(key)) {
      textStyle[key] = props[key]
    }
    else {
      otherProps[key] = props[key]
    }
  }
  return { textStyle, otherProps }
}

const DEFAULT_FONT_STYLE = 'Regular'

/**
 * Resolves font family and style from props.
 * (Original: $$p3)
 * @param props - Font properties.
 */
export function resolveFont(props: {
  font?: any
  italic?: boolean
  fontWeight?: number | string
  fontFamily?: string
}) {
  const {
    font,
    italic = false,
    fontWeight = 400,
    fontFamily = 'Inter',
  } = props

  if (
    font
    || props.italic != null
    || props.fontWeight != null
    || props.fontFamily != null
  ) {
    let resolvedFamily
      = fontFamily === 'Roboto'
        || fontFamily === 'Inter'
        || hasFontFamily(fontFamily)
        ? fontFamily
        : (getFalseValue() || console.error(
            `Use of non-supported font '${fontFamily}'. Use Roboto, Inter, or another Google font.`,
          ),
          'Inter')

    return (
      font || {
        family: resolvedFamily,
        style: resolveFontStyle({
          fontFamily: resolvedFamily,
          fontWeight: FONT_WEIGHT_MAP.get(fontWeight) || 400,
          italic,
        }),
      }
    )
  }
  else {
    return {
      family: 'Inter',
      style: 'Medium',
    }
  }
}

/**
 * Resolves the font style string for a given font family, weight, and italic.
 * (Original: anonymous function inside $$p3)
 * @param params - fontFamily, fontWeight, italic
 */
function resolveFontStyle({
  fontFamily,
  fontWeight,
  italic,
}: {
  fontFamily: string
  fontWeight: number
  italic: boolean
}) {
  const fonts = (debugState.getState().fonts || {})[fontFamily]
  for (const font in fonts) {
    const styles = fonts[font].styles
    if (
      fonts[font].source === FontSourceType.GOOGLE
      || getFalseValue()
      || console.warn(
        `Font '${fontFamily}' is not loaded from Google fonts. The font may be a shared font or installed locally.`,
      )
    ) {
      ;
    }
    const styleKey = Object.keys(styles)
      .filter(
        key =>
          styles[key].italic === italic
          && styles[key].weight === fontWeight,
      )
      .sort(
        (a, b) =>
          Math.abs(styles[a].stretch || DEFAULT_OPTICAL_SIZE - DEFAULT_OPTICAL_SIZE)
          - Math.abs(styles[b].stretch || DEFAULT_OPTICAL_SIZE - DEFAULT_OPTICAL_SIZE),
      )
      .pop()
    if (styleKey)
      return styleKey
  }
  console.error(
    `Unable to resolve font for fontFamily=${fontFamily}, fontWeight=${fontWeight}, italic=${italic} - falling back to ${DEFAULT_FONT_STYLE}.`,
  )
  return DEFAULT_FONT_STYLE
}



/**
 * Extracts font-related props, removing undefined values.
 * (Original: $$h2)
 * @param props - The props object.
 */
export function extractFontProps(props: any) {
  if (!props)
    return {}
  const fontProps = {
    font: props.font,
    italic: props.italic,
    fontWeight: props.fontWeight,
    fontFamily: props.fontFamily,
  }
  for (const key in fontProps) {
    if (fontProps[key] === undefined)
      delete fontProps[key]
  }
  return fontProps
}

// Export refactored names for compatibility
export const $U = TEXT_STYLE_KEYS
export const ZW = extractTextRanges
export const _u = extractFontProps
export const c8 = resolveFont
export const hH = splitTextStyle
