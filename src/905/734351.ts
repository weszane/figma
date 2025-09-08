import { createMetaValidator, APIParameterUtils } from "../figma_app/181241";
import { Hg, oF } from "../905/604501";
export let $$a0 = new class {
  constructor() {
    this.CommunityAllCategoriesSchemaValidator = createMetaValidator("CommunityAllCategoiresSchemaValidator", Hg, "xrv_api_community_categories", !0);
    this.CommunityCategorySchemaValidator = createMetaValidator("CommunityCategorySchemaValidator", oF, "xrv_api_community_categories", !0);
  }
  getAll(e = {}) {
    return this.CommunityAllCategoriesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/community_categories_v2/all", APIParameterUtils.toAPIParameters(e)));
  }
  getCategoryBySlug(e, t) {
    return this.CommunityCategorySchemaValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/community/categories/metadata/${e}`, APIParameterUtils.toAPIParameters(t)));
  }
}();
export const c = $$a0;