import { z, Ip } from "../905/239603";
import { YV, td } from "../figma_app/181241";
import { Lz, sM } from "../figma_app/155287";
export let $$s0 = new class {
  constructor() {
    this.DefaultInsertsSchemaValidator = YV("DefaultInsertsSchemaValidator", z.object({
      plugins: z.array(Lz),
      widgets: z.array(sM),
      templates: z.array(Ip.ignore()),
      components: z.array(Ip.ignore()),
      use_cases: z.array(Ip.ignore())
    }), null);
    this.DefaultCollageItemsSchemaValidator = YV("DefaultCollageItemsSchemaValidator", Ip.ignore(), null);
  }
  getDefaultInserts(e) {
    return this.DefaultInsertsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/figjam/default_inserts", td.toAPIParameters(e)));
  }
  getDefaultCollageItems(e) {
    return this.DefaultCollageItemsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/figjam/default_collage_items", td.toAPIParameters(e)));
  }
}();
export const d = $$s0;