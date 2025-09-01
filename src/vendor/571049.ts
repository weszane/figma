import { A as _$$A } from "../vendor/947156";
var n = "object" == typeof exports && exports && !exports.nodeType && exports;
var s = n && "object" == typeof module && module && !module.nodeType && module;
var l = s && s.exports === n ? _$$A.Buffer : void 0;
export let $$o0 = (l ? l.isBuffer : void 0) || function () {
  return !1;
};
export const A = $$o0;