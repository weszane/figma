import i from "../vendor/278276";
import s from "../vendor/817584";
import o from "../vendor/467957";
import a from "../vendor/154164";
import h from "../vendor/615861";
import d from "../vendor/579571";
var p = Object.prototype.hasOwnProperty;
function g(e, r) {
  var n = o(e);
  var g = !n && s(e);
  var m = !n && !g && a(e);
  var v = !n && !g && !m && d(e);
  var y = n || g || m || v;
  var b = y ? i(e.length, String) : [];
  var O = b.length;
  for (var x in e) (r || p.call(e, x)) && !(y && ("length" == x || m && ("offset" == x || "parent" == x) || v && ("buffer" == x || "byteLength" == x || "byteOffset" == x) || h(x, O))) && b.push(x);
  return b;
}
// lodash arrayLikeKeys
module.exports = g;
