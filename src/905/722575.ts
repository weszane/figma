import { z } from 'zod'
// Original: export let $$n0 = z.enum(["pass-through", "normal", "darken", "multiply", "color-burn", "lighten", "screen", "color-dodge", "overlay", "soft-light", "hard-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "normal", "linear-burn", "linear-dodge"]).describe("@name(BlendMode)");
/**
 * Zod schema for blend modes.
 * @original $$n0
 */
export const BlendModeSchema = z.enum([
  'pass-through',
  'normal',
  'darken',
  'multiply',
  'color-burn',
  'lighten',
  'screen',
  'color-dodge',
  'overlay',
  'soft-light',
  'hard-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
  'normal', // Note: "normal" appears twice in original
  'linear-burn',
  'linear-dodge',
]).describe('@name(BlendMode)')

// Original: export function $$r2(e) { if (e) return e.toLowerCase().replace(/_/g, "-"); }
/**
 * Converts a string to lowercase and replaces underscores with dashes.
 * @param input - The input string.
 * @returns The normalized string or undefined if input is falsy.
 * @original $$r2
 */
export function normalizeBlendMode(input?: string): string | undefined {
  if (input) {
    return input.toLowerCase().replace(/_/g, '-')
  }
  return undefined
}

// Original: export function $$a1(e) { return e ? e.toUpperCase().replace("-", "_") : "NORMAL"; }
/**
 * Converts a string to uppercase and replaces dashes with underscores, defaulting to "NORMAL".
 * @param input - The input string.
 * @returns The transformed string.
 * @original $$a1
 */
export function denormalizeBlendMode(input?: string): string {
  if (input) {
    return input.toUpperCase().replace('-', '_')
  }
  return 'NORMAL'
}

// Original exports: export const U3 = $$n0; export const hA = $$a1; export const nl = $$r2;
/**
 * Alias for BlendModeSchema.
 * @original U3
 */
export const U3 = BlendModeSchema

/**
 * Alias for denormalizeBlendMode.
 * @original hA
 */
export const hA = denormalizeBlendMode

/**
 * Alias for normalizeBlendMode.
 * @original nl
 */
export const nl = normalizeBlendMode
