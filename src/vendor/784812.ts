import i from "../vendor/795456";
import s from "../vendor/335186";
function o(e) {
  for (r = s(e), n = r.length, void 0; n--;) {
    var r;
    var n;
    var o = r[n];
    var a = e[o];
    r[n] = [o, a, i(a)];
  }
  return r;
}
module.exports = o;