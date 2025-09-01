import { useRef, useState, useCallback, useLayoutEffect, useMemo } from "react";
export function $$i0() {
  let e = useRef(null);
  let [t, r] = useState(0);
  let i = useCallback(e => {
    r(Math.floor((e - 4 + 32) / 304));
  }, []);
  useLayoutEffect(() => {
    let t = e.current;
    if (!t) return;
    i(t.clientWidth);
    let r = new ResizeObserver(e => {
      i(e[0]?.target.clientWidth ?? 0);
    });
    r.observe(e.current);
    return () => r.disconnect();
  }, [e, i]);
  return useMemo(() => ({
    numberOfTiles: t,
    sizeRef: e
  }), [t, e]);
}
export const X = $$i0;