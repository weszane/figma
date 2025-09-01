import { useRef, useEffect } from "react";
export function $$r0(e) {
  let t = useRef(!1);
  useEffect(() => {
    if (t.current) return;
    let i = e();
    t.current = !0;
    return () => i?.();
  }, []);
}
export const h = $$r0;