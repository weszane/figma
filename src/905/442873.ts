import { useState, useEffect } from "react";
import { wA } from "../vendor/514228";
import { dI, sH } from "../905/537777";
import { sA, t9, Fw } from "../905/711212";
import { Eo } from "../figma_app/80990";
import { BQ } from "../figma_app/852050";
import { XN } from "../figma_app/633080";
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
  l = Eo.getCacheValueOrNull(sA(t, i));
  d = e.node_id;
  c = e.resolvedType;
  return l && n ? t9(dI(n), l, d, c, r) : null;
}
export function $$p0({
  variable: e,
  variableCollection: t
}) {
  let i = wA();
  let o = XN(e);
  let p = BQ(o ? e.node_id : void 0);
  let m = Px();
  let h = sH(t.node_id);
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
    o ? f(p) : g || (A(!0), i(Fw({
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