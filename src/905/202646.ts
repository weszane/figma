import { exists } from '../905/372580'
import { blurEffectDefaults, imagePaintDefaults, paintDefaults, shadowEffectDefaults } from '../905/712000'
import { hexToRgb, solid, WINDING_RULE_DEFAULT_VALUE } from '../905/719694'

/**
 * Normalizes a paint object by merging it with appropriate defaults
 * (Original function: normalizePaint)
 */
export function normalizePaint(paint: any): any {
  const defaults = paint.type === 'image' ? imagePaintDefaults() : paintDefaults()
  return { ...defaults, ...paint }
}

/**
 * Normalizes fill values into a standardized array format
 * (Original function: normalizeFill)
 */
export function normalizeFill(fill: any = []): any[] {
  if (typeof fill === 'string') {
    if (fill.startsWith('--')) {
      return [{
        type: 'css-var',
        value: fill,
        visible: true,
      }]
    }
    return [normalizePaint(solid(fill))]
  }

  if (Array.isArray(fill)) {
    return fill.map(normalizePaint)
  }

  if ('type' in fill) {
    return [normalizePaint(fill)]
  }

  return [{
    type: 'solid',
    ...paintDefaults(),
    color: fill,
  }]
}

/**
 * Normalizes a path object, ensuring it has a winding rule
 * (Original function: normalizePath)
 */
export function normalizePath(path: any): any {
  if (typeof path === 'string') {
    return {
      path,
      windingRule: WINDING_RULE_DEFAULT_VALUE,
    }
  }
  return path
}

/**
 * Normalizes SVG paths into an array of normalized paths
 * (Original function: normalizeSvgPath)
 */
export function normalizeSvgPath(paths: any = []): any[] {
  return Array.isArray(paths) ? paths.map(normalizePath) : [normalizePath(paths)]
}

/**
 * Normalizes horizontal constraint values
 * (Original function: normalizeHorizontalConstraint)
 */
export function normalizeHorizontalConstraint(constraint: any): any {
  if (exists(constraint)) {
    if (typeof constraint === 'number') {
      return {
        type: 'left',
        offset: constraint,
      }
    }
    return constraint
  }

  return {
    type: 'left',
    offset: 0,
  }
}

/**
 * Normalizes vertical constraint values
 * (Original function: normalizeVerticalConstraint)
 */
export function normalizeVerticalConstraint(constraint: any): any {
  if (exists(constraint)) {
    if (typeof constraint === 'number') {
      return {
        type: 'top',
        offset: constraint,
      }
    }
    return constraint
  }

  return {
    type: 'top',
    offset: 0,
  }
}

/**
 * Normalizes padding values into a consistent object structure
 * (Original function: normalizePadding)
 */
export function normalizePadding(padding: any): any {
  if (!exists(padding) || (typeof padding === 'object' && Object.keys(padding).length === 0)) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }
  }

  if (typeof padding === 'number') {
    return {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding,
    }
  }

  if ('vertical' in padding || 'horizontal' in padding) {
    return {
      top: padding.vertical ?? 0,
      bottom: padding.vertical ?? 0,
      right: padding.horizontal ?? 0,
      left: padding.horizontal ?? 0,
    }
  }

  return {
    top: padding.top ?? 0,
    right: padding.right ?? 0,
    bottom: padding.bottom ?? 0,
    left: padding.left ?? 0,
  }
}

/**
 * Normalizes effect objects by applying appropriate defaults and processing colors
 * (Original function: normalizeEffect)
 */
export function normalizeEffect(effects: any = []): any[] {
  const effectArray = Array.isArray(effects) ? effects : [effects]

  return effectArray.map((effect) => {
    if (effect.type === 'drop-shadow' || effect.type === 'inner-shadow') {
      const color = typeof effect.color === 'string' ? hexToRgb(effect.color) : effect.color
      return { ...shadowEffectDefaults(), ...effect, color }
    }

    return { ...blurEffectDefaults(), ...effect }
  })
}

/**
 * Normalizes various properties of an object according to their specific rules
 * (Original function: normalizeProps)
 */
export function normalizeProps(props: any): any {
  const normalized: any = {}

  for (const key in props) {
    switch (key) {
      case 'fill':
        normalized.fill = normalizeFill(props.fill)
        break
      case 'fillPath':
        normalized.fillPath = normalizeSvgPath(props.fillPath)
        break
      case 'strokePath':
        normalized.strokePath = normalizeSvgPath(props.strokePath)
        break
      case 'stroke':
        normalized.stroke = normalizeFill(props.stroke)
        break
      case 'effect':
        normalized.effect = normalizeEffect(props.effect)
        break
      case 'padding':
        normalized.padding = normalizePadding(props.padding)
        break
      case 'x':
        normalized.x = normalizeHorizontalConstraint(props.x)
        break
      case 'y':
        normalized.y = normalizeVerticalConstraint(props.y)
        break
      default:
        normalized[key] = props[key]
    }
  }

  return normalized
}
