import { sortByDate } from "../figma_app/656233";
import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { getCurrentVersionCreatedAt } from "../figma_app/471982";
import { liveStoreInstance } from "../905/713695";
import { H } from "../905/473998";
import { pluginAPIService } from "../905/3209";
import { U } from "../905/424668";
export let $$c0 = new class {
  constructor() {
    this.ProfileSchemaValidator = createNoOpValidator();
    this.HandleSchemaValidator = createNoOpValidator();
    this.RestrictedProfilesSchemaValidator = createNoOpValidator();
    this.HandleAvailableSchemaValidator = createNoOpValidator();
    this.EditorsSchemaValidator = createNoOpValidator();
    this.profilePublicResourceQuery = liveStoreInstance.Query({
      fetch: async e => {
        let {
          profileId
        } = e;
        let [i, n, r] = await Promise.all([H.getProfile({
          profileId
        }), pluginAPIService.getProfile({
          profileId,
          currentOrgId: void 0
        }), U.getProfile({
          profileId,
          currentOrgId: void 0
        })]);
        return {
          hubFiles: i.data.meta,
          pluginsAndWidgets: [...n.data.meta, ...r.data.meta]
        };
      },
      output: e => sortByDate([...e.data.hubFiles, ...e.data.pluginsAndWidgets], e => getCurrentVersionCreatedAt(e))
    });
  }
  getProfile(e) {
    return this.ProfileSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/profile/${e.profileId}`));
  }
  getHandle(e) {
    return this.HandleSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/profile/handle/${e.handle}`, APIParameterUtils.toAPIParameters({
      currentOrgId: e.currentOrgId
    })));
  }
  getRestrictedProfiles(e) {
    return this.RestrictedProfilesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/profile/${e.profileId}/restricted_profiles`));
  }
  getHandleAvailable(e) {
    return this.HandleAvailableSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/profile/handle/${e.profileHandle}/available`));
  }
  getEditors(e) {
    return this.EditorsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/profile/editors/${e.fileKey}`));
  }
}();
export const s = $$c0;