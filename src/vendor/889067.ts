import i from "../vendor/782017";
import s from "../vendor/566709";
import o from "../vendor/823453";
import a from "../vendor/842932";
import h from "../vendor/488165";
var d = "[object Boolean]";
var p = "[object Date]";
var g = "[object Map]";
var m = "[object Number]";
var v = "[object RegExp]";
var y = "[object Set]";
var b = "[object String]";
var O = "[object Symbol]";
var x = "[object ArrayBuffer]";
var w = "[object DataView]";
var k = "[object Float32Array]";
var _ = "[object Float64Array]";
var S = "[object Int8Array]";
var E = "[object Int16Array]";
var A = "[object Int32Array]";
var C = "[object Uint8Array]";
var T = "[object Uint8ClampedArray]";
var I = "[object Uint16Array]";
var P = "[object Uint32Array]";
function R(e, r, n) {
  var R = e.constructor;
  switch (r) {
    case x:
      return i(e);
    case d:
    case p:
      return new R(+e);
    case w:
      return s(e, n);
    case k:
    case _:
    case S:
    case E:
    case A:
    case C:
    case T:
    case I:
    case P:
      return h(e, n);
    case g:
      return new R();
    case m:
    case b:
      return new R(e);
    case v:
      return o(e);
    case y:
      return new R();
    case O:
      return a(e);
  }
}
module.exports = R;