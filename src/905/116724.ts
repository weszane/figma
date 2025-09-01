import { useState, useRef, useEffect, useCallback } from "react";
export function $$r0(e) {
  let [t, i] = useState(0);
  let r = useRef(e);
  useEffect(() => {
    r.current = e;
  }, [e]);
  let a = useCallback(() => {
    t && (window.clearTimeout(t), i(0));
  }, [t]);
  let s = useCallback(() => {
    a();
    r.current();
  }, [a]);
  let o = useCallback(e => {
    a();
    let t = setTimeout(() => {
      i(0);
      r.current();
    }, e ?? 0);
    i(t);
  }, [a]);
  useEffect(() => {
    if (t) return () => window.clearTimeout(t);
  }, [t]);
  return {
    isActive: 0 !== t,
    start: o,
    cancel: a,
    complete: s
  };
}
export const Z = $$r0;