import { useState, useCallback, useEffect } from "react";
import { H } from "../905/620380";
export function $$a0(e, t) {
  let [i, a] = useState(null);
  let s = H(t);
  let o = useCallback((e, ...t) => {
    a(e);
    s.current(e, ...t);
  }, [s]);
  useEffect(() => {
    a(e);
  }, [e]);
  return [i ?? e, o];
}
export const L = $$a0;