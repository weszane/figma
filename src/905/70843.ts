import { vh, td } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.ZipSchemaValidator = vh();
    this.DeleteAllCodeSuggestionsResultSchemaValidator = vh();
    this.deleteAllCodeSuggestions = e => this.DeleteAllCodeSuggestionsResultSchemaValidator.validate(async ({
      xr: t
    }) => await t.del("/api/codebase_suggestions/components", td.toAPIParameters(e)));
  }
  getZipUrl(e) {
    return this.ZipSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/codebase_suggestions/${e}/demo_zip_url`));
  }
}();
export const w = $$r0;