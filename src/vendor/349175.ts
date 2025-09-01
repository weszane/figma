import { useRef } from "react";
import { E } from "../vendor/476615";
export function $$o0() {
  let e = useRef(!1);
  E(() => (e.current = !0, () => {
    e.current = !1;
  }), []);
  return e;
}
export const a = $$o0;