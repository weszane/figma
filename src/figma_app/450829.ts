// Original code from /Users/allen/sigma-main/src/figma_app/450829.ts
// Refactored to use TypeScript enums for better type safety and readability.
// Grouped related enums together.
// Added JSDoc comments for documentation.
// Ensured same functionality and values as original.

/**
 * Enum for corner positions.
 * Original: $$n0
 */
export enum CornerPosition {
  TOP_RIGHT = "top-right",
  CENTER = "center",
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_RIGHT = "bottom-right",
}

/**
 * Enum for title positions.
 * Original: $$i3
 */
export enum TitlePosition {
  LEFT_TITLE = "left_title",
  RIGHT_TITLE = "right_title",
}

/**
 * Enum for alignments with numeric values.
 * Original: a
 */
export enum Alignment {
  TOP = 0,
  BOTTOM = 1,
  RIGHT_TITLE = 2,
  RIGHT_BODY = 3,
  LEFT_TITLE = 4,
  TOP_RIGHT = 5,
}

/**
 * Enum for modes.
 * Original: s
 */
export enum Mode {
  FALLBACK = "fallback",
  BEST_EFFORT = "best_effort",
}

/**
 * Enum for overlay types.
 * Original: $$o4
 */
export enum OverlayType {
  DRAGGABLE = "draggable",
  FEATURE_UPDATE = "feature_update",
  WELCOME = "welcome",
  SELF_CONTAINED = "self_contained",
  WALK_THROUGH = "walk_through",
  ANNOUNCEMENT_POINTER = "announcement_pointer",
  POINTER = "pointer",
}

/**
 * Constant for maximum width.
 * Original: $$l2
 */
export const MAX_WIDTH = 740;

/**
 * Enum for themes.
 * Original: $$d1
 */
export enum OnTheme {
  ON_DARK = "on_dark",
  ON_LIGHT = "on_light",
  HIGH_CONTRAST = "high_contrast",
  HIDDEN = "hidden",
}

// Refactored exports with meaningful names.
// Original exports: LN = $$n0, _L = $$i3, q3 = $$o4, M_ = $$d1, No = $$l2
export const LN = CornerPosition;
export const _L = TitlePosition;
export const q3 = OverlayType;
export const M_ = OnTheme;
export const No = MAX_WIDTH;
