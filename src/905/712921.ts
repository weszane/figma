import { z } from 'zod'
import { AICreditsTypeEnumSchema, ProductAccessTypeEnumSchema } from '../905/513035'
import { CurrencySchema } from '../905/962956'

/**
 * Enum for renewal terms.
 * Original variable: $$s1
 */
export const RenewalTermEnum = {
  YEAR: 'year',
  MONTH: 'month',
} as const

/**
 * Zod schema for renewal terms.
 * Original variable: o
 */
export const RenewalTermEnumSchema = z.nativeEnum(RenewalTermEnum)

/**
 * Enum for product tiers.
 * Original variable: $$l2
 */
export const ProductTierEnum = {
  ORG: 'org',
  ENTERPRISE: 'enterprise',
  PRO: 'pro',
} as const

/**
 * Zod schema for product tiers.
 * Original variable: d
 */
export const ProductTierEnumSchema = z.nativeEnum(ProductTierEnum)

/**
 * Zod schema for a product price object.
 * Original variable: c
 */
export const ProductPriceSchema = z.object({
  key: z.string(),
  tier: ProductTierEnumSchema,
  billable_product_key: ProductAccessTypeEnumSchema,
  billable_product_variant_key: AICreditsTypeEnumSchema.nullable(),
  renewal_term: RenewalTermEnumSchema,
  unit: RenewalTermEnumSchema,
  currency: CurrencySchema,
  amount: z.number(),
})

/**
 * Zod schema for an array of product prices.
 * Original variable: $$u0
 */
export const ProductPricesSchema = z.object({
  product_prices: z.array(ProductPriceSchema),
})

// Exported names refactored for clarity and traceability
export const F6 = ProductPricesSchema // Original: F6
export const IX = RenewalTermEnum // Original: IX
export const Ju = ProductTierEnum // Original: Ju

