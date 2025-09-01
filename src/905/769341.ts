import { fc, z } from "../905/239603";
import { FFileActivityType } from "../figma_app/191312";
let a = fc(FFileActivityType);
let $$s0 = z.object({
  action_at: z.string(),
  org_id: z.string(),
  user_id: z.string(),
  activity_type: a
});
export const t = $$s0;