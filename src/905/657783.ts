import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { XHR } from "../905/910117";
export let $$a0 = new class {
  constructor() {
    this.CommentsSchemaValidator = createNoOpValidator();
    this.CanvasMentionsFileNeedsInviteValidator = createNoOpValidator();
    this.FileCanRequestEditValidator = createNoOpValidator();
    this.NewDraftFileLocation = createNoOpValidator();
  }
  getComments(e) {
    return this.CommentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/file/${e.fileKey}/comments/${e.commentThreadId}`));
  }
  getCanvasMentionsFileNeedsInvite(e) {
    return this.CanvasMentionsFileNeedsInviteValidator.validate(({
      xr: t
    }) => t.get(`/api/file/${e.fileKey}/canvas_mentions/needs_invite?mentioned_user_id=${e.mentionedUserId}`));
  }
  getFileCanRequestEdit(e) {
    return this.FileCanRequestEditValidator.validate(({
      xr: t
    }) => t.get(`/api/files/${e.fileKey}/can_request_edit`));
  }
  acceptFileRoleRequest(e) {
    return XHR.post(`/api/files/role_request/${e.roleRequestId}/accept`, {
      source: e.source
    });
  }
  denyFileRoleRequest(e) {
    return XHR.post(`/api/files/role_request/${e.roleRequestId}/deny`, {
      source: e.source
    });
  }
  createStarterTeamFileRole(e) {
    return XHR.put("/api/files/create_starter_team_file_role", {
      key: e.key
    });
  }
  updateFolderAccessEnabled(e) {
    return XHR.put(`/api/files/${e.fileKey}`, {
      folder_access_enabled: e.folderAccessEnabled
    });
  }
  postRecentActivity(e) {
    return XHR.post(`/api/files/${e.fileKey}/recent_activity`, {
      activity_type: e.activityType
    });
  }
  getNewFileLocation(e) {
    return this.NewDraftFileLocation.validate(async ({
      xr: t
    }) => await t.get("/api/new_file_location", APIParameterUtils.toAPIParameters({
      editorType: e.editorType
    })));
  }
}();
export const L = $$a0;