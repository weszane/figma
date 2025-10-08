import i from "../vendor/176206";
import s from "../vendor/257816";
import o from "../vendor/317281";
import a from "../vendor/278276";
import h from "../vendor/599769";
var d = Math.max;
function p(e) {
  if (!(e && e.length)) return [];
  var r = 0;
  e = i(e, function (e) {
    if (h(e)) {
      r = d(e.length, r);
      return !0;
    }
  });
  return a(r, function (r) {
    return s(e, o(r));
  });
}
module.exports = p;
