import i from "../vendor/173446";
import s from "../vendor/59248";
import o from "../vendor/602385";
var a = RegExp("['\u2019]", "g");
function h(e) {
  return function (r) {
    return i(o(s(r).replace(a, "")), e, "");
  };
}
module.exports = h;