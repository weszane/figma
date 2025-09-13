import { useContext, useCallback } from "react";
import { useDispatch } from "react-redux";
import { At } from "../figma_app/770088";
import { viewportNavigatorContext } from "../figma_app/298911";
import { NAVIGATION_BUTTONS } from "../905/380385";
import { s as _$$s } from "../905/518538";
export function $$d0(e) {
  let t = _$$s();
  let i = useContext(viewportNavigatorContext);
  let d = useDispatch();
  return useCallback(n => {
    d(At({
      thread: n,
      viewport: i,
      config: t,
      source: NAVIGATION_BUTTONS.accessibilityCommentPin,
      navigate: e
    }));
  }, [i, t, e, d]);
}
export const x = $$d0;