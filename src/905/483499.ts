// Origin: /Users/allen/github/fig/src/905/483499.ts
// Refactored: Renamed variables, added enum type, improved readability, added comments.
// - Converted minified enum to TypeScript enum with clear names.
// - Exported the enum directly for type safety and clarity.

/**
 * Represents the different types of sidebar items.
 */
export enum FSidebarItemType {
  Folder = 0,
  Team = 1,
  Favorite = 2,
  SidebarSection = 3,
  LicenseGroup = 4,
  None = 5,
}

// Export alias for backward compatibility (if needed elsewhere in codebase)
export const R = FSidebarItemType;

// Note: Assumes no external dependencies.
// The original code used a minified variable name ($$n0) and an IIFE to create a numeric/string enum.
// This refactor uses a TypeScript enum for clarity and type safety.
