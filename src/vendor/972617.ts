import i from "../vendor/447093";
var s = Math.max;
function o(e, r, n) {
  r = s(void 0 === r ? e.length - 1 : r, 0);
  return function () {
    for (o = arguments, a = -1, h = s(o.length - r, 0), d = Array(h), void 0; ++a < h;) {
      var o;
      var a;
      var h;
      var d;
      d[a] = o[r + a];
    }
    a = -1;
    for (var p = Array(r + 1); ++a < r;) p[a] = o[a];
    p[r] = n(d);
    return i(e, this, p);
  };
}
module.exports = o;