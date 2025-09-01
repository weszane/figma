import i from "../vendor/127375";
import s from "../vendor/378777";
import o from "../vendor/826509";
import a from "../vendor/257816";
import h from "../vendor/91089";
import d from "../vendor/360087";
var p = 200;
function g(e, r, n, g) {
  var m = -1;
  var v = s;
  var y = !0;
  var b = e.length;
  var O = [];
  var x = r.length;
  if (!b) return O;
  n && (r = a(r, h(n)));
  g ? (v = o, y = !1) : r.length >= p && (v = d, y = !1, r = new i(r));
  t: for (; ++m < b;) {
    var w = e[m];
    var k = n?.(w);
    if (w = g || 0 !== w ? w : 0, y && k == k) {
      for (var _ = x; _--;) if (r[_] === k) continue t;
      O.push(w);
    } else v(r, k, g) || O.push(w);
  }
  return O;
}
module.exports = g;