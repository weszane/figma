import i, { prototype } from "../vendor/50613";
import s from "../vendor/257816";
import o from "../vendor/467957";
import a from "../vendor/168110";
var h = 1 / 0;
var d = i ? prototype : void 0;
var p = d ? d.toString : void 0;
function g(e) {
  if ("string" == typeof e) return e;
  if (o(e)) return s(e, g) + "";
  if (a(e)) return p ? p.call(e) : "";
  var r = e + "";
  return "0" == r && 1 / e == -h ? "-0" : r;
}
module.exports = g;