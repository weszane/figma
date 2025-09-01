import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from "react";
let a = createContext(!1);
export function $$s1() {
  return useContext(a);
}
export function $$o0({
  isHidden: e,
  children: t
}) {
  let i = $$s1();
  let o = useMemo(() => i || e, [e, i]);
  return jsx(a.Provider, {
    value: o,
    children: t
  });
}
export const H = $$o0;
export const L = $$s1;