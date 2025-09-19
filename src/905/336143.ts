import { createContext, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useStableMemo } from "../905/19536";
import { useLatestRef } from "../figma_app/922077";
import { qp } from "../905/977779";
import { useHasResourcePresetKey } from "../figma_app/255679";
import { selectCurrentFile, useFileLibraryKeys } from "../figma_app/516028";
import { cU } from "../figma_app/646357";
import { getParentOrgId } from "../905/872904";
import { liveStoreInstance } from "../905/713695";
import { EverPublishedLibraryQuery } from "../905/404538";
import { createSelector } from "../vendor/925040";
import { selectSceneGraph } from "../figma_app/889655";
import { subscribedSymbolsNodeIdsFromLoadedPagesSelector, subscribedStateGroupsNodeIdsFromLoadedPagesSelector, allSubscribedStylesNodeIdsFromLoadedPagesSelector } from "../figma_app/141508";
import { D } from "../905/347702";
let f = createSelector([e => e.library.used__LIVEGRAPH], e => Object.values(e.styles));
let _ = createSelector([f], e => {
  let t = {};
  for (let i of e) "loaded" === i.status && (t[i.data.key] = i.data);
  return t;
});
let $$v0 = createContext(null);
let $$I1 = D(() => {
  let e = useDispatch();
  let [t, i] = useState(null);
  let g = useSelector(selectSceneGraph);
  let f = useSelector(subscribedSymbolsNodeIdsFromLoadedPagesSelector);
  let b = useSelector(subscribedStateGroupsNodeIdsFromLoadedPagesSelector);
  let v = selectCurrentFile();
  let I = getParentOrgId();
  let E = useMemo(() => {
    let e = new Set();
    for (let t of [...f, ...b].map(g.get)) t && !t.isState && t.sourceLibraryKey && t.sourceLibraryKey !== v?.libraryKey && e.add(t.sourceLibraryKey);
    return Array.from(e);
  }, [g, f, b, v]);
  let x = useSelector(allSubscribedStylesNodeIdsFromLoadedPagesSelector);
  let S = useSelector(e => e.fileVersion);
  let w = useAtomWithSubscription(qp);
  let C = useFileLibraryKeys();
  let T = useLatestRef(x);
  let k = useSelector(_);
  let R = useHasResourcePresetKey();
  useEffect(() => {
    x !== T && Promise.all([cU(g, x, k, w, I, C, e), liveStoreInstance.fetch(EverPublishedLibraryQuery.EverPublishedLibraryQuery({
      libraryKeys: E
    }))]).then(([{
      usedStylesByLibraryKey: e
    }, t]) => {
      let n = Array.from(new Set([...t, ...Object.keys(e)])).sort();
      i({
        allUsedStylesByLibraryKey: e,
        allUsedLibraryKeys: n
      });
    });
  }, [I, C, e, S, w, g, E, x, T, k, R]);
  return useStableMemo(t);
});
export const r = $$v0;
export const F = $$I1;