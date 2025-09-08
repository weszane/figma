import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.VersionsSchemaValidator = createNoOpValidator();
    this.PageSizeSchemaValidator = createNoOpValidator();
    this.VersionSchemaValidator = createNoOpValidator();
  }
  getVersions(e) {
    let {
      fileKey,
      ...i
    } = e;
    return this.VersionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/versions/${e.fileKey}`, APIParameterUtils.toAPIParameters(i)));
  }
  getPaginatedVersions(e) {
    let {
      fileKey,
      ...i
    } = e;
    return this.PageSizeSchemaValidator.validate(async ({
      xr: e
    }) => await e.get(`/api/versions/${fileKey}`, APIParameterUtils.toAPIParameters(i)));
  }
  getVersion(e) {
    return this.VersionSchemaValidator.validate(({
      xr: t
    }) => t.get(`/api/versions/${e.fileKey}/${e.versionId}`));
  }
}();
export const W = $$r0;