import i from "../vendor/382531";
import s from "../vendor/411638";
import o from "../vendor/240820";
import a from "../vendor/467957";
import h from "../vendor/67771";
function d(e) {
  return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? a(e) ? s(e[0], e[1]) : i(e) : h(e);
}
module.exports = d;