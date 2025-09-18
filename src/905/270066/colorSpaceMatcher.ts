/**
 * Color Space Matcher
 * Determines the color space (e.g., sRGB, Display P3) of a parsed ICC profile.
 */

import type {
  CurveObject,
  ICCProfile,
} from './iccParser'
import { ColorSpaceEnum } from '../864609'
import {
  arrayEquals,
  curveEquals,
  decodeGamma,
  decodeSignedGamma,
  evaluateFunctionCurve,
  floatEquals,
  gammaEquals,
  generateCurveObject,
  hasGamma,
  hasValues,
  isCurveObject,
  isFunctionObject,
  isZeroCurve,
  matrixEquals,
} from './helpers'
import {
  FunctionCurve,
  Gamma,
} from './iccParser'

/**
 * Reference ICC profile objects for sRGB and Display P3 (V2 and V4).
 * These are used for matching.
 */
const sRGB_V2: ICCProfile = {
  header: { majorVersion: 2 },
  requiredTags: {
    general: {
      mediaWhitePointTag: [
        [
          { integerPart: 0, fractionalPart: 62289 },
          { integerPart: 1, fractionalPart: 0 },
          { integerPart: 1, fractionalPart: 5836 },
        ],
      ],
      chromaticAdaptationTag: [
        { integerPart: 1, fractionalPart: 3140 },
        { integerPart: 0, fractionalPart: 1503 },
        { integerPart: -1, fractionalPart: 62246 },
        { integerPart: 0, fractionalPart: 1940 },
        { integerPart: 0, fractionalPart: 64911 },
        { integerPart: -1, fractionalPart: 64417 },
        { integerPart: -1, fractionalPart: 64930 },
        { integerPart: 0, fractionalPart: 987 },
        { integerPart: 0, fractionalPart: 49269 },
      ],
    },
    threeComponentMatrix: {
      redMatrixColumnTag: [
        [
          { integerPart: 0, fractionalPart: 28578 },
          { integerPart: 0, fractionalPart: 14581 },
          { integerPart: 0, fractionalPart: 912 },
        ],
      ],
      greenMatrixColumnTag: [
        [
          { integerPart: 0, fractionalPart: 25241 },
          { integerPart: 0, fractionalPart: 46981 },
          { integerPart: 0, fractionalPart: 6362 },
        ],
      ],
      blueMatrixColumnTag: [
        [
          { integerPart: 0, fractionalPart: 9376 },
          { integerPart: 0, fractionalPart: 3972 },
          { integerPart: 0, fractionalPart: 46799 },
        ],
      ],
      redTRCTag: {
        n: 1024,
        values: Array.from({ length: 1024 }, (_, i) => Math.min(i * 5, 65535)),
      },
      greenTRCTag: {
        n: 1024,
        values: Array.from({ length: 1024 }, (_, i) => Math.min(i * 5, 65535)),
      },
      blueTRCTag: {
        n: 1024,
        values: Array.from({ length: 1024 }, (_, i) => Math.min(i * 5, 65535)),
      },
    },
  },
}

const displayP3_V2: ICCProfile = {
  header: { majorVersion: 2 },
  requiredTags: {
    general: {
      mediaWhitePointTag: [
        [
          { integerPart: 0, fractionalPart: 62289 },
          { integerPart: 1, fractionalPart: 0 },
          { integerPart: 1, fractionalPart: 5836 },
        ],
      ],
    },
    threeComponentMatrix: {
      redMatrixColumnTag: [
        [
          { integerPart: 0, fractionalPart: 33759 },
          { integerPart: 0, fractionalPart: 15807 },
          { integerPart: -1, fractionalPart: 65467 },
        ],
      ],
      greenMatrixColumnTag: [
        [
          { integerPart: 0, fractionalPart: 19135 },
          { integerPart: 0, fractionalPart: 45367 },
          { integerPart: 0, fractionalPart: 2745 },
        ],
      ],
      blueMatrixColumnTag: [
        [
          { integerPart: 0, fractionalPart: 10296 },
          { integerPart: 0, fractionalPart: 4363 },
          { integerPart: 0, fractionalPart: 51385 },
        ],
      ],
      redTRCTag: {
        n: 1024,
        values: Array.from({ length: 1024 }, (_, i) => Math.min(i * 5, 65535)),
      },
      greenTRCTag: {
        n: 1024,
        values: Array.from({ length: 1024 }, (_, i) => Math.min(i * 5, 65535)),
      },
      blueTRCTag: {
        n: 1024,
        values: Array.from({ length: 1024 }, (_, i) => Math.min(i * 5, 65535)),
      },
    },
  },
}

