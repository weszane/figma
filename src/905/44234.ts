// Refactored enum and export for better readability and type safety
// Original code name: $$n0 and h

/**
 * Enum representing different export or save options.
 * Each option maps to a unique numeric value.
 */
export enum ExportOption {
  SaveLocalFile = 0,
  Export = 1,
  CopyAsPNG = 2,
  CopyAsSVG = 3,
  RasterizeSelection = 4,
}

// Alias for the enum to match the original export name
export const h = ExportOption
