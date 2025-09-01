import { useState, useRef, useEffect, useLayoutEffect } from "react";
export function $$r0(e) {
  let [t, i] = useState(e.value);
  let r = useRef(null);
  let a = useRef(null);
  useEffect(() => () => {
    a.current && clearTimeout(a.current);
  }, []);
  useLayoutEffect(() => {
    null == a.current ? (i(e.value), r.current = null) : r.current = e.value;
  }, [e.value]);
  return {
    ...e,
    value: t,
    onChange: (t, n) => {
      a.current && clearTimeout(a.current);
      a.current = window.setTimeout(() => {
        a.current = null;
        i(r.current ?? "");
        r.current = null;
      }, 1e3);
      i(t);
      e.onChange(t, n);
    }
  };
}
export const M = $$r0;