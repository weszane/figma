import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { SceneGraphHelpers } from "../figma_app/763686";
import { useAtomWithSubscription } from "../figma_app/27355";
import { k9 } from "../905/19536";
import { isInvalidValue } from "../905/216495";
import { B9 } from "../figma_app/722362";
import { _S } from "../figma_app/516028";
import { lm } from "../figma_app/745458";
import { Rn } from "../figma_app/357047";
import { nD } from "../905/92359";
export function $$h0(e) {
  let t = Rn("restore-symbol-or-state-group");
  let i = useSelector(e => e.mirror.appModel[t]);
  let h = B9();
  let g = useAtomWithSubscription(_S);
  let f = k9(() => {
    let t = new Set();
    for (let i of e) {
      let e = h.get(i);
      if (e?.type !== "INSTANCE") continue;
      let n = e.symbolId;
      n && t.add(n);
    }
    return t;
  }, [e, h]);
  let {
    backingSymbolGUID,
    backingStateGroupGUID
  } = nD(f, h);
  let y = useMemo(() => isInvalidValue(backingSymbolGUID) || null === backingSymbolGUID ? null : h.get(backingSymbolGUID), [backingSymbolGUID, h]);
  let b = useMemo(() => isInvalidValue(backingStateGroupGUID) || null === backingStateGroupGUID ? null : h.get(backingStateGroupGUID), [backingStateGroupGUID, h]);
  let v = useMemo(() => !!y && y.isSubscribedAsset && y.sourceLibraryKey !== g, [y, g]);
  let I = useMemo(() => !!b && b.isSubscribedAsset && b.sourceLibraryKey !== g, [b, g]);
  let E = useMemo(() => !!(y && SceneGraphHelpers.nodeIsSoftDeleted(y.guid)), [y]);
  let x = useMemo(() => !!(b && SceneGraphHelpers.nodeIsSoftDeleted(b.guid)), [b]);
  let S = useMemo(() => {
    if (b) return b;
    if (!y) return null;
    if (E) {
      let e = SceneGraphHelpers.findBestAncestorInRestorePath(y.guid);
      let t = "" === e ? null : h.get(e);
      if (t?.isStateGroup) return t;
    }
    return null;
  }, [y, b, E, h]);
  let w = useSelector(lm);
  let C = useMemo(() => b && x ? b : y && E ? y : null, [y, E, x, b]);
  let T = useMemo(() => {
    let e;
    e = C ? C.isStateGroup ? "STATE_GROUP" : S ? "SYMBOL_AS_STATE" : "SYMBOL_AS_NON_STATE" : null;
    i || (e = null);
    return e;
  }, [i, C, S]);
  let k = useMemo(() => y?.componentKey && w.get(y.componentKey) ? "DELETED_SUBSCRIBED_STATE" : "SYMBOL_AS_STATE" === T ? "DELETED_LOCAL_STATE" : null, [w, y, T]);
  return useMemo(() => ({
    backingSymbolGUID,
    backingStateGroupGUID,
    singleBackingSymbol: y,
    singleBackingStateGroup: b,
    isBackingSymbolShared: v,
    isBackingStateGroupShared: I,
    isBackingSymbolSoftDeleted: E,
    isBackingStateGroupSoftDeleted: x,
    affiliatedStateGroup: S,
    affiliatedStateGroupId: S?.guid,
    symbolOrStateGroupToRestore: C,
    restoreType: T,
    stateResetType: k
  }), [backingSymbolGUID, backingStateGroupGUID, y, b, v, I, E, x, S, C, T, k]);
}
export const $ = $$h0;