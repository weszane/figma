/**
 * View mode enumeration for swatch display
 * Original name: $$n3
 */
export enum GridListViewMode {
  GRID = 0,
  LIST = 1,
}

/**
 * Constant identifier for current page swatch set
 * Original name: $$r0
 */
export const CURRENT_PAGE_SWATCH_SET_ID = "current-page-swatch-set-id"

/**
 * Constant identifier for local swatch set
 * Original name: $$a1
 */
export const LOCAL_SWATCH_SET_ID = "local-swatch-set-id"

/**
 * Type guard function to check if a value is a valid swatch set ID
 * Original name: $$s2
 * @param value - The value to check
 * @returns True if the value is either CURRENT_PAGE_SWATCH_SET_ID or LOCAL_SWATCH_SET_ID
 */
export function isSwatchSetId(value: string): boolean {
  return value === CURRENT_PAGE_SWATCH_SET_ID || value === LOCAL_SWATCH_SET_ID
}

// Exported constants with meaningful names
export const EU = CURRENT_PAGE_SWATCH_SET_ID
export const KV = LOCAL_SWATCH_SET_ID
export const _U = isSwatchSetId
export const nE = GridListViewMode
