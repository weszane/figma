/**
 * Utility functions for ICC profile parsing and comparison.
 * All functions are exported for use in other modules.
 */

interface FunctionObject {
  functionType: any

  params: any[]
}
/**
 * Checks if the object is a curve object with 'values' array.
 */
export function isCurveObject(obj: any): boolean {
  return 'values' in obj && Array.isArray(obj.values)
}

/**
 * Checks if the object is a function object with 'functionType' and 'params' array.
 */
export function isFunctionObject(obj: any): obj is FunctionObject {
  return 'functionType' in obj && 'params' in obj && Array.isArray(obj.params)
}

/**
 * Checks if the object has 'values' property.
 */
export function hasValues(obj: any): boolean {
  return 'values' in obj
}

/**
 * Checks if the object has 'gamma' property.
 */
export function hasGamma(obj: any): boolean {
  return 'gamma' in obj
}

/**
 * Checks if the curve object is a zero curve (n === 0 and only one property).
 */
export function isZeroCurve(obj: any): boolean {
  return obj.n === 0 && Object.keys(obj).length === 1
}

/**
 * Decodes gamma from integer and fractional parts (unsigned).
 */
export function decodeGamma(obj: { integerPart: number, fractionalPart: number }): number {
  return obj.integerPart + obj.fractionalPart / 256
}

/**
 * Decodes signed gamma from integer and fractional parts.
 */
export function decodeSignedGamma(obj: { integerPart: number, fractionalPart: number }): number {
  const isNegative = (obj.integerPart & 32768) !== 0
  const intPart = isNegative ? (65535 ^ obj.integerPart) + 1 : obj.integerPart
  return (isNegative ? -1 : 1) * (intPart + obj.fractionalPart / 65536)
}

/**
 * Evaluates a function curve at a given value t.
 * Supports functionType 0-4.
 */
export function evaluateFunctionCurve(curve: any, t: number): number {
  const { functionType, params } = curve
  let result: number | null = null
  switch (functionType) {
    case 0: {
      const e = decodeSignedGamma(params[0])
      result = t ** e
      break
    }
    case 1: {
      const e = decodeSignedGamma(params[0])
      const i = decodeSignedGamma(params[1])
      const a = decodeSignedGamma(params[2])
      result = t >= -a / i ? (i * t + a) ** e : 0
      break
    }
    case 2: {
      const e = decodeSignedGamma(params[0])
      const i = decodeSignedGamma(params[1])
      const a = decodeSignedGamma(params[2])
      const s = decodeSignedGamma(params[3])
      result = t >= -a / i ? (i * t + a) ** e + s : s
      break
    }
    case 3: {
      const e = decodeSignedGamma(params[0])
      const i = decodeSignedGamma(params[1])
      const a = decodeSignedGamma(params[2])
      const s = decodeSignedGamma(params[3])
      result = t >= decodeSignedGamma(params[4]) ? (i * t + a) ** e : s * t
      break
    }
    case 4: {
      const e = decodeSignedGamma(params[0])
      const i = decodeSignedGamma(params[1])
      const a = decodeSignedGamma(params[2])
      const s = decodeSignedGamma(params[3])
      const o = decodeSignedGamma(params[4])
      const d = decodeSignedGamma(params[5])
      const c = decodeSignedGamma(params[6])
      result = t >= o ? (i * t + a) ** e + d : s * t + c
      break
    }
    default:
      throw new Error(`Unsupported function type: ${curve.functionType}`)
  }
  return Math.max(0, Math.min(1, result!))
}

/**
 * Generates a curve object from a function curve and resolution t.
 */
export function generateCurveObject(curve: any, t: number): any {
  if (t === 1) {
    if (curve.functionType === 0) {
      return {
        n: 1,
        gamma: curve.params[0],
      }
    }
    else {
      const val = evaluateFunctionCurve(curve, 0.5)
      const intPart = Math.floor(val)
      const fracPart = Math.round((val - intPart) * 256)
      return {
        n: 1,
        gamma: {
          integerPart: intPart,
          fractionalPart: fracPart,
        },
      }
    }
  }
  else {
    const values: number[] = []
    for (let i = 0; i < t; i++) {
      const v = evaluateFunctionCurve(curve, i / (t - 1))
      values.push(Math.min(Math.round(65536 * v), 65536))
    }
    return {
      n: t,
      values,
    }
  }
}

/**
 * Compares two floats for equality up to a given precision.
 */
export function floatEquals(a: number, b: number, precision: number = 3): boolean {
  return a.toFixed(precision) === b.toFixed(precision)
}

/**
 * Compares two gamma objects for equality up to a given precision.
 */
export function gammaEquals(a: { integerPart: number, fractionalPart: number }, b: { integerPart: number, fractionalPart: number }, precision: number = 3): boolean {
  return floatEquals(decodeSignedGamma(a), decodeSignedGamma(b), precision)
}

/**
 * Compares two curve objects for equality.
 */
export function curveEquals(a: any, b: any): boolean {
  if (hasValues(a) && hasValues(b)) {
    return arrayEquals(a.values, b.values, (x, y) => Math.abs(x - y) <= 1)
  }
  else if (hasGamma(a) && hasGamma(b)) {
    return a.n === b.n && gammaEquals(a.gamma, b.gamma)
  }
  else if (isZeroCurve(a) && isZeroCurve(b)) {
    return true
  }
  return false
}

/**
 * Compares two arrays for equality using a custom comparator.
 */
export function arrayEquals<T>(arr1: T[], arr2: T[], comparator: (a: T, b: T) => boolean = (a, b) => a === b): boolean {
  return arr1.length === arr2.length && arr1.every((val, idx) => comparator(val, arr2[idx]))
}

/**
 * Compares two matrices (arrays of arrays) for equality using curveEquals.
 */
export function matrixEquals(arr1: any[], arr2: any[]): boolean {
  return arrayEquals(arr1, arr2, (a, b) => arrayEquals(a, b, gammaEquals))
}
