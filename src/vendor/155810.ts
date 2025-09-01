import { useRef } from "react";
export function $$n0(e, t) {
  let a = useRef(null);
  e && a.current && t(e, a.current) && (e = a.current);
  a.current = e;
  return e;
}
export const k = $$n0;