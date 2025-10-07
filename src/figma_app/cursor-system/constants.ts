/**
 * Constants and configuration for the cursor system
 */

// Cursor collision and interaction constants
export const CURSOR_COLLISION_RADIUS = 80;

// Wiggle mode timing constants
export const WIGGLE_MODE_TIMING = {
  DEACTIVATION_TIME: 6,
  ABOUT_TO_HIDE_TIME: 3,
  HIGH_FIVE_KEY_TIME: 0.5,
  MOUSE_RESET_TIME: 0.6,
  LEAVE_CANVAS_GRACE_PERIOD: 0.3,
} as const;

// Wiggle mode movement constants
export const WIGGLE_MODE_MOVEMENT = {
  SENSITIVITY: 4e-5,
  MIN_TIME: 0.1,
  DECAY_TIME: 1.5,
} as const;

// Wiggle mode shake detection constants
export const WIGGLE_MODE_SHAKE = {
  MIN_SHAKES_TO_TRIGGER: 6.5,
  REPLENISH_SHAKES: 3.5,
  GRACE_PERIOD: 0.3,
  RESET_TIME: 0.5,
} as const;

// Particle system constants
export const PARTICLE_SYSTEM = {
  MAX_PARTICLES: 512,
  FRAME_TIME: 0.016, // 60fps
} as const;

// Animation timing constants
export const ANIMATION_TIMING = {
  CURSOR_LIFETIME: 0.85,
  WINDUP_DURATION: 12, // frames
  COLLISION_DURATION: 4, // frames
  SHAKE_DURATION: 4, // frames
  HOLD_DURATION: 18, // frames
} as const;

// Background effect types
export enum BackgroundEffectType {
  PINK_GRADIENT = 'PINK_GRADIENT',
  ORANGE_GRADIENT = 'ORANGE_GRADIENT',
  GRAY_BACKGROUND = 'GRAY_BACKGROUND',
  GLARE_ANIMATION = 'GLARE_ANIMATION',
  NONE = 'NONE',
}

// Cursor animation types
export enum CursorAnimationType {
  Standard = 0,
}

// Random vectors for cursor shake animation
export const RANDOM_SHAKE_VECTORS = [
  { x: 0.626086772987037, y: -0.24715772511262912 },
  { x: 0.16558013014491735, y: -0.4962441097195551 },
] as const;

// Chat animation constants
export const CHAT_ANIMATION = {
  RUMBLE_DURATION: 100,
  FADE_DELAY: 1000,
  MIN_FADE_STEP: 250,
} as const;

// Cursor positioning constants
export const CURSOR_POSITIONING = {
  BASE_OFFSET: 32,
  COLLISION_OFFSET: 16,
  WINDUP_DISTANCE: 90,
  WINDUP_VERTICAL_OFFSET: 70,
  COLLISION_SCALE: 2,
  WINDUP_SCALE: 0.9,
  SHAKE_AMPLITUDE: 10,
} as const;
