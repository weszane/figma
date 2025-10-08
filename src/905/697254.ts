// Origin: /Users/allen/github/fig/src/905/697254.ts
// Refactored: Renamed variables, added enums for type safety, improved readability, added comments

/**
 * Enum representing overview categories.
 */
export enum OverviewCategory {
  OVERVIEW = "Overview",
  ANALYTICS = "Library Analytics",
}

/**
 * Enum representing value types.
 */
export enum StatValueType {
  STAT = "stat",
  DESCRIPTION_AND_IMAGE = "description_and_image",
}

// Exporting enums for use in other modules.
// Assumed: No external dependencies required.
export const R = OverviewCategory;
export const V = StatValueType;
