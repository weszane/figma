import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.FaviconForUrlProxySchemaValidator = createNoOpValidator();
  }
  getFaviconForUrlProxy(e) {
    return this.FaviconForUrlProxySchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/favicon_for_url_proxy", APIParameterUtils.toAPIParameters({
      url: e.url
    })));
  }
}();
export const $ = $$r0;