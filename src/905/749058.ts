import { useCallback } from "react";
import { useSprigWithSampling } from "../905/99656";
import { D6, X$, j_, H3 } from "../figma_app/465071";
export function $$s0(e, t) {
  let {
    Sprig
  } = useSprigWithSampling();
  let s = D6("useSprigOrgAdmin");
  let o = X$("useSprigOrgAdmin").unwrapOr(null);
  let l = j_(s).unwrapOr(!1);
  let d = H3(o);
  let c = s.unwrapOr(null)?.userId ?? void 0;
  return useCallback(() => {
    t && l && Sprig("track", e, {
      orgId: d,
      userId: c
    });
  }, [t, l, Sprig, e, d, c]);
}
export const q = $$s0;