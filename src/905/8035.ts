import { YT } from "../905/232489";
export function $$r4(e) {
  return null != e;
}
export let $$a3 = Object.entries;
Object.values;
export let $$s0 = Object.keys;
export function $$o2(e) {
  let t = {};
  for (let [i, r] of $$a3(e)) {
    let e = i;
    if (e.includes("#")) {
      let t = e.split("#");
      e = t.slice(0, t.length - 1).join("");
    }
    t[e = YT(e)] = r;
  }
  return t;
}
export function $$l1(e, t = (e, t) => e > t) {
  return Object.entries(e).reduce((e, i) => t(e[1], i[1]) ? e : i)[0];
}
export const HP = $$s0;
export const Iq = $$l1;
export const Z3 = $$o2;
export const jO = $$a3;
export const t2 = $$r4;