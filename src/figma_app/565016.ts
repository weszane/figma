import { fc, z } from "../905/239603";
import { FFileType, FUpgradeReasonType, FResourceTargetType, FApprovalMethodType } from "../figma_app/191312";
let a = fc(FFileType);
let s = fc(FUpgradeReasonType);
let o = fc(FResourceTargetType);
let l = fc(FApprovalMethodType);
let $$d0 = z.object({
  org_user_id: z.string(),
  reason: s,
  created_at: z.string(),
  actor_id: z.string().nullable(),
  actor_name: z.string().nullable(),
  resource_type: o.nullable(),
  resource_id_or_key: z.string().nullable(),
  resource_name: z.string().nullable(),
  editor_type: z.union([a, z.literal("dev_mode")]).nullable(),
  upgrade_method: l.nullable()
});
export const P = $$d0;
export const U = FUpgradeReasonType;