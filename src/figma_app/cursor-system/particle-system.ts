/**
 * Particle system for cursor animations and effects
 */

import type { Position, TimedTrigger, Vector2D } from './types'
import { Entity, EntityManager } from '../../905/842040'
import { ANIMATION_TIMING, PARTICLE_SYSTEM, RANDOM_SHAKE_VECTORS } from './constants'

/**
 * Base particle class with physics properties
 */
export class Particle extends Entity {
  public type = 'Particle'

  public age = 0

  public velocity: Vector2D = { x: 0, y: 0 }
  public kick: Vector2D = { x: 0, y: 0 }
  public kickDecay = 1
  public gravity: Vector2D = { x: 0, y: 0 }

  constructor(position: Position) {
    super()
    this.position = { ...position }
  }

  /**
   * Fast vector addition with scaling
   */
  static fastVectorAddScaled(target: Vector2D, source: Vector2D, scale: number): void {
    target.x += source.x * scale
    target.y += source.y * scale
  }

  /**
   * Update particle physics
   */
  update(deltaTime: number): boolean {
    // Update position based on velocity
    Particle.fastVectorAddScaled(this.position, this.velocity, deltaTime)

    // Apply kick force
    Particle.fastVectorAddScaled(this.position, this.kick, deltaTime)

    // Decay kick force
    const kickDecayFactor = this.kickDecay ** (deltaTime / PARTICLE_SYSTEM.FRAME_TIME) - 1
    Particle.fastVectorAddScaled(this.kick, this.kick, kickDecayFactor)

    // Apply gravity
    Particle.fastVectorAddScaled(this.velocity, this.gravity, deltaTime)

    // Update age
    this.age += deltaTime

    // Return true if particle should continue to exist
    return this.lifetime ? this.age < this.lifetime : true
  }
}

/**
 * Bubble pop animation entity
 */
export class BubblePopEntity extends Entity {
  public type = 'BubblePopEntity'
  public age = 0
  public sortOrder = -2

  constructor(public position: Position) {
    super()
  }

  update(deltaTime: number): boolean {
    this.age += deltaTime
    return this.age < 1.0 // Animation duration
  }
}

/**
 * Sparkle effect entity
 */
export class SparkleEntity extends Entity {
  public type = 'SparkleEntity'
  public age = 0

  constructor(public position: Position) {
    super()
  }

  update(deltaTime: number): boolean {
    this.age += deltaTime
    return this.age < 0.8 // Animation duration
  }
}

/**
 * Star particle for celebration effects
 */
export class StarParticle extends Entity {
  public type = 'StarParticle'
  public age = 0
  public sortOrder = -0.5

  constructor(position: Position) {
    super()
    this.position = { ...position }
    this.scale = (1 + Math.random()) * 0.3
    this.customData = {
      emissionAngle: Math.random() * Math.PI * 2,
    }
  }

  update(deltaTime: number): boolean {
    this.age += deltaTime
    return this.age < 2.0 // Animation duration
  }
}

/**
 * Timed event entity for scheduling animations
 */
export class TimedEventEntity extends Entity {
  public type = 'TimedEventEntity'
  public position: Position = { x: 0, y: 0 }
  public age = 0

  private timedTriggers: TimedTrigger[]

  constructor(triggers: TimedTrigger[]) {
    super()
    this.timedTriggers = [...triggers]
  }

  update(deltaTime: number): boolean {
    this.age += deltaTime

    // Execute and remove triggered events
    this.timedTriggers = this.timedTriggers.filter((trigger) => {
      if (this.age >= trigger.time) {
        trigger.event()
        return false
      }
      return true
    })

    // Continue existing while there are pending triggers
    return this.timedTriggers.length > 0
  }
}

/**
 * Animated cursor entity for high-five animations
 */
export class AnimatedCursorEntity extends Entity {
  static RANDOM_VECTORS = RANDOM_SHAKE_VECTORS
  public type = 'AnimatedCursorEntity'
  public age = 0
  public lifetime = ANIMATION_TIMING.CURSOR_LIFETIME

  private readonly viewportZoomScale: number
  private readonly cursorOnRightForWindup: boolean
  private readonly cursorOnRightForCollision: boolean

