import { A as _$$A } from "../vendor/471459";
import { A as _$$A2 } from "../vendor/2793";
import { A as _$$A3 } from "../vendor/687669";
import { A as _$$A4 } from "../vendor/401658";
import { A as _$$A5 } from "../vendor/948396";
var l = {};
l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0;
l["[object Arguments]"] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] = l["[object Map]"] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l["[object Set]"] = l["[object String]"] = l["[object WeakMap]"] = !1;
var c = _$$A5 && _$$A5.isTypedArray;
export let $$u0 = c ? _$$A4(c) : function (t) {
  return _$$A3(t) && _$$A2(t.length) && !!l[_$$A(t)];
};
export const A = $$u0;