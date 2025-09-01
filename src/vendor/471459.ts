import { A as _$$A } from "../vendor/700272";
var n = Object.prototype;
var s = n.hasOwnProperty;
var l = n.toString;
var o = _$$A ? _$$A.toStringTag : void 0;
let a = function (t) {
  var e = s.call(t, o);
  var r = t[o];
  try {
    t[o] = void 0;
    var i = !0;
  } catch (t) {}
  var n = l.call(t);
  i && (e ? t[o] = r : delete t[o]);
  return n;
};
var c = Object.prototype.toString;
var u = _$$A ? _$$A.toStringTag : void 0;
export let $$h0 = function (t) {
  return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : u && u in Object(t) ? a(t) : c.call(t);
};
export const A = $$h0;