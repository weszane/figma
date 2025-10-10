// Refactored enum and arrays for better readability and type safety
// Origin: $$n2, $$i1, $$a0

/**
 * Enum representing different node types and search options.
 * Replaces the minified $$n2 variable.
 */
export enum NodeType {
  Text = 0,
  FrameOrGroup = 1,
  Component = 2,
  Instance = 3,
  Image = 4,
  Shape = 5,
  Other = 6,
  MatchCase = 7,
  WholeWords = 8,
}

/**
 * Array of primary node types (excluding search options).
 * Replaces the minified $$i1 variable.
 */
export const primaryNodeTypes = [
  0, 1, 2, 3, 4, 5, 6
] 

/**
 * Array of search-related options.
 * Replaces the minified $$a0 variable.
 */
export const searchOptions = [
  7, 8
]

// Exported constants with descriptive names
export const _V = searchOptions
export const b4 = primaryNodeTypes
export const kM = NodeType
