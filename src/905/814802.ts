import { z } from "../905/239603";
import { describeNormalized, createPrimaryKeySchema } from "../905/67898";
import { cD } from "../905/513035";
import { FPlanRestrictionType } from "../figma_app/191312";
import { aw } from "../figma_app/175992";
var $$l0 = (e => (e.DESIGN = "design", e.WHITEBOARD = "whiteboard", e))($$l0 || {});
export let $$d1 = describeNormalized("TeamUser", z.object({
  id: createPrimaryKeySchema(),
  team_id: z.string(),
  user_id: z.string(),
  design_paid_status: z.nativeEnum(FPlanRestrictionType),
  whiteboard_paid_status: z.nativeEnum(FPlanRestrictionType),
  drafts_folder_id: z.string().nullable().optional(),
  created_at: z.string(),
  updated_at: z.string(),
  user: aw.optional(),
  show_figjam_user_onboarding: z.boolean().nullable(),
  active_seat_type: cD.nullish()
}));
FPlanRestrictionType.FULL;
FPlanRestrictionType.STARTER;
FPlanRestrictionType.RESTRICTED;
export const j4 = $$l0;
export const wF = $$d1; 
