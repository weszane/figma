import { z } from "../905/239603";
var $$i1 = (e => (e.NONE = "none", e.ACCEPTED = "accepted", e.STARTED_ONBOARDING = "started_onboarding", e.DISABLED = "disabled", e.ENABLED = "enabled", e))($$i1 || {});
var $$a0 = (e => (e.FILE = "file", e.EXTENSION = "extension", e))($$a0 || {});
var $$s2 = (e => (e.NUM_CUSTOMERS = "num_customers", e.PAYOUTS = "payouts", e.GROSS = "gross", e.LAST_UPDATED = "last_updated_at", e.ALL_TIME_TOTAL_EARNED = "all_time_total_earned", e.NUM_PURCHASES = "num_purchases", e))($$s2 || {});
export function $$o6(e) {
  return e && {
    none: 0,
    accepted: 1,
    started_onboarding: 2,
    disabled: 3,
    enabled: 4
  }[e] || 0;
}
export var $$l5 = (e => (e.ALWAYS = "always", e.NEVER = "never", e))($$l5 || {});
export let $$d3 = z.object({
  id: z.string(),
  name: z.string().optional(),
  handle: z.string(),
  img_url: z.string(),
  email: z.string().optional(),
  description: z.string().nullish(),
  org_id: z.string().optional()
});
export var $$c4 = (e => (e.EDITOR_ON_MAIN = "Editor on main", e.EDITOR_ON_TEAM = "Editor on team", e))($$c4 || {});
export const D6 = $$a0;
export const P5 = $$i1;
export const VU = $$s2;
export const aw = $$d3;
export const pl = $$c4;
export const vA = $$l5;
export const z4 = $$o6;