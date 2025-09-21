import { z } from 'zod'

/**
 * Schema for VAT/GST information.
 * Original variable: r
 */
export const vatGstSchema = z.object({
  vat_gst_id: z.string().nullable(),
  regional_vat_gst_id: z.string().nullable(),
})

/**
 * Schema for Stripe customer and taxes.
 * Original variable: $$a0
 */
export const stripeCustomerSchema = z.object({
  stripe_customer_id: z.string().optional().nullable(),
  taxes: vatGstSchema,
})

/**
 * Exported schema for Stripe customer and taxes.
 * Original export: z
 */
// export const z = stripeCustomerSchema
