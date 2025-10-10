// Refactored from minified code: renamed variables, added TypeScript enums for better type safety and readability

/**
 * Enum representing different library types as string values.
 * Origin: $$$$n1 variable in minified code.
 */
export enum LibraryTypeString {
  PRODUCT_COMPONENTS = "components",
  STYLES = "styles",
  VARIABLES = "variables",
}

/**
 * Enum representing different library types as numeric indices.
 * Origin: $$r0 variable in minified code.
 */
export enum LibraryTypeIndex {
  PRODUCT_COMPONENTS,
  STYLES,
  VARIABLES,
  VARIABLE_MODES,
  FILES,
}

// Export the refactored enums with original export names
export const l = LibraryTypeIndex
export const n = LibraryTypeString
