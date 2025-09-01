import i from "../vendor/168110";
var s = 1 / 0;
function o(e) {
  if ("string" == typeof e || i(e)) return e;
  var r = e + "";
  return "0" == r && 1 / e == -s ? "-0" : r;
}
module.exports = o;