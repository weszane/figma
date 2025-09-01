import { y } from "../905/409121";
export function $$r0(e, t = !1) {
  let i = e.deltaY;
  let a = e.ctrlKey && !t && (y.isChrome() || y.isFirefox());
  a ? i /= -100 : 0 !== i && (i = i / Math.abs(i) * Math.min(Math.abs(i), 10 * Math.cbrt(Math.abs(i))));
  return a ? Math.pow(4, i) : Math.pow(.995, i);
}
export const Z = $$r0;