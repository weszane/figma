/**
 * ICC Profile Parser
 * Parses ArrayBuffer or Uint8Array ICC profile data into a structured object.
 */

export interface Gamma {
  integerPart: number
  fractionalPart: number
}

export interface CurveObject {
  n: number
  gamma?: Gamma
  values?: number[]
}

export interface FunctionCurve {
  functionType: number
  params: Gamma[]
}

export interface ICCHeader {
  majorVersion: number
}

export interface ICCRequiredTags {
  general: {
    mediaWhitePointTag?: Gamma[][]
    chromaticAdaptationTag?: Gamma[]
  }
  threeComponentMatrix: {
    redMatrixColumnTag?: Gamma[][]
    greenMatrixColumnTag?: Gamma[][]
    blueMatrixColumnTag?: Gamma[][]
    redTRCTag?: CurveObject | FunctionCurve
    greenTRCTag?: CurveObject | FunctionCurve
    blueTRCTag?: CurveObject | FunctionCurve
  }
}

export interface ICCProfile {
  header: ICCHeader
  requiredTags: ICCRequiredTags
}

/**
 * Parse a 4-byte array into a Gamma object.
 */
function parseGamma(bytes: Uint8Array): Gamma {
  if (bytes.length !== 4)
    throw new Error('Invalid data length for Gamma')
  const intVal = (bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3]
  return {
    integerPart: intVal >> 16,
    fractionalPart: intVal & 65535,
  }
}

/**
 * Parse a matrix tag (array of Gamma triplets).
 */
function parseMatrixTag(bytes: Uint8Array): Gamma[][] {
  if (bytes.length < 8 || (bytes.length - 8) % 12 !== 0)
    throw new Error('Invalid data length for matrix tag')
  const count = (bytes.length - 8) / 12
  const result: Gamma[][] = []
  for (let i = 0; i < count; i++) {
    const offset = 8 + 12 * i
    const a = parseGamma(bytes.subarray(offset, offset + 4))
    const b = parseGamma(bytes.subarray(offset + 4, offset + 8))
    const c = parseGamma(bytes.subarray(offset + 8, offset + 12))
    result.push([a, b, c])
  }
  return result
}

/**
 * Parse a curve tag (either gamma or values).
 */
function parseCurveTag(bytes: Uint8Array): CurveObject {
  if (bytes.length < 12)
    throw new Error('Invalid data length for curve tag')
  const n = (bytes[8] << 24) | (bytes[9] << 16) | (bytes[10] << 8) | bytes[11]
  if (n === 1) {
    // Gamma curve
    if (bytes.length < 14)
      throw new Error('Invalid data length for gamma curve')
    return {
      n,
      gamma: {
        integerPart: bytes[12],
        fractionalPart: bytes[13],
      },
    }
  }
  else if (n > 1) {
    // Values curve
    const values: number[] = []
    for (let i = 12; i < bytes.length; i += 2) {
      if (i + 1 >= bytes.length)
        throw new Error('Invalid data length for curve values')
      values.push((bytes[i] << 8) | bytes[i + 1])
    }
    return {
      n,
      values,
    }
  }
  throw new Error('Invalid curve type')
}

/**
 * Parse a parametric function curve tag.
 */
function parseFunctionCurveTag(bytes: Uint8Array): FunctionCurve {
  if (bytes.length < 12)
    throw new Error('Invalid data length for function curve')
  const functionType = (bytes[8] << 8) | bytes[9]
  const paramsBytes = bytes.subarray(12)
  const params: Gamma[] = []
  for (let i = 0; i < paramsBytes.length; i += 4) {
    params.push(parseGamma(paramsBytes.subarray(i, i + 4)))
  }
  return {
    functionType,
    params,
  }
}

/**
 * Parse ICC profile header.
 */
export function parseHeader(bytes: Uint8Array): ICCHeader {
  if (bytes.length < 128)
    throw new Error('Invalid ICC profile: header too short')
  const majorVersion = ((bytes[8] << 24) | (bytes[9] << 16) | (bytes[10] << 8) | bytes[11]) >> 24
  if (majorVersion !== 2 && majorVersion !== 4)
    throw new Error('Invalid ICC profile: unsupported profile version. Only V2 and V4 are supported.')
  const deviceClass = String.fromCharCode(...bytes.subarray(12, 16))
  const colorSpace = String.fromCharCode(...bytes.subarray(16, 20))
  const pcs = String.fromCharCode(...bytes.subarray(20, 24))
  if (deviceClass !== 'mntr' || colorSpace !== 'RGB ' || pcs !== 'XYZ ')
    throw new Error('Invalid ICC profile: unsupported device class, color space, or PCS')
  return { majorVersion }
}

/**
 * Parse ICC profile tag directory.
 */
