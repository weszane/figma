import { createNoOpValidator } from "src/figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.TemplatesSchemaValidator = createNoOpValidator();
    this.StartingPointsTemplatesSchemaValidator = createNoOpValidator();
    this.StartingPointsTemplatesAndAssetsSchemaValidator = createNoOpValidator();
    this.VersionsSchemaValidator = createNoOpValidator();
    this.StatusSchemaValidator = createNoOpValidator();
    this.ProfileSchemaValidator = createNoOpValidator();
    this.LibrariesSchemaValidator = createNoOpValidator();
    this.PublishHubFileSchemaValidator = createNoOpValidator();
    this.UpdateHubFileSchemeValidator = createNoOpValidator();
    this.HubFileMultiImageUploadSchemaValidator = createNoOpValidator();
  }
  getTemplates(e) {
    return this.TemplatesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/hub_files/templates", {
      type: e.type
    }));
  }
  getStartingPointsTemplates() {
    return this.StartingPointsTemplatesSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/hub_files/templates", {
      type: "starting_points"
    }));
  }
  getStartingPointsTemplatesAndAssets() {
    return this.StartingPointsTemplatesAndAssetsSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/hub_files/starting_points"));
  }
  getVersions(e) {
    return this.VersionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/hub_files/${e.id}/versions`));
  }
  getStatuses(e) {
    return this.StatusSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/hub_files/${e.id}/status`));
  }
  getProfile(e) {
    return this.ProfileSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/hub_files/profile/${e.profileId}`));
  }
  getLibraries(e) {
    return this.LibrariesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/hub_files/libraries", {
      library_ids: e.libraryIds.join(",")
    }));
  }
  likeHubFile(e) {
    return this.VersionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post(`/api/hub_files/${e.id}/like`));
  }
  unlikeHubFile(e) {
    return this.VersionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.del(`/api/hub_files/${e.id}/like`));
  }
  publishHubFile(e) {
    return this.PublishHubFileSchemaValidator.validate(({
      xr: t
    }) => t.post("/api/hub_files", e));
  }
  updateHubFile(e, t) {
    return this.UpdateHubFileSchemeValidator.validate(({
      xr: i
    }) => i.put(`/api/hub_files/${e}`, t));
  }
  setupMultiImageUploadForHubFile(e) {
    return this.HubFileMultiImageUploadSchemaValidator.validate(({
      xr: t
    }) => t.post("/api/hub_files/upload", e));
  }
}();
export const H = $$r0;
