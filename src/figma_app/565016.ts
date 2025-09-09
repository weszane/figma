import { nativeEnum, z } from 'zod'
import { FApprovalMethodType, FFileType, FResourceTargetType, FUpgradeReasonType } from '../figma_app/191312'

let a = nativeEnum(FFileType)
let s = nativeEnum(FUpgradeReasonType)
let o = nativeEnum(FResourceTargetType)
let l = nativeEnum(FApprovalMethodType)
export let UpgradeRequestSchema = z.object({
  org_user_id: z.string(),
  reason: s,
  created_at: z.string(),
  actor_id: z.string().nullable(),
  actor_name: z.string().nullable(),
  resource_type: o.nullable(),
  resource_id_or_key: z.string().nullable(),
  resource_name: z.string().nullable(),
  editor_type: z.union([a, z.literal('dev_mode')]).nullable(),
  upgrade_method: l.nullable(),
})
export const P = UpgradeRequestSchema
export const U = FUpgradeReasonType
