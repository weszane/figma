import { z } from "../905/239603";
import { aw } from "../figma_app/175992";
let $$a1 = "Unassigned";
let $$s0 = z.object({
  id: z.string(),
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  last_reviewed_at: z.string().optional(),
  last_reviewed_by_id: z.string().optional(),
  admin_users_metadata: z.array(aw),
  is_orphaned: z.boolean(),
  member_count: z.number().optional(),
  team_count: z.number().optional(),
  mirrored_workspace_id: z.string().optional(),
  org_id: z.string()
});
export const W = $$s0;
export const s = $$a1; 
