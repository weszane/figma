import { process } from "../vendor/188716";
module = require.nmd(module);
var s = exports && !exports.nodeType && exports;
var o = s && module && !module.nodeType && module;
var a = o && o.exports === s && process;
var h = function () {
  try {
    var e = o && o.require && o.require("util").types;
    if (e) return e;
    return a && a.binding && a.binding("util");
  } catch (e) {}
}();
module.exports = h;