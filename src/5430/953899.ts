import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { YV } from "../figma_app/181241";
import { sh } from "../figma_app/701107";
import { ME } from "../figma_app/306946";
import { M4 } from "../905/713695";
export let $$c0 = new class {
  constructor() {
    this.RelatedContentSchemaValidator = YV("RelatedContentSchemaValidator", ME, null);
    this.getRelatedContent = M4.Query({
      fetch: e => {
        let t = sh[e.resourceType];
        return this.RelatedContentSchemaValidator.validate(async ({
          xr: r
        }) => {
          try {
            return await r.get(`/api/resources/${t}/${e.contentId}/related_content`);
          } catch (e) {
            reportError(_$$e.COMMUNITY, e);
            return e;
          }
        });
      }
    });
  }
}();
export const $ = $$c0;