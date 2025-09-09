import { PropTypes } from '../905/816730'
import { InternalError } from '../905/845428'

/**
 * Removes specified keys from an object.
 * @param keys - Keys to remove.
 * @param obj - Source object.
 * @returns New object without specified keys.
 * (Original: function a)
 */
export function removeKeys(keys: string[], obj: Record<string, any>): Record<string, any> {
  const result = { ...obj }
  keys.forEach((key) => {
    delete result[key]
  })
  return result
}

/**
 * PropTypes definitions for layout and style.
 * (Original: let s, o, l, d, c, u, p, m, h, g, f, _, A, y, b, v, I, E, x, S, w, C, T, k, R, N, P, O, D, L, F, M, j, U, B, V, G, z, H, W, K, Y, q, $, Z, X, Q, J, ee, et, ei, en, er, ea, es, eo, ed, eA, ey, eb, ev, eI, eE, ex, eS, ew, eC, $$eT2)
 */
export const verticalHorizontalProps = PropTypes.exact({
  vertical: PropTypes.float.isOptional,
  horizontal: PropTypes.float.isOptional,
})

export const edgeProps = PropTypes.exact({
  top: PropTypes.float.isOptional,
  left: PropTypes.float.isOptional,
  bottom: PropTypes.float.isOptional,
  right: PropTypes.float.isOptional,
})

export const paddingProps = PropTypes.oneOf([PropTypes.float, edgeProps, verticalHorizontalProps])
export const dimensionProps = PropTypes.oneOf([PropTypes.float, 'fill-parent'])
export const sizeProps = PropTypes.oneOf([dimensionProps, 'hug-contents'])
export const optionalFloat = PropTypes.float.isOptional
export const alignItemsProps = PropTypes.oneOf(['center', 'start', 'end'])

export const spacingProps = PropTypes.exact({
  horizontal: PropTypes.oneOf([PropTypes.float, 'auto']).isOptional,
  vertical: PropTypes.oneOf([PropTypes.float, 'auto']).isOptional,
})

export const layoutProps = {
  spacing: PropTypes.oneOf([PropTypes.float, 'auto', spacingProps]).isOptional,
  padding: paddingProps.isOptional,
  direction: PropTypes.oneOf(['horizontal', 'vertical']).isOptional,
  horizontalAlignItems: alignItemsProps.isOptional,
  verticalAlignItems: PropTypes.oneOf([alignItemsProps, 'baseline']).isOptional,
  wrap: PropTypes.bool.isOptional,
}

export const widthHeightProps = {
  width: sizeProps.isOptional,
  height: sizeProps.isOptional,
}

export const verticalConstraintProps = PropTypes.oneOf([
  PropTypes.exact({ type: 'top', offset: PropTypes.float }),
  PropTypes.exact({ type: 'bottom', offset: PropTypes.float }),
  PropTypes.exact({ type: 'center', offset: PropTypes.float }),
  PropTypes.exact({ type: 'top-bottom', topOffset: PropTypes.float, bottomOffset: PropTypes.float }),
  PropTypes.exact({ type: 'vertical-scale', topOffsetPercent: PropTypes.float, bottomOffsetPercent: PropTypes.float }),
])

export const horizontalConstraintProps = PropTypes.oneOf([
  PropTypes.exact({ type: 'left', offset: PropTypes.float }),
  PropTypes.exact({ type: 'right', offset: PropTypes.float }),
  PropTypes.exact({ type: 'center', offset: PropTypes.float }),
  PropTypes.exact({ type: 'left-right', leftOffset: PropTypes.float, rightOffset: PropTypes.float }),
  PropTypes.exact({ type: 'horizontal-scale', leftOffsetPercent: PropTypes.float, rightOffsetPercent: PropTypes.float }),
])

export const overflowProps = PropTypes.oneOf(['visible', 'hidden', 'scroll'])
export const blendModeProps = PropTypes.oneOf([
  'pass-through',
  'normal',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
])
export const stringProp = PropTypes.string

export const colorProps = PropTypes.exact({
  r: PropTypes.float,
  g: PropTypes.float,
  b: PropTypes.float,
  a: PropTypes.float,
})

export const offsetProps = PropTypes.exact({
  x: PropTypes.float,
  y: PropTypes.float,
})

export const positionProps = {
  x: PropTypes.oneOf([PropTypes.float, horizontalConstraintProps]).isOptional,
  y: PropTypes.oneOf([PropTypes.float, verticalConstraintProps]).isOptional,
}

