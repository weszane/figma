import { useState, useEffect } from "react";
export function $$r0(e = 10) {
  let [t, i] = useState(!1);
  useEffect(() => {
    let t = setTimeout(() => {
      i(!0);
    }, e);
    return () => {
      t && clearTimeout(t);
    };
  }, [e, i]);
  return t;
}
export const Z = $$r0;