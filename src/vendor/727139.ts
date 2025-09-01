import i from "../vendor/168110";
function s(e, r, n) {
  for (s = -1, o = e.length, void 0; ++s < o;) {
    var s;
    var o;
    var a = e[s];
    var h = r(a);
    if (null != h && (void 0 === d ? h == h && !i(h) : n(h, d))) {
      var d = h;
      var p = a;
    }
  }
  return p;
}
module.exports = s;