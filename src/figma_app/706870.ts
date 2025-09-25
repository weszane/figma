import createEmotion from '@emotion/css/create-instance'
import { createContext } from 'react'
import { exists } from '../905/372580'

/**
 * Checks if a given element is an autolayout container.
 * @param element - The element to check.
 * @returns True if the element exists and is of type 'autolayout'.
 */
function isAutoLayoutElement(element: any): boolean {
  return exists(element) && element.type === 'autolayout'
}

// Context for managing parent references in the component tree.
export const ParentContext = createContext<null>(null)

// Export the autolayout check function
export const isAutoLayout = isAutoLayoutElement

/**
 * Merges multiple refs into a single ref callback.
 * @param refs - Array of refs to be merged.
 * @returns A function that assigns the element to all provided refs.
 */
export function mergeRefs(refs: any[]) {
  return (element: any) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(element)
      }
      else if (ref != null) {
        ref.current = element
      }
    }
  }
}

/**
 * Warns about invalid constraint usage within autolayout containers.
 * @param options - Object containing parent and constraint properties.
 */
export function warnInvalidConstraints(options: {
  parent: any
  x?: number
  y?: number
}) {
  const { parent, x, y } = options

  if (x && x !== 0 && isAutoLayoutElement(parent)) {
    console.warn(`'x=${JSON.stringify(x)}' is being used inside an AutoLayout. Constraints are only valid when inside a Frame`)
  }

  if (y && y !== 0 && isAutoLayoutElement(parent)) {
    console.warn(`'y=${JSON.stringify(y)}' is being used inside an AutoLayout. Constraints are only valid when inside a Frame`)
  }
}

/**
 * Creates a ref checker that warns about invalid fill-parent usage.
 * @param layerProps - Properties of the layer being checked.
 * @returns A ref function that performs the validation.
 */
export function getInvalidFillParentCheckerRef(layerProps: {
  name: string
  parent: any
  width?: string
  height?: string
  length?: string
  direction?: string
}) {
  return (element: HTMLElement | null) => {
    const {
      name,
      parent,
      width,
      height,
      length,
      direction,
    } = layerProps

    // Early return if no fill-parent properties or element doesn't exist
    if ((width !== 'fill-parent' && height !== 'fill-parent' && length !== 'fill-parent') || !exists(element)) {
      return
    }

    const parentElement = element.parentElement
    const hasLayerDataset = exists(parentElement?.dataset.layer)

    // Check if wrapped in non-figma-react element
    if (exists(parent) && !hasLayerDataset) {
      console.warn(`Layer "${name}" has 'fill-parent' set, but is wrapped in a non figma-react element. To fix this you can replace the wrapper element with a react Fragment (<></>) or a figma-react <AutoLayout> instead. Or you can add a <FigmaReact> tag between the wrapper and "${name}".`)
    }
    // Check if parent is a frame
    else if (exists(parent) && parent.type === 'frame') {
      let propertyName: string | undefined
      let suggestedAlternative: string | undefined

      if (width === 'fill-parent') {
        propertyName = 'width'
        suggestedAlternative = 'x={{ type: \'left-right\', leftOffset: 0 rightOffset: 0 }}'
      }

      if (height === 'fill-parent') {
        propertyName = 'height'
        suggestedAlternative = 'y={{ type: \'top-bottom\', topOffset: 0 bottomOffset: 0 }}'
      }

      if (length === 'fill-parent') {
        propertyName = length
        suggestedAlternative = direction === 'vertical'
          ? 'y={{ type: \'top-bottom\', topOffset: 0 bottomOffset: 0 }}'
          : 'x={{ type: \'left-right\', leftOffset: 0 rightOffset: 0 }}'
      }

      if (propertyName && suggestedAlternative) {
        console.warn(`Layer "${name}" has ${propertyName}="fill-parent" set, but "fill-parent" is not valid when the parent is a Frame. Either use <AutoLayout> for the parent or use ${suggestedAlternative} instead of ${propertyName}="fill-parent"`)
      }
    }
  }
}

// CSS class for absolute positioning
export const ABSOLUTE_CLASS = 'fg-absolute'

// Create emotion instance for styling
const emotionInstance = createEmotion({
  key: 'figma-codegen',
  nonce: window.INITIAL_OPTIONS.csp_nonce,
})

/**
 * Generates CSS classes with optional absolute positioning.
 * @param styles - CSS styles to apply.
 * @returns Generated CSS class names.
 */
export function css(styles: any) {
  const isPositionAbsolute = styles?.position === 'absolute'
  const cssClass = emotionInstance.css(styles)
  return isPositionAbsolute ? `${cssClass} ${exports.ABSOLUTE_CLASS}` : cssClass
}
