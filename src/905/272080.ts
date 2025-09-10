import { z } from "../905/239603";
var $$r0 = (e => (e.SUCCEEDED = "succeeded", e.PENDING = "pending", e.CANCELED = "canceled", e.REFUNDED = "refunded", e.TRIALING = "trialing", e.SUBSCRIPTION_PAYMENT_FAILED = "subscription_payment_failed", e.INVOICE_FINALIZATION_FAILED = "invoice_finalization_failed", e.DISPUTED = "disputed", e))($$r0 || {});
let $$a1 = ["pending", "succeeded", "canceled", "refunded", "trialing", "subscription_payment_failed", "invoice_finalization_failed", "disputed"];
let $$s2 = z.object({
  status: z.nativeEnum($$r0),
  updated_at: z.string().optional(),
  purchased_at: z.string().nullable(),
  subscription_expires_at: z.string().nullable(),
  subscription_canceled_at: z.string().nullable(),
  refund_reason: z.string().nullable(),
  monetized_resource_metadata_id: z.string(),
  subscription_interval: z.string().nullable()
});
export const G3 = $$r0;
export const QK = $$a1;
export const fe = $$s2;
