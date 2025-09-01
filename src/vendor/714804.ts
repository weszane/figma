import i from "../vendor/621699";
import s from "../vendor/517958";
var o = Object.prototype.hasOwnProperty;
function a(e) {
  if (!i(e)) return s(e);
  var r = [];
  for (var n in Object(e)) o.call(e, n) && "constructor" != n && r.push(n);
  return r;
}
module.exports = a;