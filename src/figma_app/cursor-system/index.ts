/**
 * Cursor System - Main exports
 *
 * A comprehensive system for managing cursor interactions, animations,
 * chat functionality, and particle effects in Figma.
 */

export { ChatAnimationSystem } from './chat/chat-animations'

export type { ChatAnimationState, RumbleKeyframe } from './chat/chat-animations'
// Chat system
export { EmoteSystem } from './chat/emote-system'
// Chat emote types
export type { EmoteReaction } from './chat/emote-system'

export { CollisionDetector } from './collision-detector'
// Constants and configuration
export {
  ANIMATION_TIMING,
  BackgroundEffectType,
  CHAT_ANIMATION,
  CURSOR_COLLISION_RADIUS,
  CURSOR_POSITIONING,
  CursorAnimationType,
  PARTICLE_SYSTEM,
  RANDOM_SHAKE_VECTORS,
  WIGGLE_MODE_MOVEMENT,
  WIGGLE_MODE_SHAKE,
  WIGGLE_MODE_TIMING,
} from './constants'

// Main system

export { AnimatedCursorEntity, BubblePopEntity, Particle, ParticleSystem, SparkleEntity, StarParticle, TimedEventEntity } from './particle-system'

// Types
export type {
  AnimatedCursorData,
  AnimationKeyframe,
  AnimationTiming,
  BoundingBox,
  ChatAction,
  ChatState,
  CursorAnimation,
  CursorCollisionPair,
  CursorState,
  CursorSystemComponents,
  CursorTransform,
  EmoteKeywordMatch,
  Entity,
  CollisionDetector as ICollisionDetector,
  ParticleSystem as IParticleSystem,
  WiggleDetector as IWiggleDetector,
  MousePosition,
  ParticleGravity,
  ParticleKick,
  ParticleVelocity,
  Position,
  TimedTrigger,
  Vector2D,
  ViewportInfo,
  WiggleDetectorState,
} from './types'

// Utilities
export {
  calculateChatStateWidth,
  calculateCursorTransform,
  calculateDistance,
  calculateMidpoint,
  clamp,
  createCursorMap,
  createSelectionBoxStyle,
  debounce,
  deepClone,
  degreesToRadians,
  formatSessionId,
  hasAnimatedCursorForSession,
  isCursorValidForInteraction,
  isInRange,
  isValidPosition,
  lerp,
  measureTextWidth,
  normalizeVector,
  radiansToDegrees,
  randomInRange,
  shouldShowCursorInteractions,
  throttle,
} from './utils'
// Core components
export { WiggleDetector } from './wiggle-detector'
