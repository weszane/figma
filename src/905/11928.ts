/**
 * Enum for position types (original: $$n0).
 */
export enum Ui3PositionType {
  BOTTOM_RIGHT = 'bottom_right',
  CENTER = 'center',
  EDITOR_TOP_LEFT = 'editor_top_left',
  UI3_EDITOR_TOP_LEFT = 'ui3_editor_top_left',
}

/**
 * Enum for modal types (original: $$r1).
 */
export enum NotModalType {
  TERTIARY_MODAL = 'TERTIARY_MODAL',
  SECONDARY_MODAL = 'SECONDARY_MODAL',
  MODAL = 'MODAL',
  UNSET = 'UNSET',
  NOTIFICATION_MODAL = 'NOTIFICATION_MODAL',
}

// Refactored exports to match new names
export const Q = Ui3PositionType; // original: Q
export const R = NotModalType;    // original: R
