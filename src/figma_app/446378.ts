import { M4 } from "../905/713695";
import { vh, td } from "../figma_app/181241";
import { XHR } from "../905/910117";
let $$a0 = M4.Query({
  fetch: async e => await $$s1.getNumTemplatesByTeam({
    teamId: e.teamId,
    editorType: e.editorType
  }).then(e => e.data.meta.total)
});
let $$s1 = new class {
  constructor() {
    this.RecentsSchemaValidator = vh();
    this.TeamBrowseFromSize10SchemaValidator = vh();
    this.SearchPaginatedSchemaValidator = vh();
    this.TeamTemplateLimitValidator = vh();
    this.TeamTemplateCountValidator = vh();
    this.UploadTemplateCoverImage = vh();
    this.UpsertTemplateValidator = vh();
  }
  getRecents(e) {
    return this.RecentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/templates", {
      org_id: e.orgId,
      team_id: e.teamId,
      file_keys: e.fileKeys
    }));
  }
  getTeamBrowsePaginated(e) {
    return this.TeamBrowseFromSize10SchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/templates/${e.orgId}/team/${e.teamId}/browse`, td.toAPIParameters({
      from: e.from,
      size: e.size,
      templateType: e.templateType
    })));
  }
  getSearchPaginated(e) {
    let {
      orgId,
      ...r
    } = e;
    return this.SearchPaginatedSchemaValidator.validate(({
      xr: t
    }) => t.get(`/api/templates/${e.orgId}/search`, td.toAPIParameters(r)));
  }
  getFilteredTeamTemplates(e) {
    let {
      orgId,
      ...r
    } = e;
    return XHR.post(`/api/templates/${orgId}/browse`, r);
  }
  getTeamTemplateLimitReached(e) {
    return this.TeamTemplateLimitValidator.validate(({
      xr: t
    }) => t.get(`/api/templates/${e.teamId}/limits`, td.toAPIParameters({
      editorType: e.editorType
    })));
  }
  getNumTemplatesByTeam(e) {
    return this.TeamTemplateCountValidator.validate(({
      xr: t
    }) => t.get(`/api/templates/${e.teamId}/count`, td.toAPIParameters({
      editorType: e.editorType
    })));
  }
  uploadTemplateCoverImage(e) {
    return this.UploadTemplateCoverImage.validate(({
      xr: t
    }) => t.post(`/api/templates/file/${e.fileKey}/upload`));
  }
  upsertTemplate(e) {
    let {
      fileKey,
      payload,
      params
    } = e;
    return this.UpsertTemplateValidator.validate(({
      xr: e
    }) => e.post(`/api/templates/file/${fileKey}`, payload, td.toAPIParameters({
      params
    })));
  }
}();
export const U = $$a0;
export const q = $$s1;