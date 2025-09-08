import { createMetaValidator, APIParameterUtils } from "../figma_app/181241";
import { X, R } from "../905/457745";
import { n as _$$n } from "../905/347702";
export let $$s0 = new class {
  constructor() {
    this.TopKAssetsValidator = createMetaValidator("TopKAssetsValidator", X, null, !0);
    this.topKAssets = _$$n(e => {
      let t = R.parse(e);
      return this.TopKAssetsValidator.validate(async ({
        xr: e
      }) => await e.post("/api/top_k_library_styles_variables", APIParameterUtils.toAPIParameters(t)));
    });
  }
}();
export const r = $$s0;