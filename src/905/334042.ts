import { fc, z } from "../905/239603";
import { FOrganizationRoleType, FTeamAssignmentMethodType } from "../figma_app/191312";
import { m } from "../905/499884";
let s = fc(FOrganizationRoleType);
let o = fc(FTeamAssignmentMethodType);
let $$l0 = z.object({
  actor_user_id: z.string().nullish(),
  assigned_at: z.string().nullish(),
  created_at: z.string(),
  id: z.string(),
  is_main_workspace: z.boolean(),
  org_user_id: z.string(),
  permission: s,
  update_reason: o.nullish(),
  updated_at: z.string(),
  uuid: z.string(),
  workspace_id: z.string(),
  idp_group: m.nullable().optional(),
  idp_group_uuid: z.string().nullish()
});
export const C = $$l0; 
