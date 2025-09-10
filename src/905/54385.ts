import { z } from "../905/239603";
export function $$r3(e) {
  return e.is_subscription;
}
export let $$a6 = z.object({
  id: z.string(),
  price: z.number(),
  is_subscription: z.boolean(),
  trial_length_in_days: z.number().optional(),
  has_freemium_code: z.boolean().optional(),
  can_increase_price: z.boolean().optional(),
  price_updated_at: z.string().optional(),
  annual_discount_percentage: z.number().optional(),
  annual_discount_active_at: z.date().optional(),
  annual_price: z.number().optional()
});
export var $$s4 = (e => (e.DOESNT_MEET_NEEDS = "doesnt_meet_needs", e.TECHNICAL_ISSUES = "technical_issues", e.TOO_EXPENSIVE = "too_expensive", e.FOUND_ALTERNATIVE = "found_alternative", e.OTHER = "other", e))($$s4 || {});
export let $$o0 = 500;
var $$l2 = (e => (e.FIGMA_FIRST_PARTY = "figma_first_party", e.FIGMA_PARTNER = "figma_partner", e.OFF_PLATFORM = "off_platform", e.HAS_FREEMIUM_CODE = "has_freemium_code", e))($$l2 || {});
var $$d1 = (e => (e.FLAGGED = "flagged", e.PENDING_AUTO_VALIDATION = "pending_auto_validation", e.MIGRATING = "migrating", e))($$d1 || {});
var $$c5 = (e => (e.MONTHLY = "monthly", e.ANNUALLY = "annually", e))($$c5 || {});
export const JV = $$o0;
export const PN = $$d1;
export const UC = $$l2;
export const Uv = $$r3;
export const bG = $$s4;
export const fN = $$c5;
export const ii = $$a6; 
