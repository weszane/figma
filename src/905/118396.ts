import { useState, useRef, useCallback } from "react";
import { Fonts } from "../figma_app/763686";
export function $$a0() {
  let [e, t] = useState(!1);
  let i = useRef(0);
  let a = useRef(0);
  let s = useCallback(() => {
    clearInterval(i.current);
    i.current = 0;
    a.current = 0;
  }, [i, a]);
  return {
    fontsAreLoading: e,
    checkFontsAreLoading: useCallback(() => {
      i.current && s();
      let e = Fonts?.fontsAreLoading() ?? !1;
      t(e);
      e && (i.current = setInterval(() => {
        let e = Fonts?.fontsAreLoading() ?? !1;
        t(e);
        a.current = a.current + 1;
        (!e || a.current >= 600) && s();
      }, 50));
    }, [t, i, a, s])
  };
}
export const B = $$a0;