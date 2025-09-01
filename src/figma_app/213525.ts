import { useCallback } from "react";
import { d4 } from "../vendor/514228";
import { _G } from "../figma_app/516028";
import { Mb, El } from "../figma_app/646357";
import { D2 } from "../905/18797";
import { je } from "../figma_app/155728";
import { D } from "../905/367723";
import { Yl } from "../figma_app/10098";
import { ce } from "../figma_app/177636";
export function $$p0() {
  let e = je();
  let t = d4(e => e.loadingState);
  return !!D() && (!e.data || e.data.some(e => {
    let r = Mb(e.libraryKey);
    return !D2(t, r);
  }));
}
export function $$_1() {
  let e = d4(e => e.loadingState);
  let t = _G();
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