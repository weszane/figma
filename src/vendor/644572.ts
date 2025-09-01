import { useRef } from "react";
export function $$s0(e) {
  let r = useRef(null);
  null === r.current && (r.current = e());
  return r.current;
}
export const M = $$s0;