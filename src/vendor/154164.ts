import { Buffer } from "../vendor/642273";
import s from "../vendor/101691";
module = require.nmd(module);
var o = exports && !exports.nodeType && exports;
var a = o && module && !module.nodeType && module;
var h = a && a.exports === o ? Buffer : void 0;
var d = (h ? h.isBuffer : void 0) || s;
module.exports = d;