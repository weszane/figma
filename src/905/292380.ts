import { createNoOpValidator, createMetaValidator } from "../figma_app/181241";
import { z } from "../905/239603";
import { P } from "../905/412913";
import { XS, Vp } from "../figma_app/633080";
export let $$o0 = new class {
  constructor() {
    this.PublishedComponentsStatsSchemaValidator = createNoOpValidator();
    this.LibraryStylesSchemaValidator = createMetaValidator("LibraryStylesSchemaValidator", z.object({
      styles: z.array(XS(P.REST_API).extend(Vp.shape))
    }), "ds_zod_styles", !1);
    this.CommunityLibrariesStatSchemaValidator = createNoOpValidator();
  }
  getPublishedComponents(e) {
    return this.PublishedComponentsStatsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/community_libraries/${e.hubFileId}/published_components`));
  }
  getLibraryStyles(e) {
    return this.LibraryStylesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/community_libraries/${e.hubFileId}/styles`));
  }
  getCommunityLibraries() {
    return this.CommunityLibrariesStatSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/community_libraries"));
  }
  getCommunityLibrariesVisualAssets() {
    return this.CommunityLibrariesStatSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/community_libraries/visual_assets"));
  }
}();
export const f = $$o0;