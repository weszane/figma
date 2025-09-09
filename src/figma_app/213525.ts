import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useOpenFileLibraryKey } from "../figma_app/516028";
import { Mb, El } from "../figma_app/646357";
import { D2 } from "../905/18797";
import { je } from "../figma_app/155728";
import { D } from "../905/367723";
import { Yl } from "../figma_app/10098";
import { ce } from "../figma_app/177636";
export function $$p0() {
  let e = je();
  let t = useSelector(e => e.loadingState);
  return !!D() && (!e.data || e.data.some(e => {
    let r = Mb(e.libraryKey);
    return !D2(t, r);
  }));
}
export function $$_1() {
  let e = useSelector(e => e.loadingState);
  let t = useOpenFileLibraryKey();
  let r = ce();
  let l = r.data?.assetsByLibraryKey;
  return useCallback(r => {
    if (!r || r === Yl || l?.has(r) || t === r) return !1;
    let n = Mb(r);
    return !D2(e, n) && !El("", r);
  }, [l, t, e]);
}
export const U = $$p0;
export const q = $$_1;