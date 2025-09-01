import i from "../vendor/534285";
import s from "../vendor/330913";
import o from "../vendor/162537";
import a from "../vendor/467957";
function h(e, r) {
  return function (n, h) {
    var d = a(n) ? i : s;
    var p = r ? r() : {};
    return d(n, e, o(h, 2), p);
  };
}
module.exports = h;