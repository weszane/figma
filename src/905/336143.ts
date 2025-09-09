import { createContext, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useStableMemo } from "../905/19536";
import { ZC } from "../figma_app/39751";
import { qp } from "../905/977779";
import { B8 } from "../figma_app/255679";
import { q5, K5 } from "../figma_app/516028";
import { cU } from "../figma_app/646357";
import { LH } from "../905/872904";
import { M4 } from "../905/713695";
import { e6 } from "../905/404538";
import { Mz } from "../vendor/925040";
import { dK } from "../figma_app/889655";
import { C9, jf, MH } from "../figma_app/141508";
import { D } from "../905/347702";
let f = Mz([e => e.library.used__LIVEGRAPH], e => Object.values(e.styles));
let _ = Mz([f], e => {
  let t = {};
  for (let i of e) "loaded" === i.status && (t[i.data.key] = i.data);
  return t;
});
let $$v0 = createContext(null);
let $$I1 = D(() => {
  let e = useDispatch();
  let [t, i] = useState(null);
  let g = useSelector(dK);
  let f = useSelector(C9);
  let b = useSelector(jf);
  let v = q5();
  let I = LH();
  let E = useMemo(() => {
    let e = new Set();
    for (let t of [...f, ...b].map(g.get)) t && !t.isState && t.sourceLibraryKey && t.sourceLibraryKey !== v?.libraryKey && e.add(t.sourceLibraryKey);
    return Array.from(e);
  }, [g, f, b, v]);
  let x = useSelector(MH);
  let S = useSelector(e => e.fileVersion);
  let w = useAtomWithSubscription(qp);
  let C = K5();
  let T = ZC(x);
  let k = useSelector(_);
  let R = B8();
  useEffect(() => {
    x !== T && Promise.all([cU(g, x, k, w, I, C, e), M4.fetch(e6.EverPublishedLibraryQuery({
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