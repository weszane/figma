import i from "../vendor/127375";
import s from "../vendor/378777";
import o from "../vendor/826509";
import a from "../vendor/360087";
import h from "../vendor/704193";
import d from "../vendor/514035";
var p = 200;
function g(e, r, n) {
  var g = -1;
  var m = s;
  var v = e.length;
  var y = !0;
  var b = [];
  var O = b;
  if (n) {
    y = !1;
    m = o;
  } else if (v >= p) {
    var x = r ? null : h(e);
    if (x) return d(x);
    y = !1;
    m = a;
    O = new i();
  } else O = r ? [] : b;
  t: for (; ++g < v;) {
    var w = e[g];
    var k = r ? r(w) : w;
    if (w = n || 0 !== w ? w : 0, y && k == k) {
      for (var _ = O.length; _--;) if (O[_] === k) continue t;
      r && O.push(k);
      b.push(w);
    } else m(O, k, n) || (O !== b && O.push(k), b.push(w));
  }
  return b;
}
module.exports = g;