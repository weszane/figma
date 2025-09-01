import { jsx } from "react/jsx-runtime";
import { createContext, useMemo } from "react";
export let $$a1 = createContext(null);
export function $$s0({
  name: e,
  children: t,
  order: r
}) {
  let s = useMemo(() => ({
    name: e,
    priorityMap: r.reduce((e, t, n) => (e.set(t, r.length - n), e), new Map())
  }), [e, r]);
  return jsx($$a1.Provider, {
    value: s,
    children: t
  });
}
export const A = $$s0;
export const y = $$a1;