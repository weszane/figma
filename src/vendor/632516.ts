import i, { keys } from "../vendor/417477";
var s = function () {
  var e = /[^.]+$/.exec(i && keys && keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function o(e) {
  return !!s && s in e;
}
module.exports = o;