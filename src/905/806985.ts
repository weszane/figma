import { z } from 'zod'
import { createPrimaryKeySchema, describeNormalized } from '../905/67898'
import { FContainerType, FFileType, FPermissionLevelType, FViewPermissionType } from '../figma_app/191312'
import { coerce } from '../figma_app/709165'

let s = z.nativeEnum(FPermissionLevelType)
let o = z.nativeEnum(FViewPermissionType)
let l = z.nativeEnum(FFileType)
let d = z.nativeEnum(FContainerType)
export let fileEntityModel = describeNormalized('File', z.object({
  checkpoint_id: z.string().optional(),
  checkpoint_token: coerce.undefined(z.string().optional()),
  client_meta: coerce.null(z.string().nullable()),
  created_at: z.string(),
  creator_id: z.string(),
  deleted_at: z.string().nullable(),
  trashed_at: z.union([z.string(), z.number()]).nullable(),
  trashed_user_id: z.string().nullable(),
  description: z.string().nullable(),
  edit_url: z.string(),
  folder_id: z.string().nullable(),
  has_file_link_password: z.boolean().nullable(),
  has_proto_link_password: z.boolean().nullable(),
  key: createPrimaryKeySchema(),
  license: z.string().nullable(),
  link_access: s,
  parent_org_id: z.string().optional().nullable(),
  proto_link_access: o.nullable(),
  name: z.string(),
  realtime_token: z.string().optional(),
  team_id: z.string().nullable(),
  thumbnail_url: coerce.null(z.string().nullable()),
  thumbnail_url_override: z.string().optional().nullable(),
  thumbnail_guid: z.string().optional().nullable(),
  preview_thumbnail_urls: z.array(z.string()).optional().nullable(),
  touched_at: z.string(),
  track_tags: z.any(),
  is_favorited: z.boolean().optional(),
  is_template: z.boolean().optional(),
  is_new_user_playground_library: z.boolean().optional(),
  starter_library_src_file_key: z.string().optional().nullable(),
  url: z.string(),
  prototype_url: z.string(),
  org_browsable: z.boolean().optional().nullable(),
  viewer_export_restricted: z.boolean().optional(),
  updated_at: z.string(),
  accessed_at: z.string().optional(),
  org_audience: coerce.undefined(z.boolean().optional()),
  file_repo_id: z.string().nullable(),
  source_file_key: z.string().nullable(),
  source_checkpoint_id: z.string().optional().nullable(),
  editor_type: l.nullable(),
  last_published_at: z.string().optional().nullable(),
  library_publish_scope_type: d.optional().nullable(),
  is_try_file: z.boolean(),
  parent_org: z.object({
    id: z.string(),
    imgUrl: z.string().nullable(),
    name: z.string().nullable(),
  }).optional().nullable(),
  parent_team: z.object({
    id: z.string(),
    imgUrl: z.string().nullable(),
    name: z.string().nullable(),
    subscription: z.string().nullable(),
  }).optional().nullable(),
  is_team_template: z.boolean().optional(),
  is_published_site: z.boolean().optional(),
  library_key: z.string().optional(),
  trashed_with_parent: z.string().optional().nullable(),
  has_connected_project_sharing_group: z.boolean().optional(),
}))
export const L = fileEntityModel
