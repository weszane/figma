import i from "../vendor/714804";
import s from "../vendor/189577";
import o from "../vendor/817584";
import a from "../vendor/467957";
import h from "../vendor/969474";
import d from "../vendor/154164";
import p from "../vendor/621699";
import g from "../vendor/579571";
var m = "[object Map]";
var v = "[object Set]";
var y = Object.prototype.hasOwnProperty;
function b(e) {
  if (null == e) return !0;
  if (h(e) && (a(e) || "string" == typeof e || "function" == typeof e.splice || d(e) || g(e) || o(e))) return !e.length;
  var r = s(e);
  if (r == m || r == v) return !e.size;
  if (p(e)) return !i(e).length;
  for (var n in e) if (y.call(e, n)) return !1;
  return !0;
}
module.exports = b;