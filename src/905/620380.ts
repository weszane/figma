import { useRef, useEffect } from "react";
export function $$r0(e) {
  let t = useRef(e);
  useEffect(() => {
    t.current = e;
  }, [e]);
  return t;
}
export const H = $$r0;