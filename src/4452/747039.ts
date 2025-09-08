import { createNoOpValidator } from "../figma_app/181241";
import { XHR } from "../905/910117";
export let $$r0 = new class {
  constructor() {
    this.AssetTransferSchemaValidator = createNoOpValidator();
    this.OrgTeamTransfersSchemaValidator = createNoOpValidator();
    this.TeamTransferSchemaValidator = createNoOpValidator();
    this.FolderTransferSchemaValidator = createNoOpValidator();
  }
  getAssetTransfer(e) {
    return this.AssetTransferSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/asset_transfer/${e.selectedAssetTransferRequest}`));
  }
  getOrgTeamTransfers(e) {
    return this.OrgTeamTransfersSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/asset_transfer/org_team_transfers/${e.orgId}`));
  }
  getTeamTransfer(e) {
    return this.TeamTransferSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/asset_transfer/team_transfer/${e.teamId}`));
  }
  getFolderTransfer(e) {
    return this.FolderTransferSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/asset_transfer/folder_transfer/${e.folderId}`));
  }
  deleteAssetTransferRequest(e) {
    return XHR.del(`/api/asset_transfer/${e.id}`);
  }
  approveAssetTransferRequest(e) {
    return XHR.put(`/api/asset_transfer/${e.id}/approve`, {
      remove_collaborators: e.removeCollaborators
    });
  }
}();
export const S = $$r0;