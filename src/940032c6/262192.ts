import { ServiceCategories as _$$e } from "../905/165054";
import { $D } from "../905/11";
import { YV } from "../figma_app/181241";
import { tF } from "../figma_app/306946";
export let $$r0 = new class {
  constructor() {
    this.ResourceUseSchemaValidator = YV("ResourceUseSchema", tF, null);
  }
  async addResourceUse(e) {
    try {
      return await this.ResourceUseSchemaValidator.validate(({
        xr: t
      }) => "resourceId" in e ? t.post(`/api/resource_uses/${e.resourceId}`) : t.post(`/api/resource_uses/template/${e.templateId}`));
    } catch (e) {
      $D(_$$e.COMMUNITY, e);
    }
  }
}();
export const j = $$r0;