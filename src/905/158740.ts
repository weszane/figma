import { createContext, useContext } from "react";
import { lQ } from "src/905/266289";
let a = createContext(null);
let s = {
  version: "ui2",
  updateMode: lQ
};
let $$o1 = a.Provider;
export function $$l2() {
  return useContext(a);
}
export function $$d0() {
  return useContext(a) || (globalThis.process?.env?.NODE_ENV !== "test" && console.debug("No theme provider exists currently, returning defaults, but switching modes is disabled"), s);
}
export const DP = $$d0;
export const Dx = $$o1;
export const lM = $$l2;
