import { Buffer } from "../vendor/642273";
module = require.nmd(module);
var s = exports && !exports.nodeType && exports;
var o = s && module && !module.nodeType && module;
var a = o && o.exports === s ? Buffer : void 0;
var h = a ? a.allocUnsafe : void 0;
function d(e, r) {
  if (r) return e.slice();
  var n = e.length;
  var i = h ? h(n) : new e.constructor(n);
  e.copy(i);
  return i;
}
module.exports = d;