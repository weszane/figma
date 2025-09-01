import { useState, useCallback, useEffect } from "react";
import { Uz } from "../905/63728";
import { kz } from "../figma_app/171177";
import { cq } from "../905/794154";
export function $$o0(e, t) {
  let {
    isRoot,
    pop
  } = cq();
  let l = function (e) {
    let [t, i] = useState(() => e.current === document.activeElement);
    let r = useCallback(() => {
      i(!0);
    }, []);
    let a = useCallback(() => {
      i(!1);
    }, []);
    useEffect(() => {
      let t = e.current;
      t?.addEventListener("focus", r);
      t?.addEventListener("blur", a);
      return () => {
        t?.removeEventListener("focus", r);
        t?.removeEventListener("blur", a);
      };
    }, [a, r, e]);
    useEffect(() => {
      i(e.current === document.activeElement);
    }, [e]);
    return t;
  }(t);
  let d = useCallback(e => {
    e.repeat || (e.preventDefault(), pop());
  }, [pop]);
  kz(Uz.BACKSPACE, d, l && !e && !isRoot);
}
export const y = $$o0;