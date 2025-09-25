

/**
 * Converts a Figma color object to an HTML rgba color string.
 * @param color - The Figma color object with r, g, b, a properties.
 * @returns The HTML rgba color string.
 */
export function htmlColorFromFigColor(color) {
  const {
    r: red,
    g: green,
    b: blue,
    a: alpha,
  } = color
  return `rgba(${255 * red}, ${255 * green}, ${255 * blue}, ${alpha})`
}

/**
 * Merges multiple props objects into one, with special handling for attributes, style, and className.
 * @param props - The array of props objects to merge.
 * @returns The merged props object.
 */
export function mergeProps(...props) {
  const result = {}

  for (const prop of props) {
    // Merge existing keys in result with new values from prop
    for (const key in result) {
      const resultValue = result[key]
      const propValue = prop[key]

      if ((key === 'attributes' || key === 'style') && typeof propValue === 'object') {
        result[key] = mergeProps(resultValue, propValue)
      }
      else if (key === 'className' && typeof resultValue === 'string' && typeof propValue === 'string') {
        result[key] = [resultValue, propValue].join(' ')
      }
      else if (propValue !== undefined) {
        result[key] = propValue
      }
    }

    // Add any new keys from prop that don't exist in result
    for (const key in prop) {
      if (result[key] === undefined) {
        result[key] = prop[key]
      }
    }
  }

  return result
}

/**
 * Generates a CSS transform string from a node transform matrix.
 * @param transform - The 2x3 transformation matrix.
 * @returns The CSS matrix transform string or undefined if no transform.
 */
export function cssTransformFromNodeTransform(transform) {
  if (transform === undefined)
    return

  const [[m00, m01, m02], [m10, m11, m12]] = transform

  // Only return a transform if it's not an identity matrix
  if (m00 !== 1 || m10 !== 0 || m01 !== 0 || m11 !== 1 || m02 !== 0 || m12 !== 0) {
    return `matrix(${m00},${m10},${m01},${m11},${m02},${m12})`
  }
}
