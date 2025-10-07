/**
 * Wiggle detection system for cursor interactions
 */

import type { WiggleDetector as IWiggleDetector, MousePosition, WiggleDetectorState } from './types'
import { WIGGLE_MODE_MOVEMENT, WIGGLE_MODE_SHAKE, WIGGLE_MODE_TIMING } from './constants'

/**
 * Detects cursor wiggling and manages wiggle mode state
 */
export class WiggleDetector implements IWiggleDetector {
  static WIGGLE_MODE_DEACTIVATION_TIME = 6
  static WIGGLE_MODE_ABOUT_TO_HIDE_TIME = 3
  static WIGGLE_MODE_HIGH_FIVE_KEY_TIME = 0.5
  static WIGGLE_MODE_MOUSE_RESET_TIME = 0.6
  static WIGGLE_MODE_MOVEMENT_SENSITIVITY = 4e-5
  static WIGGLE_MODE_MOVEMENT_MIN_TIME = 0.1
  static WIGGLE_MODE_MOVEMENT_DECAY_TIME = 1.5
  static WIGGLE_MODE_MIN_SHAKES_TO_TRIGGER = 6.5
  static WIGGLE_MODE_REPLENISH_SHAKES = 3.5
  static WIGGLE_MODE_SHAKE_GRACE_PERIOD = 0.3
  static WIGGLE_MODE_SHAKE_RESET_TIME = 0.5
  static WIGGLE_MODE_LEAVE_CANVAS_GRACE_PERIOD = 0.3
  wiggleMeter = 0
  wiggleMode = false
  lastUpdateTime = 0
  shakeFactor = 0
  shakeGracePeriod = 0
  speedFactor = 0
  mouseX = 0
  mouseY = 0
  hasLastMousePosition = false
  lastMouseX = 0
  lastMouseY = 0
  lastDirectionX = 0
  lastDirectionY = 0
  mouseLeftCanvas = false
  highFiveKeyPressed = false
  mouseButtonHeld = false

  subscriptions: Array<(wiggleMode: boolean) => void> = []

  /**
   * Get current wiggle mode state
   */
  getWiggleMode(): boolean {
    return this.wiggleMode
  }

  /**
   * Get current shake factor (0-1)
   */
  getShakeFactor(): number {
    return this.shakeFactor
  }

  /**
   * Check if wiggle mode is about to hide
   */
  getAboutToHide(): boolean {
    return (
      this.getWiggleMode()
      && this.wiggleMeter < WIGGLE_MODE_TIMING.ABOUT_TO_HIDE_TIME / WIGGLE_MODE_TIMING.DEACTIVATION_TIME
    )
  }

  /**
   * Subscribe to wiggle mode changes
   */
  onWiggleModeChange(callback: (wiggleMode: boolean) => void): () => void {
    this.subscriptions.push(callback)

    return () => {
      const index = this.subscriptions.indexOf(callback)
      if (index >= 0) {
        this.subscriptions.splice(index, 1)
      }
    }
  }

  /**
   * Set wiggle mode and notify subscribers
   */
  setWiggleMode(mode: boolean): void {
    if (mode !== this.wiggleMode) {
      this.wiggleMode = mode

      for (const subscription of this.subscriptions) {
        subscription(this.wiggleMode)
      }
    }
  }

  /**
   * Set whether mouse left canvas
   */
  setMouseLeftCanvas(leftCanvas: boolean): void {
    this.mouseLeftCanvas = leftCanvas
  }

  /**
   * Get whether mouse left canvas
   */
  getMouseLeftCanvas(): boolean {
    return this.mouseLeftCanvas
  }

  /**
   * Set high five key pressed state
   */
  setHighFiveKeyPressed(pressed: boolean): void {
    this.highFiveKeyPressed = pressed
  }

  /**
   * Get high five key pressed state
   */
  getHighFiveKeyPressed(): boolean {
    return this.highFiveKeyPressed
  }

