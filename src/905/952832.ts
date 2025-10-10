// Refactored TypeScript enums with clear naming and explicit types
// Renamed variables from minified names to readable ones, added TypeScript enum types

/**
 * Enum representing different scope levels for user context
 * Origin: $$n1
 */
export enum UserContextScope {
  CURRENT_USER = 0,
  TEAM = 1,
  ORG = 2,
  WORKSPACE = 3,
}

/**
 * Enum representing different states of an upload process
 * Origin: $$r2
 */
export enum UploadState {
  INIT = 0,
  POSITIONING = 1,
  UPLOADING = 2,
}

/**
 * Enum representing avatar size options
 * Origin: $$a0
 */
export enum SLSize {
  SMALL = 120,
  LARGE = 500,
}

// Export with original names but pointing to refactored enums
export const Pf = SLSize
export const ck = UserContextScope
export const hv = UploadState
