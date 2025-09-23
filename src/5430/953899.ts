import { ServiceCategories } from "../905/165054";
import { reportError } from "../905/11";
import { createMetaValidator } from "../figma_app/181241";
import { ResourceBaseTypeMap } from "../figma_app/701107";
import { SameCreatorContentSchema } from "../figma_app/306946";
import { liveStoreInstance } from "../905/713695";
export let $$c0 = new class {
  constructor() {
    this.RelatedContentSchemaValidator = createMetaValidator("RelatedContentSchemaValidator", SameCreatorContentSchema, null);
    this.getRelatedContent = liveStoreInstance.Query({
      fetch: e => {
        let t = ResourceBaseTypeMap[e.resourceType];
        return this.RelatedContentSchemaValidator.validate(async ({
          xr: r
        }) => {
          try {
            return await r.get(`/api/resources/${t}/${e.contentId}/related_content`);
          } catch (e) {
            reportError(ServiceCategories.COMMUNITY, e);
            return e;
          }
        });
      }
    });
  }
}();
export const $ = $$c0;
