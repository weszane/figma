import { A as _$$A } from "../vendor/520325";
import { A as _$$A2 } from "../vendor/947156";
import { A as _$$A3 } from "../vendor/499896";
import { A as _$$A4 } from "../vendor/471459";
import { A as _$$A5 } from "../vendor/161632";
var s = _$$A(_$$A2, "DataView");
var o = _$$A(_$$A2, "Promise");
var a = _$$A(_$$A2, "Set");
var c = _$$A(_$$A2, "WeakMap");
var d = "[object Map]";
var f = "[object Promise]";
var p = "[object Set]";
var g = "[object WeakMap]";
var m = "[object DataView]";
var b = _$$A5(s);
var y = _$$A5(_$$A3);
var v = _$$A5(o);
var $$A = _$$A5(a);
var x = _$$A5(c);
var N = _$$A4;
(s && N(new s(new ArrayBuffer(1))) != m || _$$A3 && N(new _$$A3()) != d || o && N(o.resolve()) != f || a && N(new a()) != p || c && N(new c()) != g) && (N = function (t) {
  var e = _$$A4(t);
  var r = "[object Object]" == e ? t.constructor : void 0;
  var i = r ? _$$A5(r) : "";
  if (i) switch (i) {
    case b:
      return m;
    case y:
      return d;
    case v:
      return f;
    case $$A:
      return p;
    case x:
      return g;
  }
  return e;
});
export let $$E0 = N;
export const A = $$E0;