import i from "../vendor/433714";
import s from "../vendor/366110";
import o from "../vendor/221637";
function a(e, r, n) {
  for (a = -1, h = r.length, d = {}, void 0; ++a < h;) {
    var a;
    var h;
    var d;
    var p = r[a];
    var g = i(e, p);
    n(g, p) && s(d, o(p, e), g);
  }
  return d;
}
module.exports = a;