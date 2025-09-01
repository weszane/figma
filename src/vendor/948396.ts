import { A as _$$A } from "../vendor/443997";
var n = "object" == typeof exports && exports && !exports.nodeType && exports;
var s = n && "object" == typeof module && module && !module.nodeType && module;
var l = s && s.exports === n && _$$A.process;
export let $$o0 = function () {
  try {
    var t = s && s.require && s.require("util").types;
    if (t) return t;
    return l && l.binding && l.binding("util");
  } catch (t) {}
}();
export const A = $$o0;