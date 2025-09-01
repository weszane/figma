import i from "../vendor/655405";
import s from "../vendor/822339";
import o from "../vendor/473334";
import a from "../vendor/825933";
import h from "../vendor/189577";
import d from "../vendor/467957";
import p from "../vendor/154164";
import g from "../vendor/579571";
var m = 1;
var v = "[object Arguments]";
var y = "[object Array]";
var b = "[object Object]";
var O = Object.prototype.hasOwnProperty;
function x(e, r, n, x, w, k) {
  var _ = d(e);
  var S = d(r);
  var E = _ ? y : h(e);
  var A = S ? y : h(r);
  E = E == v ? b : E;
  A = A == v ? b : A;
  var C = E == b;
  var T = A == b;
  var I = E == A;
  if (I && p(e)) {
    if (!p(r)) return !1;
    _ = !0;
    C = !1;
  }
  if (I && !C) {
    k || (k = new i());
    return _ || g(e) ? s(e, r, n, x, w, k) : o(e, r, E, n, x, w, k);
  }
  if (!(n & m)) {
    var P = C && O.call(e, "__wrapped__");
    var R = T && O.call(r, "__wrapped__");
    if (P || R) {
      var M = P ? e.value() : e;
      var D = R ? r.value() : r;
      k || (k = new i());
      return w(M, D, n, x, k);
    }
  }
  return !!I && (k || (k = new i()), a(e, r, n, x, w, k));
}
module.exports = x;