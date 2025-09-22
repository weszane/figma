import { z } from 'zod'

/**
 * Enum for tone types (original: $$n0)
 */
export enum ToneType {
  NEUTRAL = 'neutral',
  CASUAL = 'casual',
  PROFESSIONAL = 'professional',
  CONCISE = 'concise',
  EXPANDED = 'expanded',
}

/**
 * Enum for product types (original: $$i2)
 */
export enum ProductType {
  DESIGN = 'design',
  SLIDES = 'slides',
  FIGJAM = 'figjam',
}

/**
 * Zod schema for an array of text objects (original: s)
 */
export const TextArraySchema = z.object({
  id: z.string(),
  text: z.string(),
}).array()

/**
 * Zod schema for an array of tone objects (original: o)
 */
export const ToneArraySchema = z.object({
  tone: z.nativeEnum(ToneType),
  weight: z.number(),
}).array()

/**
 * Zod enum for product types (original: l)
 */
export const ProductTypeEnum = z.enum(['design', 'slides', 'figjam'])

/**
 * Zod union schema for text/tones/productType (original: $$d3)
 */
export const TextTonesProductTypeSchema = z.union([
  z.object({
    text: z.string(),
    tones: ToneArraySchema,
    productType: ProductTypeEnum.optional(),
  }),
  z.object({
    texts: TextArraySchema,
    tones: ToneArraySchema,
    productType: ProductTypeEnum.optional(),
  }),
])

/**
 * Zod schema for delta object (original: $$c1)
 */
export const DeltaSchema = z.object({
  id: z.string().optional(),
  delta: z.string(),
})

/**
 * Exported variables with refactored names
 */
export const DE = ToneType // original: $$n0
export const aC = DeltaSchema // original: $$c1
export const ch = ProductType // original: $$i2
export const e3 = TextTonesProductTypeSchema // original: $$d3
