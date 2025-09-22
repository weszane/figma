// Refactored code for /Users/allen/github/fig/src/905/393409.ts
// Grouped into logical sections: Color Utilities, Gradient Utilities, Paint Handling, Effects, Text Styles, and Helpers.
// Converted to ES6 exports and named functions for better readability.
// Added TypeScript types where applicable.
// Added JSDoc comments with original names for traceability.
// Simplified conditionals with early returns and guard clauses.
// Split large functions into smaller units.
// Maintained original functionality.

import { exists } from '../905/372580';

// Type definitions
interface Color {
  r: number;
  g: number;
  b: number;
  a?: number;
}

interface GradientStop {
  color: Color;
  position: number;
}

interface GradientHandlePosition {
  x: number;
  y: number;
}

interface Gradient {
  gradientStops: GradientStop[];
  gradientHandlePositions: GradientHandlePosition[];
  opacity?: number;
}

interface Paint {
  type: string;
  color?: Color;
  opacity?: number;
  gradientStops?: GradientStop[];
  gradientHandlePositions?: GradientHandlePosition[];
  src?: string;
  scaleMode?: string;
  imageSize?: { width: number; height: number };
  scalingFactor?: number;
  imageTransform?: number[][];
  rotation?: number;
  blendMode?: string;
  visible?: boolean;
  value?: string;
}

interface Effect {
  type: string;
  visible: boolean;
  blur?: number;
  offset?: { x: number; y: number };
  spread?: number;
  color?: Color | string;
}

interface TextStyle {
  fontFamily?: string;
  fontSize?: number;
  fontPostScriptName?: string;
  fontWeight?: number | string;
  italic?: boolean;
  textDecoration?: string;
  href?: string;
  textCase?: string;
  letterSpacing?: number;
  lineHeightUnit?: string;
  lineHeightPx?: number;
  lineHeightPercentFontSize?: number;
  lineHeight?: number | string;
  paragraphIndent?: number;
}

// Color Utilities
/**
 * Converts a decimal to a two-digit uppercase hex string.
 * Original: r
 */
function decimalToHexComponent(value: number): string {
  return (`00${Math.round(255 * value).toString(16).toUpperCase()}`).substr(-2);
}

/**
 * Converts a decimal to a rounded 255-based value.
 * Original: a
 */
function decimalToRgbComponent(value: number): number {
  return Math.round(255 * value);
}

/**
 * Converts a decimal to a fixed-point string with 2 decimals.
 * Original: s
 */
function decimalToFixedString(value: number): string {
  return value.toFixed(2);
}

/**
 * Converts a color to RGBA string.
 * Original: exports.colorToRgba
 */
export function colorToRgba(color: Color, opacityMultiplier: number = 1): string {
  const { r, g, b, a = 1 } = color;
  return `rgba(${decimalToRgbComponent(r)}, ${decimalToRgbComponent(g)}, ${decimalToRgbComponent(b)}, ${decimalToFixedString(a * opacityMultiplier)})`;
}

/**
 * Converts a color to string, preferring hex if opaque.
 * Original: exports.colorToString
 */
export function colorToString(color: Color, opacityMultiplier: number = 1): string {
  if (color.a !== 1 || opacityMultiplier !== 1) {
    return colorToRgba(color, opacityMultiplier);
  }
  return colorToHex(color);
}

/**
 * Converts a color to short hex if possible.
 * Original: o
 */
function colorToHexRgb(color: Color): string {
  const hex = `${decimalToHexComponent(color.r)}${decimalToHexComponent(color.g)}${decimalToHexComponent(color.b)}`;
  if (hex[0] === hex[1] && hex[2] === hex[3] && hex[4] === hex[5]) {
    return `#${hex[0]}${hex[2]}${hex[4]}`;
  }
  return `#${hex}`;
}

/**
 * Converts a color to hex with alpha if needed.
 * Original: l
 */
function colorToHexRgba(color: Color, opacityMultiplier: number = 1): string {
  const hex = `${decimalToHexComponent(color.r)}${decimalToHexComponent(color.g)}${decimalToHexComponent(color.b)}${decimalToHexComponent((color.a || 1) * opacityMultiplier)}`;
  if (hex[0] === hex[1] && hex[2] === hex[3] && hex[4] === hex[5] && hex[6] === hex[7]) {
    return `#${hex[0]}${hex[2]}${hex[4]}${hex[6]}`;
  }
  return `#${hex}`;
}

