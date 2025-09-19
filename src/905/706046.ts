// Original file: /Users/allen/sigma-main/src/905/706046.ts
// Refactored to improve readability, maintainability, and organization.
// Grouped related functions for gradient and color stop utilities.
// Renamed functions to descriptive names and updated export aliases accordingly.
// Added JSDoc-style documentation and comments referencing original names.

/**
 * Sorts an array of items by their position property in ascending order.
 * @param items - Array of objects with a position property.
 * @returns Sorted array.
 * Original: $$n4
 */
export function sortByPosition(items: any[]): any[] {
  return items.sort((a, b) => a.position - b.position)
}

/**
 * Sorts an array of items by their position property, defaulting to 0 if position is undefined.
 * @param items - Array of objects with an optional position property.
 * @returns Sorted array.
 * Original: $$r2
 */
export function sortByPositionWithDefault(items: any[]): any[] {
  return items.sort((a, b) => (a.position || 0) - (b.position || 0))
}

/**
 * Transforms a color stop object into a standardized format with color, colorVar, and position.
 * @param stop - Object with color and position properties.
 * @returns Transformed object.
 * Original: $$a1
 */
export function transformColorStop(stop: any): any {
  return {
    color: stop.color,
    colorVar: {
      value: {
        colorValue: stop.color,
      },
      dataType: 'COLOR',
      resolvedDataType: 'COLOR',
    },
    position: stop.position,
  }
}

/**
 * Interpolates a color at a given position within a gradient defined by color stops.
 * Uses linear interpolation between adjacent stops.
 * @param stops - Array of color stops with position and color (r, g, b, a) properties.
 * @param position - The position to interpolate at.
 * @returns Interpolated color object or null if out of bounds.
 * Original: $$s3
 */
export function interpolateGradientColor(stops: any[], position: number): any {
  const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t

  if (position <= stops[0].position)
    return stops[0]?.color
  if (position >= stops[stops.length - 1].position)
    return stops[stops.length - 1]?.color

  for (let i = 0; i < stops.length - 1; i++) {
    const current = stops[i]
    const next = stops[i + 1]
    if (position > current.position && position <= next.position) {
      const t = (position - current.position) / (next.position - current.position)
      return {
        r: lerp(current.color.r, next.color.r, t),
        g: lerp(current.color.g, next.color.g, t),
        b: lerp(current.color.b, next.color.b, t),
        a: lerp(current.color.a, next.color.a, t),
      }
    }
  }
  return null
}

/**
 * Checks if a gradient has specific types and contains aliased color variables.
 * @param gradient - Gradient object with type and stopsVar properties.
 * @returns True if conditions are met, false otherwise.
 * Original: $$o0
 */
export function hasAliasedColorsInGradient(gradient: any): boolean {
  return (
    (gradient.type === 'GRADIENT_ANGULAR'
      || gradient.type === 'GRADIENT_DIAMOND'
      || gradient.type === 'GRADIENT_LINEAR'
      || gradient.type === 'GRADIENT_RADIAL')
    && !!gradient.stopsVar?.some((stop: any) => stop.colorVar && stop.colorVar.dataType === 'ALIAS')
  )
}

// Updated export aliases to match refactored function names
export const oV = sortByPosition
export const Zb = sortByPositionWithDefault
export const Ug = transformColorStop
export const _R = interpolateGradientColor
export const U2 = hasAliasedColorsInGradient
