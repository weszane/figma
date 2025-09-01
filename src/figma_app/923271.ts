import { jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext } from "react";
let a = createContext({
  getLibrary: () => void 0,
  getPage: () => void 0,
  getFolder: () => void 0
});
export function $$s1({
  children: e,
  assetPanelItemsByLibraryKey: t
}) {
  let r = useCallback(e => {
    if (e) return t.allLibrariesUnsorted.get(e);
  }, [t]);
  let s = useCallback((e, t) => {
    if (!e || !t) return;
    let n = r(e);
    return n?.pages.get(t);
  }, [r]);
  let o = useCallback((e, t, r) => {
    if (!e || !t) return;
    let n = s(e, t);
    if (!n) return;
    if (!r) return n.assets;
    let i = n.assets;
    for (let e of r) if (!(i = i.subtrees.get(e))) return;
    return i;
  }, [s]);
  return jsx(a.Provider, {
    value: {
      getLibrary: r,
      getPage: s,
      getFolder: o
    },
    children: e
  });
}
export function $$o0() {
  return useContext(a);
}
export const G = $$o0;
export const K = $$s1;