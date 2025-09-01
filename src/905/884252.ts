import { jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
let a = createContext({});
export function $$s0({
  children: e,
  currentVariableSet: t
}) {
  return jsx(a.Provider, {
    value: {
      currentVariableSet: t
    },
    children: e
  });
}
export function $$o1() {
  return useContext(a);
}
export const P = $$s0;
export const n = $$o1;