import { z, Ip } from "../905/239603";
import { createMetaValidator, APIParameterUtils } from "../figma_app/181241";
import { PluginDetailsSchema, WidgetDetailsSchema } from "../figma_app/155287";
export let $$s0 = new class {
  constructor() {
    this.DefaultInsertsSchemaValidator = createMetaValidator("DefaultInsertsSchemaValidator", z.object({
      plugins: z.array(PluginDetailsSchema),
      widgets: z.array(WidgetDetailsSchema),
      templates: z.array(Ip.ignore()),
      components: z.array(Ip.ignore()),
      use_cases: z.array(Ip.ignore())
    }), null);
    this.DefaultCollageItemsSchemaValidator = createMetaValidator("DefaultCollageItemsSchemaValidator", Ip.ignore(), null);
  }
  getDefaultInserts(e) {
    return this.DefaultInsertsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/figjam/default_inserts", APIParameterUtils.toAPIParameters(e)));
  }
  getDefaultCollageItems(e) {
    return this.DefaultCollageItemsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/figjam/default_collage_items", APIParameterUtils.toAPIParameters(e)));
  }
}();
export const d = $$s0;