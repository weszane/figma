import { useMemo } from "react";
import { RR } from "../figma_app/338442";
import { Z_n } from "../figma_app/763686";
import { selectWithShallowEqual } from "../905/103090";
import { hS, gl } from "../905/216495";
import { UT } from "../figma_app/95266";
import { On } from "../figma_app/323320";
import { u3 } from "../figma_app/152690";
import { sD } from "../905/937198";
export function $$p0() {
  let e = useMemo(On, []);
  let t = selectWithShallowEqual(t => e(t, RR.TEXT));
  let i = u3(["TEXT_DATA"]);
  let p = u3(["CMS_SERIALIZED_RICH_TEXT_DATA"]);
  let m = i.consumedVariable || p.consumedVariable;
  let h = !!m;
  let g = selectWithShallowEqual(e => UT(e));
  let f = m && hS(m) && m.type === Z_n.CMS_ALIAS;
  return gl(g) ? null : h || t ? h ? f ? function (e) {
    let t = e && hS(e) ? e.value.fieldSchemaId : null;
    let i = e && hS(e) ? e.value.collectionId : null;
    return null == t || null == i ? (sD("Expected fieldSchemaId and collectionId to be present.", {
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