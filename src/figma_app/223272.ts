import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { getFeatureFlags } from "../905/601108";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { L } from "../905/216039";
import { R3 } from "../figma_app/831569";
import { Fc } from "../905/468313";
export function $$d0() {
  let e = useDeepEqualSceneValue(e => e.getDirectlySelectedNodes().some(e => !!e && "TEXT" === e.type && !e.isSlideNumber && (null !== e.containingSymbolId || e.boundVariables.characters?.type === "VARIABLE_ALIAS" || void 0 !== e.propRefs["text-data"] || !!getFeatureFlags().dakota && !!e.isBoundToDakotaField)));
  let t = useDeepEqualSceneValue(e => e.getDirectlySelectedNodes().some(e => !!e && !!(("TEXT" === e.type || "CMS_RICH_TEXT" === e.type) && e.getNearestDakotaCollectionId())));
  let r = !0 === getFeatureFlags().dakota && t;
  let d = useDeepEqualSceneValue(e => e.getDirectlySelectedNodes().some(e => !!e && "TEXT" === e.type && !e.isSlideNumber && null !== e.containingSymbolId));
  let c = L();
  return e || r ? jsxs(Fragment, {
    children: [jsx(Fc, {
      textContentBoundAsset: c,
      recordingKey: "typePanel"
    }), d && jsx(R3, {})]
  }) : null;
}
export const P = $$d0;