import { nativeEnum, z } from "zod";
import { FFileActivityType } from "src/figma_app/191312";
/**
 * Zod schema for file activity object validation.
 * Original variable: $$s0
 */
export const fileActivitySchema = z.object({
  action_at: z.string(),
  org_id: z.string(),
  user_id: z.string(),
  activity_type: nativeEnum(FFileActivityType)
});

/**
 * Exported schema for file activity.
 * Original export: t
 */
export const t = fileActivitySchema;
