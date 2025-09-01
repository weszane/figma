import i from "../vendor/969474";
function s(e, r) {
  return function (n, s) {
    if (null == n) return n;
    if (!i(n)) return e(n, s);
    for (o = n.length, a = r ? o : -1, h = Object(n), void 0; (r ? a-- : ++a < o) && !1 !== s(h[a], a, h);) {
      var o;
      var a;
      var h;
      ;
    }
    return n;
  };
}
module.exports = s;