import i from "../vendor/338036";
import s from "../vendor/853531";
import o from "../vendor/422750";
var a = "[object Object]";
var h = Object.prototype;
var d = Function.prototype.toString;
var p = h.hasOwnProperty;
var g = d.call(Object);
function m(e) {
  if (!o(e) || i(e) != a) return !1;
  var r = s(e);
  if (null === r) return !0;
  var n = p.call(r, "constructor") && r.constructor;
  return "function" == typeof n && n instanceof n && d.call(n) == g;
}
module.exports = m;