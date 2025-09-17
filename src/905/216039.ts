import { useMemo } from "react";
import { RR } from "../figma_app/338442";
import { VariableDataType } from "../figma_app/763686";
import { selectWithShallowEqual } from "../905/103090";
import { isValidValue, isInvalidValue } from "../905/216495";
import { UT } from "../figma_app/95266";
import { On } from "../figma_app/323320";
import { u3 } from "../figma_app/152690";
import { logCmsError } from "../905/937198";
export function $$p0() {
  let e = useMemo(On, []);
  let t = selectWithShallowEqual(t => e(t, RR.TEXT));
  let i = u3(["TEXT_DATA"]);
  let p = u3(["CMS_SERIALIZED_RICH_TEXT_DATA"]);
  let m = i.consumedVariable || p.consumedVariable;
  let h = !!m;
  let g = selectWithShallowEqual(e => UT(e));
  let f = m && isValidValue(m) && m.type === VariableDataType.CMS_ALIAS;
  return isInvalidValue(g) ? null : h || t ? h ? f ? function (e) {
    let t = e && isValidValue(e) ? e.value.fieldSchemaId : null;
    let i = e && isValidValue(e) ? e.value.collectionId : null;
    return null == t || null == i ? (logCmsError("Expected fieldSchemaId and collectionId to be present.", {
      fieldSchemaId: t,
      collectionId: i
    }), null) : {
      boundAssetType: "cms",
      fieldSchemaId: t,
      collectionId: i
    };
  }(m) : {
    boundAssetType: "variable",
    currentValue: g
  } : {
    boundAssetType: "prop",
    currentValue: g
  } : null;
}
export const L = $$p0;