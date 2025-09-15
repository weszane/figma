import { z } from 'zod'
import { createPrimaryKeySchema, describeNormalized } from '../905/67898'
import { FPermissionDenialReason } from '../figma_app/191312'

/**
 * TeamWebhookSchema - Schema for team webhook settings
 */
export const TeamWebhookSchema = z.object({
  team_name: z.string(),
  incoming_webhook: z.object({
    channel: z.string(),
  }),
})

/**
 * FolderPermissionsSchema - Schema for folder permissions
 */
export const FolderPermissionsSchema = z.object({
  canEdit: z.boolean(),
  canShare: z.boolean(),
  canMove: z.boolean(),
  canEditDescription: z.boolean(),
  canSkipDeletionConfirmation: z.boolean(),
  canCreateDesignFileWithReasons: z.object({
    result: z.boolean(),
    publicDenyReasons: z.array(z.nativeEnum(FPermissionDenialReason)),
  }),
  canCreateFigjamFileWithReasons: z.object({
    result: z.boolean(),
    publicDenyReasons: z.array(z.nativeEnum(FPermissionDenialReason)),
  }),
  canCreateSlidesFileWithReasons: z.object({
    result: z.boolean(),
    publicDenyReasons: z.array(z.nativeEnum(FPermissionDenialReason)),
  }),
  canTransferExternally: z.boolean(),
  canTransferCopy: z.boolean(),
  canTrash: z.boolean(),
  canTrashWithReasons: z.object({
    result: z.boolean(),
    publicDenyReasons: z.array(z.nativeEnum(FPermissionDenialReason)),
  }).optional(),
  canRestore: z.boolean(),
  canPermanentlyDelete: z.boolean(),
  canConnect: z.boolean(),
  isPlanAdmin: z.boolean(),
  isPlanMember: z.boolean(),
  planCanConnectWithReasons: z.object({
    result: z.boolean(),
    publicDenyReasons: z.array(z.nativeEnum(FPermissionDenialReason)),
  }).optional(),
})

/**
 * FolderSchema - Normalized schema for Folder
 */
export const FolderSchema = describeNormalized('Folder', z.object({
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
    webhooks: z.record(TeamWebhookSchema).optional(),
    legacy_team_root_folder: z.boolean().optional(),
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
    name: z.string().nullable(),
  }).optional().nullable(),
  parent_org: z.object({
    id: z.string(),
    imgUrl: z.union([z.string(), z.undefined()]),
    name: z.string(),
  }).optional().nullable(),
  parent_team: z.object({
    id: z.string(),
    imgUrl: z.union([z.string(), z.undefined()]),
    name: z.string(),
  }).optional().nullable(),
  folderPerms: FolderPermissionsSchema.optional(),
  sharing_audience_control: z.string().optional().nullable(),
  team_access: z.string().optional().nullable(),
  team_name: z.string().optional().nullable(),
  is_editable: z.boolean().optional().nullable(),
  is_connected_project: z.boolean().optional().nullable(),
  resource_connection: z.object({
    hostPlanName: z.string(),
    connectedPlanName: z.string(),
  }).optional().nullable(),
  has_pending_connection_invite: z.boolean().optional().nullable(),
}))

/**
 * getProjectUrl - Generates a project URL
 * @param e - Project ID
 * @param t - Optional team ID
 * @returns Project URL string
 */
export function getProjectUrl(e: string, t?: string): string {
  return `${location.origin}/files/${t ? `${t}/` : ''}project/${e}`
}

/**
 * FolderViewType - Enum for folder view types
 */
export enum FolderViewType {
  FolderListView = 'folder-list-view',
  FileMoveModalV2 = 'file-move-modal-v2',
}

/**
 * FolderSortKey - Enum for folder sort keys
 */
export enum FolderSortKey {
  NAME = 'name',
  TEAM = 'team',
  OWNER = 'owner',
  LAST_MODIFIED = 'lastModified',
  CREATED_AT = 'createdAt',
  SHARED_AT = 'sharedAt',
  TRASHED_AT = 'trashedAt',
}

// Exported variables with refactored names
export const Ah = FolderViewType
export const Dq = FolderSortKey
export const EE = getProjectUrl
export const lH = FolderSchema
