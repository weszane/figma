import { FolderSchema } from '../905/316062'
import { APIParameterUtils, createMetaValidator, createNoOpValidator } from '../figma_app/181241'

/**
 * Types for folder API parameters and responses.
 */
export interface GetFolderParams {
  folderId: string
}

export interface GetFilesParams {
  folderId: string
  shouldShowOnlyTrashedFiles?: boolean
}

export interface GetCanMoveParams {
  folderId: string
  [key: string]: any
}

export interface GetContributorsParams {
  folderId: string
}

export interface GetCanMoveFilesParams {
  destFolderId: string
  [key: string]: any
}

export interface PermanentlyDeleteParams {
  folderId: string
}

export interface BatchDeleteParams {
  folderIds: string[]
}

export interface TrashParams {
  folderId: string
}

export interface RestoreParams {
  folderId: string
}

export interface UpdateFolderSharingAudienceControlsParams {
  folderId: string
  sharingAudienceControl: any
}

export interface UpdateFolderTeamAccessParams {
  folderId: string
  teamAccess: any
}

export interface UpdateFolderNameParams {
  folderId: string
  name: string
}

/**
 * FolderAPI provides methods for folder-related API calls.
 */
export class FolderAPI {
  public FolderSchemaValidator = createMetaValidator('FolderSchemaValidator', FolderSchema, null)
  public FilesSchemaValidator = createNoOpValidator()
  public CanMoveSchemaValidator = createNoOpValidator()
  public ContributorsSchemaValidator = createNoOpValidator()
  public CanMoveFilesSchemaValidator = createNoOpValidator()
  public PermanentlyDeleteFolderSchemaValidator = createNoOpValidator()
  public BatchDeleteFolderSchemaValidator = createNoOpValidator()
  public TrashFolderSchemaValidator = createNoOpValidator()
  public RestoreFolderSchemaValidator = createNoOpValidator()
  public UpdateFolderSharingAudienceControlSchemaValidator = createNoOpValidator()
  public UpdateFolderTeamAccessSchemaValidator = createNoOpValidator()
  public UpdateFolderNameSchemaValidator = createNoOpValidator()

  /**
   * Get folder details.
   * @param params - GetFolderParams
   */
  public getFolder = (params: GetFolderParams) =>
    this.FolderSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(`/api/folders/${params.folderId}`),
    )

  /**
   * Get files in a folder.
   * @param params - GetFilesParams
   */
  public getFiles = (params: GetFilesParams) =>
    this.FilesSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(
        `/api/folders/${params.folderId}/files`,
        APIParameterUtils.toAPIParameters({
          fetch_only_trashed_with_folder_files: !!params.shouldShowOnlyTrashedFiles,
        }),
      ),
    )

  /**
   * Check if folder can be moved.
   * @param params - GetCanMoveParams
   */
  public getCanMove = (params: GetCanMoveParams) => {
    const { folderId, ...rest } = params
    return this.CanMoveSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(`/api/folders/${folderId}/can_move`, APIParameterUtils.toAPIParameters(rest)),
    )
  }

  /**
   * Get folder contributors.
   * @param params - GetContributorsParams
   */
  public getContributors = (params: GetContributorsParams) =>
    this.ContributorsSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(`/api/folders/${params.folderId}/contributors`),
    )

  /**
   * Check if files can be moved to destination folder.
   * @param params - GetCanMoveFilesParams
   */
  public getCanMoveFiles = (params: GetCanMoveFilesParams) => {
    const { destFolderId, ...rest } = params
    return this.CanMoveFilesSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(
        `/api/folders/${destFolderId}/can_move_files`,
        APIParameterUtils.toAPIParameters(rest),
      ),
    )
  }

  /**
   * Permanently delete a folder.
   * @param params - PermanentlyDeleteParams
   */
  public permanentlyDelete = (params: PermanentlyDeleteParams) =>
    this.PermanentlyDeleteFolderSchemaValidator.validate(({ xr: t }) =>
      t.del(`/api/v2/folders/${params.folderId}`),
    )

  /**
   * Batch delete folders.
   * @param params - BatchDeleteParams
   */
  public batchDelete = (params: BatchDeleteParams) =>
    this.BatchDeleteFolderSchemaValidator.validate(({ xr: t }) =>
      t.del('/api/folders', { folder_ids: params.folderIds }),
    )

  /**
   * Move folder to trash.
   * @param params - TrashParams
   */
  public trash = (params: TrashParams) =>
    this.TrashFolderSchemaValidator.validate(({ xr: t }) =>
      t.put(`/api/folders/trash/${params.folderId}`),
    )

  /**
   * Restore folder from trash.
   * @param params - RestoreParams
   */
  public restore = (params: RestoreParams) =>
    this.RestoreFolderSchemaValidator.validate(({ xr: t }) =>
      t.put(`/api/folders/restore/${params.folderId}`),
    )

  /**
   * Update folder sharing audience controls.
   * @param params - UpdateFolderSharingAudienceControlsParams
   */
  public updateFolderSharingAudienceControls = (params: UpdateFolderSharingAudienceControlsParams) =>
    this.UpdateFolderSharingAudienceControlSchemaValidator.validate(({ xr: t }) =>
      t.put(`/api/folders/${params.folderId}`, {
        sharing_audience_control: params.sharingAudienceControl,
      }),
    )

  /**
   * Update folder team access.
   * @param params - UpdateFolderTeamAccessParams
   */
  public updateFolderTeamAccess = (params: UpdateFolderTeamAccessParams) =>
    this.UpdateFolderTeamAccessSchemaValidator.validate(({ xr: t }) =>
      t.put(`/api/folders/${params.folderId}`, {
        team_access: params.teamAccess,
      }),
    )

  /**
   * Update folder name.
   * @param params - UpdateFolderNameParams
   */
  public updateFolderName = (params: UpdateFolderNameParams) =>
    this.UpdateFolderNameSchemaValidator.validate(({ xr: t }) =>
      t.put('/api/folders/rename', {
        folder_id: params.folderId,
        name: params.name,
      }),
    )
}

// Export with original variable name for compatibility (W = $$a0)
export const folderAPIInstance = new FolderAPI()
export const W = folderAPIInstance
