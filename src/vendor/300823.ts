import i from "../vendor/776892";
import s from "../vendor/416412";
var o = Object.prototype.hasOwnProperty;
function a(e, r, n) {
  var a = e[r];
  o.call(e, r) && s(a, n) && (void 0 !== n || r in e) || i(e, r, n);
}
module.exports = a;