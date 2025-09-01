import { languageCodes } from "../905/816253";
import { jt } from "../905/528121";
import { Ay } from "../905/612521";
export function $$s1(e) {
  let t = e.slice(10);
  return Object.values(jt).map(e => `${e}${t}`);
}
export function $$o2(e) {
  for (let [t, r] of Object.entries(jt)) if (e === r || e.startsWith(`${r}/`)) return {
    locale: t,
    basePath: r,
    remainingPath: e.slice(r.length)
  };
  return {
    locale: languageCodes.EN,
    basePath: "",
    remainingPath: e
  };
}
export function $$l3() {
  return $$o2(Ay.location.pathname)?.locale;
}
export function $$d0() {
  let e = $$o2(Ay.location.pathname).basePath;
  return "" === e ? "/community" : e;
}
export const iY = $$d0;
export const p_ = $$s1;
export const po = $$o2;
export const zq = $$l3;