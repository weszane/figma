import i from "../vendor/300823";
import s from "../vendor/776892";
function o(e, r, n, o) {
  var a = !n;
  n || (n = {});
  for (h = -1, d = r.length, void 0; ++h < d;) {
    var h;
    var d;
    var p = r[h];
    var g = o ? o(n[p], e[p], p, n, e) : void 0;
    void 0 === g && (g = e[p]);
    a ? s(n, p, g) : i(n, p, g);
  }
  return n;
}
module.exports = o;