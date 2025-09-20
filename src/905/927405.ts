/**
 * Animation trigger types.
 * Original enum: $$n3
 */
export enum AnimationTriggerType {
  Appear = 'appear',
  Hover = 'hover',
  Press = 'press',
  Focus = 'focus',
  ScrollParallax = 'scrollParallax',
  ScrollTransform = 'scrollTransform',
  Cursor = 'cursor',
  Marquee = 'marquee',
  Code = 'code',
}

/**
 * Easing types for animations.
 * Original enum: EasingTypeStr
 */
export enum EasingType {
  InCubic = 'IN_CUBIC',
  OutCubic = 'OUT_CUBIC',
  InOutCubic = 'INOUT_CUBIC',
  Linear = 'LINEAR',
  InBackCubic = 'IN_BACK_CUBIC',
  OutBackCubic = 'OUT_BACK_CUBIC',
  InOutBackCubic = 'INOUT_BACK_CUBIC',
  CustomCubic = 'CUSTOM_CUBIC',
  GentleSpring = 'GENTLE_SPRING',
  SpringPresetOne = 'SPRING_PRESET_ONE',
  SpringPresetTwo = 'SPRING_PRESET_TWO',
  SpringPresetThree = 'SPRING_PRESET_THREE',
  CustomSpring = 'CUSTOM_SPRING',
  Spring = 'SPRING',
}

/**
 * Blend modes for compositing.
 * Original enum: BlendModeStr
 */
export enum BlendMode {
  PassThrough = 'PASS_THROUGH',
  Normal = 'NORMAL',
  Darken = 'DARKEN',
  Multiply = 'MULTIPLY',
  LinearBurn = 'LINEAR_BURN',
  ColorBurn = 'COLOR_BURN',
  Lighten = 'LIGHTEN',
  Screen = 'SCREEN',
  LinearDodge = 'LINEAR_DODGE',
  ColorDodge = 'COLOR_DODGE',
  Overlay = 'OVERLAY',
  SoftLight = 'SOFT_LIGHT',
  HardLight = 'HARD_LIGHT',
  Difference = 'DIFFERENCE',
  Exclusion = 'EXCLUSION',
  Hue = 'HUE',
  Saturation = 'SATURATION',
  Color = 'COLOR',
  Luminosity = 'LUMINOSITY',
}

/**
 * Horizontal alignment options.
 * Original enum: $$s1
 */
export enum HorizontalAlign {
  Left = 'LEFT',
  Right = 'RIGHT',
  Center = 'CENTER',
  LeftRight = 'LEFT_RIGHT',
  Scale = 'SCALE',
}

/**
 * Vertical alignment options.
 * Original enum: $$o0
 */
export enum VerticalAlign {
  Top = 'TOP',
  Bottom = 'BOTTOM',
  Center = 'CENTER',
  TopBottom = 'TOP_BOTTOM',
  Scale = 'SCALE',
}

/**
 * Text script types.
 * Original enum: $$l4
 */
export enum TextScriptType {
  Super = 'SUPER',
  Sub = 'SUB',
  Normal = 'NORMAL',
}

/**
 * Text decoration options.
 * Original enum: TextDecorationStr
 */
export enum TextDecoration {
  None = 'NONE',
  Strikethrough = 'STRIKETHROUGH',
  Underline = 'UNDERLINE',
}

/**
 * List style types.
 * Original enum: $$c7
 */
export enum ListStyleType {
  Ordered = 'ORDERED',
  Unordered = 'UNORDERED',
  None = 'NONE',
}

// Refactored export names for clarity and maintainability
export const Gx = VerticalAlign // Original: Gx
export const M9 = HorizontalAlign // Original: M9
export const Nx = BlendMode // Original: Nx
export const Xc = AnimationTriggerType // Original: Xc
export const eT = TextScriptType // Original: eT
export const i8 = TextDecoration // Original: i8
export const mg = EasingType // Original: mg
export const wj = ListStyleType // Original: wj
