import { A } from "../vendor/711679";
let s = (e, r) => e.map((n, s, o) => {
  if (void 0 === n) return n;
  let a = A(n);
  return 0 === s || void 0 === e[s - 1] ? a : r(a - A(o[s - 1]));
}).reduce((e, r) => (e.length && void 0 !== r && void 0 !== e[e.length - 1] ? e.push(r + e[e.length - 1]) : e.push(r), e), []);
let $$o0 = e => s(e, e => 180 >= Math.abs(e) ? e : e - 360 * Math.sign(e));
export const O5 = $$o0;