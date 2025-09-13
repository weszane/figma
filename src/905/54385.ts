import { z } from 'zod'

/**
 * Checks if the given object represents a subscription.
 * @param obj - The object to check.
 * @returns True if is_subscription is true.
 * @originalName $$r3
 */
export function isSubscription(obj: { is_subscription: boolean }): boolean {
  return obj.is_subscription
}

/**
 * Zod schema for product details.
 * @originalName $$a6
 */
export const productSchema = z.object({
  id: z.string(),
  price: z.number(),
  is_subscription: z.boolean(),
  trial_length_in_days: z.number().optional(),
  has_freemium_code: z.boolean().optional(),
  can_increase_price: z.boolean().optional(),
  price_updated_at: z.string().optional(),
  annual_discount_percentage: z.number().optional(),
  annual_discount_active_at: z.date().optional(),
  annual_price: z.number().optional(),
})

/**
 * Enum for cancellation reasons.
 * @originalName $$s4
 */
export enum CancellationReason {
  DOESNT_MEET_NEEDS = 'doesnt_meet_needs',
  TECHNICAL_ISSUES = 'technical_issues',
  TOO_EXPENSIVE = 'too_expensive',
  FOUND_ALTERNATIVE = 'found_alternative',
  OTHER = 'other',
}

/**
 * Default price value.
 * @originalName $$o0
 */
export const DEFAULT_PRICE = 500

/**
 * Enum for product source types.
 * @originalName $$l2
 */
export enum ProductSource {
  FIGMA_FIRST_PARTY = 'figma_first_party',
  FIGMA_PARTNER = 'figma_partner',
  OFF_PLATFORM = 'off_platform',
  HAS_FREEMIUM_CODE = 'has_freemium_code',
}

/**
 * Enum for product status.
 * @originalName $$d1
 */
export enum ProductStatus {
  FLAGGED = 'flagged',
  PENDING_AUTO_VALIDATION = 'pending_auto_validation',
  MIGRATING = 'migrating',
}

/**
 * Enum for subscription interval.
 * @originalName $$c5
 */
export enum SubscriptionInterval {
  MONTHLY = 'monthly',
  ANNUALLY = 'annually',
}

// Refactored exports with original variable names mapped
export const JV = DEFAULT_PRICE
export const PN = ProductStatus
export const UC = ProductSource
export const Uv = isSubscription
export const bG = CancellationReason
export const fN = SubscriptionInterval
export const ii = productSchema
