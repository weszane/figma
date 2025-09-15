import { z } from 'zod'

/**
 * Enum representing possible subscription statuses.
 * (Original: $$r0)
 */
export const SubscriptionStatus = {
  SUCCEEDED: 'succeeded',
  PENDING: 'pending',
  CANCELED: 'canceled',
  REFUNDED: 'refunded',
  TRIALING: 'trialing',
  SUBSCRIPTION_PAYMENT_FAILED: 'subscription_payment_failed',
  INVOICE_FINALIZATION_FAILED: 'invoice_finalization_failed',
  DISPUTED: 'disputed',
} as const

/**
 * Array of all subscription status values.
 * (Original: $$a1)
 */
export const SubscriptionStatusList = [
  SubscriptionStatus.PENDING,
  SubscriptionStatus.SUCCEEDED,
  SubscriptionStatus.CANCELED,
  SubscriptionStatus.REFUNDED,
  SubscriptionStatus.TRIALING,
  SubscriptionStatus.SUBSCRIPTION_PAYMENT_FAILED,
  SubscriptionStatus.INVOICE_FINALIZATION_FAILED,
  SubscriptionStatus.DISPUTED,
]

/**
 * Zod schema for subscription metadata.
 * (Original: $$s2)
 */
export const SubscriptionMetadataSchema = z.object({
  status: z.nativeEnum(SubscriptionStatus),
  updated_at: z.string().optional(),
  purchased_at: z.string().nullable(),
  subscription_expires_at: z.string().nullable(),
  subscription_canceled_at: z.string().nullable(),
  refund_reason: z.string().nullable(),
  monetized_resource_metadata_id: z.string(),
  subscription_interval: z.string().nullable(),
})

export const G3 = SubscriptionStatus
export const QK = SubscriptionStatusList
export const fe = SubscriptionMetadataSchema
