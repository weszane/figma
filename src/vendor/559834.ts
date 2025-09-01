import { A as _$$A } from "../vendor/920725";
import { A as _$$A2 } from "../vendor/5264";
import { A as _$$A3 } from "../vendor/571049";
import { A as _$$A4 } from "../vendor/702318";
import { A as _$$A5 } from "../vendor/768551";
let i = function (t, e) {
  for (r = -1, i = Array(t), void 0; ++r < t;) {
    var r;
    var i;
    i[r] = e(r);
  }
  return i;
};
var c = Object.prototype.hasOwnProperty;
export let $$u0 = function (t, e) {
  var r = _$$A2(t);
  var u = !r && _$$A(t);
  var h = !r && !u && _$$A3(t);
  var d = !r && !u && !h && _$$A5(t);
  var f = r || u || h || d;
  var p = f ? i(t.length, String) : [];
  var g = p.length;
  for (var m in t) (e || c.call(t, m)) && !(f && ("length" == m || h && ("offset" == m || "parent" == m) || d && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || _$$A4(m, g))) && p.push(m);
  return p;
};
export const A = $$u0;