const sRGB_V4: ICCProfile = {
  header: { majorVersion: 4 },
  requiredTags: {
    general: {
      mediaWhitePointTag: [
        [
          { integerPart: 0, fractionalPart: 63190 },
          { integerPart: 1, fractionalPart: 0 },
          { integerPart: 0, fractionalPart: 54061 },
        ],
      ],
      chromaticAdaptationTag: [
        { integerPart: 1, fractionalPart: 3135 },
        { integerPart: 0, fractionalPart: 1501 },
        { integerPart: -1, fractionalPart: 62246 },
        { integerPart: 0, fractionalPart: 1936 },
        { integerPart: 0, fractionalPart: 64914 },
        { integerPart: -1, fractionalPart: 64417 },
        { integerPart: -1, fractionalPart: 64930 },
        { integerPart: 0, fractionalPart: 988 },
        { integerPart: 0, fractionalPart: 49265 },
      ],
    },
    threeComponentMatrix: {
      redMatrixColumnTag: [
        [
          { integerPart: 0, fractionalPart: 28576 },
          { integerPart: 0, fractionalPart: 14578 },
          { integerPart: 0, fractionalPart: 911 },
        ],
      ],
      greenMatrixColumnTag: [
        [
          { integerPart: 0, fractionalPart: 25238 },
          { integerPart: 0, fractionalPart: 46985 },
          { integerPart: 0, fractionalPart: 6362 },
        ],
      ],
      blueMatrixColumnTag: [
        [
          { integerPart: 0, fractionalPart: 9376 },
          { integerPart: 0, fractionalPart: 3973 },
          { integerPart: 0, fractionalPart: 46788 },
        ],
      ],
      redTRCTag: {
        functionType: 3,
        params: [
          { integerPart: 2, fractionalPart: 26217 },
          { integerPart: 0, fractionalPart: 62119 },
          { integerPart: 0, fractionalPart: 3417 },
          { integerPart: 0, fractionalPart: 5072 },
          { integerPart: 0, fractionalPart: 2651 },
        ],
      },
      greenTRCTag: {
        functionType: 3,
        params: [
          { integerPart: 2, fractionalPart: 26217 },
          { integerPart: 0, fractionalPart: 62119 },
          { integerPart: 0, fractionalPart: 3417 },
          { integerPart: 0, fractionalPart: 5072 },
          { integerPart: 0, fractionalPart: 2651 },
        ],
      },
      blueTRCTag: {
        functionType: 3,
        params: [
          { integerPart: 2, fractionalPart: 26217 },
          { integerPart: 0, fractionalPart: 62119 },
          { integerPart: 0, fractionalPart: 3417 },
          { integerPart: 0, fractionalPart: 5072 },
          { integerPart: 0, fractionalPart: 2651 },
        ],
      },
    },
  },
}

const displayP3_V4: ICCProfile = {
  header: { majorVersion: 4 },
  requiredTags: {
    general: {
      mediaWhitePointTag: [
        [
          { integerPart: 0, fractionalPart: 63189 },
          { integerPart: 1, fractionalPart: 0 },
          { integerPart: 0, fractionalPart: 54060 },
        ],
      ],
      chromaticAdaptationTag: [
        { integerPart: 1, fractionalPart: 3138 },
        { integerPart: 0, fractionalPart: 1502 },
        { integerPart: -1, fractionalPart: 62246 },
        { integerPart: 0, fractionalPart: 1939 },
        { integerPart: 0, fractionalPart: 64912 },
        { integerPart: -1, fractionalPart: 64418 },
        { integerPart: -1, fractionalPart: 64931 },
        { integerPart: 0, fractionalPart: 988 },
        { integerPart: 0, fractionalPart: 49262 },
      ],
    },
    threeComponentMatrix: {
      redMatrixColumnTag: [
        [
          { integerPart: 0, fractionalPart: 33759 },
          { integerPart: 0, fractionalPart: 15807 },
          { integerPart: -1, fractionalPart: 65467 },
        ],
      ],
      greenMatrixColumnTag: [
        [
          { integerPart: 0, fractionalPart: 19135 },
          { integerPart: 0, fractionalPart: 45367 },
          { integerPart: 0, fractionalPart: 2745 },
        ],
      ],
      blueMatrixColumnTag: [
        [
          { integerPart: 0, fractionalPart: 10296 },
          { integerPart: 0, fractionalPart: 4363 },
          { integerPart: 0, fractionalPart: 51385 },
        ],
      ],
      redTRCTag: {
        functionType: 3,
        params: [
          { integerPart: 2, fractionalPart: 26214 },
          { integerPart: 0, fractionalPart: 62119 },
          { integerPart: 0, fractionalPart: 3417 },
          { integerPart: 0, fractionalPart: 5072 },
          { integerPart: 0, fractionalPart: 2651 },
        ],
      },
      greenTRCTag: {
        functionType: 3,
        params: [
          { integerPart: 2, fractionalPart: 26214 },
          { integerPart: 0, fractionalPart: 62119 },
          { integerPart: 0, fractionalPart: 3417 },
          { integerPart: 0, fractionalPart: 5072 },
          { integerPart: 0, fractionalPart: 2651 },
        ],
      },
      blueTRCTag: {
        functionType: 3,
        params: [
          { integerPart: 2, fractionalPart: 26214 },
          { integerPart: 0, fractionalPart: 62119 },
          { integerPart: 0, fractionalPart: 3417 },
          { integerPart: 0, fractionalPart: 5072 },
          { integerPart: 0, fractionalPart: 2651 },
        ],
      },
    },
  },
}