  /**
   * Set mouse button held state
   */
  setMouseButtonHeld(held: boolean): void {
    this.mouseButtonHeld = held
    this.update()
  }

  /**
   * Get current mouse position
   */
  getMousePosition() {
    return {
      x: this.mouseX,
      y: this.mouseY,
      overCanvas: !this.mouseLeftCanvas,
    }
  }

  /**
   * Stop wiggling immediately
   */
  stopWigglingNow(): void {
    this.speedFactor = 0
    this.shakeFactor = 0
    this.shakeGracePeriod = 0
    this.wiggleMeter = 0
    this.hasLastMousePosition = false
    this.lastDirectionX = 0
    this.lastDirectionY = 0
    this.setWiggleMode(false)
    this.update()
  }

  /**
   * Start or refresh wiggle mode
   */
  startOrRefreshWiggle(): void {
    this.setWiggleMode(true)
    this.wiggleMeter = 1
  }

  /**
   * Get delta time since last update
   */
  getDeltaTime(): number {
    const currentTime = performance.now()
    const deltaTime = currentTime - this.lastUpdateTime
    this.lastUpdateTime = currentTime
    return deltaTime / 1000 // Convert to seconds
  }

  /**
   * Update wiggle detector with optional mouse position
   */
  update(mousePosition?: MousePosition, deltaTime?: number): void {
    if (mousePosition) {
      this.setMousePositionAndUpdate(mousePosition, deltaTime)
    }
    else {
      this.updateWiggleMeter(deltaTime)
    }
  }

  /**
   * Update mouse position and calculate wiggle metrics
   */
  setMousePositionAndUpdate(mousePosition: MousePosition, deltaTime?: number): void {
    // Don't update if mouse is off canvas or button is held
    if (this.mouseLeftCanvas || this.mouseButtonHeld) {
      return
    }

    const dt = typeof deltaTime === 'number' ? deltaTime : this.getDeltaTime()
    if (dt <= 0)
      return

    this.mouseX = mousePosition.x
    this.mouseY = mousePosition.y

    // Calculate mouse velocity
    const velocityX = (this.mouseX - this.lastMouseX) / dt
    const velocityY = (this.mouseY - this.lastMouseY) / dt

    this.lastMouseX = this.mouseX
    this.lastMouseY = this.mouseY

    // Skip first frame to establish baseline
    if (!this.hasLastMousePosition) {
      this.hasLastMousePosition = true
      return
    }

    const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY)
    let directionCorrelation = 1

    // Calculate direction correlation if moving
    if (speed > 0) {
      const normalizedVelX = velocityX / speed
      const normalizedVelY = velocityY / speed

      directionCorrelation
        = normalizedVelX * this.lastDirectionX
          + normalizedVelY * this.lastDirectionY

      this.lastDirectionX = normalizedVelX
      this.lastDirectionY = normalizedVelY
    }

    // Update speed factor
    const speedDecay = dt / WIGGLE_MODE_MOVEMENT.DECAY_TIME
    const speedIncrease = dt / WIGGLE_MODE_MOVEMENT.MIN_TIME + speedDecay

    this.speedFactor += Math.min(
      speed * WIGGLE_MODE_MOVEMENT.SENSITIVITY,
      speedIncrease,
    )
    this.speedFactor = Math.max(0, this.speedFactor - speedDecay)
    this.speedFactor = Math.min(1, this.speedFactor)

    // Detect shaking (fast movement with direction changes)
    const isMovingFast = this.speedFactor >= 0.8
    const isDirectionChange = isMovingFast && directionCorrelation < 0
    const isHorizontalMovement = Math.abs(this.lastDirectionX) > Math.abs(this.lastDirectionY)

    // Add to shake factor if shaking detected
    if (isMovingFast && isDirectionChange && isHorizontalMovement) {
      const shakeIncrement = 1 / (
        this.wiggleMode
          ? WIGGLE_MODE_SHAKE.REPLENISH_SHAKES
          : WIGGLE_MODE_SHAKE.MIN_SHAKES_TO_TRIGGER
      )
      this.shakeFactor += shakeIncrement
      this.shakeGracePeriod = 1
    }

