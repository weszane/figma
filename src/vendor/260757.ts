import { FK } from "../vendor/157953";
export function $$s1(e) {
  var r = FK(e);
  return function (n, i, s, o) {
    for (a = "", h = 0, void 0; h < r; h++) {
      var a;
      var h;
      a += e[h](n, i, s, o) || "";
    }
    return a;
  };
}
export function $$o0(e) {
  return function (r) {
    !r.root && (r = r.$$return) && e(r);
  };
}
export const MY = $$o0;
export const r1 = $$s1;