export const dropShadowProps = PropTypes.exact({
  type: 'drop-shadow',
  color: PropTypes.oneOf([stringProp, colorProps]),
  offset: offsetProps,
  blur: PropTypes.float,
  blendMode: blendModeProps.isOptional,
  spread: PropTypes.float.isOptional,
  visible: PropTypes.bool.isOptional,
  showShadowBehindNode: PropTypes.bool.isOptional,
})

export const innerShadowProps = PropTypes.exact({
  type: 'inner-shadow',
  color: PropTypes.oneOf([stringProp, colorProps]),
  offset: offsetProps,
  blur: PropTypes.float,
  blendMode: blendModeProps.isOptional,
  spread: PropTypes.float.isOptional,
  visible: PropTypes.bool.isOptional,
})

export const blurEffectProps = PropTypes.exact({
  type: PropTypes.oneOf(['layer-blur', 'background-blur']),
  blur: PropTypes.float,
  visible: PropTypes.bool.isOptional,
})

export const effectProps = PropTypes.oneOf([dropShadowProps, innerShadowProps, blurEffectProps])

export const baseStyleProps = {
  blendMode: blendModeProps.isOptional,
  opacity: PropTypes.float.isOptional,
  effect: PropTypes.oneOf([effectProps, PropTypes.arrayOf(effectProps)]).isOptional,
  ...positionProps,
  name: PropTypes.string.isOptional,
  hidden: PropTypes.bool.isOptional,
}

export const paintTypeProps = {
  type: PropTypes.oneOf([
    'image',
    'solid',
    'gradient-linear',
    'gradient-radial',
    'gradient-angular',
    'gradient-diamond',
  ]),
  blendMode: blendModeProps.isOptional,
  visible: PropTypes.bool.isOptional,
  opacity: PropTypes.float.isOptional,
}

export const solidPaintProps = PropTypes.exact({
  ...paintTypeProps,
  type: 'solid',
  color: PropTypes.oneOf([colorProps, stringProp]),
})

export const gradientStopProps = PropTypes.exact({
  position: PropTypes.float,
  color: colorProps,
})

export const gradientPaintProps = PropTypes.exact({
  ...paintTypeProps,
  type: PropTypes.oneOf([
    'gradient-linear',
    'gradient-radial',
    'gradient-angular',
    'gradient-diamond',
  ]),
  gradientHandlePositions: PropTypes.arrayOf(offsetProps),
  gradientStops: PropTypes.arrayOf(gradientStopProps),
})

export const imageTransformProps = PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.float))
export const scaleModeProps = PropTypes.oneOf(['fill', 'fit', 'tile', 'crop'])

export const imagePaintProps = PropTypes.exact({
  ...paintTypeProps,
  type: 'image',
  src: PropTypes.string.isOptional,
  imageHash: PropTypes.string.isOptional,
  imageSize: PropTypes.exact({
    width: PropTypes.float,
    height: PropTypes.float,
  }).isOptional,
  scaleMode: scaleModeProps.isOptional,
  imageTransform: imageTransformProps.isOptional,
  scalingFactor: PropTypes.float.isOptional,
  rotation: PropTypes.float.isOptional,
  imageRef: PropTypes.string.isOptional,
})

export const fillProps = PropTypes.oneOf([solidPaintProps, gradientPaintProps, imagePaintProps])
export const strokeAlignProps = PropTypes.oneOf(['inside', 'outside', 'center'])
export const strokeDashPatternProps = PropTypes.arrayOf(PropTypes.float.min(0))
export const gradientUnionProps = PropTypes.oneOf([gradientPaintProps, solidPaintProps])
export const strokeProps = PropTypes.oneOf([stringProp, colorProps, gradientUnionProps, PropTypes.arrayOf(gradientUnionProps)])
export const fillUnionProps = PropTypes.oneOf([stringProp, colorProps, fillProps, PropTypes.arrayOf(gradientUnionProps)])

export const shapeProps = {
  fill: fillUnionProps.isOptional,
  stroke: strokeProps.isOptional,
  strokeWidth: PropTypes.float.isOptional,
  strokeAlign: strokeAlignProps.isOptional,
  strokeDashPattern: strokeDashPatternProps.isOptional,
}

export const simpleDimensionProps = {
  width: dimensionProps.isOptional,
  height: dimensionProps.isOptional,
}

export const rotationProps = {
  rotation: PropTypes.float.isOptional,
  flipVertical: PropTypes.bool.isOptional,
}

