import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { convertFilterKeysToApiParams } from "../figma_app/162807";
export let $$a0 = new class {
  constructor() {
    this.CopyPasteBufferUrlsSchemaValidator = createNoOpValidator();
    this.HubFileCopyPasteBufferUrlSchemaValidator = createNoOpValidator();
    this.AssetSuggestionsSchemaValidator = createNoOpValidator();
    this.GetFragmentDataSchemaValidator = createNoOpValidator();
    this.LookupFragmentsSchemaValidator = createNoOpValidator();
    this.RecommendedHubFileFragmentsSchemaValidator = createNoOpValidator();
  }
  getCopyPasteBufferUrls(e) {
    return this.CopyPasteBufferUrlsSchemaValidator.validate(async ({
      xr: t
    }) => {
      let {
        fragments,
        fileKey
      } = e;
      let r = fragments.map(e => `${e.fileKey},${e.nodeId}`);
      let a = fileKey ? `file_key=${fileKey}&` : "";
      let s = `/api/assets/copy_paste_buffer_urls?${a}${r.map(e => `chunks[]=${encodeURIComponent(e)}`).join("&")}`;
      return await t.get(s);
    });
  }
  getHubFileFragmentCopyPasteBufferUrl(e, t) {
    return this.HubFileCopyPasteBufferUrlSchemaValidator.validate(async ({
      xr: i
    }) => await i.get("/api/hub_file_fragments/copy_paste_buffer_url", APIParameterUtils.toAPIParameters({
      hubFileId: e.hub_file_id.toString(),
      nodeId: e.node_id,
      fileKey: t
    })));
  }
  searchParamsForFilters(e) {
    let t = convertFilterKeysToApiParams(e || null);
    return APIParameterUtils.toAPIParameters({
      ...t
    });
  }
  postFragmentSearch(e, t, i, n, r, a, s) {
    let o = this.searchParamsForFilters(n);
    return this.AssetSuggestionsSchemaValidator.validate(async ({
      xr: n
    }) => await n.post(a ? "/api/hub_file_fragments/suggestions" : "/api/assets/suggestions", {
      ...o,
      input: e,
      file_key: t,
      override_params: r,
      tracking_metadata: i,
      websites_only: s
    }));
  }
  getFragmentData(e) {
    return this.GetFragmentDataSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/assets/internal/fragment", e));
  }
  lookupFragments(e) {
    return this.LookupFragmentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/fragments/lookup", APIParameterUtils.toAPIParameters(e)));
  }
  getRecommendedHubFileFragments(e) {
    return this.RecommendedHubFileFragmentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/hub_file_fragments/recommended", APIParameterUtils.toAPIParameters(e)));
  }
}();
export const D = $$a0;