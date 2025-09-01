import i from "../vendor/367992";
import s from "../vendor/189577";
import o from "../vendor/109665";
import a from "../vendor/805579";
var h = "[object Map]";
var d = "[object Set]";
function p(e) {
  return function (r) {
    var n = s(r);
    return n == h ? o(r) : n == d ? a(r) : i(r, e(r));
  };
}
module.exports = p;