/**
 * Compare two ICCProfile objects for color space matching.
 */
function compareICCProfiles(a: ICCProfile, b: ICCProfile): boolean {
  // Compare matrix columns
  const matrixTagsA = [
    a.requiredTags.threeComponentMatrix.redMatrixColumnTag,
    a.requiredTags.threeComponentMatrix.greenMatrixColumnTag,
    a.requiredTags.threeComponentMatrix.blueMatrixColumnTag,
  ]
  const matrixTagsB = [
    b.requiredTags.threeComponentMatrix.redMatrixColumnTag,
    b.requiredTags.threeComponentMatrix.greenMatrixColumnTag,
    b.requiredTags.threeComponentMatrix.blueMatrixColumnTag,
  ]
  if (!matrixEquals(matrixTagsA, matrixTagsB))
    return false

  // Compare media white point and chromatic adaptation
  const mwpA = a.requiredTags.general.mediaWhitePointTag
  const mwpB = b.requiredTags.general.mediaWhitePointTag
  const chadA = a.requiredTags.general.chromaticAdaptationTag
  const chadB = b.requiredTags.general.chromaticAdaptationTag

  const mwpMatch
    = a.header.majorVersion === 2
      ? matrixEquals(mwpA ?? [], mwpB ?? [])
      : !!chadA && !!chadB && arrayEquals(chadA, chadB, gammaEquals)

  if (!mwpMatch)
    return false

  // Compare TRC tags
  const trcTagsA = [
    a.requiredTags.threeComponentMatrix.redTRCTag,
    a.requiredTags.threeComponentMatrix.greenTRCTag,
    a.requiredTags.threeComponentMatrix.blueTRCTag,
  ]
  const trcTagsB = [
    b.requiredTags.threeComponentMatrix.redTRCTag,
    b.requiredTags.threeComponentMatrix.greenTRCTag,
    b.requiredTags.threeComponentMatrix.blueTRCTag,
  ]

  const trcMatch = arrayEquals(trcTagsA, trcTagsB, (x, y) => {
    if (isCurveObject(x) && isFunctionObject(y)) {
      return curveEquals(x, generateCurveObject(y, (x as CurveObject).n))
    }
    else if (isFunctionObject(x) && isCurveObject(y)) {
      return curveEquals(generateCurveObject(x, (y as CurveObject).n), y)
    }
    else if (isCurveObject(x) && isCurveObject(y)) {
      return curveEquals(x, y)
    }
    else if (isFunctionObject(x) && isFunctionObject(y)) {
      return (
        x.functionType === y.functionType
        && arrayEquals(x.params, y.params, gammaEquals)
      )
    }
    return false
  })

  return trcMatch
}

/**
 * Determines the color space of a parsed ICC profile.
 * Throws if unable to match.
 */
export function matchColorSpace(profile: ICCProfile): ColorSpaceEnum {
  switch (profile.header.majorVersion) {
    case 2:
      if (compareICCProfiles(profile, sRGB_V2))
        return ColorSpaceEnum.SRGB
      if (compareICCProfiles(profile, displayP3_V2))
        return ColorSpaceEnum.DISPLAY_P3
      break
    case 4:
      if (compareICCProfiles(profile, sRGB_V4))
        return ColorSpaceEnum.SRGB
      if (compareICCProfiles(profile, displayP3_V4))
        return ColorSpaceEnum.DISPLAY_P3
      break
  }
  throw new Error('Could not determine color transformation')
}
