import { jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
let $$a = createContext("dark");
export function $$s0() {
  return useContext($$a);
}
export function $$o1({
  mode: e,
  children: t
}) {
  return jsx($$a.Provider, {
    value: e,
    children: t
  });
}
$$o1.displayName = "DropdownThemeProvider";
export const S = $$s0;
export const a = $$o1;