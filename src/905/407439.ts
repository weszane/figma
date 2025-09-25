/**
 * Status codes for entity changes (original: $$n1)
 */
export const ENTITY_STATUS_CODES = {
  CREATED: "ADD",
  MODIFIED: "MOD",
  REMOVED: "DEL"
};

/**
 * Symbols representing entity changes (original: $$r0)
 */
export const ENTITY_STATUS_SYMBOLS = {
  CREATED: "+",
  MODIFIED: "\u2732",
  CHILD_MODIFIED: "\u21B5",
  REMOVED: "-"
};

// Refactored exports to use new names
export const x = ENTITY_STATUS_SYMBOLS;
export const z = ENTITY_STATUS_CODES;
