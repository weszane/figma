import { vh, td } from "../figma_app/181241";
import { J } from "../905/202542";
export let $$a0 = new class {
  constructor() {
    this.UpgradeSchemaValidator = vh();
  }
  upgrade(e, t, i, a, s, o, l, d) {
    let c = a === J.ADMIN_AUTO_PATHWAY;
    return this.UpgradeSchemaValidator.validate(async ({
      xr: r
    }) => (await r.post(`/api/upgrade/auto_pathway/${e}/${t}`, td.toAPIParameters({
      upgrade_reason: i,
      billable_product_key: s,
      file_key: o,
      folder_id: l,
      license_type: d,
      is_admin_self_upgrade: c
    }))) ?? null);
  }
}();
export const R = $$a0;