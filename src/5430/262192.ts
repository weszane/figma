import { ServiceCategories } from "../905/165054";
import { reportError } from "../905/11";
import { createMetaValidator } from "../figma_app/181241";
import { UserResourceSchema } from "../figma_app/306946";
export let $$a0 = new class {
  constructor() {
    this.ResourceUseSchemaValidator = createMetaValidator("ResourceUseSchema", UserResourceSchema, null);
  }
  async addResourceUse(e) {
    try {
      return await this.ResourceUseSchemaValidator.validate(({
        xr: t
      }) => "resourceId" in e ? t.post(`/api/resource_uses/${e.resourceId}`) : t.post(`/api/resource_uses/template/${e.templateId}`));
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
    }
  }
}();
export const j = $$a0;
