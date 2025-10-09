// Refactored enum-like object into a proper TypeScript enum and renamed variables for clarity.
// Added type definitions for better type safety and improved function naming.
// Simplified equality check logic with explicit type interfaces.

/**
 * Enum representing different message types for SDK communication.
 * Origin: $$n0
 */
export enum SdkMessageType {
  SDKReady = "sdkReady",
  Call = "call",
  SetProperty = "setProperty",
  GetProperty = "getProperty",
  SetContainerDimensions = "setContainerDimensions",
  Error = "error",
  GetPermissionToShowSurvey = "getPermissionToShowSurvey",
  SurveyClosed = "surveyClosed",
}

/**
 * Compares two objects with optional rect properties for deep equality.
 * Origin: $$i1
 *
 * @param a - First object to compare
 * @param b - Second object to compare
 * @returns True if objects are equal, false otherwise
 */
export function areObjectsEqualWithRect(
  a: { id: string, direction: string, rect?: { x: number, y: number, width: number, height: number } } | undefined,
  b: { id: string, direction: string, rect?: { x: number, y: number, width: number, height: number } } | undefined,
): boolean {
  // Handle cases where either object is undefined
  if (a === undefined || b === undefined) {
    return a === b
  }

  // Compare id and direction
  if (a.id !== b.id || a.direction !== b.direction) {
    return false
  }

  // Handle rect comparison
  if (a.rect === undefined || b.rect === undefined) {
    return a.rect === b.rect
  }

  // Deep compare rect properties
  return (
    a.rect.x === b.rect.x
    && a.rect.y === b.rect.y
    && a.rect.width === b.rect.width
    && a.rect.height === b.rect.height
  )
}

export const G = SdkMessageType
export const m = areObjectsEqualWithRect
