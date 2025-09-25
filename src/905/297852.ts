import { flipVertical, getCenteredRotation, getRelativeBoundsAndRotation, isRotated } from '../905/346946'
import { exists } from '../905/372580'
import { colorToString, concatOptional, cssBlendMode, cssDropShadow, cssFilterFromBlurEffectRadius, getEffectsStyle } from '../905/393409'
import { concatFilter, cssVarToString } from '../905/436288'
import { transformDefaults } from '../905/712000'
import { ABSOLUTE_CLASS, isAutoLayout } from '../figma_app/706870'

/**
 * Converts a corner radius value to an array of four values representing
 * the top-left, top-right, bottom-right, and bottom-left radii.
 * (Original function: cornerRadiusToArray)
 * @param element - The element containing the corner radius property
 * @returns An array of four corner radius values, or undefined if not applicable
 */
export function cornerRadiusToArray(element: { cornerRadius?: number | { topLeft?: number, topRight?: number, bottomRight?: number, bottomLeft?: number } }): number[] | undefined {
  const { cornerRadius } = element

  if (exists(cornerRadius) && cornerRadius !== 0) {
    if (typeof cornerRadius === 'number') {
      return [cornerRadius, cornerRadius, cornerRadius, cornerRadius]
    }
    else {
      const topLeft = cornerRadius.topLeft ?? 0
      const topRight = cornerRadius.topRight ?? 0
      const bottomRight = cornerRadius.bottomRight ?? 0
      const bottomLeft = cornerRadius.bottomLeft ?? 0
      return [topLeft, topRight, bottomRight, bottomLeft]
    }
  }

  return undefined
}

/**
 * Calculates layout properties for an item based on its props, parent, and other factors.
 * (Original function: getItemLayout)
 * @param props - The properties of the item
 * @param parent - The parent element
 * @param hasChildren - Whether the item has children
 * @param ignoreRotation - Whether to ignore rotation in calculations
 * @returns An object containing style and wrapperStyle properties
 */
export function getItemLayout({
  props,
  parent,
  hasChildren,
  ignoreRotation = false,
}: {
  props: any
  parent: any
  hasChildren: boolean
  ignoreRotation?: boolean
}) {
  let style: Record<string, any> = {}
  let wrapperStyle: Record<string, any> = {}

  if (exists(parent) && isAutoLayout(parent) && props.positioning !== 'absolute') {
    const autoLayoutStyle = {
      ...((isAutoLayout(parent)
        && ((parent.props.direction === 'horizontal' && props.width === 'fill-parent')
          || (parent.props.direction === 'vertical' && props.height === 'fill-parent')))
        ? { flexGrow: 1, flexBasis: 0 }
        : { flexShrink: 0 }),
      ...((isAutoLayout(parent)
        && ((parent.props.direction === 'horizontal' && props.height === 'fill-parent')
          || (parent.props.direction === 'vertical' && props.width === 'fill-parent')))
        ? { alignSelf: 'stretch' }
        : {}),
    }

    if (props.padding && (props.padding.top !== 0 || props.padding.bottom !== 0
      || props.padding.left !== 0 || props.padding.right !== 0) && hasChildren) {
      wrapperStyle = autoLayoutStyle
      style = {
        width: '100%',
        height: '100%',
      }
    }
    else {
      style = autoLayoutStyle
    }
  }
  else {
    style = exists(parent)
      ? getConstraintPositioning(props)
      : { position: 'relative' }
  }

  if (!exists(parent)) {
    if (props.width === 'fill-parent') {
      style.width = '100%'
    }
    if (props.height === 'fill-parent') {
      style.height = '100%'
    }
  }

  const { width, height } = props
  const transformData = transformFromReactProps(props)

  if (isRotated(transformData) && typeof width === 'number' && typeof height === 'number') {
    const rotatedStyle = {
      ...(() => {
        const { width: boxWidth, height: boxHeight } = transformData.relativeBoundingBox
        return {
          width: `${(width / boxWidth) * 100}%`,
          height: `${(height / boxHeight) * 100}%`,
          left: `${((boxWidth - width) / 2 / boxWidth) * 100}%`,
          top: `${((boxHeight - height) / 2 / boxHeight) * 100}%`,
        }
      })(),
      ...(ignoreRotation ? {} : getTransformStyle(transformData)),
    }

    return {
      wrapperStyle: {
        ...wrapperStyle,
        ...style,
        ...(() => {
          const { width: boxWidth, height: boxHeight } = transformData.relativeBoundingBox
          return {
            width: `${boxWidth.toFixed(2)}px`,
            height: `${boxHeight.toFixed(2)}px`,
          }
        })(),
      },
      style: rotatedStyle,
    }
  }
  else {
    const { transform } = getTransformStyle(transformData)
    const hasWrapperStyle = Object.keys(wrapperStyle).length > 0

    return {
      style: {
        ...style,
        ...(hasWrapperStyle ? {} : getDimensionStyles(props)),
        transform: exists(transform) && !ignoreRotation
          ? concatFilter(style.transform, transform)
          : style.transform,
      },
      wrapperStyle: hasWrapperStyle ? { ...wrapperStyle, ...getDimensionStyles(props) } : undefined,
    }
  }
}

