import { N } from "../vendor/791199";
import { useInsertionEffect, useRef, useCallback } from "react";
var u;
let i = null !== (u = useInsertionEffect) && void 0 !== u ? u : N;
export function $$o0(e) {
  let t = useRef(null);
  i(() => {
    t.current = e;
  }, [e]);
  return useCallback((...e) => {
    let a = t.current;
    return a?.(...e);
  }, []);
}
export const J = $$o0;