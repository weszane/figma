import i from "../vendor/228314";
import s from "../vendor/915124";
function o(e) {
  return i(function (r, n) {
    var i = -1;
    var o = n.length;
    var a = o > 1 ? n[o - 1] : void 0;
    var h = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && "function" == typeof a ? (o--, a) : void 0, h && s(n[0], n[1], h) && (a = o < 3 ? void 0 : a, o = 1), r = Object(r); ++i < o;) {
      var d = n[i];
      d && e(r, d, i, a);
    }
    return r;
  });
}
module.exports = o;