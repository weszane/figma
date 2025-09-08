import { createMetaValidator, createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { lH } from "../905/316062";
export let $$a0 = new class {
  constructor() {
    this.FolderSchemaValidator = createMetaValidator("FolderSchemaValidator", lH, null);
    this.FilesSchemaValidator = createNoOpValidator();
    this.CanMoveSchemaValidator = createNoOpValidator();
    this.ContributorsSchemaValidator = createNoOpValidator();
    this.CanMoveFilesSchemaValidator = createNoOpValidator();
    this.PermanentlyDeleteFolderSchemaValidator = createNoOpValidator();
    this.BatchDeleteFolderSchemaValidator = createNoOpValidator();
    this.TrashFolderSchemaValidator = createNoOpValidator();
    this.RestoreFolderSchemaValidator = createNoOpValidator();
    this.UpdateFolderSharingAudienceControlSchemaValidator = createNoOpValidator();
    this.UpdateFolderTeamAccessSchemaValidator = createNoOpValidator();
    this.UpdateFolderNameSchemaValidator = createNoOpValidator();
  }
  getFolder(e) {
    return this.FolderSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/folders/${e.folderId}`));
  }
  getFiles(e) {
    return this.FilesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/folders/${e.folderId}/files`, APIParameterUtils.toAPIParameters({
      fetch_only_trashed_with_folder_files: !!e.shouldShowOnlyTrashedFiles
    })));
  }
  getCanMove(e) {
    let {
      folderId,
      ...i
    } = e;
    return this.CanMoveSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/folders/${e.folderId}/can_move`, APIParameterUtils.toAPIParameters(i)));
  }
  getContributors(e) {
    return this.ContributorsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/folders/${e.folderId}/contributors`));
  }
  getCanMoveFiles(e) {
    return this.CanMoveFilesSchemaValidator.validate(async ({
      xr: t
    }) => {
      let {
        destFolderId,
        ...r
      } = e;
      return await t.get(`/api/folders/${e.destFolderId}/can_move_files`, APIParameterUtils.toAPIParameters(r));
    });
  }
  permanentlyDelete(e) {
    return this.PermanentlyDeleteFolderSchemaValidator.validate(({
      xr: t
    }) => t.del(`/api/v2/folders/${e.folderId}`));
  }
  batchDelete(e) {
    return this.BatchDeleteFolderSchemaValidator.validate(({
      xr: t
    }) => t.del("/api/folders", {
      folder_ids: e.folderIds
    }));
  }
  trash(e) {
    return this.TrashFolderSchemaValidator.validate(({
      xr: t
    }) => t.put(`/api/folders/trash/${e.folderId}`));
  }
  restore(e) {
    return this.RestoreFolderSchemaValidator.validate(({
      xr: t
    }) => t.put(`/api/folders/restore/${e.folderId}`));
  }
  updateFolderSharingAudienceControls(e) {
    return this.UpdateFolderSharingAudienceControlSchemaValidator.validate(({
      xr: t
    }) => t.put(`/api/folders/${e.folderId}`, {
      sharing_audience_control: e.sharingAudienceControl
    }));
  }
  updatedFolderTeamAccess(e) {
    return this.UpdateFolderTeamAccessSchemaValidator.validate(({
      xr: t
    }) => t.put(`/api/folders/${e.folderId}`, {
      team_access: e.teamAccess
    }));
  }
  updateFolderName(e) {
    return this.UpdateFolderNameSchemaValidator.validate(({
      xr: t
    }) => t.put("/api/folders/rename", {
      folder_id: e.folderId,
      name: e.name
    }));
  }
}();
export const W = $$a0;