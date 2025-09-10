import { languageCodes } from "src/905/816253";
import { communityPagePaths } from "src/905/528121";
import { customHistory } from "src/905/612521";
export function $$s1(e) {
  let t = e.slice(10);
  return Object.values(communityPagePaths).map(e => `${e}${t}`);
}
export function $$o2(e) {
  for (let [t, r] of Object.entries(communityPagePaths)) if (e === r || e.startsWith(`${r}/`)) return {
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
  return $$o2(customHistory.location.pathname)?.locale;
}
export function $$d0() {
  let e = $$o2(customHistory.location.pathname).basePath;
  return "" === e ? "/community" : e;
}
export const iY = $$d0;
export const p_ = $$s1;
export const po = $$o2;
export const zq = $$l3;
