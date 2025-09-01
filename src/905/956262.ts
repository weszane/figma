import { useState, useCallback, useMemo } from "react";
export function $$r0({
  numSteps: e,
  onComplete: t
}) {
  if (e < 1) throw Error("Cannot create sequence with less than 1 step");
  let [i, r] = useState(0);
  let a = useCallback(() => {
    r(i => i === e - 1 ? (t(), i) : i + 1);
  }, [e, t]);
  let s = useCallback(() => {
    r(e => e > 0 ? e - 1 : e);
  }, []);
  let o = useCallback(t => {
    t >= 0 && t < e && r(t);
  }, [e]);
  let l = useCallback(() => {
    r(0);
  }, []);
  return useMemo(() => ({
    currentStep: i,
    goTo: o,
    next: a,
    back: s,
    reset: l
  }), [i, o, a, s, l]);
}
export const A = $$r0;