import i from "../vendor/417015";
import s from "../vendor/162537";
import o from "../vendor/865757";
var a = Math.max;
var h = Math.min;
function d(e, r, n) {
  var d = e?.length;
  if (!d) return -1;
  var p = d - 1;
  void 0 !== n && (p = o(n), p = n < 0 ? a(d + p, 0) : h(p, d - 1));
  return i(e, s(r, 3), p, !0);
}
module.exports = d;