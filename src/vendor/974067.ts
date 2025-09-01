import i from "../vendor/655405";
import s from "../vendor/31202";
var o = 1;
var a = 2;
function h(e, r, n, h) {
  var d = n.length;
  var p = d;
  var g = !h;
  if (null == e) return !p;
  for (e = Object(e); d--;) {
    var m = n[d];
    if (g && m[2] ? m[1] !== e[m[0]] : !(m[0] in e)) return !1;
  }
  for (; ++d < p;) {
    var v = (m = n[d])[0];
    var y = e[v];
    var b = m[1];
    if (g && m[2]) {
      if (void 0 === y && !(v in e)) return !1;
    } else {
      var O = new i();
      if (h) var x = h(y, b, v, e, r, O);
      if (!(void 0 === x ? s(b, y, o | a, h, O) : x)) return !1;
    }
  }
  return !0;
}
module.exports = h;