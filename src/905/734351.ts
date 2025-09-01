import { YV, td } from "../figma_app/181241";
import { Hg, oF } from "../905/604501";
export let $$a0 = new class {
  constructor() {
    this.CommunityAllCategoriesSchemaValidator = YV("CommunityAllCategoiresSchemaValidator", Hg, "xrv_api_community_categories", !0);
    this.CommunityCategorySchemaValidator = YV("CommunityCategorySchemaValidator", oF, "xrv_api_community_categories", !0);
  }
  getAll(e = {}) {
    return this.CommunityAllCategoriesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/community_categories_v2/all", td.toAPIParameters(e)));
  }
  getCategoryBySlug(e, t) {
    return this.CommunityCategorySchemaValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/community/categories/metadata/${e}`, td.toAPIParameters(t)));
  }
}();
export const c = $$a0;