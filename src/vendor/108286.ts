import { L2, Kg, gd } from "../vendor/314131";
export function $$f2(e, n = 0) {
  return "string" != typeof e || 0 === n ? e : e.length <= n ? e : `${e.slice(0, n)}...`;
}
export function $$r1(e, n) {
  if (!Array.isArray(e)) return "";
  let i = [];
  for (let n = 0; n < e.length; n++) {
    let f = e[n];
    try {
      L2(f) ? i.push("[VueViewModel]") : i.push(String(f));
    } catch (e) {
      i.push("[value cannot be serialized]");
    }
  }
  return i.join(n);
}
export function $$a0(e, n = [], i = !1) {
  return n.some(n => function (e, n, i = !1) {
    return !!Kg(e) && (gd(n) ? n.test(e) : !!Kg(n) && (i ? e === n : e.includes(n)));
  }(e, n, i));
}
export const Xr = $$a0;
export const gt = $$r1;
export const xv = $$f2;