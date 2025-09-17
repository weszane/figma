import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { getCollectionViewStatus } from "../figma_app/618433";
import { setupCollectionSummary } from "../905/880040";
import { _j } from "../figma_app/843119";
import { ZS, o6, Rj } from "../figma_app/986594";
import { U } from "../905/492359";
import { useCurrentFileKey } from "../figma_app/516028";
var $$u2 = (e => (e.DISABLED_FOR_INSTANCE_SUBLAYER = "DISABLED_FOR_INSTANCE_SUBLAYER", e.DISABLED_FOR_INSTANCE_SUBLAYER_IN_CMS_LIST = "DISABLED_FOR_INSTANCE_SUBLAYER_IN_CMS_LIST", e.DISABLED_FOR_NOT_IN_CMS_CONTAINER = "DISABLED_FOR_NOT_IN_CMS_CONTAINER", e.DISABLED_FOR_NO_IMAGE_FIELD = "DISABLED_FOR_NO_IMAGE_FIELD", e))($$u2 || {});
export function $$p3(e) {
  return e.some(e => "DISABLED_FOR_NOT_IN_CMS_CONTAINER" === e.disabledReason);
}
export function $$_0() {
  let e = ZS(["TEXT", "CMS_RICH_TEXT"]);
  let {
    collections
  } = setupCollectionSummary({
    fileKey: useCurrentFileKey()
  });
  let r = o6();
  let n = Rj();
  let a = U() && null !== collections && collections.length > 0;
  let u = !getFeatureFlags().cms_rt_instances && r;
  let p = e ? void 0 : "DISABLED_FOR_NOT_IN_CMS_CONTAINER";
  return {
    showDakotaFieldPicker: a,
    filteredFieldTypes: [{
      fieldType: _j.PLAIN_TEXT,
      disabledReason: p
    }, {
      fieldType: _j.DATE,
      disabledReason: void 0
    }, {
      fieldType: _j.RICH_TEXT,
      disabledReason: p || (u ? n ? "DISABLED_FOR_INSTANCE_SUBLAYER_IN_CMS_LIST" : "DISABLED_FOR_INSTANCE_SUBLAYER" : void 0)
    }]
  };
}
export function $$h1() {
  let e = ZS();
  let t = function () {
    let e = getSingletonSceneGraph().getDirectlySelectedNodes();
    let t = e[0]?.getNearestDakotaCollectionId();
    let r = getCollectionViewStatus(t ?? "");
    return !!(r.data?.fieldSchemas ?? []).some(e => _j.IMAGE === e.fieldType);
  }();
  let {
    collections
  } = setupCollectionSummary({
    fileKey: useCurrentFileKey()
  });
  return {
    showDakotaFieldPicker: U() && !!getFeatureFlags().dakota_field_image && null !== collections && collections.length > 0,
    filteredFieldTypes: [{
      fieldType: _j.IMAGE,
      disabledReason: e ? t ? void 0 : "DISABLED_FOR_NO_IMAGE_FIELD" : "DISABLED_FOR_NOT_IN_CMS_CONTAINER"
    }]
  };
}
export const L6 = $$_0;
export const ZI = $$h1;
export const pP = $$u2;
export const wv = $$p3;