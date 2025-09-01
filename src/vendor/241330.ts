import { A } from "../vendor/65441";
function l(e, n) {
  return function (t) {
    return e + t * n;
  };
}
export function $$a1(e, n) {
  var t = n - e;
  return t ? l(e, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : A(isNaN(e) ? n : e);
}
export function $$i2(e) {
  return 1 == (e = +e) ? $$u0 : function (n, t) {
    var l;
    var a;
    var i;
    return t - n ? (l = n, a = t, l = Math.pow(l, i = e), a = Math.pow(a, i) - l, i = 1 / i, function (e) {
      return Math.pow(l + e * a, i);
    }) : A(isNaN(n) ? t : n);
  };
}
export function $$u0(e, n) {
  var t = n - e;
  return t ? l(e, t) : A(isNaN(e) ? n : e);
}
export const Ay = $$u0;
export const lG = $$a1;
export const uN = $$i2;