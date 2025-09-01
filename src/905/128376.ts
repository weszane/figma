import { useCallback } from "react";
import { c } from "../905/177375";
export function $$a0(e, t = !0) {
  return useCallback(i => {
    c(e, i);
    i && (i.autofocus = t);
  }, [e, t]);
}
export const X = $$a0;