export function parseTagDirectory(bytes: Uint8Array): Record<string, { offset: number, length: number }> {
  if (bytes.length < 132)
    throw new Error('Invalid ICC profile: tag directory too short')
  const tagCount = (bytes[128] << 24) | (bytes[129] << 16) | (bytes[130] << 8) | bytes[131]
  const tags: Record<string, { offset: number, length: number }> = {}
  for (let i = 0; i < tagCount; i++) {
    const offset = 132 + 12 * i
    if (offset + 11 >= bytes.length)
      throw new Error('Invalid ICC profile: tag info out of bounds')
    const tagName = String.fromCharCode(...bytes.subarray(offset, offset + 4))
    const tagOffset = (bytes[offset + 4] << 24) | (bytes[offset + 5] << 16) | (bytes[offset + 6] << 8) | bytes[offset + 7]
    const tagLength = (bytes[offset + 8] << 24) | (bytes[offset + 9] << 16) | (bytes[offset + 10] << 8) | bytes[offset + 11]
    tags[tagName] = { offset: tagOffset, length: tagLength }
  }
  return tags
}

/**
 * Parse required ICC profile tags.
 */
export function parseRequiredTags(bytes: Uint8Array, header: ICCHeader, tagDirectory: Record<string, { offset: number, length: number }>): ICCRequiredTags {
  const requiredTagNames = [
    'wtpt',
    'chad',
    'rXYZ',
    'gXYZ',
    'bXYZ',
    'rTRC',
    'gTRC',
    'bTRC',
  ]
  const tags: ICCRequiredTags = {
    general: {
      mediaWhitePointTag: undefined,
      chromaticAdaptationTag: undefined,
    },
    threeComponentMatrix: {
      redMatrixColumnTag: undefined,
      greenMatrixColumnTag: undefined,
      blueMatrixColumnTag: undefined,
      redTRCTag: undefined,
      greenTRCTag: undefined,
      blueTRCTag: undefined,
    },
  }

  for (const tagName of requiredTagNames) {
    const tagInfo = tagDirectory[tagName]
    if (!tagInfo) {
      if (header.majorVersion === 2 && tagName === 'chad')
        continue
      throw new Error(`Invalid ICC profile: missing required tag ${tagName}`)
    }
    if (tagInfo.offset + tagInfo.length > bytes.length)
      throw new Error('Invalid ICC profile: tag data out of bounds')
    const tagBytes = bytes.subarray(tagInfo.offset, tagInfo.offset + tagInfo.length)
    if (tagBytes.length < 4)
      throw new Error('Invalid ICC profile: tag data too short to extract tag type')
    const tagType = String.fromCharCode(...tagBytes.subarray(0, 4))
    switch (tagName) {
      case 'wtpt':
        tags.general.mediaWhitePointTag = parseMatrixTag(tagBytes)
        break
      case 'chad':
        // chromatic adaptation tag: array of Gamma
        if (tagBytes.length < 8 || (tagBytes.length - 8) % 4 !== 0)
          throw new Error('Invalid data length for chromatic adaptation tag')
        const count = (tagBytes.length - 8) / 4
        const chromaticAdaptation: Gamma[] = []
        for (let i = 0; i < count; i++) {
          chromaticAdaptation.push(parseGamma(tagBytes.subarray(8 + 4 * i, 8 + 4 * i + 4)))
        }
        tags.general.chromaticAdaptationTag = chromaticAdaptation
        break
      case 'rXYZ':
        tags.threeComponentMatrix.redMatrixColumnTag = parseMatrixTag(tagBytes)
        break
      case 'gXYZ':
        tags.threeComponentMatrix.greenMatrixColumnTag = parseMatrixTag(tagBytes)
        break
      case 'bXYZ':
        tags.threeComponentMatrix.blueMatrixColumnTag = parseMatrixTag(tagBytes)
        break
      case 'rTRC':
        tags.threeComponentMatrix.redTRCTag = tagType === 'curv' ? parseCurveTag(tagBytes) : parseFunctionCurveTag(tagBytes)
        break
      case 'gTRC':
        tags.threeComponentMatrix.greenTRCTag = tagType === 'curv' ? parseCurveTag(tagBytes) : parseFunctionCurveTag(tagBytes)
        break
      case 'bTRC':
        tags.threeComponentMatrix.blueTRCTag = tagType === 'curv' ? parseCurveTag(tagBytes) : parseFunctionCurveTag(tagBytes)
        break
    }
  }
  return tags
}

/**
 * Main ICC profile parser function.
 * Accepts ArrayBuffer or Uint8Array and returns ICCProfile object.
 */
export function parseICCProfile(data: ArrayBuffer | Uint8Array): ICCProfile {
  const bytes = data instanceof Uint8Array ? data : new Uint8Array(data)
  const header = parseHeader(bytes)
  const tagDirectory = parseTagDirectory(bytes)
  const requiredTags = parseRequiredTags(bytes, header, tagDirectory)
  return {
    header,
    requiredTags,
  }
}
