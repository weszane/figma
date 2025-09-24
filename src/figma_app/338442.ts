// Original code variables: $$n1, $$i2, $$a0, $$s3
// Refactored into proper TypeScript enums for better readability and maintainability.
// Grouped related constants into logical enums based on their apparent domains (properties, instance types, control types, search types).

/**
 * Enum representing different property types for nodes or elements.
 * Original: $$n1
 */
export enum SlotSymbolType {
  VISIBLE = 'visible',
  TEXT = 'text-data',
  OVERRIDDEN_SYMBOL_ID = 'overridden-symbol-id',
  SLOT_CONTENT_ID = 'slot-content-id',
}

/**
 * Enum representing instance types.
 * Original: $$i2
 */
export enum InstanceType {
  TYPED = 'typed',
  VARIANT = 'variant',
}

/**
 * Enum representing control types for UI elements.
 * Original: $$a0
 */
export enum ControlType {
  DEFAULT = 'default',
  SLIDER = 'slider',
  INPUT = 'input',
  SELECT = 'select',
}

/**
 * Enum representing search types.
 * Original: $$s3
 */
export enum GPTSearchType {
  GPT = 'GPT',
  FS = 'FRAGMENT_SEARCH',
}

// Export the enums with meaningful names, maintaining original export aliases for compatibility.
// Original exports: Jr = $$a0, RR = $$n1, uN = $$i2, z_ = $$s3
export const Jr = ControlType
export const RR = SlotSymbolType
export const uN = InstanceType
export const z_ = GPTSearchType
