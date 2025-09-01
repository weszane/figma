import i from "../vendor/805353";
import s from "../vendor/509185";
var o = "Expected a function";
function a(e, r, n) {
  var a = !0;
  var h = !0;
  if ("function" != typeof e) throw TypeError(o);
  s(n) && (a = "leading" in n ? !!n.leading : a, h = "trailing" in n ? !!n.trailing : h);
  return i(e, r, {
    leading: a,
    maxWait: r,
    trailing: h
  });
}
module.exports = a;