/**
 * Calculates positioning based on constraint properties.
 * (Original function: getConstraintPositioning)
 * @param props - The properties containing constraint information
 * @returns An object with CSS positioning properties
 */
export function getConstraintPositioning(props: any) {
  const positionStyle: Record<string, any> = {
    position: 'absolute',
  }

  let horizontalOffset = 0
  let verticalOffset = 0

  if ('direction' in props) {
    if (props.direction === 'vertical') {
      verticalOffset = props.strokeWidth / 2
    }
    else if (props.direction === 'horizontal') {
      horizontalOffset = props.strokeWidth / 2
    }
  }

  const { x, y } = props

  switch (x.type) {
    case 'left':
      positionStyle.left = `${x.offset - horizontalOffset}px`
      break
    case 'right':
      positionStyle.right = `${x.offset + horizontalOffset}px`
      break
    case 'left-right':
      positionStyle.left = `${x.leftOffset - horizontalOffset}px`
      positionStyle.width = `calc(100% - (${x.leftOffset}px + ${x.rightOffset}px))`
      break
    case 'center':
      positionStyle.transform = 'translateX(-50%)'
      positionStyle.left = `calc(50% + ${Math.round(x.offset)}px)`
      break
    case 'horizontal-scale':
      positionStyle.left = `${x.leftOffsetPercent.toFixed(2)}%`
      const horizontalScaleWidth = 100 - (x.leftOffsetPercent + x.rightOffsetPercent)
      positionStyle.width = `${horizontalScaleWidth.toFixed(2)}%`
      break
  }

  switch (y.type) {
    case 'top':
      positionStyle.top = `${y.offset - verticalOffset}px`
      break
    case 'bottom':
      positionStyle.bottom = `${y.offset + verticalOffset}px`
      break
    case 'top-bottom':
      positionStyle.top = `${y.topOffset - verticalOffset}px`
      positionStyle.height = `calc(100% - (${y.topOffset}px + ${y.bottomOffset}px))`
      break
    case 'center':
      positionStyle.transform = concatFilter(positionStyle.transform, 'translateY(-50%)')
      positionStyle.top = `calc(50% + ${Math.round(y.offset)}px)`
      break
    case 'vertical-scale':
      positionStyle.top = `${y.topOffsetPercent.toFixed(2)}%`
      const verticalScaleHeight = 100 - (y.topOffsetPercent + y.bottomOffsetPercent)
      positionStyle.height = `${verticalScaleHeight.toFixed(2)}%`
      break
  }

  return positionStyle
}

/**
 * Maps alignment values to CSS flexbox alignment values.
 * (Original function: p)
 * @param alignment - The alignment value to map
 * @returns The corresponding CSS flexbox alignment value
 */
export function mapAlignmentToFlex(alignment: string): string {
  switch (alignment) {
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
    case 'start':
      return 'flex-start'
    case 'baseline':
      return 'baseline'
    default:
      return alignment
  }
}

/**
 * Calculates dimension styles for an element.
 * (Original function: m)
 * @param props - The properties containing width and height information
 * @returns An object with width and/or height CSS properties
 */
export function getDimensionStyles(props: any): Record<string, string> {
  const dimensionStyle: Record<string, string> = {}

  if (typeof props.width === 'number'
    && props.x?.type !== 'left-right'
    && props.x?.type !== 'horizontal-scale') {
    dimensionStyle.width = `${props.width.toFixed(2)}px`
  }

  if (typeof props.height === 'number'
    && props.y?.type !== 'top-bottom'
    && props.y?.type !== 'vertical-scale') {
    dimensionStyle.height = `${props.height.toFixed(2)}px`
  }

  return dimensionStyle
}

