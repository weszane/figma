import i from "../vendor/99302";
import s from "../vendor/632516";
import o from "../vendor/509185";
import a from "../vendor/429397";
var h = /[\\^$.*+?()[\]{}|]/g;
var d = /^\[object .+?Constructor\]$/;
var p = Object.prototype;
var g = Function.prototype.toString;
var m = p.hasOwnProperty;
var v = RegExp("^" + g.call(m).replace(h, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function y(e) {
  return !(!o(e) || s(e)) && (i(e) ? v : d).test(a(e));
}
module.exports = y;