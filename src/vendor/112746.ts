import i from "../vendor/212";
import s from "../vendor/509185";
import o from "../vendor/168110";
var a = 0 / 0;
var h = /^[-+]0x[0-9a-f]+$/i;
var d = /^0b[01]+$/i;
var p = /^0o[0-7]+$/i;
var g = parseInt;
function m(e) {
  if ("number" == typeof e) return e;
  if (o(e)) return a;
  if (s(e)) {
    var r = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = s(r) ? r + "" : r;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = i(e);
  var n = d.test(e);
  return n || p.test(e) ? g(e.slice(2), n ? 2 : 8) : h.test(e) ? a : +e;
}
module.exports = m;