/**
 * Extracts transform matrix from transform data.
 * (Original function: h)
 * @param transformData - The data containing relative transform information
 * @returns An object with CSS transform property or empty object if no transform
 */
export function getTransformStyle(transformData: any): Record<string, string> {
  const { relativeTransform } = transformData
  const [m00, m01] = relativeTransform[0]
  const [m10, m11] = relativeTransform[1]

  // Check if it's an identity matrix
  if (m00 === 1 && m10 === 0 && m01 === 0 && m11 === 1) {
    return {}
  }

  return {
    transform: `matrix(${m00},${m10},${m01},${m11},0,0)`,
  }
}

/**
 * Calculates transform properties from React component props.
 * (Original function: transformFromReactProps)
 * @param props - The React component props
 * @returns An object containing transform information
 */
export function transformFromReactProps(props: any) {
  const width = typeof props.width === 'number' ? props.width : 0
  const height = typeof props.height === 'number' ? props.height : 0
  const rotation = props.rotation ?? transformDefaults().rotation
  let transform = getCenteredRotation(rotation, width, height)

  if (props.flipVertical) {
    transform = flipVertical(transform)
  }

  const { relativeBoundingBox, rotationOnlyTransform } = getRelativeBoundsAndRotation({
    width,
    height,
    relativeTransform: transform,
  })

  return {
    relativeTransform: transform,
    relativeBoundingBox,
    rotationOnlyTransform,
  }
}

/**
 * Returns reset styles for elements.
 * (Original function: getResetStyles)
 * @returns An object with reset CSS properties
 */
export function getResetStyles(): Record<string, string> {
  return {
    boxSizing: 'border-box',
  }
}

/**
 * Calculates visibility styles based on hidden property.
 * (Original function: getVisibility)
 * @param props - The properties containing hidden information
 * @returns An object with display property if hidden, otherwise empty object
 */
export function getVisibility(props: any): Record<string, string> {
  return props.hidden === true
    ? { display: 'none' }
    : {}
}

/**
 * Calculates overflow styles.
 * (Original function: getOverflow)
 * @param props - The properties containing overflow information
 * @returns An object with overflow CSS property
 */
export function getOverflow(props: any): Record<string, string> {
  return {
    overflow: props.overflow,
  }
}

/**
 * Calculates border radius styles.
 * (Original function: getCornerRadius)
 * @param props - The properties containing corner radius information
 * @returns An object with border-radius CSS property
 */
export function getCornerRadius(props: any): Record<string, string> {
  const cornerRadiusArray = cornerRadiusToArray(props)
  return exists(cornerRadiusArray)
    ? { borderRadius: cornerRadiusArray.map(radius => `${radius}px`).join(' ') }
    : {}
}

/**
 * Calculates text effects styles.
 * (Original function: getTextEffects)
 * @param effects - Array of effect objects
 * @returns An object with text effect CSS properties
 */
export function getTextEffects(effects: any[]): Record<string, string> {
  const style: Record<string, string> = {}

  effects.filter(effect => effect.visible).forEach((effect) => {
    switch (effect.type) {
      case 'layer-blur':
        style.filter = cssFilterFromBlurEffectRadius(effect.blur)
        break
      case 'background-blur':
        style.backdropFilter = cssFilterFromBlurEffectRadius(effect.blur)
        break
      case 'drop-shadow':
        style.textShadow = concatOptional(style.textShadow, cssDropShadow(effect))
        break
      case 'inner-shadow':
        console.warn('Inner shadow is not supported on text')
        break
    }
  })

  return style
}

/**
 * Calculates rectangle stroke and effects styles.
 * (Original function: getRectangleStrokeAndEffects)
 * @param props - The properties containing stroke and effect information
 * @returns An object with stroke and effect CSS properties
 */
