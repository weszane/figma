// Original file: /Users/allen/sigma-main/src/905/994647.ts

/**
 * Mapping of base characters to their accented equivalents.
 * Original variable: $$n3
 */
export const accentedCharacters: Record<string, string> = {
  a: '\u0105', // a with ogonek
  e: '\u0117', // e with ogonek
  i: '\u012F', // i with ogonek
  o: '\u1E53', // o with macron and dot below
  u: '\u0173', // u with ogonek
  A: '\u1E00', // A with ring below
  E: '\u0118', // E with ogonek
  I: '\u0128', // I with tilde
  O: '\xD4', // O with circumflex (note: this is a standard O with circumflex)
  U: '\u0168', // U with tilde
}

/**
 * Set of language codes, possibly for German.
 * Original variable: $$r2
 */
export const germanLanguages = new Set(['de'])

/**
 * Set of language codes, possibly for Romance languages like Catalan and French.
 * Original variable: $$a0
 */
export const romanceLanguages = new Set(['ca', 'fr'])

/**
 * Set of language codes, possibly for Latin.
 * Original variable: $$s1
 */
export const latinLanguages = new Set(['la'])

/**
 * Exported constant for romance languages.
 * Original export: PI = $$a0
 */
export const PI = romanceLanguages

/**
 * Exported constant for Latin languages.
 * Original export: RH = $$s1
 */
export const RH = latinLanguages

/**
 * Exported constant for German languages.
 * Original export: RQ = $$r2
 */
export const RQ = germanLanguages

/**
 * Exported constant for accented character mapping.
 * Original export: kn = $$n3
 */
export const kn = accentedCharacters
