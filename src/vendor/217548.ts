import i from "../vendor/337273";
import s from "../vendor/960798";
import o from "../vendor/488165";
import a from "../vendor/672587";
import h from "../vendor/762629";
import d from "../vendor/817584";
import p from "../vendor/467957";
import g from "../vendor/599769";
import m from "../vendor/154164";
import v from "../vendor/99302";
import y from "../vendor/509185";
import b from "../vendor/675279";
import O from "../vendor/579571";
import x from "../vendor/9226";
import w from "../vendor/261656";
function k(e, r, n, k, _, S, E) {
  var A = x(e, n);
  var C = x(r, n);
  var T = E.get(C);
  if (T) {
    i(e, n, T);
    return;
  }
  var I = S ? S(A, C, n + "", e, r, E) : void 0;
  var P = void 0 === I;
  if (P) {
    var R = p(C);
    var M = !R && m(C);
    var D = !R && !M && O(C);
    I = C;
    R || M || D ? p(A) ? I = A : g(A) ? I = a(A) : M ? (P = !1, I = s(C, !0)) : D ? (P = !1, I = o(C, !0)) : I = [] : b(C) || d(C) ? (I = A, d(A) ? I = w(A) : (!y(A) || v(A)) && (I = h(C))) : P = !1;
  }
  P && (E.set(C, I), _(I, C, k, S, E), E.$$delete(C));
  i(e, n, I);
}
module.exports = k;