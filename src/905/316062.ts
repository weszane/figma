import { z } from "../905/239603";
import { describeNormalized, createPrimaryKeySchema } from "../905/67898";
import { FPermissionDenialReason } from "../figma_app/191312";
var s = (e => (e.EDIT = "EDIT", e.VIEW = "VIEW", e.DISABLE = "DISABLE", e))(s || {});
let o = z.object({
  team_name: z.string(),
  incoming_webhook: z.object({
    channel: z.string()
  })
});
let l = z.object({
  canEdit: z.boolean(),
  canShare: z.boolean(),
  canMove: z.boolean(),
  canEditDescription: z.boolean(),
  canSkipDeletionConfirmation: z.boolean(),
  canCreateDesignFileWithReasons: z.object({
    result: z.boolean(),
    publicDenyReasons: z.array(z.nativeEnum(FPermissionDenialReason))
  }),
  canCreateFigjamFileWithReasons: z.object({
    result: z.boolean(),
    publicDenyReasons: z.array(z.nativeEnum(FPermissionDenialReason))
  }),
  canCreateSlidesFileWithReasons: z.object({
    result: z.boolean(),
    publicDenyReasons: z.array(z.nativeEnum(FPermissionDenialReason))
  }),
  canTransferExternally: z.boolean(),
  canTransferCopy: z.boolean(),
  canTrash: z.boolean(),
  canTrashWithReasons: z.object({
    result: z.boolean(),
    publicDenyReasons: z.array(z.nativeEnum(FPermissionDenialReason))
  }).optional(),
  canRestore: z.boolean(),
  canPermanentlyDelete: z.boolean(),
  canConnect: z.boolean(),
  isPlanAdmin: z.boolean(),
  isPlanMember: z.boolean(),
  planCanConnectWithReasons: z.object({
    result: z.boolean(),
    publicDenyReasons: z.array(z.nativeEnum(FPermissionDenialReason))
  }).optional()
});
let $$d3 = describeNormalized("Folder", z.object({
  id: createPrimaryKeySchema(),
  name: z.string(),
  description: z.string().nullable(),
  path: z.string(),
  team_id: z.string().nullable(),
  org_id: z.string().optional().nullable(),
  is_subscribed: z.boolean(),
  is_favorited: z.boolean().optional(),
  updated_at: z.string(),
  touched_at: z.string().optional(),
  created_at: z.string(),
  is_invite_only: z.boolean(),
  is_view_only: z.boolean(),
  settings: z.object({
    webhooks: z.record(o).optional(),
    legacy_team_root_folder: z.boolean().optional()
  }).nullable(),
  deleted_at: z.string().nullable(),
  trashed_at: z.string().nullable(),
  trashed_user_id: z.string().nullable(),
  is_abandoned_drafts: z.boolean(),
  shared_at: z.string().optional().nullable(),
  shared_by: z.string().optional().nullable(),
  org_or_team_id: z.string().optional().nullable(),
  parent_org_id: z.string().optional().nullable(),
  shared_by_user: z.object({
    id: z.string(),
    name: z.string().nullable()
  }).optional().nullable(),
  parent_org: z.object({
    id: z.string(),
    imgUrl: z.union([z.string(), z.undefined()]),
    name: z.string()
  }).optional().nullable(),
  parent_team: z.object({
    id: z.string(),
    imgUrl: z.union([z.string(), z.undefined()]),
    name: z.string()
  }).optional().nullable(),
  folderPerms: l.optional(),
  sharing_audience_control: z.string().optional().nullable(),
  team_access: z.string().optional().nullable(),
  team_name: z.string().optional().nullable(),
  is_editable: z.boolean().optional().nullable(),
  is_connected_project: z.boolean().optional().nullable(),
  resource_connection: z.object({
    hostPlanName: z.string(),
    connectedPlanName: z.string()
  }).optional().nullable(),
  has_pending_connection_invite: z.boolean().optional().nullable()
}));
export function $$c2(e, t) {
  return `${location.origin}/files/${t ? t + "/" : ""}project/${e}`;
}
var $$u0 = (e => (e.FolderListView = "folder-list-view", e.FileMoveModalV2 = "file-move-modal-v2", e))($$u0 || {});
var $$p1 = (e => (e.NAME = "name", e.TEAM = "team", e.OWNER = "owner", e.LAST_MODIFIED = "lastModified", e.CREATED_AT = "createdAt", e.SHARED_AT = "sharedAt", e.TRASHED_AT = "trashedAt", e))($$p1 || {});
export const Ah = $$u0;
export const Dq = $$p1;
export const EE = $$c2;
export const lH = $$d3; 
