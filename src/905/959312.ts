import { createContext, useContext, useMemo } from "react";
import { D } from "../905/490996";
let $$a2 = "SKIP_RECORDING";
let $$s3 = createContext(null);
export function $$o1() {
  return !!useContext($$s3);
}
export function $$l0(e, t, i) {
  let a = (useContext($$s3) || D)(useMemo(() => e, i), t);
  return e ? a : e;
}
export const Qv = $$l0;
export const _c = $$o1;
export const aH = $$a2;
export const g5 = $$s3;