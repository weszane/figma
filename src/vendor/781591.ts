import i from "../vendor/257816";
import s from "../vendor/571803";
import o from "../vendor/526247";
import a from "../vendor/221637";
import h from "../vendor/408459";
import d from "../vendor/743998";
import p from "../vendor/267652";
import g from "../vendor/820809";
var m = 1;
var v = 2;
var y = 4;
var b = p(function (e, r) {
  var n = {};
  if (null == e) return n;
  var p = !1;
  r = i(r, function (r) {
    r = a(r, e);
    p || (p = r.length > 1);
    return r;
  });
  h(e, g(e), n);
  p && (n = s(n, m | v | y, d));
  for (var b = r.length; b--;) o(n, r[b]);
  return n;
});
// lodash omit
module.exports = b;
