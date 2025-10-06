/**
 * Animation and Transition Systems Module
 * 
 * This module handles animation systems, easing functions, transitions,
 * keyframe management, and motion controls extracted from the main plugin file.
 * 
 * Key responsibilities:
 * - Easing functions and curves (cubic bezier, spring, linear, back, etc.)
 * - Animation timeline and keyframe management
 * - Transition systems (dissolve, smart animate, directional transitions)
 * - Spring animation physics and configuration
 * - CSS animation utilities and converters
 * - Web Animation API integration
 * - Motion interpolation and tweening
 * - Animation state management and control
 */

/**
 * Animation Types and Interfaces
 */
export interface EasingFunction {
  type: EasingType
  easingFunctionCubicBezier?: CubicBezierControlPoints
  easingFunctionSpring?: SpringConfiguration
}

export interface CubicBezierControlPoints {
  x1: number
  y1: number
  x2: number
  y2: number
}

export interface SpringConfiguration {
  mass: number
  stiffness: number
  damping: number
}

export interface AnimationConfig {
  duration: number
  delay?: number
  easing: EasingFunction
  repeat?: number
  repeatType?: 'loop' | 'reverse'
  direction?: AnimationDirection
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both'
}

export interface KeyframeDefinition {
  offset: number
  value: any
  easing?: string
}

export interface TransitionConfig {
  type: TransitionType
  duration: number
  easing: EasingFunction
  direction?: TransitionDirection
  matchLayers?: boolean
}

export interface AnimationState {
  isPlaying: boolean
  currentTime: number
  duration: number
  progress: number
  direction: 'forward' | 'reverse'
  playbackRate: number
}

export interface SpringPhysics {
  tension: number
  friction: number
  mass: number
  velocity: number
  precision: number
}

export type EasingType =
  | 'EASE_IN' | 'EASE_OUT' | 'EASE_IN_AND_OUT' | 'LINEAR'
  | 'EASE_IN_BACK' | 'EASE_OUT_BACK' | 'EASE_IN_AND_OUT_BACK'
  | 'CUSTOM_CUBIC_BEZIER' | 'GENTLE' | 'QUICK' | 'BOUNCY' | 'SLOW'
  | 'CUSTOM_SPRING'

export type TransitionType =
  | 'DISSOLVE' | 'SMART_ANIMATE' | 'SCROLL_ANIMATE'
  | 'MOVE_IN' | 'MOVE_OUT' | 'PUSH' | 'SLIDE_IN' | 'SLIDE_OUT'

export type TransitionDirection = 'LEFT' | 'RIGHT' | 'TOP' | 'BOTTOM'

export type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'

/**
 * Easing Function Constants
 * Original: Easing functions from 207214.ts and vendor files
 */