export const cornerRadiusProps = {
  cornerRadius: PropTypes.oneOf([
    PropTypes.float,
    PropTypes.exact({
      topLeft: PropTypes.float.isOptional,
      topRight: PropTypes.float.isOptional,
      bottomLeft: PropTypes.float.isOptional,
      bottomRight: PropTypes.float.isOptional,
    }),
  ]).isOptional,
}

export const fontWeightNumberProps = PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
export const fontWeightStringProps = PropTypes.oneOf([
  'thin',
  'extra-light',
  'light',
  'normal',
  'medium',
  'semi-bold',
  'bold',
  'extra-bold',
  'black',
])
export const fontWeightProps = PropTypes.oneOf([fontWeightNumberProps, fontWeightStringProps])

export const textProps = {
  fontFamily: PropTypes.string.isOptional,
  letterSpacing: PropTypes.oneOf([PropTypes.float, PropTypes.string]).isOptional,
  textDecoration: PropTypes.oneOf(['none', 'strikethrough', 'underline']).isOptional,
  fontSize: PropTypes.float.isOptional,
  italic: PropTypes.bool.isOptional,
  textCase: PropTypes.oneOf([
    'upper',
    'lower',
    'title',
    'original',
    'small-caps',
    'small-caps-forced',
  ]).isOptional,
  fontWeight: fontWeightProps.isOptional,
  fontPostScriptName: PropTypes.string.isOptional,
  href: PropTypes.string.isOptional,
  fill: PropTypes.oneOf([stringProp, colorProps, fillProps, PropTypes.arrayOf(fillProps)]).isOptional,
}

export const frameProps = {
  ...baseStyleProps,
  ...shapeProps,
  width: dimensionProps,
  height: dimensionProps,
  ...rotationProps,
  ...cornerRadiusProps,
  overflow: overflowProps.isOptional,
}

export const groupProps = {
  ...baseStyleProps,
  ...shapeProps,
  ...simpleDimensionProps,
  ...rotationProps,
  ...cornerRadiusProps,
}

export const vectorProps = {
  ...baseStyleProps,
  ...shapeProps,
  ...rotationProps,
  ...simpleDimensionProps,
}

export const lineProps = {
  ...baseStyleProps,
  ...rotationProps,
  ...removeKeys(['strokeAlign'], shapeProps),
  length: dimensionProps.isOptional,
  strokeCap: PropTypes.oneOf([
    'none',
    'round',
    'square',
    'arrow-lines',
    'arrow-equilateral',
  ]).isOptional,
}

export const textNodeProps = {
  ...baseStyleProps,
  ...widthHeightProps,
  ...rotationProps,
  ...textProps,
  ...removeKeys(['fill'], shapeProps),
  paragraphIndent: PropTypes.float.isOptional,
  paragraphSpacing: PropTypes.float.isOptional,
  horizontalAlignText: PropTypes.oneOf([
    'left',
    'right',
    'center',
    'justified',
  ]).isOptional,
  verticalAlignText: PropTypes.oneOf([
    'top',
    'center',
    'bottom',
  ]).isOptional,
  lineHeight: PropTypes.oneOf([
    PropTypes.float,
    PropTypes.string,
    'auto',
  ]).isOptional,
  truncate: PropTypes.oneOf([
    PropTypes.bool,
    PropTypes.integer,
  ]).isOptional,
}

export const autoLayoutFrameProps = {
  ...removeKeys(['width', 'height'], frameProps),
  ...layoutProps,
  ...widthHeightProps,
}

export const anyPropType = PropTypes.oneOf([
  PropTypes.dictionaryOf(PropTypes.any),
  PropTypes.arrayOf(PropTypes.any),
  PropTypes.string,
  null,
  void 0,
])

export const childrenProps = {
  children: PropTypes.oneOf([anyPropType, PropTypes.arrayOf(anyPropType)]).isOptional,
}

export const hoverStyleProps = {
  hoverStyle: PropTypes.exact({
    fill: fillUnionProps.isOptional,
    stroke: strokeProps.isOptional,
    opacity: PropTypes.float.isOptional,
  }).isOptional,
}

export const clickableProps = {
  ...baseStyleProps,
  onClick: PropTypes.any.isOptional,
  tooltip: PropTypes.string.isOptional,
  ...hoverStyleProps,
  positioning: PropTypes.oneOf(['auto', 'absolute']).isOptional,
}