  constructor(config: {
    startingRelativePosition: Position
    startingRotation: number
    position: Position
    viewportZoomScale: number
    cursorOnRightForWindup: boolean
    cursorOnRightForCollision: boolean
    sessionId: string
    getUserCursorTransform: () => { position: Position, rotation: number }
  }) {
    super()
    this.position = { ...config.position }
    this.viewportZoomScale = config.viewportZoomScale
    this.cursorOnRightForWindup = config.cursorOnRightForWindup
    this.cursorOnRightForCollision = config.cursorOnRightForCollision

    if (config.cursorOnRightForCollision) {
      this.sortOrder = -1
    }

    const frameTime = 1000 / 60 // 60fps frame time
    const windupDirection = this.cursorOnRightForWindup ? 1 : -1
    const collisionDirection = this.cursorOnRightForCollision ? 1 : -1

    // Define animation keyframes
    const startKeyframe = {
      transform: `translate(${config.startingRelativePosition.x}px, ${config.startingRelativePosition.y}px) rotate(${config.startingRotation}rad)`,
    }

    const windupKeyframe = {
      transform: `translate(${windupDirection * 90}px, 70px) rotate(${windupDirection}rad) scale(0.9)`,
    }

    const collisionKeyframe = {
      transform: `translate(${collisionDirection * 10}px, 0px) scale(2)`,
    }

    // Create shake keyframes
    const shakeKeyframes = RANDOM_SHAKE_VECTORS.map(vector => ({
      transform: `translate(${10 * vector.x}px, ${10 * vector.y}px) ${collisionKeyframe.transform}`,
    }))

    this.customData = {
      sessionId: config.sessionId,
      animations: [
        {
          keyframes: [startKeyframe, windupKeyframe],
          timing: {
            duration: ANIMATION_TIMING.WINDUP_DURATION * frameTime,
            easing: 'cubic-bezier(.26,.32,.12,1)',
          },
        },
        {
          keyframes: [windupKeyframe, collisionKeyframe],
          timing: {
            delay: ANIMATION_TIMING.WINDUP_DURATION * frameTime,
            duration: ANIMATION_TIMING.COLLISION_DURATION * frameTime,
            easing: 'cubic-bezier(.16,.5,.47,1.25)',
          },
        },
        {
          keyframes: shakeKeyframes,
          timing: {
            delay: (ANIMATION_TIMING.WINDUP_DURATION + ANIMATION_TIMING.COLLISION_DURATION) * frameTime,
            duration: ANIMATION_TIMING.SHAKE_DURATION * frameTime,
            easing: `steps(${shakeKeyframes.length})`,
          },
        },
        {
          keyframes: [collisionKeyframe, collisionKeyframe],
          timing: {
            delay: (ANIMATION_TIMING.WINDUP_DURATION + ANIMATION_TIMING.COLLISION_DURATION + ANIMATION_TIMING.SHAKE_DURATION) * frameTime,
            duration: ANIMATION_TIMING.HOLD_DURATION * frameTime,
          },
        },
      ],
      getReturnToCursorTransform: (progress: number) => {
        const currentOffset = collisionDirection * 10
        const currentTransform = config.getUserCursorTransform()
        const targetX = (currentTransform.position.x - this.position.x) * this.viewportZoomScale
        const targetY = (currentTransform.position.y - this.position.y) * this.viewportZoomScale
        const targetRotation = currentTransform.rotation

        return `translate(${this.lerp(currentOffset, targetX, progress)}px,${this.lerp(0, targetY, progress)}px) rotate(${this.lerp(0, targetRotation, progress)}rad) scale(${this.lerp(2, 1, progress)})`
      },
    }
  }

  private lerp(start: number, end: number, progress: number): number {
    return start * (1 - progress) + end * progress
  }

  update(deltaTime: number): boolean {
    this.age += deltaTime
    return this.age < this.lifetime
  }
}

/**
 * Particle system manager
 */
export class ParticleSystem extends EntityManager {
  constructor() {
    super()
  }

  public readonly MAX_PARTICLES = PARTICLE_SYSTEM.MAX_PARTICLES

  /**
   * Add a particle to the system
   */
  addParticle(particle: Entity): void {
    if (this.getParticles().length < this.MAX_PARTICLES) {
      this.addEntity(particle)
    }
  }

  /**
   * Get all particles in the system
   */
  getParticles(): Entity[] {
    return this.getEntities().filter(entity => entity instanceof Particle)
  }
}
