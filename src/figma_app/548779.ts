import { useRef, useImperativeHandle } from "react";
export function $$i0(e) {
  let t = useRef(null);
  useImperativeHandle(e, () => t.current);
  return t;
}
export const M = $$i0;