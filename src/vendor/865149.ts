import i from "../vendor/865757";
var s = "Expected a function";
function o(e, r) {
  var n;
  if ("function" != typeof r) throw TypeError(s);
  e = i(e);
  return function () {
    --e > 0 && (n = r.apply(this, arguments));
    e <= 1 && (r = void 0);
    return n;
  };
}
module.exports = o;