export const minMaxProps = {
  minWidth: optionalFloat,
  minHeight: optionalFloat,
  maxWidth: optionalFloat,
  maxHeight: optionalFloat,
}

/**
 * Generates props for a generic element.
 * @param e - Custom props.
 * @returns PropTypes definition.
 * (Original: function eo)
 */
export function elementProps(_e: any) {
  return {
    ...clickableProps,
    ...minMaxProps,
    ...textNodeProps,
    font: PropTypes.exact({
      family: PropTypes.string,
      style: PropTypes.string,
    }).isOptional,
  }
}

/**
 * Generates props for a text input element.
 * @param e - Custom props.
 * @returns PropTypes definition.
 * (Original: function $$ec4)
 */
export function textInputProps(e: any) {
  const t = removeKeys(['minWidth', 'minHeight', 'maxWidth', 'maxHeight'], elementProps(e))
  const i = removeKeys(['href'], textProps)
  const r = removeKeys(['width', 'height'], autoLayoutFrameProps)
  return PropTypes.exact({
    ...t,
    placeholder: PropTypes.string.isOptional,
    onTextEditEnd: PropTypes.any,
    value: PropTypes.oneOf([PropTypes.string, null]),
    placeholderProps: PropTypes.exact(i).isOptional,
    inputFrameProps: r.isOptional,
    width: dimensionProps.isOptional,
    inputBehavior: PropTypes.oneOf(['wrap', 'truncate', 'multiline']).isOptional,
  })
}

/**
 * Generates props for a generic element with children.
 * @param e - Custom props.
 * @returns PropTypes definition.
 * (Original: function $$eu10)
 */
export function elementWithChildrenProps(_e: any) {
  return PropTypes.exact({
    ...childrenProps,
  })
}

/**
 * Generates props for a clickable element.
 * @param e - Custom props.
 * @returns PropTypes definition.
 * (Original: function $$ep1)
 */
export function clickableElementProps(_e: any) {
  return PropTypes.exact({
    ...clickableProps,
    ...minMaxProps,
    ...frameProps,
    ...childrenProps,
  })
}

/**
 * Generates props for an auto-layout frame.
 * @param e - Custom props.
 * @returns PropTypes definition.
 * (Original: function $$em3)
 */
export function autoLayoutFramePropsFn(_e: any) {
  return PropTypes.exact({
    ...clickableProps,
    ...minMaxProps,
    ...autoLayoutFrameProps,
    ...childrenProps,
  })
}

/**
 * Generates props for an arc element.
 * @param e - Custom props.
 * @returns PropTypes definition.
 * (Original: function $$eh7)
 */
export function arcProps(_e: any) {
  return PropTypes.exact({
    ...clickableProps,
    ...minMaxProps,
    ...vectorProps,
    arcData: PropTypes.exact({
      startingAngle: PropTypes.float,
      endingAngle: PropTypes.float,
      innerRadius: PropTypes.float.range(0, 1),
    }).isOptional,
  })
}

/**
 * Generates props for a vector element.
 * @param e - Custom props.
 * @returns PropTypes definition.
 * (Original: function $$eg9)
 */
export function vectorElementProps(_e: any) {
  return PropTypes.exact({
    ...clickableProps,
    ...minMaxProps,
    ...groupProps,
  })
}

/**
 * Generates props for an image element.
 * @param e - Custom props.
 * @returns PropTypes definition.
 * (Original: function $$ef5)
 */
export function imageElementProps(_e: any) {
  // Make all non-optional props optional
  const optionalFrameProps = (() => {
    const t = { ...frameProps }
    Object.keys(t).forEach((key) => {
      if (t[key]?.type !== 'optional') {
        t[key] = t[key].isOptional
      }
    })
    return t
  })()
  return PropTypes.exact({
    ...clickableProps,
    ...minMaxProps,
    ...optionalFrameProps,
    src: PropTypes.string,
  })
}

/**
 * Generates props for a line element.
 * @param e - Custom props.
 * @returns PropTypes definition.
 * (Original: function $$e_8)
 */
export function lineElementProps(_e: any) {
  return PropTypes.exact({
    ...clickableProps,
    ...lineProps,
  })
}

/**
 * Generates props for a generic element.
 * @param e - Custom props.
 * @returns PropTypes definition.
 * (Original: function $$el0)
 */
export function genericElementProps(e: any) {
  const t = elementProps(e)
  return PropTypes.exact({
    ...t,
    children: PropTypes.any.isOptional,
  })
}

