import { useRef, useImperativeHandle } from "react";
export function $$r0(e) {
  let t = useRef(null);
  useImperativeHandle(e, () => t.current, []);
  return t;
}
export const M = $$r0;