import { inflate } from 'pako'

/**
 * Extracts ICC profile data from a JPEG image buffer.
 * Original function: $$r2
 * @param buffer - The JPEG image buffer as Uint8Array.
 * @returns The concatenated ICC profile data or null if incomplete.
 */
export function extractIccProfileFromJpeg(buffer: Uint8Array): Uint8Array | null {
  const profiles: { [key: number]: { markerSeqNumber: number, totalNumberOfMarkers: number, iccProfileData: Uint8Array } } = {}

  // Extract ICC profile segments
  const segments = extractIccSegments(buffer)
  for (const segment of segments) {
    const profile = parseIccProfileSegment(segment)
    if (profile) {
      profiles[profile.markerSeqNumber] = profile
    }
  }

  return assembleIccProfile(profiles)
}

/**
 * Extracts ICC profile segments from JPEG buffer.
 * Helper for extractIccProfileFromJpeg.
 * @param buffer - The JPEG buffer.
 * @returns Array of ICC profile segments.
 */
function extractIccSegments(buffer: Uint8Array): Uint8Array[] {
  const segments: Uint8Array[] = []
  let i = 0
  while (i < buffer.length - 1) {
    if (buffer[i] === 255 && buffer[i + 1] === 226) {
      const segment = buffer.subarray(i)
      const length = (segment[2] << 8) | segment[3]
      const data = segment.subarray(4, length + 2)
      segments.push(data)
      i += length + 2
    }
    else {
      i++
    }
  }
  return segments
}

/**
 * Parses a single ICC profile segment.
 * Helper for extractIccProfileFromJpeg.
 * @param segment - The segment data.
 * @returns Parsed profile or null if invalid.
 */
function parseIccProfileSegment(segment: Uint8Array): { markerSeqNumber: number, totalNumberOfMarkers: number, iccProfileData: Uint8Array } | null {
  const header = { begin: 12, end: 13 }
  const seqNum = { begin: header.end, end: header.end + 1 }
  const data = { begin: seqNum.end, end: segment.length }

  if (String.fromCharCode(...segment.subarray(0, 12)) === 'ICC_PROFILE\0' && data.end <= segment.length) {
    return {
      markerSeqNumber: segment[header.begin],
      totalNumberOfMarkers: segment[seqNum.begin],
      iccProfileData: segment.subarray(data.begin, data.end),
    }
  }
  return null
}

/**
 * Assembles ICC profile from collected segments.
 * Helper for extractIccProfileFromJpeg.
 * @param profiles - Map of profile segments.
 * @returns Concatenated profile data or null if incomplete.
 */
function assembleIccProfile(profiles: { [key: number]: { markerSeqNumber: number, totalNumberOfMarkers: number, iccProfileData: Uint8Array } }): Uint8Array | null {
  const entries = Object.entries(profiles)
  if (entries.length === 0)
    return null

  const firstProfile = entries[0][1]
  const totalMarkers = firstProfile.totalNumberOfMarkers
  const dataArray = Array.from({ length: totalMarkers }).fill(null) as Uint8Array[]

  for (const [seq, profile] of entries) {
    dataArray[Number(seq) - 1] = profile.iccProfileData
  }

  if (!dataArray.every(Boolean))
    return null

  const totalLength = dataArray.reduce((sum, data) => sum + data.length, 0)
  const result = new Uint8Array(totalLength)
  let offset = 0
  for (const data of dataArray) {
    result.set(data, offset)
    offset += data.length
  }
  return result.length ? result : null
}

/**
 * Extracts ICC profile from a PNG image buffer.
 * Original function: $$a0
 * @param buffer - The PNG image buffer as Uint8Array.
 * @returns Object with modified buffer and ICC profile data.
 */
export function extractIccProfileFromPng(buffer: Uint8Array): { withoutColorSpace: Uint8Array, iccProfileRawData: Uint8Array | null } {
  let position = 8
  let outputBuffer: Uint8Array | null = null
  let outputOffset = 0
  let iccProfile: Uint8Array | null = null
  const view = new DataView(buffer.buffer)
  let foundIdat = false

  while (position + 12 < buffer.length) {
    const length = view.getInt32(position)
    if (length < 0) {
      outputBuffer = null
      break
    }
    const type = view.getInt32(position + 4)
    switch (type) {
      case 0x49444154: // IDAT
        foundIdat = true
        if (outputBuffer) {
          outputBuffer.copyWithin(outputOffset, position, buffer.length)
          outputOffset += buffer.length - position
          outputBuffer = outputBuffer.subarray(0, outputOffset)
        }
        break
      case 0x73524742: // sRGB
      case 0x67414D41: // gAMA
      case 0x6348524D: // cHRM
      case 0x69434350: // iCCP
        if (!outputBuffer) {
          outputBuffer = new Uint8Array(buffer)
          outputOffset = position
        }
        if (type === 0x69434350 && !iccProfile) {
          try {
            iccProfile = parseIccChunk(buffer, position)
          }
          catch {
            // Ignore errors
          }
        }
        break
      default:
        if (outputBuffer) {
          outputBuffer.copyWithin(outputOffset, position, position + length + 12)
          outputOffset += length + 12
        }
    }
    if (foundIdat)
      break
    position += length + 12
  }
  return {
    withoutColorSpace: outputBuffer || buffer,
    iccProfileRawData: iccProfile,
  }
}

