import i from "../vendor/687072";
import s from "../vendor/624443";
import o, { resolve } from "../vendor/214272";
import a from "../vendor/280885";
import h from "../vendor/31675";
import d from "../vendor/338036";
import p from "../vendor/429397";
var g = "[object Map]";
var m = "[object Object]";
var v = "[object Promise]";
var y = "[object Set]";
var b = "[object WeakMap]";
var O = "[object DataView]";
var x = p(i);
var w = p(s);
var k = p(o);
var _ = p(a);
var S = p(h);
var E = d;
(i && E(new i(new ArrayBuffer(1))) != O || s && E(new s()) != g || o && E(resolve()) != v || a && E(new a()) != y || h && E(new h()) != b) && (E = function (e) {
  var r = d(e);
  var n = r == m ? e.constructor : void 0;
  var i = n ? p(n) : "";
  if (i) switch (i) {
    case x:
      return O;
    case w:
      return g;
    case k:
      return v;
    case _:
      return y;
    case S:
      return b;
  }
  return r;
});
module.exports = E;