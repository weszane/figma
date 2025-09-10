/**
 * Refactored from /Users/allen/github/fig/src/905/859698.ts
 * Grouped identity functions, clarified types, and documented logic.
 */

// #region Types

/**
 * Represents a key-version pair.
 */
export interface KeyVersion {
  key: string
  version: string
}

// #endregion

// #region Identity Functions

/**
 * Collection of generic identity functions.
 * These functions simply return their input.
 * Original names: sg, ii, q, Po, n3, ey, SG, yG, mW, wF, Sm, Xf, F7, Rf, o5, IA, nK, Vt, Pg, Xe, j6
 */
export const IdentityFns = {
  sg: <T>(e: T): T => e, // $$_31
  ii: <T>(e: T): T => e, // $$A22
  q: <T>(e: T): T => e, // $$y29
  Po: <T>(e: T): T => e, // $$b7
  n3: <T>(e: T): T => e, // $$v26
  ey: <T>(e: T): T => e, // $$I18
  SG: <T>(e: T): T => e, // $$E9
  yG: <T>(e: T): T => e, // $$x33
  mW: <T>(e: T): T => e, // $$S25
  wF: <T>(e: T): T => e, // $$w32
  Sm: <T>(e: T): T => e, // $$k10
  Xf: <T>(e: T): T => e, // $$N16
  F7: <T>(e: T): T => e, // $$P1
  Rf: <T>(e: T): T => e, // $$O8
  o5: <T>(e: T): T => e, // $$D28
  IA: <T>(e: T): T => e, // $$L3
  nK: <T>(e: T): T => e, // $$F27
  Vt: <T>(e: T): T => e, // $$j14
  Pg: <T>(e: T): T => e, // $$U6
  Xe: <T>(e: T): T => e, // $$B15
  j6: <T>(e: T): T => e, // $$z23
}

// #endregion

// #region KeyVersion Utilities

/**
 * Converts a KeyVersion to string.
 */
export function keyVersionToString({ key, version }: KeyVersion): string {
  return `${key}/${version}`
}

/**
 * Parses a string into KeyVersion.
 */
export function keyVersionFromString(e: string): KeyVersion | null {
  const parts = e.split('/')
  if (parts.length !== 2)
    return null
  const [key, version] = parts
  return key && version ? { key, version } : null
}

/**
 * Converts a KeyVersion-like object.
 */
export function keyVersionFromKiwi({ key, version }: Partial<KeyVersion>): KeyVersion | null {
  return key && version ? { key, version } : null
}

/**
 * Checks equality of two KeyVersion objects.
 */
export function keyVersionIsEqual(e: KeyVersion | null, t: KeyVersion | null): boolean {
  return e && t ? e.key === t.key && e.version === t.version : e === t
}

/**
 * Checks if KeyVersion is valid.
 */
export function keyVersionIsValid({ key, version }: Partial<KeyVersion>): boolean {
  return !!(key && version)
}
interface CreateInvalidString {
  (e: string): string
  toString: (e: string) => string
  INVALID: string
}

const createInvalidString = ((e: string) => e) as CreateInvalidString

createInvalidString.toString = (e: string) => e
createInvalidString.INVALID = createInvalidString('')

export type ReturnKeyVersion = ReturnType<typeof createKeyVersionNamespace>
/**
 * Creates a KeyVersion namespace object with utility methods.
 * @param obj - An object to extend with KeyVersion utilities.
 * @returns The extended object with KeyVersion utility methods.
 * Original name: createKeyVersionNamespace
 */
function createKeyVersionNamespace<T extends object>(obj: T): T & {
  toString: (kv: KeyVersion) => string
  fromString: (str: string) => KeyVersion | null
  fromKiwi: (kv: Partial<KeyVersion>) => KeyVersion | null
  isEqual: (a: KeyVersion | null, b: KeyVersion | null) => boolean
  isValid: (kv: Partial<KeyVersion>) => boolean
} {
  const res = obj as any
  res.toString = keyVersionToString
  res.fromString = keyVersionFromString
  res.fromKiwi = keyVersionFromKiwi
  res.isEqual = keyVersionIsEqual
  res.isValid = keyVersionIsValid
  return res as T & {
    toString: (kv: KeyVersion) => string
    fromString: (str: string) => KeyVersion | null
    fromKiwi: (kv: Partial<KeyVersion>) => KeyVersion | null
    isEqual: (a: KeyVersion | null, b: KeyVersion | null) => boolean
    isValid: (kv: Partial<KeyVersion>) => boolean
  }
}

//
export const $y = createKeyVersionNamespace
export const I0 = createKeyVersionNamespace
export const Kj = createKeyVersionNamespace
export const UG = createKeyVersionNamespace
export const Uw = createKeyVersionNamespace
export const kY = createKeyVersionNamespace
export const sS = createKeyVersionNamespace
export const cI = createKeyVersionNamespace
export const VP = createKeyVersionNamespace
export const iF = createKeyVersionNamespace
export const iU = createKeyVersionNamespace
export const iV = createKeyVersionNamespace
export const M4 = createKeyVersionNamespace

//
export const F7 = createInvalidString
export const IA = createInvalidString
export const Pg = createInvalidString
export const Po = createInvalidString
export const Rf = createInvalidString
export const SG = createInvalidString
export const Sm = createInvalidString

export const Vt = createInvalidString
export const Xe = createInvalidString
export const Xf = createInvalidString

export const ey = createInvalidString

export const ii = createInvalidString
export const j6 = createInvalidString

export const mW = createInvalidString
export const n3 = createInvalidString
export const nK = createInvalidString
export const o5 = createInvalidString
export const q = createInvalidString

export const sg = createInvalidString
export const wF = createInvalidString
export const yG = createInvalidString
export { createInvalidString, createKeyVersionNamespace }
