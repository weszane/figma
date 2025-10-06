import { trackEventAnalytics } from '../905/449184'
import { EventEmitter } from '../905/690073'
import { debounce } from '../905/915765'

/**
 * Gamepad button threshold offset constant (original: $$d1)
 */
export const GAMEPAD_BUTTON_AXIS_OFFSET = 1e3

/**
 * Supported controller vendor/product mappings (original: h)
 */
const CONTROLLER_VENDOR_PRODUCT_MAP = new Map<string, string>([
  ['054c_09cc', 'PS4'],
  ['054c_05c4', 'PS4'],
  ['054c_0268', 'PS4'],
  ['057e_2009', 'SWITCH_PRO'],
  ['045e_02ea', 'XBOX_ONE'],
  ['045e_02dd', 'XBOX_ONE'],
])

/**
 * Supported controller vendor mappings (original: g)
 */
const CONTROLLER_VENDOR_MAP = new Map<string, string>([
  ['054c', 'PS4'],
  ['057e', 'SWITCH_PRO'],
  ['045e', 'XBOX_ONE'],
])

const GAMEPAD_CONNECTED_EVENT = 'gamepadconnected'
const GAMEPAD_DISCONNECTED_EVENT = 'gamepaddisconnected'
const VENDOR_PRODUCT_REGEX = /Vendor: ([0-9a-f]+) Product: ([0-9a-f]+)/i
const XBOX_REGEX = /xbox/i

/**
 * Debounced analytics tracker for gamepad events (original: s)
 */
const debouncedTrackEventAnalytics = debounce(trackEventAnalytics, 1e3, true)

/**
 * Returns the controller type string for a given Gamepad (original: inline function in tick)
 * @param gamepad Gamepad object
 */
function getControllerType(gamepad: Gamepad): string {
  const match = VENDOR_PRODUCT_REGEX.exec(gamepad.id)
  if (!match) {
    return XBOX_REGEX.exec(gamepad.id) ? 'XBOX_ONE' : 'UNKNOWN_CONTROLLER'
  }
  const [vendor, product] = match.slice(1)
  const vendorProductKey = `${vendor}_${product}`
  const exactMatch = CONTROLLER_VENDOR_PRODUCT_MAP.get(vendorProductKey)
  const closestMatch = exactMatch ?? CONTROLLER_VENDOR_MAP.get(vendor) ?? 'UNKNOWN_CONTROLLER'
  debouncedTrackEventAnalytics('Game Controller Triggered', {
    id: gamepad.id,
    closestMatch,
    wasExactMatch: !!exactMatch,
  })
  return closestMatch
}

/**
 * Represents the state of pressed buttons for a gamepad (original: getStateForGamepad return type)
 */
export interface GamepadState {
  pressedButtons: Set<number>
}

/**
 * GameControllerListener class (original: $$c0)
 * Listens for gamepad connection/disconnection and button presses.
 */
export class GameControllerListener {
  emitter: EventEmitter
  state: Map<number, GamepadState>
  rafHandle: number

  constructor() {
    this.emitter = new EventEmitter('GameControllerListener')
    this.state = new Map()
    this.rafHandle = 0

    this.onGamePadConnected = this.handleGamePadConnected.bind(this)
    this.onGamePadDisconnected = this.handleGamePadDisconnected.bind(this)
    this.tick = this.handleTick.bind(this)
  }

  /**
   * Starts listening for gamepad events (original: start)
   */
  start(): void {
    if (!isGamepadApiSupported()) {
      console.warn('Gamepad API not supported')
      return
    }
    for (const gamepad of window.navigator.getGamepads()) {
      if (gamepad != null) {
        this.state.set(gamepad.index, this.getStateForGamepad(gamepad))
      }
    }
    window.addEventListener(GAMEPAD_CONNECTED_EVENT, this.onGamePadConnected)
    window.addEventListener(GAMEPAD_DISCONNECTED_EVENT, this.onGamePadDisconnected)
    if (Array.from(window.navigator.getGamepads()).some(Boolean)) {
      this.rafHandle = window.requestAnimationFrame(this.tick)
    }
  }

