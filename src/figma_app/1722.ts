/**
 * Enum for feature status states
 * Original name: $$n0
 */
export enum FeatureStatusEnum {
  FEATURE_DISABLED = 0,
  READ_ONLY_FILE = 1,
}

/**
 * Enum for mobile UI states
 * Original name: $$i1
 */
export enum MobileUIStateEnum {
  MOBILE_NATIVE_NAVBAR = 0,
}

/**
 * Enum for gesture event phases
 * Original name: $$a2
 */
export enum GesturePhaseEnum {
  BEGAN = 0,
  MOVED = 1,
  ENDED = 2,
  CANCELLED = 3,
  MOVED_COALESCED = 4,
}

// Export with original export names for compatibility
export const lj = FeatureStatusEnum
export const wu = MobileUIStateEnum
export const xN = GesturePhaseEnum
