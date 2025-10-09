import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { convertKiwiToString, convertStringToKiwi } from "../905/537777";
import { generateVariableSetThumbnailUrl, getVariableThumbnail, loadVariableSetThumbnails } from "../905/711212";
import { teamLibraryCache } from "../figma_app/80990";
import { getResolvedVariableValue } from "../figma_app/852050";
import { isLocalOrSubscribed } from "../figma_app/633080";
import { Px } from "../figma_app/152690";
export function $$u1({
  variable: e,
  variableCollectionKey: t,
  variableCollectionCheckpointId: i,
  collectionId: n,
  modeContext: r
}) {
  var l;
  var d;
  var c;
  l = teamLibraryCache.getCacheValueOrNull(generateVariableSetThumbnailUrl(t, i));
  d = e.node_id;
  c = e.resolvedType;
  return l && n ? getVariableThumbnail(convertKiwiToString(n), l, d, c, r) : null;
}
export function $$p0({
  variable: e,
  variableCollection: t
}) {
  let i = useDispatch<AppDispatch>();
  let o = isLocalOrSubscribed(e);
  let p = getResolvedVariableValue(o ? e.node_id : void 0);
  let m = Px();
  let h = convertStringToKiwi(t.node_id);
  h || console.error(`Invalid variableId in loading thumbnails: ${t.id}`);
  let [g, f] = useState("LIBRARY" === t.subscriptionStatus ? $$u1({
    variable: e,
    variableCollectionKey: t.key,
    variableCollectionCheckpointId: t.checkpoint_id,
    collectionId: h,
    modeContext: m
  }) : p);
  let [_, A] = useState("LIBRARY" === t.subscriptionStatus && !g);
  useEffect(() => {
    o ? f(p) : g || (A(!0), i(loadVariableSetThumbnails({
      variableSet: t,
      variableId: e.node_id,
      variableType: e.resolvedType,
      modeContext: m,
      callback: e => {
        f(e);
        A(!1);
      }
    })));
  }, [i, g, o, t, e.node_id, e.resolvedType, m, p]);
  return {
    thumbnailValue: g,
    isLoading: _
  };
}
export const A = $$p0;
export const Z = $$u1;