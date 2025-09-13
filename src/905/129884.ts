/**
 * Enum representing the status of an operation or state.
 * Original: $$n5
 */
export enum StatusEnum {
  NONE = 0,
  PENDING = 1,
  SHOWING = 2,
}

/**
 * Enum representing positional directions.
 * Original: $$r3
 */
export enum PositionEnum {
  BELOW = 0,
  LEFT = 1,
  RIGHT = 2,
  ABOVE = 3,
}

/**
 * Enum representing alignment options.
 * Original: $$a4
 */
export enum Alignment {
  CENTER = 0,
  LEFT = 1,
  RIGHT = 2,
}

/**
 * Enum representing types of elements or keys.
 * Original: $$s2
 */
export enum ElementTypeEnum {
  ELEMENT = 0,
  KEY = 1,
  TEXT = 2,
}

/**
 * Enum representing kinds of text or lookups.
 * Original: $$o0
 */
export enum KindEnum {
  TEXT = 'text',
  LOOKUP = 'lookup',
  SPECIAL = 'special',
}

/**
 * Enum representing popup types.
 * Original: $$l1
 */
export enum PopupType {
  HYPERLINK_POPUP = 'tooltip-hyperlink-popup',
}

// Refactored exports with meaningful names matching the new export enum names
// export const Ib = KindEnum
// export const MW = PopupType
// export const Ui = Type
// export const Zj = Type
// export const qd = Alignment
// export const zr = StatusEnum
// Note: The original export names (e.g., $$n5, $$r3) have been replaced with meaningful names (e.g., Status, Position) for better readability and maintainability.
export const Type = PositionEnum