export const EASING_FUNCTIONS = {
  // Linear
  linear: (t: number) => t,

  // Cubic Bezier Easings
  easeInSine: (t: number) => 1 - Math.cos((t * Math.PI) / 2),
  easeOutSine: (t: number) => Math.sin((t * Math.PI) / 2),
  easeInOutSine: (t: number) => -(Math.cos(Math.PI * t) - 1) / 2,

  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => 1 - (1 - t) * (1 - t),
  easeInOutQuad: (t: number) => t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2,

  easeInCubic: (t: number) => t * t * t,
  easeOutCubic: (t: number) => 1 - (1 - t) ** 3,
  easeInOutCubic: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2,

  easeInQuart: (t: number) => t * t * t * t,
  easeOutQuart: (t: number) => 1 - (1 - t) ** 4,
  easeInOutQuart: (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - (-2 * t + 2) ** 4 / 2,

  easeInQuint: (t: number) => t * t * t * t * t,
  easeOutQuint: (t: number) => 1 - (1 - t) ** 5,
  easeInOutQuint: (t: number) => t < 0.5 ? 16 * t * t * t * t * t : 1 - (-2 * t + 2) ** 5 / 2,

  easeInExpo: (t: number) => t === 0 ? 0 : 2 ** (10 * (t - 1)),
  easeOutExpo: (t: number) => t === 1 ? 1 : 1 - 2 ** (-10 * t),
  easeInOutExpo: (t: number) => {
    if (t === 0) return 0
    if (t === 1) return 1
    return t < 0.5 ? 2 ** (20 * t - 10) / 2 : (2 - 2 ** (-20 * t + 10)) / 2
  },

  easeInCirc: (t: number) => 1 - Math.sqrt(1 - t * t),
  easeOutCirc: (t: number) => Math.sqrt(1 - (t - 1) ** 2),
  easeInOutCirc: (t: number) => t < 0.5 ? (1 - Math.sqrt(1 - (2 * t) ** 2)) / 2 : (Math.sqrt(1 - (-2 * t + 2) ** 2) + 1) / 2,

  // Back Easings
  easeInBack: (t: number) => {
    const c1 = 1.70158
    const c3 = c1 + 1
    return c3 * t * t * t - c1 * t * t
  },
  easeOutBack: (t: number) => {
    const c1 = 1.70158
    const c3 = c1 + 1
    return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2
  },
  easeInOutBack: (t: number) => {
    const c1 = 1.70158
    const c2 = c1 * 1.525
    return t < 0.5
      ? ((2 * t) ** 2 * ((c2 + 1) * 2 * t - c2)) / 2
      : ((2 * t - 2) ** 2 * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2
  }
} as const

/**
 * Predefined Cubic Bezier Curves
 * Original: Cubic bezier definitions from 50897.ts and vendor files
 */
export const CUBIC_BEZIER_PRESETS = {
  easeIn: [0.42, 0, 1, 1] as const,
  easeOut: [0, 0, 0.58, 1] as const,
  easeInOut: [0.42, 0, 0.58, 1] as const,
  linear: [0, 0, 1, 1] as const,
  easeInBack: [0.3, -0.05, 0.7, -0.5] as const,
  easeOutBack: [0.45, 1.45, 0.8, 1] as const,
  easeInOutBack: [0.7, -0.4, 0.4, 1.4] as const
} as const

/**
 * Spring Animation Presets
 * Original: Spring presets from 50897.ts and figma_app files
 */
export const SPRING_PRESETS = {
  gentle: { mass: 1, stiffness: 100, damping: 15 },
  quick: { mass: 1, stiffness: 300, damping: 20 },
  bouncy: { mass: 1, stiffness: 600, damping: 15 },
  slow: { mass: 1, stiffness: 80, damping: 20 }
} as const

/**
 * CSS Animation Constants
 * Original: CSS easing from 961984.ts
 */
export const CSS_EASING_FUNCTIONS = {
  'ease-in': 'cubic-bezier(0.42, 0, 1, 1)',
  'ease-out': 'cubic-bezier(0, 0, 0.58, 1)',
  'ease-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
  'linear': 'linear',
  'ease-in-back': 'cubic-bezier(0.3, -0.05, 0.7, -0.5)',
  'ease-out-back': 'cubic-bezier(0.45, 1.45, 0.8, 1)',
  'ease-in-out-back': 'cubic-bezier(0.7, -0.4, 0.4, 1.4)'
} as const

/**
 * Easing Manager
 * Original: Easing functionality from 207214.ts and related files
 */
export class EasingManager {
  customEasings: Map<string, (t: number) => number> = new Map()

  /**
   * Get easing function by type
   * Original: easing type conversion from 50897.ts
   */
  getEasingFunction(easing: EasingFunction): (t: number) => number {
    switch (easing.type) {
      case 'LINEAR':
        return EASING_FUNCTIONS.linear
      case 'EASE_IN':
        return EASING_FUNCTIONS.easeInCubic
      case 'EASE_OUT':
        return EASING_FUNCTIONS.easeOutCubic
      case 'EASE_IN_AND_OUT':
        return EASING_FUNCTIONS.easeInOutCubic
      case 'EASE_IN_BACK':
        return EASING_FUNCTIONS.easeInBack
      case 'EASE_OUT_BACK':
        return EASING_FUNCTIONS.easeOutBack
      case 'EASE_IN_AND_OUT_BACK':
        return EASING_FUNCTIONS.easeInOutBack
      case 'CUSTOM_CUBIC_BEZIER':
        if (easing.easingFunctionCubicBezier) {
          return this.createCubicBezierFunction(easing.easingFunctionCubicBezier)
        }
        return EASING_FUNCTIONS.easeInOutCubic
      case 'GENTLE':
      case 'QUICK':
      case 'BOUNCY':
      case 'SLOW':
      case 'CUSTOM_SPRING':
        // Spring animations require different handling - return approximate cubic for now
        return EASING_FUNCTIONS.easeInOutCubic
      default:
        return EASING_FUNCTIONS.linear
    }
  }

  /**
   * Create cubic bezier easing function
   * Original: cubic bezier creation from vendor files
   */
  createCubicBezierFunction(controlPoints: CubicBezierControlPoints): (t: number) => number {
    const { x1, y1, x2, y2 } = controlPoints

    return (t: number): number => {
      // Simplified cubic bezier approximation
      // For production, would use more sophisticated solver
      const cx = 3 * x1
      const bx = 3 * (x2 - x1) - cx
      const ax = 1 - cx - bx

      const cy = 3 * y1
      const by = 3 * (y2 - y1) - cy
      const ay = 1 - cy - by

      const sampleCurveX = (t: number) => ((ax * t + bx) * t + cx) * t
      const sampleCurveY = (t: number) => ((ay * t + by) * t + cy) * t

      // Simple approximation - for production would use Newton-Raphson
      let x = t
      for (let i = 0; i < 8; i++) {
        const currentX = sampleCurveX(x) - t
        if (Math.abs(currentX) < 0.001) break
        x -= currentX / (3 * ax * x * x + 2 * bx * x + cx)
      }

      return sampleCurveY(x)
    }
  }

  /**
   * Register custom easing function
   */
  registerCustomEasing(name: string, easingFunction: (t: number) => number): void {
    this.customEasings.set(name, easingFunction)
  }

  /**
   * Get custom easing function
   */
  getCustomEasing(name: string): ((t: number) => number) | undefined {
    return this.customEasings.get(name)
  }

  /**
   * Convert easing to CSS string
   * Original: CSS easing conversion from 961984.ts
   */
  toCSSEasing(easing: EasingFunction): string {
    switch (easing.type) {
      case 'EASE_IN':
        return 'ease-in'
      case 'EASE_OUT':
        return 'ease-out'
      case 'EASE_IN_AND_OUT':
        return 'ease-in-out'
      case 'LINEAR':
        return 'linear'
      case 'EASE_IN_BACK':
        return CSS_EASING_FUNCTIONS['ease-in-back']
      case 'EASE_OUT_BACK':
        return CSS_EASING_FUNCTIONS['ease-out-back']
      case 'EASE_IN_AND_OUT_BACK':
        return CSS_EASING_FUNCTIONS['ease-in-out-back']
      case 'CUSTOM_CUBIC_BEZIER':
        if (easing.easingFunctionCubicBezier) {
          const { x1, y1, x2, y2 } = easing.easingFunctionCubicBezier
          return `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`
        }
        return 'ease-in-out'
      default:
        return 'ease-in-out'
    }
  }
}

/**
 * Spring Animation Manager
 * Original: Spring animation from 641273.ts and figma_app files
 */
export class SpringAnimationManager {
  activeAnimations: Map<string, Animation> = new Map()

  /**
   * Create spring animation configuration
   * Original: spring config from figma_app/703447.ts
   */
  createSpringConfig(springType: 'GENTLE' | 'QUICK' | 'BOUNCY' | 'SLOW' | 'CUSTOM_SPRING', customConfig?: SpringConfiguration): SpringPhysics {
    let config: SpringConfiguration

    switch (springType) {
      case 'GENTLE':
        config = SPRING_PRESETS.gentle
        break
      case 'QUICK':
        config = SPRING_PRESETS.quick
        break
      case 'BOUNCY':
        config = SPRING_PRESETS.bouncy
        break
      case 'SLOW':
        config = SPRING_PRESETS.slow
        break
      case 'CUSTOM_SPRING':
        config = customConfig || SPRING_PRESETS.gentle
        break
      default:
        config = SPRING_PRESETS.gentle
    }

    return {
      tension: config.stiffness,
      friction: config.damping,
      mass: config.mass,
      velocity: 0,
      precision: 0.01
    }
  }

  /**
   * Calculate spring animation frame
   * Original: spring physics calculations
   */
  calculateSpringFrame(
    current: number,
    target: number,
    velocity: number,
    spring: SpringPhysics,
    deltaTime: number
  ): { value: number; velocity: number; isDone: boolean } {
    const displacement = current - target
    const force = -spring.tension * displacement
    const damping = -spring.friction * velocity
    const acceleration = (force + damping) / spring.mass

    const newVelocity = velocity + acceleration * deltaTime
    const newValue = current + newVelocity * deltaTime

    const isDone =
      Math.abs(newVelocity) < spring.precision &&
      Math.abs(displacement) < spring.precision

    return {
      value: newValue,
      velocity: newVelocity,
      isDone
    }
  }

  /**
   * Create Web Animation API spring
   * Original: Web Animation API usage from 641273.ts
   */
  createWebAnimationSpring(
    element: Element,
    keyframes: Keyframe[],
    config: SpringPhysics,
    duration: number = 1000
  ): Animation {
    const animation = new Animation(
      new KeyframeEffect(element, keyframes, {
        duration,
        easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`, // Approximation
        fill: 'forwards'
      })
    )

    return animation
  }

  /**
   * Start spring animation
   */
  startSpringAnimation(
    id: string,
    element: Element,
    keyframes: Keyframe[],
    springConfig: SpringPhysics,
    duration?: number
  ): void {
    // Cancel existing animation
    this.stopAnimation(id)

    const animation = this.createWebAnimationSpring(element, keyframes, springConfig, duration)
    this.activeAnimations.set(id, animation)
    animation.play()
  }

  /**
   * Stop animation
   */
  stopAnimation(id: string): void {
    const animation = this.activeAnimations.get(id)
    if (animation) {
      animation.cancel()
      this.activeAnimations.delete(id)
    }
  }

  /**
   * Get animation state
   */
  getAnimationState(id: string): AnimationState | null {
    const animation = this.activeAnimations.get(id)
    if (!animation) return null

    return {
      isPlaying: animation.playState === 'running',
      currentTime: animation.currentTime as number || 0,
      duration: (animation.effect as KeyframeEffect)?.getTiming().duration as number || 0,
      progress: animation.currentTime ? (animation.currentTime as number) / ((animation.effect as KeyframeEffect)?.getTiming().duration as number) : 0,
      direction: animation.playbackRate >= 0 ? 'forward' : 'reverse',
      playbackRate: animation.playbackRate
    }
  }
}

/**
 * Keyframe Animation Manager
 * Original: Keyframe management from 207214.ts and 961984.ts
 */
export class KeyframeAnimationManager {
  animationClasses: Map<string, HTMLStyleElement> = new Map()

  /**
   * Create keyframe animation
   * Original: keyframe creation from 207214.ts
   */
  createKeyframeAnimation(
    name: string,
    keyframes: KeyframeDefinition[],
    config: AnimationConfig
  ): string {
    const keyframeRule = this.generateKeyframeRule(name, keyframes)
    const animationCSS = this.generateAnimationCSS(name, config)

    const styleElement = document.createElement('style')
    styleElement.textContent = `${keyframeRule}\n${animationCSS}`
    document.head.appendChild(styleElement)

    this.animationClasses.set(name, styleElement)

    return `${name}-animation`
  }

  /**
   * Generate CSS keyframe rule
   */
  generateKeyframeRule(name: string, keyframes: KeyframeDefinition[]): string {
    const keyframeBlocks = keyframes.map(kf => {
      const percentage = Math.round(kf.offset * 100)
      const properties = Object.entries(kf.value)
        .map(([prop, val]) => `${this.kebabCase(prop)}: ${val}`)
        .join('; ')
      return `${percentage}% { ${properties} }`
    }).join('\n  ')

    return `@keyframes ${name} {\n  ${keyframeBlocks}\n}`
  }

  /**
   * Generate CSS animation rule
   */
  generateAnimationCSS(name: string, config: AnimationConfig): string {
    const easingManager = new EasingManager()
    const easing = easingManager.toCSSEasing(config.easing)
    const duration = `${config.duration}ms`
    const delay = config.delay ? `${config.delay}ms` : '0ms'
    const repeat = config.repeat || 1
    const direction = config.direction || 'normal'
    const fillMode = config.fillMode || 'forwards'

    return `.${name}-animation {
      animation: ${name} ${duration} ${easing} ${delay} ${repeat} ${direction} ${fillMode};
    }`
  }

  /**
   * Apply animation to element
   */
  applyAnimation(element: HTMLElement, animationName: string): void {
    element.classList.add(`${animationName}-animation`)
  }

  /**
   * Remove animation from element
   */
  removeAnimation(element: HTMLElement, animationName: string): void {
    element.classList.remove(`${animationName}-animation`)
  }

  /**
   * Clean up animation styles
   */
  destroyAnimation(name: string): void {
    const styleElement = this.animationClasses.get(name)
    if (styleElement) {
      styleElement.remove()
      this.animationClasses.delete(name)
    }
  }

  /**
   * Convert camelCase to kebab-case
   */
  kebabCase(str: string): string {
    return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
  }
}

/**
 * Transition Manager
 * Original: Transition management from 50897.ts and 961984.ts
 */
export class TransitionManager {
  activeTransitions: Map<string, Animation> = new Map()

  /**
   * Create transition animation
   * Original: transition creation from 50897.ts
   */
  createTransition(
    element: Element,
    transitionConfig: TransitionConfig,
    fromState: Record<string, any>,
    toState: Record<string, any>
  ): Animation {
    const keyframes = this.buildTransitionKeyframes(transitionConfig, fromState, toState)
    const easingManager = new EasingManager()

    const animation = new Animation(
      new KeyframeEffect(element, keyframes, {
        duration: transitionConfig.duration * 1000, // Convert to milliseconds
        easing: easingManager.toCSSEasing(transitionConfig.easing),
        fill: 'forwards'
      })
    )

    return animation
  }

  /**
   * Build keyframes for transition
   * Original: keyframe building from 961984.ts
   */
  buildTransitionKeyframes(
    config: TransitionConfig,
    fromState: Record<string, any>,
    toState: Record<string, any>
  ): Keyframe[] {
    switch (config.type) {
      case 'DISSOLVE':
        return [
          { ...fromState, opacity: 1 },
          { ...toState, opacity: 0 }
        ]

      case 'SLIDE_IN':
      case 'SLIDE_OUT':
        return this.buildSlideKeyframes(config, fromState, toState)

      case 'MOVE_IN':
      case 'MOVE_OUT':
        return this.buildMoveKeyframes(config, fromState, toState)

      case 'PUSH':
        return this.buildPushKeyframes(config, fromState, toState)

      case 'SMART_ANIMATE':
        return [fromState, toState]

      default:
        return [fromState, toState]
    }
  }

  /**
   * Build slide transition keyframes
   */
  buildSlideKeyframes(
    config: TransitionConfig,
    fromState: Record<string, any>,
    toState: Record<string, any>
  ): Keyframe[] {
    const direction = config.direction || 'LEFT'
    const isSlideIn = config.type === 'SLIDE_IN'

    let transform = ''
    switch (direction) {
      case 'LEFT':
        transform = isSlideIn ? 'translateX(-100%)' : 'translateX(100%)'
        break
      case 'RIGHT':
        transform = isSlideIn ? 'translateX(100%)' : 'translateX(-100%)'
        break
      case 'TOP':
        transform = isSlideIn ? 'translateY(-100%)' : 'translateY(100%)'
        break
      case 'BOTTOM':
        transform = isSlideIn ? 'translateY(100%)' : 'translateY(-100%)'
        break
    }

    if (isSlideIn) {
      return [
        { ...fromState, transform },
        { ...toState, transform: 'translate(0, 0)' }
      ]
    } else {
      return [
        { ...fromState, transform: 'translate(0, 0)' },
        { ...toState, transform }
      ]
    }
  }

  /**
   * Build move transition keyframes
   */
  buildMoveKeyframes(
    config: TransitionConfig,
    fromState: Record<string, any>,
    toState: Record<string, any>
  ): Keyframe[] {
    // Similar to slide but with different visual effect
    return this.buildSlideKeyframes(config, fromState, toState)
  }

  /**
   * Build push transition keyframes
   */
  buildPushKeyframes(
    config: TransitionConfig,
    fromState: Record<string, any>,
    toState: Record<string, any>
  ): Keyframe[] {
    const direction = config.direction || 'LEFT'

    let transform = ''
    switch (direction) {
      case 'LEFT':
        transform = 'translateX(-50%)'
        break
      case 'RIGHT':
        transform = 'translateX(50%)'
        break
      case 'TOP':
        transform = 'translateY(-50%)'
        break
      case 'BOTTOM':
        transform = 'translateY(50%)'
        break
    }

    return [
      { ...fromState, transform: 'translate(0, 0)' },
      { ...toState, transform }
    ]
  }

  /**
   * Start transition
   */
  startTransition(
    id: string,
    element: Element,
    config: TransitionConfig,
    fromState: Record<string, any>,
    toState: Record<string, any>
  ): Promise<void> {
    // Cancel existing transition
    this.stopTransition(id)

    const animation = this.createTransition(element, config, fromState, toState)
    this.activeTransitions.set(id, animation)

    animation.play()

    return animation.finished.then(() => {
      this.activeTransitions.delete(id)
    })
  }

  /**
   * Stop transition
   */
  stopTransition(id: string): void {
    const animation = this.activeTransitions.get(id)
    if (animation) {
      animation.cancel()
      this.activeTransitions.delete(id)
    }
  }

  /**
   * Pause transition
   */
  pauseTransition(id: string): void {
    const animation = this.activeTransitions.get(id)
    if (animation) {
      animation.pause()
    }
  }

  /**
   * Resume transition
   */
  resumeTransition(id: string): void {
    const animation = this.activeTransitions.get(id)
    if (animation) {
      animation.play()
    }
  }
}

/**
 * Motion Interpolation Manager
 * Original: Interpolation from various animation files
 */
export class MotionInterpolationManager {
  /**
   * Linear interpolation
   */
  lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t
  }

  /**
   * Interpolate between two values with easing
   */
  interpolate(start: number, end: number, t: number, easing: (t: number) => number): number {
    return this.lerp(start, end, easing(t))
  }

  /**
   * Interpolate colors
   */
  interpolateColor(
    startColor: { r: number; g: number; b: number; a: number },
    endColor: { r: number; g: number; b: number; a: number },
    t: number,
    easing?: (t: number) => number
  ): { r: number; g: number; b: number; a: number } {
    const easedT = easing ? easing(t) : t

    return {
      r: this.lerp(startColor.r, endColor.r, easedT),
      g: this.lerp(startColor.g, endColor.g, easedT),
      b: this.lerp(startColor.b, endColor.b, easedT),
      a: this.lerp(startColor.a, endColor.a, easedT)
    }
  }

  /**
   * Interpolate transforms
   */
  interpolateTransform(
    startTransform: { x: number; y: number; scaleX: number; scaleY: number; rotation: number },
    endTransform: { x: number; y: number; scaleX: number; scaleY: number; rotation: number },
    t: number,
    easing?: (t: number) => number
  ): { x: number; y: number; scaleX: number; scaleY: number; rotation: number } {
    const easedT = easing ? easing(t) : t

    return {
      x: this.lerp(startTransform.x, endTransform.x, easedT),
      y: this.lerp(startTransform.y, endTransform.y, easedT),
      scaleX: this.lerp(startTransform.scaleX, endTransform.scaleX, easedT),
      scaleY: this.lerp(startTransform.scaleY, endTransform.scaleY, easedT),
      rotation: this.lerp(startTransform.rotation, endTransform.rotation, easedT)
    }
  }

  /**
   * Create smooth path interpolation
   */
  interpolatePath(points: { x: number; y: number }[], t: number): { x: number; y: number } {
    if (points.length === 0) return { x: 0, y: 0 }
    if (points.length === 1) return points[0]

    const scaledT = t * (points.length - 1)
    const index = Math.floor(scaledT)
    const localT = scaledT - index

    if (index >= points.length - 1) return points[points.length - 1]

    const start = points[index]
    const end = points[index + 1]

    return {
      x: this.lerp(start.x, end.x, localT),
      y: this.lerp(start.y, end.y, localT)
    }
  }
}

/**
 * Factory Functions
 */

/**
 * Create easing manager
 */
export function createEasingManager(): EasingManager {
  return new EasingManager()
}

/**
 * Create spring animation manager
 */
export function createSpringAnimationManager(): SpringAnimationManager {
  return new SpringAnimationManager()
}

/**
 * Create keyframe animation manager
 */
export function createKeyframeAnimationManager(): KeyframeAnimationManager {
  return new KeyframeAnimationManager()
}

/**
 * Create transition manager
 */
export function createTransitionManager(): TransitionManager {
  return new TransitionManager()
}

/**
 * Create motion interpolation manager
 */
export function createMotionInterpolationManager(): MotionInterpolationManager {
  return new MotionInterpolationManager()
}

/**
 * Convenience Exports
 */
export {
  EasingManager as Easing,
  KeyframeAnimationManager as Keyframes,
  MotionInterpolationManager as Motion,
  SpringAnimationManager as Spring,
  TransitionManager as Transitions
}

/**
 * Default Export - Comprehensive Animation and Transition System
 */
export default {
  EasingManager,
  SpringAnimationManager,
  KeyframeAnimationManager,
  TransitionManager,
  MotionInterpolationManager,
  EASING_FUNCTIONS,
  CUBIC_BEZIER_PRESETS,
  SPRING_PRESETS,
  CSS_EASING_FUNCTIONS,
  createEasingManager,
  createSpringAnimationManager,
  createKeyframeAnimationManager,
  createTransitionManager,
  createMotionInterpolationManager
}
