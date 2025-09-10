import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.OrgWhitelistSchemaValidator = createNoOpValidator();
    this.VersionsSchemaValidator = createNoOpValidator();
    this.WidgetsSchemaValidator = createNoOpValidator();
    this.ProfileSchemaValidator = createNoOpValidator();
    this.OrgSchemaValidator = createNoOpValidator();
    this.InstallStatusSchemaValidator = createNoOpValidator();
    this.UnpublishedWidgetsSchemaValidator = createNoOpValidator();
    this.getUnpublishedWidgets = () => this.UnpublishedWidgetsSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/widgets/unpublished"));
  }
  getOrgWhitelist(e) {
    let {
      orgId,
      ...i
    } = e;
    return this.OrgWhitelistSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/widgets/org/${e.orgId}/whitelist`, APIParameterUtils.toAPIParameters(i)));
  }
  getVersions(e) {
    return this.VersionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/widgets/${e.widgetId}/versions`, {}, {
      retryCount: 1
    }));
  }
  getWidgets(e) {
    return this.WidgetsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/widgets", APIParameterUtils.toAPIParameters(e)));
  }
  getProfile(e) {
    let {
      profileId,
      ...i
    } = e;
    return this.ProfileSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/widgets/profile/${e.profileId}`, APIParameterUtils.toAPIParameters(i)));
  }
  getOrg(e) {
    return this.OrgSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/widgets/org/${e.orgId}`));
  }
  getInstallStatus(e) {
    return this.InstallStatusSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/widgets/install_status", APIParameterUtils.toAPIParameters(e)));
  }
}();
export const U = $$r0;