/**
 * Parses ICC chunk from PNG buffer.
 * Helper for extractIccProfileFromPng.
 * @param buffer - The PNG buffer.
 * @param position - Start position of the chunk.
 * @returns Inflated ICC profile data.
 */
function parseIccChunk(buffer: Uint8Array, position: number): Uint8Array {
  const view = new DataView(buffer.buffer, position)
  const length = view.getUint32(0)
  const nameLimits = { min: 1, max: 79 }
  const nameStart = position + 4 + 4
  let nameEnd = null
  for (let i = nameStart; i < nameStart + nameLimits.max && i < buffer.length; ++i) {
    if (buffer[i] === 0) {
      nameEnd = i
      break
    }
  }
  if (nameEnd === null || buffer[nameEnd] !== 0) {
    throw new Error('Couldn\'t find null separator')
  }
  const compressionMethod = buffer[nameEnd + 1]
  if (compressionMethod !== 0) {
    throw new Error('Compression method is not 0 (deflate)')
  }
  const nameLength = nameEnd - nameStart
  if (nameLength < nameLimits.min || nameLength > nameLimits.max) {
    throw new Error(`Profile name length of ${nameLength} isn't between ${nameLimits.min} bytes and ${nameLimits.max} bytes`)
  }
  const dataStart = nameEnd + 1 + 1
  if (8 + length + 4 > buffer.length - position) {
    throw new Error('Data is not large enough to contain the entire iCCP chunk')
  }
  const compressedData = buffer.subarray(dataStart, dataStart + (length - nameLength - 1 - 1))
  return inflate(compressedData)
}

/**
 * Checks if a GIF buffer represents an animated GIF.
 * Original function: $$s1
 * @param buffer - The GIF buffer as Uint8Array.
 * @returns True if animated, false otherwise.
 */
export function isAnimatedGif(buffer: Uint8Array): boolean {
  if (buffer[0] !== 71 || buffer[1] !== 73 || buffer[2] !== 70 || buffer[3] !== 56) {
    return false
  }
  let valid = true
  // let position = 0

  /**
   * Skips sub-blocks.
   * Helper for isAnimatedGif.
   * @param start - Starting position.
   * @returns New position after skipping.
   */
  const skipSubBlocks = (start: number): number => {
    let i = start
    while (i < buffer.length) {
      const size = buffer[i++]
      if (size > 0) {
        i += size
      }
      else if (size === 0) {
        break
      }
      else {
        valid = false
        break
      }
    }
    return i
  }

  let frameCount = 0
  let pos = 10
  const packedField = buffer[pos++]
  pos += 2
  if (packedField >> 7) {
    pos += (1 << ((packedField & 7) + 1)) * 3
  }

  while (valid && pos < buffer.length) {
    const blockType = buffer[pos++]
    switch (blockType) {
      case 33: // Extension
        const extType = buffer[pos++]
        switch (extType) {
          case 255: // Application Extension
            if (buffer[pos] === 11
              && buffer[pos + 1] === 78 && buffer[pos + 2] === 69 && buffer[pos + 3] === 84
              && buffer[pos + 4] === 83 && buffer[pos + 5] === 67 && buffer[pos + 6] === 65
              && buffer[pos + 7] === 80 && buffer[pos + 8] === 69 && buffer[pos + 9] === 50
              && buffer[pos + 10] === 46 && buffer[pos + 11] === 48 && buffer[pos + 12] === 3
              && buffer[pos + 13] === 1 && buffer[pos + 16] === 0) {
              pos += 17
            }
            else {
              pos = skipSubBlocks(pos + 12)
            }
            break
          case 249: // Graphic Control Extension
            pos += 6
            break
          case 254: // Comment Extension
          case 1: // Plain Text Extension
            pos = skipSubBlocks(pos)
            break
        }
        break
      case 44: // Image Descriptor
        if (++frameCount > 1)
          return true
        pos += 8
        const lzwCodeSize = buffer[pos++]
        if (lzwCodeSize >> 7) {
          pos += (1 << ((lzwCodeSize & 7) + 1)) * 3
        }
        pos = skipSubBlocks(pos + 1)
        break
      case 59: // Trailer
        return false
    }
  }
  return false
}

// Updated exports to match refactored function names
export const Ll = extractIccProfileFromPng
export const fB = isAnimatedGif
export const yy = extractIccProfileFromJpeg
