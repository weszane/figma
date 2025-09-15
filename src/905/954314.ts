import { nativeEnum, z as zod } from 'zod'
import { createPrimaryKeySchema, describeNormalized } from '../905/67898'
import { Ip } from '../905/239603'
import { FPermissionLevelType, FViewPermissionType } from '../figma_app/191312'

let s = nativeEnum(FPermissionLevelType)
let o = nativeEnum(FViewPermissionType)
export let repositoryDefinition = describeNormalized('Repo', zod.object({
  id: createPrimaryKeySchema(),
  name: zod.string(),
  folder_id: zod.string(),
  default_file_key: zod.string().nullable(),
  deleted_at: zod.string().nullable(),
  trashed_at: zod.union([zod.number(), zod.string()]).nullable(),
  created_at: zod.string(),
  updated_at: zod.string(),
  team_id: zod.string().nullable(),
  link_access: s.nullable(),
  proto_link_access: o.nullable(),
  has_file_link_password: Ip.coerce.null(zod.boolean().nullable()),
  has_proto_link_password: Ip.coerce.null(zod.boolean().nullable()),
  realtime_token: zod.string().optional(),
  org_audience: zod.boolean().nullable(),
  org_browsable: zod.boolean().nullable(),
  parent_org_id: zod.string().nullable(),
  is_favorited: zod.boolean().optional(),
  has_active_branches: Ip.coerce.null(zod.boolean().nullable()),
  shared_at: zod.string().optional().nullable(),
  shared_by: zod.string().optional().nullable(),
  shared_by_user: zod.object({
    id: zod.string(),
    name: zod.string().nullable(),
  }).optional().nullable(),
  parent_org: zod.object({
    id: zod.string(),
    imgUrl: zod.string().nullable(),
    name: zod.string().nullable(),
  }).optional().nullable(),
  parent_team: zod.object({
    id: zod.string(),
    imgUrl: zod.string().nullable(),
    name: zod.string().nullable(),
  }).optional().nullable(),
  trashed_with_parent: zod.string().optional().nullable(),
}))
export const z = repositoryDefinition
