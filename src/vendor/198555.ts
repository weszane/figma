import i from "../vendor/509185";
import s from "../vendor/621699";
import o from "../vendor/624977";
var a = Object.prototype.hasOwnProperty;
function h(e) {
  if (!i(e)) return o(e);
  var r = s(e);
  var n = [];
  for (var h in e) "constructor" == h && (r || !a.call(e, h)) || n.push(h);
  return n;
}
module.exports = h;