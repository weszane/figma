import { jsx } from "react/jsx-runtime";
import { createContext, useMemo, useContext } from "react";
let a = createContext({
  isSelected: !1
});
export function $$s1({
  children: e,
  isSelected: t = !1
}) {
  return jsx(a.Provider, {
    value: useMemo(() => ({
      isSelected: t
    }), [t]),
    children: e
  });
}
export function $$o0() {
  return useContext(a);
}
export const e = $$o0;
export const y = $$s1;