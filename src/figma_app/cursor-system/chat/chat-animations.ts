/**
 * Chat animation system for text effects and rumble animations
 */

import { CHAT_ANIMATION } from '../constants'

export interface ChatAnimationState {
  isAnimating: boolean
  animationIntensity: number
  animations: Animation[]
}

export interface RumbleKeyframe {
  transform: string
}

/**
 * Manages chat text animations and rumble effects
 */
export class ChatAnimationSystem {
  private animationState: ChatAnimationState = {
    isAnimating: false,
    animationIntensity: 0,
    animations: [],
  }

  private rumbleTimeoutId: number = 0

  /**
   * Create rumble animation keyframes
   */
  private createRumbleKeyframes(intensity: number): RumbleKeyframe[] {
    const maxTranslate = 3 * intensity
    const maxRotate = 1.8 * intensity
    const keyframes: RumbleKeyframe[] = []

    // First and last keyframes are neutral
    keyframes.push(this.createTransformKeyframe(0, 0, 0))

    // Generate random intermediate keyframes
    for (let i = 2; i <= 100; i += 2) {
      if (i === 100) {
        keyframes.push(this.createTransformKeyframe(0, 0, 0))
        continue
      }

      const translateX = Math.floor(Math.random() * maxTranslate) - maxTranslate / 2
      const translateY = Math.floor(Math.random() * maxTranslate) - maxTranslate / 2
      const rotate = Math.floor(Math.random() * maxRotate) - maxRotate / 2

      keyframes.push(this.createTransformKeyframe(translateX, translateY, rotate))
    }

    return keyframes
  }

  /**
   * Create a transform keyframe
   */
  private createTransformKeyframe(x: number, y: number, rotation: number): RumbleKeyframe {
    return {
      transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
    }
  }

  /**
   * Create rumble animation for an element
   */
  private createRumbleAnimation(element: Element, intensity: number): Animation {
    const keyframes = this.createRumbleKeyframes(intensity)

    return new Animation(
      new KeyframeEffect(element, keyframes, {
        duration: CHAT_ANIMATION.RUMBLE_DURATION,
        easing: 'ease-in-out',
        iterations: Infinity,
      }),
      document.timeline,
    )
  }

  /**
   * Check if any animations are currently running
   */
  private areAnimationsRunning(animations: Animation[]): boolean {
    return animations.length > 0 && animations.some(animation =>
      animation.playState === 'running',
    )
  }

  /**
   * Start rumble animation based on exclamation intensity
   */
  startRumbleAnimation(
    element: HTMLElement | null,
    exclamationCount: number,
    onAnimationTriggered?: () => void,
  ): void {
    if (!element || exclamationCount <= 1)
      return

    // Create animations with different intensities if not already created
    if (this.animationState.animations.length === 0) {
      this.animationState.animations = [
        this.createRumbleAnimation(element, 1),
        this.createRumbleAnimation(element, 1.5),
        this.createRumbleAnimation(element, 2),
        this.createRumbleAnimation(element, 2.5),
        this.createRumbleAnimation(element, 3),
      ]
    }

    const wasAnimating = this.areAnimationsRunning(this.animationState.animations)

    // Select animation intensity based on exclamation count
    const animationIndex = Math.min(
      exclamationCount - 2, // -1 for threshold, -1 for zero-based index
      this.animationState.animations.length - 1,
    )

    // Stop all animations and start the selected one
    this.animationState.animations.forEach((animation, index) => {
      if (index === animationIndex) {
        animation.play()
      }
      else {
        animation.cancel()
      }
    })

    const isNowAnimating = this.areAnimationsRunning(this.animationState.animations)

    // Track animation start
    if (!wasAnimating && isNowAnimating && onAnimationTriggered) {
      onAnimationTriggered()
    }

    this.animationState.isAnimating = isNowAnimating
    this.animationState.animationIntensity = exclamationCount
  }

  /**
   * Stop all rumble animations
   */
  stopRumbleAnimation(): void {
    this.animationState.animations.forEach((animation) => {
      animation.cancel()
    })
    this.animationState.isAnimating = false
    this.animationState.animationIntensity = 0
  }

  /**
   * Schedule animation stop after delay
   */
  scheduleAnimationStop(delay: number = CHAT_ANIMATION.FADE_DELAY): void {
    clearTimeout(this.rumbleTimeoutId)

    this.rumbleTimeoutId = window.setTimeout(() => {
      this.fadeOutAnimation()
    }, delay)
  }

  /**
   * Gradually fade out animation
   */
  private fadeOutAnimation(step: number = CHAT_ANIMATION.MIN_FADE_STEP): void {
    if (this.animationState.animationIntensity > 0) {
      this.animationState.animationIntensity = Math.max(
        this.animationState.animationIntensity - 1,
        0,
      )

      if (this.animationState.animationIntensity > 0) {
        this.rumbleTimeoutId = window.setTimeout(() => {
          this.fadeOutAnimation(step)
        }, step)
      }
      else {
        this.stopRumbleAnimation()
      }
    }
  }

  /**
   * Get current animation state
   */
  getAnimationState(): Readonly<ChatAnimationState> {
    return {
      ...this.animationState,
      animations: [...this.animationState.animations],
    }
  }

  /**
   * Check if animations are currently running
   */
  isAnimating(): boolean {
    return this.animationState.isAnimating
  }

  /**
   * Get current animation intensity
   */
  getAnimationIntensity(): number {
    return this.animationState.animationIntensity
  }

  /**
   * Get animation play states for debugging
   */
  getAnimationPlayStates(): string[] {
    return this.animationState.animations.map(animation => animation.playState)
  }

  /**
   * Clean up animations and timers
   */
  cleanup(): void {
    clearTimeout(this.rumbleTimeoutId)
    this.stopRumbleAnimation()
    this.animationState.animations = []
  }

  /**
   * Reset animation system
   */
  reset(): void {
    this.cleanup()
    this.animationState = {
      isAnimating: false,
      animationIntensity: 0,
      animations: [],
    }
  }
}
