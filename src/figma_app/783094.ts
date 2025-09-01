/**
 * Parses a pixel value string (e.g., "12px") and returns the integer part.
 * @param value - The pixel value as a string.
 * @returns The integer part of the pixel value.
 * @originalName $$n2
 */
export function parsePxInt(value: string): number {
  return parseInt(value.split("px")[0]);
}

/**
 * Parses a pixel value string (e.g., "12px") and returns the numeric part.
 * @param value - The pixel value as a string.
 * @returns The numeric part of the pixel value.
 * @originalName $$i3
 */
export function parsePxNumber(value: string): number {
  return Number(value.split("px")[0]);
}

/**
 * Parses a millisecond value string (e.g., "300ms") and returns the numeric part.
 * @param value - The millisecond value as a string.
 * @returns The numeric part of the millisecond value.
 * @originalName $$a0
 */
export function parseMsNumber(value: string): number {
  return Number(value.split("ms")[0]);
}

/**
 * Parses a percentage value string (e.g., "50%") and returns the numeric part.
 * @param value - The percentage value as a string.
 * @returns The numeric part of the percentage value.
 * @originalName $$s1
 */
export function parsePercentNumber(value: string): number {
  return Number(value.split("%")[0]);
}

// Aliases for backward compatibility with original exports
export const XB = parseMsNumber; // original: XB = $$a0
export const c8 = parsePercentNumber; // original: c8 = $$s1
export const hG = parsePxInt; // original: hG = $$n2
export const jz = parsePxNumber; // original: jz = $$i3
