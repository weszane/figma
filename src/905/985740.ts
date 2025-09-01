import { vh, td } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.VersionsSchemaValidator = vh();
    this.PageSizeSchemaValidator = vh();
    this.VersionSchemaValidator = vh();
  }
  getVersions(e) {
    let {
      fileKey,
      ...i
    } = e;
    return this.VersionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/versions/${e.fileKey}`, td.toAPIParameters(i)));
  }
  getPaginatedVersions(e) {
    let {
      fileKey,
      ...i
    } = e;
    return this.PageSizeSchemaValidator.validate(async ({
      xr: e
    }) => await e.get(`/api/versions/${fileKey}`, td.toAPIParameters(i)));
  }
  getVersion(e) {
    return this.VersionSchemaValidator.validate(({
      xr: t
    }) => t.get(`/api/versions/${e.fileKey}/${e.versionId}`));
  }
}();
export const W = $$r0;