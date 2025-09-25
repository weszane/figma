import { hideInstanceSwapPicker, showInstanceSwapPicker } from '../905/8732'
import { hidePickerInStyleCreation, showPickerInStyleCreation } from '../905/295712'
import { hideVariablePicker, showVariablePicker } from '../905/330741'
import { closeFullscreenAction } from '../905/541060'
import { Point } from '../905/736624'
import { fullscreenOpen, hidePicker, hideStylePicker, shouldShowStackAlignmentPicker, showPicker, showStylePicker } from '../figma_app/91703'
import { parsePxInt } from '../figma_app/783094'

// Original: $$u8
// Default width for picker positioning, parsed from '240px'
export const DEFAULT_PICKER_WIDTH = parsePxInt('240px')

/**
 * Calculates the position for a picker element relative to the given element,
 * offset to the left by the specified width.
 * @param element - The DOM element to position relative to.
 * @param offsetWidth - The width to offset by (default: DEFAULT_PICKER_WIDTH).
 * @returns A Point representing the calculated position.
 * Original: $$p6
 */
export function calculatePickerPositionLeft(element: HTMLElement, offsetWidth: number = DEFAULT_PICKER_WIDTH): Point {
  const { top, left } = element.getBoundingClientRect()
  return new Point(left - offsetWidth, top)
}

/**
 * Calculates the position for a picker element to the right of the given element,
 * with optional vertical alignment adjustment.
 * @param options - Object containing the element, initial height, and vertical alignment flag.
 * @returns A Point representing the calculated position.
 * Original: $$m3
 */
export function calculatePickerPositionRight({
  el: element,
  initialHeight,
  verticalAlign,
}: {
  el: HTMLElement
  initialHeight?: number
  verticalAlign?: boolean
}): Point {
  const { right, top } = element.getBoundingClientRect()
  return verticalAlign && initialHeight ? new Point(right, top - initialHeight / 2) : new Point(right, top)
}

/**
 * Calculates the position below the given element, either centered or right-aligned.
 * @param element - The DOM element to position below.
 * @param width - The width of the picker (default: DEFAULT_PICKER_WIDTH).
 * @param center - Whether to center the position (default: true).
 * @returns A Point representing the calculated position.
 * Original: $$h4
 */
export function calculatePickerPositionBelow(element: HTMLElement, width: number = DEFAULT_PICKER_WIDTH, center: boolean = true): Point {
  const { top, left, width: elementWidth, height } = element.getBoundingClientRect()
  const bottom = top + height
  return center ? new Point(left + (elementWidth - width) / 2, bottom) : new Point(left + elementWidth - width, bottom)
}

/**
 * Reducer for managing picker visibility state.
 * @param state - The current state (null if hidden).
 * @param action - The action to process.
 * @returns The updated state.
 * Original: $$g1
 */
export function pickerVisibilityReducer(state: any = null, action: any): any {
  if (showPicker.matches(action)) {
    return action.payload
  }
  if (hidePicker.matches(action)) {
    return null
  }
  return state
}

/**
 * Reducer for managing style picker state.
 * @param state - The current state object with isShown property.
 * @param action - The action to process.
 * @returns The updated state.
 * Original: $$f5
 */
export function stylePickerReducer(state: { isShown: boolean } = { isShown: false }, action: any): { isShown: boolean } {
  if (showStylePicker.matches(action)) {
    return {
      ...action.payload,
      isShown: true,
    }
  }
  if (hideStylePicker.matches(action)) {
    return {
      isShown: false,
    }
  }
  return state
}

/**
 * Reducer for managing instance swap picker state.
 * @param state - The current state object with isShown property.
 * @param action - The action to process.
 * @returns The updated state.
 * Original: $$_7
 */
export function instanceSwapPickerReducer(state: { isShown: boolean } = { isShown: false }, action: any): { isShown: boolean } {
  if (showInstanceSwapPicker.matches(action)) {
    return {
      ...action.payload,
      isShown: true,
    }
  }
  if (hideInstanceSwapPicker.matches(action)) {
    return {
      isShown: false,
    }
  }
  return state
}

/**
 * Reducer for managing stack alignment picker visibility.
 * @param state - The current boolean state.
 * @param action - The action to process.
 * @returns The updated state.
 * Original: $$A2
 */
export function stackAlignmentPickerReducer(state: boolean = false, action: any): boolean {
  if (shouldShowStackAlignmentPicker.matches(action)) {
    return action.payload
  }
  return state
}

/**
 * Reducer for managing variable picker state.
 * @param state - The current state object with isShown property.
 * @param action - The action to process.
 * @returns The updated state.
 * Original: $$y0
 */
export function variablePickerReducer(state: { isShown: boolean } = { isShown: false }, action: any): { isShown: boolean } {
  if (showVariablePicker.matches(action)) {
    return {
      ...action.payload,
    }
  }
  if (hideVariablePicker.matches(action) || fullscreenOpen.matches(action) || closeFullscreenAction.matches(action)) {
    return {
      isShown: false,
    }
  }
  return state
}

/**
 * Reducer for managing picker in style creation state.
 * @param state - The current state (null if hidden).
 * @param action - The action to process.
 * @returns The updated state.
 * Original: $$b9
 */
export function pickerInStyleCreationReducer(state: any = null, action: any): any {
  if (showPickerInStyleCreation.matches(action)) {
    return action.payload
  }
  if (hidePickerInStyleCreation.matches(action)) {
    return null
  }
  return state
}

// Exported constants with refactored function names
export const AJ = variablePickerReducer
export const CG = pickerVisibilityReducer
export const Mt = stackAlignmentPickerReducer
export const TS = calculatePickerPositionRight
export const VZ = calculatePickerPositionBelow
export const XJ = stylePickerReducer
export const cn = calculatePickerPositionLeft
export const qI = instanceSwapPickerReducer
export const qo = DEFAULT_PICKER_WIDTH
export const vB = pickerInStyleCreationReducer
