/**
 * Type definitions for the cursor system
 */

import type { PaintTools } from '../13528'
import type { BackgroundEffectType } from './constants'

export interface Vector2D {
  x: number
  y: number
}

/**
 * Represents an entity in the system with properties like position, rotation, scale, age, and lifetime.
 * Original class name: $$n1
 */

export interface Position {
  x: number
  y: number
}

export interface CursorTransform {
  position: Position
  rotation: number
}

export interface MousePosition extends Position {
  overCanvas?: boolean
}

export interface CursorState {
  sessionId: string
  deviceName: string
  mouse?: {
    canvasSpacePosition: Position | null
    pageId: string
  }
  lastMouseMoveMs: number
  highFiveStatus: boolean
  cursorType: PaintTools
  focusOnTextCursor?: boolean
  isHoveringWidgetWithHiddenCursors: boolean
}

export interface ViewportInfo {
  zoomScale: number
  position: Position
}

export interface BoundingBox {
  x: number
  y: number
  w: number
  h: number
}

export interface TimedTrigger {
  time: number
  event: () => void
}

export interface ParticleVelocity {
  x: number
  y: number
}

export interface ParticleKick {
  x: number
  y: number
}

export interface ParticleGravity {
  x: number
  y: number
}

export interface AnimationKeyframe {
  transform: string
}

export interface AnimationTiming {
  duration: number
  delay?: number
  easing: string
}

export interface CursorAnimation {
  keyframes: AnimationKeyframe[]
  timing: AnimationTiming
}

export interface AnimatedCursorData {
  sessionId: string
  animations: CursorAnimation[]
  getReturnToCursorTransform: (progress: number) => string
}

export type CursorCollisionPair = [CursorState, CursorState]

export interface WiggleDetectorState {
  wiggleMeter: number
  wiggleMode: boolean
  lastUpdateTime: number
  shakeFactor: number
  shakeGracePeriod: number
  speedFactor: number
  mouseX: number
  mouseY: number
  hasLastMousePosition: boolean
  lastMouseX: number
  lastMouseY: number
  lastDirectionX: number
  lastDirectionY: number
  mouseLeftCanvas: boolean
  highFiveKeyPressed: boolean
  mouseButtonHeld: boolean
}

export interface ChatState {
  currentUserInput: string
  previousLine: string
  fadingOutText: string
  isWidthLocked: boolean
  isShowingEmptyNewline: boolean
  inputIsEmpty: boolean
  currentEmoteBackground: BackgroundEffectType
  width: number
  isFigJam: boolean
  isFadingInactiveChat: boolean
  shouldClose: boolean
  hasTypedAnything: boolean
}

export interface ChatAction {
  type: string
  payload: any
}

export interface EmoteKeywordMatch {
  key: string
  background: BackgroundEffectType
}

export interface CursorSystemComponents {
  cursorWiggleDetector: WiggleDetector
  cursorEntitySystem: ParticleSystem
  cursorCollisionDetector: CollisionDetector
  cursorKinematics: any // Type from external dependency
}

// Abstract base classes (these would extend from external dependencies)
export interface Entity {
  type: string
  position: Position
  age: number
  lifetime?: number
  sortOrder?: number
  scale?: number
  customData?: any
  update: (deltaTime: number) => boolean
}

export interface WiggleDetector {
  getWiggleMode: () => boolean
  getShakeFactor: () => number
  getAboutToHide: () => boolean
  onWiggleModeChange: (callback: (wiggleMode: boolean) => void) => () => void
  setWiggleMode: (mode: boolean) => void
  setMouseLeftCanvas: (leftCanvas: boolean) => void
  getMouseLeftCanvas: () => boolean
  setHighFiveKeyPressed: (pressed: boolean) => void
  getHighFiveKeyPressed: () => boolean
  setMouseButtonHeld: (held: boolean) => void
  getMousePosition: () => MousePosition
  stopWigglingNow: () => void
  startOrRefreshWiggle: () => void
  getDeltaTime: () => number
  update: (mousePosition?: Position, deltaTime?: number) => void
}

export interface ParticleSystem {
  MAX_PARTICLES: number
  addParticle: (particle: Entity) => void
  getParticles: () => Entity[]
  addEntity: (entity: Entity) => void
  getEntities: () => Entity[]
}

export interface CollisionDetector {
  updateAndCheckCollisions: (cursors: CursorState[]) => CursorCollisionPair[]
}
