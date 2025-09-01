import { Y } from "../vendor/259657";
import { B } from "../vendor/731692";
import { J } from "../vendor/944490";
import { useMemo } from "react";
let $$o = new WeakMap();
export function $$l0(e, t) {
  let a;
  return t && (0, B).getGlobalDictionaryForPackage(t) || ((a = $$o.get(e)) || (a = new B(e), $$o.set(e, a)), a);
}
export function $$s1(e, t) {
  let {
    locale
  } = Y();
  let n = $$l0(e, t);
  return useMemo(() => new J(locale, n), [locale, n]);
}
export const e = $$l0;
export const o = $$s1;