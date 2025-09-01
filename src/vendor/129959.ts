import i, { isConcatSpreadable } from "../vendor/50613";
import s from "../vendor/817584";
import o from "../vendor/467957";
var a = i ? isConcatSpreadable : void 0;
function h(e) {
  return o(e) || s(e) || !!(a && e && e[a]);
}
module.exports = h;