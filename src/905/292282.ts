import { atom } from "jotai";
import { selectAtom } from "src/vendor/812047";
import a from "src/vendor/128080";
export function $$s1(e) {
  return selectAtom(e, e => e, a);
}
export function $$o0(e, t) {
  return $$s1(atom(i => {
    let n = [];
    for (let t = 0; t < e.length; t++) n[t] = i(e[t]);
    return t(...n);
  }));
}
export const p6 = $$o0;
export const tP = $$s1;