// Property menu item types
export const propertyMenuBaseProps = {
  tooltip: PropTypes.string,
  propertyName: PropTypes.string,
}

export const propertyMenuSelectedOptionProps = {
  selectedOption: PropTypes.string,
}

export const propertyMenuActionProps = PropTypes.exact({
  ...propertyMenuBaseProps,
  itemType: 'action',
  icon: PropTypes.string.isOptional,
})

export const propertyMenuToggleProps = PropTypes.exact({
  ...propertyMenuBaseProps,
  itemType: 'toggle',
  icon: PropTypes.string.isOptional,
  isToggled: PropTypes.bool,
})

export const propertyMenuLinkProps = PropTypes.exact({
  ...propertyMenuBaseProps,
  itemType: 'link',
  icon: PropTypes.oneOf([PropTypes.string, null]).isOptional,
  href: PropTypes.string,
})

export const propertyMenuSeparatorProps = PropTypes.exact({
  itemType: 'separator',
})

export const propertyMenuOptionProps = PropTypes.exact({
  option: PropTypes.string,
  tooltip: PropTypes.string,
})

export const propertyMenuColorSelectorProps = PropTypes.exact({
  ...propertyMenuBaseProps,
  ...propertyMenuSelectedOptionProps,
  itemType: 'color-selector',
  options: PropTypes.arrayOf(propertyMenuOptionProps),
})

export const propertyMenuDropdownOptionProps = PropTypes.exact({
  option: PropTypes.string,
  label: PropTypes.string,
})

export const propertyMenuDropdownProps = PropTypes.exact({
  ...propertyMenuBaseProps,
  ...propertyMenuSelectedOptionProps,
  itemType: 'dropdown',
  options: PropTypes.arrayOf(propertyMenuDropdownOptionProps),
})

export const propertyMenuItemProps = PropTypes.arrayOf(
  PropTypes.oneOf([
    propertyMenuActionProps,
    propertyMenuSeparatorProps,
    propertyMenuColorSelectorProps,
    propertyMenuDropdownProps,
    propertyMenuToggleProps,
    propertyMenuLinkProps,
  ]),
)

/**
 * Validates property menu options.
 * @param e - Property menu item.
 * @param t - Index.
 * (Original: function $$ek6)
 */
export function validatePropertyMenuOptions(e: any, t: number) {
  if (e.itemType === 'color-selector') {
    validateColorSelectorOptions(e, t)
  }
  else if (e.itemType === 'dropdown') {
    validateDropdownOptions(e, t)
  }
}

/**
 * Validates color selector options.
 * @param e - Property menu item.
 * @param t - Index.
 * (Original: function eR)
 */
function validateColorSelectorOptions(e: any, t: number) {
  const options = e.options.map((opt: any) => opt.option)
  const n = `usePropertyMenu.args[0][${t}]`
  validateOptions(options, e.selectedOption, t)
  const isHex = (str: string) => /^#(?:[0-9a-f]{3}){1,2}$/i.test(str)
  if (options.filter(opt => !isHex(opt)).length !== 0) {
    throw new InternalError(`${n}.options do not have valid hexcode strings.`)
  }
}

/**
 * Validates dropdown options.
 * @param e - Property menu item.
 * @param t - Index.
 * (Original: function eR)
 */
function validateDropdownOptions(e: any, t: number) {
  validateOptions(e.options.map((opt: any) => opt.option), e.selectedOption, t)
}

/**
 * Validates options for uniqueness and inclusion.
 * @param options - Array of option strings.
 * @param selected - Selected option.
 * @param index - Index.
 * (Original: function eR)
 */
function validateOptions(options: string[], selected: string, index: number) {
  const n = `usePropertyMenu.args[0][${index}]`
  if (options.length === 0)
    throw new InternalError(`${n}.options is empty.`)
  if (new Set(options).size !== options.length)
    throw new InternalError(`${n}.options has duplicate values.`)
  if (!options.includes(selected))
    console.warn(`${n}.selectedOption is not included in ${n}.options.`)
}

// Exported names (Original: export const BR, Bb, Ed, L1, L3, MQ, OV, QK, gJ, r8, yL)
export const BR = genericElementProps
export const Bb = clickableElementProps
export const Ed = propertyMenuItemProps
export const L1 = autoLayoutFramePropsFn
export const L3 = textInputProps
export const MQ = imageElementProps
export const OV = validatePropertyMenuOptions
export const QK = arcProps
export const gJ = lineElementProps
export const r8 = vectorElementProps
export const yL = elementWithChildrenProps
