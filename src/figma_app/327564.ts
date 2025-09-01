import { z } from "../905/239603";
import { g7 } from "../905/513035";
import { Oq } from "../905/332483";
import { D } from "../905/962956";
var o = (e => (e.SKIP_TRUE_UP = "skip_true_up", e.MANUAL_PLAN_ADMIN = "manual_plan_admin", e.CONTRACTUAL_LOCK_QUANTITY = "contractual_lock_quantity", e.MANUAL_INTERNAL_ADMIN = "manual_internal_admin", e.FREE_PERIOD = "free_period", e))(o || {});
var l = (e => (e.Locked = "locked", e.Floor = "floor", e.None = "none", e))(l || {});
let d = g7(z.number()).required(Oq.dict(() => !0));
let c = z.object({
  is_eligible_for_cancellation: z.boolean(),
  scheduled_cancellation_date: z.string().nullable(),
  cancel_at_period_end: z.boolean()
});
let $$u1 = z.object({
  invoices: z.custom(),
  account_credit: z.number(),
  currency: D,
  admin_email: z.string(),
  shipping_address: z.custom(),
  legal_name: z.string(),
  has_billing_address: z.boolean(),
  billable_seats: d,
  analyze_data_contract_v2_start: z.string().nullable().optional(),
  annual_renewal: z.string().nullable().optional(),
  non_adjustable_renewal_seats: g7(z.number()).nullish(),
  scheduled_cancellation: c.optional(),
  upcoming_renewal_will_pause: z.boolean().nullish()
});
let $$p0 = "OrgInvoice-";
export const AR = $$p0;
export const pd = $$u1; 
