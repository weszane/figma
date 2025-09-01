import { createContext, useId, useContext } from "react";
let r = createContext("");
export function $$a1() {
  return [useId(), r.Provider];
}
export function $$s0() {
  return useContext(r);
}
export const Z = $$s0;
export const q = $$a1;