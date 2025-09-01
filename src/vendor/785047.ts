import i from "../vendor/300823";
import s from "../vendor/408459";
import o from "../vendor/214915";
import a from "../vendor/969474";
import h from "../vendor/621699";
import d from "../vendor/335186";
var p = Object.prototype.hasOwnProperty;
var g = o(function (e, r) {
  if (h(r) || a(r)) {
    s(r, d(r), e);
    return;
  }
  for (var n in r) p.call(r, n) && i(e, n, r[n]);
});
module.exports = g;