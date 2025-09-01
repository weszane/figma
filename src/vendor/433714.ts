import i from "../vendor/221637";
import s from "../vendor/983249";
function o(e, r) {
  r = i(r, e);
  for (n = 0, o = r.length, void 0; null != e && n < o;) {
    var n;
    var o;
    e = e[s(r[n++])];
  }
  return n && n == o ? e : void 0;
}
module.exports = o;