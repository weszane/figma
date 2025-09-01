import { A as _$$A } from "../vendor/947156";
var n = "object" == typeof exports && exports && !exports.nodeType && exports;
var s = n && "object" == typeof module && module && !module.nodeType && module;
var l = s && s.exports === n ? _$$A.Buffer : void 0;
var o = l ? l.allocUnsafe : void 0;
export let $$a0 = function (t, e) {
  if (e) return t.slice();
  var r = t.length;
  var i = o ? o(r) : new t.constructor(r);
  t.copy(i);
  return i;
};
export const A = $$a0;