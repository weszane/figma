import { useRef, useEffect } from "react";
export function $$r0(e, t, i) {
  let r = useRef(!1);
  useEffect(() => {
    !r.current && i(t) && (e(), r.current = !0);
  }, [e, i, t]);
}
export const R = $$r0;