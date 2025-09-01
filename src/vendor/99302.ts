import i from "../vendor/338036";
import s from "../vendor/509185";
var o = "[object AsyncFunction]";
var a = "[object Function]";
var h = "[object GeneratorFunction]";
var d = "[object Proxy]";
function p(e) {
  if (!s(e)) return !1;
  var r = i(e);
  return r == a || r == h || r == o || r == d;
}
module.exports = p;