    // Update shake grace period and decay
    if (this.shakeGracePeriod > 0) {
      this.shakeGracePeriod = Math.max(
        this.shakeGracePeriod - dt / WIGGLE_MODE_SHAKE.GRACE_PERIOD,
        0,
      )
    }
    else {
      this.shakeFactor -= dt / WIGGLE_MODE_SHAKE.RESET_TIME
    }

    this.shakeFactor = Math.min(Math.max(this.shakeFactor, 0), 1)

    // Update wiggle meter based on movement and shaking
    if (isMovingFast) {
      if (Math.abs(this.shakeFactor) >= 0.8) {
        this.wiggleMeter = 1
      }
      else if (this.wiggleMode && Math.abs(this.shakeFactor) >= 0.3) {
        this.wiggleMeter = Math.max(this.wiggleMeter, Math.abs(this.shakeFactor))
      }
    }

    this.updateWiggleMeter(dt)
  }

  /**
   * Update wiggle meter decay
   */
  updateWiggleMeter(deltaTime?: number): void {
    const dt = typeof deltaTime === 'number' ? deltaTime : this.getDeltaTime()
    if (dt <= 0)
      return

    // Update wiggle mode based on wiggle meter
    if (this.wiggleMeter <= 0) {
      this.setWiggleMode(false)
    }
    else if (this.wiggleMeter >= 1) {
      this.setWiggleMode(true)
    }

    // Calculate wiggle meter change rate
    let wiggleMeterRate: number

    if (this.mouseLeftCanvas) {
      wiggleMeterRate = -WIGGLE_MODE_TIMING.LEAVE_CANVAS_GRACE_PERIOD
    }
    else if (this.highFiveKeyPressed) {
      wiggleMeterRate = WIGGLE_MODE_TIMING.HIGH_FIVE_KEY_TIME
    }
    else if (this.wiggleMode) {
      wiggleMeterRate = -WIGGLE_MODE_TIMING.DEACTIVATION_TIME
    }
    else {
      wiggleMeterRate = -WIGGLE_MODE_TIMING.MOUSE_RESET_TIME
    }

    // Update wiggle meter
    this.wiggleMeter += dt / wiggleMeterRate
    this.wiggleMeter = Math.min(Math.max(this.wiggleMeter, 0), 1)
  }

  /**
   * Get internal state for debugging
   */
  getDebugState(): WiggleDetectorState {
    return {
      wiggleMeter: this.wiggleMeter,
      wiggleMode: this.wiggleMode,
      lastUpdateTime: this.lastUpdateTime,
      shakeFactor: this.shakeFactor,
      shakeGracePeriod: this.shakeGracePeriod,
      speedFactor: this.speedFactor,
      mouseX: this.mouseX,
      mouseY: this.mouseY,
      hasLastMousePosition: this.hasLastMousePosition,
      lastMouseX: this.lastMouseX,
      lastMouseY: this.lastMouseY,
      lastDirectionX: this.lastDirectionX,
      lastDirectionY: this.lastDirectionY,
      mouseLeftCanvas: this.mouseLeftCanvas,
      highFiveKeyPressed: this.highFiveKeyPressed,
      mouseButtonHeld: this.mouseButtonHeld,
    }
  }

  /**
   * Reset all state
   */
  reset(): void {
    this.wiggleMeter = 0
    this.wiggleMode = false
    this.lastUpdateTime = 0
    this.shakeFactor = 0
    this.shakeGracePeriod = 0
    this.speedFactor = 0
    this.mouseX = 0
    this.mouseY = 0
    this.hasLastMousePosition = false
    this.lastMouseX = 0
    this.lastMouseY = 0
    this.lastDirectionX = 0
    this.lastDirectionY = 0
    this.mouseLeftCanvas = false
    this.highFiveKeyPressed = false
    this.mouseButtonHeld = false
    this.subscriptions = []
  }
}
