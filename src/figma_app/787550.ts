import { createNoOpValidator, createMetaValidator, APIParameterUtils } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { fileEntityModel } from "../905/806985";
export let $$s0 = new class {
  constructor() {
    this.RelatedLinksSchemaValidator = createNoOpValidator();
    this.FilesSchemaValidator = createNoOpValidator();
    this.FilesSchemaValidatorWithPerms = createNoOpValidator();
    this.VideosSchemaValidator = createNoOpValidator();
    this.RealtimeTokenSchemaValidator = createNoOpValidator();
    this.SourceCheckpointCreatedAtSchemaValidator = createNoOpValidator();
    this.SourceFileUpdatedInfoSchemaValidator = createNoOpValidator();
    this.MetaSchemaValidator = createNoOpValidator();
    this.LastInteractionSchemaValidator = createNoOpValidator();
    this.VideosUploadSchemaValidator = createNoOpValidator();
    this.VideoDownloadSchemaValidator = createNoOpValidator();
    this.IncludeFolderTeamCanEditSchemaValidator = createNoOpValidator();
    this.PageCheckpointThumbnailsSchemaValidator = createNoOpValidator();
    this.GetHubFileDuplicatesSchemaValidator = createNoOpValidator();
    this.GetTaggedUserFileSchemaValidator = createNoOpValidator();
    this.PageWAFValidatorSchemaValidator = createNoOpValidator();
    this.CopyFileSchemaValidator = createMetaValidator("CopyFileSchemaValidator", fileEntityModel, null);
  }
  getRelatedLinks(e) {
    let {
      fileKey,
      ...r
    } = e;
    return this.RelatedLinksSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/files/${e.fileKey}/related_links`, APIParameterUtils.toAPIParameters(r)));
  }
  getFiles(e) {
    let {
      fileKey,
      args,
      ...i
    } = e;
    return e.includePerms ? this.FilesSchemaValidatorWithPerms.validate(async ({
      xr: t
    }) => await t.get(`/api/files/${e.fileKey}`, APIParameterUtils.toAPIParameters(i), args)) : this.FilesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/files/${e.fileKey}`, APIParameterUtils.toAPIParameters(i), args));
  }
  getVideos(e) {
    return this.VideosSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/files/${e.fileKey}/videos`));
  }
  getRealtimeToken(e) {
    return this.RealtimeTokenSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/files/${e.fileKey}/realtime_token`));
  }
  getSourceCheckpointCreatedAt(e) {
    return this.SourceCheckpointCreatedAtSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/files/${e.currentFileKey}/source_checkpoint_created_at`));
  }
  getSourceFileUpdatedInfo(e) {
    return this.SourceFileUpdatedInfoSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/files/${e.branchFileKey}/source_file_updated_info`));
  }
  getMeta(e) {
    return this.MetaSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/files/${e.fileKey}/meta`));
  }
  getLastInteraction(e) {
    return this.LastInteractionSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/files/${e.openFileKey}/last_interaction`));
  }
  getVideosUpload(e) {
    return this.VideosUploadSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/files/${e.fileKey}/videos/${e.sha1}/upload`));
  }
  getVideosDownload(e) {
    return this.VideoDownloadSchemaValidator.validate(({
      xr: t
    }) => t.get(`/api/files/${e.fileKey}/videos/${e.hexHash}`));
  }
  getIncludeFolderTeamCanEdit(e) {
    return this.IncludeFolderTeamCanEditSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/files/${e.fileKey}`, APIParameterUtils.toAPIParameters({
      includeFolderTeamCanEdit: e.includeFolderTeamCanEdit ? 1 : 0
    })));
  }
  putFile(e) {
    return XHR.put(`/api/files/${e.file.key}`, e.file);
  }
  updatePageCheckpointThumbnails(e) {
    return this.PageCheckpointThumbnailsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post(`/api/files/${e.fileKey}/page_thumbnails`));
  }
  getHubFileDuplicates(e) {
    return this.GetHubFileDuplicatesSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/files/hub_file_duplicates", APIParameterUtils.toAPIParameters({
      fileKeys: e.fileKeys
    })));
  }
  getTaggedUserFiles(e) {
    return this.GetTaggedUserFileSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/tagged_file", APIParameterUtils.toAPIParameters({
      fileTags: e.fileTags,
      currentOrgId: e.currentOrgId,
      currentTeamId: e.currentTeamId,
      shouldRecreate: e.shouldRecreate
    })));
  }
  getWAFValidator() {
    return this.PageWAFValidatorSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/waf-validation-captcha"));
  }
  copyFile(e, t) {
    return this.CopyFileSchemaValidator.validate(async ({
      xr: r
    }) => await r.post(`/api/multiplayer/${e}/copy`, APIParameterUtils.toAPIParameters({
      ...(t || {})
    })));
  }
}();
export const S = $$s0;