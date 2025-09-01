import { useState, useRef, useCallback, useMemo, useLayoutEffect } from "react";
export function $$r0(e, t, i) {
  let [r, a] = useState();
  let s = useRef([]);
  let o = useCallback(() => {
    s.current = [];
    a(void 0);
  }, []);
  let l = useMemo(() => e.map(e => e.id), [e]);
  let d = useCallback(e => {
    e === t ? s.current = l.filter(t => t !== e) : s.current = [e];
    a(e);
  }, [t, l]);
  useLayoutEffect(() => {
    s.current.includes(t) && o();
  }, [t, o]);
  let c = useCallback(e => {
    let t = e.checkpoints.every(e => {
      let t = e.check();
      t || e.onFail?.();
      return t;
    });
    t || (e.onFail?.(), d(e.id));
    return t;
  }, [d]);
  let u = useCallback(() => {
    let n = e.findIndex(e => e.id === t);
    for (let t = 0; t <= n; t++) if (!c(e[t])) {
      i?.();
      return !1;
    }
    return !0;
  }, [t, c, i, e]);
  let p = useCallback(() => e.every(e => !!c(e) || (i?.(), !1)), [c, i, e]);
  return useMemo(() => ({
    stepWithErrors: r,
    clearStepWithErrors: o,
    checkProgress: u,
    checkOverallProgress: p
  }), [p, u, o, r]);
}
export const o = $$r0;