export function getRectangleStrokeAndEffects(props: any): Record<string, string> {
  let style = getEffectsStyle(props.effect)
  const { stroke, strokeWidth = 0, strokeAlign } = props

  if (stroke) {
    const visibleStroke = stroke.find(
      (s: any) => s.type === 'css-var' || (s.type === 'solid' && s.visible !== false && s.color),
    )

    if (visibleStroke) {
      let strokeColor: string

      if (visibleStroke.type === 'css-var') {
        strokeColor = cssVarToString(visibleStroke)
      }
      else {
        const { color, opacity } = visibleStroke
        strokeColor = colorToString(color, opacity)
      }

      switch (strokeAlign) {
        case 'inside':
          style.boxShadow = concatOptional(style.boxShadow, `0px 0px 0px ${strokeWidth}px ${strokeColor} inset`)
          break
        case 'outside':
          style.boxShadow = concatOptional(style.boxShadow, `0px 0px 0px ${strokeWidth}px ${strokeColor}`)
          break
        case 'center':
          style.boxShadow = concatOptional(style.boxShadow, `0px 0px 0px ${strokeWidth / 2}px ${strokeColor} inset`)
          style.boxShadow = concatOptional(style.boxShadow, `0px 0px 0px ${strokeWidth / 2}px ${strokeColor}`)
          break
      }
    }
  }

  return style
}

/**
 * Calculates frame stroke and effects styles.
 * (Original function: getFrameStrokeAndEffects)
 * @param props - The properties containing frame stroke and effect information
 * @returns An object with style and overlayStyle properties
 */
export function getFrameStrokeAndEffects(props: any): { style: Record<string, string>, overlayStyle: Record<string, string> } {
  const isOverflowHidden = props.overflow === 'hidden'
  const { fill, effect } = props
  const hasVisibleFill = isOverflowHidden && fill.some((f: any) => f.visible !== false)
  const style = getEffectsStyle(effect, hasVisibleFill)
  const overlayStyle: Record<string, string> = {}

  const { stroke, strokeWidth = 0, strokeAlign } = props

  if (stroke) {
    const visibleStroke = stroke.find(
      (s: any) => s.type === 'css-var' || (s.type === 'solid' && s.visible !== false && s.color),
    )

    if (visibleStroke) {
      let strokeColor: string

      if (visibleStroke.type === 'css-var') {
        strokeColor = cssVarToString(visibleStroke)
      }
      else {
        const { color, opacity } = visibleStroke
        strokeColor = colorToString(color, opacity)
      }

      switch (strokeAlign) {
        case 'inside':
          if (isOverflowHidden) {
            overlayStyle.boxShadow = `0px 0px 0px ${strokeWidth}px ${strokeColor} inset`
          }
          else {
            style.boxShadow = concatOptional(style.boxShadow, `0px 0px 0px ${strokeWidth}px ${strokeColor} inset`)
          }
          break
        case 'outside':
          style.boxShadow = concatOptional(style.boxShadow, `0px 0px 0px ${strokeWidth}px ${strokeColor}`)
          break
        case 'center':
          if (isOverflowHidden) {
            overlayStyle.boxShadow = `0px 0px 0px ${strokeWidth / 2}px ${strokeColor} inset`
          }
          else {
            style.boxShadow = concatOptional(style.boxShadow, `0px 0px 0px ${strokeWidth / 2}px ${strokeColor} inset`)
          }
          style.boxShadow = concatOptional(style.boxShadow, `0px 0px 0px ${strokeWidth / 2}px ${strokeColor}`)
          break
      }
    }
  }

  return { style, overlayStyle }
}

/**
 * Calculates text alignment styles.
 * (Original function: getTextAlign)
 * @param props - The properties containing text alignment information
 * @returns An object with text alignment CSS properties
 */
export function getTextAlign(props: any): Record<string, string> {
  const style: Record<string, string> = {}

  if (props.horizontalAlignText) {
    const textAlignMap: Record<string, string> = {
      center: 'center',
      left: 'left',
      right: 'right',
      justified: 'justify',
    }
    style.textAlign = textAlignMap[props.horizontalAlignText]
  }

  if (props.verticalAlignText) {
    style.display = 'flex'
    style.flexDirection = 'column'

    const justifyContentMap: Record<string, string> = {
      bottom: 'flex-end',
      center: 'center',
      top: 'flex-start',
    }
    style.justifyContent = justifyContentMap[props.verticalAlignText]
  }

  return style
}

/**
 * Calculates text layout styles.
 * (Original function: getTextLayout)
 * @param props - The properties of the text element
 * @param parent - The parent element
 * @returns An object containing style and wrapperStyle properties
 */
