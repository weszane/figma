import { useMemo } from "react";
import { getSingletonSceneGraph } from "../905/700578";
import { Tv } from "../figma_app/311375";
export function $$s0(e = !0) {
  let t = Tv();
  return useMemo(() => {
    if (!t?.length) return [];
    let i = getSingletonSceneGraph();
    return t?.reduce((t, n) => {
      let r = i.get(n);
      r && $$$$o1(r, e) && t.push(r);
      return t;
    }, []);
  }, [t, e]);
}
export function $$$$o1(e, t = !0) {
  return !!e && (t ? e.isTopLevelFrame() && e.isSlideOrSlidelikeFrame() : e.isSlideOrSlidelikeFrame());
}
export const A = $$s0;
export const o = $$$$o1;