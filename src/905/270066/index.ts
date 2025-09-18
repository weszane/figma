/**
 * Main API for ICC profile parsing and color space matching.
 *
 * Usage:
 *   import { detectColorSpace, ColorSpaceEnum, ICCProfile } from './index';
 *   const colorSpace = detectColorSpace(arrayBufferOrUint8Array);
 */

import { matchColorSpace } from './colorSpaceMatcher'
import { ICCProfile, parseICCProfile } from './iccParser'

/**
 * Detects the color space of an ICC profile from ArrayBuffer or Uint8Array.
 * Throws an error if the color space cannot be determined.
 *
 * @param data - ICC profile data as ArrayBuffer or Uint8Array
 * @returns ColorSpaceEnum (e.g., sRGB, Display P3)
 */
export function detectColorSpace(data: ArrayBuffer | Uint8Array) {
  const profile: ICCProfile = parseICCProfile(data)
  return matchColorSpace(profile)
}

export { ICCProfile }

export const Y = detectColorSpace
