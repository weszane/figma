import type { Fn } from '../../types/global'
import classNames from 'classnames'
import { isObjectEmpty } from '../905/36803'

/**
 * Merges multiple objects, handling special keys like 'onX', 'className', and 'style'.
 * - Functions starting with 'on' are composed.
 * - 'className' values are merged using classNames.
 * - 'style' objects are shallow-merged.
 * Returns the first non-empty object merged with subsequent objects.
 * @param {...Record<string, any>} sources - Objects to merge.
 * @returns {Record<string, any>} - Merged object.
 * @see $$a0
 */
export function mergeProps(...sources: Record<string, any>[]): Record<string, any> {
  // Find the first non-empty object
  let base: Record<string, any> | undefined
  const len = sources.length
  let startIdx = 0
  // Find the first non-empty object (original: for (; startIdx < len && (!(base = sources[startIdx]) || isObjectEmpty(base)); ++startIdx);)
  for (; startIdx < len; ++startIdx) {
    base = sources[startIdx]
    if (base && !isObjectEmpty(base)) {
      break
    }
  }

  // Check if all remaining objects are empty
  let allEmpty = true
  for (let i = startIdx + 1; i < len; ++i) {
    const obj = sources[i]
    if (obj && !isObjectEmpty(obj)) {
      allEmpty = false
      break
    }
  }
  if (allEmpty)
    return base || {}

  // Merge objects
  const result: Record<string, any> = { ...base }
  for (let i = startIdx + 1; i < len; ++i) {
    const obj = sources[i]
    if (!obj)
      continue
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (result[key]) {
          // Compose event handlers
          if (/^on[A-Z]/.test(key)) {
            result[key] = composeHandlers(result[key], obj[key])
          }
          // Merge className
          else if (key === 'className') {
            result[key] = classNames(result[key], obj[key])
          }
          // Merge style objects
          else if (key === 'style') {
            result[key] = { ...result[key], ...obj[key] }
          }
          // Overwrite other keys
          else {
            result[key] = obj[key]
          }
        }
        else {
          result[key] = obj[key]
        }
      }
    }
  }
  return result
}

/**
 * Composes two event handler functions into one.
 * @param {Function} handlerA - First handler.
 * @param {Function} handlerB - Second handler.
 * @returns {Function|undefined} - Composed handler or one of the originals.
 * @see $$a0 (inline event handler composition)
 */
function composeHandlers(handlerA?: Fn, handlerB?: Fn): Fn | undefined {
  if (handlerA || handlerB) {
    if (handlerA && handlerB) {
      return (...args: any[]) => {
        handlerA(...args)
        handlerB(...args)
      }
    }
    return handlerA || handlerB
  }
  return undefined
}

// Export with original variable name for compatibility
export const v = mergeProps
