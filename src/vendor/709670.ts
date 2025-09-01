import i from "../vendor/467957";
import s from "../vendor/168110";
var o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var a = /^\w*$/;
function h(e, r) {
  if (i(e)) return !1;
  var n = typeof e;
  return !!("number" == n || "symbol" == n || "boolean" == n || null == e || s(e)) || a.test(e) || !o.test(e) || null != r && e in Object(r);
}
module.exports = h;