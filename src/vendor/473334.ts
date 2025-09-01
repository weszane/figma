import i, { prototype } from "../vendor/50613";
import s from "../vendor/742904";
import o from "../vendor/416412";
import a from "../vendor/822339";
import h from "../vendor/109665";
import d from "../vendor/514035";
var p = 1;
var g = 2;
var m = "[object Boolean]";
var v = "[object Date]";
var y = "[object Error]";
var b = "[object Map]";
var O = "[object Number]";
var x = "[object RegExp]";
var w = "[object Set]";
var k = "[object String]";
var _ = "[object Symbol]";
var S = "[object ArrayBuffer]";
var E = "[object DataView]";
var A = i ? prototype : void 0;
var C = A ? A.valueOf : void 0;
function T(e, r, n, i, A, T, I) {
  switch (n) {
    case E:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset) break;
      e = e.buffer;
      r = r.buffer;
    case S:
      if (e.byteLength != r.byteLength || !T(new s(e), new s(r))) break;
      return !0;
    case m:
    case v:
    case O:
      return o(+e, +r);
    case y:
      return e.name == r.name && e.message == r.message;
    case x:
    case k:
      return e == r + "";
    case b:
      var P = h;
    case w:
      var R = i & p;
      if (P || (P = d), e.size != r.size && !R) break;
      var M = I.get(e);
      if (M) return M == r;
      i |= g;
      I.set(e, r);
      var D = a(P(e), P(r), i, A, T, I);
      I.$$delete(e);
      return D;
    case _:
      if (C) return C.call(e) == C.call(r);
  }
  return !1;
}
module.exports = T;