/**
 * Converts a color to hex string.
 * Original: exports.colorToHex
 */
export function colorToHex(color: Color, opacityMultiplier: number = 1): string {
  if (color.a === 1 && opacityMultiplier === 1) {
    return colorToHexRgb(color);
  }
  return colorToHexRgba(color, opacityMultiplier);
}

/**
 * Converts a CSS variable to string with fallback.
 * Original: d
 */
export function cssVarToString(paint: Paint): string {
  const value = paint.value!.replace('--', '');
  return `var(--${value}, var(--fallback-${value}))`;
}

/**
 * Logs a warning for color issues.
 * Original: c
 */
function warnColor(message: string, name?: string): void {
  if (name) {
    console.warn(`Warning in color '${name}': ${message}`);
  }
}

/**
 * Converts a decimal to percent string.
 * Original: exports.decimalToPercent
 */
export function decimalToPercent(value: number, decimals: number = 0): string {
  const percent = 100 * value;
  if (decimals > 0 && percent !== Math.round(percent)) {
    return `${percent.toFixed(decimals)}%`;
  }
  return `${Math.round(percent)}%`;
}

// Gradient Utilities
/**
 * Creates a default linear gradient from solid color.
 * Original: u
 */
function createDefaultLinearGradient(paint): Gradient {
  return {
    ...paint,
    type: 'gradient-linear',
    gradientHandlePositions: [
      { x: 0, y: 1 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ],
    gradientStops: [
      { color: paint.color!, position: 0 },
      { color: paint.color!, position: 1 },
    ],
  };
}

/**
 * Converts linear gradient to CSS.
 * Original: exports.cssFillLinearGradient
 */
export function cssFillLinearGradient(gradient: Gradient, name?: string): string | undefined {
  if (gradient.gradientHandlePositions.length < 2) {
    warnColor('Linear gradients must have 2 handles', name);
    return;
  }
  const { gradientStops, gradientHandlePositions: [{ x: x1, y: y1 }, { x: x2, y: y2 }], opacity } = gradient;
  const angleRad = Math.atan2(x2 - x1, y1 - y2);
  const angleDeg = 180 / Math.PI * angleRad + (angleRad < 0 ? 360 : 0);
  const stops = gradientStops.map(({ color, position }) =>
    `${colorToString(color, opacity)} ${decimalToPercent(position, 2)}`
  ).join(', ');
  return `linear-gradient(${Math.round(angleDeg)}deg, ${stops})`;
}

/**
 * Converts radial gradient to CSS.
 * Original: exports.cssFillRadialGradient
 */
export function cssFillRadialGradient(gradient: Gradient, name?: string): string | undefined {
  if (gradient.gradientHandlePositions.length < 3) {
    warnColor('Radial gradients must have 3 handles', name);
    return;
  }
  const { gradientStops, gradientHandlePositions: [{ x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }], opacity } = gradient;
  const stops = gradientStops.map(({ color, position }) =>
    `${colorToString(color, opacity)} ${decimalToPercent(position, 2)}`
  ).join(', ');
  const radiusX = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
  const radiusY = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return `radial-gradient(${decimalToPercent(radiusX, 2)} ${decimalToPercent(radiusY, 2)} at ${decimalToPercent(x1, 2)} ${decimalToPercent(y1, 2)}, ${stops})`;
}

/**
 * Converts angular gradient to CSS approximation.
 * Original: exports.cssFillAngularGradient
 */
export function cssFillAngularGradient(gradient: Gradient, name?: string): string | undefined {
  if (gradient.gradientHandlePositions.length < 2) {
    warnColor('Angular gradients must have 2 handles', name);
    return;
  }
  warnColor('Angular gradients can only be approximated in CSS (scaling might be lost)', name);
  const { gradientStops, gradientHandlePositions: [{ x, y }, { x: x2, y: y2 }] } = gradient;
  const angle = 180 * Math.atan2(y2 - y, x2 - x) / Math.PI + 90;
  const stops = gradientStops.map(({ color, position }) =>
    `${colorToString(color)} ${360 * position}deg`
  ).join(', ');
  return `conic-gradient(from ${Math.round(angle)}deg at ${decimalToPercent(x, 2)} ${decimalToPercent(y, 2)}, ${stops})`;
}

/**
 * Approximates diamond gradient in CSS.
 * Original: p
 */
function cssFillDiamondGradient(gradient: Gradient, name?: string): string {
  warnColor('Diamond gradients can only be approximated in CSS', name);
  const { gradientStops, opacity } = gradient;
  const stops = gradientStops.map(({ color, position }) =>
    `${colorToString(color, opacity)} ${decimalToPercent(position / 2, 2)}`
  ).join(', ');
  return ['bottom right', 'bottom left', 'top left', 'top right']
    .map(dir => `linear-gradient(to ${dir}, ${stops}) ${dir} / 50% 50% no-repeat`)
    .join(', ');
}

/**
 * Handles image paint to CSS background.
 * Original: m
 */
function cssBackgroundFromImagePaint(paint: Paint, size?: { width: number; height: number }, name?: string): string {
  if (paint.opacity !== 1) {
    warnColor('Image paint opacity not supported', name);
  }
  const background = `url("${paint.src}")`;
  let backgroundPosition = '50% 50%';
  let backgroundRepeat = 'no-repeat';
  let backgroundSize = 'auto';

  switch (paint.scaleMode) {
    case 'fill':
      backgroundSize = 'cover';
      break;
    case 'fit':
      backgroundSize = 'contain';
      break;
    case 'tile': {
      const scalingFactor = paint.scalingFactor ?? 1;
      const width = paint.imageSize ? `${paint.imageSize.width * scalingFactor}px` : `${Math.round(100 * scalingFactor)}%`;
      const height = paint.imageSize ? `${paint.imageSize.height * scalingFactor}px` : `${Math.round(100 * scalingFactor)}%`;
      backgroundSize = `${width} ${height}`;
      backgroundPosition = '0% 0%';
      backgroundRepeat = 'repeat';
      break;
    }
    case 'crop': {
      const transform = paint.imageTransform ?? [[1, 0, 0], [0, 1, 0]];
      const scaleX = 100 / transform[0][0];
      const scaleY = 100 / transform[1][1];
      backgroundSize = `${scaleX.toFixed(2)}% ${scaleY.toFixed(2)}%`;
      const posX = size ? -(size.width / transform[0][0]) * transform[0][2] : 0;
      const posY = size ? -(size.height / transform[1][1]) * transform[1][2] : 0;
      backgroundPosition = `${posX.toFixed(2)}px ${posY.toFixed(2)}px`;
      backgroundRepeat = 'no-repeat';
      break;
    }
  }

  if (paint.rotation) {
    warnColor('Image paint rotation not supported', name);
  }

  return `${background} ${backgroundPosition} / ${backgroundSize} ${backgroundRepeat}`;
}

// Paint Handling
/**
 * Converts paint to CSS background.
 * Original: h
 */
export function cssBackgroundFromPaint(paint, isTop: boolean, size?: { width: number; height: number }, name?: string): string | undefined {
  switch (paint.type) {
    case 'css-var':
      return cssVarToString(paint);
    case 'solid':
      if (isTop) {
        return colorToString(paint.color!, paint.opacity);
      }
      return cssFillLinearGradient(createDefaultLinearGradient(paint), name);
    case 'gradient-linear':
      return cssFillLinearGradient(paint, name);
    case 'gradient-radial':
      return cssFillRadialGradient(paint, name);
    case 'gradient-angular':
      return cssFillAngularGradient(paint, name);
    case 'gradient-diamond':
      return cssFillDiamondGradient(paint, name);
    case 'image':
      return cssBackgroundFromImagePaint(paint, size, name);
    default:
      warnColor(`Paint type ${paint.type} not supported`, name);
  }
}

/**
 * Gets fill styles from paints.
 * Original: exports.getFill
 */
export function getFill(paints: Paint[], size?: { width: number; height: number }, name?: string): Record<string, string> {
  const visiblePaints = paints.filter(({ visible = true }) => visible).reverse();
  const { blendMode, background } = visiblePaints.reduce(
    (acc, paint, index) => {
      const cssValue = cssBackgroundFromPaint(paint, index === visiblePaints.length - 1, size, name);
      const blend = paint.type === 'css-var' ? 'normal' : (getCssBlendMode(paint, name) ?? 'normal');
      if (cssValue) {
        return {
          background: concatOptional(acc.background, cssValue),
          blendMode: [...acc.blendMode, blend],
        };
      }
      return acc;
    },
    { background: undefined as string | undefined, blendMode: [] as string[] }
  );

  const styles: Record<string, string> = {};
  if (blendMode.some(mode => mode !== 'normal')) {
    styles.backgroundBlendMode = blendMode.join(', ');
  }
  if (exists(background)) {
    styles.background = background;
  }
  return styles;
}

// Effects
const supportedBlendModes = new Set([
  'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
  'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
  'exclusion', 'hue', 'saturation', 'color', 'luminosity'
]);

/**
 * Gets CSS blend mode if supported.
 * Original: f
 */
function getCssBlendMode(paint: Paint, name?: string): string | undefined {
  if (supportedBlendModes.has(paint.blendMode!)) {
    return paint.blendMode;
  }
  warnColor(`Blend mode ${paint.blendMode} not supported`, name);
}

/**
 * Creates blur filter from radius.
 * Original: _
 */
function cssFilterFromBlurEffectRadius(radius: number): string {
  return `blur(${Math.sqrt(radius)}px)`;
}

/**
 * Converts color or string to CSS value.
 * Original: A
 */
function colorOrStringToCss(value: Color | string): string {
  if (typeof value === 'string') {
    if (value.startsWith('--')) {
      return cssVarToString({ type: 'css-var', value, visible: true });
    }
    return value;
  }
  return colorToString(value);
}

/**
 * Creates box shadow string.
 * Original: y
 */
function cssBoxShadow(effect: Effect): string {
  const { offset, blur, spread, color } = effect;
  const shadow = `${offset!.x}px ${offset!.y}px ${blur}px ${spread ?? 0}px ${colorOrStringToCss(color!)}`;
  return effect.type === 'inner-shadow' ? `inset ${shadow}` : shadow;
}

/**
 * Creates drop shadow filter string.
 * Original: b
 */
function cssDropShadow(effect: Effect): string {
  const { offset, blur, color } = effect;
  return `${offset!.x}px ${offset!.y}px ${blur}px ${colorOrStringToCss(color!)}`;
}

/**
 * Gets effects styles.
 * Original: exports.getEffectsStyle
 */
export function getEffectsStyle(effects: Effect[], useBoxShadow: boolean = true): Record<string, string> {
  const styles: Record<string, string> = {};
  effects.filter(effect => effect.visible).forEach(effect => {
    switch (effect.type) {
      case 'layer-blur':
        styles.filter = concatFilter(styles.filter, cssFilterFromBlurEffectRadius(effect.blur!));
        break;
      case 'background-blur':
        styles.backdropFilter = concatFilter(styles.backdropFilter, cssFilterFromBlurEffectRadius(effect.blur!));
        break;
      case 'drop-shadow':
        if (useBoxShadow) {
          styles.boxShadow = concatOptional(styles.boxShadow, cssBoxShadow(effect));
        } else {
          styles.filter = concatFilter(styles.filter, `drop-shadow(${cssDropShadow(effect)})`);
        }
        break;
      case 'inner-shadow':
        styles.boxShadow = concatOptional(styles.boxShadow, cssBoxShadow(effect));
        break;
    }
  });
  return styles;
}

// Text Styles
const fontWeightMap: [string, number][] = [
  ['thin', 100], ['extralight', 200], ['light', 300], ['normal', 400],
  ['medium', 500], ['semibold', 600], ['bold', 700], ['extrabold', 800], ['black', 900]
];

/**
 * Parses line height to structured object.
 * Original: I
 */
function formatLineHeight({ lineHeightUnit, lineHeightPx, lineHeightPercentFontSize }: TextStyle): string {
  switch (lineHeightUnit) {
    case 'pixels':
      return `${lineHeightPx}px`;
    case 'font-size-%':
      return `${lineHeightPercentFontSize}%`;
    default:
      return '';
  }
}

/**
 * Converts font weight to number.
 * Original: E
 */
export function cssFromFontWeight(weight: number | string): number {
  if (typeof weight === 'number') {
    return weight;
  }
  switch (weight) {
    case 'thin': return 100;
    case 'extra-light': return 200;
    case 'light': return 300;
    case 'normal': return 400;
    case 'medium': return 500;
    case 'semi-bold': return 600;
    case 'bold': return 700;
    case 'extra-bold': return 800;
    case 'black': return 900;
    default: return 400;
  }
}

/**
 * Parses line height from string or number.
 * Original: x
 */
export function parseLineHeight(lineHeight: number | string): TextStyle {
  if (typeof lineHeight === 'string') {
    if (lineHeight === 'auto') {
      return {
        lineHeightPercentFontSize: 100,
        lineHeightPx: 0,
        lineHeightUnit: 'intrinsic-%',
      };
    }
    const match = Array.from(lineHeight.matchAll(/(\d+\.\d+|\d{2,})([px%]+)/g))[0];
    if (!match) {
      throw new Error(`Invalid lineHeight string: ${lineHeight}`);
    }
    const [, value, unit] = match;
    if (unit === '%') {
      return {
        lineHeightPx: 0,
        lineHeightPercentFontSize: parseFloat(value),
        lineHeightUnit: 'font-size-%',
      };
    }
    if (unit === 'px') {
      return {
        lineHeightPx: parseInt(value),
        lineHeightPercentFontSize: 0,
        lineHeightUnit: 'pixels',
      };
    }
    throw new Error(`Invalid lineHeight string: ${lineHeight}`);
  }
  return {
    lineHeightPercentFontSize: 0,
    lineHeightPx: lineHeight,
    lineHeightUnit: 'pixels',
  };
}

/**
 * Converts text decoration to CSS.
 * Original: anonymous function in getTextStyle
 */
function textDecorationToCss(decoration: string): string {
  switch (decoration) {
    case 'strikethrough': return 'line-through';
    case 'underline': return 'underline';
    default: return '';
  }
}

/**
 * Converts text case to CSS transform.
 * Original: anonymous function in getTextStyle
 */
function textCaseToTransform(textCase: string): string {
  switch (textCase) {
    case 'upper': return 'uppercase';
    case 'lower': return 'lowercase';
    case 'title': return 'capitalize';
    default: return '';
  }
}

/**
 * Converts text case to font variant.
 * Original: anonymous function in getTextStyle
 */
function textCaseToVariant(textCase: string): string {
  switch (textCase) {
    case 'small-caps':
    case 'small-caps-forced':
      return 'small-caps';
    default: return '';
  }
}

/**
 * Gets text styles.
 * Original: exports.getTextStyle
 */
export function getTextStyle(style?: TextStyle): Record<string, string> {
  if (!style) return {};

  const css: Record<string, string> = {};
  if (style.fontFamily) css.fontFamily = style.fontFamily;
  if (style.fontSize) css.fontSize = `${style.fontSize}px`;

  const { fontPostScriptName } = style;
  const weightEntry = fontWeightMap.find(([key]) => fontPostScriptName?.toLowerCase().includes(key));
  if (weightEntry) {
    css.fontWeight = weightEntry[1].toString();
  } else if (style.fontWeight) {
    css.fontWeight = cssFromFontWeight(style.fontWeight).toString();
  }

  if (style.italic) css.fontStyle = 'italic';

  if (style.textDecoration) {
    css.textDecoration = textDecorationToCss(style.textDecoration);
  } else if (style.href) {
    css.textDecoration = 'underline';
  }

  if (style.textCase) {
    const transform = textCaseToTransform(style.textCase);
    if (transform) css.textTransform = transform;
    const variant = textCaseToVariant(style.textCase);
    if (variant) css.fontVariant = variant;
  }

  if (style.letterSpacing) css.letterSpacing = `${style.letterSpacing}px`;

  if (style.lineHeightUnit) {
    css.lineHeight = formatLineHeight(style);
  } else if (style.lineHeight) {
    const parsed = parseLineHeight(style.lineHeight);
    css.lineHeight = formatLineHeight(parsed);
  }

  if (style.paragraphIndent) css.textIndent = `${style.paragraphIndent}px`;

  return css;
}

// Helpers
/**
 * Concatenates optional values with comma.
 * Original: exports.concatOptional
 */
export function concatOptional(existing: string | undefined, addition: string): string {
  return existing ? `${existing}, ${addition}` : addition;
}

/**
 * Concatenates filter values with space.
 * Original: exports.concatFilter
 */
export function concatFilter(existing: string | undefined, addition: string): string {
  return existing ? `${existing} ${addition}` : addition;
}

/**
 * Supported blend modes set.
 * Original: exports.supportedBlendModesSet
 */
export const supportedBlendModesSet = supportedBlendModes;

/**
 * CSS blend mode getter.
 * Original: exports.cssBlendMode
 */
export const cssBlendMode = getCssBlendMode;


