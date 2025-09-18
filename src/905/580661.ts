// Original file: /Users/allen/github/fig/src/905/580661.ts

// Enum for image orientations (originally $$n0)
export enum OrientationEnum {
  ROTATE_0 = 0,
  ROTATE_90 = 1,
  ROTATE_180 = 2,
  ROTATE_270 = 3,
  FLIP_ROTATE_0 = 4,
  FLIP_ROTATE_90 = 5,
  FLIP_ROTATE_180 = 6,
  FLIP_ROTATE_270 = 7,
}

// Enum for endianness (originally r)
enum EndiannessEnum {
  BIG = 0,
  LITTLE = 1,
}

// Interface for a pointer-like object to track position in byte array
interface BytePointer {
  value: number
}

/**
 * Reads a 16-bit unsigned integer from the byte array at the current pointer position.
 * @param data - The byte array.
 * @param pointer - The current position pointer.
 * @param endianness - 1 for little-endian, 0 for big-endian.
 * @returns An object with the read value, or null if out of bounds.
 */
function readUint16(data: Uint8Array, pointer: BytePointer, endianness: number): { value: number } | null {
  if (pointer.value + 2 > data.length) {
    return null
  }
  const byte1 = data[pointer.value]
  const byte2 = data[pointer.value + 1]
  pointer.value += 2
  return {
    value: endianness === 1 ? byte1 | (byte2 << 8) : byte2 | (byte1 << 8),
  }
}

/**
 * Reads a 32-bit unsigned integer from the byte array at the current pointer position.
 * @param data - The byte array.
 * @param pointer - The current position pointer.
 * @param endianness - 1 for little-endian, 0 for big-endian.
 * @returns An object with the read value, or null if out of bounds.
 */
function readUint32(data: Uint8Array, pointer: BytePointer, endianness: number): { value: number } | null {
  if (pointer.value + 4 > data.length) {
    return null
  }
  const byte1 = data[pointer.value]
  const byte2 = data[pointer.value + 1]
  const byte3 = data[pointer.value + 2]
  const byte4 = data[pointer.value + 3]
  pointer.value += 4
  return {
    value: endianness === 1
      ? byte1 | (byte2 << 8) | (byte3 << 16) | (byte4 << 24)
      : byte4 | (byte3 << 8) | (byte2 << 16) | (byte1 << 24),
  }
}

/**
 * Reads an 8-bit unsigned integer from the byte array at the current pointer position.
 * @param data - The byte array.
 * @param pointer - The current position pointer.
 * @returns An object with the read value, or null if out of bounds.
 */
function readUint8(data: Uint8Array, pointer: BytePointer): { value: number } | null {
  if (pointer.value + 1 > data.length) {
    return null
  }
  const value = data[pointer.value]
  pointer.value += 1
  return { value }
}

/**
 * Parses the EXIF data from a JPEG byte array to extract orientation.
 * @param data - The JPEG byte array.
 * @returns The orientation value (0-7) or null if not found.
 */
function parseExifOrientation(data: Uint8Array): number | null {
  // Check for JPEG SOI marker
  const soi = [255, 216, 255]
  if (data.length < soi.length) {
    return null
  }
  for (let i = 0; i < soi.length; i++) {
    if (soi[i] !== data[i]) {
      return null
    }
  }

  const pointer: BytePointer = { value: 2 }

  while (pointer.value + 4 <= data.length) {
    const marker = readUint16(data, pointer, 0)
    if (!marker || (marker.value >> 8) !== 255) {
      break
    }
    const length = readUint16(data, pointer, 0)
    if (!length || length.value < 2) {
      break
    }

    if (marker.value === 65505) { // APP1 marker
      return parseApp1Exif(data, pointer.value)
    }

    pointer.value += length.value
  }

  return null
}

/**
 * Parses the APP1 EXIF segment to extract orientation.
 * @param data - The JPEG byte array.
 * @param start - The start position of the APP1 segment.
 * @returns The orientation value (0-7) or null if not found.
 */
