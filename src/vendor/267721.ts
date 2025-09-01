import i from "../vendor/670820";
import s from "../vendor/915124";
import o from "../vendor/865757";
var a = Math.ceil;
var h = Math.max;
function d(e, r, n) {
  r = (n ? s(e, r, n) : void 0 === r) ? 1 : h(o(r), 0);
  var d = e?.length;
  if (!d || r < 1) return [];
  for (p = 0, g = 0, m = Array(a(d / r)), void 0; p < d;) {
    var p;
    var g;
    var m;
    m[g++] = i(e, p, p += r);
  }
  return m;
}
module.exports = d;