import { isBrowser } from '../905/268204'

/**
 * Supported pointer device types.
 */
const POINTER_DEVICE_TYPES = ['mouse', 'touch', 'pen']

/**
 * Tracks the current input state (pointer or keyboard).
 * @originalName a
 */
interface InputState {
  element: Element | null
  type: 'pointer' | 'keyboard'
  device: 'mouse' | 'touch' | 'pen' | 'keyboard'
  key: string
  code: string
}

/**
 * Default input state.
 * @originalName a
 */
export const defaultInputState: InputState = {
  element: isBrowser ? document.body : null,
  type: 'pointer',
  device: 'mouse',
  key: '',
  code: '',
}

/**
 * Reference to the current input state.
 * @originalName $$s0
 */
const inputState = defaultInputState

/**
 * Updates input state for pointer events.
 * @param event PointerEvent
 * @originalName o
 */
function handlePointerEvent(event: PointerEvent): void {
  const pointerType = event.pointerType
  inputState.type = 'pointer'
  inputState.device = POINTER_DEVICE_TYPES.includes(pointerType) ? pointerType as InputState['device'] : 'mouse'
  inputState.key = ''
  inputState.code = ''
  updateElement(event.target)
}

/**
 * Updates input state for keyboard events.
 * @param event KeyboardEvent
 * @originalName l
 */
function handleKeyboardEvent(event: KeyboardEvent): void {
  inputState.type = 'keyboard'
  inputState.device = 'keyboard'
  inputState.key = event.key
  inputState.code = event.code
  updateElement(event.target)
}

/**
 * Updates the element in the input state.
 * @param target EventTarget | null
 * @originalName d
 */
function updateElement(target: EventTarget | null): void {
  // Only set element if it's a DOM Element node, else fallback to document.body
  if (target && (target as Element).nodeType === 1) {
    inputState.element = target as Element
  }
  else {
    inputState.element = document.body
  }
}

// Register event listeners if running in browser
if (isBrowser) {
  window.addEventListener('pointerdown', handlePointerEvent, true)
  window.addEventListener('pointerup', handlePointerEvent, true)
  window.addEventListener('keydown', handleKeyboardEvent, true)
  window.addEventListener('keyup', handleKeyboardEvent, true)
}

/**
 * Exported input state reference.
 * @originalName F
 */
export const F = defaultInputState