function parseApp1Exif(data: Uint8Array, start: number): number | null {
  const pointer: BytePointer = { value: start }

  const length = readUint16(data, pointer, 0)
  if (!length || length.value < 6) {
    return null
  }

  const exifHeader = readUint32(data, pointer, 0)
  if (!exifHeader || exifHeader.value !== 0x45786966) { // "Exif"
    return null
  }

  const padding = readUint16(data, pointer, 0)
  if (!padding || padding.value !== 0) {
    return null
  }

  const tiffHeader = readUint32(data, pointer, 0)
  if (!tiffHeader || (tiffHeader.value !== 0x49492A00 && tiffHeader.value !== 0x4D4D002A)) {
    return null
  }

  const endianness = tiffHeader.value === 0x49492A00 ? 1 : 0 // 1: little-endian, 0: big-endian

  const ifdOffset = readUint32(data, pointer, endianness)
  if (!ifdOffset) {
    return null
  }

  pointer.value = pointer.value + ifdOffset.value - 8

  const ifdCount = readUint16(data, pointer, endianness)
  if (!ifdCount) {
    return null
  }

  for (let i = 0; i < ifdCount.value; i++) {
    const tag = readUint16(data, pointer, endianness)
    if (!tag)
      break
    const type = readUint16(data, pointer, endianness)
    if (!type)
      break
    const count = readUint32(data, pointer, endianness)
    if (!count)
      break

    if (tag.value === 274 && count.value === 1) { // Orientation tag
      const valuePointer: BytePointer = { value: pointer.value }
      pointer.value += 4 // Skip to next IFD entry

      let orientationValue: number | null = null
      if (type.value === 1) { // BYTE
        const val = readUint8(data, valuePointer)
        if (val)
          orientationValue = val.value
      }
      else if (type.value === 3) { // SHORT
        const val = readUint16(data, valuePointer, endianness)
        if (val)
          orientationValue = val.value
      }
      else if (type.value === 4 || type.value === 9) { // LONG or SLONG
        const val = readUint32(data, valuePointer, endianness)
        if (val)
          orientationValue = val.value
      }

      if (orientationValue !== null) {
        switch (orientationValue) {
          case 1: return OrientationEnum.ROTATE_0
          case 6: return OrientationEnum.ROTATE_90
          case 3: return OrientationEnum.ROTATE_180
          case 8: return OrientationEnum.ROTATE_270
          case 2: return OrientationEnum.FLIP_ROTATE_0
          case 5: return OrientationEnum.FLIP_ROTATE_90
          case 4: return OrientationEnum.FLIP_ROTATE_180
          case 7: return OrientationEnum.FLIP_ROTATE_270
        }
      }
    }
    else {
      pointer.value += 4 // Skip value offset
    }
  }

  return null
}

/**
 * Utility object for image orientation handling (originally $$o1).
 */
export const ImageOrientationUtils = {
  /**
   * Gets the orientation from a JPEG byte array.
   * @param data - The JPEG byte array.
   * @returns The orientation value (0-7) or null if not found.
   */
  getOrientation: (data: Uint8Array): number | null => parseExifOrientation(data),

  /**
   * Converts an orientation value to its corresponding angle in degrees.
   * @param orientation - The orientation value (0-7).
   * @returns The angle in degrees.
   */
  angleFromOrientation: (orientation: number): number => {
    switch (orientation) {
      case OrientationEnum.ROTATE_90:
      case OrientationEnum.FLIP_ROTATE_90:
        return 90
      case OrientationEnum.ROTATE_180:
      case OrientationEnum.FLIP_ROTATE_180:
        return 180
      case OrientationEnum.ROTATE_270:
      case OrientationEnum.FLIP_ROTATE_270:
        return 270
      case OrientationEnum.ROTATE_0:
      case OrientationEnum.FLIP_ROTATE_0:
      default:
        return 0
    }
  },

  /**
   * Checks if the orientation indicates a flipped image.
   * @param orientation - The orientation value (0-7).
   * @returns True if flipped, false otherwise.
   */
  orientationIsFlipped: (orientation: number): boolean =>
    orientation === OrientationEnum.FLIP_ROTATE_0
    || orientation === OrientationEnum.FLIP_ROTATE_90
    || orientation === OrientationEnum.FLIP_ROTATE_180
    || orientation === OrientationEnum.FLIP_ROTATE_270,
}

// Exports with refactored names
export const a = OrientationEnum
export const Endianness = EndiannessEnum
export const f = ImageOrientationUtils
