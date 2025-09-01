import i from "../vendor/526252";
import s from "../vendor/129959";
function o(e, r, n, a, h) {
  var d = -1;
  var p = e.length;
  for (n || (n = s), h || (h = []); ++d < p;) {
    var g = e[d];
    r > 0 && n(g) ? r > 1 ? o(g, r - 1, n, a, h) : i(h, g) : a || (h[h.length] = g);
  }
  return h;
}
module.exports = o;