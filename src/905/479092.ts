import { vh, td } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.FaviconForUrlProxySchemaValidator = vh();
  }
  getFaviconForUrlProxy(e) {
    return this.FaviconForUrlProxySchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/favicon_for_url_proxy", td.toAPIParameters({
      url: e.url
    })));
  }
}();
export const $ = $$r0;