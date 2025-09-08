/**
 * Represents a session-local identifier pair.
 * (Original: $$n2)
 */
export const defaultSessionLocalID: SessionLocalID = {
  sessionID: -1,
  localID: -1,
}

/**
 * Default session-local ID string.
 * (Original: $$r0)
 */
export const defaultSessionLocalIDString = '-1:-1'

/**
 * Default session-local ID array string.
 * (Original: $$a8)
 */
export const defaultSessionLocalIDArrayString = '[-1:-1]'

/**
 * Default session-local ID string array.
 * (Original: $$s1)
 */
export const defaultSessionLocalIDStringArray = ['-1:-1']

/**
 * Zero session-local ID string.
 * (Original: $$o3)
 */
export const zeroSessionLocalIDString = '0:0'

/**
 * Type for session-local identifier pair.
 */
export interface SessionLocalID {
  sessionID: number
  localID: number
}

/**
 * Checks if the given object is a valid SessionLocalID.
 * (Original: $$l6)
 * @param id - The object to check.
 * @returns True if valid, false otherwise.
 */
export function isValidSessionLocalID(id: SessionLocalID | null | undefined): boolean {
  return !!id && (0 | id.localID) >= 0 && (0 | id.sessionID) >= 0
}

/**
 * Compares two SessionLocalID objects for equality.
 * (Original: $$d4)
 * @param a - First SessionLocalID.
 * @param b - Second SessionLocalID.
 * @returns True if equal, false otherwise.
 */
export function areSessionLocalIDsEqual(a: SessionLocalID | null | undefined, b: SessionLocalID | null | undefined): boolean {
  return a && b ? a.sessionID === b.sessionID && a.localID === b.localID : a === b
}

/**
 * Converts a SessionLocalID to its string representation.
 * (Original: $$c5)
 * @param id - The SessionLocalID.
 * @returns String representation or null.
 */
export function sessionLocalIDToString(id: SessionLocalID | null | undefined): string | null {
  return id ? `${0 | id.sessionID}:${0 | id.localID}` : null
}

/**
 * Parses a string into a SessionLocalID object.
 * (Original: $$u7)
 * @param str - The string to parse.
 * @returns SessionLocalID object or null.
 */
export function parseSessionLocalID(str: string | null | undefined): SessionLocalID | null {
  if (!str)
    return null
  const parts = str.split(':')
  if (!parts || parts.length !== 2)
    return null
  let sessionID = -1
  let localID = -1
  try {
    sessionID = parseInt(parts[0])
    localID = parseInt(parts[1])
  }
  catch {
    return null
  }
  return isFinite(sessionID) && isFinite(localID)
    ? { sessionID, localID }
    : null
}

// Export aliases for backward compatibility (original export names)
export const AD = defaultSessionLocalIDString
export const EP = defaultSessionLocalIDStringArray
export const Hr = defaultSessionLocalID
export const Xy = zeroSessionLocalIDString
export const aI = areSessionLocalIDsEqual
export const dI = sessionLocalIDToString
export const fn = isValidSessionLocalID
export const sH = parseSessionLocalID
export const x7 = defaultSessionLocalIDArrayString
