import { createContext, useContext } from "react";
import { lQ } from "../905/266289";
let a = createContext(null);
let s = {
  color: "light",
  brand: "design",
  enhancedContrast: !1,
  addThemeListener: () => lQ
};
let $$o0 = a.Provider;
export function $$l1() {
  return useContext(a) || (globalThis.process?.env?.NODE_ENV !== "test" && console.debug("No theme provider exists currently, returning defaults, but switching modes is disabled"), s);
}
export const A = $$o0;
export const G = $$l1;