export function getTextLayout(props: any, parent: any) {
  const { style, wrapperStyle } = getItemLayout({
    props,
    parent,
    hasChildren: false,
  }) as any

  const { width, height } = props
  const transformData = transformFromReactProps(props)

  if (!isRotated(transformData)) {
    if (width === 'hug-contents' && height === 'hug-contents') {
      delete style.width
      delete style.height
    }
    else if (height === 'hug-contents') {
      delete style.height
    }
    else if (width === 'hug-contents') {
      console.warn('Text cannot have hug-contents on width only')
    }

    if (width !== 'hug-contents' || height !== 'hug-contents') {
      style.wordBreak = 'break-word'
    }
  }

  return { style, wrapperStyle }
}

/**
 * Calculates blend mode styles.
 * (Original function: getBlendMode)
 * @param blendMode - The blend mode value
 * @returns An object with mix-blend-mode CSS property
 */
export function getBlendMode(blendMode: any): Record<string, string> {
  return {
    mixBlendMode: cssBlendMode(blendMode),
  }
}

/**
 * Calculates text color styles.
 * (Original function: getTextColor)
 * @param props - The properties containing text fill information
 * @param alphaMultiplier - Alpha multiplier for the color
 * @returns An object with color CSS property
 */
export function getTextColor(props: any, alphaMultiplier = 1): Record<string, string> {
  const style: Record<string, string> = {}
  const visibleFill = props.fill.find((f: any) => f.visible !== false)

  if (exists(visibleFill)) {
    if (visibleFill.type === 'css-var') {
      style.color = cssVarToString(visibleFill)
    }
    else if (visibleFill.type === 'solid' && visibleFill.color) {
      const opacity = visibleFill.opacity ?? 1
      const elementOpacity = props.opacity ?? 1
      const finalAlpha = visibleFill.color.a * opacity * elementOpacity * alphaMultiplier
      style.color = colorToString({ ...visibleFill.color, a: finalAlpha })
    }
  }

  return style
}

/**
 * Calculates opacity styles.
 * (Original function: getOpacity)
 * @param props - The properties containing opacity information
 * @returns An object with opacity CSS property
 */
export function getOpacity(props: any): Record<string, number> {
  const { opacity } = props
  return opacity !== undefined && opacity !== 1
    ? { opacity }
    : {}
}

/**
 * Calculates parent layout styles for auto-layout containers.
 * (Original function: getParentLayout)
 * @param props - The properties containing layout information
 * @returns An object with parent layout CSS properties
 */
export function getParentLayout(props: any): Record<string, any> {
  const style: Record<string, any> = {}
  const { padding, direction, spacing, verticalAlignItems, horizontalAlignItems } = props

  if (padding.top !== 0 || padding.right !== 0 || padding.bottom !== 0 || padding.left !== 0) {
    style.padding = `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`
  }

  style.display = 'flex'
  style.flexDirection = direction === 'vertical' ? 'column' : 'row'

  if (direction === 'horizontal') {
    style.justifyContent = mapAlignmentToFlex(horizontalAlignItems)
    style.alignItems = mapAlignmentToFlex(verticalAlignItems)
  }
  else if (direction === 'vertical') {
    style.alignItems = mapAlignmentToFlex(horizontalAlignItems)
    style.justifyContent = mapAlignmentToFlex(verticalAlignItems)
  }

  if (typeof spacing === 'number') {
    style[`> *:not(.${ABSOLUTE_CLASS}) ~ *:not(.${ABSOLUTE_CLASS})`] = {
      [direction === 'horizontal' ? 'marginLeft' : 'marginTop']: `${spacing}px`,
    }
  }
  else if (spacing === 'auto') {
    style.justifyContent = 'space-between'
  }

  return style
}

/**
 * Calculates SVG layout styles.
 * (Original function: getSvgLayout)
 * @param props - The properties of the SVG element
 * @param parent - The parent element
 * @param hasChildren - Whether the SVG has children
 * @returns An object with SVG layout CSS properties
 */
export function getSvgLayout({
  props,
  parent,
  hasChildren,
}: {
  props: any
  parent: any
  hasChildren: boolean
}) {
  const { style, wrapperStyle } = getItemLayout({
    props,
    parent,
    hasChildren,
    ignoreRotation: true,
  })

  const svgStyle: Record<string, any> = wrapperStyle === undefined ? style : wrapperStyle
  svgStyle.overflow = 'visible'

  if (svgStyle.height === '0.00%' || svgStyle.height === '0.00px') {
    svgStyle.height = '1px'
  }

  if (svgStyle.width === '0.00%' || svgStyle.width === '0.00px') {
    svgStyle.width = '1px'
  }

  return svgStyle
}
