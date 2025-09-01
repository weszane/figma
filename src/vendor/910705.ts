import { A as _$$A } from "../vendor/401440";
import { A as _$$A2 } from "../vendor/559834";
import { A as _$$A3 } from "../vendor/728272";
import { A as _$$A4 } from "../vendor/468999";
var s = _$$A(Object.keys, Object);
var l = Object.prototype.hasOwnProperty;
let o = function (t) {
  if (!_$$A3(t)) return s(t);
  var e = [];
  for (var r in Object(t)) l.call(t, r) && "constructor" != r && e.push(r);
  return e;
};
export let $$c0 = function (t) {
  return _$$A4(t) ? _$$A2(t) : o(t);
};
export const A = $$c0;