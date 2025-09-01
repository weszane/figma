import { A as _$$A } from "../vendor/559834";
import { A as _$$A2 } from "../vendor/842922";
import { A as _$$A3 } from "../vendor/728272";
import { A as _$$A4 } from "../vendor/468999";
let l = function (t) {
  var e = [];
  if (null != t) for (var r in Object(t)) e.push(r);
  return e;
};
var o = Object.prototype.hasOwnProperty;
let a = function (t) {
  if (!_$$A2(t)) return l(t);
  var e = _$$A3(t);
  var r = [];
  for (var i in t) "constructor" == i && (e || !o.call(t, i)) || r.push(i);
  return r;
};
export let $$u0 = function (t) {
  return _$$A4(t) ? _$$A(t, !0) : a(t);
};
export const A = $$u0;