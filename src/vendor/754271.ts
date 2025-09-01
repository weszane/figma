import i from "../vendor/390446";
import s from "../vendor/552982";
import o from "../vendor/708996";
import a from "../vendor/533786";
function h(e) {
  return function (r) {
    var n = s(r = a(r)) ? o(r) : void 0;
    var h = n ? n[0] : r.charAt(0);
    var d = n ? i(n, 1).join("") : r.slice(1);
    return h[e]() + d;
  };
}
module.exports = h;