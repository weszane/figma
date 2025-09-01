import { useState, useRef, useEffect } from "react";
export function $$r0(e) {
  let [t, i] = useState(e);
  let r = useRef(e);
  useEffect(() => {
    r.current = t;
  }, [t]);
  return [r, t, i];
}
export const J = $$r0;