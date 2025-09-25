import { getPublishedComponentsForLibraryThunk } from '../905/64411'
import { createActionCreator } from '../905/73481'
import { createOptimistThunk } from '../905/350402'
import { selectCommonLibraryKey } from '../905/557338'
import { hideStylePicker } from '../figma_app/91703'
import { isTrackedState } from '../figma_app/646357'
import { zK } from '../figma_app/913823'
import { sw } from '../figma_app/914957'

// Define types for the thunk payload
interface ToggleInstanceSwapPickerPayload {
  id: string
  initialPosition?: { x: number, y: number }
  modal?: boolean
  returnFocusToToggle?: boolean
}

/**
 * Action creator for showing the instance swap picker.
 * Original: $$u0
 */
export const showInstanceSwapPicker = createActionCreator('SHOW_INSTANCE_SWAP_PICKER')

/**
 * Action creator for hiding the instance swap picker.
 * Original: $$p1
 */
export const hideInstanceSwapPicker = createActionCreator('HIDE_INSTANCE_SWAP_PICKER')

/**
 * Thunk to toggle the instance swap picker, handling show/hide logic with preconditions.
 * If the picker is already shown for the same id, it hides it.
 * Otherwise, it shows it after performing necessary setup actions.
 * Original: $$m2
 */
export const toggleInstanceSwapPicker = createOptimistThunk((context, payload: ToggleInstanceSwapPickerPayload) => {
  const { id, initialPosition, modal, returnFocusToToggle } = payload
  const state = context.getState()
  const { instanceSwapPickerShown } = state
  const libraryKey = selectCommonLibraryKey(state)

  // Early return if picker is already shown for this id
  if (instanceSwapPickerShown.isShown && instanceSwapPickerShown.id === id) {
    context.dispatch(hideInstanceSwapPicker())
    return
  }

  // Guard clause: require initialPosition to show
  if (!initialPosition) {
    return
  }

  // Perform setup actions before showing
  context.dispatch(zK())
  if (libraryKey && !isTrackedState('INVALID-FILE-KEY-SHOULD-BE-REMOVED', libraryKey)) {
    context.dispatch(getPublishedComponentsForLibraryThunk({
      libraryKey,
    }))
  }
  context.dispatch(showInstanceSwapPicker({
    id,
    initialX: initialPosition.x,
    initialY: initialPosition.y,
    modal: !!modal,
    returnFocusToToggle: !!returnFocusToToggle,
  }))
  context.dispatch(hideStylePicker())
  context.dispatch(sw())
})

export const qX = showInstanceSwapPicker
export const vq = hideInstanceSwapPicker
export const zE = toggleInstanceSwapPicker