  /**
   * Stops listening for gamepad events (original: end)
   */
  end(): void {
    this.cancelRAF()
    window.removeEventListener(GAMEPAD_CONNECTED_EVENT, this.onGamePadConnected)
    window.removeEventListener(GAMEPAD_DISCONNECTED_EVENT, this.onGamePadDisconnected)
  }

  /**
   * Registers a callback for button press events (original: onPress)
   * @param callback Callback function
   */
  onPress(callback: (event: {
    type: string
    buttons: number[]
    gamePadIndex: number
    controllerType: string
  }) => void): { release: () => void } {
    this.emitter.on('onPress', callback)
    return {
      release: () => {
        this.emitter.removeListener('onPress', callback)
      },
    }
  }

  /**
   * Cancels the animation frame loop (original: cancelRAF)
   */
  cancelRAF(): void {
    if (this.rafHandle) {
      window.cancelAnimationFrame(this.rafHandle)
      this.rafHandle = 0
    }
  }

  /**
   * Returns the pressed button state for a gamepad (original: getStateForGamepad)
   * @param gamepad Gamepad object
   */
  getStateForGamepad(gamepad: Gamepad): GamepadState {
    const pressed: number[] = []
    for (let i = 0; i < gamepad.buttons.length; i++) {
      if (gamepad.buttons[i].pressed)
        pressed.push(i)
    }
    for (let i = 0; i < gamepad.axes.length; i++) {
      const axis = gamepad.axes[i]
      if (axis < -0.5)
        pressed.push(2 * i + GAMEPAD_BUTTON_AXIS_OFFSET)
      if (axis > 0.5)
        pressed.push(2 * i + 1 + GAMEPAD_BUTTON_AXIS_OFFSET)
    }
    return { pressedButtons: new Set(pressed) }
  }

  /**
   * Handles gamepad connection event (original: onGamePadConnected)
   */
  handleGamePadConnected(): void {
    if (!this.rafHandle) {
      this.rafHandle = window.requestAnimationFrame(this.tick)
    }
  }

  /**
   * Handles gamepad disconnection event (original: onGamePadDisconnected)
   */
  handleGamePadDisconnected(): void {
    if (!Array.from(window.navigator.getGamepads()).some(Boolean)) {
      window.cancelAnimationFrame(this.rafHandle)
      this.rafHandle = 0
    }
  }

  /**
   * Animation frame loop to poll gamepad state and trigger button press events (original: tick)
   */
  handleTick(): void {
    for (const gamepad of window.navigator.getGamepads()) {
      if (!gamepad)
        continue
      const currentState = this.getStateForGamepad(gamepad)
      const previousState = this.state.get(gamepad.index) || currentState
      const newlyPressed: number[] = []
      for (const btn of currentState.pressedButtons) {
        if (!previousState.pressedButtons.has(btn)) {
          newlyPressed.push(btn)
        }
      }
      this.state.set(gamepad.index, currentState)
      if (newlyPressed.length) {
        this.emitter.trigger('onPress', {
          type: 'onPress',
          buttons: newlyPressed,
          gamePadIndex: gamepad.index,
          controllerType: getControllerType(gamepad),
        })
      }
    }
    this.rafHandle = window.requestAnimationFrame(this.tick)
  }

  onGamePadConnected: (e: Event) => void
  onGamePadDisconnected: (e: Event) => void
  tick: () => void
}

/**
 * Checks if the Gamepad API is supported (original: inline function in start)
 */
function isGamepadApiSupported(): boolean {
  if (typeof window.navigator.getGamepads !== 'function')
    return false
  try {
    window.navigator.getGamepads()
    return true
  }
  catch {
    return false
  }
}

// Export refactored names
export const L = GameControllerListener
export const c = GAMEPAD_BUTTON_AXIS_OFFSET
