import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { createMetaValidator } from "../figma_app/181241";
import { sh } from "../figma_app/701107";
import { SameCreatorContentSchema } from "../figma_app/306946";
import { liveStoreInstance } from "../905/713695";
export let $$c0 = new class {
  constructor() {
    this.RelatedContentSchemaValidator = createMetaValidator("RelatedContentSchemaValidator", SameCreatorContentSchema, null);
    this.getRelatedContent = liveStoreInstance.Query({
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