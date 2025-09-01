import { useCallback } from "react";
import { eU, zl, fp } from "../figma_app/27355";
import { Wh } from "../figma_app/615482";
let a = Wh(() => eU([]));
let l = Wh(() => eU(new Map()));
export function $$o3() {
  let e = zl.get(l);
  zl.set(a, Array.from(e.values()));
}
export function $$c0() {
  zl.set(l, new Map());
}
export function $$d1() {
  zl.set(a, []);
}
export function $$u2() {
  let [e, t] = fp(l);
  let [n, s] = fp(a);
  let o = useCallback(() => {
    s([]);
  }, [s]);
  return {
    communityAttribution: e,
    addCommunityAttribution: useCallback((e, n) => {
      t(t => {
        let r = new Map(t);
        r.set(e, n);
        return r;
      });
    }, [t]),
    communityAttributionDisplay: n,
    clearCommunityAttributionDisplay: o
  };
}
export const En = $$c0;
export const Ic = $$d1;
export const Pe = $$u2;
export const gC = $$o3;