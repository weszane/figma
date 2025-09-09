/**
 * @fileoverview Refactored enums for notification and visual bell types.
 * Original variable names: $$n4, $$r0, $$a3, $$s1, $$o2
 */

/**
 * Enum for visual bell icons.
 * Original: $$n4
 */
export enum VisualBellIcon {
  NONE = 0,
  SPINNER = 1,
  IMAGE_BACKED_SPINNER = 2,
  CHECK = 3,
  GREEN_CHECK = 4,
  CHECK_WITH_CIRCLE = 5,
  EXCLAMATION = 6,
  RETURN_TO_INSTANCE = 7,
  PROGRESS = 8,
  UNDO = 9,
  FROM_URL = 10,
  NOTES_ON_RECTANGLE = 11,
  STACK_SELECTION = 12,
  CLOSE_FILLED = 13,
  EYEDROPPER = 14,
  BRUSH = 15,
  SPARKLE = 16,
  PICK = 17,
  WARNING_EXCLAMATION_WITH_TRIANGLE = 18,
  OFFLINE = 19,
  DESIGN_MODE = 20,
}

/**
 * Enum for visual bell shapes.
 * Original: $$r0
 */
export enum VisualBellShape {
  SQUARE = 0,
  CIRCLE = 1,
}

/**
 * Enum for bell IDs.
 * Original: $$a3
 */
export enum BellId {
  FILE_MOVE_FOLDER_BELL_ID = 0,
  SITES_PUBLISH_SUCCESS_BELL_ID = 1,
  FIGMAKE_PUBLISH_SUCCESS_BELL_ID = 2,
}

/**
 * Enum for visual bell types.
 * Original: $$s1
 */
export enum VisualBellType {
  UPSELL_LIBRARIES_COMPONENT_CREATION_NUDGE = "visual-bell-upsell-library-component-creation-nudge",
  SLIDES_REMOVE_AUTO_LAYOUT = "slides-remove-auto-layout",
  SLIDE_CONVERSION_VISUAL_BELL = "slide-conversion-visual-bell",
  BOARD_TO_DECK_FEEDBACK = "board-to-deck-feedback",
  FIRST_DRAFT_FEEDBACK = "first-draft-feedback",
  SLIDES_OUTLINE_TO_DECK_FEEDBACK = "slides-outline-to-deck",
  DESIGN_LINTER_COPY_SELECTION = "design-linter-copy-selection",
}

/**
 * Enum for visual bell dismiss reasons.
 * Original: $$o2
 */
export enum VisualBellDismissReason {
  TIMEOUT = "timeout",
  DISMISS = "dismiss",
  ACTION_BUTTON_CLICKED = "action_button_click",
}

// Refactored exports to match new enum names
export const Ox = VisualBellShape;
export const Rw = VisualBellType;
export const WX = VisualBellDismissReason;
export const XU = BellId;
export const zX = VisualBellIcon;
