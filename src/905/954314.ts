import { createPrimaryKeySchema, describeNormalized } from '../905/67898'
import { z as _$$z, fc, Ip } from '../905/239603'
import { FPermissionLevelType, FViewPermissionType } from '../figma_app/191312'

let s = fc(FPermissionLevelType)
let o = fc(FViewPermissionType)
let $$l0 = describeNormalized('Repo', _$$z.object({
  id: createPrimaryKeySchema(),
  name: _$$z.string(),
  folder_id: _$$z.string(),
  default_file_key: _$$z.string().nullable(),
  deleted_at: _$$z.string().nullable(),
  trashed_at: _$$z.union([_$$z.number(), _$$z.string()]).nullable(),
  created_at: _$$z.string(),
  updated_at: _$$z.string(),
  team_id: _$$z.string().nullable(),
  link_access: s.nullable(),
  proto_link_access: o.nullable(),
  has_file_link_password: Ip.coerce.$$null(_$$z.boolean().nullable()),
  has_proto_link_password: Ip.coerce.$$null(_$$z.boolean().nullable()),
  realtime_token: _$$z.string().optional(),
  org_audience: _$$z.boolean().nullable(),
  org_browsable: _$$z.boolean().nullable(),
  parent_org_id: _$$z.string().nullable(),
  is_favorited: _$$z.boolean().optional(),
  has_active_branches: Ip.coerce.$$null(_$$z.boolean().nullable()),
  shared_at: _$$z.string().optional().nullable(),
  shared_by: _$$z.string().optional().nullable(),
  shared_by_user: _$$z.object({
    id: _$$z.string(),
    name: _$$z.string().nullable(),
  }).optional().nullable(),
  parent_org: _$$z.object({
    id: _$$z.string(),
    imgUrl: _$$z.string().nullable(),
    name: _$$z.string().nullable(),
  }).optional().nullable(),
  parent_team: _$$z.object({
    id: _$$z.string(),
    imgUrl: _$$z.string().nullable(),
    name: _$$z.string().nullable(),
  }).optional().nullable(),
  trashed_with_parent: _$$z.string().optional().nullable(),
}))
export const z = $$l0
