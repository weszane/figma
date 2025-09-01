import { A as _$$A } from "../vendor/947156";
import { A as _$$A2 } from "../vendor/807361";
import { A as _$$A3 } from "../vendor/842922";
import { A as _$$A4 } from "../vendor/161632";
var n = _$$A["__core-js_shared__"];
var s = function () {
  var t = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
var a = /^\[object .+?Constructor\]$/;
var c = Object.prototype;
var u = Function.prototype.toString;
var h = c.hasOwnProperty;
var d = RegExp("^" + u.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
export let $$f0 = function (t, e) {
  var r;
  var n = t?.[e];
  return (r = n, _$$A3(r) && (!s || !(s in r)) && (_$$A2(r) ? d : a).test(_$$A4(r))) ? n : void 0;
};
export const A = $$f0;