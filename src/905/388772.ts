import { useContext, useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { l5 } from "../figma_app/770088";
import { viewportNavigatorContext } from "../figma_app/298911";
import { s as _$$s } from "../905/518538";
export function $$l0(e) {
  let t = _$$s();
  let i = useContext(viewportNavigatorContext);
  let l = useDispatch();
  return useCallback(n => {
    l(l5({
      thread: n,
      viewport: i,
      config: t,
      navigate: e
    }));
  }, [i, t, e, l]);
}
export const g = $$l0;